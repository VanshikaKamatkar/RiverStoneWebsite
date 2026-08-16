import { motion } from 'framer-motion';
import { MapPin, Globe, Sparkles, Compass, Building2 } from 'lucide-react';
import FluidText from './FluidText';
import FluidImage from './FluidImage';

export default function PresenceSection() {
  const cities = [
    { name: 'Nagpur', isHQ: true, desc: 'Central Headquarters & Primary Hub' },
    { name: 'Wardha', isHQ: false, desc: 'Active Regional Network' },
    { name: 'Bhandara', isHQ: false, desc: 'Active Regional Network' },
    { name: 'Amravati', isHQ: false, desc: 'Active Regional Network' },
    { name: 'Chandrapur', isHQ: false, desc: 'Active Regional Network' },
  ];

  return (
    <section id="presence" className="py-20 md:py-28 bg-[#FCFAF7] border-b border-[#EAE6E2] relative overflow-hidden">
      {/* Background Soft Glow Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D9F4FF]/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#A86B2D]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

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
            <FluidText text="Distribution &nbsp;" /> <span className="text-[#713411]"><FluidText text="Presence" /></span>
          </h2>
          {/* Thick Gold Underline Accent */}
          <div className="w-16 h-1 bg-[#A86B2D] rounded-full mx-auto shadow-xs" />
        </motion.div>

        {/* Main 2-Column Grid (Left: Content & Cities | Right: Presence Map Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

          {/* Left Column: Text Content & Active Cities Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden lg:flex lg:col-span-7 flex-col justify-center space-y-6 text-left"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F3F1] border border-[#EAE6E2] text-xs font-bold uppercase tracking-widest text-[#8C5925] shadow-xs w-fit">
              <Globe className="w-3.5 h-3.5" />
              <span>Level 1 - Vidarbha</span>
            </div>

            {/* Headline */}
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-[1.18] font-['Metropolis','Montserrat',sans-serif]">
              <FluidText text="Growing Across Maharashtra." /> <br />
              <span className="text-[#713411]"><FluidText text="Expanding Beyond." /></span>
            </h3>

            {/* Intro Body */}
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
              From our home in <span className="text-[#111111] font-semibold">Nagpur</span> to multiple cities and business locations, <span className="font-semibold text-[#111111]">RiverStone®</span> continues to build a strong distribution network that delivers quality hydration wherever it is needed.
            </p>

            {/* Active Cities Pills Grid */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#666666]">
                Currently Available In:
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cities.map((city) => (
                  <div
                    key={city.name}
                    className={`p-3.5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${city.isHQ
                      ? 'bg-[#713411] text-white border-[#713411] shadow-md shadow-[#713411]/20 scale-105'
                      : 'bg-white text-[#111111] border-[#EAE6E2] hover:border-[#A86B2D]'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <MapPin className={`w-4 h-4 ${city.isHQ ? 'text-[#D9F4FF]' : 'text-[#8C5925]'}`} />
                      {city.isHQ && (
                        <span className="text-[10px] font-extrabold uppercase bg-white/20 px-2 py-0.5 rounded-full text-white">
                          HQ
                        </span>
                      )}
                    </div>
                    <div className="mt-2">
                      <h3 className="text-sm font-bold font-['Metropolis','Montserrat',sans-serif]">
                        {city.name}
                      </h3>
                      <p className={`text-[11px] ${city.isHQ ? 'text-white/80' : 'text-[#666666]'}`}>
                        {city.isHQ ? 'HeadQuarter' : 'Distribution Network'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expansion Teaser Note */}
            <div className="p-3.5 rounded-2xl bg-white border border-[#EAE6E2] inline-flex items-center gap-2.5 text-xs font-semibold text-[#713411] w-fit shadow-xs">
              <Sparkles className="w-4 h-4 text-[#8C5925] animate-spin" style={{ animationDuration: '6s' }} />
              <span>And wait…. we are coming to your city too!</span>
            </div>

            {/* Gold Left-Bordered Mission Quote Box */}

          </motion.div>

          {/* Right Column: User Presence Map Image Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="w-full bg-white rounded-[32px] border-2 border-[#EAE6E2] p-6 sm:p-8 shadow-xl shadow-[#713411]/5 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:border-[#A86B2D]/40 transition-all duration-300 min-h-[420px] sm:min-h-[480px]">

              {/* Official Presence Map Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <FluidImage
                  src="/presence_map.jpeg"
                  alt="RiverStone Maharashtra Presence Map"
                  className="w-full h-full max-h-[480px] object-contain drop-shadow-md group-hover:scale-[1.02] transition-transform duration-500 block"
                />
              </div>
            </div>
            {/* Mobile-only Expansion Teaser Note below the map card */}
            <div className="mt-6 flex lg:hidden justify-center w-full">
              <div className="p-3.5 rounded-2xl bg-white border border-[#EAE6E2] inline-flex items-center gap-2.5 text-xs font-semibold text-[#713411] shadow-xs">
                <Sparkles className="w-4 h-4 text-[#8C5925] animate-spin" style={{ animationDuration: '6s' }} />
                <span>And wait…. we are coming to your city too!</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
