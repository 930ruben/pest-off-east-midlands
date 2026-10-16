import { useState } from 'react';
import { siteConfig, allServices } from '../config/siteConfig';
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  EyeOff,
  Check,
  Send,
  Home as HomeIcon,
} from 'lucide-react';

interface ResidentialPageProps {
  onNavigate: (page: string, params?: { slug?: string }) => void;
}

export function ResidentialPage({ onNavigate }: ResidentialPageProps) {
  const [selectedPest, setSelectedPest] = useState('Rats & Mice Control');
  const [submitted, setSubmitted] = useState(false);

  const residentialServices = allServices.filter(s => s.category === 'residential' || s.category === 'both');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col gap-2.5 sm:gap-4 lg:gap-5">
      {/* Header Band */}
      <section className="w-full bg-[var(--color-primary)] text-white pt-4 sm:pt-12 lg:pt-16 pb-3.5 sm:pb-6 lg:pb-8 shadow-xs rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-4">
              For Nottingham Homeowners & Landlords
            </span>
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight font-heading leading-tight">
              Residential Pest Control
            </h1>
            <p className="mt-3 sm:mt-4 text-xs sm:text-lg text-stone-200 leading-snug sm:leading-relaxed font-medium">
              Protecting your home and family with safe, dependable, and guaranteed pest eradication. Discreet unmarked vehicles and certified technicians across Nottinghamshire.
            </p>

            <div className="mt-4.5 sm:mt-8 flex flex-col sm:flex-row gap-2.5 sm:gap-4">
              <button
                onClick={() => {
                  const form = document.getElementById('residential-form');
                  if (form) form.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-squish-primary text-xs sm:text-base px-5 sm:px-7 py-2.5 sm:py-3 font-semibold w-full sm:w-auto"
              >
                <span>Request Home Visit</span>
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
        </div>
      </section>

      {/* Safety & Standards Band */}
      <section className="w-full bg-[var(--color-surface)] pt-6 sm:pt-10 lg:pt-12 pb-4 sm:pb-6 lg:pb-8 shadow-xs rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-[var(--color-surface-subtle)] text-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-[var(--color-accent-dark)]" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-lg text-[var(--color-primary)] mb-1 font-heading">
                  Child & Pet Safe
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  We deploy locked, tamper-resistant bait stations and low-toxicity methods to keep curious cats, dogs, and children safe.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-[var(--color-surface-subtle)] text-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                <EyeOff className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-[var(--color-accent-dark)]" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-lg text-[var(--color-primary)] mb-1 font-heading">
                  Discreet Unmarked Vans
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Complete discretion and privacy. Your neighbours won't know why we're visiting your home.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-[var(--color-surface-subtle)] text-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-[var(--color-accent-dark)]" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-lg text-[var(--color-primary)] mb-1 font-heading">
                  Guaranteed Results
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Every treatment includes full proofing advice and professional eradication protocols to ensure long-term protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Band */}
      <section className="w-full bg-[var(--color-surface-subtle)] pt-6 sm:pt-12 lg:pt-14 pb-3 sm:pb-5 lg:pb-6 rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--color-accent-dark)] block mb-1.5 sm:mb-2">
              Common Domestic Treatments
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[var(--color-primary)] tracking-tight font-heading">
              Residential Pest Treatments
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1.5 sm:mt-2">
              From loft rodents and wasp nests to bed bugs and garden ants, we deliver prompt, fixed-price solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {residentialServices.map(service => (
              <div
                key={service.id}
                className="bg-[var(--color-surface)] theme-card p-5 sm:p-7 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <span className="text-xs font-bold text-[var(--color-primary)] bg-[var(--color-surface-subtle)] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                      Residential
                    </span>
                    {service.badge && (
                      <span className="text-xs font-semibold text-[var(--color-accent-dark)]">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--color-primary)] mb-1.5 sm:mb-2 font-heading">
                    {service.name}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4 sm:mb-5">
                    {service.shortDesc}
                  </p>
                  <div className="space-y-2 mb-4 sm:mb-6">
                    {service.treatmentMethods.slice(0, 2).map((m, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-[var(--color-accent-dark)] flex-shrink-0" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedPest(service.name);
                    const form = document.getElementById('residential-form');
                    if (form) form.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-squish-dark text-xs py-2 px-4 font-semibold w-full mt-2 sm:mt-0"
                >
                  Book Treatment
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Band */}
      <section id="residential-form" className="w-full bg-[var(--color-primary)] text-white pt-6 sm:pt-12 lg:pt-14 pb-4 sm:pb-6 lg:pb-8 shadow-xs scroll-mt-24 rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight font-heading">
                Book a Domestic Pest Inspection
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm mt-2">
                Fill in your details below and a technician will call you back promptly to arrange a visit.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[var(--color-surface)] text-stone-900 theme-card p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[var(--color-accent-dark)] mx-auto" />
                <h3 className="text-xl font-bold text-[var(--color-primary)] font-heading">Request Received</h3>
                <p className="text-stone-600 text-xs">
                  Thank you! Our residential specialist will contact you shortly to confirm your booking.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-squish-primary text-xs py-2 px-6 font-semibold"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[var(--color-surface)] text-stone-900 theme-card p-6 sm:p-8 space-y-4">
                <div>
                  <label htmlFor="residential-name" className="block text-xs font-bold text-stone-700 mb-1.5">
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="residential-name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200/80 rounded-xl focus:outline-emerald-800"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="residential-contact" className="block text-xs font-bold text-stone-700 mb-1.5">
                      Phone / Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="residential-contact"
                      name="contact"
                      type="text"
                      required
                      aria-required="true"
                      placeholder={`e.g. ${siteConfig.phone} or email`}
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200/80 rounded-xl focus:outline-emerald-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="residential-location" className="block text-xs font-bold text-stone-700 mb-1.5">
                      Location <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="residential-location"
                      name="location"
                      type="text"
                      required
                      aria-required="true"
                      placeholder="e.g. West Bridgford, Nottingham"
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200/80 rounded-xl focus:outline-emerald-800"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="residential-notes" className="block text-xs font-bold text-stone-700 mb-1.5">
                    Details / Notes
                  </label>
                  <textarea
                    id="residential-notes"
                    name="notes"
                    rows={4}
                    placeholder="Where are you hearing or seeing pests? (e.g. loft, kitchen, garden shed, or pest symptoms)"
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200/80 rounded-xl focus:outline-emerald-800"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-squish-primary w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:shadow-md"
                >
                  <span>Submit Request</span>
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
