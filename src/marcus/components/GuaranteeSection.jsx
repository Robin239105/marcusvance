import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Reveal } from '../../shared/components/Reveal';
import { useLocale } from '../../shared/hooks/useLocale';

const ShieldIcon = ({ className }) => (
  <svg className={className} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </svg>
);

const GuaranteeSection = () => {
  const { t, currentLocale } = useLocale();
  const getLocalizedPath = (path) => currentLocale === 'default' ? path : `${path}/${currentLocale}`;
  const data = t.marcus.guaranteeSection;
  
  if (!data) return null;

  return (
    <section className="py-32 bg-[#050505] border-y border-white/5 relative overflow-hidden" id="guarantee">
      <div className="max-w-5xl mx-auto px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-oswald text-[10px] md:text-xs text-[#C9A84C] font-bold tracking-[0.4em] uppercase mb-4 opacity-80">
              {data.pre}
            </h2>
            <h1 className="font-oswald text-4xl md:text-6xl text-white font-bold tracking-tight uppercase">
              {data.title}
            </h1>
          </div>
        </Reveal>

        <Reveal>
          <Link 
            to={getLocalizedPath('/terms') + '#section-7'}
            className="block mt-20 mv-glass-card p-12 md:p-16 border border-white/10 bg-white/[0.02] relative group overflow-hidden cursor-pointer hover:border-[#C9A84C]/40 transition-all"
          >
            {/* Subtle pulsive glow */}
            <motion.div 
               animate={{ opacity: [0.05, 0.15, 0.05] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-1/2 -left-1/2 w-[150%] h-[150%] bg-[#C9A84C]/10 blur-[120px] rounded-full pointer-events-none"
            />

            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
              <div className="flex-shrink-0">
                <div className="relative">
                   <ShieldIcon className="text-[#C9A84C] w-20 h-20 md:w-24 md:h-24 stroke-[1]" />
                   <motion.div 
                     animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                     transition={{ duration: 3, repeat: Infinity }}
                     className="absolute inset-0 bg-[#C9A84C]/20 blur-xl rounded-full -z-10"
                   />
                </div>
              </div>

              <div className="flex flex-col text-center md:text-left">
                <h3 className="font-oswald text-2xl md:text-3xl text-white font-bold tracking-[0.1em] uppercase leading-tight mb-2">
                  {data.boldTitle}
                </h3>
                <h4 className="font-oswald text-2xl md:text-3xl text-[#C9A84C] font-black tracking-[0.05em] uppercase leading-tight mb-8">
                  {data.goldTitle}
                </h4>
                
                <p className="text-[#A3A3A3] text-sm md:text-base font-light leading-relaxed max-w-2xl italic">
                  "{data.description}"
                </p>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>

      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C9A84C 0.5px, transparent 0.5px)', backgroundSize: '60px 60px' }} />
    </section>
  );
};

export { GuaranteeSection };
