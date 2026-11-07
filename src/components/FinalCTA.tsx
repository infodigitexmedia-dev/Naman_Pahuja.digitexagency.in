import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Mail, Globe, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { AGENCY_INFO, SERVICES_LIST } from '../data/digitexData';

interface FinalCTAProps {
  onOpenContact: (service?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'AI Automation',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-white border-t border-slate-200/60 overflow-hidden">
      {/* Background radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52rem] h-[32rem] bg-gradient-to-r from-blue-100/50 via-purple-100/40 to-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-2xl relative overflow-hidden">
            {/* Ambient accent line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Heading & Official Contact Info (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span className="text-xs font-bold tracking-wider text-blue-700 uppercase">
                      Start Your Transformation
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Let's Build Something Intelligent.
                  </h2>
                  <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed">
                    Partner with Digitex to automate, innovate and grow.
                  </p>
                </div>

                {/* Direct Verified Contact Channels */}
                <div className="space-y-3 pt-2">
                  <a
                    href={`tel:${AGENCY_INFO.phone}`}
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-500 shadow-2xs hover:shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                        Direct Phone &amp; WhatsApp
                      </div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {AGENCY_INFO.phone}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${AGENCY_INFO.email}`}
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-500 shadow-2xs hover:shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                        Official Support Email
                      </div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors break-all">
                        {AGENCY_INFO.email}
                      </div>
                    </div>
                  </a>

                  <a
                    href={AGENCY_INFO.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-500 shadow-2xs hover:shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                        Official Website
                      </div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        digitexagency.in
                      </div>
                    </div>
                  </a>
                </div>

                <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free Initial Strategy Audit &amp; Technical Discovery Call</span>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Lead Form (6 cols) */}
              <div className="lg:col-span-6 bg-white/95 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-lg">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-4"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Enquiry Dispatched!</h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our team has received your enquiry for{' '}
                      <span className="font-semibold text-blue-600">{formData.service}</span>. We will call you at{' '}
                      <span className="font-semibold text-slate-900">{formData.phone}</span> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', phone: '', email: '', service: 'AI Automation', message: '' });
                      }}
                      className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 rounded-lg cursor-pointer"
                    >
                      Send Another Request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <h3 className="text-base font-bold text-slate-900">Request Strategy Session</h3>
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                        Fast 2-Hour Response
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9812345678"
                          className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Service of Primary Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white transition-colors"
                      >
                        {SERVICES_LIST.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.number}. {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Project Details / Notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your business goals or current pain point..."
                        className="w-full px-3.5 py-2 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-blue-600 rounded-xl shadow-md transition-all duration-200 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Processing enquiry...</span>
                      ) : (
                        <>
                          <span>Get in Touch</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
