import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Sparkles, Cpu, Zap, Code2, TrendingUp, ShieldCheck } from 'lucide-react';
import { AGENCY_INFO } from '../data/digitexData';

interface HeroProps {
  onExploreServices: () => void;
  onWatchDemo: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onWatchDemo, onOpenContact }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Subtle architectural ambient gradient circles */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-12 left-1/4 w-80 h-80 bg-indigo-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Small Label with subtle blue accent */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
              <span className="text-xs font-bold tracking-wider text-blue-700 uppercase">
                Digital Solutions &amp; Marketing Agency
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6">
              Your Vision.{' '}
              <br />
              <span className="text-gradient">
                Our Digital Expertise.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mb-9">
              End-to-end digital solutions to help your business grow, engage and achieve more.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={onExploreServices}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-slate-950 hover:bg-blue-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onWatchDemo}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Sub-Headline Ideas / Strategy / Execution / Success */}
            <div className="pt-6 border-t border-slate-200/70 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
              <span className="text-slate-700">Ideas</span>
              <span>·</span>
              <span className="text-slate-700">Strategy</span>
              <span>·</span>
              <span className="text-slate-700">Execution</span>
              <span>·</span>
              <span className="text-blue-600 font-bold">Success</span>
            </div>
          </motion.div>

          {/* Right Column: Founder Reveal Composition (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Visual Container */}
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none aspect-square sm:aspect-4/3 lg:aspect-square flex items-center justify-center">
              {/* Outer Illuminated Halo Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-indigo-400/15 to-purple-500/20 blur-2xl animate-pulse-slow" />
              
              {/* Concentric Subtle Halo Rings */}
              <div className="absolute w-[92%] h-[92%] rounded-full border border-blue-400/30 ring-1 ring-purple-400/20" />
              <div className="absolute w-[80%] h-[80%] rounded-full border border-indigo-400/25" />

              {/* Glowing animated orbital line with travelling bead */}
              <div className="absolute inset-2 sm:inset-4 rounded-full border border-dashed border-blue-400/40 animate-orbit pointer-events-none">
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-md shadow-blue-500/50 ring-2 ring-white" />
              </div>

              {/* Founder Image Presentation (Exact supplied new high-res photograph) */}
              <div className="relative z-10 w-[84%] h-[84%] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 bg-gradient-to-b from-blue-50/50 via-white/80 to-purple-50/40 flex items-center justify-center group">
                <img
                  src="/assets/owner_official_portrait.jpg"
                  alt="Digitex Owner & Founder"
                  className="w-full h-full object-cover object-[center_12%] transition-transform duration-700 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle base gradient lighting */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/90 via-white/30 to-transparent pointer-events-none" />
              </div>

              {/* Small Floating Service Panels around Photograph (Ref 3 Fidelity) */}
              
              {/* Card 1: Top-Left: AI Solutions */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute top-4 sm:top-6 left-2 sm:-left-4 z-20 glass-panel rounded-2xl px-3.5 py-2.5 shadow-lg border border-white/90 flex items-center gap-2.5 hover:scale-105 transition-transform"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">AI Solutions</div>
                  <div className="text-[10px] text-slate-500 font-medium">Cognitive Automation</div>
                </div>
              </motion.div>

              {/* Card 2: Top-Right: Automation Solutions */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute top-8 sm:top-10 right-1 sm:-right-4 z-20 glass-panel rounded-2xl px-3.5 py-2.5 shadow-lg border border-white/90 flex items-center gap-2.5 hover:scale-105 transition-transform"
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">Automation Solutions</div>
                  <div className="text-[10px] text-slate-500 font-medium">24/7 Autopilot</div>
                </div>
              </motion.div>

              {/* Card 3: Bottom-Left: Web & App Development */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute bottom-6 sm:bottom-10 left-1 sm:-left-6 z-20 glass-panel rounded-2xl px-3.5 py-2.5 shadow-lg border border-white/90 flex items-center gap-2.5 hover:scale-105 transition-transform"
              >
                <div className="w-8 h-8 rounded-xl bg-violet-600 text-white flex items-center justify-center shadow-xs">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">Web &amp; App Development</div>
                  <div className="text-[10px] text-slate-500 font-medium">Full-Stack Scale</div>
                </div>
              </motion.div>

              {/* Card 4: Bottom-Right: Growth Marketing */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="absolute bottom-4 sm:bottom-6 right-2 sm:-right-6 z-20 glass-panel rounded-2xl px-3.5 py-2.5 shadow-lg border border-white/90 flex items-center gap-2.5 hover:scale-105 transition-transform"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-500 text-white flex items-center justify-center shadow-xs">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">Growth Marketing</div>
                  <div className="text-[10px] text-slate-500 font-medium">Revenue Scaling</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 4-Pillar Trust Strip below Hero (from Reference 1 Poster & Ref 2) */}
        <div className="mt-16 pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {AGENCY_INFO.stats.map((pillar, index) => (
              <div
                key={pillar.label}
                className="flex flex-col group p-3.5 rounded-xl transition-colors hover:bg-white/60"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {pillar.label}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
