import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import QuoteForm from '../components/QuoteForm';

export default function MainLayout({ children, activePage, setActivePage }) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialCategory, setQuoteInitialCategory] = useState('');

  const openQuoteModal = (category = '') => {
    setQuoteInitialCategory(category);
    setQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f4] text-stone-900">
      {/* Navbar with active page and quote modal trigger */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onOpenQuote={() => openQuoteModal()} 
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {React.cloneElement(children, { 
          onOpenQuote: openQuoteModal,
          onNavigate: setActivePage 
        })}
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={setActivePage} 
        onOpenQuote={() => openQuoteModal()} 
      />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Quote Inquiry Modal */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div 
            className="fixed inset-0" 
            onClick={closeQuoteModal}
          ></div>
          <div className="relative z-10 w-full max-w-2xl">
            <QuoteForm 
              initialCategory={quoteInitialCategory} 
              isModal={true} 
              onClose={closeQuoteModal} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
