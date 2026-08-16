import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, Download, ExternalLink, Sparkles, Droplets } from 'lucide-react';
import FluidText from './FluidText';
import FluidImage from './FluidImage';

export default function ProductsSection() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [direction, setDirection] = useState(1);
  const [catalogueModalOpen, setCatalogueModalOpen] = useState(false);
  const [detailSheetOpen, setDetailSheetOpen] = useState(false);

  // Lock body scroll whenever any overlay is open
  useEffect(() => {
    const isLocked = detailSheetOpen || catalogueModalOpen;
    document.body.style.overflow = isLocked ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [detailSheetOpen, catalogueModalOpen]);

  const products = [
    {
      id: '200ml',
      name: 'Shell - 200 ml',
      tagline: 'Compact and convenient.',
      volume: '200 ml',
      imageScale: 'scale-90',
      badge: 'Hospitality & Events',
      description: 'Engineered for seamless single-serve refreshment at high-profile gatherings, institutional functions, and premium dining.',
      useCases: [
        'Events',
        'Conferences',
        'Hospitality',
        'Educational Institutions',
        'Travel',
      ],
    },
    {
      id: '500ml',
      name: 'Pebble - 500 ml',
      tagline: 'The everyday essential.',
      volume: '500 ml',
      imageScale: 'scale-105',
      badge: 'Popular Choice',
      description: 'The quintessential daily hydration companion crafted for active professionals, retail shelves, and everyday lifestyles.',
      useCases: [
        'Retail Stores',
        'Offices',
        'Gyms',
        'Daily Consumption',
        'Outdoor Activities',
      ],
    },
    {
      id: '1000ml',
      name: 'Rock - 1000 ml',
      tagline: 'Built for longer journeys.',
      volume: '1000 ml',
      imageScale: 'scale-115',
      badge: 'Extended Capacity',
      description: 'Maximum volume designed for long workdays, road trips, family dining tables, and corporate boardroom setups.',
      useCases: [
        'Corporate Use',
        'Travel',
        'Meetings',
        'Hotels',
        'Extended Hydration Needs',
      ],
    },
  ];


  const handleNext = () => {
    setDirection(1);
    setActiveSlide((prev) => (prev + 1) % products.length);
    setDetailSheetOpen(false);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveSlide((prev) => (prev - 1 + products.length) % products.length);
    setDetailSheetOpen(false);
  };

  const currentProduct = products[activeSlide];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 140 : -140,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 140 : -140,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section
      id="products"
      className="pt-10 md:pt-12 pb-8 md:pb-12 bg-[#F5F3F1] border-b border-[#EAE6E2] relative overflow-hidden"
    >
      {/* Ambient Soft Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-[#D9F4FF]/70 via-[#FCFAF7] to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-6 sm:space-y-8">

        {/* Top Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAE6E2] pb-4">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#EAE6E2] text-xs font-bold uppercase tracking-widest text-[#8C5925] shadow-xs">
              <Droplets className="w-3.5 h-3.5" />
              <span>Product Catalogue</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight font-['Metropolis','Montserrat',sans-serif]">
              <FluidText text="Hydration For &nbsp;" /> <span className="text-[#713411]"><FluidText text="Every Occasion." /></span>
            </h2>
          </div>

          {/* Direct Variant Tabs */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-[#EAE6E2] self-start md:self-auto shadow-xs">
            {products.map((prod, idx) => (
              <button
                key={prod.id}
                onClick={() => {
                  setDirection(idx > activeSlide ? 1 : -1);
                  setActiveSlide(idx);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${activeSlide === idx
                  ? 'bg-[#713411] text-white shadow-md shadow-[#713411]/20 scale-105'
                  : 'text-[#666666] hover:text-[#713411]'
                  }`}
              >
                {prod.volume}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Single-Product Slider Workspace */}
        <div className="relative min-h-[480px] sm:min-h-[520px] flex items-center justify-center">

          {/* Left Slider Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-md border-2 border-[#EAE6E2] shadow-lg flex items-center justify-center text-[#713411] hover:bg-[#713411] hover:text-white hover:border-[#713411] transition-all duration-300 cursor-pointer"
            aria-label="Previous Product"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Slider Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-md border-2 border-[#EAE6E2] shadow-lg flex items-center justify-center text-[#713411] hover:bg-[#713411] hover:text-white hover:border-[#713411] transition-all duration-300 cursor-pointer"
            aria-label="Next Product"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dynamic Product Card Display */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentProduct.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="w-full max-w-5xl mx-auto px-6 sm:px-12 py-4"
            >
              <div className="bg-white rounded-[32px] border-2 border-[#EAE6E2] p-6 sm:p-8 shadow-xl shadow-[#713411]/5 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative overflow-hidden">

                {/* Soft Water Crystal Corner Lighting */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D9F4FF]/80 rounded-bl-full pointer-events-none -z-0" />

                {/* Left Side: Official Bottle Visual */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-4">
                  <div className="relative w-40 sm:w-48 h-64 sm:h-72 flex items-center justify-center">
                    {/* Aura Halo behind official bottle */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#D9F4FF] via-[#A86B2D]/20 to-transparent blur-2xl animate-aura -z-10" />

                    {/* Official Bottle Image with Fluid Distortion */}
                    <FluidImage
                      src="/riverstone_bottle_official.png"
                      alt={`${currentProduct.name} Official Bottle`}
                      className={`w-full h-full drop-shadow-[0_15px_30px_rgba(113,52,17,0.2)] transition-transform duration-500 ${currentProduct.imageScale}`}
                      intensity={2.0}
                    />
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCFAF7] border border-[#EAE6E2] text-xs font-bold text-[#713411] shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#8C5925]" />
                    <span>{currentProduct.badge}</span>
                  </div>
                </div>

                {/* Right Side: Product Details */}
                <div className="lg:col-span-7 space-y-4 text-left relative z-10">
                  <div className="space-y-2">
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-['Metropolis','Montserrat',sans-serif]">
                      {currentProduct.name}
                    </h3>
                    <p className="text-lg font-bold text-[#713411] italic font-['Metropolis','Montserrat',sans-serif]">
                      "{currentProduct.tagline}"
                    </p>
                  </div>

                  {/* Mobile: View Details button — opens bottom sheet */}
                  <button
                    onClick={() => setDetailSheetOpen(true)}
                    className="block lg:hidden w-full py-3 rounded-2xl border-2 border-[#713411] text-sm font-bold text-[#713411] hover:bg-[#713411] hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    View Details →
                  </button>

                  {/* Desktop: always fully visible */}
                  <div className="hidden lg:block space-y-6">
                    <p className="text-sm text-[#555555] leading-relaxed">
                      {currentProduct.description}
                    </p>



                    <div className="pt-4 flex items-center gap-4">
                      <button
                        onClick={() => setCatalogueModalOpen(true)}
                        className="px-7 py-3.5 rounded-full font-semibold text-sm bg-[#713411] text-white hover:bg-[#A86B2D] transition-all duration-300 shadow-md shadow-[#713411]/20 hover:shadow-lg hover:shadow-[#A86B2D]/25 flex items-center gap-2 cursor-pointer"
                      >
                        <Download className="w-4 h-4" />
                        <span>Request Product Catalogue</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>



      </div>

      {/* ── Mobile Product Detail Bottom Sheet ── */}
      <AnimatePresence>
        {detailSheetOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="sheet-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setDetailSheetOpen(false)}
            />
            {/* Sheet */}
            <motion.div
              key="sheet-panel"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white rounded-t-[32px] shadow-2xl overflow-y-auto max-h-[88svh]"
            >
              {/* Drag Handle */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-[#EAE6E2]" />
              </div>

              {/* Sheet Header: thumbnail + name + close */}
              <div className="flex items-start gap-4 px-6 pt-4 pb-5 border-b border-[#EAE6E2]">
                <img
                  src="/riverstone_bottle_official.png"
                  alt={currentProduct.name}
                  className="w-16 h-24 object-contain shrink-0 drop-shadow-md"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C5925] block mb-1">
                    {currentProduct.badge}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#111111] font-['Metropolis','Montserrat',sans-serif] leading-tight">
                    {currentProduct.name}
                  </h3>
                  <p className="text-sm font-bold text-[#713411] italic mt-1">
                    "{currentProduct.tagline}"
                  </p>
                </div>
                {/* Close button */}
                <button
                  onClick={() => setDetailSheetOpen(false)}
                  className="shrink-0 w-8 h-8 rounded-full bg-[#F5F3F1] flex items-center justify-center text-[#666666] hover:bg-[#713411] hover:text-white transition-all cursor-pointer text-lg font-bold leading-none"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              {/* Sheet Body */}
              <div className="px-6 py-6 space-y-6">
                <p className="text-sm text-[#555555] leading-relaxed">
                  {currentProduct.description}
                </p>



                <div className="pt-2 pb-4 flex flex-col gap-3">
                  <button
                    onClick={() => { setDetailSheetOpen(false); setCatalogueModalOpen(true); }}
                    className="w-full py-4 rounded-2xl font-semibold text-sm bg-[#713411] text-white hover:bg-[#A86B2D] transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    Request Product Catalogue
                  </button>
                  <button
                    onClick={() => setDetailSheetOpen(false)}
                    className="w-full py-3.5 rounded-2xl font-semibold text-sm bg-[#F5F3F1] text-[#666666] border border-[#EAE6E2] transition-all duration-300 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Request Product Catalogue Modal */}
      <AnimatePresence>
        {catalogueModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full border border-[#EAE6E2] shadow-2xl space-y-6 text-left relative"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-[#FCFAF7] border border-[#EAE6E2] flex items-center justify-center text-[#713411]">
                  <Download className="w-5 h-5 text-[#8C5925]" />
                </div>
                <h3 className="text-2xl font-bold text-[#111111] font-['Metropolis','Montserrat',sans-serif]">
                  Request Product Catalogue
                </h3>
                <p className="text-xs text-[#666666]">
                  Access the complete RiverStone® product specifications, bulk packaging rates, and distributor documentation.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Opening RiverStone Product Catalogue Drive Link...");
                  setCatalogueModalOpen(false);
                  window.open("https://drive.google.com", "_blank");
                }}
                className="space-y-4 text-xs font-medium"
              >
                <div>
                  <label className="block text-[#111111] font-bold mb-1.5">Your Name / Organization</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter name or business name"
                    className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#EAE6E2] text-[#111111] focus:outline-none focus:border-[#713411]"
                  />
                </div>

                <div>
                  <label className="block text-[#111111] font-bold mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#EAE6E2] text-[#111111] focus:outline-none focus:border-[#713411]"
                  />
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 rounded-full bg-[#713411] text-white font-semibold text-xs hover:bg-[#A86B2D] transition-colors cursor-pointer shadow-md shadow-[#713411]/20 flex items-center justify-center gap-2"
                  >
                    <span>Download PDF</span>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setCatalogueModalOpen(false)}
                    className="px-5 py-3.5 rounded-full bg-[#FCFAF7] text-[#666666] border border-[#EAE6E2] font-semibold text-xs hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
