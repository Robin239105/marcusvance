import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocale } from '../../shared/hooks/useLocale';
import LanguageSwitcher from '../../shared/components/LanguageSwitcher';

const FeedbackPage = () => {
  const { t, currentLocale } = useLocale();
  const [submitted, setSubmitted] = useState(false);

  const fb = t.marcus.feedback;
  const homePath = currentLocale === 'default' || currentLocale === 'en' ? '/' : `/${currentLocale}`;

  return (
    <div className="bg-[#080808] min-h-screen text-[#F5F5F5] font-['Barlow'] selection:bg-[#FFD700]/30 selection:text-[#FFD700]">
      {/* Header */}
      <nav className="py-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <Link to={homePath} className="flex items-center gap-6 group">
            <img src="/marcus-logo.png" alt="Marcus Vance" className="h-32 w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-8">
            <LanguageSwitcher />
            <Link to={homePath} className="font-oswald text-[10px] text-[#6B6B6B] hover:text-[#FFD700] uppercase tracking-widest transition-all font-bold">Back to Alpha</Link>
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-32">
        <div className="max-w-2xl mx-auto px-8 text-center">
          {!submitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-8"
            >
              <div className="inline-flex items-center gap-3 justify-center">
                <div className="w-1.5 h-6 bg-[#FFD700]" />
                <span className="font-oswald uppercase tracking-[0.3em] text-[10px] text-[#FFD700] font-bold">{fb.badge}</span>
              </div>

              <h1 className="font-oswald text-6xl md:text-8xl text-white mb-4 uppercase font-bold tracking-tight">{fb.title}</h1>
              <p className="text-[#6B6B6B] text-sm md:text-base leading-relaxed font-light mb-8">
                {fb.subtitle}
              </p>

              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-6 text-left">
                <div className="flex flex-col gap-2">
                  <label className="font-oswald uppercase tracking-widest text-[10px] text-[#6B6B6B] font-bold">{fb.nameLabel}</label>
                  <input type="text" required className="bg-[#141414] border border-white/5 px-6 py-4 focus:border-[#FFD700] outline-none transition-all text-sm font-oswald tracking-widest uppercase font-bold text-white placeholder:text-white/5" placeholder="EX: MARCUS" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-oswald uppercase tracking-widest text-[10px] text-[#6B6B6B] font-bold">{fb.feedbackLabel}</label>
                  <textarea required className="bg-[#141414] border border-white/5 px-6 py-4 focus:border-[#FFD700] outline-none h-40 transition-all text-sm resize-none placeholder:text-white/5 font-oswald tracking-widest uppercase font-bold text-[#FFD700]" placeholder={fb.placeholder} />
                </div>
                <button 
                  type="submit"
                  className="bg-[#FFD700] text-black w-full py-5 font-oswald text-2xl tracking-wider hover:bg-white transition-all uppercase font-bold shadow-xl shadow-[#FFD700]/10"
                >
                  {fb.submitBtn}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="py-20 flex flex-col items-center gap-6"
            >
              <div className="w-20 h-20 bg-[#FFD700] flex items-center justify-center text-black text-4xl shadow-[0_0_40px_rgba(255,215,0,0.2)]">✓</div>
              <h2 className="font-oswald text-5xl text-[#FFD700] uppercase font-bold tracking-tight">{fb.successTitle}</h2>
              <p className="text-[#6B6B6B] text-sm leading-relaxed max-w-sm mx-auto font-light">
                {fb.successDesc}
              </p>
              <button 
                onClick={() => window.location.href = homePath}
                className="mt-8 border border-[#FFD700] text-[#FFD700] px-10 py-3 font-oswald text-xl tracking-wider hover:bg-[#FFD700] hover:text-black transition-all font-bold uppercase"
              >
                {fb.returnBtn}
              </button>
            </motion.div>
          )}
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

export default FeedbackPage;
