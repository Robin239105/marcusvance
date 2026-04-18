import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocale } from '../../shared/hooks/useLocale';
import { Disclaimer } from '../../shared/components/Disclaimer';
import LanguageSwitcher from '../../shared/components/LanguageSwitcher';

const GiveawayPage = () => {
  const { t, currentLocale } = useLocale();
  const gw = t.marcus.giveaway;
  const homePath = currentLocale === 'default' || currentLocale === 'en' ? '/' : `/${currentLocale}`;

  return (
    <div className="bg-[#080808] min-h-screen text-[#F5F5F5] font-['Barlow'] selection:bg-[#FFD700]/30 selection:text-[#FFD700]">
      {/* Header */}
      <nav className="py-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <Link to={homePath} className="flex items-center gap-6 group">
            <img src="/marcus-logo.png" alt="Marcus Vance" className="h-20 w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-8">
            <LanguageSwitcher />
            <Link to={homePath} className="font-oswald text-[10px] text-[#6B6B6B] hover:text-[#FFD700] uppercase tracking-widest transition-all font-bold">{gw.backLink}</Link>
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

      <Disclaimer />
    </div>
  );
};

export default GiveawayPage;
