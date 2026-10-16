import { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

interface ResponsiveHeroImageProps {
  className?: string;
  priority?: boolean;
  alt?: string;
}

// Network Information API TypeScript definitions
interface NetworkInformation extends EventTarget {
  readonly effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
  readonly saveData?: boolean;
  addEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
  removeEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation;
  mozConnection?: NetworkInformation;
  webkitConnection?: NetworkInformation;
}

export function ResponsiveHeroImage({
  className = 'w-full h-full object-cover object-center -scale-x-100',
  priority = true,
  alt = 'Pest control contractor providing rodent and insect eradication across Nottingham and the East Midlands',
}: ResponsiveHeroImageProps) {
  const [isSlowConnection, setIsSlowConnection] = useState<boolean>(() => {
    if (typeof navigator !== 'undefined') {
      const nav = navigator as NavigatorWithConnection;
      const conn = nav.connection || nav.mozConnection || nav.webkitConnection;
      if (conn) {
        if (conn.saveData) return true;
        if (conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g' || conn.effectiveType === '3g') {
          return true;
        }
      }
    }
    return false;
  });

  useEffect(() => {
    if (typeof navigator === 'undefined') return;
    const nav = navigator as NavigatorWithConnection;
    const conn = nav.connection || nav.mozConnection || nav.webkitConnection;
    if (!conn) return;

    const updateConnection = () => {
      const slow = Boolean(
        conn.saveData ||
        conn.effectiveType === 'slow-2g' ||
        conn.effectiveType === '2g' ||
        conn.effectiveType === '3g'
      );
      setIsSlowConnection(slow);
    };

    conn.addEventListener('change', updateConnection);
    return () => conn.removeEventListener('change', updateConnection);
  }, []);

  const images = siteConfig.hero.responsiveImages || {
    mobileSlow: '/assets/hero/hero-mobile-slow.webp',
    mobile: '/assets/hero/hero-mobile.webp',
    mobile2x: '/assets/hero/hero-mobile-2x.webp',
    tablet: '/assets/hero/hero-tablet.webp',
    desktop: '/assets/hero/hero-desktop.webp',
    fallback: '/assets/hero/hero-fallback.jpg',
  };

  // If slow network or Save-Data is active, serve the ultra-compressed WebP (6.5 KB)
  if (isSlowConnection) {
    return (
      <img
        src={images.mobileSlow}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        width={480}
        height={320}
      />
    );
  }

  // Standard responsive picture element
  return (
    <picture className="w-full h-full block">
      {/* Mobile devices: 640w and 2x 960w */}
      <source
        type="image/webp"
        media="(max-width: 639px)"
        srcSet={`${images.mobile} 640w, ${images.mobile2x} 960w`}
        sizes="100vw"
      />
      {/* Tablet devices: 1280w */}
      <source
        type="image/webp"
        media="(max-width: 1023px)"
        srcSet={`${images.tablet} 1280w`}
        sizes="100vw"
      />
      {/* Desktop displays: 1920w */}
      <source
        type="image/webp"
        media="(min-width: 1024px)"
        srcSet={`${images.desktop} 1920w`}
        sizes="100vw"
      />
      {/* Modern fallback image */}
      <img
        src={images.fallback}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        width={960}
        height={641}
      />
    </picture>
  );
}
