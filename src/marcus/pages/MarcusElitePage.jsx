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

const UrgencyBar = () => (
  <div className="animate-shinebar py-2 px-6 text-center text-xs font-oswald font-bold tracking-widest text-black uppercase relative z-[1000]">
    🔒 The 7-Day Challenge is free and open now — <span className="underline">No credit card required</span>
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
    <h2 className="font-bebas text-5xl md:text-8xl text-white leading-[0.9] uppercase mb-6 tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-[#A3A3A3] text-lg md:text-xl font-light italic max-w-2xl mx-auto leading-relaxed">
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
                        <span className="font-bebas text-[#FFD700] text-3xl tracking-widest">{step.day}</span>
                        <span className="font-oswald bg-[#FFD700]/10 text-[#FFD700] text-[10px] font-bold px-3 py-1 rounded uppercase tracking-[0.2em]">{step.deliverable}</span>
                    </div>
                    <h3 className="font-bebas text-3xl text-white mb-4 group-hover:text-[#FFD700] transition-colors">{step.title}</h3>
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

const WhoItIsFor = () => {
  const profiles = [
    {
      label: "🎯 Audience 1",
      title: "The Employee Ready to Break Free",
      p: "28–42 years old. Frustrated by limited income and lack of autonomy. Dreams of building an online business but doesn't know where to start.",
      q: "You're not lazy. You're just exhausted from building someone else's dream.",
      fit: "The protocol lets you learn at your own pace alongside your job. The challenge proves the method works — before you invest anything."
    },
    {
      label: "📈 Audience 2",
      title: "The Struggling Side-Hustler",
      p: "25–45 years old. Stuck under £3,000/month. Looking for concrete methods to professionalize and scale beyond solo grit.",
      q: "You didn't leave the 9-to-5 to work 12-hour days for uncertain income.",
      fit: "Our systems cover the full digital business journey. Find exactly what you need to level up without restarting over."
    },
    {
      label: "🎬 Audience 3",
      title: "The Creator Looking to Monetize",
      p: "20–35 years old. 1k–50k followers. Engaged community but no reliable revenue stream beyond random brand deals.",
      q: "You've built influence — now it's time to turn it into real, sustainable equity.",
      fit: "Learn to build digital products and sales funnels around your audience. Also a perfect fit for the 40% affiliate program."
    }
  ];

  return (
    <section className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          pre="Target Profile"
          title="You're Exactly Who This Was Built For"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="mv-glass-card p-10 flex flex-col h-full border-t border-t-white/10 group">
                <span className="font-oswald text-[#FFD700] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">{p.label}</span>
                <h3 className="font-bebas text-3xl text-white mb-4 tracking-wide group-hover:text-[#FFD700] transition-colors">{p.title}</h3>
                <p className="text-[#A3A3A3] text-sm mb-6 border-b border-white/5 pb-6">{p.p}</p>
                <p className="text-[#FFD700]/70 text-sm italic mb-8 border-l-2 border-[#FFD700]/30 pl-4">"{p.q}"</p>
                <div className="mt-auto bg-white/5 p-4 rounded text-xs text-[#6A6A6A] leading-relaxed uppercase tracking-wider font-bold italic">
                    <span className="text-[#FFD700]">WHY THIS FITS:</span> {p.fit}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

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
    <div className="bg-[#000000] min-h-screen text-[#F5F5F5] font-['Outfit'] overflow-x-hidden group/main">
      <ScrollProgress />
      <UrgencyBar />
      <ToastNotification />

      {/* --- Header / Nav --- */}
      <nav className={`fixed top-[32px] left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="font-bebas text-2xl tracking-widest text-white">MARCUS<span className="text-[#FFD700]">·</span>VANCE</div>
          <div className="hidden lg:flex items-center gap-10 font-bebas text-lg tracking-[0.2em]">
            <a href="#about" className="hover:text-[#FFD700] transition-colors">METHOD</a>
            <a href="#roadmap" className="hover:text-[#FFD700] transition-colors">CHALLENGE</a>
            <a href="#forwho" className="hover:text-[#FFD700] transition-colors">PROFILES</a>
            <LanguageSwitcher variant="marcus" />
            <button onClick={() => setIsEnrollOpen(true)} className="bg-[#FFD700] text-black px-8 py-2.5 hover:bg-white transition-all shadow-lg font-bold">START FREE</button>
          </div>
          <div className="lg:hidden"><LanguageSwitcher variant="marcus" /></div>
        </div>
      </nav>

      <main>
        {/* --- Hero Section --- */}
        <section className="relative pt-[220px] pb-32 overflow-hidden" id="about">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-[#FFD700]/[0.05] blur-[150px] rounded-full -translate-y-1/2 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-3 border border-[#FFD700]/30 bg-[#FFD700]/10 px-4 py-1.5 rounded-full mb-8">
                <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse" />
                <span className="font-oswald text-[#FFD700] text-[10px] font-bold tracking-[0.4em] uppercase">7-Day Free Challenge — Open Now</span>
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h1 className="font-bebas text-[64px] md:text-[140px] leading-[0.85] text-white tracking-tighter mb-10">
                Building Real<br/>
                <span className="mv-text-gold-gradient italic">Wealth Engines</span><br/>
                From Scratch — Free
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-[#A3A3A3] text-lg md:text-2xl font-light italic max-w-3xl mx-auto mb-16 leading-relaxed">
                The <strong>Marcus Vance Protocol</strong> gives you the complete blueprint to launch your digital stream. No prior experience. No hidden fees. 100% free to start.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <button onClick={() => setIsEnrollOpen(true)} className="bg-[#FFD700] text-black px-12 py-7 md:px-20 md:py-8 font-bebas text-3xl md:text-4xl tracking-widest hover:bg-white transition-all shadow-2xl uppercase italic">CLAIM FREE ACCESS</button>
                  <a href="#roadmap" className="font-bebas text-xl text-white/50 hover:text-white transition-colors tracking-widest border-b border-transparent hover:border-white/20 pb-1">SEE THE 7 DAYS →</a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
                <div className="mt-12 flex items-center justify-center gap-10 border-t border-white/5 pt-12">
                   <div className="flex -space-x-3">
                        {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-[#111] overflow-hidden"><img src={`/avatars/avatar${(i%3)+1}.webp`} /></div>)}
                   </div>
                   <div className="text-left">
                       <div className="text-[#FFD700] font-bold text-lg leading-none">★★★★★</div>
                       <div className="text-[10px] font-oswald text-[#6A6A6A] tracking-widest mt-1 uppercase">2,400+ ENROLLED & GROWING</div>
                   </div>
                </div>
            </Reveal>
          </div>
          
          <div className="waterline-glow h-[80px]" />
          <div className="waterline animate-waterflow" />
        </section>

        <LogoScrollTrack />
        <WhoItIsFor />
        <TimelineSection />

        {/* --- Gateway Section --- */}
        <section className="py-40 bg-[#050505] border-y border-white/5">
             <div className="max-w-4xl mx-auto px-6 text-center">
                <Reveal>
                  <div className="font-oswald border border-[#FFD700]/30 bg-[#FFD700]/5 text-[#FFD700] inline-block px-6 py-2 rounded-full text-xs tracking-widest font-bold mb-10 uppercase">🔐 Exclusive Selection</div>
                  <h2 className="font-bebas text-5xl md:text-8xl text-white mb-8 italic leading-none">
                    THE CHALLENGE IS THE GATEWAY<br/>
                    <span className="text-[#FFD700]">TO THE PROGRAMME.</span>
                  </h2>
                  <p className="text-[#A3A3A3] text-lg md:text-xl italic leading-relaxed mb-12">
                    Our platform is not publicly sold. Access is reserved exclusively for those who complete the 7-Day Challenge and prove their commitment with a live, functional asset.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-oswald text-[11px] tracking-widest text-white/40 uppercase font-bold">
                    <div className="bg-white/5 p-4 rounded-xl flex items-center gap-3"><span className="text-[#FFD700] text-lg">01</span> Complete the challenge free</div>
                    <div className="bg-white/5 p-4 rounded-xl flex items-center gap-3"><span className="text-[#FFD700] text-lg">02</span> Unlock Graduate Status</div>
                    <div className="bg-white/5 p-4 rounded-xl flex items-center gap-3"><span className="text-[#FFD700] text-lg">03</span> Entry to Alpha Collective</div>
                  </div>
                </Reveal>
             </div>
        </section>

        {/* --- Video Section --- */}
        <section className="py-32 bg-[#000000]">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading pre="Platform Reveal" title="Peek Inside the Method" />
            <div className="relative aspect-video rounded-3xl overflow-hidden group shadow-3xl shadow-[#FFD700]/5 border border-white/10 bg-[#0A0A0A]">
              <img src="/marcus_platform_mockup_v2_1776138837670.png" className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-24 h-24 bg-[#FFD700] rounded-full flex items-center justify-center text-black shadow-[0_0_50px_rgba(255,215,0,0.5)] cursor-pointer hover:scale-110 transition-transform duration-500">
                   <PlayIcon />
                 </div>
              </div>
              <div className="absolute bottom-6 left-10 flex items-center gap-4 animate-pulse">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full" />
                <span className="font-oswald text-[10px] text-[#FFD700] font-bold tracking-[0.3em]">LIVE DEMO DEPLOYED</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- Guarantee / Affiliation --- */}
        <section className="py-32 bg-[#050505] border-y border-white/5 overflow-hidden">
             <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                <Reveal>
                  <div className="mv-glass-card p-12 h-full">
                    <div className="text-4xl mb-6">🛡️</div>
                    <h3 className="font-bebas text-4xl text-white mb-4 uppercase">No-Questions Guarantee</h3>
                    <p className="text-[#A3A3A3] text-sm italic mb-8 border-l-2 border-[#FFD700]/20 pl-4">If the purchased content does not meet your expectations, request a refund within 30 days. No questions asked.</p>
                    <p className="text-[10px] text-[#6A6A6A] font-oswald uppercase tracking-widest font-bold">Standard 30-Day Protection applies to all collective purchases.</p>
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="mv-glass-card p-12 h-full border-[#FFD700]/20">
                    <div className="text-4xl mb-6">🤝</div>
                    <h3 className="font-bebas text-4xl text-white mb-4 uppercase">The 40% Affiliate Program</h3>
                    <p className="text-[#A3A3A3] text-sm italic mb-8">Turn your network into equity. Share the method, earn 40% recurring on every sale — for life.</p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white/5 p-4 rounded text-center"><div className="font-bebas text-2xl text-[#FFD700]">40%</div><div className="text-[9px] font-oswald text-[#6A6A6A] uppercase font-bold tracking-widest">Commission</div></div>
                        <div className="bg-white/5 p-4 rounded text-center"><div className="font-bebas text-2xl text-[#FFD700]">30D</div><div className="text-[9px] font-oswald text-[#6A6A6A] uppercase font-bold tracking-widest">Cookie</div></div>
                    </div>
                  </div>
                </Reveal>
             </div>
        </section>

        {/* --- Optin --- */}
        <section className="py-40 bg-[#000000]" id="optin">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <SectionHeading pre="Step 1 of 7" title="Start Your Stream Today" subtitle="Day 1 protocol arrives in your inbox within minutes. Zero commitment. No card forced." />
            <div className="mv-glass-card p-12 md:p-16 max-w-xl mx-auto border-white/10 group relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
               <div className="flex flex-col gap-6">
                 <input type="text" placeholder="FIRST NAME" className="bg-[#111] border border-white/5 p-6 font-bebas text-2xl text-white focus:border-[#FFD700] outline-none tracking-widest text-center" />
                 <input type="email" placeholder="YOUR@BEST-EMAIL.COM" className="bg-[#111] border border-white/5 p-6 font-bebas text-2xl text-[#FFD700] focus:border-[#FFD700] outline-none tracking-widest text-center" />
                 <button onClick={() => setIsEnrollOpen(false)} className="bg-[#FFD700] text-black p-6 md:p-8 font-bebas text-3xl md:text-4xl tracking-widest hover:bg-white transition-all uppercase italic shadow-2xl">CLAIM FREE ACCESS →</button>
                 <div className="flex flex-col items-center gap-2 mt-4 text-[#444] font-oswald text-[10px] tracking-widest font-bold italic">
                   <span>SECURE ACCESS PROTOCOL 5.0 LIVE</span>
                   <div className="flex gap-2 opacity-50"><LanguageSwitcher variant="marcus" /></div>
                 </div>
               </div>
            </div>
          </div>
        </section>
      </main>

      <Disclaimer />

      <footer className="py-24 border-t border-white/5 bg-[#050505] relative z-20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
          <div>
            <div className="font-bebas text-4xl text-white mb-4">MARCUS<span className="text-[#FFD700]">·</span>VANCE</div>
            <p className="text-[#333] font-oswald uppercase tracking-[0.5em] text-[10px] font-bold">© 2024 LUCKY NORTH STAR LLC — WYOMING, USA</p>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-6 font-oswald text-[12px] tracking-[0.2em] text-[#555] font-bold uppercase">
            <Link to="/philosophy" className="hover:text-[#FFD700]">PHILOSOPHY</Link>
            <Link to="/terms" className="hover:text-[#FFD700]">TERMS</Link>
            <Link to="/giveaway" className="hover:text-[#FFD700]">GIVEAWAY</Link>
            <Link to="/feedback" className="hover:text-[#FFD700]">FEEDBACK</Link>
          </div>
        </div>
      </footer>

      {/* --- Modals --- */}
      <AnimatePresence>
        {(isEnrollOpen || showExitPopup) && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/98 backdrop-blur-3xl p-6">
            <div className="max-w-2xl w-full text-center relative">
               <button onClick={() => {setIsEnrollOpen(false); setShowExitPopup(false);}} className="absolute -top-12 right-0 text-white/20 hover:text-white font-bebas text-2xl tracking-widest transition-colors">CLOSE [ESC]</button>
               <div className="text-5xl mb-8 animate-bounce">{isEnrollOpen ? '🗝️' : '⏳'}</div>
               <SectionHeading 
                 pre={isEnrollOpen ? "Initiation Protocol" : "Wait Before You Exit"}
                 title={isEnrollOpen ? "Secure Your Access" : "Don't Leave Without Day 1"}
                 subtitle={isEnrollOpen ? "Enter your email to receive your first challenge protocol." : "The challenge is 100% free. Day 1 takes 45 minutes and establishes your entire business direction. Don't waste the opportunity."}
               />
               <div className="flex flex-col gap-4 max-w-md mx-auto">
                 <input type="email" placeholder="YOUR@EMAIL.COM" className="bg-white/5 border border-white/10 p-5 font-bebas text-2xl text-[#FFD700] focus:border-[#FFD700] outline-none tracking-widest text-center" />
                 <button onClick={() => {setIsEnrollOpen(false); setShowExitPopup(false);}} className="bg-[#FFD700] text-black p-5 font-bebas text-2xl tracking-widest hover:bg-white transition-all uppercase italic">DECODE PROTOCOL →</button>
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
