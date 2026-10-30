import React from 'react';
import { motion } from 'motion/react';
import { 
  Building, 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  Check, 
  Copy, 
  CheckCircle2, 
  Package, 
  Truck, 
  Home, 
  Paintbrush, 
  Users, 
  LineChart 
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  PRIMARY_NAICS, 
  ADDITIONAL_NAICS, 
  DIFFERENTIATORS,
  CAPABILITIES
} from '../data/companyData';

interface GovContractingPageProps {
  onNavigate: (page: string) => void;
  onOpenCapabilityStatement: () => void;
  onCopyNotice: (msg: string) => void;
}

export const GovContractingPage: React.FC<GovContractingPageProps> = ({
  onNavigate,
  onOpenCapabilityStatement,
  onCopyNotice
}) => {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    onCopyNotice(`Copied ${label}: ${text}`);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const procurementGroups = [
    {
      groupTitle: "Procurement & Supply Chain Logistics",
      capabilities: [
        {
          title: "Communication Systems Procurement",
          desc: "Sourcing and delivery of Push-to-Talk over Cellular (PoC) radios and mission-critical communications gear with verified TAA and Section 889 alignment."
        },
        {
          title: "Logistics & Equipment Distribution",
          desc: "End-to-end supply chain support, local freight scheduling, and compliant delivery of specialized equipment for institutional depots."
        }
      ]
    },
    {
      groupTitle: "Facilities, Real Estate & Property Preservation",
      capabilities: [
        {
          title: "Real Estate & Facilities Consulting",
          desc: "Portfolio assessment, space planning, and strategic asset advisory for public sector and institutional facilities."
        },
        {
          title: "Property Preservation & Asset Management",
          desc: "Foreclosure-related maintenance, physical securitization, winterization, and transition staging for neighborhood stabilization."
        },
        {
          title: "Aesthetic & Appearance Enhancement",
          desc: "High-standard commercial interior and architectural painting, protective surface coatings, and local workforce coordination."
        }
      ]
    },
    {
      groupTitle: "Consulting & Community-Centered Engagement",
      capabilities: [
        {
          title: "Business Development Consulting",
          desc: "Helping agencies and commercial partners refine procurement strategies, streamline vendor scoping, and strengthen internal execution capacity."
        },
        {
          title: "Inclusive Community Engagement",
          desc: "Equity-centered outreach connecting public initiatives and services directly with underserved populations and neighborhood stakeholders."
        }
      ]
    }
  ];

  const engagementTypes = [
    {
      title: "Direct Procurement & Supply Requirements",
      desc: "Direct fulfillment for specialized communications equipment, electronics, and general facility supplies aligned with registered NAICS codes."
    },
    {
      title: "Subcontracting & Teaming Partnering",
      desc: "Collaborative participation as a responsive Minority- and Woman-Owned Small Business subcontractor supporting prime contract deliverables."
    },
    {
      title: "Logistics & Equipment Distribution",
      desc: "Regional freight coordination, scheduled transport, and last-mile logistics for government materials and supplies."
    },
    {
      title: "Property Preservation & Facilities Maintenance",
      desc: "Protective upkeep, cosmetic refurbishment, painting, and grounds preservation for agency properties and transitions."
    },
    {
      title: "Consulting & Community Stakeholder Outreach",
      desc: "Advisory services on procurement readiness, capacity expansion, and culturally grounded public communications."
    }
  ];

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
                FEDERAL & COMMERCIAL PROCUREMENT
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
              A Responsive Partner for Government and Commercial Requirements.
            </h1>
            <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed pt-2">
              RSVP ROSES LLC brings together procurement, equipment distribution, property services, facilities improvements, and consulting capabilities to support aligned operational requirements.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A65D67] hover:bg-[#924e58] transition-colors"
              >
                Discuss a Requirement
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={onOpenCapabilityStatement}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white border border-white/30 hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>View Capability Statement</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Structured Government Identifiers Bar */}
      <section className="bg-[#292A2C] text-white py-8 border-b border-stone-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div whileHover={{ y: -2 }} className="bg-white/5 p-4 border border-white/10">
              <span className="text-[10px] font-mono uppercase text-stone-400 block">CAGE Code</span>
              <div className="flex items-center justify-between mt-1">
                <span className="font-mono text-xl font-bold tracking-wider text-white">{COMPANY_INFO.cageCode}</span>
                <button
                  onClick={() => handleCopy(COMPANY_INFO.cageCode, 'CAGE Code')}
                  className="text-stone-400 hover:text-white p-1"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="bg-white/5 p-4 border border-white/10">
              <span className="text-[10px] font-mono uppercase text-stone-400 block">SAM.gov UEI</span>
              <div className="flex items-center justify-between mt-1">
                <span className="font-mono text-sm font-bold tracking-wider text-white break-all">{COMPANY_INFO.uei}</span>
                <button
                  onClick={() => handleCopy(COMPANY_INFO.uei, 'UEI')}
                  className="text-stone-400 hover:text-white p-1"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            <div className="bg-white/5 p-4 border border-white/10">
              <span className="text-[10px] font-mono uppercase text-stone-400 block">Business Ownership</span>
              <span className="text-xs font-semibold text-white block mt-1.5">
                Minority- & Woman-Owned Small Business
              </span>
              <span className="text-[11px] text-stone-400 block">Incorporation</span>
            </div>

            <div className="bg-white/5 p-4 border border-white/10">
              <span className="text-[10px] font-mono uppercase text-stone-400 block">Service Reach</span>
              <span className="text-xs font-semibold text-white block mt-1.5">
                Nationwide
              </span>
              <span className="text-[11px] text-stone-400 block">Operational focus in New York</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Bring (The 4 Differentiators) */}
      <section className="py-20 bg-white border-b border-[#D9D4CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A65D67] font-semibold">
              CONTRACTOR CAPABILITIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292A2C]">
              What We Bring to Procurement Partnerships
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              RSVP ROSES LLC is structured to solve operational challenges for contracting officers and prime teams who need responsive small business support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIFFERENTIATORS.map((diff, idx) => (
              <motion.div 
                key={diff.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-[#FAF8F5] p-6 sm:p-8 border border-[#D9D4CC] hover:border-[#30202D] transition-colors space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#A65D67]">
                    VALUE {diff.number}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-[#292A2C]">
                  {diff.title}
                </h3>
                <p className="text-xs font-medium text-stone-800 leading-relaxed">
                  {diff.summary}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed font-light pt-2 border-t border-stone-200">
                  {diff.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Procurement Capabilities Grouped */}
      <section className="py-20 bg-[#F6F2EB] border-b border-[#D9D4CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A65D67] font-semibold">
              PROCUREMENT CATEGORIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292A2C]">
              Coordinated Capability Groupings
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              To assist buyers in mapping scopes to our capabilities, our seven core competencies are organized into functional operational clusters.
            </p>
          </div>

          <div className="space-y-8">
            {procurementGroups.map((grp, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="bg-white border border-[#D9D4CC] p-6 sm:p-8"
              >
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#A65D67] font-bold pb-3 border-b border-stone-200">
                  {grp.groupTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {grp.capabilities.map((c, j) => (
                    <div key={j} className="space-y-1.5">
                      <h4 className="font-serif text-xl text-[#292A2C] font-semibold">{c.title}</h4>
                      <p className="text-xs text-stone-600 leading-relaxed font-light">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Potential Engagement Types */}
      <section className="py-20 bg-white border-b border-[#D9D4CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A65D67] font-semibold">
              PARTNERSHIP MODELS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292A2C]">
              Potential Engagement Types
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              We welcome inquiries from federal agencies, state/local procurement offices, and prime contractors for the following engagement structures:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementTypes.map((eng, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="bg-[#FAF8F5] p-6 border border-[#D9D4CC] flex flex-col justify-between hover:border-[#30202D] transition-colors"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-[#A65D67]">
                    0{idx + 1}.
                  </span>
                  <h3 className="font-serif text-xl text-[#292A2C]">
                    {eng.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    {eng.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-stone-200">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs font-medium text-[#30202D] hover:text-[#A65D67] inline-flex items-center gap-1"
                  >
                    Discuss this engagement &rarr;
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-xs text-stone-500 italic text-center">
            * Note: These are potential engagement types aligned with our registered capabilities and do not represent claims of active contracts or specific program set-asides.
          </div>
        </div>
      </section>

      {/* Closing Call to Action */}
      <section className="py-20 bg-[#30202D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A65D67] font-semibold">
            PROCUREMENT INTAKE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white">
            Let's Discuss Your Requirement.
          </h2>
          <p className="text-sm text-stone-300 font-light leading-relaxed">
            Share your procurement need, project scope, or potential partnership opportunity so we can determine whether it aligns with RSVP ROSES LLC's capabilities.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A65D67] hover:bg-[#924e58] transition-colors"
            >
              Contact RSVP ROSES
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={onOpenCapabilityStatement}
              className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white border border-white/30 hover:bg-white/10 transition-colors"
            >
              Review Capability Statement
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};
