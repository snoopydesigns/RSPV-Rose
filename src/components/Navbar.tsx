import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, CAPABILITIES } from '../data/companyData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, capabilityId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [capabilitiesDropdownOpen, setCapabilitiesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setCapabilitiesDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Capabilities', id: 'capabilities', hasDropdown: true },
    { label: 'Government Contracting', id: 'government-contracting' },
    { label: 'Industries', id: 'industries' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setCapabilitiesDropdownOpen(false);
  };

  const handleCapabilitySelect = (capId: string) => {
    onNavigate('capabilities', capId);
    setMobileMenuOpen(false);
    setCapabilitiesDropdownOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#30202D]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3 text-white'
            : 'bg-[#30202D] text-white border-b border-white/10 py-4 lg:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: 3 zones separated by gap-8: [Brand wordmark] - [Nav links] - [1 primary CTA] */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark (Single text element in Instrument Serif) */}
            <button
              onClick={() => handleNavClick('home')}
              className="text-left font-serif text-2xl lg:text-3xl tracking-tight font-normal text-white hover:text-[#F6F2EB] transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A65D67] group flex items-baseline"
              aria-label="RSVP ROSES LLC Home"
            >
              <span>RSVP ROSES</span>
              <span className="text-xs font-sans tracking-widest uppercase opacity-85 ml-1.5 text-[#A65D67] font-semibold group-hover:text-white transition-colors">
                LLC
              </span>
            </button>

            {/* Zone 2: Navigation Links (Single line, quiet hover underline) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-normal text-stone-200">
              {navLinks.map((link) => (
                <div key={link.id} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setCapabilitiesDropdownOpen(true)}
                      onMouseLeave={() => setCapabilitiesDropdownOpen(false)}
                    >
                      <button
                        onClick={() => handleNavClick(link.id)}
                        className={`inline-flex items-center gap-1.5 py-1 whitespace-nowrap shrink-0 transition-colors relative ${
                          currentPage === link.id
                            ? 'text-white'
                            : 'text-stone-300 hover:text-white'
                        }`}
                        aria-expanded={capabilitiesDropdownOpen}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${capabilitiesDropdownOpen ? 'rotate-180 text-[#A65D67]' : ''}`} />
                        {currentPage === link.id && (
                          <motion.span
                            layoutId="activeNavIndicator"
                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#A65D67]"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </button>

                      {/* Animated Dropdown Menu */}
                      <AnimatePresence>
                        {capabilitiesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.98 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                            className="absolute top-full left-0 mt-2 w-88 bg-[#30202D] border border-white/20 shadow-2xl p-3 z-50 text-left"
                          >
                            <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-semibold text-stone-400 px-3 py-1.5 border-b border-white/10 mb-1">
                              <span>7 Core Capabilities</span>
                              <span className="font-mono text-[10px] text-[#A65D67]">TAA & Section 889</span>
                            </div>
                            <div className="py-1 space-y-0.5">
                              {CAPABILITIES.map((cap) => (
                                <button
                                  key={cap.id}
                                  onClick={() => handleCapabilitySelect(cap.id)}
                                  className="w-full text-left px-3 py-2 text-xs text-stone-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between group"
                                >
                                  <span className="font-normal truncate">
                                    <span className="font-mono text-stone-400 mr-2 text-[10px] group-hover:text-[#A65D67] transition-colors">{cap.number}</span>
                                    {cap.title}
                                  </span>
                                  <ArrowUpRight className="w-3 h-3 text-stone-500 group-hover:text-[#A65D67] shrink-0 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </button>
                              ))}
                            </div>
                            <div className="pt-2 mt-1 border-t border-white/10 px-3 flex justify-between items-center">
                              <button
                                onClick={() => handleNavClick('capabilities')}
                                className="text-[11px] font-medium text-[#A65D67] hover:text-white inline-flex items-center gap-1 transition-colors"
                              >
                                View all capabilities directory &rarr;
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.id)}
                      className={`py-1 whitespace-nowrap shrink-0 transition-colors relative ${
                        currentPage === link.id
                          ? 'text-white'
                          : 'text-stone-300 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      {currentPage === link.id && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#A65D67]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* Zone 3: 1 Primary Action */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <motion.button
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavClick('contact')}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A65D67] hover:bg-[#924e58] active:bg-[#7c3f48] transition-colors whitespace-nowrap shrink-0 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Discuss an Opportunity
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A65D67]"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-out Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'calc(100vh - 65px)' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden fixed inset-0 top-[65px] bg-[#30202D] text-white z-50 overflow-y-auto px-6 py-8 flex flex-col justify-between border-t border-white/10"
            >
              <div className="space-y-4">
                <div className="text-[11px] font-mono tracking-wider uppercase text-stone-400 pb-2 border-b border-white/10">
                  Navigation
                </div>
                <nav className="flex flex-col space-y-3">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.25 }}
                    >
                      <button
                        onClick={() => handleNavClick(link.id)}
                        className={`text-lg text-left w-full py-1.5 transition-colors flex items-center justify-between ${
                          currentPage === link.id
                            ? 'text-white font-semibold'
                            : 'text-stone-300 hover:text-white'
                        }`}
                      >
                        <span>{link.label}</span>
                        {currentPage === link.id && (
                          <span className="w-1.5 h-1.5 bg-[#A65D67]" />
                        )}
                      </button>
                      {link.hasDropdown && (
                        <div className="pl-4 mt-2 space-y-2 border-l border-white/15">
                          {CAPABILITIES.map((cap) => (
                            <button
                              key={cap.id}
                              onClick={() => handleCapabilitySelect(cap.id)}
                              className="block w-full text-left py-1 text-xs text-stone-400 hover:text-white"
                            >
                              <span className="font-mono text-stone-500 mr-2">{cap.number}</span>
                              {cap.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </nav>

                <div className="pt-6 border-t border-white/10">
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#A65D67] hover:bg-[#924e58] transition-colors"
                  >
                    Discuss an Opportunity
                  </button>
                </div>
              </div>

              <div className="pt-8 text-xs text-stone-400 space-y-2 border-t border-white/10 mt-8">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#A65D67]" />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white font-mono">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                <div className="text-[11px] text-stone-400 font-mono">
                  CAGE: {COMPANY_INFO.cageCode} · UEI: {COMPANY_INFO.uei}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {/* Spacer to compensate fixed header */}
      <div className="h-20" />
    </>
  );
};
