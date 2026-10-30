import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Building, Users, Home, Truck, ShieldCheck, ChevronRight } from 'lucide-react';
import { MARKET_GROUPS } from '../data/companyData';

interface IndustriesPageProps {
  onNavigate: (page: string, capabilityId?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F6F2EB] text-[#292A2C]">
      {/* Page Hero */}
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
                MARKET ALIGNMENT
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
              Industries & Markets Served
            </h1>
            <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed pt-2">
              Discover how RSVP ROSES LLC aligns cross-disciplinary capabilities in procurement, logistics, consulting, property preservation, and facilities improvement across specialized market sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Detailed Section */}
      <section className="py-20 bg-[#F6F2EB] border-b border-[#D9D4CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {MARKET_GROUPS.map((mkt, idx) => {
            return (
              <motion.div
                key={mkt.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="bg-white border border-[#D9D4CC] p-8 sm:p-10 shadow-sm hover:border-[#30202D] transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#A65D67]">
                        MARKET 0{idx + 1}
                      </span>
                      <span className="text-[11px] font-mono text-stone-400">
                        / {mkt.subtitle}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl text-[#292A2C]">
                      {mkt.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                      {mkt.description}
                    </p>

                    <div className="pt-4">
                      <motion.button
                        whileHover={{ x: 2 }}
                        onClick={() => onNavigate('contact')}
                        className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#30202D] hover:bg-[#432d3f] transition-colors inline-flex items-center gap-2"
                      >
                        <span>Discuss an Opportunity</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>
                  </div>

                  <div className="lg:col-span-7 bg-[#FAF8F5] p-6 border border-stone-200 space-y-5">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold mb-2">
                        Relevant Core Capabilities:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {mkt.relevantCapabilities.map((cap, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-xs font-medium bg-white border border-stone-300 px-3 py-1 text-stone-800"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-stone-200 pt-4">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold mb-2">
                        Potential Sector Applications:
                      </h4>
                      <ul className="space-y-2 text-xs text-stone-700">
                        {mkt.potentialApplications.map((app, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <span className="text-[#A65D67] font-mono mt-0.5 font-bold">&rsaquo;</span>
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <div className="text-xs text-stone-500 italic text-center pt-4">
            * Note: These descriptions outline potential market applications and partner contexts aligned with RSVP ROSES LLC's operational capabilities, not a verification of active client relationships or contract awards.
          </div>
        </div>
      </section>

      {/* Action Footer */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="font-serif text-3xl text-[#292A2C]">
            Ready to Explore Partnership in Your Sector?
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-light">
            Contact RSVP ROSES LLC to review your project scope or procurement requirements.
          </p>
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#A65D67] hover:bg-[#924e58] transition-colors"
            >
              Contact Our Team
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};
