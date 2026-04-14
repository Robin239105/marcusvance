import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Reveal } from '../../shared/components/Reveal';
import dynamicStats from '../../shared/utils/dynamicStats';
import { useLocale } from '../../shared/hooks/useLocale';
import LanguageSwitcher from '../../shared/components/LanguageSwitcher';
import { Disclaimer } from '../../shared/components/Disclaimer';

const PageLoader = () => (
  <div className="fixed inset-0 bg-[#080808] flex flex-col items-center pt-[180px] z-[500]">
    <div className="w-full h-[36px] bg-[#C9A84C]/10 fixed top-0" />
    <div className="w-4/5 max-w-[600px] h-16 bg-white/5 rounded-lg mb-6 animate-pulse" />
    <div className="w-3/5 max-w-[400px] h-6 bg-white/5 rounded-lg mb-12 animate-pulse" />
    <div className="w-8 h-8 border-2 border-white/20 border-t-[#C9A84C] rounded-full animate-spin" />
  </div>
);

// Icons
const MenuIcon = () => <span style={{fontSize:'28px'}}>☰</span>;
const XIcon = () => <span style={{fontSize:'28px'}}>✕</span>;
const CheckIcon = ({ className }) => <span className={className} style={{fontSize:'32px'}}>✓</span>;
const ShieldIcon = ({ className }) => (
  <svg className={className} width="80" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const InstagramIcon = () => <span style={{fontSize:'18px'}}>📸</span>;
const YoutubeIcon = () => <span style={{fontSize:'18px'}}>📺</span>;
const TwitterIcon = () => <span style={{fontSize:'18px'}}>𝕏</span>;
const ChevronDownIcon = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

// High Authority Components
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#C9A84C] z-[100] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

const GiveawayFloatingBadge = () => {
  const { t } = useLocale();
  return (
    <Link to="/giveaway" aria-label="Enter the Marcus Vance Giveaway">
      <motion.div 
        initial={{ x: 100 }} animate={{ x: 0 }}
        className="fixed top-1/2 -translate-y-1/2 right-0 z-[101] bg-[#141414] border-y border-l border-[#C9A84C]/30 p-4 pr-5 flex items-center gap-4 cursor-pointer hover:bg-[#1A1A1A] transition-all group shadow-2xl hidden md:flex"
      >
        <div className="absolute top-0 right-0 bottom-0 w-1 bg-[#C9A84C] opacity-30 group-hover:opacity-100 transition-opacity" />
        <span className="text-2xl">🎁</span>
        <div className="font-['Oswald'] text-[11px] uppercase tracking-[0.2em] text-[#F5F5F5] leading-tight">
          {t.marcus.giveaway.badge} <br/>
          <span className="text-[#C9A84C] font-bold">{t.marcus.giveaway.title}</span>
        </div>
      </motion.div>
    </Link>
  );
};

const FloatingNavigator = () => {
  const [activeSection, setActiveSection] = useState('challenge');
  const { t } = useLocale();

  useEffect(() => {
    const options = { threshold: 0.3, rootMargin: '-10% 0px -40% 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id === 'programme-section' ? 'programme' : 'challenge');
        }
      });
    }, options);

    const chalSection = document.getElementById('challenge-section');
    const progSection = document.getElementById('programme-section');
    if (chalSection) observer.observe(chalSection);
    if (progSection) observer.observe(progSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-[#141414]/80 backdrop-blur-md border border-[#C9A84C]/30 p-1 rounded-full shadow-2xl flex items-center md:hidden lg:flex">
      <button 
        onClick={() => document.getElementById('challenge-section')?.scrollIntoView({ behavior: 'smooth' })}
        className={`px-6 py-2.5 rounded-full font-['Oswald'] text-[11px] uppercase tracking-[0.2em] transition-all ${activeSection === 'challenge' ? 'bg-[#C9A84C] text-black font-bold' : 'text-[#A3A3A3] hover:text-white'}`}
      >
        {t.marcus.roadmap.title}
      </button>
      <button 
        onClick={() => document.getElementById('programme-section')?.scrollIntoView({ behavior: 'smooth' })}
        className={`px-6 py-2.5 rounded-full font-['Oswald'] text-[11px] uppercase tracking-[0.2em] transition-all ${activeSection === 'programme' ? 'bg-[#C9A84C] text-black font-bold' : 'text-[#A3A3A3] hover:text-white'}`}
      >
        {t.marcus.programme.title}
      </button>
    </div>
  );
};

