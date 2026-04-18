import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocale } from '../../shared/hooks/useLocale';

const TermsPage = () => {
  const { t, currentLocale } = useLocale();
  const [activeSection, setActiveSection] = useState('section-1');

  useEffect(() => {
    window.scrollTo(0, 0);
    
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
  }, []);

  const homePath = (currentLocale === 'en' || currentLocale === 'default') ? '/' : `/${currentLocale}`;
  const philosophyPath = currentLocale === 'en' ? '/philosophy' : `/philosophy/${currentLocale}`;

  return (
    <div className="bg-[#080808] min-h-screen text-[#F5F5F5] font-['Barlow'] selection:bg-[#FFD700]/30 selection:text-[#FFD700]">
      {/* Navigation Header */}
      <nav className="fixed top-[32px] left-0 right-0 z-[100] bg-black/95 backdrop-blur-md border-b border-white/10 py-3">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link to={homePath} className="flex items-center gap-4 group">
            <img src="/marcus-logo.png" alt="Marcus Vance Logo" className="h-12 md:h-14 w-auto object-contain transition-all" />
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 font-oswald text-[11px] tracking-[0.25em] font-bold uppercase text-[#A3A3A3]">
            <a href={`${homePath}#method`} className="hover:text-white transition-colors">{t.marcus.nav.method}</a>
            <Link to={currentLocale === 'en' || currentLocale === 'default' ? '/philosophy' : `/philosophy/${currentLocale}`} className="hover:text-white transition-colors">{t.marcus.nav.philosophy}</Link>
            <a href={`${homePath}#roadmap`} className="hover:text-white transition-colors">{t.marcus.nav.challenge}</a>
            <a href={`${homePath}#faq`} className="hover:text-white transition-colors">{t.marcus.nav.faq}</a>
            <LanguageSwitcher variant="marcus" />
            <Link to={homePath} className="bg-[#FFD700] text-black px-6 py-2.5 hover:bg-white transition-all shadow-lg font-bold whitespace-nowrap ml-4">{t.marcus.navStartBtn}</Link>
          </div>

          <div className="lg:hidden text-right flex items-center gap-4">
             <Link to={homePath} className="bg-[#FFD700] text-black px-4 py-2 text-[10px] font-bold tracking-widest uppercase whitespace-nowrap">START</Link>
             <LanguageSwitcher variant="marcus" />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-40 pb-32">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Sticky Legal Nav */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-40 flex flex-col gap-6">
              <h2 className="font-oswald text-xs text-[#FFD700] font-bold tracking-[0.4em] mb-4 uppercase">{t.marcus.legal.badge}</h2>
              <div className="flex flex-col gap-3">
                {t.marcus.legal.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className={`text-left font-oswald text-[10px] uppercase tracking-[0.2em] transition-all font-bold ${activeSection === section.id ? 'text-[#FFD700]' : 'text-[#3A3A3A] hover:text-[#A3A3A3]'}`}
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
                <img src="/marcus-logo.png" alt="Marcus Vance Logo" className="h-20 min-[400px]:h-24 w-auto object-contain brightness-110" />
              </Link>
              <p className="text-[#6A6A6A] font-oswald text-[10px] tracking-[0.3em] uppercase leading-relaxed">
                THE METHOD · THE VOICE · THE PHILOSOPHY
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded font-oswald text-[9px] text-[#A3A3A3] tracking-widest uppercase">VISA</div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded font-oswald text-[9px] text-[#A3A3A3] tracking-widest uppercase">MASTERCARD</div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded font-oswald text-[9px] text-[#A3A3A3] tracking-widest uppercase">AMEX</div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded font-oswald text-[9px] text-[#A3A3A3] tracking-widest uppercase">APPLE PAY</div>
                <div className="px-3 py-1 bg-white/5 border border-white/20 rounded font-oswald text-[9px] text-[#FFD700] tracking-widest uppercase">₿ BTC</div>
                <div className="px-3 py-1 bg-white/5 border border-white/20 rounded font-oswald text-[9px] text-[#FFD700] tracking-widest uppercase">Ξ ETH</div>
              </div>
            </div>

            {/* Links Column 1 */}
            <div className="space-y-4">
              <h4 className="font-oswald text-white text-[10px] tracking-[0.4em] uppercase font-bold mb-6">RESOURCES</h4>
              <ul className="space-y-3">
                <li><Link to={currentLocale === 'en' ? '/marcus/giveaway' : `/marcus/giveaway/${currentLocale}`} className="text-[#6A6A6A] hover:text-[#FFD700] font-oswald text-[10px] tracking-widest transition-all uppercase">{t.marcus.footer.giveaway}</Link></li>
                <li><Link to={currentLocale === 'en' ? '/marcus/feedback' : `/marcus/feedback/${currentLocale}`} className="text-[#6A6A6A] hover:text-[#FFD700] font-oswald text-[10px] tracking-widest transition-all uppercase">{t.marcus.footer.feedback}</Link></li>
                <li><Link to={currentLocale === 'en' ? '/philosophy' : `/philosophy/${currentLocale}`} className="text-[#6A6A6A] hover:text-[#FFD700] font-oswald text-[10px] tracking-widest transition-all uppercase">{t.marcus.footer.philosophy}</Link></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div className="space-y-4">
              <h4 className="font-oswald text-white text-[10px] tracking-[0.4em] uppercase font-bold mb-6">COMPLIANCE</h4>
              <ul className="space-y-3">
                <li><Link to={currentLocale === 'en' ? '/terms' : `/terms/${currentLocale}`} className="text-[#6A6A6A] hover:text-[#FFD700] font-oswald text-[10px] tracking-widest transition-all uppercase">{t.marcus.footer.terms}</Link></li>
                <li><Link to={currentLocale === 'en' ? '/privacy' : `/privacy/${currentLocale}`} className="text-[#6A6A6A] hover:text-[#FFD700] font-oswald text-[10px] tracking-widest transition-all uppercase">{t.marcus.footer.privacy}</Link></li>
                <li><Link to={currentLocale === 'en' ? '/guarantee' : `/guarantee/${currentLocale}`} className="text-[#6A6A6A] hover:text-[#FFD700] font-oswald text-[10px] tracking-widest transition-all uppercase">{t.marcus.footer.guarantee}</Link></li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="space-y-4 text-left">
              <h4 className="font-oswald text-white text-[10px] tracking-[0.4em] uppercase font-bold mb-6">HEADQUARTERS</h4>
              <p className="text-[#6A6A6A] font-oswald text-[10px] tracking-widest uppercase leading-loose whitespace-pre-line">
                {t.marcus.footer.address}
              </p>
              <div className="pt-4">
                <Link to="/contact" className="text-[#FFD700] hover:text-white font-oswald text-[10px] tracking-widest transition-all uppercase font-bold">{t.marcus.footer.contact}</Link>
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
                 <a href="#" className="text-[#2A2A2A] hover:text-[#FFD700] font-oswald text-[9px] tracking-widest uppercase transition-all">INSTAGRAM</a>
                 <a href="#" className="text-[#2A2A2A] hover:text-[#FFD700] font-oswald text-[9px] tracking-widest uppercase transition-all">X (TWITTER)</a>
                 <a href="#" className="text-[#2A2A2A] hover:text-[#FFD700] font-oswald text-[9px] tracking-widest uppercase transition-all">YOUTUBE</a>
               </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsPage;
