import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, CheckCircle2, Copy, Check } from 'lucide-react';
import { COMPANY_INFO, PRIMARY_NAICS, ADDITIONAL_NAICS, DIFFERENTIATORS } from '../data/companyData';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenCapabilityStatement: () => void;
  onCopyNotice: (msg: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenCapabilityStatement,
  onCopyNotice,
}) => {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    onCopyNotice(`Copied ${label}: ${text}`);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const philosophies = [
    {
      title: "Accountability & Clear Communication",
      desc: "Maintaining responsive, consistent dialogue and direct operational transparency from initial discovery through final deliverables."
    },
    {
      title: "Coordinated Delivery: Planning to Execution",
      desc: "Bridging strategic scoping, procurement compliance, physical logistics, and on-site implementation under a single accountable lead."
    },
    {
      title: "Quality-Conscious Service & Follow-Through",
      desc: "Prioritizing meticulous workmanship, strict adherence to technical parameters (including TAA and Section 889), and diligent post-delivery inspection."
    },
    {
      title: "Inclusive, Community-Aware Engagement",
      desc: "Embedding equity, diverse local hiring, and authentic civic awareness into public and commercial projects to foster flourishing outcomes."
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
                ABOUT RSVP ROSES LLC
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
              Built on Coordination.
              <br />
              Guided by Quality.
              <br />
              <span className="text-[#A65D67] italic font-normal">Focused on Results.</span>
            </h1>
            <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed pt-2">
              RSVP ROSES LLC is a small business providing integrated solutions across procurement, logistics, consulting, property services, facilities improvements, and inclusive community engagement. Established in November 2019, the company brings these capabilities together through a coordinated approach designed to address the needs of government and commercial partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Purpose & Operating Philosophy */}
      <section className="py-20 bg-white border-b border-[#D9D4CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Purpose Statement (5 cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-[1.5px] bg-[#A65D67]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#A65D67] font-semibold">
                  OUR PURPOSE
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#292A2C]">
                Connecting Strategy with Practical Physical Execution.
              </h2>
              <p className="text-sm text-stone-700 leading-relaxed font-light">
                Modern operational requirements often suffer from fragmented vendor handoffs—where consultants advise on plans, suppliers ship hardware without context, and separate contractors execute physical repairs without alignment.
              </p>
              <p className="text-sm text-stone-700 leading-relaxed font-light">
                RSVP ROSES LLC was established to unify these related capabilities into a cohesive, dependable partnership. By coordinating planning, compliant hardware sourcing, freight distribution, and facilities improvement, we simplify operational execution while maintaining rigorous accountability.
              </p>

              <div className="pt-2">
                <div className="bg-[#FAF8F5] p-4 border border-[#D9D4CC] text-xs space-y-1">
                  <div className="font-mono uppercase text-[#A65D67] font-bold text-[10px]">
                    Brand Statement
                  </div>
                  <p className="font-serif text-base text-[#30202D] italic">
                    "{COMPANY_INFO.brandStatement}"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: 4 Operating Principles (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-5 h-[1.5px] bg-[#A65D67]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#A65D67] font-semibold">
                  OPERATING PHILOSOPHY
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#292A2C]">
                Four Foundational Principles
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {philosophies.map((p, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ y: -2 }}
                    className="bg-[#FAF8F5] p-5 border border-[#D9D4CC] hover:border-[#30202D] transition-colors space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#A65D67]">0{idx + 1}.</span>
                      <h3 className="font-serif text-lg text-[#292A2C] font-semibold">{p.title}</h3>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed font-light">
                      {p.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="text-[11px] text-stone-500 italic">
                * Note: These principles are operational guidelines established by RSVP ROSES LLC from our capability statement, not independently certified ISO or external standards.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach: Detailed Differentiators */}
      <section className="py-20 bg-[#F6F2EB] border-b border-[#D9D4CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-[#A65D67]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#A65D67] font-semibold">
                OUR APPROACH
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292A2C]">
              What Distinguishes RSVP ROSES LLC
            </h2>
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              Our differentiators reflect the practical way we engage with government agencies, prime contractors, and commercial organizations.
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
                className="bg-white p-6 sm:p-8 border border-[#D9D4CC] shadow-sm hover:border-[#30202D] transition-colors space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#A65D67] bg-[#A65D67]/10 px-2 py-0.5">
                    DIFFERENTIATOR {diff.number}
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

      {/* Verified Business Information */}
      <section className="py-20 bg-white border-b border-[#D9D4CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A65D67] font-semibold">
              STRUCTURED CORPORATE DATA
            </span>
            <h2 className="font-serif text-3xl text-[#292A2C]">
              Verified Company Information
            </h2>
          </div>

          <div className="bg-[#FAF8F5] border border-[#D9D4CC] p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-6 border-b border-stone-200 text-xs">
              <div>
                <span className="text-stone-500 font-mono text-[10px] uppercase block">Legal Name</span>
                <span className="font-bold text-[#292A2C] text-sm block mt-0.5">{COMPANY_INFO.name}</span>
                <span className="text-stone-500 text-[11px]">Est. {COMPANY_INFO.established}</span>
              </div>
              <div>
                <span className="text-stone-500 font-mono text-[10px] uppercase block">Business Classification</span>
                <span className="font-medium text-[#292A2C] block mt-0.5">{COMPANY_INFO.businessType}</span>
              </div>
              <div>
                <span className="text-stone-500 font-mono text-[10px] uppercase block">CAGE Code</span>
                <span className="font-mono font-bold text-sm text-[#292A2C] block mt-0.5">{COMPANY_INFO.cageCode}</span>
              </div>
              <div>
                <span className="text-stone-500 font-mono text-[10px] uppercase block">SAM.gov UEI</span>
                <span className="font-mono font-bold text-xs text-[#292A2C] block mt-0.5 break-all">{COMPANY_INFO.uei}</span>
              </div>
            </div>

            {/* Address & Service Area */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-stone-700">
              <div>
                <span className="text-stone-500 font-mono text-[10px] uppercase block">Registered Address</span>
                <p className="mt-1 font-medium">{COMPANY_INFO.businessAddress}</p>
              </div>
              <div>
                <span className="text-stone-500 font-mono text-[10px] uppercase block">Geographic Coverage</span>
                <p className="mt-1 font-medium">{COMPANY_INFO.serviceCoverage}</p>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-12 text-center flex flex-wrap justify-center items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#A65D67] hover:bg-[#924e58] transition-colors"
            >
              Discuss a Potential Engagement
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={onOpenCapabilityStatement}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#30202D] border border-[#30202D] hover:bg-[#30202D] hover:text-white transition-colors"
            >
              View Capability Statement Document
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};
