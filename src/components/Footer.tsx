import { MapPin, Mail, Phone, Building2 } from 'lucide-react';

import FluidImage from './FluidImage';

export default function Footer() {
  return (
    <footer className="w-full relative z-30 block bg-[#18120F] text-white border-t border-[#713411]/40 pt-10 pb-8 sm:pt-12 sm:pb-10 overflow-hidden font-['Metropolis','Montserrat',sans-serif]">
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#A86B2D]/12 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#D9F4FF]/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full space-y-8 relative z-10">
        
        {/* 3-Column 3/4th Height Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-8 border-b border-white/15 items-start">
          
          {/* LEFT COLUMN: Logo, Tagline & Social Handles */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="space-y-1.5">
              <div className="flex items-center">
                <FluidImage
                  src="/logo_white.png"
                  alt="RiverStone Logo"
                  className="h-14 sm:h-16 lg:h-18 w-auto object-contain drop-shadow-md block"
                />
              </div>
              <p className="text-xs font-bold text-[#A86B2D] uppercase tracking-widest pt-0.5">
                A Brand By Sindhu Beverages
              </p>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed max-w-sm">
              Premium Packaged Drinking Water crafted for people who move with purpose. Pure, consistent, and reliable in every bottle.
            </p>

            {/* Social Media Handles */}
            <div className="flex items-center gap-3 pt-1">
              {/* Instagram */}
              <a
                href="#instagram"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#A86B2D] hover:border-[#A86B2D] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#linkedin"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#A86B2D] hover:border-[#A86B2D] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#facebook"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#A86B2D] hover:border-[#A86B2D] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#twitter"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#A86B2D] hover:border-[#A86B2D] transition-all duration-300"
                aria-label="Twitter X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* CENTER COLUMN: Quick Links */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="space-y-1">
              <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider font-['Metropolis','Montserrat',sans-serif]">
                Quick Links
              </h4>
              <div className="w-10 h-0.5 bg-[#A86B2D] rounded-full" />
            </div>

            <ul className="grid grid-cols-2 gap-y-3 text-xs sm:text-sm text-gray-200 font-semibold">
              <li>
                <a href="#home" className="hover:text-[#A86B2D] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A86B2D]" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#A86B2D] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A86B2D]" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#A86B2D] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A86B2D]" />
                  Products
                </a>
              </li>
              <li>
                <a href="#presence" className="hover:text-[#A86B2D] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A86B2D]" />
                  Presence
                </a>
              </li>
              <li>
                <a href="#become-distributor" className="hover:text-[#A86B2D] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A86B2D]" />
                  Distributorship
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#A86B2D] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A86B2D]" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT COLUMN: Get In Touch & Contact Details */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="space-y-1">
              <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider font-['Metropolis','Montserrat',sans-serif]">
                Get In Touch
              </h4>
              <div className="w-10 h-0.5 bg-[#A86B2D] rounded-full" />
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-gray-200 font-medium">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#A86B2D]/20 border border-[#A86B2D]/30 flex items-center justify-center text-[#A86B2D] shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-white text-xs sm:text-sm">Sindhu Beverages</h5>
                  <p className="text-xs text-gray-300">Headquarters</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#A86B2D]/20 border border-[#A86B2D]/30 flex items-center justify-center text-[#A86B2D] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  Nagpur, Maharashtra – 441102, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#A86B2D]/20 border border-[#A86B2D]/30 flex items-center justify-center text-[#A86B2D] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:info@riverstonehydration.com" className="text-xs sm:text-sm text-gray-200 hover:text-[#A86B2D] transition-colors">
                  info@riverstonehydration.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#A86B2D]/20 border border-[#A86B2D]/30 flex items-center justify-center text-[#A86B2D] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+916399753997" className="text-xs sm:text-sm font-bold text-white hover:text-[#A86B2D] transition-colors">
                  +91 63997 53997
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR: Footer Tagline & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-300 pt-1">
          <p className="text-xs sm:text-sm font-bold text-[#A86B2D] italic font-['Metropolis','Montserrat',sans-serif]">
            "Bold In Spirit. Pure In Every Drop."
          </p>

          <p className="text-xs text-gray-300 font-medium">
            © 2026 Sindhu Beverages. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
