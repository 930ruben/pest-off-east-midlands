import { useState } from 'react';
import { siteConfig, allNottinghamLocations } from '../config/siteConfig';
import { MapPin, Search, ArrowRight, Phone } from 'lucide-react';

interface LocationsPageProps {
  onNavigate: (page: string, params?: { slug?: string }) => void;
}

export function LocationsPage({ onNavigate }: LocationsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = allNottinghamLocations.filter(loc =>
    loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    loc.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    loc.nearbyAreas.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="flex flex-col gap-2.5 sm:gap-4 lg:gap-5">
      {/* Header Band */}
      <section className="w-full bg-[var(--color-primary)] text-white pt-4 sm:pt-12 lg:pt-16 pb-3.5 sm:pb-6 lg:pb-8 shadow-xs rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-4">
              Regional Coverage
            </span>
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight font-heading leading-tight">
              All Service Areas
            </h1>
            <p className="mt-2.5 sm:mt-4 text-xs sm:text-xl text-emerald-100 font-semibold leading-relaxed">
              For more information about your specific location, find it in the list below.
            </p>
          </div>
        </div>
      </section>

      {/* Directory & Search Band */}
      <section className="w-full bg-[var(--color-surface)] pt-5 sm:pt-10 lg:pt-12 pb-3.5 sm:pb-5 lg:pb-6 shadow-xs rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          {/* Prominent Full Regional Coverage Heading Callout Banner */}
          <div className="mb-4 sm:mb-8 p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[var(--color-surface-subtle)] border-2 border-emerald-800/15 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[var(--color-primary)] text-[var(--color-accent)] flex items-center justify-center flex-shrink-0 shadow-xs">
              <MapPin className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h2 className="text-base sm:text-2xl lg:text-3xl font-black text-[var(--color-primary)] font-heading tracking-tight">
                Full Regional Coverage
              </h2>
              <p className="text-xs sm:text-base text-stone-700 font-medium mt-1 leading-relaxed">
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
                East Midlands. Please note that not all locations may be named, but it doesn't mean that they won't be covered - our technicians serve all surrounding towns and villages across the region.
              </p>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-stone-100">
            <div>
              <h2 className="text-lg sm:text-2xl font-black text-[var(--color-primary)] font-heading">
                Explore Your Local Area
              </h2>
              <p className="text-xs text-stone-500 mt-0.5 sm:mt-1">
                {searchTerm ? `Showing matching results.` : 'Click any area for dedicated services.'}
              </p>
            </div>

            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" aria-hidden="true" />
              <input
                id="locations-search-input"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search area (e.g. West Bridgford, Arnold)..."
                aria-label="Search service areas across Nottinghamshire"
                className="w-full pl-11 pr-4 py-2 text-xs bg-stone-50 border-none rounded-full focus:outline-emerald-800"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear area search input"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Locations - Very small buttons with just the name */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {filtered.map(loc => (
              <button
                key={loc.slug}
                onClick={() => onNavigate('location-detail', { slug: loc.slug })}
                className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-stone-800 bg-[var(--color-surface-subtle)] hover:bg-[var(--color-primary)] hover:text-white border border-stone-200/80 shadow-2xs hover:shadow-xs transition-all cursor-pointer hover:scale-[1.02]"
              >
                {loc.name}
              </button>
            ))}
            <button
              onClick={() => onNavigate('contact')}
              className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-[var(--color-primary)] bg-[var(--color-accent)] hover:bg-[#bbf646] border border-[var(--color-accent-dark)]/30 shadow-2xs hover:shadow-xs transition-all cursor-pointer hover:scale-[1.05]"
              title="We cover all surrounding areas - contact us today"
            >
              (+more!)
            </button>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-10 sm:py-16">
              <p className="text-stone-500 text-sm">No locations found matching "{searchTerm}".</p>
              <button
                onClick={() => setSearchTerm('')}
                className="btn-squish-dark text-xs py-2 px-6 mt-4 font-semibold"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Callout Band */}
      <section className="w-full bg-[var(--color-primary)] text-white pt-6 sm:pt-12 lg:pt-14 pb-5 sm:pb-8 lg:pb-10 text-center shadow-xs rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-black font-heading">
            Don't see your specific neighbourhood listed?
          </h2>
          <p className="mt-3 text-stone-300 text-sm max-w-xl mx-auto">
            Our vans operate throughout all boroughs across Greater Nottingham and the wider East Midlands county.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-squish-primary text-sm px-7 py-3 font-semibold"
            >
              <span>Enquire About Your Area</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="btn-squish-outline text-sm px-7 py-3 font-semibold"
            >
              <Phone className="w-4 h-4 text-[var(--color-accent)]" />
              <span>Call Us: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
