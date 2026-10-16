import { useState } from 'react';
import { siteConfig, allServices, allNottinghamLocations } from '../config/siteConfig';
import { ResponsiveHeroImage } from '../components/ResponsiveHeroImage';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { GoogleReviewsWidget } from '../components/GoogleReviewsWidget';
import { FAQSection } from '../components/FAQSection';
import {
  Phone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  EyeOff,
  Award,
  MapPin,
  Check,
  Building2,
  Home as HomeIcon,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, params?: { slug?: string }) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredLocations = allNottinghamLocations.filter(l => l.isFeatured);
  const popularLocations = allNottinghamLocations.filter(l => l.isPopular);

  return (
    <div className="flex flex-col gap-2.5 sm:gap-4 lg:gap-5">
      {/* 1. HERO SECTION */}
      <section className="w-full relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[var(--color-primary)] text-white flex flex-col sm:flex-row sm:items-center shadow-xs">
        {/* Mobile Dedicated Image Container (placed above Nottingham Pest Control) */}
        <div className="block sm:hidden w-full h-44 sm:h-52 relative overflow-hidden">
          <ResponsiveHeroImage
            className="absolute inset-0 w-full h-full object-cover object-center -scale-x-100"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-black/10" />
        </div>

        {/* Desktop Background Photo (covers full card on desktop) */}
        <div className="hidden sm:block absolute inset-0 overflow-hidden">
          <ResponsiveHeroImage
            className="w-full h-full object-cover object-center transition-transform duration-700 -scale-x-100"
            priority={true}
          />
        </div>

        {/* Desktop Directional Gradient Overlay */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#14351b]/95 via-[#14351b]/85 sm:via-[#14351b]/60 to-black/25" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2 sm:pt-12 lg:pt-16 pb-4 sm:pb-6 lg:pb-8">
          <div className="max-w-2xl text-left">
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[1.08] font-heading">
              {siteConfig.hero.title}
            </h1>

            <p className="mt-3 sm:mt-5 text-xs sm:text-lg text-stone-200 leading-snug sm:leading-relaxed font-medium">
              {siteConfig.hero.subtitle}
            </p>

            {/* Tactile Flat-on-Hover / Shadowed-on-Press Buttons */}
            <div className="mt-4.5 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5">
              <button
                onClick={() => onNavigate('contact')}
                className="btn-squish-primary text-xs sm:text-base px-5 sm:px-8 py-2.5 sm:py-3.5 font-semibold w-full sm:w-auto"
              >
                <span>Get in Contact</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-4.5 sm:mt-10 pt-3.5 sm:pt-6 border-t border-white/15 grid grid-cols-2 gap-2.5 sm:gap-3.5 max-w-lg">
              <div className="flex items-center gap-1.5 sm:gap-2 text-stone-200">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-accent)] flex-shrink-0" />
                <span className="text-[10.5px] sm:text-xs font-semibold">BPCA Registered</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-stone-200">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-accent)] flex-shrink-0" />
                <span className="text-[10.5px] sm:text-xs font-semibold">Child & Pet Friendly</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-stone-200">
                <EyeOff className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-accent)] flex-shrink-0" />
                <span className="text-[10.5px] sm:text-xs font-semibold">Discreet Unmarked Vans</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-stone-200">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-accent)] flex-shrink-0" />
                <span className="text-[10.5px] sm:text-xs font-semibold">Fully Certified & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFINITE SCROLLING COMPANY LOGOS */}
      <section className="w-full bg-[var(--color-surface)] pt-2.5 pb-2.5 sm:pt-3.5 sm:pb-3.5 border-b border-stone-100 shadow-xs rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <PartnerMarquee />
        </div>
      </section>

      {/* 3. CALLOUT BANNER (Edge-to-edge box with rounded corners) */}
      <section className="w-full bg-[var(--color-primary)] text-white pt-5 sm:pt-10 lg:pt-12 pb-4 sm:pb-6 lg:pb-7 shadow-xs rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-8">
          <div className="text-center md:text-left pb-1">
            <h2 className="text-xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight font-heading leading-tight">
              {siteConfig.banner.headline}
            </h2>
            <p className="text-stone-300 text-xs sm:text-base mt-[10px] pt-0 max-w-xl">
              {siteConfig.banner.subtitle}
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="btn-squish-primary text-xs sm:text-base px-6 sm:px-8 py-2.5 sm:py-3.5 flex-shrink-0 font-semibold w-full sm:w-auto mt-1 sm:mt-0"
          >
            <span>{siteConfig.banner.buttonText}</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </section>

      {/* 4. MULTI-PAGE PATHWAY: Residential vs. Commercial */}
      <section className="w-full pt-4 sm:pt-8 lg:pt-10 pb-2 sm:pb-4">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Residential Card */}
            <div 
              className="bg-[var(--color-surface)] theme-island p-4.5 sm:p-8 lg:p-10 shadow-xs flex flex-col justify-between"
              style={{ '--color-accent': '#748445', '--color-accent-dark': '#748445' } as React.CSSProperties}
            >
              <div>
                <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-[var(--color-surface-subtle)] text-[#748445] flex items-center justify-center mb-2.5 sm:mb-5">
                  <HomeIcon className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-[#748445]" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#748445] block mb-1.5 sm:mb-2">
                  For Homeowners & Landlords
                </span>
                <h3 className="text-xl sm:text-3xl font-black text-[var(--color-primary)] tracking-tight font-heading mb-2.5 sm:mb-3">
                  Residential Pest Control
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  Fast relief from mice, rats, wasps, bed bugs, fleas, and squirrels in family homes, lofts, and garden perimeters. Safe around pets and children.
                </p>
                <ul className="space-y-2.5 sm:space-y-2.5 mb-5 sm:mb-8 text-xs text-stone-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#748445] flex-shrink-0" /> Prompt, professional callouts for active infestations
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#748445] flex-shrink-0" /> Child & pet safe tamper-resistant bait stations
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#748445] flex-shrink-0" /> Discreet unmarked vehicles
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('residential')}
                className="btn-squish-dark text-xs sm:text-sm py-2.5 sm:py-3 px-5 sm:px-6 font-semibold w-full sm:w-auto mt-2 sm:mt-0"
              >
                <span>Explore Residential Services</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#748445]" />
              </button>
            </div>

            {/* Commercial Card */}
            <div className="bg-[var(--color-primary)] text-white theme-island p-4.5 sm:p-8 lg:p-10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-white/10 text-[var(--color-accent)] flex items-center justify-center mb-2.5 sm:mb-5">
                  <Building2 className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-[var(--color-accent)]" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] block mb-1.5 sm:mb-2">
                  For Businesses & Facility Managers
                </span>
                <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight font-heading mb-2.5 sm:mb-3">
                  Commercial Pest Contracts
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  Scheduled proactive inspections, full HACCP and Environmental Health Officer compliance documentation, and emergency support for Nottingham venues.
                </p>
                <ul className="space-y-2.5 sm:space-y-2.5 mb-5 sm:mb-8 text-xs text-stone-300 font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-accent)] flex-shrink-0" /> Complete EHO & Food Hygiene audit logbooks
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-accent)] flex-shrink-0" /> Regular preventative monitoring agreements
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-accent)] flex-shrink-0" /> Trusted by Molson Coors, Rushcliffe Care & more
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('commercial')}
                className="btn-squish-primary text-xs sm:text-sm py-2.5 sm:py-3 px-5 sm:px-6 font-semibold w-full sm:w-auto mt-2 sm:mt-0"
              >
                <span>Explore Commercial Contracts</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. POPULAR NOTTINGHAM LOCATIONS SECTION */}
      <section className="w-full bg-[var(--color-surface-subtle)] pt-6 sm:pt-12 lg:pt-14 pb-3 sm:pb-5 lg:pb-6 shadow-xs rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-5 sm:mb-8">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--color-accent-dark)] block mb-1.5 sm:mb-2">
                Local Coverage
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[var(--color-primary)] tracking-tight font-heading">
                Popular Nottingham Areas
              </h2>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-base text-stone-600 max-w-xl">
                Serving domestic homeowners and local businesses with dedicated area technicians.
              </p>
            </div>

            <button
              onClick={() => onNavigate('locations')}
              className="btn-squish-dark text-xs sm:text-sm py-2 sm:py-2.5 px-4 sm:px-6 font-semibold flex-shrink-0 w-full sm:w-auto"
            >
              <span>View All Nottingham Areas</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-accent)]" />
            </button>
          </div>

          {/* Featured Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-5">
            {featuredLocations.map(loc => (
              <div
                key={loc.slug}
                onClick={() => onNavigate('location-detail', { slug: loc.slug })}
                className="bg-[var(--color-surface)] p-4 sm:p-7 theme-card shadow-xs hover:shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[var(--color-primary)] text-[var(--color-accent)] flex items-center justify-center">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <h3 className="text-lg sm:text-2xl font-black text-[var(--color-primary)] font-heading group-hover:text-[var(--color-accent-dark)] transition-colors">
                        {loc.name}
                      </h3>
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-emerald-800 bg-[var(--color-surface-subtle)] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                      Primary Hub
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3 sm:mb-4">
                    {loc.summary}
                  </p>
                </div>
                <div className="pt-2 sm:pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-medium text-stone-500">
                    Common: {loc.commonPests.slice(0, 3).join(', ')}
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-[var(--color-primary)] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Local Service Page →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Popular Badges Grid */}
          <div className="bg-[var(--color-surface)] p-3.5 sm:p-5 theme-card shadow-xs">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-400 block mb-2 sm:mb-2.5">
              Other Popular Locations
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2.5">
              {popularLocations.map(loc => (
                <button
                  key={loc.slug}
                  onClick={() => onNavigate('location-detail', { slug: loc.slug })}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-stone-50 hover:bg-[var(--color-primary)] hover:text-white text-stone-800 text-[11px] sm:text-xs font-semibold transition-colors cursor-pointer border border-stone-200/60"
                >
                  {loc.name}
                </button>
              ))}
              <button
                onClick={() => onNavigate('locations')}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[var(--color-accent)]/20 hover:bg-[var(--color-accent)] text-[var(--color-primary)] text-[11px] sm:text-xs font-bold transition-colors cursor-pointer"
              >
                + See All Locations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS (Edge-to-edge box) */}
      <GoogleReviewsWidget />

      {/* 7. FAQ SECTION (Edge-to-edge box) */}
      <FAQSection />

      {/* 8. BOTTOM CONTACT CTA */}
      <section className="w-full bg-[var(--color-primary)] text-white pt-8 sm:pt-14 lg:pt-16 pb-5 sm:pb-8 lg:pb-10 text-center shadow-xs rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-5xl font-black tracking-tight font-heading">
              Ready to resolve your pest problem?
            </h2>
            <p className="mt-2.5 sm:mt-4 text-stone-300 text-xs sm:text-base max-w-xl mx-auto">
              Get in touch with our friendly Nottingham team today for free advice or to arrange a callout.
            </p>
            <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="btn-squish-primary text-xs sm:text-base px-6 sm:px-8 py-2.5 sm:py-3.5 font-semibold w-full sm:w-auto"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="btn-squish-outline text-xs sm:text-base px-6 sm:px-8 py-2.5 sm:py-3.5 font-semibold w-full sm:w-auto"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-accent)]" />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
