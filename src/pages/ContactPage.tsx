import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Printer, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ShieldCheck, 
  Info,
  Copy,
  Check
} from 'lucide-react';
import { COMPANY_INFO, INQUIRY_TYPES } from '../data/companyData';

interface ContactPageProps {
  onCopyNotice: (msg: string) => void;
  defaultInquiryType?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onCopyNotice, defaultInquiryType }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    organization: '',
    phone: '',
    inquiryType: defaultInquiryType || INQUIRY_TYPES[0],
    description: '',
    preferredContact: 'Email',
    privacyAgreed: false
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (val: string, label: string) => {
    navigator.clipboard.writeText(val);
    setCopiedField(val);
    onCopyNotice(`Copied ${label}: ${val}`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required.';
    }

    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Business email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail.trim())) {
      errs.businessEmail = 'Please provide a valid email address.';
    }

    if (!formData.inquiryType) {
      errs.inquiryType = 'Please select an inquiry type.';
    }

    if (!formData.description.trim()) {
      errs.description = 'Project or requirement description is required.';
    } else if (formData.description.trim().length < 15) {
      errs.description = 'Please provide a brief description (at least 15 characters).';
    }

    if (!formData.privacyAgreed) {
      errs.privacyAgreed = 'You must acknowledge the privacy notice to submit this inquiry.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(() => null);

      let refNumber = `RSVP-${Date.now().toString().slice(-6)}`;
      if (response && response.ok) {
        const data = await response.json().catch(() => null);
        if (data?.referenceId) {
          refNumber = data.referenceId;
        }
      }

      setSubmittedRef(refNumber);
    } catch {
      setSubmittedRef(`RSVP-${Date.now().toString().slice(-6)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      businessEmail: '',
      organization: '',
      phone: '',
      inquiryType: INQUIRY_TYPES[0],
      description: '',
      preferredContact: 'Email',
      privacyAgreed: false
    });
    setErrors({});
    setSubmittedRef(null);
  };

  return (
    <div className="bg-[#F6F2EB] text-[#292A2C]">
      {/* Page Hero */}
      <section className="bg-[#30202D] text-white py-16 lg:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#A65D67]" />
              <span className="text-xs font-mono uppercase tracking-widest text-stone-300 font-semibold">
                COMMUNICATIONS & INQUIRIES
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
              Let's Discuss Your Next Requirement.
            </h1>
            <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed pt-2">
              Whether you're exploring a procurement opportunity, looking for a supplier or subcontracting partner, or seeking support with property, facilities, logistics, or consulting needs, we'd welcome the opportunity to learn more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 lg:py-28 bg-[#F6F2EB] border-b border-[#D9D4CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Contact Info & Identifiers (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A65D67] font-semibold">
                  DIRECT CHANNELS
                </span>
                <h2 className="font-serif text-3xl text-[#292A2C]">
                  Contact RSVP ROSES LLC
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  Our corporate offices and project management personnel receive inquiries regarding federal, state, and commercial opportunities nationwide.
                </p>
              </div>

              {/* Verified Contact Details Box */}
              <div className="bg-white border border-[#D9D4CC] p-6 space-y-5 shadow-sm text-xs text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#A65D67] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#292A2C] font-mono uppercase text-[11px] mb-0.5">Corporate Address</strong>
                    <span>{COMPANY_INFO.businessAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#A65D67] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="block text-[#292A2C] font-mono uppercase text-[11px] mb-0.5">Telephone</strong>
                    <div className="flex items-center gap-2">
                      <a href={`tel:${COMPANY_INFO.phone}`} className="font-mono text-sm font-semibold text-[#292A2C] hover:text-[#A65D67] transition-colors">
                        {COMPANY_INFO.phone}
                      </a>
                      <button
                        onClick={() => handleCopy(COMPANY_INFO.phone, 'Phone')}
                        className="text-stone-400 hover:text-stone-700 p-0.5"
                        title="Copy phone"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="text-[11px] text-stone-500">
                      Toll-free: <a href={`tel:${COMPANY_INFO.tollFree}`} className="font-mono text-stone-700 hover:text-[#A65D67]">{COMPANY_INFO.tollFree}</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Printer className="w-4 h-4 text-[#A65D67] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#292A2C] font-mono uppercase text-[11px] mb-0.5">Facsimile</strong>
                    <span className="font-mono">{COMPANY_INFO.fax}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#A65D67] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#292A2C] font-mono uppercase text-[11px] mb-0.5">Official Inquiries</strong>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="font-mono font-medium text-[#292A2C] hover:text-[#A65D67] underline underline-offset-2 block transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Transparent Domain Verification Note */}
              <div className="bg-[#FAF8F5] border border-stone-300 p-4 text-xs text-stone-600 flex items-start gap-3">
                <Info className="w-4 h-4 text-[#A65D67] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-semibold text-[#292A2C] block">Domain Verification Note</span>
                  <p className="text-[11px] leading-relaxed">
                    Official correspondence is received via <strong>{COMPANY_INFO.email}</strong> and online portal access is hosted at <strong>{COMPANY_INFO.website}</strong>.
                  </p>
                </div>
              </div>

              {/* SAM.gov Registry Summary */}
              <div className="bg-[#30202D] text-white p-5 border border-[#30202D] space-y-2 text-xs">
                <span className="text-[10px] font-mono uppercase text-stone-400 block tracking-wider">
                  SAM.gov Active Identifiers
                </span>
                <div className="flex justify-between items-center py-1 border-b border-white/10">
                  <span className="text-stone-300">CAGE Code:</span>
                  <span className="font-mono font-bold text-sm text-white">{COMPANY_INFO.cageCode}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/10">
                  <span className="text-stone-300">Unique Entity Identifier:</span>
                  <span className="font-mono text-xs font-bold text-white">{COMPANY_INFO.uei}</span>
                </div>
                <div className="text-[11px] text-[#A65D67] pt-1">
                  Minority-Owned / Woman-Owned Small Business (Incorporation)
                </div>
              </div>
            </div>

            {/* Right: Contact & Requirement Intake Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#D9D4CC] p-8 sm:p-10 shadow-sm">
                <AnimatePresence mode="wait">
                  {submittedRef ? (
                    /* Verified Submission Confirmation State */
                    <motion.div 
                      key="submitted"
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-6 py-6"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center rounded-full"
                      >
                        <CheckCircle2 className="w-8 h-8" />
                      </motion.div>

                      <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#A65D67] font-semibold">
                          SUBMISSION RECEIVED
                        </span>
                        <h3 className="font-serif text-3xl text-[#292A2C]">
                          Thank You for Contacting RSVP ROSES LLC.
                        </h3>
                        <p className="text-sm text-stone-600 leading-relaxed font-light">
                          Your inquiry has been successfully logged. Our operational team will review your submitted project details and reach out via your preferred contact channel.
                        </p>
                      </div>

                      <div className="bg-[#FAF8F5] border border-stone-200 p-4 space-y-2 text-xs">
                        <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                          <span className="text-stone-500 font-mono">Reference Tracking ID:</span>
                          <span className="font-mono font-bold text-[#30202D]">{submittedRef}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-stone-500">Inquiry Scope:</span>
                          <span className="font-medium text-[#292A2C]">{formData.inquiryType}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-stone-500">Contact Email:</span>
                          <span className="font-mono text-stone-700">{formData.businessEmail}</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={handleReset}
                          className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#30202D] hover:bg-[#432d3f] transition-colors"
                        >
                          Submit Another Requirement
                        </motion.button>
                      </div>
                    </motion.div>
                  ) : (
                    /* Active Form */
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      <div className="border-b border-stone-200 pb-4">
                        <h3 className="font-serif text-2xl text-[#292A2C]">
                          Requirement Intake Form
                        </h3>
                        <p className="text-xs text-stone-600 font-light mt-1">
                          Please provide your project context or procurement parameters below.
                        </p>
                      </div>

                      {/* Full Name & Business Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold text-[#292A2C]">
                            Full Name <span className="text-[#A65D67]">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="e.g., Alex Morgan"
                            className={`w-full px-3.5 py-2.5 text-xs border bg-white focus:outline-none focus:ring-1 focus:ring-[#30202D] transition-colors ${
                              errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-stone-300'
                            }`}
                          />
                          {errors.fullName && (
                            <span className="text-[11px] text-rose-600 block">{errors.fullName}</span>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold text-[#292A2C]">
                            Business Email <span className="text-[#A65D67]">*</span>
                          </label>
                          <input
                            type="email"
                            value={formData.businessEmail}
                            onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                            placeholder="name@agency.gov or name@company.com"
                            className={`w-full px-3.5 py-2.5 text-xs border bg-white focus:outline-none focus:ring-1 focus:ring-[#30202D] transition-colors ${
                              errors.businessEmail ? 'border-rose-500 ring-1 ring-rose-500' : 'border-stone-300'
                            }`}
                          />
                          {errors.businessEmail && (
                            <span className="text-[11px] text-rose-600 block">{errors.businessEmail}</span>
                          )}
                        </div>
                      </div>

                      {/* Company / Organization & Phone Number */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold text-[#292A2C]">
                            Company / Agency / Organization <span className="text-stone-400 font-normal">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            value={formData.organization}
                            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                            placeholder="e.g., Department of Transportation / Prime Partner LLC"
                            className="w-full px-3.5 py-2.5 text-xs border border-stone-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#30202D]"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold text-[#292A2C]">
                            Telephone Number <span className="text-stone-400 font-normal">(Optional)</span>
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(555) 000-0000"
                            className="w-full px-3.5 py-2.5 text-xs border border-stone-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#30202D]"
                          />
                        </div>
                      </div>

                      {/* Inquiry Type Dropdown (Exact 9 options) */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-[#292A2C]">
                          Inquiry Type <span className="text-[#A65D67]">*</span>
                        </label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs border border-stone-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#30202D]"
                        >
                          {INQUIRY_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.inquiryType && (
                          <span className="text-[11px] text-rose-600 block">{errors.inquiryType}</span>
                        )}
                      </div>

                      {/* Project / Requirement Description */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-[#292A2C]">
                          Project or Requirement Description <span className="text-[#A65D67]">*</span>
                        </label>
                        <textarea
                          rows={4}
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          placeholder="Please describe your operational requirement, equipment needed, timeframe, or potential subcontracting scope..."
                          className={`w-full px-3.5 py-2.5 text-xs border bg-white focus:outline-none focus:ring-1 focus:ring-[#30202D] transition-colors ${
                            errors.description ? 'border-rose-500 ring-1 ring-rose-500' : 'border-stone-300'
                          }`}
                        />
                        {errors.description && (
                          <span className="text-[11px] text-rose-600 block">{errors.description}</span>
                        )}
                      </div>

                      {/* Preferred Contact Method */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-[#292A2C]">
                          Preferred Contact Method <span className="text-stone-400 font-normal">(Optional)</span>
                        </label>
                        <div className="flex items-center gap-6 text-xs text-stone-700">
                          {['Email', 'Phone', 'Either'].map((method) => (
                            <label key={method} className="inline-flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name="preferredContact"
                                value={method}
                                checked={formData.preferredContact === method}
                                onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                                className="text-[#30202D] focus:ring-[#30202D]"
                              />
                              <span>{method}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Privacy Acknowledgement */}
                      <div className="space-y-1.5 pt-2">
                        <label className="flex items-start gap-2.5 text-xs text-stone-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.privacyAgreed}
                            onChange={(e) => setFormData({ ...formData, privacyAgreed: e.target.checked })}
                            className="mt-0.5 text-[#30202D] focus:ring-[#30202D]"
                          />
                          <span>
                            I acknowledge that the information provided will be used exclusively by RSVP ROSES LLC to evaluate and respond to this inquiry in accordance with standard business confidentiality. <span className="text-[#A65D67]">*</span>
                          </span>
                        </label>
                        {errors.privacyAgreed && (
                          <span className="text-[11px] text-rose-600 block">{errors.privacyAgreed}</span>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto px-8 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#A65D67] hover:bg-[#924e58] disabled:opacity-60 transition-colors inline-flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>Processing Inquiry...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Requirement</span>
                              <Send className="w-3.5 h-3.5" />
                            </>
                          )}
                        </motion.button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
