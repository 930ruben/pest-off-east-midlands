/**
 * Pest Off - Theme & Appearance Configuration
 * 
 * ALL visual appearances (colors, corner radiuses, button bevel physics, fonts)
 * are managed here as variables.
 * 
 * Changing any value in this file automatically applies across the entire website.
 */

export interface ThemeColors {
  // Brand Dark Green Theme
  primary: string;
  primaryHover: string;
  primaryDark: string;
  primaryLight: string;

  // Accent Lime Theme (Buttons & Badges)
  accent: string;
  accentHover: string;
  accentDark: string;      // Bevel under-shadow for resting state
  accentPressed: string;   // Sharp cartoon inner shadow when pressed

  // Canvas & Surfaces
  bg: string;              // Main page background
  surface: string;         // Card & Island white surfaces
  surfaceSubtle: string;   // Soft greenish-gray contrast island

  // Text Hierarchy
  textMain: string;
  textMuted: string;
}

export interface ThemeCorners {
  island: string;          // Major section island containers (e.g. 2rem / 32px)
  card: string;            // Secondary cards & widgets (e.g. 1.5rem / 24px)
  button: string;          // Squish buttons (e.g. 9999px for pill)
  badge: string;           // Small status badges (e.g. 9999px)
  input: string;           // Form inputs & selects (e.g. 0.75rem / 12px)
}

export interface ThemeButtonPhysics {
  // Cartoonish sharp lines (0px blur radius)
  restingShadowPrimary: string;
  hoverShadowPrimary: string;
  pressInnerShadowPrimary: string;

  restingShadowDark: string;
  hoverShadowDark: string;
  pressInnerShadowDark: string;

  restingShadowWhite: string;
  hoverShadowWhite: string;
  pressInnerShadowWhite: string;

  hoverTranslateY: string;
  pressTranslateY: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  corners: ThemeCorners;
  buttonPhysics: ThemeButtonPhysics;
  fonts: {
    body: string;
    heading: string;
  };
}

export const themeConfig: ThemeConfig = {
  colors: {
    primary: '#14351b',
    primaryHover: '#1c4725',
    primaryDark: '#0a1f10',
    primaryLight: '#f0f7f2',

    accent: '#84cc16',
    accentHover: '#8ee016',
    accentDark: '#8ee016',        // Sharp bottom bevel line before press
    accentPressed: '#8ee016',     // Sharp cartoon top bevel line on press

    bg: '#f7f9f7',
    surface: '#ffffff',
    surfaceSubtle: '#f0f4f1',

    textMain: '#141f17',
    textMuted: '#526056',
  },

  corners: {
    island: '2rem',       // 32px rounded corners on all section islands
    card: '1.5rem',       // 24px rounded corners on cards
    button: '9999px',     // Fully rounded pill buttons
    badge: '9999px',      // Pill badges
    input: '0.75rem',     // 12px rounded form inputs
  },

  buttonPhysics: {
    // 0px blur radius produces clean, cartoon-style sharp lines
    // Dynamically references var(--color-accent-dark) and var(--color-accent-pressed)
    restingShadowPrimary: '0 4px 0 var(--color-accent-dark)',
    hoverShadowPrimary: '0 1.5px 0 var(--color-accent-dark)',
    pressInnerShadowPrimary: 'inset 0 4px 0 var(--color-accent-pressed)',

    restingShadowDark: '0 4px 0 var(--color-primary-dark)',
    hoverShadowDark: '0 1.5px 0 var(--color-primary-dark)',
    pressInnerShadowDark: 'inset 0 4px 0 #000000',

    restingShadowWhite: '0 4px 0 #cbd5e1',
    hoverShadowWhite: '0 1.5px 0 #cbd5e1',
    pressInnerShadowWhite: 'inset 0 4px 0 #94a3b8',

    hoverTranslateY: '2px',
    pressTranslateY: '3.5px',
  },

  fonts: {
    body: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    heading: "'Outfit', 'Plus Jakarta Sans', sans-serif",
  },
};

