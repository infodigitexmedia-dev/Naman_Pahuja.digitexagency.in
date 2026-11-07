import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Brain,
  Database,
  BellRing,
  CheckCircle2,
  ArrowRight,
  Play,
  RotateCcw,
  Sparkles,
  Zap,
  Terminal,
  Clock
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/digitexData';

interface AutomationWorkflowProps {
  onExploreWorkflows: () => void;
}

export const AutomationWorkflow: React.FC<AutomationWorkflowProps> = ({ onExploreWorkflows }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [simulationLog, setSimulationLog] = useState<string[]>([
    'System ready: Listening to webhooks and lead endpoints...',
  ]);

  // Automated step cycling
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 5 ? 1 : prev + 1));
    }, 2800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Update logs when step changes
  useEffect(() => {
    const currentStepData = WORKFLOW_STEPS.find((s) => s.step === activeStep);
    if (currentStepData) {
      setSimulationLog((prev) => [
        `[${new Date().toLocaleTimeString()}] Node 0${activeStep} Active: ${currentStepData.title} -> ${currentStepData.detail.action}`,
        ...prev.slice(0, 5),
      ]);
    }
  }, [activeStep]);

  const getStepIcon = (iconName: string, isActive: boolean) => {
    const className = `w-6 h-6 transition-colors duration-300 ${
      isActive ? 'text-white' : 'text-blue-600'
    }`;
    switch (iconName) {
      case 'Mail':
        return <Mail className={className} />;
      case 'Brain':
        return <Brain className={className} />;
      case 'Database':
        return <Database className={className} />;
      case 'BellRing':
        return <BellRing className={className} />;
      case 'CheckCircle2':
        return <CheckCircle2 className={className} />;
      default:
        return <Zap className={className} />;
    }
  };

  const handleSimulateNewLead = () => {
    setIsPlaying(false);
    setActiveStep(1);
    setSimulationLog(['[JUST NOW] Inbound enquiry captured from Meta Ads campaign! Starting autopilot loop...']);
    let current = 1;
    const runner = setInterval(() => {
      current += 1;
      if (current <= 5) {
        setActiveStep(current);
      } else {
        clearInterval(runner);
        setIsPlaying(true);
      }
    }, 1800);
  };

  const currentStep = WORKFLOW_STEPS.find((s) => s.step === activeStep) || WORKFLOW_STEPS[0];

  return (
    <section id="workflow" className="py-20 lg:py-28 relative bg-white border-t border-slate-200/60 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[46rem] h-[28rem] bg-gradient-to-r from-blue-100/40 via-indigo-100/30 to-purple-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-xs font-bold tracking-wider text-blue-700 uppercase">
              Automation Workflow
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            From Manual Work to Intelligent Automation.
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Let AI handle the heavy lifting — capture leads, follow up with customers and grow your business on autopilot.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={handleSimulateNewLead}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Simulate Inbound Lead</span>
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Autoplay Active</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-slate-600" />
                  <span>Resume Loop</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 5 Connected Nodes Diagram */}
        <div className="relative mb-12">
          {/* Connecting Line with Glowing Pulse (Desktop) */}
          <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-1 bg-slate-200 rounded-full overflow-hidden">
            {/* Animated Travelling Pulse */}
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
              initial={{ width: '0%' }}
              animate={{ width: `${(activeStep / 5) * 100}%` }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          </div>

          {/* Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 relative z-10">
            {WORKFLOW_STEPS.map((node) => {
              const isActive = activeStep === node.step;
              const isPast = activeStep > node.step;

              return (
                <div
                  key={node.id}
                  onClick={() => {
                    setActiveStep(node.step);
                    setIsPlaying(false);
                  }}
                  className={`group relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col items-center text-center ${
                    isActive
                      ? 'bg-white border-blue-500 shadow-xl ring-2 ring-blue-500/20 scale-102'
                      : isPast
                      ? 'bg-white/90 border-slate-200 shadow-xs hover:border-slate-300'
                      : 'bg-white/60 border-slate-200/80 shadow-2xs hover:bg-white hover:border-slate-300'
                  }`}
                >
                  {/* Step Number Badge */}
                  <span
                    className={`absolute -top-3 px-2 py-0.5 text-[10px] font-mono font-bold rounded-full transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : isPast
                        ? 'bg-slate-800 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    0{node.step}
                  </span>

                  {/* Icon Circle */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 shadow-xs ${
                      isActive
                        ? 'bg-gradient-to-br from-blue-600 to-indigo-600 scale-110 shadow-blue-500/25 shadow-lg'
                        : isPast
                        ? 'bg-blue-50'
                        : 'bg-slate-100 group-hover:bg-blue-50'
                    }`}
                  >
                    {getStepIcon(node.iconName, isActive)}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-sm font-bold transition-colors leading-tight mb-1.5 ${
                      isActive ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'
                    }`}
                  >
                    {node.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {node.description}
                  </p>

                  {/* Mobile Step Indicator Indicator Arrow */}
                  <div className="lg:hidden mt-3 text-slate-300">
                    <ArrowRight className="w-4 h-4 rotate-90 sm:rotate-0" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Node Detail & Live Execution Inspector */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side: Node explanation */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 text-xs font-mono font-bold text-blue-700 bg-blue-50 rounded-lg border border-blue-100">
                  STAGE 0{currentStep.step} / 05
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {currentStep.detail.system}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {currentStep.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {currentStep.description}
              </p>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-blue-600" />
                  <span>Autopilot Operation:</span>
                </div>
                <div className="text-xs text-slate-600 font-medium pl-5.5">
                  {currentStep.detail.action}
                </div>
                <div className="text-xs font-bold text-slate-900 flex items-center gap-2 pt-2 border-t border-slate-200/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Output Delivered:</span>
                </div>
                <div className="text-xs text-slate-600 font-medium pl-5.5">
                  {currentStep.detail.output}
                </div>
              </div>
            </div>

            {/* Right side: Live JSON Payload / Telemetry preview */}
            <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-5 text-slate-200 font-mono text-xs shadow-inner border border-slate-800">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-400 text-[11px] font-semibold">digitex_autopilot.log</span>
                </div>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>

              <div className="text-[11px] text-slate-400 mb-2">// Active Ingestion Payload:</div>
              <pre className="p-3 bg-slate-900/90 rounded-xl text-blue-300 text-[11px] overflow-x-auto whitespace-pre-wrap leading-relaxed border border-slate-800/80">
                {currentStep.detail.dataPayload}
              </pre>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  Execution latency: &lt;180ms
                </span>
                <span className="text-slate-400">Zero human intervention</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
