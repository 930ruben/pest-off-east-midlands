import { useState } from 'react';
import { siteConfig, allServices } from '../config/siteConfig';
import { PartnerMarquee } from '../components/PartnerMarquee';
import {
  Building2,
  FileCheck,
  Phone,
  ArrowRight,
  Send,
  CheckCircle2,
} from 'lucide-react';

interface CommercialPageProps {
  onNavigate: (page: string, params?: { slug?: string }) => void;
}

export function CommercialPage({ onNavigate }: CommercialPageProps) {
  const [submitted, setSubmitted] = useState(false);

  const commercialServices = allServices.filter(s => s.category === 'commercial' || s.category === 'both');

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
              Commercial Contracts & Compliance
            </span>
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight font-heading leading-tight">
              Commercial Pest Control
            </h1>
            <p className="mt-3 sm:mt-4 text-xs sm:text-lg text-stone-200 leading-snug sm:leading-relaxed font-medium">
              Protect your business reputation, staff, and hygiene rating with scheduled preventative pest contracts. Fully compliant with BPCA, HACCP, and Environmental Health audit standards.
            </p>

            <div className="mt-4.5 sm:mt-8 flex flex-col sm:flex-row gap-2.5 sm:gap-4">
              <button
                onClick={() => {
                  const form = document.getElementById('commercial-form');
                  if (form) form.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-squish-primary text-xs sm:text-base px-5 sm:px-7 py-2.5 sm:py-3 font-semibold w-full sm:w-auto"
              >
                <span>Request Commercial Audit</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="btn-squish-outline text-xs sm:text-base px-5 sm:px-7 py-2.5 sm:py-3 font-semibold w-full sm:w-auto"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-accent)]" />
                <span>Direct Line: {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Corporate Clients Marquee */}
      <section className="w-full bg-[var(--color-surface)] pt-2.5 pb-2.5 sm:pt-3.5 sm:pb-3.5 border-b border-stone-100 shadow-xs rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PartnerMarquee title="Trusted by Nottinghamshire Organisations" />
        </div>
      </section>

      {/* Compliance & Audit Documentation Band */}
      <section className="w-full bg-[var(--color-surface)] pt-6 sm:pt-10 lg:pt-12 pb-4 sm:pb-6 lg:pb-8 shadow-xs rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--color-accent-dark)] block mb-1.5 sm:mb-2">
                Audit Ready
              </span>
              <h2 className="text-xl sm:text-4xl font-black text-[var(--color-primary)] font-heading tracking-tight mb-3 sm:mb-4">
                Full EHO & Food Hygiene Documentation
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 sm:mb-6">
                We supply every contract customer with a dedicated on-site pest log folder containing all certificates, COSHH safety data sheets, bait layout plans, and comprehensive technician visit records.
              </p>

              <div className="space-y-2.5 sm:space-y-3 text-xs text-stone-700">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <FileCheck className="w-4 h-4 text-[var(--color-accent-dark)] flex-shrink-0 mt-0.5" />
                  <span>Scheduled routine inspections tailored to your business risk profile</span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <FileCheck className="w-4 h-4 text-[var(--color-accent-dark)] flex-shrink-0 mt-0.5" />
                  <span>Prompt emergency callout cover (response times depend on your Service Level Agreement)</span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <FileCheck className="w-4 h-4 text-[var(--color-accent-dark)] flex-shrink-0 mt-0.5" />
                  <span>Electronic Fly Killer (EFK) tube servicing and catch tray audits</span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <FileCheck className="w-4 h-4 text-[var(--color-accent-dark)] flex-shrink-0 mt-0.5" />
                  <span>Actionable proofing and housekeeping advice to prevent future ingress</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[var(--color-surface-subtle)] theme-card p-5 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-primary)] font-heading mb-3 sm:mb-4">
                Sectors We Protect Across Nottingham
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white shadow-xs">
                  <div className="font-bold text-[var(--color-primary)]">Restaurants & Cafes</div>
                  <div className="text-stone-500 mt-0.5">5-star hygiene rating preservation</div>
                </div>
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white shadow-xs">
                  <div className="font-bold text-[var(--color-primary)]">Care Homes & Healthcare</div>
                  <div className="text-stone-500 mt-0.5">Sensitive, discreet pest control</div>
                </div>
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white shadow-xs">
                  <div className="font-bold text-[var(--color-primary)]">Warehousing & Logistics</div>
                  <div className="text-stone-500 mt-0.5">Stock protection and pallet proofing</div>
                </div>
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white shadow-xs">
                  <div className="font-bold text-[var(--color-primary)]">Offices & Retail</div>
                  <div className="text-stone-500 mt-0.5">Unmarked vehicles for discreet visits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services Grid Band */}
      <section className="w-full bg-[var(--color-surface-subtle)] pt-6 sm:pt-12 lg:pt-14 pb-3 sm:pb-5 lg:pb-6 rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--color-accent-dark)] block mb-1.5 sm:mb-2">
              Commercial Treatments
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[var(--color-primary)] tracking-tight font-heading">
              Targeted Business Solutions
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1.5 sm:mt-2">
              Full spectrum pest management designed specifically for Nottinghamshire commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {commercialServices.map(service => (
              <div
                key={service.id}
                className="bg-[var(--color-surface)] theme-card p-5 sm:p-7 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <span className="text-xs font-bold text-[var(--color-primary)] bg-[var(--color-surface-subtle)] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                      Commercial
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
                </div>
                <button
                  onClick={() => {
                    const form = document.getElementById('commercial-form');
                    if (form) form.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-squish-dark text-xs py-2 px-4 font-semibold w-full mt-2 sm:mt-0"
                >
                  Enquire For Site
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Quote Form Band */}
      <section id="commercial-form" className="w-full bg-[var(--color-primary)] text-white pt-6 sm:pt-12 lg:pt-14 pb-4 sm:pb-6 lg:pb-8 shadow-xs scroll-mt-24 rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight font-heading">
                Book a Free Commercial Site Survey
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm mt-2">
                We will survey your facility, identify risk points, and provide a fixed-price service proposal.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[var(--color-surface)] text-stone-900 theme-card p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[var(--color-accent-dark)] mx-auto" />
                <h3 className="text-xl font-bold text-[var(--color-primary)] font-heading">Survey Request Logged</h3>
                <p className="text-stone-600 text-xs">
                  Thank you. Our commercial account manager will reach out shortly to discuss your requirements.
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
                    placeholder="Contact name or company (e.g. David Miller - Oakfield Care)"
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
                      placeholder="e.g. Colwick Industrial Estate, Nottingham"
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200/80 rounded-xl focus:outline-emerald-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">Details / Notes</label>
                  <textarea
                    rows={4}
                    placeholder="Facility type, current issues, or contract requirements (e.g. monthly visits, audit compliance)..."
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200/80 rounded-xl focus:outline-emerald-800"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-squish-primary w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:shadow-md"
                >
                  <span>Request Free Commercial Survey</span>
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
