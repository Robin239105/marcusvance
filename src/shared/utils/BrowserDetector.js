/**
 * BrowserDetector.js
 * Lightweight utility to guess the user's region based on browser settings.
 */

export const detectRegion = () => {
  try {
    // 1. Check navigator.language (e.g., 'en-US', 'fr-FR')
    const browserLang = navigator.language || (navigator.languages && navigator.languages[0]) || '';
    const langParts = browserLang.toLowerCase().split('-');
    const countryCandidate = langParts[1];

    // mapping of browser country codes to our supported locales
    const countryMap = {
      'us': 'us',
      'gb': 'uk',
      'uk': 'uk',
      'au': 'au',
      'ca': 'ca',
      'fr': 'fr',
      'de': 'de'
    };

    if (countryCandidate && countryMap[countryCandidate]) {
      return countryMap[countryCandidate];
    }

    // 2. Fallback: Intl TimeZone check
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    if (timeZone.includes('London')) return 'uk';
    if (timeZone.includes('Paris')) return 'fr';
    if (timeZone.includes('Berlin')) return 'de';
    if (timeZone.includes('Sydney') || timeZone.includes('Melbourne') || timeZone.includes('Perth')) return 'au';
    if (timeZone.includes('Toronto') || timeZone.includes('Vancouver') || timeZone.includes('Montreal')) return 'ca';
    if (timeZone.includes('America')) {
      // High probability of US if America timezone and not CA
      return 'us';
    }

    // 3. Final Fallback: Default to Global (default)
    return 'default';
  } catch (e) {
    return 'default';
  }
};
