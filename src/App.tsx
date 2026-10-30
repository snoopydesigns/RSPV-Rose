import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { GovContractingPage } from './pages/GovContractingPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { CapabilityStatementModal } from './components/CapabilityStatementModal';
import { Toast } from './components/Toast';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedCapabilityId, setSelectedCapabilityId] = useState<string | undefined>(undefined);
  const [isCapabilityModalOpen, setIsCapabilityModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize from hash or default to home
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash) {
        setCurrentPage('home');
        return;
      }
      
      const parts = hash.split('/');
      const page = parts[0];
      const param = parts[1];

      const validPages = [
        'home',
        'about',
        'capabilities',
        'government-contracting',
        'industries',
        'contact',
        'privacy-policy'
      ];

      if (validPages.includes(page)) {
        setCurrentPage(page);
        if (param) {
          setSelectedCapabilityId(param);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string, capabilityId?: string) => {
    setCurrentPage(page);
    setSelectedCapabilityId(capabilityId);
    
    if (capabilityId) {
      window.location.hash = `${page}/${capabilityId}`;
    } else {
      window.location.hash = page === 'home' ? '' : page;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToastNotice = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F6F2EB] text-[#292A2C] relative selection:bg-[#A65D67] selection:text-white">
      {/* Global Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content View with Page Transition Animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onOpenCapabilityStatement={() => setIsCapabilityModalOpen(true)}
                onCopyNotice={handleToastNotice}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                onNavigate={handleNavigate}
                onOpenCapabilityStatement={() => setIsCapabilityModalOpen(true)}
                onCopyNotice={handleToastNotice}
              />
            )}

            {currentPage === 'capabilities' && (
              <CapabilitiesPage
                onNavigate={handleNavigate}
                onOpenCapabilityStatement={() => setIsCapabilityModalOpen(true)}
                onCopyNotice={handleToastNotice}
                selectedCapabilityId={selectedCapabilityId}
              />
            )}

            {currentPage === 'government-contracting' && (
              <GovContractingPage
                onNavigate={handleNavigate}
                onOpenCapabilityStatement={() => setIsCapabilityModalOpen(true)}
                onCopyNotice={handleToastNotice}
              />
            )}

            {currentPage === 'industries' && (
              <IndustriesPage
                onNavigate={handleNavigate}
              />
            )}

            {currentPage === 'contact' && (
              <ContactPage
                onCopyNotice={handleToastNotice}
              />
            )}

            {currentPage === 'privacy-policy' && (
              <PrivacyPolicyPage
                onNavigate={handleNavigate}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCapabilityStatement={() => setIsCapabilityModalOpen(true)}
      />

      {/* Capability Statement Document Modal */}
      <CapabilityStatementModal
        isOpen={isCapabilityModalOpen}
        onClose={() => setIsCapabilityModalOpen(false)}
        onCopyNotice={handleToastNotice}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClear={() => setToastMessage(null)}
      />
    </div>
  );
}
