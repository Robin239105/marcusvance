import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Reveal } from '../../shared/components/Reveal';
import dynamicStats from '../../shared/utils/dynamicStats';
import { useLocale } from '../../shared/hooks/useLocale';
import LanguageSwitcher from '../../shared/components/LanguageSwitcher';
import { Disclaimer } from '../../shared/components/Disclaimer';

// --- Icons ---
const CheckIcon = ({ className }) => <span className={className}>✓</span>;
const ChevronDownIcon = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);
const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="m7 4 12 8-12 8V4z" />
  </svg>
);

// --- Sub-Components ---

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#FFD700] z-[1000] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

const UrgencyBar = ({ t }) => (
  <div className="animate-shinebar py-2 px-6 text-center text-xs font-oswald font-bold tracking-widest text-black uppercase relative z-[1000]">
    {t.marcus.urgencyBar}
  </div>
);

const ToastNotification = () => {
  const [currentToast, setCurrentToast] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const toasts = [
    { i: 'JM', n: 'James M. · Manchester', a: 'just enrolled in Day 1' },
    { i: 'SC', n: 'Sophie C. · London', a: 'completed Day 3 — funnel live' },
    { i: 'AO', n: 'Ade O. · Birmingham', a: 'just signed up' },
    { i: 'RL', n: 'Rachel L. · Leeds', a: 'finished Day 7 — unlocked access' },
    { i: 'FB', n: 'Fatou B. · Edinburgh', a: 'started the challenge' },
    { i: 'MK', n: 'Mark K. · Bristol', a: 'joined from a referral' },
  ];

  useEffect(() => {
    const show = () => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 5000);
      setCurrentToast((prev) => (prev + 1) % toasts.length);
    };

    const interval = setInterval(show, 15000);
    setTimeout(show, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, x: -20 }}
          className="fixed bottom-6 left-6 z-[500] mv-glass-card p-3 pr-6 flex items-center gap-4 rounded-xl shadow-2xl pointer-events-none"
        >
          <div className="w-10 h-10 bg-white/5 border border-[#FFD700]/20 rounded-full flex items-center justify-center font-bebas text-[#FFD700]">
            {toasts[currentToast].i}
          </div>
          <div>
            <div className="font-oswald text-[11px] font-bold text-white uppercase tracking-wider">{toasts[currentToast].n}</div>
            <div className="text-[10px] text-[#A3A3A3] font-light">{toasts[currentToast].a}</div>
          </div>
          <div className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SectionHeading = ({ pre, title, subtitle, centered = true }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    {pre && (
      <span className="font-oswald text-[#FFD700] tracking-[0.3em] text-sm md:text-base uppercase mb-4 block font-bold">
        {pre}
      </span>
    )}
    <h2 className="font-oswald text-5xl md:text-8xl text-white leading-[0.9] uppercase mb-6 tracking-tight font-bold">
      {title}
    </h2>
    {subtitle && (
      <p className="text-[#A3A3A3] text-lg md:text-xl font-light italic max-w-2xl mx-auto leading-relaxed font-barlow">
        {subtitle}
      </p>
    )}
  </div>
);

const LogoScrollTrack = () => {
  const brands = ["Stripe", "Shopify", "Meta", "Google", "Amazon", "Discord", "Skool", "Paypal"];
  return (
    <div className="bg-[#050505] border-y border-white/5 py-8 overflow-hidden">
      <div className="flex gap-16 animate-scroll-logos w-max px-8">
        {[...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex items-center gap-2 font-oswald text-sm md:text-lg text-white/20 uppercase tracking-[0.3em] font-bold hover:text-[#FFD700]/30 transition-colors cursor-default whitespace-nowrap">
            <span className="text-xl">◈</span> {brand}
          </div>
        ))}
      </div>
    </div>
  );
};

