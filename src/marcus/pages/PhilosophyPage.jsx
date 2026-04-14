import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocale } from '../../shared/hooks/useLocale';

const PhilosophyPage = () => {
  const { t } = useLocale();
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

  const menuItems = [
    { id: 'chapter-1', label: 'I. THE DISCLOSURE' },
    { id: 'chapter-2', label: 'II. THE METHODOLOGY' },
    { id: 'chapter-3', label: 'III. THE VOICE' },
    { id: 'chapter-4', label: 'IV. THE BRAND PERSONA' },
    { id: 'chapter-5', label: 'V. THE EDGE' },
    { id: 'chapter-6', label: 'VI. PARTICIPATION' },
    { id: 'chapter-7', label: 'VII. FINAL NOTE' },
  ];

  return (
    <div className="bg-[#080808] min-h-screen text-[#F5F5F5] font-['Inter'] selection:bg-[#C9A84C]/30 selection:text-[#C9A84C]">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#080808]/80 backdrop-blur-md border-b border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-[#C9A84C] group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-['Oswald'] uppercase tracking-[0.3em] text-[10px] text-[#A3A3A3] group-hover:text-white transition-colors">Return to Alpha</span>
          </Link>
          <img src="/marcus-logo.png" alt="Marcus Vance" className="h-12 w-auto object-contain opacity-50" />
          <div className="w-20" /> {/* Spacer */}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-40 pb-32">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Sticky TOC */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-40 flex flex-col gap-8">
              <div className="w-12 h-1 bg-[#C9A84C] mb-4" />
              <h2 className="font-arena-headline text-3xl text-white italic tracking-wider mb-8">THE PHILOSOPHY</h2>
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className={`text-left font-['Oswald'] text-[11px] uppercase tracking-[0.3em] transition-all hover:text-[#C9A84C] ${activeChapter === item.id ? 'text-[#C9A84C] pl-4 border-l-2 border-[#C9A84C]' : 'text-[#3A3A3A] hover:pl-2'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:w-3/4 max-w-2xl">
            <section id="chapter-1" className="philosophy-chapter mb-32">
              <span className="font-['Oswald'] text-[#C9A84C] font-bold tracking-[0.5em] text-xs block mb-8 uppercase">I. What you are reading, and why it matters</span>
              <h1 className="font-arena-headline text-5xl md:text-7xl text-white mb-12 italic leading-[0.9]">TRANSPARENCY IS THE ULTIMATE AUTHORITY.</h1>
              <div className="space-y-6 text-[#A3A3A3] text-lg leading-relaxed italic font-light">
                <p>Most programs bury their disclosures. They put the legal language in a footer, in six-point type, on a page nobody reads. They lead with the personality, the story, the aspiration — and save the reality for the fine print.</p>
                <p>We do things differently. We believe that clarity is the foundation of trust, and trust is the only currency that matters in high-performance education. This page exists to define exactly what this platform is, who Marcus Vance is, and what you are committing to.</p>
              </div>
            </section>

            <section id="chapter-2" className="philosophy-chapter mb-32">
              <span className="font-['Oswald'] text-[#C9A84C] font-bold tracking-[0.5em] text-xs block mb-8 uppercase">II. The Methodology: Performance-First Education</span>
              <div className="space-y-6 text-[#A3A3A3] text-lg leading-relaxed italic font-light">
                <p>The Marcus Vance platform is an educational resource developed by a collective of digital entrepreneurs and system architects. Our methodology is built on binary outcomes: either the system works, or it doesn't. There is no middle ground.</p>
                <p>We don't teach "theory." We teach execution protocols. Every course, checklist, and workbook inside the full library is extracted from real-world operations conducted by our development team across multiple industries.</p>
              </div>
            </section>

            <section id="chapter-3" className="philosophy-chapter mb-32">
              <span className="font-['Oswald'] text-[#C9A84C] font-bold tracking-[0.5em] text-xs block mb-8 uppercase">III. The Voice: Marcus Vance</span>
              <div className="space-y-6 text-[#A3A3A3] text-lg leading-relaxed italic font-light">
                <p>Marcus Vance is the architect of the message. He represents the ethos of the Alpha Collective. His "voice" is the synthesis of our collective experience—decades of successes, failures, and hard-won lessons in the digital economy.</p>
              </div>
            </section>

            <section id="chapter-4" className="philosophy-chapter mb-32">
              <span className="font-['Oswald'] text-[#C9A84C] font-bold tracking-[0.5em] text-xs block mb-8 uppercase">IV. The Reality of the "Brand Persona"</span>
              <div className="space-y-6 text-[#A3A3A3] text-lg leading-relaxed italic font-light">
                <p>It is important for you to understand that Marcus Vance is an <strong>AI-generated brand persona</strong>. He is a digital avatar created to serve as the face and voice of our educational mission. The image you see is synthetic; the personality is curated.</p>
                <p>Why did we do this? Because in the modern era, the message must be bigger than any single person. By creating Marcus Vance, we ensure that the focus remains entirely on the <em>teachings</em> and the <em>results</em>, rather than the personal life or celebrity of a human figurehead. Marcus doesn't get tired. Marcus doesn't have an ego. Marcus is pure protocol.</p>
              </div>
            </section>

            <section id="chapter-5" className="philosophy-chapter mb-32">
              <span className="font-['Oswald'] text-[#C9A84C] font-bold tracking-[0.5em] text-xs block mb-8 uppercase">V. Why Transparency is the Ultimate Edge</span>
              <div className="space-y-6 text-[#A3A3A3] text-lg leading-relaxed italic font-light">
                <p>We are telling you this upfront because we believe your intelligence deserves respect. If we began this relationship with a deception about Marcus being a "real" person in the traditional sense, we would undermine everything we teach about integrity and high standards.</p>
                <p>The <em>results</em> produced by our students are 100% human and 100% real. The <em>strategies</em> we teach are implemented by real people to generate real revenue. The avatar is the medium; the success is the message.</p>
              </div>
            </section>

            <section id="chapter-6" className="philosophy-chapter mb-32">
              <span className="font-['Oswald'] text-[#C9A84C] font-bold tracking-[0.5em] text-xs block mb-8 uppercase">VI. Your Participation</span>
              <div className="space-y-6 text-[#A3A3A3] text-lg leading-relaxed italic font-light">
                <p>When you enter the 7-Day Challenge, you are entering a high-performance environment. We expect you to treat these materials with the same seriousness as you would a confidential business intelligence report. Whether or not the "face" of the brand is human is irrelevant to the utility of the system.</p>
              </div>
            </section>

            <section id="chapter-7" className="philosophy-chapter mb-64">
              <span className="font-['Oswald'] text-[#C9A84C] font-bold tracking-[0.5em] text-xs block mb-8 uppercase">VII. Final Note</span>
              <div className="space-y-6 text-[#A3A3A3] text-lg leading-relaxed italic font-light">
                <p>We are here to help you build. Nothing more, nothing less. If you are comfortable with a world where AI-augmented education provides the fastest path to financial independence, then you are in the right place.</p>
                <p>Welcome to the era of Alpha.</p>
              </div>

              <div className="mt-20 p-12 bg-[#141414] border border-[#C9A84C]/20 text-center">
                <h3 className="font-arena-headline text-3xl text-white mb-6 italic tracking-widest uppercase">READY TO EXECUTE?</h3>
                <Link 
                  to="/"
                  className="inline-block bg-[#C9A84C] text-black px-12 py-5 font-arena-headline text-xl tracking-wider hover:bg-white transition-all uppercase italic"
                >
                  START THE CHALLENGE NOW →
                </Link>
                <p className="mt-6 text-[10px] font-['Oswald'] uppercase tracking-[0.3em] text-[#3A3A3A]">ACCESS REMAINS 100% FREE</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-20 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12 text-[#2A2A2A]">
          <div className="flex flex-col gap-4">
            <img src="/marcus-logo.png" alt="Marcus Vance" className="h-16 w-auto object-contain grayscale opacity-20" />
            <p className="font-['Oswald'] uppercase tracking-[0.5em] text-[10px]">ALL DISCLOSURES VERIFIED © 2024</p>
          </div>
          <div className="flex gap-12 text-[10px] font-['Oswald'] uppercase tracking-[0.2em]">
            <Link to="/terms" className="hover:text-[#C9A84C] transition-all">TERMS & CONDITIONS</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PhilosophyPage;
