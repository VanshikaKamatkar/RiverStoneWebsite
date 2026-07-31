import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, ChevronLeft, ChevronRight, CheckCircle2, Building2, TrendingUp, ShieldCheck, Users, Award } from 'lucide-react';

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<'collaboration' | 'distributor'>('collaboration');
  const [collabEmail, setCollabEmail] = useState('');
  const [collabSubmitted, setCollabSubmitted] = useState(false);

  const [distForm, setDistForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    businessType: 'Retail / Wholesale',
  });
  const [distSubmitted, setDistSubmitted] = useState(false);

  const handleCollabSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!collabEmail) return;
    setCollabSubmitted(true);
    setTimeout(() => {
      setCollabSubmitted(false);
      setCollabEmail('');
    }, 5000);
  };

  const handleDistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!distForm.name || !distForm.email || !distForm.phone) return;
    setDistSubmitted(true);
    setTimeout(() => {
      setDistSubmitted(false);
      setDistForm({ name: '', email: '', phone: '', city: '', businessType: 'Retail / Wholesale' });
    }, 5000);
  };

  const distributorBenefits = [
    { title: 'Strong Market Potential', desc: 'Tap into rapidly growing demand across Maharashtra & Central India.', icon: TrendingUp },
    { title: 'Reliable Product Availability', desc: 'Guaranteed inventory supply & scheduled delivery timelines.', icon: ShieldCheck },
    { title: 'Business Growth Opportunities', desc: 'Attractive margin structures designed for long-term scalability.', icon: Building2 },
    { title: 'Dedicated Support Team', desc: 'Direct regional account manager & marketing collateral support.', icon: Users },
    { title: 'Trusted Brand Identity', desc: 'Backed by Sindhu Beverages quality standards & purity promise.', icon: Award },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FCFAF7] border-b border-[#EAE6E2] relative overflow-hidden">
      {/* Background Soft Glow Lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D9F4FF]/70 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#A86B2D]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12 sm:space-y-16">
        
        {/* Top Section Header with Direct Switcher Tabs */}
        <div id="become-distributor" className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAE6E2] pb-8">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F3F1] border border-[#EAE6E2] text-xs font-bold uppercase tracking-widest text-[#A86B2D] shadow-xs">
              <Mail className="w-3.5 h-3.5" />
              <span>Partnerships & Inquiries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight font-['Metropolis','Montserrat',sans-serif]">
              Connect With <span className="text-[#713411]">RiverStone®</span>
            </h2>
          </div>

          {/* Interactive Switcher Tabs */}
          <div className="flex items-center gap-2 bg-[#F5F3F1] p-1.5 rounded-2xl border border-[#EAE6E2] self-start md:self-auto shadow-xs">
            <button
              onClick={() => setActiveTab('collaboration')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === 'collaboration'
                  ? 'bg-[#713411] text-white shadow-md shadow-[#713411]/20 scale-105'
                  : 'text-[#666666] hover:text-[#713411]'
              }`}
            >
              Collaboration
            </button>
            <button
              onClick={() => setActiveTab('distributor')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === 'distributor'
                  ? 'bg-[#713411] text-white shadow-md shadow-[#713411]/20 scale-105'
                  : 'text-[#666666] hover:text-[#713411]'
              }`}
            >
              Become a Distributor
            </button>
          </div>
        </div>

        {/* Dynamic Card Workspace (Matching Products Card Design) */}
        <div className="relative min-h-[500px] flex items-center justify-center">
          
          {/* Left Navigation Arrow */}
          <button
            onClick={() => setActiveTab((prev) => (prev === 'collaboration' ? 'distributor' : 'collaboration'))}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-md border-2 border-[#EAE6E2] shadow-lg flex items-center justify-center text-[#713411] hover:bg-[#713411] hover:text-white hover:border-[#713411] transition-all duration-300 cursor-pointer"
            aria-label="Toggle Section"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={() => setActiveTab((prev) => (prev === 'collaboration' ? 'distributor' : 'collaboration'))}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-md border-2 border-[#EAE6E2] shadow-lg flex items-center justify-center text-[#713411] hover:bg-[#713411] hover:text-white hover:border-[#713411] transition-all duration-300 cursor-pointer"
            aria-label="Toggle Section"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* AnimatePresence for Smooth Card Switch */}
          <AnimatePresence mode="wait">
            {activeTab === 'collaboration' ? (
              <motion.div
                key="collaboration"
                initial={{ opacity: 0, x: -60, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 60, scale: 0.96 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="w-full max-w-5xl mx-auto px-4 sm:px-10 py-2"
              >
                {/* COLLABORATION CARD */}
                <div className="bg-white rounded-[32px] border-2 border-[#EAE6E2] p-8 sm:p-12 shadow-xl shadow-[#713411]/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden text-left">
                  
                  {/* Soft Corner Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#D9F4FF]/80 rounded-bl-full pointer-events-none -z-0" />

                  {/* Left Column: Collaboration Info & Email Form */}
                  <div className="lg:col-span-7 space-y-6 relative z-10">
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#A86B2D]">
                        Collaboration Section
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-['Metropolis','Montserrat',sans-serif]">
                        Got An Idea? <span className="text-[#713411]">Let’s Talk.</span>
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                      Whether you’re planning an event, seeking a supply partner, exploring business opportunities, or discussing a custom requirement, we’d love to hear from you.
                    </p>

                    <div className="p-4 rounded-2xl bg-[#FCFAF7] border border-[#EAE6E2] space-y-1">
                      <p className="text-xs font-bold text-[#713411] uppercase tracking-wider">
                        Drop your email and our team will get in touch.
                      </p>
                      <p className="text-xs text-[#888888]">
                        We guarantee a response within 24 business hours.
                      </p>
                    </div>

                    {/* Email Input Form */}
                    {collabSubmitted ? (
                      <div className="p-4 rounded-2xl bg-[#D9F4FF]/50 border border-[#A86B2D]/30 text-xs font-semibold text-[#713411] flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#A86B2D] shrink-0" />
                        <span>Thank you! Your email has been received. Our team will reach out shortly.</span>
                      </div>
                    ) : (
                      <form onSubmit={handleCollabSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
                        <input
                          type="email"
                          required
                          value={collabEmail}
                          onChange={(e) => setCollabEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="flex-1 px-5 py-3.5 rounded-full bg-[#FCFAF7] border border-[#EAE6E2] text-sm text-[#111111] focus:outline-none focus:border-[#713411]"
                        />
                        <button
                          type="submit"
                          className="px-7 py-3.5 rounded-full bg-[#713411] text-white font-semibold text-sm hover:bg-[#A86B2D] transition-all duration-300 shadow-md shadow-[#713411]/20 flex items-center justify-center gap-2 cursor-pointer shrink-0"
                        >
                          <span>Start A Conversation</span>
                          <Send className="w-4 h-4" />
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Right Column: Perks & Support Card */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-4 bg-[#FCFAF7] p-6 rounded-2xl border border-[#EAE6E2] relative z-10">
                    <div className="space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#A86B2D]">
                        Ways To Partner
                      </span>
                      <h4 className="text-base font-bold text-[#111111] font-['Metropolis','Montserrat',sans-serif]">
                        Custom Supply & Event Hydration
                      </h4>
                    </div>

                    <div className="space-y-2.5 text-xs text-[#555555]">
                      <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#EAE6E2]">
                        <CheckCircle2 className="w-4 h-4 text-[#713411]" />
                        <span>Event & Conference Bulk Water</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#EAE6E2]">
                        <CheckCircle2 className="w-4 h-4 text-[#713411]" />
                        <span>Corporate Office Supply Contracts</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#EAE6E2]">
                        <CheckCircle2 className="w-4 h-4 text-[#713411]" />
                        <span>Hospitality & Hotel Partnerships</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#EAE6E2] text-xs text-[#888888] flex items-center justify-between">
                      <span>Sindhu Beverages HQ</span>
                      <span className="font-bold text-[#713411]">Nagpur, MH</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            ) : (
              <motion.div
                key="distributor"
                initial={{ opacity: 0, x: 60, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -60, scale: 0.96 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="w-full max-w-5xl mx-auto px-4 sm:px-10 py-2"
              >
                {/* BECOME A DISTRIBUTOR CARD */}
                <div className="bg-white rounded-[32px] border-2 border-[#EAE6E2] p-8 sm:p-12 shadow-xl shadow-[#713411]/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden text-left">
                  
                  {/* Soft Corner Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#A86B2D]/10 rounded-bl-full pointer-events-none -z-0" />

                  {/* Left Column: Distributor Copy & Benefits List */}
                  <div className="lg:col-span-7 space-y-6 relative z-10">
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#A86B2D]">
                        Become A Distributor
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-['Metropolis','Montserrat',sans-serif]">
                        Grow With <span className="text-[#713411]">RiverStone®.</span>
                      </h3>
                    </div>

                    <p className="text-sm text-[#555555] leading-relaxed">
                      Join our expanding distribution network and become part of a brand committed to quality, reliability, and long-term growth. We offer dedicated support, consistent supply, and a partnership-focused approach to help you build a successful business.
                    </p>

                    {/* Benefits Grid */}
                    <div className="space-y-3 border-t border-[#EAE6E2] pt-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-[#888888]">
                        Distributor Benefits:
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {distributorBenefits.map((b) => {
                          const IconC = b.icon;
                          return (
                            <div
                              key={b.title}
                              className="p-3 rounded-xl bg-[#FCFAF7] border border-[#EAE6E2] shadow-xs flex items-start gap-2.5"
                            >
                              <IconC className="w-4 h-4 text-[#713411] shrink-0 mt-0.5" />
                              <div>
                                <h5 className="text-xs font-bold text-[#111111]">{b.title}</h5>
                                <p className="text-[11px] text-[#666666] leading-snug">{b.desc}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Distributor Application Form */}
                  <div className="lg:col-span-5 bg-[#FCFAF7] p-6 rounded-2xl border border-[#EAE6E2] space-y-4 relative z-10">
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-[#111111] font-['Metropolis','Montserrat',sans-serif]">
                        Apply For Distributorship
                      </h4>
                      <p className="text-xs text-[#888888]">Fill out the details to request regional distribution rights.</p>
                    </div>

                    {distSubmitted ? (
                      <div className="p-4 rounded-2xl bg-[#D9F4FF]/50 border border-[#A86B2D]/30 text-xs font-semibold text-[#713411] space-y-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#A86B2D]" />
                          <span className="font-bold">Application Submitted!</span>
                        </div>
                        <p className="text-[11px] text-[#555555]">Our regional manager will call you shortly to discuss distribution terms.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleDistSubmit} className="space-y-3 text-xs">
                        <div>
                          <label className="block text-[#111111] font-semibold mb-1">Full Name</label>
                          <input
                            type="text"
                            required
                            value={distForm.name}
                            onChange={(e) => setDistForm({ ...distForm, name: e.target.value })}
                            placeholder="Your full name"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EAE6E2] text-xs text-[#111111] focus:outline-none focus:border-[#713411]"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[#111111] font-semibold mb-1">Phone</label>
                            <input
                              type="tel"
                              required
                              value={distForm.phone}
                              onChange={(e) => setDistForm({ ...distForm, phone: e.target.value })}
                              placeholder="+91 98765 43210"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EAE6E2] text-xs text-[#111111] focus:outline-none focus:border-[#713411]"
                            />
                          </div>
                          <div>
                            <label className="block text-[#111111] font-semibold mb-1">City / Region</label>
                            <input
                              type="text"
                              required
                              value={distForm.city}
                              onChange={(e) => setDistForm({ ...distForm, city: e.target.value })}
                              placeholder="e.g. Nagpur"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EAE6E2] text-xs text-[#111111] focus:outline-none focus:border-[#713411]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[#111111] font-semibold mb-1">Email</label>
                          <input
                            type="email"
                            required
                            value={distForm.email}
                            onChange={(e) => setDistForm({ ...distForm, email: e.target.value })}
                            placeholder="name@business.com"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EAE6E2] text-xs text-[#111111] focus:outline-none focus:border-[#713411]"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3 rounded-full bg-[#713411] text-white font-semibold text-xs hover:bg-[#A86B2D] transition-colors cursor-pointer shadow-md shadow-[#713411]/20 mt-2"
                        >
                          Submit Distributor Inquiry
                        </button>
                      </form>
                    )}
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Switcher Navigation Dots */}
        <div className="flex items-center justify-center gap-3 pt-2 text-xs text-[#888888]">
          <button
            onClick={() => setActiveTab('collaboration')}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              activeTab === 'collaboration' ? 'w-8 bg-[#713411]' : 'w-2.5 bg-[#EAE6E2] hover:bg-[#A86B2D]'
            }`}
            aria-label="Go to Collaboration"
          />
          <button
            onClick={() => setActiveTab('distributor')}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              activeTab === 'distributor' ? 'w-8 bg-[#713411]' : 'w-2.5 bg-[#EAE6E2] hover:bg-[#A86B2D]'
            }`}
            aria-label="Go to Distributor"
          />
        </div>

      </div>
    </section>
  );
}
