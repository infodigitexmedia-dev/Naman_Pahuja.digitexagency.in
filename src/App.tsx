import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ServicesPage } from './components/ServicesPage';
import { AutomationWorkflow } from './components/AutomationWorkflow';
import { AIAssistantDemo } from './components/AIAssistantDemo';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { FoundersVision } from './components/FoundersVision';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { DemoVideoModal } from './components/DemoVideoModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services'>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // Sync hash/page changes
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#all-services' || window.location.hash === '#services-page') {
        setCurrentPage('services');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: 'home' | 'services', sectionId?: string) => {
    setCurrentPage(page);
    if (page === 'services') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenContact = (service?: string) => {
    setSelectedService(service);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
    setSelectedService(undefined);
  };

  const handleExploreServices = () => {
    // Navigate to the full services page when "Explore Our Services" is clicked
    handleNavigate('services');
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenContact={handleOpenContact}
      />

      <main className="flex-1">
        {currentPage === 'services' ? (
          /* Separate Dedicated Page for All 14 Services */
          <ServicesPage
            onBackToHome={() => handleNavigate('home', 'home')}
            onSelectServiceForContact={(serviceName) => handleOpenContact(serviceName)}
          />
        ) : (
          /* Homepage: 4-5 Featured Services, Workflows, AI Demo, Founder Vision & CTA */
          <>
            {/* Hero: The Founder Reveal with New Official Portrait */}
            <Hero
              onExploreServices={handleExploreServices}
              onWatchDemo={() => setIsDemoOpen(true)}
              onOpenContact={() => handleOpenContact()}
            />

            {/* Featured Services: 4-5 Flagship Services with Gateway to All 14 */}
            <ServicesSection
              onSelectServiceForContact={(serviceName) => handleOpenContact(serviceName)}
              onViewAllServices={() => handleNavigate('services')}
            />

            {/* Automation Workflow: 5 Connected Nodes */}
            <AutomationWorkflow
              onExploreWorkflows={() => handleOpenContact('Custom Automation Workflow')}
            />

            {/* AI Agents: Interactive Demonstration */}
            <AIAssistantDemo
              onExploreAgents={() => handleOpenContact('Custom AI Agent Setup')}
            />

            {/* Portfolio & Case Studies */}
            <PortfolioShowcase
              onOpenContact={(topic) => handleOpenContact(topic)}
            />

            {/* Founder's Vision with New Official Portrait */}
            <FoundersVision
              onOpenContact={() => handleOpenContact('Consultation with Founder')}
            />

            {/* Final Call To Action */}
            <FinalCTA
              onOpenContact={(service) => handleOpenContact(service)}
            />
          </>
        )}
      </main>

      {/* Footer (without technology link) */}
      <Footer
        onOpenContact={(service) => handleOpenContact(service)}
        onNavigateToServices={() => handleNavigate('services')}
        onNavigateHome={(sectionId) => handleNavigate('home', sectionId)}
      />

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        initialService={selectedService}
      />

      <DemoVideoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        onOpenContact={() => handleOpenContact('Product Demo Discovery Call')}
      />
    </div>
  );
}
