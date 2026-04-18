import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLocale } from '../../shared/hooks/useLocale';
import LanguageSwitcher from '../../shared/components/LanguageSwitcher';

const TermsPage = () => {
  const { t, currentLocale } = useLocale();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('section-1');

  useEffect(() => {
    // Handle section-specific landing from fallbacks (/privacy, /guarantee)
    const handleInitialScroll = () => {
      const path = location.pathname.split('/').filter(Boolean)[0]; // get 'privacy' or 'guarantee'
      if (path === 'privacy') {
        const el = document.getElementById('section-8');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (path === 'guarantee') {
        const el = document.getElementById('section-7');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Wait for content render to ensure elements exist
    setTimeout(handleInitialScroll, 100);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-10% 0px -60% 0px' }
    );

    const sections = document.querySelectorAll('.legal-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  const homePath = currentLocale === 'default' ? '/' : `/${currentLocale}`;
  const getLocalizedPath = (path) => currentLocale === 'default' ? path : `${path}/${currentLocale}`;
  const philosophyPath = getLocalizedPath('/philosophy');

  const handleNav = (e, target) => {
    e.preventDefault();
    if (location.pathname === homePath || location.pathname === '/') {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`${homePath}#${target}`);
    }
  };

  return (
    <div className="bg-[#000000] min-h-screen text-[#F5F5F5] font-['Barlow'] selection:bg-[#C9A84C]/30 selection:text-[#C9A84C]">
      {/* Navigation Header */}
      <nav className="fixed top-[32px] left-0 right-0 z-[100] bg-black/95 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link to={homePath} className="flex items-center gap-4 group">
            <img src="/marcus-logo.png" alt="Marcus Vance Logo" className="h-20 md:h-24 w-auto object-contain transition-all" />
          </Link>
          
          <div className="hidden lg:flex items-center gap-10 font-oswald text-[11px] tracking-[0.25em] font-bold uppercase text-[#A3A3A3]">
            <a href="#method" onClick={(e) => handleNav(e, 'method')} className="hover:text-white transition-colors">{t.marcus.nav.method}</a>
            <Link to={getLocalizedPath('/philosophy')} className="hover:text-white transition-colors">{t.marcus.nav.philosophy}</Link>
            <a href="#roadmap" onClick={(e) => handleNav(e, 'roadmap')} className="hover:text-white transition-colors">{t.marcus.nav.challenge}</a>
            <a href="#faq" onClick={(e) => handleNav(e, 'faq')} className="hover:text-white transition-colors">{t.marcus.nav.faq}</a>
            <LanguageSwitcher variant="marcus" />
            <Link to={homePath} className="bg-[#C9A84C] text-black px-6 py-2.5 hover:bg-white transition-all shadow-lg font-bold whitespace-nowrap ml-4">{t.marcus.navStartBtn}</Link>
          </div>

          <div className="lg:hidden text-right flex items-center gap-4">
             <Link to={homePath} className="bg-[#C9A84C] text-black px-4 py-2 text-[10px] font-bold tracking-widest uppercase whitespace-nowrap">START</Link>
             <LanguageSwitcher variant="marcus" />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-40 pb-32">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Sticky Legal Nav */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-40 flex flex-col gap-6">
              <h2 className="font-oswald text-xs text-[#C9A84C] font-bold tracking-[0.4em] mb-4 uppercase">{t.marcus.legal.badge}</h2>
              <div className="flex flex-col gap-3">
                {t.marcus.legal.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className={`text-left font-oswald text-[10px] uppercase tracking-[0.2em] transition-all font-bold ${activeSection === section.id ? 'text-[#C9A84C]' : 'text-[#3A3A3A] hover:text-[#A3A3A3]'}`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:w-3/4 max-w-3xl">
            <header className="mb-24 text-left">
              <h1 className="font-oswald text-5xl md:text-7xl text-white mb-8 tracking-wider font-bold uppercase">{t.marcus.legal.title}</h1>
              <p className="font-oswald text-[#A3A3A3] text-xs tracking-[0.3em] uppercase opacity-50 font-bold">{t.marcus.legal.updated}</p>
            </header>

            {t.marcus.legal.sections.map((section) => (
              <section key={section.id} id={section.id} className="legal-section mb-20">
                <h2 className="font-oswald text-lg text-white uppercase tracking-widest mb-8 border-b border-white/5 pb-4 font-bold">{section.label}</h2>
                <div className="space-y-4 text-[#A3A3A3] text-sm leading-relaxed font-light">
                  {section.content.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer bg-[#050505] border-t border-white/5 pt-24 pb-12 relative z-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-bottom border-white/5">
            {/* Brand Column */}
            <div className="space-y-6">
              <Link to={homePath} className="inline-block">
                <img src="/marcus-logo.png" alt="Marcus Vance Logo" className="h-24 min-[400px]:h-28 w-auto object-contain brightness-110" />
              </Link>
              <p className="text-[#6A6A6A] font-oswald text-[10px] tracking-[0.3em] uppercase leading-relaxed">
                THE METHOD · THE VOICE · THE PHILOSOPHY
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded font-oswald text-[9px] text-[#A3A3A3] tracking-widest uppercase">VISA</div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded font-oswald text-[9px] text-[#A3A3A3] tracking-widest uppercase">MASTERCARD</div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded font-oswald text-[9px] text-[#A3A3A3] tracking-widest uppercase">AMEX</div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded font-oswald text-[9px] text-[#A3A3A3] tracking-widest uppercase">APPLE PAY</div>
                <div className="px-3 py-1 bg-white/5 border border-white/20 rounded font-oswald text-[9px] text-[#C9A84C] tracking-widest uppercase">₿ BTC</div>
                <div className="px-3 py-1 bg-white/5 border border-white/20 rounded font-oswald text-[9px] text-[#C9A84C] tracking-widest uppercase">Ξ ETH</div>
              </div>
            </div>

            {/* Links Column 1 */}
            <div className="space-y-4">
              <h4 className="font-oswald text-white text-[10px] tracking-[0.4em] uppercase font-bold mb-6">RESOURCES</h4>
              <ul className="space-y-3">
                <li><Link to={getLocalizedPath('/marcus/giveaway')} className="text-[#6A6A6A] hover:text-[#C9A84C] font-oswald text-[10px] tracking-widest transition-all uppercase">{t.marcus.footer.giveaway}</Link></li>
                <li><Link to={getLocalizedPath('/marcus/feedback')} className="text-[#6A6A6A] hover:text-[#C9A84C] font-oswald text-[10px] tracking-widest transition-all uppercase">{t.marcus.footer.feedback}</Link></li>
                <li><Link to={getLocalizedPath('/philosophy')} className="text-[#6A6A6A] hover:text-[#C9A84C] font-oswald text-[10px] tracking-widest transition-all uppercase">{t.marcus.footer.philosophy}</Link></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div className="space-y-4">
              <h4 className="font-oswald text-white text-[10px] tracking-[0.4em] uppercase font-bold mb-6">COMPLIANCE</h4>
              <ul className="space-y-3">
                <li><Link to={getLocalizedPath('/terms')} className="text-[#6A6A6A] hover:text-[#C9A84C] font-oswald text-[10px] tracking-widest transition-all uppercase">{t.marcus.footer.terms}</Link></li>
                <li><Link to={getLocalizedPath('/privacy')} className="text-[#6A6A6A] hover:text-[#C9A84C] font-oswald text-[10px] tracking-widest transition-all uppercase">{t.marcus.footer.privacy}</Link></li>
                <li><Link to={getLocalizedPath('/guarantee')} className="text-[#6A6A6A] hover:text-[#C9A84C] font-oswald text-[10px] tracking-widest transition-all uppercase">{t.marcus.footer.guarantee}</Link></li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="space-y-4 text-left">
              <h4 className="font-oswald text-white text-[10px] tracking-[0.4em] uppercase font-bold mb-6">HEADQUARTERS</h4>
              <p className="text-[#6A6A6A] font-oswald text-[10px] tracking-widest uppercase leading-loose whitespace-pre-line">
                {t.marcus.footer.address}
              </p>
              <div className="pt-4">
                <Link to={getLocalizedPath('/contact')} className="text-[#C9A84C] hover:text-white font-oswald text-[10px] tracking-widest transition-all uppercase font-bold">{t.marcus.footer.contact}</Link>
              </div>
            </div>
          </div>

          <div className="space-y-8 pt-12 border-t border-white/5">
            <p className="text-[#2A2A2A] font-barlow text-[9px] md:text-[10px] tracking-wider uppercase leading-relaxed max-w-6xl">
              {t.marcus.footer.platformDisclaimer}
            </p>
            <p className="text-[#3A3A3A] font-barlow text-[9px] md:text-[10px] tracking-wider uppercase leading-relaxed max-w-6xl">
              {t.marcus.footer.personaDisclosure}
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12">
               <span className="text-[#2A2A2A] font-oswald text-[9px] tracking-[0.2em] uppercase font-bold">
                 {t.marcus.footer.rights}
               </span>
               <div className="flex gap-8">
                 <a href="#" className="text-[#2A2A2A] hover:text-[#C9A84C] font-oswald text-[9px] tracking-widest uppercase transition-all">INSTAGRAM</a>
                 <a href="#" className="text-[#2A2A2A] hover:text-[#C9A84C] font-oswald text-[9px] tracking-widest uppercase transition-all">X (TWITTER)</a>
                 <a href="#" className="text-[#2A2A2A] hover:text-[#C9A84C] font-oswald text-[9px] tracking-widest uppercase transition-all">YOUTUBE</a>
               </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsPage;
