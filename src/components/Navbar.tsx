import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();

  const navLinks = React.useMemo(() => [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Products', href: '/#products' },
    { name: 'Presence', href: '/#presence' },
    { name: 'Clients', href: '/#clients' },
    { name: 'Articles', href: '/#articles' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Contact', href: '/contact' },
  ], []);

  useEffect(() => {
    // Only run scroll spy on the home page
    if (location.pathname !== '/') return;

    const sectionIds = ['home', 'about', 'products', 'presence', 'clients', 'articles', 'reviews'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        let maxIntersectionRatio = 0;
        let mostVisibleSection = '';

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
            maxIntersectionRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });

        if (mostVisibleSection) {
          const matchingLink = navLinks.find((link) => link.href.includes(`#${mostVisibleSection}`));
          if (matchingLink) {
            setActiveLink(matchingLink.name);
          }
        }
      },
      {
        rootMargin: '-10% 0px -50% 0px', 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname, navLinks]);

  useEffect(() => {
    if (location.pathname === '/contact') {
      setActiveLink('Contact');
    } else {
      if (location.hash) {
        const matchingLink = navLinks.find(link => link.href === `/${location.hash}` || link.href === location.hash);
        if (matchingLink) {
          setActiveLink(matchingLink.name);
        }
      } else if (activeLink === 'Contact') {
        setActiveLink('Home');
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'navbar-scrolled py-3' : 'navbar-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Website Logo */}
        <Link to="/#home" className="shrink-0 flex items-center">
          <img
            src="/logo.png"
            alt="RiverStone Logo"
            className="h-9 sm:h-11 md:h-12 w-auto object-contain block"
          />
        </Link>

        {/* Center: Desktop Anchor Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('/#')) {
                    if (location.pathname === '/') {
                      e.preventDefault();
                      const target = document.querySelector(link.href.substring(1));
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }
                  setActiveLink(link.name);
                }}
                className={`nav-link text-sm font-medium transition-colors ${isActive ? 'active' : ''
                  }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact#become-distributor"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold btn-distributor group"
          >
            <span>Become a Distributor</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#111111] hover:bg-[#F5F3F1] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#FCFAF7]/95 backdrop-blur-xl border-b border-[#EAE6E2] overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('/#')) {
                      if (location.pathname === '/') {
                        e.preventDefault();
                        const target = document.querySelector(link.href.substring(1));
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }
                    setActiveLink(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-base font-medium py-2 border-b border-[#EAE6E2]/50 transition-colors ${activeLink === link.name ? 'text-[#713411] font-semibold' : 'text-[#666666]'
                    }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <Link
                  to="/contact#become-distributor"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold btn-distributor"
                >
                  <span>Become a Distributor</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
