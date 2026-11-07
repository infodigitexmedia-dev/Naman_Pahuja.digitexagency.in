import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bot,
  Send,
  Sparkles,
  ArrowRight,
  Mic,
  MessageSquare,
  ShieldCheck,
  Zap,
  RotateCcw
} from 'lucide-react';
import { ChatMessage } from '../types';

interface AIAssistantDemoProps {
  onExploreAgents: () => void;
}

export const AIAssistantDemo: React.FC<AIAssistantDemoProps> = ({ onExploreAgents }) => {
  const initialMessages: ChatMessage[] = [
    {
      id: '1',
      sender: 'customer',
      text: 'How can I grow my business with automation?',
      timestamp: '10:42 AM',
    },
    {
      id: '2',
      sender: 'assistant',
      text: 'Absolutely! I can help you automate customer enquiries, manage leads and streamline your daily operations so you never lose a prospective buyer.',
      timestamp: '10:42 AM',
    },
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    'How do you integrate with Swiggy and Zomato?',
    'What is included in the Ads setup + free marketing?',
    'Can an AI agent reply on WhatsApp 24/7?',
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'customer',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Provide intelligent contextual answer
    setTimeout(() => {
      let reply = "Our automated systems qualify leads, sync them directly to your CRM, and dispatch instant SMS/WhatsApp alerts to your team within seconds.";
      
      const lower = text.toLowerCase();
      if (lower.includes('swiggy') || lower.includes('zomato') || lower.includes('kitchen') || lower.includes('food')) {
        reply = "For Cloud Kitchens, we configure your Swiggy/Zomato partner dashboards, optimize your digital menu for algorithmic placement, and route orders to reduce kitchen delays.";
      } else if (lower.includes('ads') || lower.includes('facebook') || lower.includes('google') || lower.includes('marketing')) {
        reply = "Our Ads Setup includes custom audience targeting, pixel configuration, high-converting ad copy, plus complementary organic marketing strategies to maximize your ROI.";
      } else if (lower.includes('whatsapp') || lower.includes('agent') || lower.includes('support') || lower.includes('24/7')) {
        reply = "Yes! Digitex AI Agents operate 24/7 on WhatsApp, Instagram DMs, and website chat, answering customer FAQs, qualifying budgets, and scheduling consultations on your calendar.";
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('quote')) {
        reply = "We offer flexible packages tailored to your business scale. Click 'Get in Touch' or call us at 9034242154 to receive a custom quote within 24 hours.";
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleReset = () => {
    setMessages(initialMessages);
    setIsTyping(false);
  };

  return (
    <section id="ai-agent" className="py-20 lg:py-28 relative bg-[#070B19] text-white overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-72 bg-indigo-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Interactive AI Assistant Window (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-[#0D152F]/90 border border-slate-700/60 shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Header Bar */}
              <div className="px-5 py-4 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center p-0.5 shadow-md">
                      <div className="w-full h-full bg-[#0D152F] rounded-[10px] flex items-center justify-center">
                        <Bot className="w-5 h-5 text-blue-400" />
                      </div>
                    </div>
                    {/* Live Online Dot */}
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-[#0D152F]" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white tracking-wide">DIGITEX AI Assistant</h4>
                      <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        Online
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400">Autonomous Business Representative</p>
                  </div>
                </div>

                {/* Reset button */}
                <button
                  onClick={handleReset}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  title="Reset conversation"
                  aria-label="Reset conversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Message List */}
              <div className="p-5 space-y-4 min-h-[300px] max-h-[360px] overflow-y-auto">
                <AnimatePresence>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex flex-col ${
                        msg.sender === 'customer' ? 'items-end' : 'items-start'
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-sm ${
                          msg.sender === 'customer'
                            ? 'bg-blue-600 text-white rounded-tr-xs'
                            : 'bg-slate-800/90 text-slate-100 border border-slate-700/80 rounded-tl-xs'
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className="text-[10px] text-slate-500 mt-1 px-1">
                        {msg.sender === 'customer' ? 'You' : 'Digitex AI'} · {msg.timestamp}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-1.5 p-3 bg-slate-800/60 rounded-2xl max-w-fit border border-slate-700/50"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.4s]" />
                  </motion.div>
                )}
                <div ref={chatBottomRef} />
              </div>

              {/* Quick Prompt Suggestions */}
              <div className="px-5 py-2.5 bg-slate-900/40 border-t border-slate-800/60 flex items-center gap-2 overflow-x-auto">
                <span className="text-[11px] text-slate-400 font-medium shrink-0 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-purple-400" />
                  Try asking:
                </span>
                {suggestedPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(prompt)}
                    className="px-2.5 py-1 text-[11px] text-slate-300 bg-slate-800/80 hover:bg-blue-600 hover:text-white rounded-lg transition-colors whitespace-nowrap cursor-pointer border border-slate-700/60"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Input Bar */}
              <div className="p-4 bg-slate-900/90 border-t border-slate-800">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type a message or question..."
                    className="flex-1 bg-slate-800/80 text-white placeholder-slate-400 text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-700 focus:outline-hidden focus:border-blue-500 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="p-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:hover:bg-blue-600 text-white rounded-xl transition-all cursor-pointer shadow-md"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column: AI Agents Information & Waveform (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">
                  AI Agents
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Intelligent Agents for Business Growth.
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Automate customer support, answer queries, and turn conversations into opportunities.
              </p>
            </div>

            {/* Simulated Animated Voice Waveform */}
            <div className="p-4 bg-slate-900/70 rounded-2xl border border-slate-800/80">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span className="flex items-center gap-1.5 font-medium">
                  <Mic className="w-3.5 h-3.5 text-blue-400" />
                  Voice Waveform Synthesizer
                </span>
                <span className="font-mono text-[11px] text-blue-400">Adaptive Latency: 120ms</span>
              </div>

              {/* Dynamic Waveform Bars */}
              <div className="h-12 flex items-center justify-center gap-1 sm:gap-1.5 px-2">
                {[12, 28, 44, 20, 60, 35, 75, 45, 90, 50, 70, 30, 85, 40, 65, 25, 55, 30, 48, 20].map((h, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      height: [h * 0.3, h * 0.9, h * 0.4, h * 0.8, h * 0.3],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: (index % 5) * 0.15,
                    }}
                    className="w-1.5 bg-gradient-to-t from-blue-500 via-indigo-400 to-purple-400 rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Zero Delayed Enquiries</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    AI agents reply within 3 seconds 24/7 across website chat, WhatsApp, and social channels.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/20">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Brand &amp; Knowledge Protection</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Strict grounding ensures agents only answer with verified catalog, pricing, and company rules.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <button
                onClick={onExploreAgents}
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Explore AI Agents</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
