import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Play, Pause, CheckCircle2, Bot, Cpu, UtensilsCrossed, ArrowRight } from 'lucide-react';

interface DemoVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const DemoVideoModal: React.FC<DemoVideoModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const [activeTab, setActiveTab] = useState<'lead-bot' | 'cloud-kitchen' | 'whatsapp-agent'>('lead-bot');
  const [isPlaying, setIsPlaying] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-3xl bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700/80 overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close demo"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
              Digitex Interactive Showcase
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Watch Digitex Systems in Action
            </h3>
          </div>
        </div>

        {/* Showcase Switcher Tabs */}
        <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-3 overflow-x-auto">
          <button
            onClick={() => setActiveTab('lead-bot')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeTab === 'lead-bot'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>AI Lead Pipeline</span>
          </button>

          <button
            onClick={() => setActiveTab('cloud-kitchen')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeTab === 'cloud-kitchen'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Swiggy/Zomato Auto-Sync</span>
          </button>

          <button
            onClick={() => setActiveTab('whatsapp-agent')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeTab === 'whatsapp-agent'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>24/7 WhatsApp Agent</span>
          </button>
        </div>

        {/* Demo Video / Simulation Screen */}
        <div className="relative rounded-2xl bg-slate-950 p-6 border border-slate-800 shadow-inner mb-6 min-h-[260px] flex flex-col justify-between">
          {activeTab === 'lead-bot' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                <span className="font-mono text-emerald-400">● LIVE RUN: Lead Capture &amp; Auto-Qualification</span>
                <span>Latency: 420ms</span>
              </div>
              <div className="space-y-2.5 font-mono text-xs">
                <div className="text-blue-400">[00:01] Inbound webhook from Meta Ads received</div>
                <div className="text-slate-300 pl-4">&rarr; Prospect: "Amit Patel" | Budget: High | Vertical: E-Commerce</div>
                <div className="text-purple-400">[00:02] AI Agent parsed intent &amp; matched with Tier-1 strategy</div>
                <div className="text-emerald-400">[00:03] CRM contact updated, calendar invite link sent via WhatsApp</div>
                <div className="text-white font-bold bg-blue-900/40 p-2 rounded-lg border border-blue-700/50">
                  Result: Zero lead leakage. First touchpoint delivered in 3.4 seconds.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cloud-kitchen' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                <span className="font-mono text-rose-400">● RESTAURANT AGGREGATOR SYNC</span>
                <span>Swiggy &amp; Zomato Hub</span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">Menu Item Dynamic Ranking</div>
                    <div className="text-slate-400 text-[11px]">Auto-promotes high-margin combos during peak dinner hours</div>
                  </div>
                  <span className="text-emerald-400 font-mono font-bold">+34% Basket Size</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">Kitchen Order Ticket (KOT) Auto-Print</div>
                    <div className="text-slate-400 text-[11px]">Direct integration with POS hardware</div>
                  </div>
                  <span className="text-blue-400 font-mono font-bold">0 Missed Orders</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'whatsapp-agent' && (
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                <span className="font-mono text-emerald-400">● 24/7 WHATSAPP BUSINESS AGENT</span>
                <span>Active 9034242154</span>
              </div>
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-2">
                <div className="text-slate-400 text-[11px]">Customer (Sunday 11:45 PM):</div>
                <div className="text-white italic">"Hi, I want a high-converting website and Google Ads for my clinic."</div>
                <div className="text-blue-400 text-[11px] pt-1">Digitex AI Agent (11:45 PM):</div>
                <div className="text-slate-200">
                  "Hello! We specialize in healthcare client acquisition. I've sent you our case study and reserved a quick 15-minute call slot for tomorrow with our founder. What time works best?"
                </div>
              </div>
            </div>
          )}

          {/* Player Controls Bar */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <span className="text-[11px]">Automated Live Walkthrough Demo</span>
            </div>
            <span className="text-[11px] text-emerald-400 font-mono">100% Operational</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <p className="text-xs text-slate-400">
            Want this custom-built for your company?
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors cursor-pointer shadow-md"
            >
              <span>Schedule Live Walkthrough</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
