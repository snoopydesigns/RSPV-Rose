import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Copy, Check, Download, ShieldCheck, Building2, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, PRIMARY_NAICS, ADDITIONAL_NAICS, CAPABILITIES, DIFFERENTIATORS } from '../data/companyData';

interface CapabilityStatementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyNotice?: (text: string) => void;
}

export const CapabilityStatementModal: React.FC<CapabilityStatementModalProps> = ({
  isOpen,
  onClose,
  onCopyNotice
}) => {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    if (onCopyNotice) onCopyNotice(`Copied ${code} to clipboard`);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white text-[#292A2C] shadow-2xl border border-stone-300 max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#30202D] text-white border-b border-[#30202D]">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-[#A65D67]" />
              <div>
                <h3 className="font-serif text-lg tracking-wide text-white">
                  Official Capability Statement
                </h3>
                <p className="text-[11px] font-sans text-stone-300">
                  RSVP ROSES LLC · CAGE: 24K75 · UEI: GGPSJBBL8WK3
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 transition-colors focus:outline-none"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 text-stone-300 hover:text-white transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Printable Statement Body */}
          <div ref={printRef} className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#FAF8F5]">
            {/* Top Document Header */}
            <div className="border-b-2 border-[#30202D] pb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-mono text-[#A65D67] font-semibold block">
                  Capability Statement
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl text-[#30202D] mt-1">
                  RSVP ROSES LLC
                </h1>
                <p className="text-sm font-medium text-stone-600 italic mt-0.5">
                  {COMPANY_INFO.tagline}
                </p>
                <p className="text-xs text-stone-500 mt-1">
                  {COMPANY_INFO.brandStatement}
                </p>
              </div>

              {/* Quick Identifiers Box */}
              <div className="bg-white border border-stone-300 p-4 min-w-[240px] shadow-sm text-xs space-y-1.5">
                <div className="flex justify-between items-center pb-1 border-b border-stone-200">
                  <span className="text-stone-500 font-mono">CAGE:</span>
                  <span className="font-mono font-bold text-sm text-[#30202D]">{COMPANY_INFO.cageCode}</span>
                </div>
                <div className="flex justify-between items-center pb-1 border-b border-stone-200">
                  <span className="text-stone-500 font-mono">UEI:</span>
                  <span className="font-mono font-bold text-xs text-[#30202D]">{COMPANY_INFO.uei}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-500">Established:</span>
                  <span className="font-medium">{COMPANY_INFO.established}</span>
                </div>
                <div className="text-[11px] text-[#A65D67] font-medium pt-1">
                  Minority- & Woman-Owned Small Business
                </div>
              </div>
            </div>

            {/* Section: Company Overview */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#30202D] font-bold border-b border-stone-300 pb-1">
                Company Overview
              </h2>
              <p className="text-xs leading-relaxed text-stone-700">
                RSVP ROSES LLC is an integrated solutions partner that coordinates government procurement support, mission-critical communications equipment sourcing, freight logistics, commercial real estate & facilities consulting, property preservation, and aesthetic appearance enhancement. Established in November 2019, RSVP ROSES combines strategic planning with practical physical execution to provide a streamlined, single point of contact for complex operational requirements across federal, state, and commercial engagements.
              </p>
            </div>

            {/* Two-Column Grid: Core Competencies & Differentiators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Core Competencies */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-wider text-[#30202D] font-bold border-b border-stone-300 pb-1">
                  Core Competencies
                </h2>
                <ul className="space-y-2.5 text-xs text-stone-700">
                  {CAPABILITIES.map((cap) => (
                    <li key={cap.id} className="border-l-2 border-[#A65D67] pl-2.5">
                      <strong className="text-[#30202D] block font-semibold">
                        {cap.number}. {cap.title}
                      </strong>
                      <span className="text-stone-600 text-[11px] leading-snug block">
                        {cap.shortDesc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Differentiators & Past Focus */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-wider text-[#30202D] font-bold border-b border-stone-300 pb-1 mb-3">
                    Key Differentiators
                  </h2>
                  <div className="space-y-3 text-xs text-stone-700">
                    {DIFFERENTIATORS.map((diff) => (
                      <div key={diff.number} className="bg-white p-2.5 border border-stone-200">
                        <div className="font-semibold text-[#30202D] flex items-center gap-1.5">
                          <span className="font-mono text-[#A65D67] text-[11px]">{diff.number}.</span>
                          {diff.title}
                        </div>
                        <p className="text-[11px] text-stone-600 mt-0.5 leading-relaxed">
                          {diff.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coverage & Compliance */}
                <div className="bg-white p-3 border border-stone-200 space-y-1.5 text-xs">
                  <span className="text-[11px] font-mono uppercase font-bold text-stone-500 block">
                    Service Area & Compliance
                  </span>
                  <p className="text-[11px] text-stone-700">
                    <strong>Service Coverage:</strong> Nationwide, with active operational focus in New York.
                  </p>
                  <p className="text-[11px] text-stone-700">
                    <strong>Procurement Standards:</strong> Ensures compliance with applicable TAA and Section 889 federal requirements for communication equipment sourcing.
                  </p>
                </div>
              </div>
            </div>

            {/* NAICS Codes Section */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#30202D] font-bold border-b border-stone-300 pb-1">
                NAICS Codes (North American Industry Classification System)
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Primary NAICS */}
                <div className="bg-white p-3 border border-stone-300">
                  <span className="text-[10px] uppercase font-mono font-bold text-[#A65D67] block mb-2">
                    Primary NAICS Codes
                  </span>
                  <div className="space-y-1.5">
                    {PRIMARY_NAICS.map((n) => (
                      <div key={n.code} className="flex items-center justify-between group">
                        <div>
                          <span className="font-mono font-bold text-[#30202D] mr-2">{n.code}</span>
                          <span className="text-stone-600 text-[11px]">{n.title}</span>
                        </div>
                        <button
                          onClick={() => handleCopy(n.code)}
                          className="text-stone-400 hover:text-[#30202D] p-1 shrink-0"
                          title="Copy code"
                        >
                          {copiedCode === n.code ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional NAICS */}
                <div className="bg-white p-3 border border-stone-300">
                  <span className="text-[10px] uppercase font-mono font-bold text-stone-500 block mb-2">
                    Additional NAICS Codes
                  </span>
                  <div className="space-y-1.5">
                    {ADDITIONAL_NAICS.map((n) => (
                      <div key={n.code} className="flex items-center justify-between group">
                        <div>
                          <span className="font-mono font-semibold text-[#30202D] mr-2">{n.code}</span>
                          <span className="text-stone-600 text-[11px]">{n.title}</span>
                        </div>
                        <button
                          onClick={() => handleCopy(n.code)}
                          className="text-stone-400 hover:text-[#30202D] p-1 shrink-0"
                          title="Copy code"
                        >
                          {copiedCode === n.code ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact & Company Data Footer Block */}
            <div className="border-t-2 border-[#30202D] pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-700">
              <div>
                <strong className="block text-[#30202D] mb-1 font-mono uppercase text-[11px]">Corporate Office</strong>
                <p>{COMPANY_INFO.businessAddress}</p>
              </div>
              <div>
                <strong className="block text-[#30202D] mb-1 font-mono uppercase text-[11px]">Direct Telecommunications</strong>
                <p>Phone: {COMPANY_INFO.phone}</p>
                <p>Toll-Free: {COMPANY_INFO.tollFree}</p>
                <p>Fax: {COMPANY_INFO.fax}</p>
              </div>
              <div>
                <strong className="block text-[#30202D] mb-1 font-mono uppercase text-[11px]">Electronic Inquiries</strong>
                <p>Email: {COMPANY_INFO.email}</p>
                <p>Web: {COMPANY_INFO.website}</p>
                <p className="text-[10px] text-stone-500 mt-1">CAGE: {COMPANY_INFO.cageCode}</p>
              </div>
            </div>
          </div>

          {/* Modal Actions Footer */}
          <div className="px-6 py-3 bg-stone-100 border-t border-stone-200 flex justify-between items-center text-xs">
            <span className="text-stone-500">
              Official Capability Summary · Ready for print or procurement attachment
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-[#30202D] text-white hover:bg-[#432d3f] transition-colors flex items-center gap-1.5 font-medium"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Print / Download PDF</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 border border-stone-300 text-stone-700 hover:bg-stone-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
