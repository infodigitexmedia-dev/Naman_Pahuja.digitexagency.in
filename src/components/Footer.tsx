import React from 'react';
import { Phone, Mail, Globe, ArrowUp, ArrowRight } from 'lucide-react';
import { AGENCY_INFO, SERVICES_LIST } from '../data/digitexData';

interface FooterProps {
  onOpenContact: (service?: string) => void;
  onNavigateToServices?: () => void;
  onNavigateHome?: (section?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenContact,
  onNavigateToServices,
  onNavigateHome,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Official Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-16 px-3.5 py-1.5 bg-black rounded-2xl flex items-center justify-center ring-1 ring-white/10 shadow-lg">
                <img
                  src="/assets/digitex_logo.png"
                  alt="Digitex Official Logo"
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              End-to-end digital solutions to help your business grow, engage and achieve more. From strategy to automated execution.
            </p>

            <div className="pt-2 text-xs text-slate-500 italic">
              "Your Success, Our Mission."
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigateHome ? onNavigateHome('home') : window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateHome ? onNavigateHome('about') : null}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  About &amp; Vision
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateToServices}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left text-blue-400 font-bold"
                >
                  All 14 Services (Page)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateHome ? onNavigateHome('workflow') : null}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Automation Workflow
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateHome ? onNavigateHome('portfolio') : null}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Portfolio &amp; Impact
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateHome ? onNavigateHome('contact') : null}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Services Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Featured Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES_LIST.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onOpenContact(service.name)}
                    className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onNavigateToServices}
                  className="text-blue-400 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>View all 14 services catalog</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Official Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${AGENCY_INFO.phone}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="font-semibold">{AGENCY_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${AGENCY_INFO.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-blue-400 transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{AGENCY_INFO.email}</span>
              </a>

              <a
                href={AGENCY_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>digitexagency.in</span>
              </a>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onOpenContact()}
                className="w-full py-2 px-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Book Discovery Call
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} DIGITEX. All rights reserved. Digital Solutions &amp; Marketing Agency.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">
              Innovative Digital Solutions for a Stronger Tomorrow.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
