import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import FluidText from './FluidText';
import FluidImage from './FluidImage';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F3F1] border-y border-[#EAE6E2] relative overflow-hidden">
      {/* Background Soft Ambient Accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#D9F4FF]/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#A86B2D]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">

        {/* Top Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight font-['Metropolis','Montserrat',sans-serif] flex items-center justify-center gap-3 flex-wrap">
            <FluidText text="About" /> <FluidImage src="/logo.png" alt="RiverStone®" className="h-14 sm:h-16 md:h-20 lg:h-[88px] w-auto inline-block align-baseline object-contain translate-y-1" />
          </h2>
          {/* Thick Gold Underline Accent */}
          <div className="w-16 h-1 bg-[#A86B2D] rounded-full mx-auto shadow-xs" />
        </motion.div>

        {/* Main Grid Layout (Image-free frame on left + Content on right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

          {/* Left Column: Brand Feature Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full bg-white rounded-[24px] border-2 border-[#EAE6E2] p-6 shadow-xl shadow-[#713411]/5 flex flex-col justify-between relative overflow-hidden group hover:border-[#A86B2D]/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9F4FF]/60 rounded-bl-full pointer-events-none" />

              <div className="space-y-3 relative z-10">
                <FluidImage src="/logo.png" alt="RiverStone Logo" className="h-12 w-auto object-contain object-left block" />

                <div className="h-px bg-[#EAE6E2]" />

                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#666666]">
                    Brand Overview
                  </h3>

                  <div className="space-y-2">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FCFAF7] border border-[#EAE6E2]">
                      <MapPin className="w-5 h-5 text-[#713411] shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-bold text-[#111111]">Headquartered in Nagpur</h5>
                        <p className="text-xs text-[#666666]">Maharashtra, India</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FCFAF7] border border-[#EAE6E2]">
                      <ShieldCheck className="w-5 h-5 text-[#713411] shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-bold text-[#111111]">Strict Quality Standards</h5>
                        <p className="text-xs text-[#666666]">Purity, Safety & Consistency</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FCFAF7] border border-[#EAE6E2]">
                      <Award className="w-5 h-5 text-[#8C5925] shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-bold text-[#111111]">Trusted Choice</h5>
                        <p className="text-xs text-[#666666]">Institutions, Events & Homes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 relative z-10">
                <div className="p-3 rounded-xl bg-[#FCFAF7] border border-[#EAE6E2] flex items-center justify-between text-xs text-[#713411] font-semibold">
                  <span>Certified Packaged Water</span>
                  <CheckCircle2 className="w-4 h-4 text-[#8C5925]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Main Text Content & Belief Highlight Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left"
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-[1.18] font-['Metropolis','Montserrat',sans-serif]">
              <FluidText text="Built in Nagpur." /> <br />
              <span className="text-[#713411]"><FluidText text="Built for Everywhere." /></span>
            </h3>

            <p className="text-base sm:text-lg font-medium text-[#111111] leading-relaxed">
              <span className="font-bold text-[#713411]">RiverStone®</span> is a premium packaged drinking water brand by <span className="font-bold text-[#111111]">Sindhu Beverages</span>, headquartered in Nagpur, Maharashtra.
            </p>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
              Every RiverStone® bottle is produced under strict quality standards to ensure purity, safety, and consistency. From institutions and corporate organizations to retailers, distributors, events, and everyday consumers, RiverStone® is trusted by those who expect more from the brands they choose.
            </p>


          </motion.div>

        </div>

      </div>
    </section>
  );
}
