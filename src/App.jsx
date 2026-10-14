import React, { useState, useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Manufacturing from './pages/Manufacturing';
import Quality from './pages/Quality';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Handle URL hash changes for deep linking (e.g. #products, #cart, #contact)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'about', 'products', 'manufacturing', 'quality', 'gallery', 'contact', 'cart'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <About />;
      case 'products':
        return <Products />;
      case 'manufacturing':
        return <Manufacturing />;
      case 'quality':
        return <Quality />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      case 'cart':
        return <Cart />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <CartProvider>
      <MainLayout activePage={activePage} setActivePage={handlePageChange}>
        {renderPage()}
      </MainLayout>
    </CartProvider>
  );
}
