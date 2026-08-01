import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Building2, Mail, Phone, Globe, Share2 } from 'lucide-react';
import FluidText from './FluidText';

export default function Hero() {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [showHeroContent, setShowHeroContent] = useState(false);

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
  };

  // Timer: After video ends, display solo bear image for 2.5s before revealing hero text content
  useEffect(() => {
    if (isVideoEnded) {
      const timer = setTimeout(() => {
        setShowHeroContent(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isVideoEnded]);

  return (
    <section id="home" className="relative pt-28 pb-0 md:pt-36 max-w-7xl mx-auto w-full min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-[#D9F4FF]/70 via-[#FCFAF7] to-[#A86B2D]/15 rounded-full blur-3xl pointer-events-none z-0" />

      {/* INTRO HERO VIDEO: True Fullscreen Edge-to-Edge */}
      <AnimatePresence>
        {!isVideoEnded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 w-screen h-screen z-40 bg-[#18120F] flex items-center justify-center overflow-hidden"
          >
            <video
              src="/Hero_video.mp4"
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* BEAR MASCOT IMAGE: Bottom Flush with 40% Opacity (Height Reduced by 2%) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isVideoEnded ? 0.4 : 0, scale: isVideoEnded ? 1 : 0.95 }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl sm:max-w-4xl lg:max-w-[1420px] flex items-end justify-center pointer-events-none z-0"
      >
        {/* Soft Glowing Background Aura directly behind solo bear */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full bg-gradient-to-tr from-[#D9F4FF] via-[#A86B2D]/20 to-[#713411]/15 blur-3xl animate-aura z-0" />

        <img
          src="/riverstone_bear_mascot.png"
          alt="RiverStone Bear Mascot"
          className="w-full h-auto max-h-[93vh] sm:max-h-[100vh] lg:max-h-[104vh] object-contain object-bottom scale-113 sm:scale-118 lg:scale-123 drop-shadow-[0_25px_50px_rgba(113,52,17,0.16)]"
        />
      </motion.div>

      {/* Main 3-Column Content Layout (Left & Right text framed around the bear) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center relative z-10 pt-4 pb-12">
        
        {/* LEFT COLUMN: Sub-brand & Big Brand Title */}
        <motion.div 
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: showHeroContent ? 1 : 0, x: showHeroContent ? 0 : -35 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 space-y-6 text-left bg-white/40 backdrop-blur-xs lg:bg-transparent lg:backdrop-blur-none p-4 lg:p-0 rounded-3xl"
        >
          {/* Sub-brand Credit */}
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A86B2D] flex items-center gap-1.5 font-['Metropolis','Montserrat',sans-serif]">
              <Building2 className="w-3.5 h-3.5" />
              A Brand by Sindhu Beverages
            </span>
          </div>

          {/* Main Title Stack */}
          <div className="space-y-1">
            <h2 className="text-xs sm:text-sm font-bold text-[#713411] uppercase tracking-wider">
              <FluidText text="Premium Packaged Hydration" />
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight leading-[1.05] font-['Metropolis','Montserrat',sans-serif]">
              <img src="/RiverStone® Black.png" alt="RiverStone®" className="h-12 sm:h-16 lg:h-20 w-auto inline-block align-baseline mb-1 object-contain" /> <br />
              <span className="text-[#713411]"><FluidText text="Packaged" /></span> <br />
              <span className="text-[#713411]"><FluidText text="Drinking" /></span> <br />
              <span className="text-[#A86B2D]"><FluidText text="Water" /></span>
            </h1>
          </div>

          {/* Social / Contact Connect Bar */}
          <div className="pt-6 hidden sm:flex items-center gap-4">
            <span className="text-xs font-semibold text-[#888888] uppercase tracking-widest">Connect</span>
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="w-9 h-9 rounded-full bg-white border border-[#EAE6E2] flex items-center justify-center text-[#713411] hover:bg-[#713411] hover:text-white transition-all duration-300 shadow-xs"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </Link>
              <a
                href="tel:+916399753997"
                className="w-9 h-9 rounded-full bg-white border border-[#EAE6E2] flex items-center justify-center text-[#713411] hover:bg-[#713411] hover:text-white transition-all duration-300 shadow-xs"
                title="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="#presence"
                className="w-9 h-9 rounded-full bg-white border border-[#EAE6E2] flex items-center justify-center text-[#713411] hover:bg-[#713411] hover:text-white transition-all duration-300 shadow-xs"
                title="Global Presence"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#share"
                className="w-9 h-9 rounded-full bg-white border border-[#EAE6E2] flex items-center justify-center text-[#713411] hover:bg-[#713411] hover:text-white transition-all duration-300 shadow-xs"
                title="Share"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* CENTER COLUMN: Spacer column to highlight background bear mascot clearly */}
        <div className="lg:col-span-4 hidden lg:block pointer-events-none h-96" />

        {/* RIGHT COLUMN: Screenshot Pill Badge, Sub-headline, Body Copy & CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: showHeroContent ? 1 : 0, x: showHeroContent ? 0 : 35 }}
          transition={{ duration: 0.9, delay: showHeroContent ? 0.15 : 0, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 space-y-6 text-left bg-white/40 backdrop-blur-xs lg:bg-transparent lg:backdrop-blur-none p-4 lg:p-0 rounded-3xl"
        >
          {/* Screenshot Match Pill Badge */}
          <div>
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-[#EAE6E2] shadow-xs hover:border-[#A86B2D]/40 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-[#713411]" />
              <span className="text-xs sm:text-sm font-semibold text-[#713411] tracking-wide font-['Metropolis','Montserrat',sans-serif]">
                Purity • Precision • Quality
              </span>
            </div>
          </div>

          {/* Main Sub-headline */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#888888]">
              <FluidText text="Statement of Purpose" />
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-[1.12] font-['Metropolis','Montserrat',sans-serif]">
              <FluidText text="Not All Water" /> <br />
              <span className="text-[#713411]"><FluidText text="Is Made For Everyone." /></span>
            </h3>
          </div>

          {/* Body Copy */}
          <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
            <span className="font-bold text-[#713411]">RiverStone®</span> combines purity, consistency, and reliability in every bottle, whether you’re at work, on the road, at an event, or chasing your next goal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="#products"
              className="px-8 py-3.5 rounded-full font-semibold text-sm bg-[#713411] text-white hover:bg-[#A86B2D] transition-all duration-300 shadow-md shadow-[#713411]/20 hover:shadow-lg hover:shadow-[#A86B2D]/25 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <Link
              to="/contact#become-distributor"
              className="px-8 py-3.5 rounded-full font-semibold text-sm bg-white/90 backdrop-blur-md text-[#713411] border border-[#EAE6E2] hover:border-[#713411] hover:bg-[#FCFAF7] transition-all duration-300 shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Become a Distributor</span>
            </Link>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
