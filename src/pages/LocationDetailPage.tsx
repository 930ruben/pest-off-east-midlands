import { useState } from 'react';
import { allNottinghamLocations, siteConfig, allServices } from '../config/siteConfig';
import { LocationHeroMap } from '../components/LocationHeroMap';
import {
  MapPin,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  EyeOff,
  Check,
  Send,
  ArrowLeft,
} from 'lucide-react';

interface LocationDetailPageProps {
  slug: string;
  onNavigate: (page: string, params?: { slug?: string }) => void;
}

export function LocationDetailPage({ slug, onNavigate }: LocationDetailPageProps) {
  const [submitted, setSubmitted] = useState(false);
  const location = allNottinghamLocations.find(l => l.slug === slug) || allNottinghamLocations[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col gap-2.5 sm:gap-4 lg:gap-5">
      {/* Breadcrumb / Back Link */}
      <div className="w-full bg-white border border-stone-200/50 py-2 sm:py-3 rounded-xl sm:rounded-3xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full">
          <button
            onClick={() => onNavigate('locations')}
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-stone-600 hover:text-[var(--color-primary)] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Locations</span>
          </button>
        </div>
      </div>

      {/* Hero Header Band with Interactive Google Maps Integration */}
      <section className="w-full bg-[var(--color-primary)] text-white pt-4 sm:pt-10 lg:pt-12 pb-5 sm:pb-8 lg:pb-10 shadow-xs rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3.5 w-fit">
                <MapPin className="w-3.5 h-3.5" />
                <span>Dedicated {location.name} Pest Control</span>
              </div>

              {/* Mobile Google Map - placed right between badge and heading */}
              <div className="lg:hidden w-full my-2.5 sm:my-3.5">
                <LocationHeroMap 
                  location={location} 
                  className="w-full h-[230px] sm:h-[280px]"
                />
              </div>

              <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight font-heading leading-tight">
                Pest Control in {location.name}
              </h1>

              <p className="mt-3 sm:mt-4 text-xs sm:text-lg text-stone-200 leading-snug sm:leading-relaxed font-medium">
                Professional, prompt pest eradication for homes, apartments, and commercial businesses throughout {location.name} and surrounding East Midlands neighborhoods.
              </p>

              <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 text-xs font-medium text-stone-200/90 pb-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0" />
                  <span className="truncate">Emergency Callouts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <EyeOff className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0" />
                  <span className="truncate">Discreet Unmarked Vans</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0" />
                  <span className="truncate">BPCA Certified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0" />
                  <span className="truncate">Guaranteed Results</span>
                </div>
              </div>

              <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row gap-2.5 sm:gap-4">
                <button
                  onClick={() => {
                    const form = document.getElementById('local-quote-form');
                    if (form) form.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-squish-primary text-xs sm:text-base px-5 sm:px-7 py-2.5 sm:py-3 font-semibold w-full sm:w-auto"
                >
                  <span>Request {location.name} Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="btn-squish-outline text-xs sm:text-base px-5 sm:px-7 py-2.5 sm:py-3 font-semibold w-full sm:w-auto"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-accent)]" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Desktop Google Map Integration (hidden on mobile to avoid duplication) */}
            <div className="hidden lg:flex lg:col-span-5 w-full flex-col">
              <LocationHeroMap 
                location={location} 
                className="w-full h-[360px] lg:h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Area Context & Insights Band */}
      <section className="w-full bg-[var(--color-surface)] pt-6 sm:pt-10 lg:pt-12 pb-4 sm:pb-6 lg:pb-8 shadow-xs rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="lg:col-span-7">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--color-accent-dark)] block mb-1.5 sm:mb-2">
                Local Focus
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-[var(--color-primary)] font-heading tracking-tight mb-3 sm:mb-4">
                Pest Challenges in {location.name}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-3 sm:mb-4">
                {location.summary}
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 sm:mb-6">
                Our technicians are stationed locally to resolve wasp nests, active rodent noises, and commercial pest challenges safely, thoroughly, and discreetly.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs font-medium text-stone-700 pt-3.5 sm:pt-4 border-t border-stone-100">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-accent-dark)]" />
                  <span>Dedicated {location.name} Technicians</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <EyeOff className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-accent-dark)]" />
                  <span>Unmarked Vans Available</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-accent-dark)]" />
                  <span>Certified Pest Eradication</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-accent-dark)]" />
                  <span>Pet & Child Friendly Treatments</span>
                </div>
              </div>
            </div>

            {/* Nearby Areas Covered Card */}
            <div className="lg:col-span-5 bg-[var(--color-surface-subtle)] theme-card p-4.5 sm:p-8">
              <h3 className="text-sm sm:text-base font-bold text-[var(--color-primary)] font-heading mb-2 sm:mb-3">
                Covering {location.name} & Surrounds
              </h3>
              <p className="text-xs text-stone-500 mb-3 sm:mb-4">
                Technicians serving this local zone cover all nearby streets and surrounding districts:
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {location.nearbyAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white text-stone-800 text-[11px] sm:text-xs font-semibold shadow-2xs"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 pt-3.5 sm:pt-5 border-t border-stone-200/60">
                <span className="text-xs font-bold text-stone-500 block mb-1.5 sm:mb-2">Common Local Infestations:</span>
                <div className="flex flex-wrap gap-1.5">
                  {location.commonPests.map((pest, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 sm:py-1 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-primary)] text-[11px] sm:text-xs font-bold"
                    >
                      {pest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Services Offered */}
      <section className="w-full bg-[var(--color-surface-subtle)] pt-6 sm:pt-12 lg:pt-14 pb-3 sm:pb-5 lg:pb-6 rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--color-accent-dark)] block mb-1.5 sm:mb-2">
              Available Treatments
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[var(--color-primary)] tracking-tight font-heading">
              Our Services in {location.name}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1.5 sm:mt-2">
              Comprehensive pest treatments available for domestic properties and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {allServices.slice(0, 4).map(service => (
              <div
                key={service.id}
                className="bg-[var(--color-surface)] theme-card p-4.5 sm:p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[var(--color-primary)] mb-1.5 sm:mb-2 font-heading">
                    {service.name}
                  </h3>
                  <p className="text-xs text-stone-600 mb-3 sm:mb-4 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
                <button
                  onClick={() => {
                    const form = document.getElementById('local-quote-form');
                    if (form) form.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-squish-dark text-xs py-2 px-3 font-semibold w-full mt-2 sm:mt-0"
                >
                  Book in {location.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form for Location */}
      <section id="local-quote-form" className="w-full bg-[var(--color-primary)] text-white pt-6 sm:pt-12 lg:pt-14 pb-4 sm:pb-6 lg:pb-8 shadow-xs scroll-mt-24 rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight font-heading">
                Request a Callout in {location.name}
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm mt-2">
                Need advice or a prompt visit? Enter your details and our {location.name} technician will respond shortly.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[var(--color-surface)] text-stone-900 theme-card p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[var(--color-accent-dark)] mx-auto" />
                <h3 className="text-xl font-bold text-[var(--color-primary)] font-heading">Enquiry Sent</h3>
                <p className="text-stone-600 text-xs">
                  Thank you! Our local technician for {location.name} will call you back promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-squish-primary text-xs py-2 px-6 font-semibold"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[var(--color-surface)] text-stone-900 theme-card p-6 sm:p-8 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Smith"
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200/80 rounded-xl focus:outline-emerald-800"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">Phone / Email *</label>
                    <input
                      type="text"
                      required
                      placeholder={`e.g. ${siteConfig.phone} or email`}
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200/80 rounded-xl focus:outline-emerald-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">Location *</label>
                    <input
                      type="text"
                      required
                      defaultValue={location.name}
                      placeholder={`e.g. ${location.name}`}
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200/80 rounded-xl focus:outline-emerald-800 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">Details / Notes</label>
                  <textarea
                    rows={4}
                    placeholder={`Provide details about the pest issue in ${location.name}, property type, or specific concerns...`}
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200/80 rounded-xl focus:outline-emerald-800"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-squish-primary w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:shadow-md"
                >
                  <span>Request Property Visit</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
