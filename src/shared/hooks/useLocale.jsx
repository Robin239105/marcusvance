import { useEffect, useState, createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { localeRegistry } from '../config/locales';
import { baseEN } from '../config/locales/en.js'; // Synchronous core bundle

const LocaleContext = createContext();

// Global cache to prevent redundant imports across the session
let cachedTranslations = null;
let cachedLocaleKey = null;

export function LocaleProvider({ children }) {
  const { pathname } = useLocation();
  const [localeData, setLocaleData] = useState({
    loading: false, // 4G BREAKTHROUGH: Instant hydration without loader locks
    t: baseEN,      // Instantly inject English structure rather than crashing to null
    currentLocale: 'default',
    language: 'en',
    currency: '€'
  });

  useEffect(() => {
    // Detect locale from pathname
    const segments = pathname.split('/');
    const supportedLocales = Object.keys(localeRegistry).filter(k => k !== 'default');
    const detectedSegment = segments.find(s => supportedLocales.includes(s));
    const localeKey = detectedSegment || 'default';

    // Skip if already loaded this specific locale
    if (cachedLocaleKey === localeKey && cachedTranslations) {
      const registryData = localeRegistry[localeKey];
      setLocaleData({
        loading: false,
        t: cachedTranslations,
        currentLocale: localeKey,
        language: registryData.language,
        currency: registryData.currency,
        ...registryData
      });
      return;
    }

    // Load dynamic translation chunk
    const registryData = localeRegistry[localeKey];
    registryData.import().then((translations) => {
      cachedTranslations = translations;
      cachedLocaleKey = localeKey;
      setLocaleData({
        loading: false,
        t: translations,
        currentLocale: localeKey,
        language: registryData.language,
        currency: registryData.currency,
        ...registryData
      });
    });
  }, [pathname]);

  return (
    <LocaleContext.Provider value={localeData}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
