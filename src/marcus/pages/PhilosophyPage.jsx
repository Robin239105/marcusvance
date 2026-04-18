import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocale } from '../../shared/hooks/useLocale';
import LanguageSwitcher from '../../shared/components/LanguageSwitcher';

const PhilosophyPage = () => {
  const { t, currentLocale } = useLocale();
  const [activeChapter, setActiveChapter] = useState('chapter-1');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveChapter(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-10% 0px -40% 0px' }
    );

    const chapters = document.querySelectorAll('.philosophy-chapter');
    chapters.forEach((chapter) => observer.observe(chapter));

    return () => observer.disconnect();
  }, []);

  const homePath = currentLocale === 'en' ? '/' : `/${currentLocale}`;
  const termsPath = currentLocale === 'en' ? '/terms' : `/terms/${currentLocale}`;

  return (
    <div className="bg-[#080808] min-h-screen text-[#F5F5F5] font-['Barlow'] selection:bg-[#FFD700]/30 selection:text-[#FFD700]">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#080808]/80 backdrop-blur-md border-b border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <Link to={homePath} className="flex items-center gap-2 group">
            <span className="text-[#FFD700] group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-oswald uppercase tracking-[0.3em] text-[10px] text-[#A3A3A3] group-hover:text-white transition-colors">{t.marcus.philosophy.returnLink}</span>
          </Link>
          <img src="/marcus-logo.png" alt="Marcus Vance" className="h-12 w-auto object-contain opacity-50" />
          <div className="flex items-center gap-6">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-40 pb-32">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Sticky TOC */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-40 flex flex-col gap-8">
              <div className="w-12 h-1 bg-[#FFD700] mb-4" />
              <h2 className="font-oswald text-3xl text-white tracking-wider mb-8 uppercase font-bold">{t.marcus.philosophy.badge}</h2>
              <div className="flex flex-col gap-4">
                {t.marcus.philosophy.chapters.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className={`text-left font-oswald text-[11px] uppercase tracking-[0.3em] transition-all hover:text-[#FFD700] font-bold ${activeChapter === item.id ? 'text-[#FFD700] pl-4 border-l-2 border-[#FFD700]' : 'text-[#3A3A3A] hover:pl-2'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:w-3/4 max-w-2xl">
            {t.marcus.philosophy.chapters.map((chapter, i) => (
              <section key={chapter.id} id={chapter.id} className={`philosophy-chapter ${i === 6 ? 'mb-64' : 'mb-32'}`}>
                <span className="font-oswald text-[#FFD700] font-bold tracking-[0.5em] text-xs block mb-8 uppercase">{chapter.label}</span>
                <h1 className="font-oswald text-5xl md:text-7xl text-white mb-12 leading-[0.9] font-bold uppercase tracking-tight">{chapter.title}</h1>
                <div className="space-y-6 text-[#A3A3A3] text-lg leading-relaxed font-light">
                  {chapter.content.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>

                {i === 6 && (
                  <div className="mt-20 p-12 bg-[#141414] border border-[#FFD700]/20 text-center">
                    <h3 className="font-oswald text-3xl text-white mb-6 tracking-widest uppercase font-bold">{chapter.cta}</h3>
                    <Link 
                      to={homePath}
                      className="inline-block bg-[#FFD700] text-black px-12 py-5 font-oswald text-xl tracking-wider hover:bg-white transition-all uppercase font-bold"
                    >
                      {chapter.btn}
                    </Link>
                    <p className="mt-6 text-[10px] font-oswald uppercase tracking-[0.3em] text-[#3A3A3A] font-bold">{chapter.ctaDisclaimer}</p>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-20 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12 text-[#2A2A2A]">
          <div className="flex flex-col gap-4">
            <img src="/marcus-logo.png" alt="Marcus Vance" className="h-16 w-auto object-contain grayscale opacity-20" />
            <p className="font-oswald uppercase tracking-[0.5em] text-[10px] font-bold">ALL DISCLOSURES VERIFIED © 2024</p>
          </div>
          <div className="flex gap-12 text-[10px] font-oswald uppercase tracking-[0.2em] font-bold">
            <Link to={termsPath} className="hover:text-[#FFD700] transition-all">{t.marcus.footer.terms}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PhilosophyPage;
