import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ResidentialPage } from './pages/ResidentialPage';
import { CommercialPage } from './pages/CommercialPage';
import { LocationsPage } from './pages/LocationsPage';
import { LocationDetailPage } from './pages/LocationDetailPage';
import { ContactPage } from './pages/ContactPage';
import { applyThemeVariables } from './config/themeConfig';
import { updatePageSEO } from './utils/seo';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [locationSlug, setLocationSlug] = useState<string>('west-bridgford');

  useEffect(() => {
    applyThemeVariables();

    // Support search engine & bookmark deep links via query params
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const pageParam = urlParams.get('page');
      const slugParam = urlParams.get('slug');
      if (pageParam) {
        setCurrentPage(pageParam);
        if (slugParam) {
          setLocationSlug(slugParam);
        }
      }
    } catch {
      // Ignore in non-browser environment
    }
  }, []);

  useEffect(() => {
    updatePageSEO(currentPage, locationSlug);
  }, [currentPage, locationSlug]);

  const handleNavigate = (page: string, params?: { slug?: string }) => {
    if (params?.slug) {
      setLocationSlug(params.slug);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9f7] text-[#141f17] font-sans selection:bg-[#84cc16]/30 selection:text-[#14351b]">
      {/* Accessible Skip Link for Keyboard Users & AI Assistive Agents */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#14351b] focus:text-white focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#84cc16] text-xs font-bold"
      >
        Skip to main content
      </a>

      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Multi-Page Routed View */}
      <main id="main-content" role="main" className="flex-1 px-1.5 sm:px-3 lg:px-4 pt-1 sm:pt-2 lg:pt-3">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}

        {currentPage === 'residential' && (
          <ResidentialPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'commercial' && (
          <CommercialPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'locations' && (
          <LocationsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'location-detail' && (
          <LocationDetailPage
            slug={locationSlug}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <div className="w-full px-2 sm:px-3 lg:px-4 pb-2 sm:pb-4 mt-3 sm:mt-4">
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
