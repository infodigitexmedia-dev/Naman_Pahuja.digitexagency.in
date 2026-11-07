import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ExternalLink, TrendingUp, BarChart2, Award } from 'lucide-react';
import { CASE_STUDIES } from '../data/digitexData';

interface PortfolioShowcaseProps {
  onOpenContact: (topic?: string) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onOpenContact }) => {
  return (
    <section id="portfolio" className="py-20 lg:py-28 relative bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-xs font-bold tracking-wider text-blue-700 uppercase">
                Proven Impact &amp; Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Real Deployments. Measurable Growth.
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore how our automated workflows and digital marketing systems scale operations across multiple verticals.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('Portfolio Case Study Inquiries')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors shrink-0 cursor-pointer"
          >
            <span>Request Full Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-panel rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-blue-500/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Tag & Timeframe */}
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-4 pb-3 border-b border-slate-100">
                  <span className="text-blue-600 font-bold">{study.tag}</span>
                  <span className="text-slate-400">{study.timeframe}</span>
                </div>

                {/* Primary Metric Banner */}
                <div className="mb-4">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {study.metric}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Verified outcome metric
                  </div>
                </div>

                {/* Case Title & Description */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5 leading-snug">
                  {study.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {study.desc}
                </p>

                {/* Concrete Deliverable Outcomes */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Key Outcomes:
                  </div>
                  {study.results.map((res, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => onOpenContact(`Inquire about ${study.title}`)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-slate-700 hover:text-white bg-slate-100 hover:bg-slate-900 rounded-xl transition-colors cursor-pointer"
              >
                <span>Deploy Similar Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
