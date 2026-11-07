import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Quote, Shield, Award, Sparkles } from 'lucide-react';
import { AGENCY_INFO } from '../data/digitexData';

interface FoundersVisionProps {
  onOpenContact: () => void;
}

export const FoundersVision: React.FC<FoundersVisionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#F8FAFC]/80 border-t border-slate-200/60 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Minimalist, Elegant Founder Card (Fidelity to Reference 3) */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Exact Owner Portrait with Architectural Arch Framing */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group">
                {/* Subtle back illumination */}
                <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-purple-500/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

                {/* Arch container */}
                <div className="relative w-56 sm:w-64 aspect-4/5 rounded-[2.25rem] overflow-hidden bg-white shadow-2xl ring-1 ring-slate-900/10">
                  <img
                    src="/assets/owner_official_portrait.jpg"
                    alt="Digitex Owner & Founder"
                    className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2.25rem] pointer-events-none" />
                </div>

                {/* Founder Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-950 text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-lg border border-white/20">
                  Leadership · Digitex
                </div>
              </div>
            </div>

            {/* Right: Founder's Vision Statement */}
            <div className="md:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-xs font-bold tracking-wider text-blue-700 uppercase">
                  Founder's Vision
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Turning Ideas into Intelligent Solutions.
              </h2>

              <blockquote className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed italic border-l-2 border-blue-600 pl-4 my-4">
                "At Digitex, we believe in the power of technology to create meaningful change. Let's build a smarter, more automated future together."
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                We combine deep technical engineering with direct business ROI. Every automated workflow, web application, and performance marketing campaign is built with obsessive attention to craft and measurable client success.
              </p>

              {/* Three Pillars of Founder Commitment */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                <div className="p-3 bg-white/70 rounded-xl border border-slate-200/80">
                  <div className="text-xs font-bold text-slate-900 mb-0.5">Direct Accountability</div>
                  <div className="text-[11px] text-slate-500">Zero middleman delays</div>
                </div>
                <div className="p-3 bg-white/70 rounded-xl border border-slate-200/80">
                  <div className="text-xs font-bold text-slate-900 mb-0.5">Modern Tech Stack</div>
                  <div className="text-[11px] text-slate-500">React, Next, Python, AI</div>
                </div>
                <div className="p-3 bg-white/70 rounded-xl border border-slate-200/80">
                  <div className="text-xs font-bold text-slate-900 mb-0.5">Measurable Outcomes</div>
                  <div className="text-[11px] text-slate-500">Verified ROI metrics</div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-blue-600 rounded-xl shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
