import { PestOffLogo } from './PestOffLogo';
import { siteConfig, allNottinghamLocations } from '../config/siteConfig';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, params?: { slug?: string }) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const popularFooterLocations = allNottinghamLocations.slice(0, 6);

  return (
    <footer role="contentinfo" className="w-full bg-[#0f2314] text-stone-300 pt-10 sm:pt-14 pb-3.5 sm:pb-4 shadow-xs rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Accreditations Row */}
        <div className="pb-6 mb-8 border-b border-stone-800/80 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {siteConfig.accreditations.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#183921] flex items-center justify-center text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  {item.abbr}
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5 leading-snug">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Column Layout - Reduced bottom margin to tighten spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-5 sm:mb-6">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2">
            <PestOffLogo lightMode={true} imageClassName="h-10 sm:h-12 w-auto max-w-[180px] object-contain" />
            <p className="mt-4 text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm">
              Professional, friendly pest control for Nottingham and surrounding areas. Protecting homes and commercial businesses with safe, guaranteed treatments.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#183921] text-[11px] font-semibold text-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                Est. {siteConfig.establishedYear}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#183921] text-[11px] font-semibold text-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                Unmarked Vans Available
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#183921] text-[11px] font-semibold text-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                Child & Pet Friendly
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#183921] text-[11px] font-semibold text-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                BPCA Certified
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <nav aria-label="Footer Navigation">
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[var(--color-accent)] transition-colors text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('residential')}
                  className="hover:text-[var(--color-accent)] transition-colors text-left cursor-pointer"
                >
                  Residential Pest Control
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('commercial')}
                  className="hover:text-[var(--color-accent)] transition-colors text-left cursor-pointer"
                >
                  Commercial Pest Contracts
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('locations')}
                  className="hover:text-[var(--color-accent)] transition-colors text-left cursor-pointer"
                >
                  Nottingham Locations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[var(--color-accent)] transition-colors text-left font-bold text-white cursor-pointer"
                >
                  Contact & Quotes
                </button>
              </li>
              <li>
                <a
                  href={siteConfig.googleRating.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-accent)] transition-colors text-left flex items-center gap-1.5 text-stone-300"
                >
                  <span>Google Reviews</span>
                  {siteConfig.googleRating.score === 5 ? (
                    <span className="text-[10px] text-amber-400 font-bold">5.0 ★</span>
                  ) : (
                    <ExternalLink className="w-3 h-3 text-stone-400" />
                  )}
                </a>
              </li>
              <li className="pt-1.5 border-t border-stone-800/60">
                <a
                  href="https://rubenalexander.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-accent)] transition-colors text-left flex items-center gap-1.5 text-stone-300 text-[11px]"
                >
                  <span>Website by rubenalexander.co.uk</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </li>
            </ul>
            </nav>
          </div>

          {/* Col 3: Popular Local Areas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Local Areas
            </h4>
            <ul className="space-y-2 text-xs">
              {popularFooterLocations.map((loc) => (
                <li key={loc.slug}>
                  <button
                    onClick={() => onNavigate('location-detail', { slug: loc.slug })}
                    className="hover:text-[var(--color-accent)] transition-colors text-left flex items-center justify-between w-full cursor-pointer"
                  >
                    <span>{loc.name}</span>
                    <ArrowRight className="w-3 h-3 text-stone-600" />
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('locations')}
                  className="text-[var(--color-accent)] hover:underline font-bold text-xs pt-1 block cursor-pointer"
                >
                  All Nottingham areas (+20) →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2.5 text-white hover:text-[var(--color-accent)] transition-colors font-bold"
              >
                <div className="w-7 h-7 rounded-full bg-[#183921] flex items-center justify-center text-[var(--color-accent)]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{siteConfig.phone}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-stone-300 hover:text-[var(--color-accent)] transition-colors truncate"
              >
                <div className="w-7 h-7 rounded-full bg-[#183921] flex items-center justify-center text-[var(--color-accent)]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{siteConfig.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-stone-400">
                <div className="w-7 h-7 rounded-full bg-[#183921] flex items-center justify-center text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>{siteConfig.address}</span>
              </div>

              <div className="flex items-start gap-2.5 text-stone-400">
                <div className="w-7 h-7 rounded-full bg-[#183921] flex items-center justify-center text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span>{siteConfig.operatingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Tightened padding, credit link to rubenalexander.co.uk next to copyright */}
        <div className="pt-3 sm:pt-4 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-[11px] text-stone-400">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2.5 text-center sm:text-left">
            <span>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </span>
            <span className="hidden sm:inline text-stone-600">|</span>
            <span>
              Designed & built by{' '}
              <a
                href="https://rubenalexander.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-200 hover:text-[var(--color-accent)] underline underline-offset-2 transition-colors font-semibold"
              >
                rubenalexander.co.uk
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Est. {siteConfig.establishedYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
