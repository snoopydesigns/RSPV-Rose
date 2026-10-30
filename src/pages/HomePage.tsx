import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  Copy, 
  ShieldCheck, 
  Building2, 
  Radio, 
  Truck, 
  FileText, 
  Users, 
  Paintbrush, 
  LineChart, 
  Phone,
  Layers,
  ChevronRight,
  Search,
  Filter
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  PRIMARY_NAICS, 
  ADDITIONAL_NAICS, 
  CAPABILITIES, 
  DIFFERENTIATORS, 
  PROCESS_STAGES, 
  MARKET_GROUPS,
  CapabilityItem
} from '../data/companyData';
import { HeroVideoBackground } from '../components/HeroVideoBackground';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';

interface HomePageProps {
  onNavigate: (page: string, capabilityId?: string) => void;
  onOpenCapabilityStatement: () => void;
  onCopyNotice: (msg: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenCapabilityStatement,
  onCopyNotice,
}) => {
  const [activeStage, setActiveStage] = useState(0);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [capabilityFilter, setCapabilityFilter] = useState<'all' | 'procurement' | 'facilities' | 'consulting'>('all');
  const [naicsSearch, setNaicsSearch] = useState('');

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    onCopyNotice(`Copied ${label}: ${text}`);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  // Filtered Capabilities
  const filteredCapabilities = useMemo(() => {
    if (capabilityFilter === 'procurement') {
      return CAPABILITIES.filter(c => c.id === 'communication-systems' || c.id === 'logistics-distribution');
    }
    if (capabilityFilter === 'facilities') {
      return CAPABILITIES.filter(c => c.id === 'real-estate-facilities' || c.id === 'property-preservation' || c.id === 'aesthetic-enhancement');
    }
    if (capabilityFilter === 'consulting') {
      return CAPABILITIES.filter(c => c.id === 'community-engagement' || c.id === 'business-development');
    }
    return CAPABILITIES;
  }, [capabilityFilter]);

  // Filtered NAICS
  const filteredPrimaryNaics = useMemo(() => {
    if (!naicsSearch.trim()) return PRIMARY_NAICS;
    const q = naicsSearch.toLowerCase();
    return PRIMARY_NAICS.filter(n => n.code.includes(q) || n.title.toLowerCase().includes(q));
  }, [naicsSearch]);

  const filteredAdditionalNaics = useMemo(() => {
    if (!naicsSearch.trim()) return ADDITIONAL_NAICS;
    const q = naicsSearch.toLowerCase();
    return ADDITIONAL_NAICS.filter(n => n.code.includes(q) || n.title.toLowerCase().includes(q));
  }, [naicsSearch]);

  return (
    <div className="bg-[#F6F2EB] text-[#292A2C] overflow-hidden">
      {/* =========================================================================
          SECTION 1: HERO (ANIMATED SEQUENCE)
          ========================================================================= */}
      <section className="relative bg-[#30202D] text-white overflow-hidden border-b border-white/10 pt-10 pb-16 lg:pt-16 lg:pb-24">
        {/* Cinematic Video Background with Measured Aubergine Scrims & Controls */}
        <HeroVideoBackground posterImage="/src/assets/images/hero_corporate_facility_1792504461500.jpg" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 cols) with Staggered Motion */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2"
              >
                <span className="w-6 h-[1.5px] bg-[#A65D67]" />
                <span className="text-xs font-mono uppercase tracking-widest text-stone-300 font-semibold">
                  GOVERNMENT & COMMERCIAL SOLUTIONS
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-white"
              >
                Integrated Solutions.
                <br />
                Efficient Execution.
                <br />
                <span className="text-[#A65D67] italic font-normal">Flourishing Results.</span>
              </motion.h1>

              {/* Supporting Copy */}
              <motion.p 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed font-sans font-light"
              >
                RSVP ROSES LLC brings procurement, logistics, property services, facilities improvements, and strategic consulting together to support the operational needs of government and commercial partners.
              </motion.p>

              {/* Primary & Secondary CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="pt-2 flex flex-wrap items-center gap-4"
              >
                <motion.button
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('capabilities')}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A65D67] hover:bg-[#924e58] transition-colors flex items-center gap-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Explore Our Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-transparent border border-white/30 hover:bg-white/10 hover:border-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Discuss an Opportunity
                </motion.button>
              </motion.div>

              {/* Understated Trust Information Strip */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="pt-6 border-t border-white/15"
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-stone-400 block">Established</span>
                    <span className="text-stone-200 font-medium">Nov 2019</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-stone-400 block">Service Area</span>
                    <span className="text-stone-200 font-medium">Nationwide (NY Focus)</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-stone-400 block">CAGE Identifier</span>
                    <span className="text-stone-200 font-mono font-medium">{COMPANY_INFO.cageCode}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-stone-400 block">Business Type</span>
                    <span className="text-stone-200 font-medium">M/WBE Small Business</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Architectural Visual (5 cols) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative border border-white/20 shadow-2xl overflow-hidden bg-stone-900 group">
                <img
                  src="/src/assets/images/hero_corporate_facility_1792504461500.jpg"
                  alt="Contemporary corporate and public administration facility"
                  className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#30202D] via-transparent to-transparent opacity-80" />
                
                {/* Overlay Structured Metadata Box */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute bottom-4 left-4 right-4 bg-[#30202D]/90 backdrop-blur-md p-4 border border-white/15 text-xs text-white space-y-1.5"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#A65D67] uppercase tracking-wider">
                    <span>Centralized Operational Partner</span>
                    <span className="tabular-data">UEI: {COMPANY_INFO.uei}</span>
                  </div>
                  <p className="text-stone-300 text-[11px] leading-snug">
                    Coordinating multi-faceted procurement, equipment distribution, and physical facilities management through a single point of accountability.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CREDIBILITY & COMPANY SNAPSHOT STRIP (INTERSECTION REVEAL)
          ========================================================================= */}
      <section className="bg-[#292A2C] text-white border-b border-stone-700 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={16} duration={0.5}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              {/* Metric 1 */}
              <div className="border-l-2 border-[#A65D67] pl-3">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono block">
                  Established
                </span>
                <span className="text-sm font-semibold text-white">
                  {COMPANY_INFO.established}
                </span>
              </div>

              {/* Metric 2 */}
              <div className="border-l-2 border-stone-600 pl-3 flex items-center justify-between group">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono block">
                    CAGE Code
                  </span>
                  <span className="text-sm font-mono font-bold tracking-wider text-white">
                    {COMPANY_INFO.cageCode}
                  </span>
                </div>
                <button
                  onClick={() => handleCopy(COMPANY_INFO.cageCode, 'CAGE Code')}
                  className="text-stone-400 hover:text-white p-1 text-[11px] font-mono transition-colors"
                  title="Copy CAGE Code"
                >
                  {copiedCode === COMPANY_INFO.cageCode ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 group-hover:text-white" />
                  )}
                </button>
              </div>

              {/* Metric 3 */}
              <div className="border-l-2 border-stone-600 pl-3">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono block">
                  Primary NAICS
                </span>
                <span className="text-xs font-mono text-stone-200">
                  531390 · 541611 · 484110
                </span>
              </div>

              {/* Metric 4 */}
              <div className="border-l-2 border-stone-600 pl-3">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono block">
                  Service Coverage
                </span>
                <span className="text-xs font-medium text-stone-200">
                  Nationwide (NY Focus)
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: INTRODUCTION & VALUE PROPOSITION (INTERSECTION REVEAL)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F6F2EB] border-b border-[#D9D4CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content (7 cols) with directional reveal */}
            <ScrollReveal direction="up" distance={30} duration={0.6} className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-5 h-[1.5px] bg-[#A65D67]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#A65D67] font-semibold">
                  WHO WE ARE
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#292A2C] leading-tight">
                One Partner. Multiple Capabilities. A More Connected Approach.
              </h2>

              <p className="text-base text-stone-700 leading-relaxed font-light">
                RSVP ROSES LLC supports government and commercial organizations through a coordinated range of procurement, logistics, consulting, property, and facilities services. Our approach brings strategic planning and practical execution together, helping partners address complex operational needs through a single point of contact.
              </p>

              <p className="text-sm text-stone-600 leading-relaxed border-l-2 border-[#A65D67] pl-4 italic">
                From initial strategy and sourcing to project execution and ongoing maintenance, we focus on responsive communication, thoughtful coordination, and quality-driven delivery.
              </p>

              <div className="pt-2">
                <motion.button
                  whileHover={{ x: 3 }}
                  onClick={() => onNavigate('about')}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#30202D] hover:bg-[#432d3f] transition-colors inline-flex items-center gap-2"
                >
                  <span>Discover RSVP ROSES</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </ScrollReveal>

            {/* Right Asymmetric Editorial Composition with intersection reveal */}
            <ScrollReveal direction="left" distance={30} delay={0.15} duration={0.65} className="lg:col-span-5 relative">
              <div className="relative border border-[#D9D4CC] shadow-lg p-2 bg-white">
                <div className="overflow-hidden">
                  <img
                    src="/src/assets/images/facility_interior_finishing_1792504462310.jpg"
                    alt="High quality facility enhancement and architectural execution"
                    className="w-full h-[360px] object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 bg-[#F6F2EB] border-t border-[#D9D4CC] text-xs text-stone-600">
                  <div className="flex items-center justify-between font-mono text-[11px] text-[#A65D67] mb-1">
                    <span>EXECUTION INTEGRITY</span>
                    <span>EST. 2019</span>
                  </div>
                  <p className="text-[11px] leading-normal text-stone-700">
                    Combining high-touch oversight, responsive communication, and rigorous quality inspection across every contracted service scope.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CORE COMPETENCIES (INTERSECTION-OBSERVED MODULES)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D9D4CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Scroll Reveal */}
          <ScrollReveal direction="up" distance={24} duration={0.5} className="max-w-3xl mb-12 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-[#A65D67]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#A65D67] font-semibold">
                WHAT WE DO
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#292A2C]">
              Capabilities Designed Around Real Operational Needs.
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              Our capabilities span procurement, distribution, consulting, property services, facilities improvements, and community engagement.
            </p>
          </ScrollReveal>

          {/* Interactive Filter Segmented Controls */}
          <ScrollReveal direction="up" distance={16} delay={0.1} duration={0.4} className="mb-10">
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#F6F2EB] border border-[#D9D4CC] max-w-2xl">
              <button
                onClick={() => setCapabilityFilter('all')}
                className={`px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  capabilityFilter === 'all'
                    ? 'bg-[#30202D] text-white shadow-sm'
                    : 'text-stone-600 hover:text-[#30202D]'
                }`}
              >
                All Capabilities ({CAPABILITIES.length})
              </button>
              <button
                onClick={() => setCapabilityFilter('procurement')}
                className={`px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  capabilityFilter === 'procurement'
                    ? 'bg-[#30202D] text-white shadow-sm'
                    : 'text-stone-600 hover:text-[#30202D]'
                }`}
              >
                Communications & Logistics (2)
              </button>
              <button
                onClick={() => setCapabilityFilter('facilities')}
                className={`px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  capabilityFilter === 'facilities'
                    ? 'bg-[#30202D] text-white shadow-sm'
                    : 'text-stone-600 hover:text-[#30202D]'
                }`}
              >
                Property & Facilities (3)
              </button>
              <button
                onClick={() => setCapabilityFilter('consulting')}
                className={`px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  capabilityFilter === 'consulting'
                    ? 'bg-[#30202D] text-white shadow-sm'
                    : 'text-stone-600 hover:text-[#30202D]'
                }`}
              >
                Consulting & Outreach (2)
              </button>
            </div>
          </ScrollReveal>

          {/* 7 Service Modules revealed by Intersection Observer */}
          <div className="space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredCapabilities.map((cap, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <ScrollReveal
                    key={cap.id}
                    direction="up"
                    distance={32}
                    duration={0.55}
                    amount={0.15}
                    className="w-full"
                  >
                    <div className="border border-[#D9D4CC] bg-[#FDFBF7] hover:border-[#A65D67] hover:shadow-md transition-all duration-300 p-6 sm:p-8 group">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Visual Slot */}
                        <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                          <div className="overflow-hidden border border-stone-200 aspect-[4/3] bg-stone-100">
                            <img
                              src={cap.imageSrc}
                              alt={cap.imageAlt}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        </div>

                        {/* Content Slot */}
                        <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs font-bold text-[#A65D67] px-2 py-0.5 bg-[#A65D67]/10">
                              CAPABILITY {cap.number}
                            </span>
                            {cap.id === 'communication-systems' && (
                              <span className="text-[11px] font-mono text-stone-500">
                                TAA & Section 889 Compliant
                              </span>
                            )}
                          </div>

                          <h3 className="font-serif text-2xl sm:text-3xl text-[#292A2C] group-hover:text-[#A65D67] transition-colors">
                            {cap.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                            {cap.detailedDesc}
                          </p>

                          {cap.keyConsideration && (
                            <div className="text-xs bg-[#F6F2EB] p-3 border border-[#D9D4CC] text-stone-700 font-sans">
                              <span className="font-semibold text-[#292A2C] block mb-0.5">Key Requirement Alignment:</span>
                              <span className="text-[11px] text-stone-600">{cap.keyConsideration}</span>
                            </div>
                          )}

                          <div className="pt-2 flex flex-wrap items-center gap-4">
                            <button
                              onClick={() => onNavigate('capabilities', cap.id)}
                              className="text-xs font-semibold text-[#30202D] hover:text-[#A65D67] inline-flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                            >
                              <span>Learn More Details</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                              onClick={() => onNavigate('contact')}
                              className="text-xs text-stone-500 hover:text-stone-800 underline underline-offset-4"
                            >
                              Discuss this capability
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </AnimatePresence>
          </div>

          <ScrollReveal direction="up" distance={20} delay={0.2} className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onNavigate('capabilities')}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#30202D] hover:bg-[#432d3f] transition-colors inline-flex items-center gap-2"
            >
              <span>View Full Capabilities Breakdown & NAICS Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: THE RSVP ROSES DIFFERENCE (STAGGERED INTERSECTION OBSERVER)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#30202D] text-white border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={24} duration={0.5} className="max-w-3xl mb-16 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-[#A65D67]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#A65D67] font-semibold">
                WHY RSVP ROSES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
              A Connected Approach. From Strategy to Execution.
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-light">
              We eliminate the fragmentation of multi-vendor operational pipelines by integrating strategic advisory, procurement, and physical execution through one responsive organization.
            </p>
          </ScrollReveal>

          {/* 4 Differentiators Staggered Grid */}
          <StaggerContainer staggerDelay={0.12} amount={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {DIFFERENTIATORS.map((diff) => (
              <StaggerItem key={diff.number} distance={24}>
                <div className="bg-white/5 border border-white/10 p-6 sm:p-8 hover:border-[#A65D67]/80 hover:bg-white/[0.08] transition-all duration-300 group h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-mono text-2xl lg:text-3xl text-[#A65D67] font-semibold group-hover:text-white transition-colors">
                      {diff.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                      CORE DIFFERENTIATOR
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-xs font-medium text-stone-200 mb-3 leading-relaxed">
                    {diff.summary}
                  </p>
                  <p className="text-xs text-stone-300 leading-relaxed font-light border-t border-white/10 pt-3">
                    {diff.detail}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: HOW WE WORK (INTERSECTION PROGRESSION)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F6F2EB] border-b border-[#D9D4CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={24} duration={0.5} className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-[#A65D67]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#A65D67] font-semibold">
                OUR APPROACH
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#292A2C]">
              A Clear Path from Requirement to Delivery.
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light">
              Our concept-to-completion working approach emphasizes early clarity, compliant sourcing, disciplined coordination, and accountable follow-through. Click any stage to inspect specific deliverables.
            </p>
          </ScrollReveal>

          {/* Progress Indicator Track */}
          <ScrollReveal direction="up" distance={16} delay={0.1} className="hidden lg:flex items-center justify-between mb-8 px-4 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-stone-300 -translate-y-1/2 z-0" />
            <motion.div 
              className="absolute top-1/2 left-0 h-0.5 bg-[#A65D67] -translate-y-1/2 z-0"
              animate={{ width: `${(activeStage / (PROCESS_STAGES.length - 1)) * 100}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
            {PROCESS_STAGES.map((stg, i) => (
              <button
                key={stg.step}
                onClick={() => setActiveStage(i)}
                className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs transition-colors ${
                  activeStage === i
                    ? 'bg-[#30202D] text-white ring-4 ring-[#A65D67]/30'
                    : i < activeStage
                    ? 'bg-[#A65D67] text-white'
                    : 'bg-stone-200 text-stone-600 hover:bg-stone-300'
                }`}
              >
                {stg.step}
              </button>
            ))}
          </ScrollReveal>

          {/* Interactive Progression Stages Staggered */}
          <StaggerContainer staggerDelay={0.08} amount={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS_STAGES.map((stg, i) => (
              <StaggerItem key={stg.step} distance={20}>
                <div
                  onClick={() => setActiveStage(i)}
                  className={`p-6 border transition-all cursor-pointer relative h-full ${
                    activeStage === i
                      ? 'bg-white border-[#30202D] shadow-md ring-1 ring-[#30202D]'
                      : 'bg-[#FAF8F5] border-[#D9D4CC] hover:bg-white'
                  }`}
                >
                  {activeStage === i && (
                    <motion.div 
                      layoutId="activeStageBorder" 
                      className="absolute top-0 left-0 right-0 h-1 bg-[#A65D67]" 
                    />
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-sm font-bold ${activeStage === i ? 'text-[#A65D67]' : 'text-stone-500'}`}>
                      STAGE {stg.step}
                    </span>
                    <span className="text-[10px] uppercase font-mono text-stone-400">
                      PHASE {i + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#292A2C] mb-2">
                    {stg.title}
                  </h3>
                  <p className="text-xs text-stone-700 leading-relaxed font-light mb-4">
                    {stg.description}
                  </p>
                  <div className="pt-3 border-t border-stone-200 text-[11px] text-stone-500">
                    {stg.detail}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-8 text-xs text-stone-500 italic text-center">
            * Note: This represents our standard operating approach, tailored to the specific parameters, compliance mandates, and deliverables of each agreement.
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: GOVERNMENT CONTRACTING & PROCUREMENT (INTERSECTION REVEAL)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#292A2C] text-white border-b border-stone-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content (6 cols) */}
            <ScrollReveal direction="up" distance={28} duration={0.55} className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-5 h-[1.5px] bg-[#A65D67]" />
                <span className="text-xs font-mono uppercase tracking-widest text-stone-300 font-semibold">
                  GOVERNMENT CONTRACTING
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
                Supporting Mission Requirements with Coordinated Solutions.
              </h2>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
                RSVP ROSES LLC provides capabilities across communications procurement, equipment distribution, facilities-related services, property preservation, and strategic consulting. We welcome opportunities to engage with government agencies, prime contractors, and commercial partners whose requirements align with our capabilities.
              </p>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                Whether the requirement involves sourcing specialized equipment, coordinating logistics, supporting property-related operations, or contributing consulting expertise, we aim to provide a responsive and coordinated approach.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#A65D67] hover:bg-[#924e58] transition-colors"
                >
                  Discuss a Contract Opportunity
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={onOpenCapabilityStatement}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors inline-flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Capability Statement</span>
                </motion.button>
              </div>
            </ScrollReveal>

            {/* Right Structured Contracting Panel (6 cols) */}
            <ScrollReveal direction="left" distance={30} delay={0.15} duration={0.6} className="lg:col-span-6">
              <div className="bg-[#30202D] border border-white/20 p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="border-b border-white/15 pb-4 flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-stone-400 block">
                      Legal Business Name
                    </span>
                    <h3 className="font-serif text-2xl text-white">RSVP ROSES LLC</h3>
                    <p className="text-xs text-stone-300 mt-0.5">
                      Minority-Owned / Woman-Owned Small Business (Inc.)
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase text-stone-400 block">Status</span>
                    <span className="text-xs text-[#A65D67] font-semibold">Active & Registered</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-3 border border-white/10 group">
                    <span className="text-[10px] uppercase font-mono text-stone-400 block">CAGE Code</span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="font-mono text-base font-bold text-white">{COMPANY_INFO.cageCode}</span>
                      <button
                        onClick={() => handleCopy(COMPANY_INFO.cageCode, 'CAGE Code')}
                        className="text-stone-400 hover:text-white p-1"
                        title="Copy CAGE"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="bg-white/5 p-3 border border-white/10 group">
                    <span className="text-[10px] uppercase font-mono text-stone-400 block">SAM.gov UEI</span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="font-mono text-xs font-bold text-white break-all">{COMPANY_INFO.uei}</span>
                      <button
                        onClick={() => handleCopy(COMPANY_INFO.uei, 'UEI')}
                        className="text-stone-400 hover:text-white p-1"
                        title="Copy UEI"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* NAICS Quick Summary */}
                <div className="space-y-2 text-xs">
                  <span className="text-[10px] uppercase font-mono text-stone-400 block">
                    Primary NAICS Classifications
                  </span>
                  <div className="space-y-1">
                    {PRIMARY_NAICS.map((n) => (
                      <div key={n.code} className="flex items-center justify-between py-1 border-b border-white/10 text-stone-300">
                        <span className="font-mono font-semibold text-white">{n.code}</span>
                        <span className="text-[11px] text-stone-400 truncate max-w-[280px]">{n.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center text-xs">
                  <button
                    onClick={() => onNavigate('government-contracting')}
                    className="text-[#A65D67] hover:text-[#d38b95] font-medium inline-flex items-center gap-1"
                  >
                    Explore all government procurement details &rarr;
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: INDUSTRIES & MARKETS SERVED (STAGGERED REVEAL)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D9D4CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={24} duration={0.5} className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-[#A65D67]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#A65D67] font-semibold">
                WHERE OUR CAPABILITIES APPLY
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#292A2C]">
              Solutions for Complex, Interconnected Environments.
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              Explore how RSVP ROSES LLC aligns cross-disciplinary capabilities across government programs, prime contractor partnerships, commercial real estate, logistics, and community initiatives.
            </p>
          </ScrollReveal>

          {/* 5 Market Groupings Staggered */}
          <StaggerContainer staggerDelay={0.1} amount={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MARKET_GROUPS.map((mkt, idx) => (
              <StaggerItem 
                key={mkt.id} 
                distance={24}
                className={idx === 0 ? 'lg:col-span-2' : ''}
              >
                <div
                  className={`p-6 border border-[#D9D4CC] bg-[#FDFBF7] flex flex-col justify-between hover:border-[#30202D] hover:shadow-md transition-all h-full ${
                    idx === 0 ? 'bg-[#F6F2EB]' : ''
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#A65D67]">
                      <span>MARKET SECTOR {idx + 1}</span>
                      <span className="text-stone-400">{mkt.subtitle}</span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#292A2C]">
                      {mkt.title}
                    </h3>

                    <p className="text-xs text-stone-700 leading-relaxed font-light">
                      {mkt.description}
                    </p>

                    <div className="pt-3 border-t border-stone-200">
                      <span className="text-[10px] uppercase font-mono text-stone-500 font-semibold block mb-1">
                        Potential Applications:
                      </span>
                      <ul className="space-y-1 text-xs text-stone-600">
                        {mkt.potentialApplications.slice(0, 3).map((app, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-[11px]">
                            <span className="text-[#A65D67] font-mono">·</span>
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-stone-200">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="text-xs font-semibold text-[#30202D] hover:text-[#A65D67] inline-flex items-center gap-1 uppercase tracking-wider"
                    >
                      <span>Inquire About This Market</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-8 text-xs text-stone-500 italic text-center">
            * These describe relevant markets and potential partnership contexts aligned with our capabilities, not a claim of specific active contracts.
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: COMPANY FACTS & OWNERSHIP (INTERSECTION REVEAL)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F6F2EB] border-b border-[#D9D4CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={24} duration={0.5} className="max-w-3xl mb-12 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-[#A65D67]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#A65D67] font-semibold">
                COMPANY FACTS & IDENTIFIERS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#292A2C]">
              A Small Business Built Around Coordinated Solutions.
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light">
              Verified corporate registrations and complete North American Industry Classification System (NAICS) codes.
            </p>
          </ScrollReveal>

          {/* Structured Verified Information Table */}
          <ScrollReveal direction="up" distance={24} delay={0.1} duration={0.55} className="bg-white border border-[#D9D4CC] p-6 sm:p-8 space-y-8 shadow-sm">
            {/* Top Grid of Identity Facts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-[#D9D4CC]">
              <div>
                <span className="text-[10px] uppercase font-mono text-stone-500 block">Legal Entity Name</span>
                <span className="font-serif text-xl text-[#292A2C] font-semibold">{COMPANY_INFO.name}</span>
                <span className="text-xs text-stone-500 block mt-0.5">Established: {COMPANY_INFO.established}</span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono text-stone-500 block">Business Ownership Classification</span>
                <span className="text-xs font-semibold text-[#292A2C] block mt-1">
                  Minority-Owned / Woman-Owned Small Business
                </span>
                <span className="text-[11px] text-stone-500 block mt-0.5">Incorporation as stated in capability statement</span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono text-stone-500 block">Service Geographic Area</span>
                <span className="text-xs font-semibold text-[#292A2C] block mt-1">
                  {COMPANY_INFO.serviceCoverage}
                </span>
                <span className="text-[11px] text-stone-500 block mt-0.5">Headquarters: Newark, DE</span>
              </div>
            </div>

            {/* NAICS Classifications Semantic Table with Search */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#292A2C] font-bold">
                    Registered NAICS Classifications
                  </h3>
                  <span className="text-[11px] text-stone-500">
                    Click copy icon on any code for procurement forms
                  </span>
                </div>

                {/* Instant Search Bar */}
                <div className="relative w-full sm:w-64">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={naicsSearch}
                    onChange={(e) => setNaicsSearch(e.target.value)}
                    placeholder="Search code or industry..."
                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#FAF8F5] border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#30202D]"
                  />
                  {naicsSearch && (
                    <button
                      onClick={() => setNaicsSearch('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs"
                    >
                      &times;
                    </button>
                  )}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-stone-200">
                  <thead className="bg-[#FAF8F5] border-b border-stone-200 font-mono text-[11px] text-stone-600">
                    <tr>
                      <th className="py-2.5 px-4 font-semibold">Classification Type</th>
                      <th className="py-2.5 px-4 font-semibold">NAICS Code</th>
                      <th className="py-2.5 px-4 font-semibold">Industry Definition</th>
                      <th className="py-2.5 px-4 text-right font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {/* Primary Codes */}
                    {filteredPrimaryNaics.map((n) => (
                      <tr key={n.code} className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-2 px-4">
                          <span className="inline-block text-[10px] uppercase font-mono font-bold text-[#A65D67]">
                            PRIMARY
                          </span>
                        </td>
                        <td className="py-2 px-4 font-mono font-bold text-[#292A2C]">{n.code}</td>
                        <td className="py-2 px-4 text-stone-700">{n.title}</td>
                        <td className="py-2 px-4 text-right">
                          <button
                            onClick={() => handleCopy(n.code, `NAICS ${n.code}`)}
                            className="text-stone-400 hover:text-[#292A2C] inline-flex items-center gap-1 p-1"
                            title="Copy Code"
                          >
                            {copiedCode === n.code ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                            <span className="text-[10px] font-mono">Copy</span>
                          </button>
                        </td>
                      </tr>
                    ))}

                    {/* Additional Codes */}
                    {filteredAdditionalNaics.map((n) => (
                      <tr key={n.code} className="hover:bg-stone-50 transition-colors">
                        <td className="py-2 px-4">
                          <span className="inline-block text-[10px] uppercase font-mono text-stone-400">
                            ADDITIONAL
                          </span>
                        </td>
                        <td className="py-2 px-4 font-mono font-medium text-stone-800">{n.code}</td>
                        <td className="py-2 px-4 text-stone-600">{n.title}</td>
                        <td className="py-2 px-4 text-right">
                          <button
                            onClick={() => handleCopy(n.code, `NAICS ${n.code}`)}
                            className="text-stone-400 hover:text-[#292A2C] inline-flex items-center gap-1 p-1"
                            title="Copy Code"
                          >
                            {copiedCode === n.code ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                            <span className="text-[10px] font-mono">Copy</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: CLOSING CALL TO ACTION (INTERSECTION REVEAL)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F6F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={30} duration={0.65}>
            <div className="bg-[#30202D] text-white p-8 sm:p-14 lg:p-16 border border-stone-800 shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl space-y-6 relative z-10">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A65D67] font-semibold">
                  START A CONVERSATION
                </span>
                
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                  Have a Requirement to Discuss?
                </h2>

                <p className="text-base text-stone-300 font-light leading-relaxed">
                  Tell us about your procurement, logistics, property, facilities, or consulting needs. RSVP ROSES LLC welcomes conversations about aligned government and commercial opportunities.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A65D67] hover:bg-[#924e58] transition-colors"
                  >
                    Start a Conversation
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => onNavigate('capabilities')}
                    className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-transparent border border-white/30 hover:bg-white/10 transition-colors"
                  >
                    Explore Our Capabilities
                  </motion.button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
