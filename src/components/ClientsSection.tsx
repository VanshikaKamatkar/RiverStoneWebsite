import { motion } from 'framer-motion';
import FluidText from './FluidText';

export default function ClientsSection() {
  const clients = [
    {
      id: 'iit-kgp',
      name: 'IIT Kharagpur',
      logoUrl: '/logos/IIt logo-Photoroom.png',
    },
    {
      id: 'iim-nagpur',
      name: 'IIM Nagpur',
      logoUrl: '/logos/iim_nagpur.svg',
    },
    {
      id: 'vnit-nagpur',
      name: 'VNIT Nagpur',
      logoUrl: '/logos/vnit_nagpur.svg',
    },
    {
      id: 'radisson',
      name: 'Radisson Blu',
      logoUrl: '/logos/radisson_blu.svg',
    },
    {
      id: 'tata-motors',
      name: 'TATA Motors',
      logoUrl: '/logos/tata_motors.svg',
    },
    {
      id: 'mahindra',
      name: 'Mahindra & Mahindra',
      logoUrl: '/logos/mahindra.svg',
    },
    {
      id: 'apex-health',
      name: 'Apex Healthcare',
      logoUrl: '/logos/apex_healthcare.svg',
    },
  ];

  // Double the array for seamless infinite marquee loop
  const marqueeItems = [...clients, ...clients];

  return (
    <section id="clients" className="py-20 md:py-28 bg-[#F5F3F1] border-b border-[#EAE6E2] relative overflow-hidden">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D9F4FF]/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A86B2D]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-14">

        {/* Top Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <span className="text-lg font-bold uppercase tracking-widest text-[#8C5925] font-['Metropolis','Montserrat',sans-serif]">
            <FluidText text="Our Credentials • Worked With" />
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight font-['Metropolis','Montserrat',sans-serif]">
            <FluidText text="Trusted By &nbsp;" /> <span className="text-[#713411]"><FluidText text="Leading Organizations." /></span>
          </h2>

          {/* Thick Gold Underline Accent */}
          <div className="w-16 h-1 bg-[#A86B2D] rounded-full mx-auto shadow-xs" />

          {/* Intro Description */}
          {/* <p className="max-w-3xl mx-auto text-sm sm:text-base text-[#555555] leading-relaxed pt-2">
            We are proud to have supplied and collaborated with businesses, institutions, educational organizations, corporate partners, and events that demand reliability and quality. Our growing network of clients reflects the trust we have earned through consistent service and product excellence.
          </p> */}
        </motion.div>

        {/* Continuous Flowing Infinite Marquee Container */}
        <div className="relative py-4 overflow-hidden w-full">

          {/* Left & Right Soft Blur Faders */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F5F3F1] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F5F3F1] to-transparent z-20 pointer-events-none" />

          {/* Infinite Marquee Track (Flowing Left to Right) */}
          <div className="animate-marquee-flow flex items-center gap-6 sm:gap-8">
            {marqueeItems.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                className="w-44 h-44 sm:w-48 sm:h-48 rounded-[28px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(113,52,17,0.12)] border border-[#EAE6E2]/80 flex items-center justify-center p-6 transition-all duration-300 shrink-0 group cursor-pointer"
              >
                {/* Clean Logo Image Only (Matching Reference Card Image) */}
                <img
                  src={client.logoUrl}
                  alt={`${client.name} Logo`}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Trust Tagline */}
        <div className="text-center pt-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#EAE6E2] text-xs font-semibold text-[#713411] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#A86B2D] animate-ping" />
            <span>Serving Educational Institutions, Corporations & Hospitality Nationwide</span>
          </div>
        </div>

      </div>
    </section>
  );
}
