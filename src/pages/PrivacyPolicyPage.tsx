import React from 'react';
import { ShieldCheck, Lock, FileText, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface PrivacyPolicyPageProps {
  onNavigate: (page: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F6F2EB] text-[#292A2C]">
      {/* Header */}
      <section className="bg-[#30202D] text-white py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A65D67] font-semibold">
              LEGAL & CONFIDENTIALITY
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-white">
              Privacy Policy & Terms of Information
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 font-light">
              Effective Date: October 2026 · RSVP ROSES LLC
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-white border-b border-[#D9D4CC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs text-stone-700 leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-[#292A2C] font-semibold">
              1. Commitment to Information Integrity & Confidentiality
            </h2>
            <p>
              RSVP ROSES LLC ("Company," "we," "us," or "our") respects the privacy and proprietary nature of inquiries submitted by federal agencies, prime contractors, commercial partners, and prospective vendors. This Privacy Policy details how we handle information submitted through our website (<span className="font-mono text-stone-900">{COMPANY_INFO.website}</span>) and official correspondence channels (<span className="font-mono text-stone-900">{COMPANY_INFO.email}</span>).
            </p>
          </div>

          <div className="space-y-3 border-t border-stone-200 pt-6">
            <h2 className="font-serif text-2xl text-[#292A2C] font-semibold">
              2. Information Collected
            </h2>
            <p>
              When you submit a requirement, inquiry, or partnership form, we collect information necessary to assess and respond to your operational needs:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-stone-600">
              <li>Contact details: Name, organizational email, company/agency name, telephone number.</li>
              <li>Procurement & project parameters: Scope descriptions, product requirements, delivery locations, and timeframe specifications.</li>
              <li>Technical communication logs: Transmission timestamps and reference identification numbers generated to track inquiries.</li>
            </ul>
          </div>

          <div className="space-y-3 border-t border-stone-200 pt-6">
            <h2 className="font-serif text-2xl text-[#292A2C] font-semibold">
              3. Purpose & Use of Submitted Data
            </h2>
            <p>
              Submitted data is used strictly for legitimate commercial and government procurement evaluations:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-stone-600">
              <li>Conducting capability alignment evaluations for procurement or subcontracting opportunities.</li>
              <li>Responding directly to inquiries via email, phone, or scheduled conference.</li>
              <li>Fulfilling compliance requirements under applicable government procurement regulations.</li>
              <li>We do not sell, rent, lease, or monetize user data to third-party marketing entities.</li>
            </ul>
          </div>

          <div className="space-y-3 border-t border-stone-200 pt-6">
            <h2 className="font-serif text-2xl text-[#292A2C] font-semibold">
              4. Security Measures & Retention
            </h2>
            <p>
              We maintain administrative, physical, and technical safeguards designed to protect submitted information against unauthorized access, disclosure, alteration, or destruction. We retain commercial inquiries only as long as necessary to review, quote, fulfill, or maintain appropriate records under commercial and government contracting compliance guidelines.
            </p>
          </div>

          <div className="space-y-3 border-t border-stone-200 pt-6">
            <h2 className="font-serif text-2xl text-[#292A2C] font-semibold">
              5. Official Communication Channels
            </h2>
            <p>
              Please note our official contact channels:
            </p>
            <div className="bg-[#FAF8F5] p-4 border border-stone-300 font-mono text-[11px] space-y-1">
              <div>Entity: RSVP ROSES LLC</div>
              <div>Address: {COMPANY_INFO.businessAddress}</div>
              <div>Direct Phone: {COMPANY_INFO.phone}</div>
              <div>Toll-Free: {COMPANY_INFO.tollFree}</div>
              <div>Facsimile: {COMPANY_INFO.fax}</div>
              <div>Email: {COMPANY_INFO.email}</div>
              <div>Website: {COMPANY_INFO.website}</div>
              <div>CAGE: {COMPANY_INFO.cageCode} | UEI: {COMPANY_INFO.uei}</div>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#30202D] hover:bg-[#432d3f] transition-colors inline-flex items-center gap-2"
            >
              <span>Return to Contact Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
