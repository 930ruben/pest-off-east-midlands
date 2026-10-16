import { siteConfig } from '../config/siteConfig';
import {
  ShieldCheck,
  CheckCircle2,
  EyeOff,
  Award,
  ArrowRight,
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: string, params?: { slug?: string }) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <div className="pt-0 pb-2 sm:pb-4">
      {/* 1. HERO SECTION (Clear background photo visibility with text positioned so it's not in the way) */}
      <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full">
        <div 
          className="relative theme-island overflow-hidden shadow-sm bg-[var(--color-primary)] text-white flex flex-col sm:flex-row sm:items-center"
        >
          {/* Mobile Dedicated Image Container (placed above Nottingham Pest Control) */}
          <div className="block sm:hidden w-full h-44 sm:h-52 relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center -scale-x-100"
              style={{ 
                backgroundImage: `url('${siteConfig.hero.bgImage}')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-black/10" />
          </div>

          {/* Desktop Background Photo - updatable via siteConfig.hero.bgImage */}
          <div 
            className="hidden sm:block absolute inset-0 bg-cover bg-center transition-transform duration-700 -scale-x-100"
            style={{ 
              backgroundImage: `url('${siteConfig.hero.bgImage}')`,
            }}
          />

          {/* Desktop Directional Gradient Overlay */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#14351b]/95 via-[#14351b]/85 sm:via-[#14351b]/60 to-black/25" />

          {/* Hero Content */}
          <div className="relative z-10 py-6 sm:py-20 lg:py-28 px-5 sm:px-12 lg:px-16 max-w-2xl text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[1.08] font-heading">
              {siteConfig.hero.title}
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-stone-200 leading-relaxed font-medium">
              {siteConfig.hero.subtitle}
            </p>

            {/* Tactile Flat-on-Hover / Shadowed-on-Press Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
              <button
                onClick={() => onNavigate('contact')}
                className="btn-squish-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 font-semibold w-full sm:w-auto"
              >
                <span>Get in Contact</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/15 grid grid-cols-2 gap-3 sm:gap-3.5 max-w-lg">
              <div className="flex items-center gap-2 text-stone-200">
                <ShieldCheck className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                <span className="text-xs font-semibold">BPCA Registered</span>
              </div>
              <div className="flex items-center gap-2 text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                <span className="text-xs font-semibold">Child & Pet Friendly</span>
              </div>
              <div className="flex items-center gap-2 text-stone-200">
                <EyeOff className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                <span className="text-xs font-semibold">Discreet Unmarked Vans</span>
              </div>
              <div className="flex items-center gap-2 text-stone-200">
                <ShieldCheck className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                <span className="text-xs font-semibold">Fully Certified & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
