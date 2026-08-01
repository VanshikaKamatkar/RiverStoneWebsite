import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import {
  simulationVertexShader,
  simulationFragmentShader,
  renderVertexShader,
  renderFragmentShader,
} from './fluidTextShaders';

interface FluidImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  intensity?: number;
  antiGravity?: boolean;
}

export default function FluidImage({
  src,
  alt,
  className = '',
  intensity = 1.0,
  antiGravity = false,
  ...props
}: FluidImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const fallbackRef = useRef<HTMLImageElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [isRendererReady, setIsRendererReady] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '200px' }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !webglSupported || !src || !isInView) {
      setIsRendererReady(false);
      return;
    }
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    } catch {
      setWebglSupported(false);
      return;
    }
    
    const dpr = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(dpr);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'none';
    container.appendChild(renderer.domElement);

    const sceneSim = new THREE.Scene();
    const sceneRender = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const rtOpts: THREE.RenderTargetOptions = {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      depthBuffer: false,
      stencilBuffer: false,
    };
    
    let rtA = new THREE.WebGLRenderTarget(1, 1, rtOpts);
    let rtB = new THREE.WebGLRenderTarget(1, 1, rtOpts);

    const padding = 30;

    const simUniforms = {
      uTexture: { value: rtA.texture },
      uMouse: { value: new THREE.Vector2(-1, -1) },
      uMouseVelocity: { value: 0.0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      uAntiGravity: { value: antiGravity },
      uIntensity: { value: intensity }
    };

    const simMaterial = new THREE.ShaderMaterial({
      vertexShader: simulationVertexShader,
      fragmentShader: simulationFragmentShader,
      uniforms: simUniforms,
    });

    const simMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), simMaterial);
    sceneSim.add(simMesh);

    const renderUniforms = {
      uSimulationTexture: { value: rtA.texture },
      uTextTexture: { value: new THREE.Texture() },
    };

    const renderMaterial = new THREE.ShaderMaterial({
      vertexShader: renderVertexShader,
      fragmentShader: renderFragmentShader,
      uniforms: renderUniforms,
      transparent: true,
    });

    const renderMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), renderMaterial);
    sceneRender.add(renderMesh);

    let texture: THREE.Texture;
    
    new THREE.TextureLoader().load(src, (tex) => {
       const processImageTexture = (w: number, h: number) => {
          if (!w || !h) return;
          const canvas = document.createElement('canvas');
          canvas.width = (w + padding * 2) * dpr;
          canvas.height = (h + padding * 2) * dpr;
          const ctx = canvas.getContext('2d');
          if (!ctx) return;
          
          ctx.scale(dpr, dpr);
          ctx.clearRect(0, 0, w + padding * 2, h + padding * 2);
          
          // Draw the loaded image in the center, mimicking object-fit: contain if necessary
          // But since the wrapper matches the image dimensions exactly due to the fallback <img>, 
          // we can just draw it to fill the exact width and height.
          ctx.drawImage(tex.image, padding, padding, w, h);
          
          const newTex = new THREE.CanvasTexture(canvas);
          newTex.needsUpdate = true;
          if (texture) texture.dispose();
          texture = newTex;
          renderUniforms.uTextTexture.value = texture;
       };
       
       if (container.clientWidth > 0) {
           processImageTexture(container.clientWidth, container.clientHeight);
       }
       
       const resizeObserver = new ResizeObserver((entries) => {
         for (let entry of entries) {
           const { width: w, height: h } = entry.contentRect;
           if (w === 0 || h === 0) continue;
           
           renderer.setSize(w + padding * 2, h + padding * 2, false);
           
           renderer.domElement.style.position = 'absolute';
           renderer.domElement.style.left = `-${padding}px`;
           renderer.domElement.style.top = `-${padding}px`;
           renderer.domElement.style.width = `${w + padding * 2}px`;
           renderer.domElement.style.height = `${h + padding * 2}px`;
           
           rtA.setSize((w + padding * 2) * dpr, (h + padding * 2) * dpr);
           rtB.setSize((w + padding * 2) * dpr, (h + padding * 2) * dpr);
           simUniforms.uResolution.value.set((w + padding * 2) * dpr, (h + padding * 2) * dpr);
           
           processImageTexture(w, h);
         }
       });
       
       resizeObserver.observe(container);
       (container as any)._resizeObserver = resizeObserver;
       
       setIsRendererReady(true);
    });

    let frameId: number;
    let time = 0;
    let targetMouse = new THREE.Vector2(-1, -1);
    let lastMouse = new THREE.Vector2(-1, -1);
    let mouseVelocity = 0;

    const render = () => {
      time += 0.016;
      
      if (targetMouse.x !== -1) {
         const dist = lastMouse.distanceTo(targetMouse);
         mouseVelocity = Math.min(dist * 5.0, 1.0); 
         if (lastMouse.x === -1) mouseVelocity = 0; 
         lastMouse.copy(targetMouse);
      } else {
         mouseVelocity *= 0.9;
      }
      
      simUniforms.uMouse.value.copy(targetMouse);
      simUniforms.uMouseVelocity.value = mouseVelocity;
      simUniforms.uTime.value = time;
      simUniforms.uAntiGravity.value = antiGravity;
      simUniforms.uIntensity.value = intensity;

      renderer.setRenderTarget(rtB);
      renderer.render(sceneSim, camera);
      
      const temp = rtA;
      rtA = rtB;
      rtB = temp;
      
      simUniforms.uTexture.value = rtA.texture;
      renderUniforms.uSimulationTexture.value = rtA.texture;

      renderer.setRenderTarget(null);
      renderer.render(sceneRender, camera);
      
      targetMouse.set(-1, -1); 
      frameId = requestAnimationFrame(render);
    };
    render();

    const onMouseMove = (e: Event) => {
      const rect = container.getBoundingClientRect();
      let clientX, clientY;
      if (window.TouchEvent && e instanceof TouchEvent) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        const mouseEvent = e as MouseEvent;
        clientX = mouseEvent.clientX;
        clientY = mouseEvent.clientY;
      }
      
      const x = (clientX - rect.left + padding) / (rect.width + padding * 2);
      const y = 1.0 - ((clientY - rect.top + padding) / (rect.height + padding * 2));
      
      targetMouse.set(x, y);
    };
    
    const onMouseLeave = () => {
      targetMouse.set(-1, -1);
      lastMouse.set(-1, -1);
      mouseVelocity = 0;
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('touchmove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(frameId);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('touchmove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
      
      if ((container as any)._resizeObserver) {
          (container as any)._resizeObserver.disconnect();
      }
      
      renderer.dispose();
      rtA.dispose();
      rtB.dispose();
      if (texture) texture.dispose();
      simMaterial.dispose();
      renderMaterial.dispose();
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      setIsRendererReady(false);
    };
  }, [src, intensity, antiGravity, prefersReducedMotion, webglSupported, isInView]);

  return (
    <div 
      className={`relative inline-block`} 
      style={{ overflow: 'visible', verticalAlign: 'bottom' }}
    >
      <div 
        ref={containerRef} 
        className="absolute inset-0 z-10 pointer-events-auto block"
        style={{ width: '100%', height: '100%', display: (prefersReducedMotion || !webglSupported) ? 'none' : 'block' }}
      />
      <img 
        ref={fallbackRef}
        src={src}
        alt={alt}
        className={`${prefersReducedMotion || !webglSupported || !isRendererReady ? "" : "opacity-0"} ${className}`} 
        style={{ pointerEvents: 'none', display: 'block' }}
        aria-hidden={!prefersReducedMotion && webglSupported && isRendererReady}
        {...props}
      />
      {(!prefersReducedMotion && webglSupported && isRendererReady) && (
        <span className="sr-only">{alt}</span>
      )}
    </div>
  );
}
