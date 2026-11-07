import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Megaphone,
  Globe,
  Smartphone,
  Cpu,
  Bot,
  FileText,
  Share2,
  Video,
  Target,
  Search,
  TrendingUp,
  BookOpen,
  UtensilsCrossed,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  X,
  Filter,
  PhoneCall
} from 'lucide-react';
import { SERVICES_LIST, AGENCY_INFO } from '../data/digitexData';
import { ServiceItem } from '../types';

interface ServicesPageProps {
  onBackToHome: () => void;
  onSelectServiceForContact: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onBackToHome,
  onSelectServiceForContact,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'dev' | 'marketing' | 'growth'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Digital Marketing':
        return <Megaphone className="w-6 h-6 text-blue-600" />;
      case 'Website Development':
        return <Globe className="w-6 h-6 text-indigo-600" />;
      case 'App Development':
        return <Smartphone className="w-6 h-6 text-purple-600" />;
      case 'AI Automation':
        return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'AI Agent':
        return <Bot className="w-6 h-6 text-violet-600" />;
      case 'Content Writing':
        return <FileText className="w-6 h-6 text-sky-600" />;
      case 'Social Media Management':
        return <Share2 className="w-6 h-6 text-pink-600" />;
      case 'UGC AI Photos/Videos':
        return <Video className="w-6 h-6 text-indigo-600" />;
      case 'Facebook Ads Setup + Free Marketing':
        return <Target className="w-6 h-6 text-blue-700" />;
      case 'Google Ads Setup + Free Marketing':
        return <Search className="w-6 h-6 text-amber-600" />;
      case 'SEO Website Ranking':
        return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      case 'Blog Setup (Start Earning Today)':
        return <BookOpen className="w-6 h-6 text-teal-600" />;
      case 'Cloud Kitchen Setup (Connect with Swiggy/Zomato)':
        return <UtensilsCrossed className="w-6 h-6 text-rose-600" />;
      case 'Google Business & Optimization':
        return <MapPin className="w-6 h-6 text-blue-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  const filterTabs = [
    { key: 'all', label: 'All 14 Services' },
    { key: 'ai', label: 'AI & Automation' },
    { key: 'dev', label: 'Web & App Engineering' },
    { key: 'marketing', label: 'Paid & Organic Ads' },
    { key: 'growth', label: 'Local Business & Growth' },
  ] as const;

  const filteredServices = SERVICES_LIST.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesQuery =
      searchQuery === '' ||
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.deliverables.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#FBFBFD] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-xs font-semibold text-slate-500">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
          <span>/</span>
          <span className="text-slate-900">All 14 Agency Services</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-xs font-bold tracking-wider text-blue-700 uppercase">
              Full Service Catalog
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Complete Digital Solutions{' '}
            <span className="text-gradient">Under One Roof.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From strategic consulting and web engineering to 24/7 AI automation workflows and high-converting marketing campaigns, explore our full suite of 14 tailored business solutions.
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeCategory === tab.key
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services or deliverables..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-hidden focus:border-blue-600 focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 14 Services Full Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group glass-panel rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-blue-500/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Header: Icon & Service Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs">
                    {getServiceIcon(service.name)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                    #{service.number}
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-2.5">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {service.fullDesc}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-1.5 pt-4 border-t border-slate-100 mb-6">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Included Deliverables:
                  </div>
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  View Full Scope
                </button>
                <button
                  onClick={() => onSelectServiceForContact(service.name)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-slate-950 hover:bg-blue-600 rounded-xl transition-colors cursor-pointer shadow-xs"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <p className="text-sm text-slate-500">No services match your search query "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs font-bold text-blue-600 hover:underline cursor-pointer"
            >
              Reset filters &rarr;
            </button>
          </div>
        )}

        {/* Bottom Callout Banner */}
        <div className="mt-16 glass-panel rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-lg text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Need a Custom Multi-Service Package?
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
            Combine Services for Maximum Synergy &amp; ROI
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed">
            Most growing businesses combine Website Development + AI Automation + Meta/Google Ads for an unstoppable customer acquisition and conversion loop.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onSelectServiceForContact('Custom Multi-Service Growth Package')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-colors cursor-pointer"
            >
              <span>Build Custom Package</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${AGENCY_INFO.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-blue-600" />
              <span>Call {AGENCY_INFO.phone}</span>
            </a>
          </div>
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

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Key Business Benefits
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
                  Delivered Outputs &amp; Assets
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
    </div>
  );
};