const TrustBarFull = () => {
  const { t } = useLocale();
  return (
    <div className="flex flex-col gap-4 mt-6 border-t border-white/5 pt-6">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#A3A3A3] font-['Oswald'] uppercase tracking-[0.2em]">
        <span>{t.marcus.trust.noSpam}</span>
        <span className="opacity-30">·</span>
        <span>{t.marcus.trust.unsubscribe}</span>
        <span className="opacity-30">·</span>
        <span>{t.marcus.trust.secureData}</span>
        <span className="opacity-30">·</span>
        <span>{t.marcus.trust.noCard}</span>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="flex -space-x-2">
          {['/avatars/avatar1.webp', '/avatars/avatar2.webp', '/avatars/avatar3.webp'].map((src, i) => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-[#141414] bg-[#1A1A1A] overflow-hidden">
              <img 
                src={src} 
                className="w-full h-full object-cover" 
                alt="Alumni" 
                loading="lazy" 
                decoding="async"
              />
            </div>
          ))}
        </div>
        <p className="text-xs font-['Oswald'] uppercase tracking-widest text-[#C8C8C8] leading-tight text-left">
          <span className="text-[#C9A84C] font-bold">{t.marcus.heroStats}</span> <br/>
          <span className="opacity-50">{t.marcus.stats.joined}</span>
        </p>
      </div>
    </div>
  );
};

