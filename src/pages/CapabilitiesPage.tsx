import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  ArrowRight, 
  Check, 
  Copy, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  ChevronDown,
  Search,
  Filter,
  RotateCw
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  PRIMARY_NAICS, 
  ADDITIONAL_NAICS, 
  CAPABILITIES,
  CapabilityItem
} from '../data/companyData';
import { 
  CapabilitiesPageSkeleton, 
  NaicsTableSkeleton 
} from '../components/CapabilitySkeleton';

interface CapabilitiesPageProps {
  onNavigate: (page: string, capabilityId?: string) => void;
  onOpenCapabilityStatement: () => void;
  onCopyNotice: (msg: string) => void;
  selectedCapabilityId?: string;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({
  onNavigate,
  onOpenCapabilityStatement,
  onCopyNotice,
  selectedCapabilityId
}) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'procurement' | 'facilities' | 'consulting'>('all');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate realistic data initialization & asset verification on load
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // When an anchor link is specified, scroll to it once loading finishes
  useEffect(() => {
    if (!isLoading && selectedCapabilityId) {
      const timer = setTimeout(() => {
        const el = document.getElementById(selectedCapabilityId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading, selectedCapabilityId]);

  const handleManualRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    onCopyNotice(`Copied NAICS ${code} to clipboard`);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const filteredCapabilities = useMemo(() => {
    return CAPABILITIES.filter((cap) => {
      const matchesSearch = 
        !searchQuery.trim() ||
        cap.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cap.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cap.detailedDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cap.relevantActivities.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));

      let matchesCategory = true;
      if (activeCategory === 'procurement') {
        matchesCategory = cap.id === 'communication-systems' || cap.id === 'logistics-distribution';
      } else if (activeCategory === 'facilities') {
        matchesCategory = cap.id === 'real-estate-facilities' || cap.id === 'property-preservation' || cap.id === 'aesthetic-enhancement';
      } else if (activeCategory === 'consulting') {
        matchesCategory = cap.id === 'community-engagement' || cap.id === 'business-development';
      }

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="bg-[#F6F2EB] text-[#292A2C]">
      {/* Page Hero Header */}
      <section className="bg-[#30202D] text-white py-16 lg:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#A65D67]" />
              <span className="text-xs font-mono uppercase tracking-widest text-stone-300 font-semibold">
                CORE CAPABILITIES & SCOPES
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
              Our Capabilities
            </h1>
            <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed pt-2">
              Explore RSVP ROSES LLC's integrated services across procurement, logistics, real estate, facilities, property preservation, community engagement, and business development consulting.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={onOpenCapabilityStatement}
                className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#A65D67] hover:bg-[#924e58] transition-colors inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>View Capability Statement Document</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => onNavigate('contact')}
                className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white border border-white/30 hover:bg-white/10 transition-colors"
              >
                Discuss a Requirement
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Bar Toolbar */}
      <section className="bg-[#292A2C] text-stone-300 py-3.5 border-b border-stone-700 sticky top-20 z-20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-xs whitespace-nowrap pb-1 md:pb-0">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1 font-medium transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-[#A65D67] text-white'
                    : 'text-stone-300 hover:text-white bg-white/5'
                }`}
              >
                All (7)
              </button>
              <button
                onClick={() => setActiveCategory('procurement')}
                className={`px-3 py-1 font-medium transition-colors ${
                  activeCategory === 'procurement'
                    ? 'bg-[#A65D67] text-white'
                    : 'text-stone-300 hover:text-white bg-white/5'
                }`}
              >
                Procurement & Logistics
              </button>
              <button
                onClick={() => setActiveCategory('facilities')}
                className={`px-3 py-1 font-medium transition-colors ${
                  activeCategory === 'facilities'
                    ? 'bg-[#A65D67] text-white'
                    : 'text-stone-300 hover:text-white bg-white/5'
                }`}
              >
                Property & Facilities
              </button>
              <button
                onClick={() => setActiveCategory('consulting')}
                className={`px-3 py-1 font-medium transition-colors ${
                  activeCategory === 'consulting'
                    ? 'bg-[#A65D67] text-white'
                    : 'text-stone-300 hover:text-white bg-white/5'
                }`}
              >
                Consulting & Community
              </button>
            </div>

            {/* Quick Search & Reload Trigger */}
            <div className="flex items-center gap-2">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter capabilities..."
                  className="w-full pl-8 pr-3 py-1 text-xs bg-white/10 text-white placeholder-stone-400 border border-white/20 focus:outline-none focus:border-[#A65D67]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white text-xs"
                  >
                    &times;
                  </button>
                )}
              </div>

              {/* Refresh / Reload Simulation Button */}
              <button
                onClick={handleManualRefresh}
                disabled={isLoading}
                title="Refresh capabilities directory"
                className="p-1.5 bg-white/5 hover:bg-white/15 border border-white/15 text-stone-300 hover:text-white transition-colors focus:outline-none shrink-0"
              >
                <RotateCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-[#A65D67]' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Detailed Sections (With Loading Skeletons) */}
      <section className="py-20 lg:py-28 bg-[#F6F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="skeleton-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <CapabilitiesPageSkeleton />
              </motion.div>
            ) : (
              <motion.div
                key="loaded-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="space-y-16"
              >
                {filteredCapabilities.map((cap, idx) => {
                  const isReversed = idx % 2 === 1;
                  return (
                    <motion.div
                      key={cap.id}
                      id={cap.id}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="scroll-mt-32 bg-white border border-[#D9D4CC] p-8 sm:p-12 shadow-sm hover:border-[#A65D67] transition-colors"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                        {/* Visual Column */}
                        <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                          <div className="border border-stone-200 overflow-hidden bg-stone-100 aspect-[4/3] relative group">
                            <img
                              src={cap.imageSrc}
                              alt={cap.imageAlt}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        </div>

                        {/* Details Column */}
                        <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs font-bold text-white bg-[#30202D] px-2.5 py-1">
                              CAPABILITY {cap.number}
                            </span>
                            {cap.keyConsideration && (
                              <span className="text-[11px] font-mono text-[#A65D67] font-semibold">
                                Verified Scope Parameter
                              </span>
                            )}
                          </div>

                          <h2 className="font-serif text-3xl sm:text-4xl text-[#292A2C]">
                            {cap.title}
                          </h2>

                          <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                            {cap.detailedDesc}
                          </p>

                          {cap.keyConsideration && (
                            <div className="bg-[#FAF8F5] p-3.5 border-l-2 border-[#A65D67] text-xs text-stone-700">
                              <strong className="block text-[#292A2C] font-semibold mb-0.5">
                                Compliance & Standards Alignment:
                              </strong>
                              <span>{cap.keyConsideration}</span>
                            </div>
                          )}

                          {/* Relevant Operational Activities */}
                          <div className="space-y-2 pt-2">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold">
                              Explicit Operational Activities:
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                              {cap.relevantActivities.map((act, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-[#A65D67] font-mono mt-0.5">·</span>
                                  <span>{act}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Applicable Markets */}
                          <div className="space-y-2 pt-2 border-t border-stone-200">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold">
                              Applicable Markets & Partner Types:
                            </h4>
                            <ul className="space-y-1 text-xs text-stone-600">
                              {cap.applicableMarkets.map((mkt, i) => (
                                <li key={i} className="flex items-start gap-2 text-[11px]">
                                  <span className="text-stone-400 font-mono mt-0.5">&rsaquo;</span>
                                  <span>{mkt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Action Button */}
                          <div className="pt-4 flex items-center gap-4">
                            <motion.button
                              whileHover={{ x: 2 }}
                              onClick={() => onNavigate('contact')}
                              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#30202D] hover:bg-[#432d3f] transition-colors inline-flex items-center gap-1.5"
                            >
                              <span>Discuss This Capability</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {filteredCapabilities.length === 0 && (
                  <div className="p-12 text-center bg-white border border-stone-200 text-stone-500 text-sm">
                    No capabilities found matching "{searchQuery}". Try selecting "All" or clearing the search.
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Semantic NAICS Codes Table Section (With Loading Skeleton) */}
      <section className="py-20 bg-white border-t border-[#D9D4CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="naics-skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <NaicsTableSkeleton />
              </motion.div>
            ) : (
              <motion.div
                key="naics-loaded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#A65D67] font-semibold">
                      PROCUREMENT DIRECTORY
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#292A2C] mt-1">
                      NAICS Code Classifications
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 font-light">
                      Complete list of North American Industry Classification System codes registered under RSVP ROSES LLC.
                    </p>
                  </div>

                  <button
                    onClick={onOpenCapabilityStatement}
                    className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#30202D] border border-[#30202D] hover:bg-[#30202D] hover:text-white transition-colors inline-flex items-center gap-2 shrink-0"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Capability Statement Summary</span>
                  </button>
                </div>

                <div className="overflow-x-auto border border-stone-200 bg-[#FAF8F5]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#30202D] text-white font-mono text-[11px]">
                      <tr>
                        <th className="py-3 px-4 font-semibold uppercase tracking-wider">Classification</th>
                        <th className="py-3 px-4 font-semibold uppercase tracking-wider">NAICS Code</th>
                        <th className="py-3 px-4 font-semibold uppercase tracking-wider">Official Title Description</th>
                        <th className="py-3 px-4 text-right font-semibold uppercase tracking-wider">Copy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      {PRIMARY_NAICS.map((n) => (
                        <tr key={n.code} className="hover:bg-amber-50/50 transition-colors">
                          <td className="py-2.5 px-4">
                            <span className="font-mono text-[10px] font-bold text-[#A65D67] bg-[#A65D67]/10 px-2 py-0.5">
                              PRIMARY NAICS
                            </span>
                          </td>
                          <td className="py-2.5 px-4 font-mono font-bold text-sm text-[#292A2C]">{n.code}</td>
                          <td className="py-2.5 px-4 text-stone-800 font-medium">{n.title}</td>
                          <td className="py-2.5 px-4 text-right">
                            <button
                              onClick={() => handleCopy(n.code)}
                              className="text-stone-400 hover:text-[#292A2C] p-1.5 transition-colors"
                              title="Copy NAICS code"
                            >
                              {copiedCode === n.code ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </td>
                        </tr>
                      ))}
                      {ADDITIONAL_NAICS.map((n) => (
                        <tr key={n.code} className="hover:bg-stone-50 transition-colors">
                          <td className="py-2.5 px-4">
                            <span className="font-mono text-[10px] text-stone-500">
                              ADDITIONAL
                            </span>
                          </td>
                          <td className="py-2.5 px-4 font-mono font-medium text-stone-700">{n.code}</td>
                          <td className="py-2.5 px-4 text-stone-600">{n.title}</td>
                          <td className="py-2.5 px-4 text-right">
                            <button
                              onClick={() => handleCopy(n.code)}
                              className="text-stone-400 hover:text-[#292A2C] p-1.5 transition-colors"
                              title="Copy NAICS code"
                            >
                              {copiedCode === n.code ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};