const TimelineSection = () => {
  const steps = [
    { day: "Day 01", title: "Offer & Customer Avatar", deliverable: "Offer Sentence", desc: "Define exactly who you help, what transformation you deliver, and how you communicate it in one precise sentence. This sentence becomes the headline of everything." },
    { day: "Day 02", title: "Lead Magnet + Capture Page Live", deliverable: "Live Page", desc: "Build a high-value lead magnet and launch your capture page. Your automated welcome email delivers it within minutes of opt-in." },
    { day: "Day 03", title: "5-Email Nurturing Sequence Activated", deliverable: "Email Logic", desc: "Configure the complete trust-building email sequence: delivery, empathy, proof, offer, close — running automatically 24/7." },
    { day: "Day 04", title: "Hubspot CRM Connected", deliverable: "CRM Wired", desc: "Wired to your funnel via automation. Every lead is tracked in a live pipeline. No warm prospect ever falls through the cracks again." },
    { day: "Day 05", title: "Sales Page Published", deliverable: "Sales Funnel", desc: "A complete sales page live online: transformation headline, value stack, proof, and CTAs — available to prospects globally." },
    { day: "Day 06", title: "Payment & Booking Active", deliverable: "Payout Mode", desc: "Payment or Cal.com connected to your offer page. You can now take payments or book qualified calls — completely automated." },
    { day: "Day 07", title: "Launch & First Traffic", deliverable: "Open for Biz", desc: "Full funnel tested on mobile and launched to your first real leads. Your business infrastructure is live. What comes next is shown on Day 7." }
  ];

  return (
    <section className="py-32 bg-[#000000]" id="roadmap">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          pre="What You'll Build"
          title="The 7-Day Challenge Roadmap"
          subtitle="Each day produces a live, working asset. By Day 7, you have a complete business — not a notebook of ideas."
        />
        <div className="relative pl-8 md:pl-16 border-l border-white/10 space-y-12">
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="relative">
                <div className="absolute -left-[35px] md:-left-[67px] top-6 w-3 h-3 bg-[#FFD700] rounded-full shadow-[0_0_15px_#FFD700]" />
                <div className="mv-glass-card p-10 group relative">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="font-oswald text-[#FFD700] text-3xl tracking-widest font-bold font-italic">{step.day}</span>
                        <span className="font-oswald bg-[#FFD700]/10 text-[#FFD700] text-[10px] font-bold px-3 py-1 rounded uppercase tracking-[0.2em]">{step.deliverable}</span>
                    </div>
                    <h3 className="font-oswald text-3xl text-white mb-4 group-hover:text-[#FFD700] transition-colors font-bold uppercase">{step.title}</h3>
                    <p className="text-[#A3A3A3] text-lg italic leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = ({ t }) => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [activeFAQ, setActiveFAQ] = useState(null);

  const categories = t.marcus.faqCategories;
  const faqData = t.marcus.faq;

  return (
    <section className="py-32 bg-[#000000]" id="faq">
      <div className="max-w-4xl mx-auto px-8">
        <SectionHeading 
          pre="Common Questions"
          title="The Protocol Audit"
        />
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {Object.keys(categories).map((key) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(key);
                setActiveFAQ(null);
              }}
              className={`px-6 py-3 font-oswald text-[11px] uppercase tracking-[0.2em] transition-all border font-bold ${
                activeCategory === key
                  ? 'bg-[#FFD700] text-black border-[#FFD700]'
                  : 'bg-transparent text-[#A3A3A3] border-white/10 hover:border-[#FFD700]/50'
              }`}
            >
              {categories[key]}
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
              className="space-y-6"
            >
              {faqData[activeCategory].map((f, i) => (
                <div key={`${activeCategory}-${i}`} className="border-b border-white/5">
                  <button 
                    onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                    className="w-full flex justify-between items-center py-8 group text-left"
                  >
                    <span className={`font-oswald text-lg uppercase tracking-wide transition-all font-bold ${activeFAQ === i ? 'text-[#FFD700]' : 'text-white/80 group-hover:text-white'}`}>{f.q}</span>
                    <span className="text-[#FFD700] text-2xl ml-4">{activeFAQ === i ? '−' : '+'}</span>
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
  );
};

const ProgramReveal = ({ t }) => (
  <section className="py-40 bg-[#050505] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-8">
      <SectionHeading 
        pre={t.marcus.programme.badge}
        title={t.marcus.programme.title}
        subtitle={t.marcus.programme.subtitle}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {t.marcus.programme.categories.map((cat, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="mv-glass-card p-10 h-full flex flex-col group">
              <div className="text-4xl mb-6">{cat.i}</div>
              <h3 className="font-oswald text-2xl text-white mb-4 tracking-tighter font-bold uppercase group-hover:text-[#FFD700] transition-colors">{cat.t}</h3>
              <div className="text-[#FFD700] text-[10px] font-bold tracking-[0.2em] mb-4 uppercase italic opacity-50">{cat.n}</div>
              <p className="text-[#6A6A6A] text-sm leading-relaxed border-t border-white/5 pt-6">{cat.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-24 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
        {t.marcus.programme.unlockStats.map((stat, i) => (
          <div key={i} className="text-center p-4 bg-white/[0.02] rounded-xl border border-white/5">
            <div className="text-xl mb-2">{stat.i}</div>
            <div className="font-oswald text-white font-bold text-sm tracking-widest">{stat.t}</div>
            <div className="font-oswald text-[#6A6A6A] text-[9px] uppercase tracking-widest font-bold">{stat.l}</div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-[#A3A3A3] font-oswald text-sm italic mb-10 max-w-xl mx-auto leading-relaxed">{t.marcus.programme.exclusivity}</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#FFD700] text-black px-12 py-6 font-oswald text-xl tracking-widest hover:bg-white transition-all shadow-2xl uppercase font-bold italic shadow-[#FFD700]/20">{t.marcus.programme.cta}</button>
      </div>
    </div>
  </section>
);

const FinalCTA = ({ t }) => (
  <section className="py-40 bg-[#000000] text-center border-t border-white/5">
    <div className="max-w-4xl mx-auto px-8 relative">
      <Reveal>
        <h2 className="font-oswald text-6xl md:text-9xl text-white mb-10 leading-[0.9] uppercase font-bold italic pr-4">{t.marcus.finalCTA.title}</h2>
        <div className="flex flex-col items-center gap-10">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#FFD700] text-black px-16 py-8 font-oswald text-3xl tracking-widest hover:bg-white transition-all shadow-[0_0_60px_rgba(255,215,0,0.2)] uppercase font-bold italic">{t.marcus.ctaPrimary}</button>
          
          <div className="flex flex-col md:flex-row items-center gap-10 opacity-70">
            <div className="flex items-center gap-4">
               <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-[#111] overflow-hidden"><img src={`/avatars/avatar${(i%3)+1}.webp`} /></div>)}
               </div>
               <div className="text-left">
                  <div className="font-oswald text-white text-[11px] font-bold tracking-[0.2em] uppercase">{t.marcus.finalCTA.community}</div>
                  <div className="font-oswald text-[#FFD700] text-[10px] font-bold tracking-[0.2em] uppercase">{t.marcus.finalCTA.successRate}</div>
               </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const TheVoice = ({ t }) => (
  <section className="py-40 relative overflow-hidden bg-[#000000]">
    <div className="max-w-5xl mx-auto px-8 relative z-10 text-center">
      <Reveal>
        <div className="font-oswald text-[#FFD700] tracking-[0.4em] text-xs font-bold mb-12 uppercase">The Voice of Marcus Vance</div>
        <blockquote className="font-oswald text-4xl md:text-6xl text-white leading-[1.1] mb-12 italic uppercase font-bold tracking-tight">
          "The digital era doesn't reward hard work. <br/>
          It rewards <span className="text-[#FFD700]">High-Leverage Systems</span> that run while you sleep."
        </blockquote>
        <div className="w-12 h-1px bg-[#FFD700]/30 mx-auto mb-12" />
        <p className="text-[#A3A3A3] text-lg md:text-xl font-light italic max-w-2xl mx-auto leading-relaxed">
          I've spent the last decade distilling complex wealth generation models into one repeatable protocol. The 7-Day Challenge isn't just a course—it's your baptism into the elite digital economy.
        </p>
      </Reveal>
    </div>
    {/* Background accent */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[#FFD700]/[0.02] blur-[150px] -z-10" />
  </section>
);

const Methodology = ({ t }) => (
  <section className="py-32 bg-[#050505] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-8">
      <SectionHeading 
        pre="The Method"
        title="Three Pillars of the Protocol"
        centered={false}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-20">
        {[
          { i: "01", t: "AUDIT & ALIGN", d: "Most people fail because they build a business that doesn't fit their life. Day 1 is about ruthless alignment." },
          { i: "02", t: "INFRASTRUCTURE", d: "We build the engines—funnels, automations, and CRM—before you ever spend a penny on traffic." },
          { i: "03", t: "LEVERAGE", d: "Once the system is live, we apply high-quality attention to fuel the machine. Scale is the natural outcome." }
        ].map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="group">
              <div className="font-oswald text-6xl text-white/5 mb-8 font-bold italic transition-colors group-hover:text-[#FFD700]/10">{item.i}</div>
              <h3 className="font-oswald text-2xl text-white mb-4 tracking-wider font-bold uppercase">{item.t}</h3>
              <p className="text-[#6A6A6A] leading-relaxed italic">{item.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const MarcusElitePage = () => {
  const { t, currency, language, loading } = useLocale();
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleMouseLeave = (e) => {
        if (e.clientY <= 0) setShowExitPopup(true);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (loading) return null;

  return (
    <div className="bg-[#000000] min-h-screen text-[#F5F5F5] font-['Barlow'] overflow-x-hidden group/main">
      <ScrollProgress />
      <UrgencyBar t={t} />
      <ToastNotification />

      {/* --- Header / Nav --- */}
      <nav className={`fixed top-[32px] left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-6 group">
            <img src="/marcus-logo.png" alt="Marcus Vance Logo" className="h-32 w-auto object-contain" />
          </Link>
          <div className="hidden lg:flex items-center gap-10 font-oswald text-xs tracking-[0.3em] font-bold uppercase">
            <a href="#about" className="hover:text-[#FFD700] transition-colors">{t.marcus.footer.philosophy}</a>
            <a href="#roadmap" className="hover:text-[#FFD700] transition-colors">{t.marcus.navAboutChallenge}</a>
            <a href="#faq" className="hover:text-[#FFD700] transition-colors">FAQ</a>
            <LanguageSwitcher variant="marcus" />
            <button onClick={() => setIsEnrollOpen(true)} className="bg-[#FFD700] text-black px-8 py-2.5 hover:bg-white transition-all shadow-lg font-bold">{t.marcus.navStartBtn}</button>
          </div>
          <div className="lg:hidden text-right flex items-center gap-4">
             <button onClick={() => setIsEnrollOpen(true)} className="bg-[#FFD700] text-black px-4 py-2 text-[10px] font-bold tracking-widest uppercase italic shadow-lg">START FREE</button>
             <LanguageSwitcher variant="marcus" />
          </div>
        </div>
      </nav>

      <main>
        {/* --- Hero Section --- */}
        <section className="relative pt-[120px] lg:pt-[220px] pb-32 overflow-hidden" id="about">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-[#FFD700]/[0.05] blur-[150px] rounded-full -translate-y-1/2 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center text-left">
              <div>
                <Reveal>
                  <div className="inline-flex items-center gap-3 border border-[#FFD700]/30 bg-[#FFD700]/10 px-4 py-1.5 rounded-full mb-8">
                    <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse" />
                    <span className="font-oswald text-[#FFD700] text-[10px] font-bold tracking-[0.4em] uppercase">{t.marcus.heroPreHeader}</span>
                  </div>
                </Reveal>
                
                <Reveal delay={0.1}>
                  <h1 className="font-barlow-cond text-[56px] min-[400px]:text-[64px] md:text-[90px] lg:text-[110px] leading-[0.82] text-white tracking-tighter mb-10 uppercase font-extrabold pr-4 break-words">
                    {t.marcus.heroTitle.split('. ')[0]}<br/>
                    <span className="mv-text-gold-gradient italic">{t.marcus.heroTitle.split('. ')[1]}</span>
                  </h1>
                </Reveal>

                <Reveal delay={0.2}>
                  <p className="text-[#A3A3A3] text-lg md:text-xl font-light italic max-w-xl mb-12 leading-relaxed">
                    {t.marcus.heroSubtitle}
                  </p>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                      <button onClick={() => setIsEnrollOpen(true)} className="w-full sm:w-auto bg-[#FFD700] text-black px-12 py-6 font-oswald text-xl tracking-widest hover:bg-white transition-all shadow-2xl uppercase font-bold italic shadow-[#FFD700]/20">{t.marcus.ctaPrimary}</button>
                      <a href="#roadmap" className="font-oswald text-sm text-white/50 hover:text-white transition-colors tracking-widest border-b border-transparent hover:border-white/20 pb-1 uppercase font-bold">{t.marcus.heroScroll} →</a>
                  </div>
                </Reveal>

                <Reveal delay={0.4}>
                  <div className="mt-12 flex items-center gap-10 border-t border-white/5 pt-12">
                     <div className="text-left">
                        <div className="font-oswald text-white text-xl font-bold tracking-tighter italic">12,024+</div>
                        <div className="font-oswald text-[#6A6A6A] text-[9px] uppercase tracking-[0.2em] font-bold">VERIFIED ALUMNI</div>
                     </div>
                     <div className="text-left">
                        <div className="font-oswald text-[#FFD700] text-xl font-bold tracking-tighter italic">93%</div>
                        <div className="font-oswald text-[#6A6A6A] text-[9px] uppercase tracking-[0.2em] font-bold">{t.marcus.heroCommunity}</div>
                     </div>
                  </div>
                </Reveal>
              </div>

              <div className="relative">
                <Reveal delay={0.3} direction="left">
                   <div className="relative z-10 w-full aspect-[4/5] bg-neutral-900 overflow-hidden shadow-2xl border border-white/5 group/portrait">
                      <img 
                        src="/marcus-portrait-hq.png" 
                        alt="Marcus Vance"
                        className="w-full h-full object-cover grayscale brightness-110 contrast-110 group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Interactive UI Overlays */}
                      <div className="absolute top-8 left-8 bg-black/80 backdrop-blur-md border border-white/10 p-4 font-oswald text-[10px] tracking-widest uppercase">
                         <span className="text-[#FFD700]">PROTOCOL:</span> VERIFIED
                      </div>
                   </div>
                   {/* Cinematic background elements */}
                   <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#FFD700]/10 blur-[100px] rounded-full pointer-events-none" />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <LogoScrollTrack />
        <Methodology t={t} />
        <TheVoice t={t} />
        <WhoItIsFor t={t} />
        <TimelineSection />

        {/* Peek Inside Section with Mockup Animation */}
        <section className="py-32 bg-[#000000] border-t border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <SectionHeading 
              pre="The Dashboard"
              title="A Peek Inside the System"
            />
            <Reveal delay={0.2}>
              <div className="relative max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer" onClick={() => setIsEnrollOpen(true)}>
                <img src="/marcus_platform_mockup_v2_1776138837670.png" className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-[2s]" alt="Platform Mockup" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                {/* Custom Video Play Decoration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-[#FFD700] border-b-[12px] border-b-transparent ml-2" />
                  </div>
                </div>

                <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                   <div className="font-oswald text-white font-bold tracking-widest uppercase text-xs">
                      <span className="text-[#FFD700]">LIVE</span> DASHBOARD PREVIEW
                   </div>
                   <div className="flex gap-4">
                      {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-[#FFD700]/30" />)}
                   </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <TimelineSection t={t} />

        <ProgramReveal t={t} />

        <FAQSection t={t} />

        <FinalCTA t={t} />

      </main>

      <Disclaimer />

      <footer className="py-40 border-t border-white/5 bg-[#050505] relative z-20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-16 text-center md:text-left">
          <div className="flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-6 group mx-auto md:mx-0">
              <img src="/marcus-logo.png" alt="Marcus Vance Logo" className="h-32 w-auto object-contain" />
            </Link>
            <p className="text-[#2A2A2A] font-oswald uppercase tracking-[0.5em] text-[10px] font-bold">PRODUCED BY THE ALPHA COLLECTIVE © 2024</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-6 text-xs font-oswald uppercase tracking-[0.2em] text-[#3A3A3A] font-bold">
            <Link to="/marcus/giveaway" className="hover:text-[#FFD700] transition-all">{t.marcus.footer.giveaway}</Link>
            <Link to="/marcus/feedback" className="hover:text-[#FFD700] transition-all">{t.marcus.footer.feedback}</Link>
            <Link to="/philosophy" className="hover:text-[#FFD700] transition-all">{t.marcus.footer.philosophy}</Link>
            <Link to="/terms" className="hover:text-[#FFD700] transition-all">{t.marcus.footer.terms}</Link>
          </div>
        </div>
      </footer>

      {/* --- Modals --- */}
      <AnimatePresence>
        {(isEnrollOpen || showExitPopup) && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/98 backdrop-blur-3xl p-6">
            <div className="max-w-2xl w-full text-center relative">
               <button onClick={() => {setIsEnrollOpen(false); setShowExitPopup(false);}} className="absolute -top-12 right-0 text-white/20 hover:text-white font-oswald text-xs tracking-widest transition-colors uppercase font-bold">CLOSE [ESC]</button>
               <div className="text-5xl mb-8 animate-bounce">{isEnrollOpen ? '🗝️' : '⏳'}</div>
               <SectionHeading 
                 pre={isEnrollOpen ? t.marcus.enroll.popupTitle : "Wait Before You Exit"}
                 title={isEnrollOpen ? t.marcus.enroll.popupSubtitle : "Don't Leave Without Day 1"}
                 subtitle={isEnrollOpen ? t.marcus.enroll.benefitsTitle : "The challenge is 100% free. Day 1 takes 45 minutes and establishes your entire business direction. Don't waste the opportunity."}
               />
               <div className="flex flex-col gap-4 max-w-md mx-auto">
                 <input type="email" placeholder="YOUR@EMAIL.COM" className="bg-white/5 border border-white/10 p-5 font-oswald text-2xl text-[#FFD700] focus:border-[#FFD700] outline-none tracking-widest text-center font-bold" />
                 <button onClick={() => {setIsEnrollOpen(false); setShowExitPopup(false);}} className="bg-[#FFD700] text-black p-5 font-oswald text-2xl tracking-widest hover:bg-white transition-all uppercase italic font-bold">DECODE PROTOCOL →</button>
               </div>
               {showExitPopup && <p className="mt-8 text-[11px] text-white/20 font-oswald tracking-widest uppercase font-bold italic">This link expires when you close this window.</p>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default MarcusElitePage;