const BenefitsList = () => {
  const { t } = useLocale();
  const benefits = t.marcus.enroll.benefits || [];
  return (
    <div className="flex flex-col gap-4 mt-8">
      <h4 className="font-['Oswald'] text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] font-bold">{t.marcus.enroll.benefitsTitle}</h4>
      <ul className="space-y-3">
        {benefits.map((b, i) => (
          <li key={i} className="flex items-center gap-3 text-[11px] font-['Oswald'] uppercase tracking-[0.15em] text-[#F5F5F5] italic">
            <span className="text-[#C9A84C] text-lg">✓</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
};

const EnrollPopup = ({ isOpen, onClose }) => {
  const { t, currency, language } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-black/95 backdrop-blur-3xl">
          <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-[#0E0E0E] border border-white/5 w-full max-w-5xl relative max-h-[92dvh] flex flex-col md:flex-row overflow-hidden shadow-2xl shadow-black/50">
            <button onClick={onClose} className="absolute top-6 right-6 z-[210] text-white/20 hover:text-white transition-colors"><XIcon /></button>
            
            {/* Left Column: Branding (Hidden on mobile or scrollable) */}
            <div className="hidden lg:flex w-2/5 bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] p-12 flex-col justify-between border-r border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/5 blur-[120px] -translate-y-1/2 translate-x-1/2 rounded-full" />
               <div className="relative z-10">
                 <img src="/marcus-logo.png" alt="Marcus Vance" className="h-16 w-auto object-contain mb-12 opacity-80" />
                 <h2 className="font-arena-headline text-5xl text-white mb-4 italic leading-none">{t.marcus.enroll.popupTitle || 'YOUR CLUB SEAT.'}</h2>
                 <p className="text-[#A3A3A3] text-sm italic font-light uppercase tracking-widest leading-relaxed">{t.marcus.enroll.popupSubtitle || 'SECURE YOUR POSITION.'}</p>
                 <BenefitsList />
               </div>
               <div className="relative z-10">
                 <p className="text-[10px] font-['Oswald'] uppercase tracking-[0.4em] text-[#3A3A3A]">THE ALPHA COLLECTIVE © 2024</p>
               </div>
            </div>

            {/* Right Column: Form */}
            <div className="flex-1 overflow-y-auto p-10 md:p-16 no-scrollbar bg-[#0E0E0E]">
              {!submitted ? (
                    <label className="font-['Oswald'] uppercase tracking-[0.2em] text-xs text-[#A3A3A3]">{t.common.nameLabel || 'FIRST NAME'}</label>
                    <input type="text" required className="bg-[#0E0E0E] border border-white/5 py-4 px-6 focus:border-[#C9A84C] outline-none text-sm text-white" placeholder="John" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-['Oswald'] uppercase tracking-[0.2em] text-xs text-[#A3A3A3]">{language === 'fr' ? 'NOM' : 'LAST NAME'}</label>
                    <input type="text" required className="bg-[#0E0E0E] border border-white/5 py-4 px-6 focus:border-[#C9A84C] outline-none text-sm text-white" placeholder="Vance" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-['Oswald'] uppercase tracking-[0.2em] text-xs text-[#A3A3A3]">{t.common.emailLabel || 'EMAIL ADDRESS'}</label>
                  <input type="email" required className="bg-[#0E0E0E] border border-white/5 py-4 px-6 focus:border-[#C9A84C] outline-none text-sm text-white" placeholder="john@domain.com" />
                </div>
                <div className="flex items-start gap-3 my-4">
                  <input type="checkbox" required className="w-4 h-4 accent-[#C9A84C] mt-0.5" />
                  <p className="text-xs text-[#A3A3A3] leading-relaxed italic">{t.marcus.enroll.agreement}</p>
                </div>
                <button type="submit" className="bg-[#C9A84C] text-black w-full py-4 md:py-6 font-arena-headline text-xl md:text-2xl whitespace-normal md:whitespace-nowrap flex items-center justify-center text-center leading-tight tracking-wider hover:bg-[#E2C46E] transition-all uppercase italic">
                   {t.marcus.ctaPrimary}
                </button>
                <span className="font-['Oswald'] text-[12px] text-[#C9A84C] uppercase tracking-[0.3em] font-bold mt-2 italic text-center">
                  {t.marcus.ctaInvestment}
                </span>
                <TrustBarFull />
              </form>
            ) : (
              <div className="py-20 text-center">
                <div className="w-20 h-20 bg-[#C9A84C] flex items-center justify-center text-black text-4xl mx-auto mb-8">✓</div>
                <h3 className="font-arena-headline text-5xl text-white mb-4 italic">{t.marcus.enroll.successTitle}</h3>
                <p className="text-[#A3A3A3] text-sm italic font-light mb-8">{t.marcus.enroll.successSubtitle}</p>
                <button onClick={() => window.location.href = '/giveaway'} className="bg-white/10 text-[#C9A84C] px-6 py-4 md:px-10 md:py-4 font-arena-headline text-xl tracking-wider hover:bg-white/20 transition-all uppercase">{t.marcus.enroll.giveawayBtn}</button>
              </div>
            )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main Page Components
const MarcusElitePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, currency, language, loading } = useLocale();
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [activeCategory, setActiveCategory] = useState('general');

  // Auto-detection redirect eliminated - handled by RedirectManager

  // Sentinel observer for Navbar scroll state
  useEffect(() => {
    const sentinel = document.getElementById('top-sentinel');
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loading]);

  useEffect(() => {
    document.title = language === 'fr' ? "Marcus Vance | Le Défi Élite de 7 Jours" : "Marcus Vance | The Elite 7-Day Challenge"
  }, [language]);

  if (loading) return <PageLoader />;

  const stats = [
    { number: dynamicStats.startedThisMonth, suffix: '', label: t.marcus.stats.started },
    { number: 75, suffix: '%', label: t.marcus.stats.joined },
    { number: 93, suffix: '%', label: t.marcus.stats.launched },
    { number: 4.9, suffix: '/5', label: t.marcus.stats.rating },
  ];

  const faqCategories = t.marcus.faqCategories || {};
  const allFaqs = t.marcus.faq || {};
  const currentCategoryFaqs = allFaqs[activeCategory] || [];

  return (
    <div className="bg-[#080808] min-h-screen text-[#F5F5F5] font-['Inter'] selection:bg-[#C9A84C]/30 selection:text-[#C9A84C] overflow-x-hidden">
      {/* Scroll Trigger Sentinel */}
      <div id="top-sentinel" className="absolute top-0 left-0 h-1 w-1 pointer-events-none opacity-0" />
      <ScrollProgress />
      <FloatingNavigator />
      <GiveawayFloatingBadge />
      <EnrollPopup isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />

      <div className="h-[36px] bg-[#C9A84C] flex items-center justify-center gap-2 px-4 fixed top-0 left-0 right-0 z-[100] transform-gpu">
        <div className="w-2 h-2 bg-black/60 rounded-full animate-pulse" />
        <span className="font-['Oswald'] uppercase tracking-[0.2em] text-[11px] text-black font-bold italic">
          {t.marcus.urgencyBar}
        </span>
      </div>

      {/* NAVBAR */}
      <nav className={`fixed top-[36px] left-0 right-0 z-[90] transition-all duration-500 transform-gpu ${isScrolled ? 'bg-[#080808]/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center translate-y-[-4px]">
            <img src="/marcus-logo.png" alt="Marcus Vance" className="h-24 md:h-32 w-auto object-contain" />
          </div>
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-['Oswald'] uppercase tracking-[0.2em]">
            <a href="#challenge-section" className="text-[#C8C8C8] hover:text-[#C9A84C] transition-colors">{t.marcus.navAboutChallenge}</a>
            <a href="#programme-section" className="text-[#C8C8C8] hover:text-[#C9A84C] transition-colors">{t.marcus.navAboutProgramme}</a>
            <Link to="/philosophy" className="text-[#C8C8C8] hover:text-[#C9A84C] transition-colors">{t.marcus.footer.philosophy}</Link>
            <LanguageSwitcher variant="marcus" />
            <button onClick={() => setIsEnrollOpen(true)} className="border border-[#C9A84C] text-[#C9A84C] px-8 py-3 hover:bg-[#C9A84C] hover:text-black transition-all">{t.marcus.navStartBtn}</button>
          </div>
          <div className="lg:hidden flex items-center gap-4">
            <LanguageSwitcher variant="marcus" />
          </div>
        </div>
      </nav>

      <main className="contain-layout">
        {/* HERO */}
        <section className="relative pt-[160px] pb-32 overflow-hidden contain-paint" id="challenge-section">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-1.5 h-6 bg-[#C9A84C]" />
                <span className="font-['Oswald'] uppercase tracking-[0.3em] text-xs text-[#C9A84C] font-bold">{t.marcus.heroPreHeader}</span>
              </div>

              <h1 className="font-arena-headline text-[56px] md:text-[88px] leading-[0.85] tracking-[var(--tracking-arena-headline)] text-white mb-8">
                {t.marcus.heroTitle}
              </h1>

              <div className="font-['Oswald'] font-bold text-lg md:text-2xl uppercase tracking-wider text-[#C8C8C8] mb-8 border-l-0 lg:border-l-2 border-[#C9A84C] lg:pl-6 italic">
                {t.marcus.heroSubtitle}
              </div>

              <div className="flex flex-col gap-8 items-center lg:items-start w-full">
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <span className="font-['Oswald'] text-xs text-[#A3A3A3] uppercase tracking-[0.3em] font-bold">{t.marcus.valueStackHeader.replace('{currency}', currency)}</span>
                  <button 
                    onClick={() => setIsEnrollOpen(true)}
                    className="bg-[#C9A84C] text-black px-6 py-4 md:px-12 md:py-7 font-arena-headline text-xl md:text-3xl tracking-wider hover:bg-white transition-all shadow-2xl shadow-[#C9A84C]/20 uppercase italic"
                  >
                    {t.marcus.ctaPrimary}
                  </button>
                  <span className="font-['Oswald'] text-[12px] text-[#C9A84C] uppercase tracking-[0.3em] font-bold mt-2 italic">{t.marcus.ctaInvestment.replace('{currency}', currency)}</span>
                </div>
                <div className="flex items-center gap-4 text-left">
                  <p className="font-['Oswald'] text-xs uppercase tracking-[0.2em] text-[#A3A3A3] leading-relaxed">
                    <span className="text-[#C9A84C] font-bold">{t.marcus.heroStats}</span> <br/>
                    <span className="opacity-50 tracking-normal italic uppercase">{t.marcus.heroCommunity}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/5]">
               <div className="absolute inset-0 bg-gradient-to-t from-[#080808] z-10" />
               <img 
                 src="/marcus-standing.webp" 
                 alt="Marcus Vance" 
                 className="w-full h-full object-cover filter grayscale-[20%]" 
                 width="600"
                 height="750"
                 loading="eager"
                 fetchPriority="high"
               />
               <div className="absolute bottom-12 right-0 z-20 bg-[#C9A84C] px-10 py-6">
                 <div className="font-arena-headline text-3xl text-black tracking-widest">{language === 'fr' ? '12 024+ ALUMNI' : '12,024+ ALUMNI'}</div>
               </div>
            </div>
            {/* AI Disclaimer */}
            <div className="mt-4 flex flex-col gap-2 border-t border-white/5 pt-4">
              <p className="text-[10px] uppercase font-['Oswald'] tracking-[0.2em] text-[#F5F5F5] opacity-50">Marcus Vance is an AI-generated brand persona.</p>
              <Link to="/philosophy" className="text-[12px] text-[#C9A84C] font-['Oswald'] uppercase tracking-widest underline decoration-[#C9A84C]/50 hover:decoration-[#C9A84C] transition-all">Read the full disclosure</Link>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
          >
            <span className="font-['Oswald'] text-[11px] uppercase tracking-[0.5em] text-[#F5F5F5]">{t.marcus.heroScroll}</span>
            <ChevronDownIcon className="text-[#C9A84C] w-5 h-5" />
          </motion.div>
        </section>

        {/* PLATFORM AUDIT / STATS */}
        <section className="bg-gradient-to-br from-[#0E0E0E] to-[#080808] py-24 border-y border-white/5">
           <h2 className="sr-only">Platform Statistics</h2>
           <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">
              {stats.map(s => (
                <div key={s.label}>
                  <h3 className="font-arena-headline text-7xl text-[#C9A84C] italic leading-none">{s.number}{s.suffix}</h3>
                  <p className="font-['Oswald'] uppercase tracking-[0.2em] text-xs text-[#A3A3A3] mt-4 font-bold">{s.label}</p>
                </div>
              ))}
           </div>
         </section>

        {/* THE CHALLENGE BLOCKS (PART 1) */}
        <section className="py-32 md:py-48">
           <div className="max-w-7xl mx-auto px-8">
             <div className="max-w-2xl mb-24">
               <span className="font-['Oswald'] uppercase tracking-[0.3em] text-[#C9A84C] text-[12px] font-bold block mb-4 italic">{t.marcus.roadmap.badge}</span>
               <h2 className="font-arena-headline text-7xl text-white mb-6 uppercase">{t.marcus.roadmap.title}</h2>
               <p className="text-[#A3A3A3] text-lg font-normal italic leading-relaxed">{t.marcus.roadmap.subtitle}</p>
             </div>
             
             <div className="relative">
                {/* Desktop Grid (Hidden on Mobile) */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-8">
                  {t.marcus.roadmap.items.map(item => (
                    <div key={item.d} className="bg-[#141414] border border-white/5 p-10 hover:border-[#C9A84C]/30 transition-all group">
                       <div className="flex justify-between items-start mb-8">
                         <span className="font-arena-headline text-5xl text-white/10 group-hover:text-[#C9A84C]/30 transition-all italic">{item.d}</span>
                         <span className="bg-[#C9A84C]/10 text-[#C9A84C] px-4 py-1.5 font-['Oswald'] text-xs font-bold tracking-widest">{item.s}</span>
                       </div>
                       <h3 className="font-['Oswald'] text-xl text-white uppercase mb-4 tracking-wide">{item.t}</h3>
                       <span className="text-[#A3A3A3] font-['Oswald'] text-xs uppercase tracking-widest">{language === 'fr' ? 'VALEUR :' : 'VALUE:'} <span className="text-[#F5F5F5] font-bold">{item.v.replace('{currency}', currency)}</span></span>
                    </div>
                  ))}
                </div>

                {/* Mobile Timeline (Hidden on Large screens) */}
                <div className="lg:hidden relative">
                  {/* Central Ignition Line */}
                  <div className="absolute left-[20px] top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A84C]/0 via-[#C9A84C]/40 to-[#C9A84C]/0" />
                  
                  <div className="space-y-12">
                    {t.marcus.roadmap.items.map((item, idx) => (
                      <Reveal key={item.d} delay={idx * 0.05}>
                        <div className="relative pl-12">
                          {/* Node */}
                          <div className="absolute left-[-2px] top-4 w-[5px] h-[5px] bg-[#C9A84C] rotate-45 shadow-[0_0_10px_#C9A84C]" />
                          
                          <div className="bg-[#141414] border border-white/5 p-8 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                              <span className="font-arena-headline text-6xl text-white italic">{item.d}</span>
                            </div>
                            
                            <div className="flex flex-col gap-4">
                              <span className="w-fit bg-[#C9A84C]/10 text-[#C9A84C] px-3 py-1 font-['Oswald'] text-[10px] font-bold tracking-widest uppercase">{item.s}</span>
                             <h3 className="font-['Oswald'] text-lg text-white uppercase tracking-wide leading-tight pr-12">{item.t}</h3>
                              <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/5">
                                <span className="text-[#A3A3A3] font-['Oswald'] text-[10px] uppercase tracking-widest">{language === 'fr' ? 'VALEUR :' : 'VALUE:'}</span>
                                <span className="text-[#C9A84C] font-arena-headline text-lg tracking-wider italic">{item.v.replace('{currency}', currency)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>

             <div className="mt-20 text-center">
               <button onClick={() => setIsEnrollOpen(true)} className="bg-white/5 border border-white/10 text-white px-6 py-4 md:px-12 md:py-5 font-arena-headline text-xl tracking-wider hover:bg-[#C9A84C] hover:text-black transition-all italic uppercase">{t.marcus.roadmap.joinCohort.replace('{count}', dynamicStats.startedThisMonth)} →</button>
             </div>
           </div>
        </section>

        {/* THE CORE PLATFORM PREVIEW */}
        <section className="bg-[#080808] py-32 md:py-48 border-y border-white/5">
           <div className="max-w-7xl mx-auto px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <Reveal>
                 <div className="max-w-xl">
                   <div className="flex items-center gap-3 mb-6">
                     <div className="w-1.5 h-6 bg-[#C9A84C]" />
                     <span className="font-['Oswald'] uppercase tracking-[0.3em] text-[11px] text-[#C9A84C] font-bold">{t.marcus.programme.badge}</span>
                   </div>
                   <h2 className="font-arena-headline text-6xl md:text-8xl text-white mb-8 italic leading-none uppercase">{t.marcus.programme.title}</h2>
                   <p className="text-[#A3A3A3] text-lg font-normal italic leading-relaxed mb-12">
                     {t.marcus.programme.subtitle}
                   </p>
                   <ul className="space-y-6">
                     <li className="flex items-start gap-4">
                       <span className="text-[#C9A84C] text-xl font-bold mt-1">01</span>
                       <div>
                         <h4 className="font-['Oswald'] text-white uppercase tracking-widest mb-1">THE ALPHA INTERFACE</h4>
                         <p className="text-[#6A6A6A] text-xs font-['Oswald'] uppercase tracking-widest">Real-time data visualization and protocol execution.</p>
                       </div>
                     </li>
                     <li className="flex items-start gap-4">
                       <span className="text-[#C9A84C] text-xl font-bold mt-1">02</span>
                       <div>
                         <h4 className="font-['Oswald'] text-white uppercase tracking-widest mb-1">5 CORE MODULES</h4>
                         <p className="text-[#6A6A6A] text-xs font-['Oswald'] uppercase tracking-widest">Systems from Foundation to Global Exit strategies.</p>
                       </div>
                     </li>
                   </ul>
                 </div>
               </Reveal>
               
               <Reveal delay={0.2}>
                 <div className="relative group">
                   <div className="absolute -inset-4 bg-[#C9A84C]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                   <div className="relative border border-white/5 bg-[#0E0E0E] p-2 rounded-xl shadow-2xl overflow-hidden">
                     <img 
                       src="/marcus_platform_mockup_v2_1776138837670.png" 
                       alt="The Marcus Platform" 
                       className="w-full h-auto rounded-lg filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" 
                     />
                   </div>
                 </div>
               </Reveal>
             </div>
           </div>
        </section>

        {/* THE PROGRAMME CATEGORIES (PART 2) */}
        <section className="bg-[#141414] py-32 md:py-56 border-y border-white/5" id="programme-section">
           <div className="max-w-7xl mx-auto px-8">
             <div className="text-center mb-24">
               <Reveal>
                 <span className="font-['Oswald'] uppercase tracking-[0.3em] text-[#C9A84C] text-[12px] font-bold block mb-4 italic">{t.marcus.programme.badge}</span>
                 <h2 className="font-arena-headline text-7xl md:text-[100px] text-white leading-none mb-6 tracking-[var(--tracking-arena-headline)]">{t.marcus.programme.title}</h2>
                 <p className="text-[#A3A3A3] text-lg max-w-2xl mx-auto font-normal italic leading-relaxed">
                   {t.marcus.programme.subtitle}
                 </p>
               </Reveal>
             </div>
             
             {/* Category Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
               {t.marcus.programme.categories.map((x, idx) => (
                 <Reveal key={x.t} delay={idx * 0.05}>
                   <div className="bg-[#141414] p-10 border-l border-white/5 hover:border-l-[#C9A84C] transition-all group h-full flex flex-col">
                     <div className="text-4xl mb-6">{x.i}</div>
                     <h3 className="font-arena-headline text-3xl text-white mb-2 tracking-wide font-bold">{x.t}</h3>
                     <p className="text-[#C9A84C] font-['Oswald'] text-xs tracking-widest uppercase mb-4 font-bold">{x.n}</p>
                     <p className="text-[#A3A3A3] text-sm font-normal leading-relaxed italic border-t border-white/5 pt-4 mt-auto">
                       {x.d}
                     </p>
                   </div>
                 </Reveal>
               ))}
               
               {/* Exclusivity Statement Card */}
               <Reveal delay={0.3}>
                 <div className="bg-gradient-to-br from-[#141414] to-[#0A0A0A] p-10 border border-[#C9A84C]/20 flex flex-col justify-center items-center text-center group h-full">
                   <div className="w-12 h-1 bg-[#C9A84C] mb-6" />
                   <p className="text-white font-['Oswald'] text-sm uppercase tracking-[0.2em] leading-relaxed italic">
                     {t.marcus.programme.exclusivity}
                   </p>
                   <div className="mt-8 text-xs text-[#C9A84C] font-bold tracking-[0.3em] uppercase">{t.marcus.programme.stats}</div>
                 </div>
               </Reveal>
             </div>

             <div className="text-center">
               <Reveal>
                 <div className="flex flex-col items-center gap-6">
                   <button 
                     onClick={() => setIsEnrollOpen(true)}
                     className="bg-[#C9A84C] text-black px-6 py-5 md:px-16 md:py-7 font-arena-headline text-xl md:text-3xl tracking-wider hover:bg-white transition-all shadow-2xl shadow-[#C9A84C]/20 uppercase italic"
                   >
                     {t.marcus.programme.cta}
                   </button>
                   <p className="font-['Oswald'] text-xs text-[#A3A3A3] uppercase tracking-[0.2em] font-bold italic">
                     {t.marcus.programme.ctaDisclaimer}
                   </p>
                 </div>
               </Reveal>
             </div>
           </div>
        </section>

        {/* FAQ - Categorized */}
        <section className="pt-32 pb-12 md:pt-56 md:pb-24 overflow-hidden">
           <div className="max-w-4xl mx-auto px-8">
             <h2 className="font-arena-headline text-6xl text-center text-white mb-16 italic tracking-[var(--tracking-arena-headline)]">{t.marcus.faqTitle}</h2>
             
             {/* Category Selector */}
             <div className="flex flex-wrap justify-center gap-3 mb-16">
               {Object.keys(faqCategories).map((key) => (
                 <button
                   key={key}
                   onClick={() => {
                     setActiveCategory(key);
                     setActiveFAQ(null);
                   }}
                   className={`px-6 py-3 font-['Oswald'] text-[11px] uppercase tracking-[0.2em] transition-all border ${
                     activeCategory === key
                       ? 'bg-[#C9A84C] text-black border-[#C9A84C] font-bold'
                       : 'bg-transparent text-[#A3A3A3] border-white/10 hover:border-[#C9A84C]/50'
                   }`}
                 >
                   {faqCategories[key]}
                 </button>
               ))}
             </div>

             <div className="space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {currentCategoryFaqs.map((f, i) => (
                      <div key={`${activeCategory}-${i}`} className="border-b border-white/5">
                        <button 
                          onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                          className="w-full flex justify-between items-center py-8 group text-left"
                        >
                          <span className={`font-['Oswald'] text-lg uppercase tracking-wide transition-all ${activeFAQ === i ? 'text-[#C9A84C]' : 'text-white/80 group-hover:text-white'}`}>{f.q}</span>
                          <span className="text-[#C9A84C] text-2xl ml-4">{activeFAQ === i ? '−' : '+'}</span>
                        </button>
                        <AnimatePresence>
                          {activeFAQ === i && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                              <p className="text-[#A3A3A3] text-sm leading-relaxed pb-10 italic font-normal max-w-2xl">{f.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
             </div>
           </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-black pt-12 pb-40 md:pt-24 md:pb-60 text-center relative">
           <div className="max-w-4xl mx-auto px-8 relative z-10">
             <div className="w-16 h-20 bg-[#C9A84C]/5 mx-auto mb-12 flex items-center justify-center border border-[#C9A84C]/30 rotate-12 rotate-[-6deg]">
               <ShieldIcon className="text-[#C9A84C]" />
             </div>
             <h2 className="font-arena-headline text-7xl md:text-9xl text-white mb-10 italic leading-none tracking-[var(--tracking-arena-headline)]">{t.marcus.finalCTA.title}</h2>
             <div className="flex flex-col items-center gap-8">
               <div className="flex flex-col items-center gap-2">
                 <span className="font-['Oswald'] text-xs text-[#A3A3A3] uppercase tracking-[0.2em] font-bold">{t.marcus.valueStackHeader.replace('{currency}', currency)}</span>
                 <button 
                  onClick={() => setIsEnrollOpen(true)}
                  className="bg-[#C9A84C] text-black px-6 py-5 md:px-16 md:py-8 font-arena-headline text-2xl md:text-4xl tracking-wider hover:bg-white transition-all shadow-2xl shadow-[#C9A84C]/30 uppercase italic"
                 >
                   {t.marcus.ctaPrimary}
                 </button>
                 <span className="font-['Oswald'] text-[12px] text-[#C9A84C] uppercase tracking-[0.3em] font-bold mt-2 italic">{t.marcus.ctaInvestment.replace('{currency}', currency)}</span>
               </div>
               <div className="flex items-center gap-4">
                 <div className="flex -space-x-2">
                    {['/avatars/avatar1.webp', '/avatars/avatar2.webp', '/avatars/avatar3.webp'].map((src, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-[#1A1A1A] overflow-hidden">
                        <img src={src} className="w-full h-full object-cover" alt="Alumni" />
                      </div>
                    ))}
                 </div>
                 <p className="font-['Oswald'] text-xs uppercase tracking-[0.2em] text-[#A3A3A3] text-left">
                   <span className="text-[#C9A84C] font-bold">{t.marcus.finalCTA.community.replace('{count}', '12,024+')}</span> <br/>
                   <span className="opacity-50">{t.marcus.finalCTA.successRate}</span>
                 </p>
               </div>
             </div>
           </div>
        </section>
      </main>

      <Disclaimer />

      <footer className="py-20 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-4">
            <img src="/marcus-logo.png" alt="Marcus Vance" className="h-28 w-auto object-contain opacity-95" />
            <p className="text-[#2A2A2A] font-['Oswald'] uppercase tracking-[0.5em] text-[11px]">PRODUCED BY THE ALPHA COLLECTIVE © 2024</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-4 text-xs font-['Oswald'] uppercase tracking-[0.2em] text-[#3A3A3A]">
            <Link to="/marcus/giveaway" className="hover:text-[#C9A84C] transition-all">{t.marcus.footer.giveaway}</Link>
            <Link to="/marcus/feedback" className="hover:text-[#C9A84C] transition-all">{t.marcus.footer.feedback}</Link>
            <Link to="/philosophy" className="hover:text-[#C9A84C] transition-all">{t.marcus.footer.philosophy}</Link>
            <Link to="/terms" className="hover:text-[#C9A84C] transition-all">{t.marcus.footer.terms}</Link>
          </div>
          <div className="flex gap-8 items-center opacity-30 invert">
            <InstagramIcon /><YoutubeIcon /><TwitterIcon />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarcusElitePage;
