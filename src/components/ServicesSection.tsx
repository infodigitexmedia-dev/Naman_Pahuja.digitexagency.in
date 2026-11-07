import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Megaphone,
  Globe,
  Smartphone,
  Cpu,
  Bot,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  X
} from 'lucide-react';
import { SERVICES_LIST } from '../data/digitexData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForContact: (serviceName: string) => void;
  onViewAllServices: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForContact,
  onViewAllServices,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Show only 4-5 core flagship services on the homepage
  const featuredServiceIds = [
    'ai-automation',
    'website-development',
    'ai-agent',
    'app-development',
    'digital-marketing',
  ];

  const featuredServices = SERVICES_LIST.filter((s) =>
    featuredServiceIds.includes(s.id)
  );

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Digital Marketing':
        return <Megaphone className="w-5 h-5 text-blue-600" />;
      case 'Website Development':
        return <Globe className="w-5 h-5 text-indigo-600" />;
      case 'App Development':
        return <Smartphone className="w-5 h-5 text-purple-600" />;
      case 'AI Automation':
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'AI Agent':
        return <Bot className="w-5 h-5 text-violet-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative bg-[#F8FAFC]/60 border-t border-slate-200/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-xs font-bold tracking-wider text-blue-700 uppercase">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Featured Digital Solutions.
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore our highest-impact automation, engineering, and digital growth services.
            </p>
          </div>

          {/* Action button to view all 14 services on separate page */}
          <button
            onClick={onViewAllServices}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-blue-600 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer shrink-0"
          >
            <Layers className="w-4 h-4 text-blue-400" />
            <span>View All 14 Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 5 Featured Services Grid on Homepage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              onClick={() => setSelectedService(service)}
              className="group relative bg-white/90 hover:bg-white backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-blue-500/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-blue-500/10 via-purple-500/5 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-blue-50 group-hover:scale-105 flex items-center justify-center transition-all duration-300 shadow-2xs">
                    {getServiceIcon(service.name)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                    #{service.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-2.5">
                  {service.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Benefits pill-tags preview */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  {service.benefits.slice(0, 2).map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="line-clamp-1">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-blue-600 transition-colors">
                <span>View Full Scope</span>
                <div className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-200">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* 6th Card: Direct Gateway to the full 14 services catalog */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            onClick={onViewAllServices}
            className="group relative bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 text-white rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 border border-slate-800"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                <Layers className="w-6 h-6 text-white" />
              </div>

              <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
                9 More Services Available
              </div>

              <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                Explore The Complete 14-Service Catalog
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Including Cloud Kitchen setup, Meta &amp; Google Ads, SEO Ranking, UGC AI Videos, Content Writing, and Google Maps Optimization.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-blue-400 group-hover:text-white transition-colors">
              <span>Browse All 14 Services</span>
              <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-200">
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-xs">
                  {getServiceIcon(selectedService.name)}
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-blue-600 uppercase">
                    Service #{selectedService.number}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    {selectedService.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Key Outcomes &amp; Business Value
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  What You Receive
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  {selectedService.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-5 border-t border-slate-100">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-xl transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const name = selectedService.name;
                    setSelectedService(null);
                    onSelectServiceForContact(name);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  <span>Inquire About {selectedService.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
