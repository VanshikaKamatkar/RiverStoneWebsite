import { motion } from 'framer-motion';
import { User, Calendar, Award, Building2 } from 'lucide-react';
import FluidText from './FluidText';

export default function FounderSection() {
  return (
    <section id="founder" className="py-20 md:py-28 bg-[#FCFAF7] border-b border-[#EAE6E2] relative overflow-hidden">
      {/* Background Ambient Accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#A86B2D]/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#D9F4FF]/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">

        {/* Top Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight font-['Metropolis','Montserrat',sans-serif]">
            <FluidText text="About The &nbsp;" /> <span className="text-[#713411]"><FluidText text="Founder" /></span>
          </h2>
          {/* Thick Gold Underline Accent */}
          <div className="w-16 h-1 bg-[#A86B2D] rounded-full mx-auto shadow-xs" />
        </motion.div>

        {/* Main 2-Column Grid (Left: Copy & Quote | Right: Founder Image Placeholder) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

          {/* Left Column: Text & Quote Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F3F1] border border-[#EAE6E2] text-xs font-bold uppercase tracking-widest text-[#8C5925] shadow-xs w-fit">
              <Calendar className="w-3.5 h-3.5" />
              <span>Estd. 2023 • Sindhu Beverages</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-[1.18] font-['Metropolis','Montserrat',sans-serif]">
              <FluidText text="Building More Than" /> <br />
              <span className="text-[#713411]"><FluidText text="A Beverage Brand." /></span>
            </h3>

            <p className="text-base sm:text-lg font-medium text-[#111111] leading-relaxed">
              <span className="font-bold text-[#713411]">RiverStone®</span> was founded with a simple vision in <span className="text-[#713411] font-bold">2023</span>, to create a packaged drinking water brand that people could trust without hesitation.
            </p>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
              Under the leadership of Sindhu Beverages, the focus has always remained on quality, transparency, and long-term relationships. Every decision, from sourcing to production and distribution, is guided by a commitment to delivering excellence.
            </p>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
              Today, RiverStone® continues to expand its footprint while staying true to the values on which it was built: <span className="text-[#111111] font-semibold">trust, consistency, and responsibility</span>.
            </p>


          </motion.div>

          {/* Right Column: Founder's Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full bg-white rounded-[32px] border-2 border-[#EAE6E2] p-8 shadow-xl shadow-[#713411]/5 flex flex-col justify-between items-center text-center relative overflow-hidden group hover:border-[#A86B2D]/40 transition-all duration-300 min-h-[380px] sm:min-h-[440px]">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#D9F4FF]/70 rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#A86B2D]/5 rounded-tr-full pointer-events-none" />

              <div className="w-full flex items-center justify-between relative z-10 border-b border-[#EAE6E2] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C5925] flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  Leadership Portrait
                </span>
                <span className="text-[10px] font-semibold text-[#713411] bg-[#FCFAF7] px-2.5 py-1 rounded-full border border-[#EAE6E2]">
                  Photo Placeholder
                </span>
              </div>

              <div className="my-auto py-8 relative z-10 flex flex-col items-center space-y-4">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#FCFAF7] border-2 border-dashed border-[#A86B2D]/40 flex items-center justify-center text-[#713411] shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <User className="w-16 h-16 text-[#8C5925]/60" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#111111] font-['Metropolis','Montserrat',sans-serif]">
                    Founder & Managing Director
                  </h3>
                  <p className="text-xs text-[#666666]">
                    Sindhu Beverages • RiverStone®
                  </p>
                </div>
              </div>

              <div className="w-full pt-4 relative z-10 border-t border-[#EAE6E2]">
                <div className="p-3.5 rounded-2xl bg-[#FCFAF7] border border-[#EAE6E2] flex items-center justify-between text-xs text-[#713411] font-semibold">
                  <span>Founder Image Placeholder</span>
                  <Award className="w-4 h-4 text-[#8C5925]" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
