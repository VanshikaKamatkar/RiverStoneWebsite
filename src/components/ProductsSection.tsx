import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, Download, ExternalLink, Sparkles, Droplets } from 'lucide-react';

export default function ProductsSection() {
  const [activeSlide, setActiveSlide] = useState(1); // 0: 200ml, 1: 500ml, 2: 1000ml
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [catalogueModalOpen, setCatalogueModalOpen] = useState(false);

  const products = [
    {
      id: '200ml',
      name: 'RiverStone® 200 ml',
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
      name: 'RiverStone® 500 ml',
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
      name: 'RiverStone® 1000 ml',
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

  // Auto-play timer every 5 seconds unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setDirection(1);
      setActiveSlide((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, products.length]);

  const handleNext = () => {
    setDirection(1);
    setActiveSlide((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveSlide((prev) => (prev - 1 + products.length) % products.length);
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
      className="py-20 md:py-28 bg-[#F5F3F1] border-b border-[#EAE6E2] relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient Soft Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-[#D9F4FF]/70 via-[#FCFAF7] to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12 sm:space-y-16">
        
        {/* Top Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAE6E2] pb-8">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#EAE6E2] text-xs font-bold uppercase tracking-widest text-[#A86B2D] shadow-xs">
              <Droplets className="w-3.5 h-3.5" />
              <span>Product Catalogue</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight font-['Metropolis','Montserrat',sans-serif]">
              Hydration For <span className="text-[#713411]">Every Occasion.</span>
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
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeSlide === idx
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
              <div className="bg-white rounded-[32px] border-2 border-[#EAE6E2] p-8 sm:p-12 shadow-xl shadow-[#713411]/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
                
                {/* Soft Water Crystal Corner Lighting */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D9F4FF]/80 rounded-bl-full pointer-events-none -z-0" />

                {/* Left Side: Official Bottle Visual */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-6">
                  <div className="relative w-48 sm:w-56 h-72 sm:h-80 flex items-center justify-center">
                    {/* Aura Halo behind official bottle */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#D9F4FF] via-[#A86B2D]/20 to-transparent blur-2xl animate-aura -z-10" />
                    
                    {/* Official Bottle Image */}
                    <img
                      src="/riverstone_bottle_official.png"
                      alt={`${currentProduct.name} Official Bottle`}
                      className={`w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(113,52,17,0.2)] transition-transform duration-500 ${currentProduct.imageScale}`}
                    />
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCFAF7] border border-[#EAE6E2] text-xs font-bold text-[#713411] shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#A86B2D]" />
                    <span>{currentProduct.badge}</span>
                  </div>
                </div>

                {/* Right Side: Product Details & Perfect For Grid */}
                <div className="lg:col-span-7 space-y-6 text-left relative z-10">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#A86B2D]">
                      Variant Capacity • {currentProduct.volume}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-['Metropolis','Montserrat',sans-serif]">
                      {currentProduct.name}
                    </h3>
                    <p className="text-lg font-bold text-[#713411] italic font-['Metropolis','Montserrat',sans-serif]">
                      "{currentProduct.tagline}"
                    </p>
                  </div>

                  <p className="text-sm text-[#555555] leading-relaxed">
                    {currentProduct.description}
                  </p>

                  {/* "Perfect For:" Checklist Grid */}
                  <div className="space-y-3 pt-2 border-t border-[#EAE6E2]">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#888888]">
                      Perfect For:
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentProduct.useCases.map((useCase) => (
                        <div
                          key={useCase}
                          className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FCFAF7] border border-[#EAE6E2] shadow-xs text-xs font-semibold text-[#111111]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#713411] shrink-0" />
                          <span>{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Request Catalogue Action */}
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
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Controls & Auto-play Indicator */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#EAE6E2] text-xs text-[#888888]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#713411] animate-ping" />
            <span>Auto-rotates every 5 seconds (Hover to pause)</span>
          </div>

          {/* Carousel Pagination Indicator Dots */}
          <div className="flex items-center gap-2">
            {products.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeSlide ? 1 : -1);
                  setActiveSlide(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === idx ? 'w-8 bg-[#713411]' : 'w-2.5 bg-[#EAE6E2] hover:bg-[#A86B2D]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Direct Catalogue Button */}
          <button
            onClick={() => setCatalogueModalOpen(true)}
            className="text-[#713411] font-semibold hover:text-[#A86B2D] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Download Full Catalogue (PDF / Drive)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

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
                  <Download className="w-5 h-5 text-[#A86B2D]" />
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
                    <span>View Drive Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
