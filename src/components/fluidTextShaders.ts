export const simulationVertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const simulationFragmentShader = `
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uMouseVelocity;
uniform vec2 uResolution;
uniform float uTime;
uniform bool uAntiGravity;
uniform float uIntensity;

varying vec2 vUv;

void main() {
  vec2 step = 1.0 / uResolution;

  float current = texture2D(uTexture, vUv).r;
  float prev = texture2D(uTexture, vUv).g;

  float top = texture2D(uTexture, vUv + vec2(0.0, step.y)).r;
  float bottom = texture2D(uTexture, vUv - vec2(0.0, step.y)).r;
  float left = texture2D(uTexture, vUv - vec2(step.x, 0.0)).r;
  float right = texture2D(uTexture, vUv + vec2(step.x, 0.0)).r;

  float next = (top + bottom + left + right) * 0.5 - prev;
  next *= 0.96; // damping

  // aspect ratio correction for circular mouse brush
  vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
  float distAspect = distance(vUv * aspect, uMouse * aspect);

  // Apply brush if mouse is on screen
  if (uMouse.x > -0.5 && distAspect < 0.1) {
    next += uMouseVelocity * uIntensity * (1.0 - distAspect / 0.1); 
  }
  
  if (uAntiGravity) {
     // Slight upward drift
     next += texture2D(uTexture, vUv - vec2(0.0, step.y * 3.0)).r * 0.02;
  }

  next = clamp(next, -5.0, 5.0);

  gl_FragColor = vec4(next, current, 0.0, 1.0);
}
`;

export const renderVertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const renderFragmentShader = `
uniform sampler2D uSimulationTexture;
uniform sampler2D uTextTexture;
varying vec2 vUv;

void main() {
  vec4 sim = texture2D(uSimulationTexture, vUv);
  
  // Use simulation R channel to distort UVs
  vec2 distortedUv = vUv + vec2(sim.r * 0.015, sim.r * 0.015);
  
  vec4 textColor = texture2D(uTextTexture, distortedUv);
  
  gl_FragColor = textColor;
}
`;
