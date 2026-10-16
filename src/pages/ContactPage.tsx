import { useState } from 'react';
import { siteConfig, allNottinghamLocations, allServices } from '../config/siteConfig';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string, params?: { slug?: string }) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

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
              Get In Touch
            </span>
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight font-heading leading-tight">
              Contact Pest Off Nottingham
            </h1>
            <p className="mt-3 sm:mt-4 text-xs sm:text-lg text-stone-200 leading-snug sm:leading-relaxed font-medium">
              Call us directly or complete the form below. We provide free advice, upfront pricing, and professional service across all Nottinghamshire areas.
            </p>

            <div className="mt-4.5 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="btn-squish-primary text-xs sm:text-base px-6 sm:px-8 py-2.5 sm:py-3.5 font-semibold w-full sm:w-auto text-center"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-primary)]" />
                <span>Call {siteConfig.phone}</span>
              </a>
              <span className="text-stone-300 text-xs sm:text-sm text-center sm:text-left">
                Serving homes & businesses 7 days a week
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="w-full pt-4 sm:pt-10 lg:pt-12 pb-3 sm:pb-5 lg:pb-6">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Left Info Column */}
          <div className="lg:col-span-5 bg-[var(--color-surface)] theme-island p-5 sm:p-10 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--color-accent-dark)] block mb-1.5 sm:mb-2">
                Direct Contact Details
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-[var(--color-primary)] font-heading mb-4 sm:mb-6">
                We're Here To Help
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[var(--color-surface-subtle)] text-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-accent-dark)]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold text-stone-500 uppercase tracking-wider">
                      Telephone
                    </span>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="block text-base sm:text-lg font-black text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] transition-colors mt-0.5"
                    >
                      {siteConfig.phone}
                    </a>
                    <span className="text-xs text-stone-500">Serving all of Nottingham</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[var(--color-surface-subtle)] text-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-accent-dark)]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold text-stone-500 uppercase tracking-wider">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="block text-xs sm:text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] transition-colors mt-0.5"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[var(--color-surface-subtle)] text-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-accent-dark)]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold text-stone-500 uppercase tracking-wider">
                      Operating Office
                    </span>
                    <p className="text-xs text-stone-700 font-medium mt-0.5 leading-relaxed">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[var(--color-surface-subtle)] text-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-accent-dark)]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold text-stone-500 uppercase tracking-wider">
                      Operating Hours
                    </span>
                    <p className="text-xs text-stone-700 font-medium mt-0.5">
                      {siteConfig.operatingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-stone-100 text-xs text-stone-500 space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-accent-dark)] flex-shrink-0" />
                <span>British Pest Control Association (BPCA) standards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-accent-dark)] flex-shrink-0" />
                <span>Discreet unmarked vans for total privacy</span>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-[var(--color-primary)] text-white theme-island p-5 sm:p-10 shadow-xs">
            <h2 className="text-xl sm:text-3xl font-black tracking-tight font-heading mb-1.5 sm:mb-2">
              Send an Enquiry
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mb-4 sm:mb-6">
              Complete this short form and a technician will get in touch with you promptly.
            </p>

            {submitted ? (
              <div className="bg-[var(--color-surface)] text-stone-900 theme-card p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[var(--color-accent-dark)] mx-auto" />
                <h3 className="text-xl font-bold text-[var(--color-primary)] font-heading">Thank You</h3>
                <p className="text-stone-600 text-xs">
                  We have received your enquiry and will be in contact shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-squish-primary text-xs py-2 px-6 font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[var(--color-surface)] text-stone-900 theme-card p-6 sm:p-8 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name (e.g. Richard Walker)"
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200/80 rounded-xl focus:outline-emerald-800"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">Phone / Email *</label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="Phone number or email address"
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200/80 rounded-xl focus:outline-emerald-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">Location *</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. West Bridgford, Nottingham, or postcode"
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200/80 rounded-xl focus:outline-emerald-800 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">Details / Notes</label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Describe what pests you are seeing or hearing, property type, or any specific details..."
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200/80 rounded-xl focus:outline-emerald-800"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-squish-primary w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:shadow-md"
                >
                  <span>Submit Enquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
