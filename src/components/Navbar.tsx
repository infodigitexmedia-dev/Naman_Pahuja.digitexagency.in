import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, PhoneCall } from 'lucide-react';
import { AGENCY_INFO } from '../data/digitexData';

interface NavbarProps {
  currentPage: 'home' | 'services';
  onNavigate: (page: 'home' | 'services', sectionId?: string) => void;
  onOpenContact: (defaultService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', page: 'home' as const, section: 'home' },
    { label: 'About', page: 'home' as const, section: 'about' },
    { label: 'Services', page: 'services' as const },
    { label: 'Portfolio', page: 'home' as const, section: 'portfolio' },
    { label: 'Contact', page: 'home' as const, section: 'contact' },
  ];

  const handleLinkClick = (page: 'home' | 'services', section?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, section);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Official Digitex Logo */}
          <button
            onClick={() => handleLinkClick('home', 'home')}
            className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg shrink-0 cursor-pointer text-left"
            aria-label="Digitex Home"
          >
            <div className="h-10 sm:h-11 px-2.5 py-1 bg-black rounded-xl flex items-center justify-center shadow-md ring-1 ring-black/10 group-hover:scale-102 transition-transform duration-200">
              <img
                src="/assets/digitex_logo.png"
                alt="Digitex Official Logo"
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </button>

          {/* Zone 2: Navigation Links (Without "Technology") */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => {
              const isActive =
                link.page === 'services'
                  ? currentPage === 'services'
                  : currentPage === 'home' && link.label === 'Home';

              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.page, link.section)}
                  className={`whitespace-nowrap transition-colors relative py-1 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'text-blue-600 font-bold'
                      : 'hover:text-blue-600'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.label === 'Services' && (
                    <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-600 px-1.5 py-0.2 rounded-md">
                      14
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${AGENCY_INFO.phone}`}
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors px-2.5 py-1.5 rounded-lg border border-slate-200/80 bg-white/60 hover:bg-white"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
              <span>{AGENCY_INFO.phone}</span>
            </a>
            <button
              onClick={() => onOpenContact()}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 active:scale-98 whitespace-nowrap cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => onOpenContact()}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-lg"
            >
              Let's Talk
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.page, link.section)}
                className="text-left text-base font-medium text-slate-700 hover:text-blue-600 py-1.5 border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.label === 'Services' && (
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                    14 Services
                  </span>
                )}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${AGENCY_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 rounded-lg"
              >
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>Call {AGENCY_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
              >
                <span>Schedule Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
