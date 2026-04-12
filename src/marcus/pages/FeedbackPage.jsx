import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '../../shared/hooks/useLocale';
import { Disclaimer } from '../../shared/components/Disclaimer';

const FeedbackPage = () => {
  const { t, currentLocale } = useLocale();
  const [submitted, setSubmitted] = useState(false);

  const fb = t.marcus.feedback;
  const marcusBase = currentLocale === 'default' ? '/marcus' : `/marcus/${currentLocale}`;

  return (
    <div className="bg-[#080808] min-h-screen text-[#F5F5F5] font-['Inter'] selection:bg-[#C9A84C]/30 selection:text-[#C9A84C]">
      {/* Header */}
      <nav className="py-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <img src="/marcus-logo.png" alt="Marcus Vance" className="h-20 w-auto object-contain" />
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
                <div className="w-1.5 h-6 bg-[#C9A84C]" />
                <span className="font-['Oswald'] uppercase tracking-[0.3em] text-[10px] text-[#C9A84C] font-bold italic">{fb.badge}</span>
              </div>

              <h1 className="font-arena-headline text-6xl md:text-8xl text-white mb-4 uppercase">{fb.title}</h1>
              <p className="text-[#6B6B6B] text-sm md:text-base leading-relaxed font-light italic mb-8">
                {fb.subtitle}
              </p>

              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-6 text-left">
                <div className="flex flex-col gap-2">
                  <label className="font-['Oswald'] uppercase tracking-widest text-[10px] text-[#6B6B6B] font-bold italic">{fb.nameLabel}</label>
                  <input type="text" required className="bg-[#141414] border border-white/5 px-6 py-4 focus:border-[#C9A84C] outline-none transition-all text-sm" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-['Oswald'] uppercase tracking-widest text-[10px] text-[#6B6B6B] font-bold italic">{fb.feedbackLabel}</label>
                  <textarea required className="bg-[#141414] border border-white/5 px-6 py-4 focus:border-[#C9A84C] outline-none h-40 transition-all text-sm resize-none placeholder:text-white/10" placeholder={fb.placeholder} />
                </div>
                <button 
                  type="submit"
                  className="bg-[#C9A84C] text-black w-full py-5 font-arena-headline text-2xl tracking-wider hover:bg-[#E2C46E] transition-all uppercase italic font-bold"
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
              <div className="w-20 h-20 bg-[#C9A84C] flex items-center justify-center text-black text-4xl shadow-[0_0_40px_rgba(201,168,76,0.2)]">✓</div>
              <h2 className="font-arena-headline text-5xl text-[#C9A84C] uppercase">{fb.successTitle}</h2>
              <p className="text-[#6B6B6B] text-sm leading-relaxed max-w-sm mx-auto italic font-light">
                {fb.successDesc}
              </p>
              <button 
                onClick={() => window.location.href = marcusBase}
                className="mt-8 border border-[#C9A84C] text-[#C9A84C] px-10 py-3 font-arena-headline text-xl tracking-wider hover:bg-[#C9A84C] hover:text-black transition-all italic font-bold"
              >
                {fb.returnBtn}
              </button>
            </motion.div>
          )}
        </div>
      </main>

      <Disclaimer />
    </div>
  );
};

export default FeedbackPage;
