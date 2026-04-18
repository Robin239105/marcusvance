import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLocale } from '../hooks/useLocale';
import { motion, AnimatePresence } from 'framer-motion';

const regions = ['us', 'uk', 'au', 'ca', 'fr', 'de'];

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { label: 'United States', code: 'us', flag: '🇺🇸', currency: '$' },
    { label: 'United Kingdom', code: 'uk', flag: '🇬🇧', currency: '£' },
    { label: 'Australia', code: 'au', flag: '🇦🇺', currency: '$' },
    { label: 'Canada', code: 'ca', flag: '🇨🇦', currency: '$' },
    { label: 'France', code: 'fr', flag: '🇫🇷', currency: '€' },
    { label: 'Germany', code: 'de', flag: '🇩🇪', currency: '€' },
    { label: 'Global', code: 'default', flag: '🌍', currency: '€' },
  ];

  // Click outside logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSwitch = (code) => {
    // Determine the base path and current subpage
    let basePath = '';
    
    if (pathname.includes('/giveaway')) basePath = '/marcus/giveaway';
    else if (pathname.includes('/feedback')) basePath = '/marcus/feedback';
    else if (pathname.includes('/philosophy')) basePath = '/philosophy';
    else if (pathname.includes('/terms')) basePath = '/terms';
    else basePath = ''; // Marcus root

    // Construct the new path
    let newPath = basePath;
    if (code !== 'default') {
      newPath = `${basePath}/${code}`.replace(/\/\//g, '/');
    } else if (basePath === '') {
      newPath = '/';
    }

    navigate(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative z-[100]" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition-all group"
      >
        <span className="text-sm">{options.find(o => o.code === (currentLocale.currentLocale || 'default'))?.flag || '🌍'}</span>
        <span className="text-[10px] font-oswald uppercase tracking-widest text-stone-400 group-hover:text-[#FFD700] transition-colors font-bold">
          {currentLocale.currentLocale === 'default' ? 'Global' : options.find(o => o.code === currentLocale.currentLocale)?.code}
        </span>
        <div className={`w-1.5 h-1.5 rounded-full bg-[#FFD700] transition-transform duration-300 ${isOpen ? 'scale-125' : 'scale-75 opacity-50'}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full mt-3 right-0 w-56 bg-[#0E0E0E] border border-white/10 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          >
            <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />
            <div className="p-1 px-1 grid grid-cols-1 divide-y divide-white/10">
              {options.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => handleSwitch(opt.code)}
                  className={`w-full flex items-center justify-between gap-3 px-4 py-3.5 text-[10px] font-oswald tracking-widest uppercase transition-all text-left font-bold group text-stone-400 hover:text-[#FFD700] hover:bg-white/[0.03] ${
                    (opt.code === 'default' && currentLocale.currentLocale === 'default') || 
                    (currentLocale.currentLocale === opt.code) 
                      ? 'text-[#FFD700] bg-white/[0.02]' 
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg transition-transform group-hover:scale-110 duration-300">{opt.flag}</span>
                    <div className="flex flex-col">
                        <span className="leading-none mb-0.5">{opt.label}</span>
                        <span className="text-[8px] opacity-40 font-normal tracking-normal lowercase">{opt.code === 'default' ? 'Global Access' : `Localized region`}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-normal px-2 py-0.5 rounded border border-current opacity-30 group-hover:opacity-100 transition-opacity">
                    {opt.currency}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
