import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Building2, Mail, Phone, Globe, Share2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 sm:px-8 max-w-7xl mx-auto w-full min-h-[85vh] flex flex-col justify-center overflow-hidden">
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-[#D9F4FF]/70 via-[#FCFAF7] to-[#A86B2D]/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Main 3-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center relative">
        
        {/* LEFT COLUMN: Sub-brand & Big Brand Title */}
        <motion.div 
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 space-y-6 text-left z-20"
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
              Premium Packaged Hydration
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight leading-[1.05] font-['Metropolis','Montserrat',sans-serif]">
              RiverStone® <br />
              <span className="text-[#713411]">Packaged Drinking</span> <br />
              <span className="text-[#A86B2D]">Water</span>
            </h1>
          </div>

          {/* Bottom Left Vertical Social / Contact Bar */}
          <div className="pt-8 hidden sm:flex items-center gap-4">
            <span className="text-xs font-semibold text-[#888888] uppercase tracking-widest">Connect</span>
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="w-9 h-9 rounded-full bg-white border border-[#EAE6E2] flex items-center justify-center text-[#713411] hover:bg-[#713411] hover:text-white transition-all duration-300 shadow-xs"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+919000000000"
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

        {/* CENTER COLUMN: RiverStone Bear Mascot Cutout & Soft Background Halo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="lg:col-span-4 flex flex-col items-center justify-center relative my-4 lg:my-0 z-10"
        >
          {/* Soft Glowing Aura directly behind the transparent mascot cutout */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[450px] sm:h-[450px] rounded-full bg-gradient-to-tr from-[#D9F4FF] via-[#A86B2D]/20 to-[#713411]/15 blur-3xl animate-aura -z-10 opacity-80" />

          {/* Mascot Image Cutout Container */}
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl flex items-center justify-center group">
            <img
              src="/riverstone_bear_mascot.png"
              alt="MR. STONE RiverStone Bear Mascot holding RiverStone Packaged Drinking Water bottle"
              className="w-full h-auto max-h-[580px] sm:max-h-[650px] lg:max-h-[720px] object-contain drop-shadow-[0_20px_45px_rgba(113,52,17,0.18)] transition-transform duration-500 group-hover:scale-105"
            />

            {/* Subtle floating particles */}
            <div className="absolute top-12 right-2 w-6 h-6 rounded-full bg-[#D9F4FF] blur-xs animate-pulse-glow" />
            <div className="absolute bottom-20 left-2 w-8 h-8 rounded-full bg-[#A86B2D]/20 blur-xs animate-pulse-glow" />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Screenshot Pill Badge, Sub-headline, Body Copy & CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-4 space-y-6 text-left z-20"
        >
          {/* Screenshot Match Pill Badge */}
          <div>
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#F5F3F1] border border-[#EAE6E2] shadow-xs hover:border-[#A86B2D]/40 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-[#713411]" />
              <span className="text-xs sm:text-sm font-semibold text-[#713411] tracking-wide font-['Metropolis','Montserrat',sans-serif]">
                Purity • Precision • Quality
              </span>
            </div>
          </div>

          {/* Main Sub-headline */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#888888]">
              Statement of Purpose
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-[1.12] font-['Metropolis','Montserrat',sans-serif]">
              Not All Water <br />
              <span className="text-[#713411]">Is Made For Everyone.</span>
            </h3>
          </div>

          {/* Body Copy */}
          <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
            RiverStone® combines purity, consistency, and reliability in every bottle, whether you’re at work, on the road, at an event, or chasing your next goal.
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
            <a
              href="#become-distributor"
              className="px-8 py-3.5 rounded-full font-semibold text-sm bg-white text-[#713411] border border-[#EAE6E2] hover:border-[#713411] hover:bg-[#FCFAF7] transition-all duration-300 shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Become a Distributor</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
