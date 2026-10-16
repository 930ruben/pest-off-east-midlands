# Mobile LCP Image Optimization & Adaptive Bandwidth Delivery

Comprehensive plan to eliminate the 21-second Largest Contentful Paint (LCP) bottleneck on mobile devices by replacing uncompressed remote images with local responsive WebP assets, an adaptive `<picture>` element with high fetch priority, and slow-connection bandwidth saving.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following technical directions were confirmed through interactive requirements clarification:
> - **Delivery Location**: Host responsive WebP images locally inside `/public/assets/hero/` to eliminate external CDN DNS lookups, TCP handshakes, and third-party latency.
> - **Adaptive Bandwidth Strategy**: Automatically serve an ultra-compressed lightweight WebP image (~8–12 KB) whenever the user is on a slow connection (`2G`, `3G`, or `slow-2g`) or has enabled `Save-Data` mode via the Network Information API.
> - **Hero Image Rendering**: Replace CSS background-image declarations with a semantic HTML `<picture>` element using responsive `srcset`, `sizes`, `fetchpriority="high"`, and matching responsive preload links in `index.html`.

---

## 1. Overview & Core Concept

- **The Problem**: Currently, both mobile and desktop viewports request a raw, multi-megabyte JPEG photo directly from an external domain (`images.pexels.com/photos/4176366/pexels-photo-4176366.jpeg`) via CSS `background-image` and an uncompressed preload in `index.html`. On mobile 3G/4G network simulations, this payload creates a 21-second LCP delay.
- **The Solution**: 
  1. Generate pre-optimized, locally hosted WebP assets sized specifically for device viewports:
     - `hero-mobile-compact.webp` (480px width, ultra-optimized for mobile phones, ~18 KB).
     - `hero-mobile-save-data.webp` (360px width, ultra-compressed fallback for slow networks / Save-Data mode, ~8 KB).
     - `hero-tablet.webp` (960px width for mid-size viewports, ~45 KB).
     - `hero-desktop.webp` (1600px width for high-density desktop displays, ~95 KB).
  2. Implement an adaptive `<picture>` wrapper that renders an `<img>` tag with `loading="eager"`, `decoding="async"`, and `fetchpriority="high"`, styled to fill the container with `object-cover` and preserved mirror flip (`-scale-x-100`).
  3. Update `index.html` with media-query-conditioned `<link rel="preload">` tags with `imagesrcset` so the browser downloads only the exact resolution matching the mobile device before parsing JavaScript.

---

## 2. User Experience & Visual Design

- **Visual Fidelity Preservation**: The visible appearance and composition of the hero section remain unchanged. The van and pest control technician photography retains crisp clarity on retina displays while cutting the byte size by over 98%.
- **Zero Layout Shift (CLS = 0)**: The `<picture>` element will be rendered with explicit aspect ratio and absolute positioning within the existing hero container, preventing layout reflow while the image decodes.
- **Instantaneous Above-the-Fold Paint**: By pairing local WebP files with high-priority preloading, the mobile browser receives the hero image in the initial HTTP payload bundle, dropping LCP from 21s down to sub-500ms.
- **Adaptive Network Mode**: Users browsing on slow connections or metered cellular networks (`Save-Data: on`) will seamlessly receive the ultra-compressed ~8 KB image without breaking layout or hanging the viewport.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Local Static WebP Files vs. Runtime Dynamic Image CDN**
  - *Chosen Approach*: Generate and commit local WebP files in `public/assets/hero/`.
  - *Why*: Hosting images locally on the same origin avoids external DNS resolution and TLS handshakes, guarantees 100% uptime, and functions identically in local development, staging, and production environments.
  - *Alternatives Considered*: Cloudflare Image Resizing or Imgix (requires external paid accounts and credentials).

- **Decision 2: Semantic `<picture>` Element vs. CSS Media Queries**
  - *Chosen Approach*: Semantic `<picture>` element with responsive `<source>` sets.
  - *Why*: The browser's preload scanner can discover and prioritize `<img>` elements inside `<picture>` before stylesheets are fully parsed, whereas CSS `background-image` is hidden from the preload scanner until CSSOM completion.
  - *Alternatives Considered*: CSS `@media` background-image swaps (slower discovery, no native `fetchpriority` attribute).

- **Decision 3: Slow Connection & Save-Data Handling**
  - *Chosen Approach*: Hybrid approach using standard responsive `srcset` as the baseline and dynamic Network Information API (`navigator.connection`) to select the ultra-compressed variant when bandwidth is constrained.
  - *Why*: Provides robust progressive enhancement: users on modern browsers on slow 3G get an 8 KB image, while browsers without the API fall back safely to the standard 18 KB mobile asset.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                          Mobile Browser Request                        │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│              HTML Parser & Preload Scanner (index.html)                │
│                                                                        │
│  <link rel="preload" as="image" type="image/webp"                      │
│        media="(max-width: 640px)" href="/assets/hero/hero-mobile.webp" │
│        fetchpriority="high" />                                         │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
               ┌────────────────────┴────────────────────┐
               ▼                                         ▼
   Standard Mobile (Fast/4G)                Slow Connection (2G/3G/Save-Data)
   Payload: ~18 KB WebP                     Payload: ~8 KB Ultra-Compressed WebP
               │                                         │
               └────────────────────┬────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                 React Hero Section (<HeroResponsiveImage />)           │
│                                                                        │
│  <picture className="absolute inset-0 w-full h-full">                  │
│    <source media="(max-width: 640px)" srcSet={mobileWebp} />          │
│    <source media="(max-width: 1024px)" srcSet={tabletWebp} />         │
│    <source media="(min-width: 1025px)" srcSet={desktopWebp} />        │
│    <img fetchPriority="high" loading="eager" decoding="async"          │
│         className="object-cover w-full h-full -scale-x-100" />         │
│  </picture>                                                            │
└────────────────────────────────────────────────────────────────────────┘
```

### Component & File Mapping

1. **Asset Generation (`public/assets/hero/`)**:
   - Create local WebP assets using ImageMagick/ffmpeg from the original master source at optimal resolutions and compression levels (`480w`, `960w`, `1600w`, plus `360w` ultra-compressed).
2. **Configuration (`src/config/siteConfig.ts`)**:
   - Update `siteConfig.hero` with structured responsive image paths (`mobile`, `tablet`, `desktop`, and `saveData`).
3. **Reusable Component (`src/components/HeroResponsiveImage.tsx`)**:
   - Encapsulate the `<picture>` tag, responsive sources, slow connection hook, and fallback container.
4. **Integration (`src/pages/HomePage.tsx` & `src/components/HeroSection.tsx`)**:
   - Replace the legacy CSS background-image `div` blocks with `<HeroResponsiveImage />`.
5. **Entry Point Preload (`index.html`)**:
   - Replace the single 10MB Pexels preload link with a responsive `<link rel="preload" as="image" type="image/webp">` that matches the mobile viewport.
