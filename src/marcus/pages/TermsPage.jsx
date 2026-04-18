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

  const homePath = currentLocale === 'en' ? '/' : `/${currentLocale}`;
  const philosophyPath = currentLocale === 'en' ? '/philosophy' : `/philosophy/${currentLocale}`;

  return (
    <div className="bg-[#080808] min-h-screen text-[#F5F5F5] font-['Barlow'] selection:bg-[#FFD700]/30 selection:text-[#FFD700]">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#080808]/80 backdrop-blur-md border-b border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <Link to={homePath} className="flex items-center gap-2 group">
            <span className="text-[#FFD700] group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-oswald uppercase tracking-[0.3em] text-[10px] text-[#A3A3A3] group-hover:text-white transition-colors">Back to Alpha</span>
          </Link>
          <div className="font-oswald uppercase tracking-[0.4em] text-xs text-white opacity-40 font-bold">{t.marcus.footer.terms}</div>
          <div className="w-20" />
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

      <footer className="py-20 border-t border-white/5 bg-[#050505] text-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-8 flex justify-center gap-12 text-[10px] font-oswald uppercase tracking-[0.2em] font-bold">
          <span>© 2024 THE ALPHA COLLECTIVE</span>
          <Link to={philosophyPath} className="hover:text-[#FFD700] transition-all">{t.marcus.footer.philosophy}</Link>
          <Link to={homePath} className="hover:text-[#FFD700] transition-all">RETURN HOME</Link>
        </div>
      </footer>
    </div>
  );
};

export default TermsPage;
