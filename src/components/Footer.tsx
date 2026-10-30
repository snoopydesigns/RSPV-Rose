import React from 'react';
import { Mail, Phone, MapPin, Printer, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenCapabilityStatement?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCapabilityStatement }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#30202D] text-[#F6F2EB] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand & Purpose Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif text-2xl lg:text-3xl text-white tracking-tight">
                RSVP ROSES <span className="text-xs font-sans uppercase tracking-widest text-[#A65D67]">LLC</span>
              </span>
              <p className="text-xs font-sans tracking-wider uppercase text-stone-300 mt-1">
                {COMPANY_INFO.tagline}
              </p>
            </div>
            
            <p className="text-xs leading-relaxed text-stone-300 max-w-sm">
              {COMPANY_INFO.brandStatement} A Minority-Owned and Woman-Owned Small Business providing integrated government procurement, logistics, facilities consulting, property preservation, and strategic execution.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 text-xs text-stone-300">
                <ShieldCheck className="w-4 h-4 text-[#A65D67]" />
                <span>Minority & Woman-Owned Small Business (Inc.)</span>
              </div>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('capabilities')}
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Capabilities & Competencies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('government-contracting')}
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Government Contracting
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Industries & Markets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy-policy')}
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>

            {onOpenCapabilityStatement && (
              <div className="pt-2">
                <button
                  onClick={onOpenCapabilityStatement}
                  className="text-xs text-[#A65D67] hover:text-[#c47783] inline-flex items-center gap-1 font-medium transition-colors"
                >
                  View Capability Statement Document
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A65D67] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.businessAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A65D67] shrink-0" />
                <div>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white font-mono block">
                    {COMPANY_INFO.phone}
                  </a>
                  <span className="text-[10px] text-stone-400">Toll-Free: </span>
                  <a href={`tel:${COMPANY_INFO.tollFree}`} className="hover:text-white font-mono text-[11px]">
                    {COMPANY_INFO.tollFree}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Printer className="w-4 h-4 text-[#A65D67] shrink-0" />
                <span className="font-mono">Fax: {COMPANY_INFO.fax}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A65D67] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white underline underline-offset-2">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <ExternalLink className="w-4 h-4 text-[#A65D67] shrink-0" />
                <span className="text-stone-300 font-mono">{COMPANY_INFO.website}</span>
              </div>
            </div>
          </div>

          {/* Procurement Data Identifiers (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400">
              Contract Identifiers
            </h4>
            <div className="space-y-2 text-xs">
              <div className="bg-white/5 p-2.5 border border-white/10">
                <span className="text-[10px] uppercase font-mono text-stone-400 block">CAGE Code</span>
                <span className="font-mono font-bold text-sm tracking-wider text-white">{COMPANY_INFO.cageCode}</span>
              </div>
              <div className="bg-white/5 p-2.5 border border-white/10">
                <span className="text-[10px] uppercase font-mono text-stone-400 block">UEI (SAM.gov)</span>
                <span className="font-mono text-xs tracking-wider text-white break-all">{COMPANY_INFO.uei}</span>
              </div>
              <div className="bg-white/5 p-2.5 border border-white/10">
                <span className="text-[10px] uppercase font-mono text-stone-400 block">Established</span>
                <span className="text-xs text-white">{COMPANY_INFO.established}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Domain Verification Notice & Legal Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-stone-400">
          <div className="space-y-1">
            <p>
              &copy; {currentYear} RSVP ROSES LLC. All rights reserved.
            </p>
            <p className="text-[11px] text-stone-400">
              Official Correspondence: {COMPANY_INFO.domainNotice}
            </p>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <button
              onClick={() => onNavigate('privacy-policy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy & Terms
            </button>
            <button
              onClick={() => onNavigate('government-contracting')}
              className="hover:text-white transition-colors"
            >
              Procurement & NAICS
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-[#A65D67] hover:text-[#c47783] transition-colors"
            >
              Inquire Directly
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
