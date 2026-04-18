// --- REGION METADATA ONLY ---
// Translations are lazy-loaded via useLocale hook to minimize initial bundle size

export const localeRegistry = {
  us: {
    language: 'en',
    currency: '$',
    currencyCode: 'USD',
    flag: '🇺🇸',
    label: 'United States',
    import: () => import('./locales/en.js').then(m => m.default || m.baseEN || m)
  },
  uk: {
    language: 'en',
    currency: '£',
    currencyCode: 'GBP',
    flag: '🇬🇧',
    label: 'United Kingdom',
    import: () => import('./locales/en.js').then(m => m.default || m.baseEN || m)
  },
  au: {
    language: 'en',
    currency: '$',
    currencyCode: 'AUD',
    flag: '🇦🇺',
    label: 'Australia',
    import: () => import('./locales/en.js').then(m => m.default || m.baseEN || m)
  },
  ca: {
    language: 'en',
    currency: '$',
    currencyCode: 'CAD',
    flag: '🇨🇦',
    label: 'Canada',
    import: () => import('./locales/en.js').then(m => m.default || m.baseEN || m)
  },
  fr: {
    language: 'fr',
    currency: '€',
    currencyCode: 'EUR',
    flag: '🇫🇷',
    label: 'France',
    import: () => import('./locales/fr.js').then(m => m.default || m.baseFR || m)
  },
  de: {
    language: 'de',
    currency: '€',
    currencyCode: 'EUR',
    flag: '🇩🇪',
    label: 'Germany',
    import: () => import('./locales/de.js').then(m => m.default || m.baseDE || m)
  },
  default: {
    language: 'en',
    currency: '€',
    currencyCode: 'EUR',
    flag: '🌍',
    label: 'Global',
    import: () => import('./locales/en.js').then(m => m.default || m.baseEN || m)
  }
};
