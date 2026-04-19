import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Reveal } from '../../shared/components/Reveal';
import dynamicStats from '../../shared/utils/dynamicStats';
import { useLocale } from '../../shared/hooks/useLocale';
import LanguageSwitcher from '../../shared/components/LanguageSwitcher';

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

const TrustBarFull = () => {
  const { t } = useLocale();
  return (
    <div className="flex flex-col gap-4 mt-6 border-t border-white/5 pt-6">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] text-[#A3A3A3] font-oswald uppercase tracking-[0.2em]">
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
          {['1', '2', '3'].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-[#111] overflow-hidden">
              <img 
                src={`/avatars/avatar${i}.webp`} 
                className="w-full h-full object-cover grayscale" 
                alt="Alumni" 
              />
            </div>
          ))}
        </div>
        <p className="text-[10px] font-oswald uppercase tracking-widest text-[#C8C8C8] leading-tight text-left">
          <span className="text-[#C9A84C] font-bold">{t.marcus.heroStats}</span> <br/>
          <span className="opacity-50">{t.marcus.stats.joined || '2,400+ MEMBERS'}</span>
        </p>
      </div>
    </div>
  );
};

const BenefitsList = () => {
  const { t } = useLocale();
  const benefits = t.marcus.enroll.benefits || [
    "7-Day Implementation Roadmap",
    "Complete High-Converting Assets",
    "Private Discord Entry",
    "Exclusive Platform Access"
  ];
  return (
    <div className="flex flex-col gap-4 mt-8">
      <h4 className="font-oswald text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] font-bold">{t.marcus.enroll.benefitsTitle}</h4>
      <ul className="space-y-4">
        {benefits.map((b, i) => (
          <li key={i} className="flex items-start gap-4 text-[10px] md:text-[11px] font-oswald uppercase tracking-[0.15em] text-[#F5F5F5] italic leading-tight">
            <span className="text-[#C9A84C] text-lg leading-none">✓</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#C9A84C] z-[1000] origin-left"
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
  const { t } = useLocale();
  const [currentToast, setCurrentToast] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Fallback to English if translations missing
  const actions = t.marcus.ui.toast || {
    enrolled: 'just enrolled in Day 1',
    completed: 'completed Day 3 — funnel live',
    joined: 'just signed up',
    unlocked: 'finished Day 7 — unlocked access',
    started: 'started the challenge',
    referral: 'joined from a referral'
  };

  const toasts = [
    { i: 'JM', n: 'James M. · Manchester', a: actions.enrolled },
    { i: 'SC', n: 'Sophie C. · London', a: actions.completed },
    { i: 'AO', n: 'Ade O. · Birmingham', a: actions.joined },
    { i: 'RL', n: 'Rachel L. · Leeds', a: actions.unlocked },
    { i: 'FB', n: 'Fatou B. · Edinburgh', a: actions.started },
    { i: 'MK', n: 'Mark K. · Bristol', a: actions.referral },
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
          <div className="w-10 h-10 bg-white/5 border border-[#C9A84C]/20 rounded-full flex items-center justify-center font-bebas text-[#C9A84C]">
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

const SectionHeading = ({ pre, title, subtitle, subTitleItalic, centered = true }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    {pre && (
      <span className="font-oswald text-[#C9A84C] tracking-[0.3em] text-sm md:text-base uppercase mb-4 block font-bold">
        {pre}
      </span>
    )}
    <h2 className="font-oswald text-5xl md:text-8xl text-white leading-[0.9] uppercase mb-6 tracking-tight font-bold">
      {title}
    </h2>
    {subTitleItalic && (
      <p className="font-barlow-cond text-[#C9A84C] text-2xl md:text-3xl italic mb-6 tracking-widest font-medium">
        {subTitleItalic}
      </p>
    )}
    {subtitle && (
      <p className="text-[#A3A3A3] text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed font-barlow">
        {subtitle}
      </p>
    )}
  </div>
);

const ProblemSection = ({ t }) => {
  const data = t.marcus.problemSection;
  if (!data) return null;
  return (
    <section className="py-32 bg-[#000000] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-left mb-24 max-w-4xl">
          <Reveal>
             <span className="font-oswald text-[#C9A84C] tracking-[0.4em] text-sm uppercase mb-4 block font-bold">
               {data.pre}
             </span>
             <h2 className="font-oswald text-5xl md:text-8xl text-white leading-[1] uppercase tracking-tighter font-bold mb-8">
               {data.title1}
               <span className="text-[#C9A84C]">{data.titleGold1}</span>
               <br />
               {data.title2}
               <span className="text-[#C9A84C]">{data.titleGold2}</span>
             </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {data.items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="space-y-6 group">
                <div className="font-oswald text-5xl md:text-6xl text-[#C9A84C]/40 font-bold group-hover:text-[#C9A84C] transition-colors duration-500">
                  {item.index}
                </div>
                <h3 className="font-oswald text-xl md:text-2xl text-white leading-tight uppercase font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#A3A3A3] text-sm md:text-[15px] font-medium leading-relaxed uppercase tracking-widest break-words">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const LogoScrollTrack = () => {
  const brands = ["Stripe", "Shopify", "Meta", "Google", "Amazon", "Discord", "Skool", "Paypal"];
  return (
    <div className="bg-[#050505] border-y border-white/5 py-8 overflow-hidden">
      <div className="flex gap-16 animate-scroll-logos w-max px-8">
        {[...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex items-center gap-2 font-oswald text-sm md:text-lg text-white/20 uppercase tracking-[0.3em] font-bold hover:text-[#C9A84C]/30 transition-colors cursor-default whitespace-nowrap">
            <span className="text-xl">◈</span> {brand}
          </div>
        ))}
      </div>
    </div>
  );
};

const TimelineSection = ({ t, currency }) => {
  const steps = t.marcus.roadmap.stepsFull || [
    { day: "Day 01", title: "Offer & Customer Avatar", deliverable: "Offer Sentence", desc: "Define exactly who you help, what transformation you deliver, and how you communicate it in one precise sentence. This sentence becomes the headline of everything." },
    { day: "Day 02", title: "Lead Magnet + Capture Page Live", deliverable: "Live Page", desc: "Build a high-value lead magnet and launch your capture page. Your automated welcome email delivers it within minutes of opt-in." },
    { day: "Day 03", title: "5-Email Nurturing Sequence Activated", deliverable: "Email Logic", desc: "Configure the complete trust-building email sequence: delivery, empathy, proof, offer, close — running automatically 24/7." },
    { day: "Day 04", title: "Hubspot CRM Connected", deliverable: "CRM Wired", desc: "Wired to your funnel via automation. Every lead is tracked in a live pipeline. No warm prospect ever falls through the cracks again." },
    { day: "Day 05", title: "Sales Page Published", deliverable: "Sales Funnel", desc: "A complete sales page live online: transformation headline, value stack, proof, and CTAs — available to prospects globally." },
    { day: "Day 06", title: "Payment & Booking Active", deliverable: "Payout Mode", desc: "Payment or Cal.com connected to your offer page. You can now take payments or book qualified calls — completely automated." },
    { day: "Day 07", title: "Launch & First Traffic", deliverable: "Open for Biz", desc: "Full funnel tested on mobile and launched to your first real leads. Your business infrastructure is live. What comes next is shown on Day 7." }
  ];

  const targetDay = t.marcus.days[dynamicStats.targetDayIndex];
  const roadmapSubtitleTranslated = t.marcus.ui.commonHeadings?.roadmapSubtitle?.replace('{day}', targetDay);

  return (
    <section className="py-32 bg-[#000000]" id="roadmap">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          pre={t.marcus.ui.commonHeadings?.roadmapPre || t.marcus.programme.stage01Badge}
          title={t.marcus.ui.commonHeadings?.roadmapTitle || "The 7-Day Challenge Roadmap"}
          subTitleItalic={t.marcus.ui.commonHeadings?.roadmapSubtitleItalic}
          subtitle={roadmapSubtitleTranslated || "Each day produces a live, working asset. By Day 7, you have a complete business — not a notebook of ideas."}
        />
        <div className="relative pl-8 md:pl-16 border-l border-white/10 space-y-12">
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="relative">
                <div className="absolute -left-[35px] md:-left-[67px] top-6 w-3 h-3 bg-[#C9A84C] rounded-full shadow-[0_0_15px_#C9A84C]" />
                <div className="mv-glass-card p-10 group relative">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="font-oswald text-[#C9A84C] text-3xl tracking-widest font-bold">{step.day}</span>
                        <span className="font-oswald bg-[#C9A84C]/10 text-[#C9A84C] text-[10px] font-bold px-3 py-1 rounded uppercase tracking-[0.2em]">{step.deliverable}</span>
                    </div>
                    <h3 className="font-oswald text-3xl text-white mb-4 group-hover:text-[#C9A84C] transition-colors font-bold uppercase">{step.title}</h3>
                    <p className="text-[#A3A3A3] text-lg leading-relaxed max-w-2xl font-light">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const QualificationBridge = ({ t }) => (
  <section className="py-24 bg-gradient-to-b from-black to-[#050505] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
      <Reveal>
        <div className="inline-block px-8 py-4 border border-[#C9A84C]/20 bg-[#C9A84C]/5 mb-10">
          <span className="font-oswald text-[#C9A84C] text-sm md:text-base font-bold tracking-[0.5em] uppercase">
            {t.marcus.ui.beginningBadge || '7 DAYS TO BUILD. A LIFETIME TO SCALE.'}
          </span>
        </div>
        <h2 className="font-oswald text-4xl md:text-6xl text-white mb-8 uppercase font-bold tracking-tight italic">
          {t.marcus.ui.beginning.split('BEGINNING')[0]}<span className="text-[#C9A84C]">BEGINNING.</span>
        </h2>
        <p className="text-[#6A6A6A] text-lg max-w-2xl mx-auto font-light leading-relaxed uppercase tracking-widest">
          {t.marcus.ui.beginningSubtitle || 'Complete Stage 01 to unlock the full digital business education library.'}
        </p>
        <div className="mt-16 flex justify-center">
          <div className="w-1 h-24 bg-gradient-to-b from-[#C9A84C] to-transparent" />
        </div>
      </Reveal>
    </div>
  </section>
);

const FAQSection = ({ t }) => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [activeFAQ, setActiveFAQ] = useState(null);

  const categories = t.marcus.faqCategories;
  const faqData = t.marcus.faq;

  return (
    <section className="py-32 bg-[#000000]" id="faq">
      <div className="max-w-4xl mx-auto px-8">
        <SectionHeading 
          pre={t.marcus.ui.commonHeadings?.faqPre || "Common Questions"}
          title={t.marcus.ui.commonHeadings?.faqTitle || "The Protocol Audit"}
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
                  ? 'bg-[#C9A84C] text-black border-[#C9A84C]'
                  : 'bg-transparent text-[#A3A3A3] border-white/10 hover:border-[#C9A84C]/50'
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
                    <span className={`font-oswald text-lg uppercase tracking-wide transition-all font-bold ${activeFAQ === i ? 'text-[#C9A84C]' : 'text-white/80 group-hover:text-white'}`}>{f.q}</span>
                    <span className="text-[#C9A84C] text-2xl ml-4">{activeFAQ === i ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence>
                    {activeFAQ === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <p className="text-[#A3A3A3] text-sm leading-relaxed pb-10 font-normal max-w-2xl font-light">{f.a}</p>
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

const LegacyLibrary = ({ t, currency }) => {
  const legacyItems = t.marcus.legacyLibrary.items;
  const legacySubtotal = legacyItems.reduce((acc, item) => acc + parseInt(item.p.replace(/\s/g, '')), 0);
  const targetDay = t.marcus.days[dynamicStats.targetDayIndex];
  const priceRevealTranslated = t.marcus.legacyLibrary.priceReveal.replace('{day}', targetDay);

  return (
  <section className="py-32 md:py-48 bg-[#000000] border-y border-white/5 relative overflow-hidden" id="library">
    <div className="max-w-7xl mx-auto px-8 relative z-10">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        {/* Left: Value Stack */}
        <div className="w-full lg:w-7/12 order-2 lg:order-1">
          <Reveal>
            <div className="font-oswald text-[#C9A84C]/50 text-[10px] tracking-[0.4em] font-bold uppercase mb-8 border-l-2 border-[#C9A84C] pl-4">
              {t.marcus.legacyLibrary.valueStack}
            </div>
          </Reveal>

          <div className="space-y-0">
            {t.marcus.legacyLibrary.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group py-8 border-b border-white/5 hover:bg-white/[0.01] transition-all px-4 -mx-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-oswald text-xl md:text-2xl text-white font-bold tracking-tight uppercase group-hover:text-[#C9A84C] transition-colors duration-500">
                      {item.t}
                    </h3>
                    <div className="font-oswald text-lg md:text-xl text-[#C9A84C] font-bold tracking-tighter">
                      {currency}{item.p}
                    </div>
                  </div>
                  <p className="text-[#6A6A6A] font-oswald text-[10px] md:text-xs tracking-wider uppercase font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                    {item.d}
                  </p>
                </div>
              </Reveal>
            ))}

            {/* Subtotal Bridge */}
            <Reveal delay={0.7}>
              <div className="py-8 flex justify-between items-center opacity-30">
                <span className="font-oswald text-xs text-white tracking-[0.3em] uppercase">MODULES SUB-TOTAL</span>
                <span className="font-oswald text-xl text-white tracking-tighter">{currency} {legacySubtotal.toLocaleString()}</span>
              </div>
            </Reveal>

            {/* Expansion Line */}
            <Reveal delay={0.8}>
              <div className="py-4 flex justify-between items-center border-t-2 border-dashed border-white/10">
                <span className="font-oswald text-[10px] text-[#A3A3A3] tracking-[0.4em] uppercase">+ 42 MORE SECRETS & MONTHLY UPDATES</span>
                <span className="font-oswald text-xs text-[#C9A84C] tracking-widest font-bold">PRICELESS</span>
              </div>
            </Reveal>

            {/* Final Total */}
            <Reveal delay={0.9}>
              <div className="mt-12 p-8 bg-white/[0.02] border border-[#C9A84C]/20 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <div className="font-oswald text-[10px] text-[#C9A84C] tracking-[0.4em] font-bold uppercase mb-1">
                    {t.marcus.legacyLibrary.totalLabel}
                  </div>
                  <div className="font-oswald text-[#A3A3A3] text-[9px] tracking-[0.2em] uppercase italic">
                    * Including all upcoming infrastructure updates
                  </div>
                </div>
                <div className="font-oswald text-5xl md:text-6xl text-white font-bold tracking-tighter">
                  {currency} {t.marcus.legacyLibrary.totalValue}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right: Context & Narrative */}
        <div className="w-full lg:w-5/12 order-1 lg:order-2 lg:sticky lg:top-32">
          <Reveal>
             <div className="font-oswald text-[#C9A84C] text-[12px] tracking-[0.5em] font-bold uppercase mb-8 italic">
               THE FULL PROTOCOL
             </div>
             <h2 className="font-oswald text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tighter leading-[0.9] uppercase mb-12 italic">
               {t.marcus.legacyLibrary.title}
             </h2>
             <div className="w-20 h-1 bg-[#C9A84C] mb-12" />
             <p className="text-[#A3A3A3] text-lg md:text-xl font-light leading-relaxed mb-12 italic uppercase tracking-wide">
               {t.marcus.legacyLibrary.subTitle}
             </p>
             
             <div className="p-8 border border-white/5 bg-white/[0.01]">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] font-bold">!</div>
                   <div className="font-oswald text-xs text-white tracking-widest uppercase font-bold">ALUMNI RESTRICTIONS</div>
                </div>
                <p className="text-[#6A6A6A] text-[10px] leading-loose tracking-[0.1em] uppercase font-bold">
                  {t.marcus.legacyLibrary.accessNotice}
                </p>
             </div>
          </Reveal>
        </div>
      </div>
    </div>

    {/* Footer Disclaimer Strip */}
    <div className="mt-32 w-full bg-white text-black py-4 overflow-hidden relative z-20">
       <div className="flex whitespace-nowrap animate-marquee">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex items-center mx-8">
               <span className="font-oswald text-[10px] font-black tracking-[0.3em] uppercase underline mr-4">WARNING:</span>
               <span className="font-oswald text-[10px] font-bold tracking-[0.2em] uppercase italic">
                 {priceRevealTranslated} — {priceRevealTranslated} — {priceRevealTranslated}
               </span>
            </div>
          ))}
       </div>
    </div>

    {/* Background visual accents */}
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C9A84C]/[0.03] blur-[150px] -z-10 rounded-full" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C9A84C]/[0.02] blur-[120px] -z-10 rounded-full translate-y-1/2 -translate-x-1/4" />
  </section>
  );
};

const FinalCTA = ({ t }) => (
  <section className="py-40 bg-[#000000] text-center border-t border-white/5">
    <div className="max-w-4xl mx-auto px-8 relative">
      <Reveal>
        <h2 className="font-oswald text-6xl md:text-9xl text-white mb-10 leading-[0.9] uppercase font-bold pr-4">{t.marcus.finalCTA.title}</h2>
        <div className="flex flex-col items-center gap-10">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#C9A84C] text-black px-16 py-8 font-oswald text-3xl tracking-widest hover:bg-white transition-all shadow-[0_0_60px_rgba(201,168,76,0.2)] uppercase font-bold">{t.marcus.ctaPrimary}</button>
          
          <div className="flex flex-col md:flex-row items-center gap-10 opacity-70">
            <div className="flex items-center gap-4">
               <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-[#111] overflow-hidden"><img src={`/avatars/avatar${(i%3)+1}.webp`} /></div>)}
               </div>
               <div className="text-left">
                  <div className="font-oswald text-white text-[11px] font-bold tracking-[0.2em] uppercase">{t.marcus.finalCTA.community}</div>
                  <div className="font-oswald text-[#C9A84C] text-[10px] font-bold tracking-[0.2em] uppercase">{t.marcus.finalCTA.successRate}</div>
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
        <div className="font-oswald text-[#C9A84C] tracking-[0.4em] text-xs font-bold mb-12 uppercase">{t.marcus.ui.voice}</div>
        <blockquote className="font-oswald text-4xl md:text-6xl text-white leading-[1.1] mb-12 uppercase font-bold tracking-tight">
          "{t.marcus.ui.voiceQuote?.line1 || "The digital era doesn't reward hard work."} <br/>
          {t.marcus.ui.voiceQuote?.line2?.replace('{highLeverage}', '') || "It rewards "} <span className="text-[#C9A84C]">{t.marcus.ui.voiceQuote?.highLeverage || "High-Leverage Systems"}</span> {t.marcus.ui.voiceQuote?.line2?.split('}')[1] || " that run while you sleep."}"
        </blockquote>
        <div className="w-12 h-1px bg-[#C9A84C]/30 mx-auto mb-12" />
        <p className="text-[#A3A3A3] text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          {t.marcus.ui.voiceQuote?.bio || "I've spent the last decade distilling complex wealth generation models into one repeatable protocol. The 7-Day Challenge isn't just a course—it's your baptism into the elite digital economy."}
        </p>
      </Reveal>
    </div>
    {/* Background accent */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[#C9A84C]/[0.02] blur-[150px] -z-10" />
  </section>
);


const WhoItIsFor = ({ t }) => (
  <section className="py-32 bg-[#050505] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-8">
      <SectionHeading 
        pre={t.marcus.ui.commonHeadings?.criteriaPre || "Selection Criteria"}
        title={t.marcus.ui.commonHeadings?.criteriaTitle || "Who This Is For"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {(t.marcus.whoItIsFor || [
          { 
            t: "THE STRATEGIST", 
            d: "You have a deep skill or expertise but no system to monetize it at scale. You are tired of trading hours for dollars.",
            i: "🎯"
          },
          { 
            t: "THE VISIONARY", 
            d: "You see the shift in the digital economy and want to build a brand that carries your legacy, not just a job.",
            i: "👁️"
          },
          { 
            t: "THE HIGH-PERFORMER", 
            d: "You are already successful in your field but feel capped. You need high-leverage systems to break through to $50k+ months.",
            i: "🚀"
          }
        ]).map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="mv-glass-card p-10 border border-white/5 hover:border-[#C9A84C]/30 transition-all group h-full">
              <div className="text-4xl mb-6">{item.i}</div>
              <h3 className="font-oswald text-2xl text-white mb-4 tracking-wider font-bold uppercase group-hover:text-[#C9A84C] transition-colors">{item.t}</h3>
              <p className="text-[#A3A3A3] text-sm leading-relaxed font-light">{item.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const MarcusElitePage = () => {
  const { t, currency, loading, currentLocale } = useLocale();
  const navigate = useNavigate();
  const location = useLocation();
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasTriggeredPopup, setHasTriggeredPopup] = useState(false);

  // Form State
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEnrollSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      // Logic for sticky nav
      setIsScrolled(window.scrollY > 50);

      // Logic for 50% scroll trigger
      if (!hasTriggeredPopup) {
        const scrollPosition = window.scrollY + window.innerHeight;
        const totalHeight = document.documentElement.scrollHeight;
        if (scrollPosition / totalHeight > 0.5) {
          setHasTriggeredPopup(true);
          setIsEnrollOpen(true);
        }
      }
    };

    const handleMouseLeave = (e) => {
        if (e.clientY <= 0 && !hasTriggeredPopup) {
            setHasTriggeredPopup(true);
            setShowExitPopup(true);
        }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasTriggeredPopup]);

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

  const homePath = currentLocale === 'default' ? '/' : `/${currentLocale}`;
  const getLocalizedPath = (path) => currentLocale === 'default' ? path : `${path}/${currentLocale}`;

  if (loading) return null;

  return (
    <div className="bg-[#000000] min-h-screen text-[#F5F5F5] font-['Barlow'] overflow-x-hidden group/main">
      <ScrollProgress />
      <UrgencyBar t={t} />
      <ToastNotification />

      {/* --- Header / Nav --- */}
      <nav className={`fixed top-[20px] left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link to={homePath} className="flex items-center gap-4 group">
            <img src="/marcus-logo.png" alt="Marcus Vance Logo" className="h-20 md:h-24 w-auto object-contain transition-all" />
          </Link>
          
          <div className="hidden lg:flex items-center gap-10 font-oswald text-[11px] tracking-[0.25em] font-bold uppercase text-[#A3A3A3]">
            <a href="#library" onClick={(e) => handleNav(e, 'library')} className="hover:text-white transition-colors">{t.marcus.nav.method}</a>
            <Link to={getLocalizedPath('/philosophy')} className="hover:text-white transition-colors">{t.marcus.nav.philosophy}</Link>
            <a href="#roadmap" onClick={(e) => handleNav(e, 'roadmap')} className="hover:text-white transition-colors">{t.marcus.nav.challenge}</a>
            <a href="#faq" onClick={(e) => handleNav(e, 'faq')} className="hover:text-white transition-colors">{t.marcus.nav.faq}</a>
            <LanguageSwitcher variant="marcus" />
            <button onClick={() => {setIsEnrollOpen(true); setHasTriggeredPopup(true);}} className="bg-[#C9A84C] text-black px-6 py-2.5 hover:bg-white transition-all shadow-lg font-bold whitespace-nowrap ml-4">{t.marcus.navStartBtn}</button>
          </div>

          <div className="lg:hidden text-right flex items-center gap-4">
             <button onClick={() => {setIsEnrollOpen(true); setHasTriggeredPopup(true);}} className="bg-[#C9A84C] text-black px-4 py-2 text-[10px] font-bold tracking-widest uppercase whitespace-nowrap">{t.marcus.ui.startBtn}</button>
             <LanguageSwitcher variant="marcus" />
          </div>
        </div>
      </nav>

      <main>
        {/* --- Hero Section --- */}
        <section className="relative pt-[120px] lg:pt-[220px] pb-32 overflow-hidden" id="about">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-[#C9A84C]/[0.05] blur-[150px] rounded-full -translate-y-1/2 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center text-left">
              <div>
                <Reveal>
                  <div className="inline-flex items-center gap-3 border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-4 py-1.5 rounded-full mb-8">
                    <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse" />
                    <span className="font-oswald text-[#C9A84C] text-[10px] font-bold tracking-[0.4em] uppercase">{t.marcus.heroPreHeader}</span>
                  </div>
                </Reveal>
                
                <Reveal delay={0.1}>
                  <h1 className="font-barlow-cond text-[13vw] min-[400px]:text-[64px] md:text-[90px] lg:text-[110px] leading-[0.85] text-white tracking-tighter mb-10 uppercase font-extrabold break-words">
                    {t.marcus.heroTitle.part1}<br/>
                    <span className="mv-text-gold-gradient">{t.marcus.heroTitle.part2}</span><br/>
                    {t.marcus.heroTitle.part3}
                  </h1>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="flex flex-col gap-5 mb-12">
                    {t.marcus.heroBullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-4 group">
                        <div className="w-1.5 h-1.5 bg-[#C9A84C] group-hover:scale-125 transition-transform" />
                        <span className="font-oswald text-white/50 text-xs md:text-[13px] tracking-[0.15em] uppercase group-hover:text-[#C9A84C] transition-colors leading-none">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                      <button 
                        onClick={() => {setIsEnrollOpen(true); setHasTriggeredPopup(true);}} 
                        className="w-full sm:w-auto bg-[#C9A84C] text-black px-12 py-6 font-oswald text-xl tracking-widest hover:bg-white transition-all shadow-2xl uppercase font-extrabold mv-glow whitespace-nowrap"
                      >
                        {t.marcus.ctaPrimary}
                      </button>
                  </div>
                </Reveal>

                <Reveal delay={0.4}>
                  <div className="mt-12 flex items-center gap-10 border-t border-white/5 pt-12">
                     <div className="text-left">
                        <div className="font-oswald text-white text-2xl font-bold tracking-tighter">1,031</div>
                        <div className="font-oswald text-[#6A6A6A] text-[9px] uppercase tracking-[0.2em] font-bold">
                           {t.marcus.heroStats.replace('{count}', '').trim()}
                        </div>
                     </div>
                     <div className="text-left">
                        <div className="font-oswald text-[#C9A84C] text-2xl font-bold tracking-tighter">93%</div>
                        <div className="font-oswald text-[#6A6A6A] text-[9px] uppercase tracking-[0.2em] font-bold">{t.marcus.heroCommunity}</div>
                     </div>
                  </div>
                </Reveal>
              </div>

              <div className="relative">
                <Reveal delay={0.3} direction="left">
                   <div className="relative z-10 w-full aspect-[4/5] bg-neutral-900 overflow-hidden shadow-2xl border border-white/5 group/portrait">
                      <img 
                        src="/marcus-standing.webp" 
                        alt="Marcus Vance"
                        className="w-full h-full object-cover grayscale brightness-110 contrast-110 group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Interactive UI Overlays */}
                      <div className="absolute top-8 left-8 bg-black/80 backdrop-blur-md border border-white/10 p-4 font-oswald text-[10px] tracking-widest uppercase">
                         <span className="text-[#C9A84C]">PROTOCOL:</span> VERIFIED
                      </div>
                   </div>
                   {/* Cinematic background elements */}
                   <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#C9A84C]/10 blur-[100px] rounded-full pointer-events-none" />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <LogoScrollTrack />
        <ProblemSection t={t} />
        <TimelineSection t={t} currency={currency} />
        <LegacyLibrary t={t} currency={currency} />
        
        {/* Peek Inside Section with Mockup Animation */}
        <section className="py-32 bg-[#000000] border-t border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
          <SectionHeading 
            pre={t.marcus.ui.commonHeadings?.dashboardPre || "The Dashboard"}
            title={t.marcus.ui.commonHeadings?.dashboardTitle || "A Peek Inside the System"}
          />
            <Reveal delay={0.2}>
              <div className="relative max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer" onClick={() => {setIsEnrollOpen(true); setHasTriggeredPopup(true);}}>
                <img src="/marcus_platform_mockup_v2_1776138837670.png" className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-[2s]" alt="Platform Mockup" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                {/* Custom Video Play Decoration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-[#C9A84C] border-b-[12px] border-b-transparent ml-2" />
                  </div>
                </div>

                <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                   <div className="font-oswald text-white font-bold tracking-widest uppercase text-xs">
                      <span className="text-[#C9A84C]">LIVE</span> {t.marcus.ui.livePreview.replace('LIVE', '').trim()}
                   </div>
                   <div className="flex gap-4">
                      {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-[#C9A84C]/30" />)}
                   </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <TheVoice t={t} />
        <WhoItIsFor t={t} />
        <QualificationBridge t={t} />



        <FAQSection t={t} />

        <FinalCTA t={t} />

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
                {t.marcus.ui.tagline}
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
              <h4 className="font-oswald text-white text-[10px] tracking-[0.4em] uppercase font-bold mb-6">{t.marcus.ui.resources}</h4>
              <ul className="space-y-3">
                <li><Link to={getLocalizedPath('/marcus/giveaway')} className="text-[#A1A1A1] hover:text-[#C9A84C] font-oswald text-[10px] tracking-widest transition-all uppercase">{t.marcus.footer.giveaway}</Link></li>
                <li><Link to={getLocalizedPath('/marcus/feedback')} className="text-[#A1A1A1] hover:text-[#C9A84C] font-oswald text-[10px] tracking-widest transition-all uppercase">{t.marcus.footer.feedback}</Link></li>
                <li><Link to={getLocalizedPath('/philosophy')} className="text-[#A1A1A1] hover:text-[#C9A84C] font-oswald text-[10px] tracking-widest transition-all uppercase">{t.marcus.footer.philosophy}</Link></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div className="space-y-4">
              <h4 className="font-oswald text-white text-[10px] tracking-[0.4em] uppercase font-bold mb-6">{t.marcus.ui.compliance}</h4>
              <ul className="space-y-3">
                <li><Link to={getLocalizedPath('/terms')} className="text-[#A1A1A1] hover:text-[#C9A84C] font-oswald text-[10px] tracking-widest transition-all uppercase">{t.marcus.footer.terms}</Link></li>
                <li><Link to={getLocalizedPath('/privacy')} className="text-[#A1A1A1] hover:text-[#C9A84C] font-oswald text-[10px] tracking-widest transition-all uppercase">{t.marcus.footer.privacy}</Link></li>
                <li><Link to={getLocalizedPath('/guarantee')} className="text-[#A1A1A1] hover:text-[#C9A84C] font-oswald text-[10px] tracking-widest transition-all uppercase">{t.marcus.footer.guarantee}</Link></li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="space-y-4 text-left">
              <h4 className="font-oswald text-white text-[10px] tracking-[0.4em] uppercase font-bold mb-6">{t.marcus.ui.headquarters}</h4>
              <p className="text-[#A1A1A1] font-oswald text-[10px] tracking-widest uppercase leading-loose whitespace-pre-line">
                {t.marcus.footer.address}
              </p>
              <div className="pt-4">
                <Link to={getLocalizedPath('/contact')} className="text-[#C9A84C] hover:text-white font-oswald text-[10px] tracking-widest transition-all uppercase font-bold">{t.marcus.footer.contact}</Link>
              </div>
            </div>
          </div>

          <div className="space-y-8 pt-12 border-t border-white/5">
            <p className="text-[#6A6A6A] font-barlow text-[9px] md:text-[10px] tracking-wider uppercase leading-relaxed max-w-6xl">
              {t.marcus.footer.platformDisclaimer}
            </p>
            <p className="text-[#888888] font-barlow text-[9px] md:text-[10px] tracking-wider uppercase leading-relaxed max-w-6xl">
              {t.marcus.footer.personaDisclosure}
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12">
               <span className="text-[#6A6A6A] font-oswald text-[9px] tracking-[0.2em] uppercase font-bold">
                 {t.marcus.footer.rights}
               </span>
               <div className="flex gap-8">
                 <a href="#" className="text-[#A1A1A1] hover:text-[#C9A84C] font-oswald text-[9px] tracking-widest uppercase transition-all">INSTAGRAM</a>
                 <a href="#" className="text-[#A1A1A1] hover:text-[#C9A84C] font-oswald text-[9px] tracking-widest uppercase transition-all">X (TWITTER)</a>
                 <a href="#" className="text-[#A1A1A1] hover:text-[#C9A84C] font-oswald text-[9px] tracking-widest uppercase transition-all">YOUTUBE</a>
               </div>
            </div>
          </div>
        </div>
      </footer>

      {/* --- Modals --- */}
      <AnimatePresence>
        {(isEnrollOpen || showExitPopup) && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/98 backdrop-blur-3xl p-4 md:p-12"
          >
             <motion.div 
               initial={{ scale: 0.95, opacity: 0, y: 20 }}
               animate={{ scale: 1, opacity: 1, y: 0 }}
               exit={{ scale: 0.95, opacity: 0, y: 20 }}
               className="bg-[#0A0A0A] border border-white/5 w-full max-w-6xl h-full md:h-auto max-h-[92dvh] flex flex-col md:flex-row overflow-hidden shadow-2xl relative"
             >
                {/* Close Button */}
                <button 
                  onClick={() => {setIsEnrollOpen(false); setShowExitPopup(false);}} 
                  className="absolute top-6 right-6 z-[210] p-2 bg-black/50 hover:bg-white/10 transition-colors rounded-full text-white/40 hover:text-white"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
 
                {/* Left Side: Cinematic Branding/Benefits */}
                <div className="hidden lg:flex w-5/12 bg-gradient-to-br from-[#121212] to-[#0A0A0A] p-12 flex-col justify-between border-r border-white/5 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/5 blur-[120px] -translate-y-1/2 translate-x-1/2 rounded-full" />
                   
                   <div className="relative z-10">
                      <img src="/marcus-logo.png" alt="Marcus Vance" className="h-16 w-auto object-contain mb-12 opacity-80" />
                      <div className="font-oswald text-[#C9A84C] text-[10px] tracking-[0.4em] font-bold uppercase mb-4">
                        {isEnrollOpen ? (t.marcus.enroll.prestigeBadge || "EXCLUSIVE SEAT") : (t.marcus.ui.exitModal?.badge || "URGENT PROTOCOL")}
                      </div>
                      <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white tracking-tight leading-none uppercase mb-6 italic">
                        {isEnrollOpen ? t.marcus.enroll.popupTitle : (t.marcus.ui.exitModal?.title || "DON'T WASTE THE OPPORTUNITY")}
                      </h2>
                      <p className="text-[#A3A3A3] text-sm italic font-light uppercase tracking-widest leading-relaxed mb-8">
                        {isEnrollOpen ? t.marcus.enroll.popupSubtitle : (t.marcus.ui.exitModal?.subtitle || "THE CHALLENGE IS 100% FREE. RECOVER YOUR PROTOCOL.")}
                      </p>
                      
                      <BenefitsList />
                   </div>

                   <div className="relative z-10 pt-12 border-t border-white/5 flex items-center justify-between">
                     <p className="text-[10px] font-oswald uppercase tracking-[0.4em] text-[#3A3A3A]">THE ALPHA COLLECTIVE © 2025</p>
                     <div className="flex items-center gap-2 text-white/10 font-oswald text-[8px] tracking-[0.2em] font-bold uppercase">
                       <span>SECURITY: LEVEL A</span>
                       <span className="w-1 h-1 rounded-full bg-white/5" />
                       <span>{t.marcus.ui.encrypted}</span>
                     </div>
                   </div>
                </div>
 
                {/* Right Side: Primary Enrollment Form */}
                <div className="flex-1 flex flex-col p-8 md:p-16 overflow-y-auto no-scrollbar bg-[#0A0A0A]">
                   <div className="lg:hidden mb-10 text-left">
                      <div className="font-oswald text-[#C9A84C] text-[10px] tracking-[0.4em] font-bold uppercase mb-4">
                        {isEnrollOpen ? (t.marcus.enroll.prestigeBadge || "EXCLUSIVE SEAT") : (t.marcus.ui.exitModal?.badge || "URGENT PROTOCOL")}
                      </div>
                      <h2 className="font-oswald text-3xl font-bold text-white tracking-tight leading-none uppercase italic">
                        {isEnrollOpen ? t.marcus.enroll.popupTitle : (t.marcus.ui.exitModal?.title || "DON'T WASTE THE OPPORTUNITY")}
                      </h2>
                   </div>

                    {!submitStatus ? (
                      <form onSubmit={handleEnrollSubmit} className="space-y-8 mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2 text-left">
                            <label className="font-oswald text-[10px] text-white/30 tracking-[0.3em] font-bold uppercase ml-1">{t.marcus.enroll.firstName}</label>
                            <input 
                              name="firstName"
                              type="text" 
                              required
                              value={formData.firstName}
                              onChange={handleInputChange}
                              placeholder="EX: MARCUS" 
                              className="w-full bg-white/5 border border-white/5 p-4 md:p-5 font-oswald text-base text-white focus:border-[#C9A84C] outline-none tracking-widest transition-all placeholder:text-white/5"
                            />
                          </div>
                          <div className="space-y-2 text-left">
                            <label className="font-oswald text-[10px] text-white/30 tracking-[0.3em] font-bold uppercase ml-1">{t.marcus.enroll.lastName}</label>
                            <input 
                              name="lastName"
                              type="text" 
                              required
                              value={formData.lastName}
                              onChange={handleInputChange}
                              placeholder="EX: VANCE" 
                              className="w-full bg-white/5 border border-white/5 p-4 md:p-5 font-oswald text-base text-white focus:border-[#C9A84C] outline-none tracking-widest transition-all placeholder:text-white/5"
                            />
                          </div>
                        </div>

                        <div className="space-y-2 text-left">
                          <label className="font-oswald text-[10px] text-white/30 tracking-[0.3em] font-bold uppercase ml-1">{t.marcus.enroll.emailLabel}</label>
                          <input 
                            name="email"
                            type="email" 
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="EX: MARCUS@VANCE.COM" 
                            className="w-full bg-white/5 border border-white/5 p-4 md:p-5 font-oswald text-base text-white focus:border-[#C9A84C] outline-none tracking-widest transition-all placeholder:text-white/5"
                          />
                        </div>

                        <div className="flex items-start gap-4 group cursor-pointer pt-4" onClick={() => {}}>
                           <div className="mt-0.5 w-5 h-5 border border-white/10 rounded flex items-center justify-center group-hover:border-[#C9A84C]/50 transition-colors shrink-0">
                              <div className="w-2.5 h-2.5 bg-[#C9A84C] rounded-sm opacity-60" />
                           </div>
                           <p className="font-oswald text-[9px] text-[#6A6A6A] tracking-[0.2em] uppercase italic leading-loose">
                              {t.marcus.enroll.agreement}
                           </p>
                        </div>

                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#C9A84C] text-black font-oswald text-xs md:text-sm font-black tracking-[0.2em] md:tracking-[0.4em] py-5 md:py-6 rounded-none uppercase hover:bg-white transition-all duration-700 shadow-[0_0_50px_rgba(201,168,76,0.2)] active:scale-[0.98] disabled:opacity-50"
                        >
                           {isSubmitting ? (t.marcus.ui.processing || "PROCESSING PROTOCOL...") : t.marcus.enroll.submitBtn}
                        </button>
                      </form>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
                        <div className="w-20 h-20 bg-[#C9A84C] flex items-center justify-center text-black text-4xl shadow-[0_0_40px_rgba(201,168,76,0.2)]">✓</div>
                        <h2 className="font-oswald text-4xl text-[#C9A84C] uppercase font-bold tracking-tight">
                          {submitStatus === 'success' ? (t.marcus.ui.successTitle || "PROTOCOL INITIATED") : "ERROR IN TRANSMISSION"}
                        </h2>
                        <p className="text-[#A3A3A3] text-sm leading-relaxed max-w-sm font-light uppercase tracking-widest italic">
                          {submitStatus === 'success' 
                            ? (t.marcus.ui.successDesc || "Check your email. Your Day 1 roadmap is being prepared.") 
                            : "There was an issue processing your enrollment. Please try again."}
                        </p>
                        <button 
                          onClick={() => {setIsEnrollOpen(false); setShowExitPopup(false); setSubmitStatus(null); setFormData({ firstName: '', lastName: '', email: '' });}}
                          className="mt-8 border border-[#C9A84C] text-[#C9A84C] px-8 md:px-10 py-3 font-oswald text-lg md:text-xl tracking-wider hover:bg-[#C9A84C] hover:text-black transition-all font-bold uppercase"
                        >
                          {t.marcus.ui.close || "CLOSE"}
                        </button>
                      </div>
                    )}

                   {/* Benefits Checkpoints */}
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-8 border-t border-white/5">
                      {t.marcus.enroll.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                           <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#C9A84C]/50 shrink-0" />
                           <span className="font-oswald text-[10px] text-[#A3A3A3] tracking-widest uppercase leading-tight font-bold">{benefit}</span>
                        </div>
                      ))}
                   </div>
                   <TrustBarFull />
                   
                   {showExitPopup && (
                     <p className="mt-12 text-center text-[10px] text-white/20 font-oswald tracking-[0.3em] uppercase font-bold italic">
                       {t.marcus.ui.exitModal?.disclaimer || "THIS TRANSMISSION EXPIRES WHEN YOU CLOSE THIS WINDOW."}
                     </p>
                   )}
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default MarcusElitePage;
