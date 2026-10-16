import { useState, useRef, useEffect } from 'react';
import { PestOffLogo } from './PestOffLogo';
import { siteConfig, allNottinghamLocations, NottinghamLocation } from '../config/siteConfig';
import { Phone, ChevronDown, Menu, X, MapPin, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, params?: { slug?: string }) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  // Track scroll position to trigger floating rounded corners
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setLocationsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const featuredLocations = allNottinghamLocations.filter(loc => loc.isFeatured);
  const popularLocations = allNottinghamLocations.filter(loc => loc.isPopular);

  const handleLocationClick = (slug: string) => {
    setLocationsOpen(false);
    setMobileMenuOpen(false);
    onNavigate('location-detail', { slug });
  };

  const handleNavClick = (page: string) => {
    setMobileMenuOpen(false);
    setLocationsOpen(false);
    onNavigate(page);
  };

  return (
    <>
      <div 
        ref={navRef}
        className="w-full sticky top-1 sm:top-2.5 z-40 px-1.5 sm:px-3 lg:px-4 max-w-7xl mx-auto"
      >
        <header
          className="w-full rounded-2xl sm:rounded-3xl border border-white/70 overflow-hidden transition-all duration-300"
          style={{
            background: isScrolled 
              ? 'linear-gradient(90deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.94) 230px, rgba(255, 255, 255, 0.85) 300px, rgba(255, 255, 255, 0.62) 380px, rgba(255, 255, 255, 0.62) 100%)' 
              : 'linear-gradient(90deg, rgba(255, 255, 255, 0.97) 0%, rgba(255, 255, 255, 0.92) 230px, rgba(255, 255, 255, 0.80) 300px, rgba(255, 255, 255, 0.56) 380px, rgba(255, 255, 255, 0.56) 100%)',
            backdropFilter: 'blur(19.6px) saturate(180%)',
            WebkitBackdropFilter: 'blur(19.6px) saturate(180%)',
            boxShadow: 'none',
            transition: 'background 250ms ease, height 300ms ease',
          }}
        >
          <div className="w-full px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12 sm:h-16 lg:h-19 gap-2 sm:gap-4">
              {/* Logo on Left (compact and clean on mobile) */}
              <div className="flex-shrink-0 cursor-pointer flex items-center py-0.5" onClick={() => handleNavClick('home')}>
                <PestOffLogo />
              </div>

              {/* Center Navigation Links (Multi-page) - Full size on Desktop only */}
              <nav className="hidden lg:flex items-center gap-3 xl:gap-6 2xl:gap-7">
                <button
                  onClick={() => handleNavClick('home')}
                  className={`font-semibold text-sm transition-colors cursor-pointer py-2 px-2.5 rounded-lg ${
                    currentPage === 'home'
                      ? 'text-[var(--color-primary)] font-bold bg-stone-100/70'
                      : 'text-stone-800 hover:text-[var(--color-primary)] hover:bg-stone-50'
                  }`}
                >
                  Home
                </button>

                <button
                  onClick={() => handleNavClick('residential')}
                  className={`font-semibold text-sm transition-colors cursor-pointer py-2 px-2.5 rounded-lg ${
                    currentPage === 'residential'
                      ? 'text-[var(--color-primary)] font-bold bg-stone-100/70'
                      : 'text-stone-800 hover:text-[var(--color-primary)] hover:bg-stone-50'
                  }`}
                >
                  Residential
                </button>

                <button
                  onClick={() => handleNavClick('commercial')}
                  className={`font-semibold text-sm transition-colors cursor-pointer py-2 px-2.5 rounded-lg ${
                    currentPage === 'commercial'
                      ? 'text-[var(--color-primary)] font-bold bg-stone-100/70'
                      : 'text-stone-800 hover:text-[var(--color-primary)] hover:bg-stone-50'
                  }`}
                >
                  Commercial
                </button>

                {/* Locations Dropdown Trigger */}
                <div
                  className="relative"
                  onMouseEnter={() => setLocationsOpen(true)}
                >
                  <button
                    onClick={() => handleNavClick('locations')}
                    className={`flex items-center gap-1.5 font-semibold text-sm transition-colors cursor-pointer py-2 px-2.5 rounded-lg ${
                      locationsOpen || currentPage === 'locations' || currentPage === 'location-detail'
                        ? 'text-[var(--color-accent-dark)] font-bold bg-stone-100/70'
                        : 'text-stone-800 hover:text-[var(--color-primary)] hover:bg-stone-50'
                    }`}
                  >
                    <span>Locations</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${locationsOpen ? 'rotate-180 text-[var(--color-accent-dark)]' : 'text-stone-400'}`} />
                  </button>
                </div>

                <button
                  onClick={() => handleNavClick('contact')}
                  className={`font-semibold text-sm transition-colors cursor-pointer py-2 px-2.5 rounded-lg ${
                    currentPage === 'contact'
                      ? 'text-[var(--color-primary)] font-bold bg-stone-100/70'
                      : 'text-stone-800 hover:text-[var(--color-primary)] hover:bg-stone-50'
                  }`}
                >
                  Contact
                </button>
              </nav>

              {/* Desktop Right Actions: Contact Us + Phone Number */}
              <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
                {/* Contact Us button */}
                <button
                  onClick={() => handleNavClick('contact')}
                  className="btn-squish-primary py-2 px-5 text-sm font-semibold tracking-wide flex-shrink-0"
                >
                  Contact Us
                </button>

                {/* Phone Number directly next to Contact Us */}
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-2 text-stone-900 hover:text-[var(--color-accent-dark)] font-bold text-sm xl:text-base px-2.5 py-2 rounded-full hover:bg-stone-50 transition-colors flex-shrink-0"
                  aria-label={`Call ${siteConfig.phone}`}
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-accent)] flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="whitespace-nowrap">{siteConfig.phone}</span>
                </a>
              </div>

              {/* Mobile Right: Transparent Burger button, vertically centered with Logo */}
              <div className="lg:hidden flex items-center justify-center flex-shrink-0">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-1.5 text-stone-800 hover:text-[var(--color-primary)] active:text-[var(--color-primary)] bg-transparent hover:bg-transparent border-0 outline-none focus:outline-none focus:ring-0 ring-0 shadow-none transition-transform active:scale-95 cursor-pointer flex items-center justify-center"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7 text-stone-900" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7 text-stone-900" />}
                </button>
              </div>
            </div>

            {/* Expanding Mobile Menu directly animated from the Sticky Top Bar */}
            <div
              className={`lg:hidden grid transition-all duration-300 ease-in-out ${
                mobileMenuOpen
                  ? 'grid-rows-[1fr] opacity-100 border-t border-stone-200/40 pb-4 pt-2.5'
                  : 'grid-rows-[0fr] opacity-0 border-t-0 pb-0 pt-0 pointer-events-none'
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-2 pt-1 max-w-xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    <button
                      onClick={() => handleNavClick('home')}
                      className={`w-full text-left py-2 px-3.5 font-semibold rounded-xl text-sm transition-colors ${
                        currentPage === 'home'
                          ? 'bg-[var(--color-primary)] text-white font-bold'
                          : 'text-stone-800 hover:bg-white/60'
                      }`}
                    >
                      Home
                    </button>
                    <button
                      onClick={() => handleNavClick('residential')}
                      className={`w-full text-left py-2 px-3.5 font-semibold rounded-xl text-sm transition-colors ${
                        currentPage === 'residential'
                          ? 'bg-[var(--color-primary)] text-white font-bold'
                          : 'text-stone-800 hover:bg-white/60'
                      }`}
                    >
                      Residential Pest Control
                    </button>
                    <button
                      onClick={() => handleNavClick('commercial')}
                      className={`w-full text-left py-2 px-3.5 font-semibold rounded-xl text-sm transition-colors ${
                        currentPage === 'commercial'
                          ? 'bg-[var(--color-primary)] text-white font-bold'
                          : 'text-stone-800 hover:bg-white/60'
                      }`}
                    >
                      Commercial Pest Contracts
                    </button>
                    <button
                      onClick={() => handleNavClick('locations')}
                      className={`w-full text-left py-2 px-3.5 font-semibold rounded-xl text-sm transition-colors ${
                        currentPage === 'locations' || currentPage === 'location-detail'
                          ? 'bg-[var(--color-primary)] text-white font-bold'
                          : 'text-stone-800 hover:bg-white/60'
                      }`}
                    >
                      All Locations
                    </button>
                    <button
                      onClick={() => handleNavClick('contact')}
                      className={`w-full text-left py-2 px-3.5 font-semibold rounded-xl text-sm transition-colors sm:col-span-2 ${
                        currentPage === 'contact'
                          ? 'bg-[var(--color-primary)] text-white font-bold'
                          : 'text-stone-800 hover:bg-white/60'
                      }`}
                    >
                      Contact & Quotes
                    </button>
                  </div>

                  <div className="pt-3 border-t border-stone-200/40 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                    <button
                      onClick={() => handleNavClick('contact')}
                      className="btn-squish-primary w-full sm:w-auto py-2.5 px-6 text-sm font-semibold"
                    >
                      Contact Us
                    </button>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="flex items-center justify-center gap-2 py-1.5 px-3 text-stone-900 font-bold text-sm hover:text-[var(--color-accent-dark)] transition-colors"
                    >
                      <div className="w-7 h-7 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-accent)] flex-shrink-0">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <span>Call {siteConfig.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* LOCATIONS DROPDOWN - Sibling to header, optical frosted glass without drop shadow */}
        {locationsOpen && (
          <div
            onMouseEnter={() => setLocationsOpen(true)}
            onMouseLeave={() => setLocationsOpen(false)}
            className="absolute top-full left-0 right-0 w-full z-50 overflow-hidden mt-2 rounded-2xl sm:rounded-3xl border border-white/70"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.56)',
              backdropFilter: 'blur(19.6px) saturate(180%)',
              WebkitBackdropFilter: 'blur(19.6px) saturate(180%)',
              boxShadow: 'none',
            }}
          >
          {/* Top light reflection glare */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none z-10 opacity-90" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8">
            {/* Header info */}
            <div className="pb-4 mb-4 border-b border-stone-200/50">
              <h3 className="text-xl sm:text-2xl font-black text-[var(--color-primary)] tracking-tight font-heading">
                All Service Areas
              </h3>
              <p className="text-stone-700 text-xs sm:text-sm mt-0.5 font-medium">
                We cover the{' '}
                <span className="relative inline-block font-bold text-stone-900">
                  entire
                  <svg 
                    className="absolute bottom-[2px] left-0 w-full h-[4.5px] text-[var(--color-primary)] overflow-visible" 
                    viewBox="0 0 100 12" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path d="M2 7C20 3.5 45 2.5 65 4.5C80 6 90 3.5 98 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>{' '}
                East Midlands. Not all locations may be named, but it doesn't mean that they won't be covered.
              </p>
            </div>

            {/* All Locations - Very small buttons with just the name */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-2.5">
                Select Your Area
              </span>
              <div className="flex flex-wrap gap-2">
                {allNottinghamLocations.map((loc) => (
                  <button
                    key={loc.slug}
                    onClick={() => handleLocationClick(loc.slug)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold text-stone-800 bg-white/70 hover:bg-[var(--color-primary)] hover:text-white border border-stone-200/80 shadow-2xs hover:shadow-xs transition-all cursor-pointer hover:scale-[1.02]"
                  >
                    {loc.name}
                  </button>
                ))}
                <button
                  onClick={() => handleNavClick('locations')}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-[var(--color-primary)] bg-[var(--color-accent)] hover:bg-[#bbf646] border border-[var(--color-accent-dark)]/30 shadow-2xs hover:shadow-xs transition-all cursor-pointer hover:scale-[1.05]"
                  title="We cover all surrounding areas"
                >
                  (+more!)
                </button>
              </div>
            </div>

            {/* View Full Coverage - Prominent, larger, standout button placed underneath all locations */}
            <div className="mt-5 pt-4 border-t border-stone-200/60 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs sm:text-sm text-stone-600 font-medium">
                Looking for a specific neighbourhood or surrounding village?
              </span>
              <button
                onClick={() => handleNavClick('locations')}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[var(--color-accent)] hover:bg-[#bbf646] text-[var(--color-primary)] text-sm sm:text-base font-black transition-all cursor-pointer flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg hover:scale-[1.02] flex-shrink-0"
              >
                <span>View Full Coverage & All Locations</span>
                <ArrowRight className="w-4 h-4 text-[var(--color-primary)]" />
              </button>
            </div>
          </div>
        </div>
      )}

      </div>
    </>
  );
}