/**
 * Automatically injects themeConfig values into CSS Custom Properties on :root
 * This ensures any change in themeConfig.ts immediately cascades to all CSS and components.
 */
export function applyThemeVariables(theme: ThemeConfig = themeConfig) {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;

  // Colors
  root.style.setProperty('--color-primary', theme.colors.primary);
  root.style.setProperty('--color-primary-hover', theme.colors.primaryHover);
  root.style.setProperty('--color-primary-dark', theme.colors.primaryDark);
  root.style.setProperty('--color-primary-light', theme.colors.primaryLight);

  root.style.setProperty('--color-accent', theme.colors.accent);
  root.style.setProperty('--color-accent-hover', theme.colors.accentHover);
  root.style.setProperty('--color-accent-dark', theme.colors.accentDark);
  root.style.setProperty('--color-accent-pressed', theme.colors.accentPressed);

  root.style.setProperty('--color-bg', theme.colors.bg);
  root.style.setProperty('--color-surface', theme.colors.surface);
  root.style.setProperty('--color-surface-subtle', theme.colors.surfaceSubtle);

  root.style.setProperty('--color-text-main', theme.colors.textMain);
  root.style.setProperty('--color-text-muted', theme.colors.textMuted);

  // Corners
  root.style.setProperty('--radius-island', theme.corners.island);
  root.style.setProperty('--radius-card', theme.corners.card);
  root.style.setProperty('--radius-button', theme.corners.button);
  root.style.setProperty('--radius-badge', theme.corners.badge);
  root.style.setProperty('--radius-input', theme.corners.input);

  // Button Physics (sharp cartoon lines - dynamic resolution)
  // Ensures any changes to theme.colors.accentDark and theme.colors.accentPressed immediately apply
  const restingPrimary = theme.buttonPhysics.restingShadowPrimary.includes('#4d7c0f')
    ? `0 4px 0 ${theme.colors.accentDark}`
    : theme.buttonPhysics.restingShadowPrimary;

  const hoverPrimary = theme.buttonPhysics.hoverShadowPrimary.includes('#4d7c0f')
    ? `0 1.5px 0 ${theme.colors.accentDark}`
    : theme.buttonPhysics.hoverShadowPrimary;

  const pressPrimary = theme.buttonPhysics.pressInnerShadowPrimary.includes('#365314')
    ? `inset 0 4px 0 ${theme.colors.accentPressed}`
    : theme.buttonPhysics.pressInnerShadowPrimary;

  root.style.setProperty('--btn-shadow-resting-primary', restingPrimary);
  root.style.setProperty('--btn-shadow-hover-primary', hoverPrimary);
  root.style.setProperty('--btn-shadow-press-primary', pressPrimary);

  root.style.setProperty('--btn-shadow-resting-dark', theme.buttonPhysics.restingShadowDark);
  root.style.setProperty('--btn-shadow-hover-dark', theme.buttonPhysics.hoverShadowDark);
  root.style.setProperty('--btn-shadow-press-dark', theme.buttonPhysics.pressInnerShadowDark);

  root.style.setProperty('--btn-shadow-resting-white', theme.buttonPhysics.restingShadowWhite);
  root.style.setProperty('--btn-shadow-hover-white', theme.buttonPhysics.hoverShadowWhite);
  root.style.setProperty('--btn-shadow-press-white', theme.buttonPhysics.pressInnerShadowWhite);

  root.style.setProperty('--btn-translate-hover', theme.buttonPhysics.hoverTranslateY);
  root.style.setProperty('--btn-translate-press', theme.buttonPhysics.pressTranslateY);

  // Fonts
  root.style.setProperty('--font-body', theme.fonts.body);
  root.style.setProperty('--font-heading', theme.fonts.heading);
}

// Auto-run whenever this module loads or reloads
if (typeof document !== 'undefined') {
  applyThemeVariables(themeConfig);
}
