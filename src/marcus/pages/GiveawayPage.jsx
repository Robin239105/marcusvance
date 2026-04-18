import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLocale } from '../../shared/hooks/useLocale';
import LanguageSwitcher from '../../shared/components/LanguageSwitcher';

const GiveawayPage = () => {
  const { t, currentLocale } = useLocale();
  const navigate = useNavigate();
  const location = useLocation();
  const gw = t.marcus.giveaway;
  const homePath = currentLocale === 'default' || currentLocale === 'en' ? '/' : `/${currentLocale}`;

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
    <div className="bg-[#080808] min-h-screen text-[#F5F5F5] font-['Barlow'] selection:bg-[#FFD700]/30 selection:text-[#FFD700]">
      {/* Header */}
      <nav className="fixed top-[32px] left-0 right-0 z-[100] bg-black/95 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link to={homePath} className="flex items-center gap-4 group">
            <img src="/marcus-logo.png" alt="Marcus Vance Logo" className="h-16 md:h-20 w-auto object-contain transition-all" />
          </Link>
          
          <div className="hidden lg:flex items-center gap-10 font-oswald text-[11px] tracking-[0.25em] font-bold uppercase text-[#A3A3A3]">
            <a href="#method" onClick={(e) => handleNav(e, 'method')} className="hover:text-white transition-colors">{t.marcus.nav.method}</a>
            <Link to={currentLocale === 'en' || currentLocale === 'default' ? '/philosophy' : `/philosophy/${currentLocale}`} className="hover:text-white transition-colors">{t.marcus.nav.philosophy}</Link>
            <a href="#roadmap" onClick={(e) => handleNav(e, 'roadmap')} className="hover:text-white transition-colors">{t.marcus.nav.challenge}</a>
            <a href="#faq" onClick={(e) => handleNav(e, 'faq')} className="hover:text-white transition-colors">{t.marcus.nav.faq}</a>
            <LanguageSwitcher variant="marcus" />
            <Link to={homePath} className="bg-[#FFD700] text-black px-6 py-2.5 hover:bg-white transition-all shadow-lg font-bold whitespace-nowrap ml-4">{t.marcus.navStartBtn}</Link>
          </div>

          <div className="lg:hidden text-right flex items-center gap-4">
             <Link to={homePath} className="bg-[#FFD700] text-black px-4 py-2 text-[10px] font-bold tracking-widest uppercase whitespace-nowrap">START</Link>
             <LanguageSwitcher variant="marcus" />
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-32">
        <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Left — Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#FFD700]/10 blur-3xl rounded-full" />
            <img 
              src="/assets/giveaway-hero.webp" 
              alt="iPhone and Laptop Giveaway" 
              className="w-full relative z-10 filter contrast-[1.1] grayscale-[10%]"
            />
          </motion.div>

          {/* Right — Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-3">
              <div className="w-1.5 h-6 bg-[#FFD700]" />
              <span className="font-oswald uppercase tracking-[0.3em] text-[10px] text-[#FFD700] font-bold">{gw.badge}</span>
            </div>

            <h1 className="font-oswald text-6xl md:text-8xl leading-none tracking-tight text-[#F5F5F5] uppercase font-bold">
              {gw.title.split('&').map((part, i) => (
                <React.Fragment key={i}>
                  {i === 1 && <br/>}
                  <span className={i === 1 ? "text-[#FFD700]" : ""}>{i === 1 ? `& ${part}` : part}</span>
                </React.Fragment>
              ))}
            </h1>

            <div className="flex flex-col gap-6">
              {gw.steps.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="font-oswald text-2xl text-[#FFD700] opacity-30 font-bold">{i + 1}</div>
                  <div>
                    <h3 className="font-oswald text-lg uppercase text-[#F5F5F5] mb-1 font-bold">{item.title}</h3>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-xl">
              <p className="font-oswald text-sm text-[#F5F5F5] leading-relaxed uppercase tracking-wider font-bold">
                {gw.participationInstructions}
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center sm:items-start gap-4">
              <p className="text-[10px] text-[#3A3A3A] font-oswald uppercase tracking-widest leading-none font-bold">
                {gw.disclaimer}
              </p>
            </div>
          </motion.div>
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

export default GiveawayPage;
