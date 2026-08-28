/**
 * KBridge Brand Assets & Platform Creative Logos
 */

// 1. THEORIQ — Capital Partner Logo
const THEORIQ_LOGO = "https://cdn.prod.website-files.com/66e9164649f92a8503081c8b/66e9164649f92a8503081d81_br-l-1.svg";

// 2. PURSUIT — Receivables Partner Logo (Origami bird emblem & wordmark)
const PURSUIT_LOGO = "https://nyba.com/images/pursuit-logo-full-color-rgb.png?version=96C49533";
const PURSUIT_ICON = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <linearGradient id="pursuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%23E11D48"/>
      <stop offset="50%" stop-color="%23BE123C"/>
      <stop offset="100%" stop-color="%23881337"/>
    </linearGradient>
    <linearGradient id="pursuitWing" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="%23F43F5E"/>
      <stop offset="100%" stop-color="%23FB7185"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="%231E1E1E"/>
  <g transform="translate(10, 10)">
    <!-- Origami Wing 1 -->
    <polygon points="22,4 42,16 26,24" fill="url(%23pursuitWing)"/>
    <!-- Origami Body -->
    <polygon points="26,24 42,16 20,40 14,28" fill="url(%23pursuitGrad)"/>
    <!-- Origami Tail -->
    <polygon points="14,28 6,36 10,22" fill="%23FDA4AF"/>
    <!-- Origami Forward Beak -->
    <polygon points="26,24 36,32 20,40" fill="%239F1239"/>
  </g>
</svg>`;

// 3. MERIDIAN TRADE FINANCE — Creative Maritime & Global Logistics Compass/Meridian Arc Logo
const MERIDIAN_ICON = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <linearGradient id="meridianBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%230F172A"/>
      <stop offset="100%" stop-color="%23022C44"/>
    </linearGradient>
    <linearGradient id="meridianCyan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%2338BDF8"/>
      <stop offset="60%" stop-color="%230EA5E9"/>
      <stop offset="100%" stop-color="%230284C7"/>
    </linearGradient>
    <linearGradient id="meridianTeal" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%232DD4BF"/>
      <stop offset="100%" stop-color="%230D9488"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(%23meridianBg)"/>
  <g transform="translate(32,32)">
    <!-- Outer Meridian Orbital Rings -->
    <ellipse cx="0" cy="0" rx="20" ry="8" fill="none" stroke="url(%23meridianCyan)" stroke-width="2.5" transform="rotate(-30)" stroke-dasharray="32 4"/>
    <ellipse cx="0" cy="0" rx="20" ry="8" fill="none" stroke="url(%23meridianTeal)" stroke-width="2.5" transform="rotate(45)" opacity="0.85"/>
    
    <!-- Central Modern Trade Compass Diamond / Hexagon -->
    <polygon points="0,-14 11,-4 7,12 0,6 -7,12 -11,-4" fill="url(%23meridianCyan)" opacity="0.95"/>
    <!-- Overlapping Forward Transit Sail -->
    <polygon points="0,-14 9,8 0,4 -9,8" fill="url(%23meridianTeal)"/>
    <!-- Core Focal Nexus -->
    <circle cx="0" cy="-2" r="3.2" fill="%23FFFFFF"/>
  </g>
</svg>`;

// 4. ASTER WORKING CAPITAL — Creative Crystalline Starburst / Liquidity Asterisk Blossom Logo
const ASTER_ICON = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <linearGradient id="asterBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%231E1B4B"/>
      <stop offset="100%" stop-color="%2318181B"/>
    </linearGradient>
    <linearGradient id="asterGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%23FBBF24"/>
      <stop offset="50%" stop-color="%23F59E0B"/>
      <stop offset="100%" stop-color="%23D97706"/>
    </linearGradient>
    <linearGradient id="asterIndigo" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%23A855F7"/>
      <stop offset="100%" stop-color="%236366F1"/>
    </linearGradient>
    <linearGradient id="asterRose" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%23FB7185"/>
      <stop offset="100%" stop-color="%23E11D48"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(%23asterBg)"/>
  <g transform="translate(32,32)">
    <!-- Faceted 8-leaf Starburst (Geometric Asterisk Blossom) -->
    <!-- Primary Cardinal Petals -->
    <polygon points="0,-21 4,-6 0,-2 -4,-6" fill="url(%23asterGold)"/>
    <polygon points="21,0 6,4 2,0 6,-4" fill="url(%23asterGold)"/>
    <polygon points="0,21 4,6 0,2 -4,6" fill="url(%23asterGold)"/>
    <polygon points="-21,0 -6,4 -2,0 -6,-4" fill="url(%23asterGold)"/>
    
    <!-- Diagonal Dynamic Facets -->
    <polygon points="14,-14 6,-1 1,-5 4,-9" fill="url(%23asterRose)" opacity="0.9"/>
    <polygon points="14,14 1,6 5,1 9,4" fill="url(%23asterIndigo)" opacity="0.9"/>
    <polygon points="-14,14 -6,1 -1,5 -4,9" fill="url(%23asterRose)" opacity="0.9"/>
    <polygon points="-14,-14 -1,-6 -5,-1 -9,-4" fill="url(%23asterIndigo)" opacity="0.9"/>
    
    <!-- Central Radiant Core -->
    <circle cx="0" cy="0" r="4.5" fill="%23FFFFFF"/>
    <circle cx="0" cy="0" r="2.2" fill="%23F59E0B"/>
  </g>
</svg>`;

export const LOGO = {
  "theoriq": {
    "word": THEORIQ_LOGO,
    "icon": THEORIQ_LOGO
  },
  "pursuit": {
    "word": PURSUIT_LOGO,
    "icon": PURSUIT_ICON
  },
  "meridian": {
    "icon": MERIDIAN_ICON
  },
  "aster": {
    "icon": ASTER_ICON
  }
};
