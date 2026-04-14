import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocale } from '../../shared/hooks/useLocale';

const TermsPage = () => {
  const { t } = useLocale();
  const [activeSection, setActiveSection] = useState('section-1');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-10% 0px -60% 0px' }
    );

    const sections = document.querySelectorAll('.legal-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const sections = [
    { id: 'section-1', label: '1. INTRODUCTION' },
    { id: 'section-2', label: '2. THE PROGRAM' },
    { id: 'section-3', label: '3. INTELLECTUAL PROPERTY' },
    { id: 'section-4', label: '4. PARTICIPATION' },
    { id: 'section-5', label: '5. WARRANTIES' },
    { id: 'section-6', label: '6. LIABILITY' },
    { id: 'section-7', label: '7. DATA PRIVACY' },
    { id: 'section-8', label: '8. AI DISCLOSURE' },
    { id: 'section-9', label: '9. THIRD PARTY' },
    { id: 'section-10', label: '10. MODIFICATIONS' },
    { id: 'section-11', label: '11. GOVERNING LAW' },
  ];

  return (
    <div className="bg-[#080808] min-h-screen text-[#F5F5F5] font-['Inter'] selection:bg-[#C9A84C]/30 selection:text-[#C9A84C]">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#080808]/80 backdrop-blur-md border-b border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-[#C9A84C] group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-['Oswald'] uppercase tracking-[0.3em] text-[10px] text-[#A3A3A3] group-hover:text-white transition-colors">Back to Alpha</span>
          </Link>
          <div className="font-['Oswald'] uppercase tracking-[0.4em] text-xs text-white opacity-40">TERMS & CONDITIONS</div>
          <div className="w-20" />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-40 pb-32">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Sticky Legal Nav */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-40 flex flex-col gap-6">
              <h2 className="font-['Oswald'] text-xs text-[#C9A84C] font-bold tracking-[0.4em] mb-4">LEGAL FRAMEWORK</h2>
              <div className="flex flex-col gap-3">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className={`text-left font-['Oswald'] text-[10px] uppercase tracking-[0.2em] transition-all ${activeSection === section.id ? 'text-[#C9A84C] font-bold' : 'text-[#3A3A3A] hover:text-[#A3A3A3]'}`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:w-3/4 max-w-3xl">
            <header className="mb-24">
              <h1 className="font-arena-headline text-5xl md:text-7xl text-white mb-8 italic tracking-wider">LEGAL PROTOCOL.</h1>
              <p className="font-['Oswald'] text-[#A3A3A3] text-xs tracking-[0.3em] uppercase opacity-50">Last Updated: April 2024</p>
            </header>

            <section id="section-1" className="legal-section mb-20">
              <h2 className="font-['Oswald'] text-lg text-white uppercase tracking-widest mb-8 border-b border-white/5 pb-4">1. Introduction</h2>
              <div className="space-y-4 text-[#A3A3A3] text-sm leading-relaxed font-light italic">
                <p>Welcome to MarcusVance.io (the "Site"), owned and operated by The Alpha Collective ("we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of our Site and participation in the "7-Day High-Income Stream Challenge" and any subsequent educational programs (collectively, the "Program").</p>
                <p>By accessing the Site or enrolling in the Program, you agree to be bound by these Terms. If you do not agree, you must immediately cease all use of the platform.</p>
              </div>
            </section>

            <section id="section-2" className="legal-section mb-20">
              <h2 className="font-['Oswald'] text-lg text-white uppercase tracking-widest mb-8 border-b border-white/5 pb-4">2. The Program</h2>
              <div className="space-y-4 text-[#A3A3A3] text-sm leading-relaxed font-light italic">
                <p>The Program is an educational service designed to provide foundational business knowledge and strategic frameworks for digital entrepreneurship. It is not a financial advisory service, a guarantee of income, or an employment offer.</p>
              </div>
            </section>

            <section id="section-3" className="legal-section mb-20">
              <h2 className="font-['Oswald'] text-lg text-white uppercase tracking-widest mb-8 border-b border-white/5 pb-4">3. Use of the Site and Program</h2>
              <div className="space-y-4 text-[#A3A3A3] text-sm leading-relaxed font-light italic">
                <p>All content provided, including text, logos, audio, video, and strategic documents, is the intellectual property of The Alpha Collective. You are granted a limited, non-exclusive, non-transferable license for personal, educational use only.</p>
                <p>Any unauthorized distribution, resale, or commercial use of our proprietary materials is strictly prohibited and will result in immediate termination of access and potential legal action.</p>
              </div>
            </section>

            <section id="section-4" className="legal-section mb-20">
              <h2 className="font-['Oswald'] text-lg text-white uppercase tracking-widest mb-8 border-b border-white/5 pb-4">4. Participation and Commitment</h2>
              <div className="space-y-4 text-[#A3A3A3] text-sm leading-relaxed font-light italic">
                <p>Participation in the Program requires a high level of moral commitment and focus. We reserve the right to limit or terminate access for individuals who do not adhere to our community standards or professional etiquette.</p>
              </div>
            </section>

            <section id="section-5" className="legal-section mb-20">
              <h2 className="font-['Oswald'] text-lg text-white uppercase tracking-widest mb-8 border-b border-white/5 pb-4">5. Disclaimer of Warranties</h2>
              <div className="space-y-4 text-[#A3A3A3] text-sm leading-relaxed font-light italic">
                <p>The Site and Program are provided on an "as-is" and "as-available" basis. We make no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, or reliability of our educational content.</p>
                <p><strong>EARNINGS DISCLAIMER:</strong> Any individual results discussed in the Program are not typical. We cannot and do not guarantee your ability to get results or earn any money with our ideas, information, tools, or strategies.</p>
              </div>
            </section>

            <section id="section-6" className="legal-section mb-20">
              <h2 className="font-['Oswald'] text-lg text-white uppercase tracking-widest mb-8 border-b border-white/5 pb-4">6. Limitation of Liability</h2>
              <div className="space-y-4 text-[#A3A3A3] text-sm leading-relaxed font-light italic">
                <p>To the maximum extent permitted by law, The Alpha Collective shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the Site or Program.</p>
              </div>
            </section>

            <section id="section-7" className="legal-section mb-20">
              <h2 className="font-['Oswald'] text-lg text-white uppercase tracking-widest mb-8 border-b border-white/5 pb-4">7. Privacy and Data Collection</h2>
              <div className="space-y-4 text-[#A3A3A3] text-sm leading-relaxed font-light italic">
                <p>We collect minimal personal data to facilitate your participation. By using our services, you consent to our data practices as outlined in our Privacy Policy. We utilize secure encryption and do not share your last name or contact details with unauthorized third parties.</p>
              </div>
            </section>

            <section id="section-8" className="legal-section mb-20">
              <h2 className="font-['Oswald'] text-lg text-white uppercase tracking-widest mb-8 border-b border-white/5 pb-4">8. AI Brand Persona and Synthetic Content</h2>
              <div className="space-y-4 text-[#A3A3A3] text-sm leading-relaxed font-light italic">
                <p><strong>IMPORTANT DISCLOSURE:</strong> The brand persona "Marcus Vance" is an AI-generated digital avatar. All visual representations of Marcus Vance are synthetic. The expertise, methodology, and strategic content are developed by human subject matter experts, but presented through this unified brand persona to maintain institutional focus.</p>
              </div>
            </section>

            <section id="section-9" className="legal-section mb-20">
              <h2 className="font-['Oswald'] text-lg text-white uppercase tracking-widest mb-8 border-b border-white/5 pb-4">9. Third-Party Links and Tools</h2>
              <div className="space-y-4 text-[#A3A3A3] text-sm leading-relaxed font-light italic">
                <p>Our Site may contain links to third-party services or tools. We are not responsible for the content, privacy policies, or practices of any third-party websites.</p>
              </div>
            </section>

            <section id="section-10" className="legal-section mb-20">
              <h2 className="font-['Oswald'] text-lg text-white uppercase tracking-widest mb-8 border-b border-white/5 pb-4">10. Modifications to Terms</h2>
              <div className="space-y-4 text-[#A3A3A3] text-sm leading-relaxed font-light italic">
                <p>We reserve the right to modify these Terms at any time without prior notice. Your continued use of the Site after changes are posted constitutes your acceptance of the revised Terms.</p>
              </div>
            </section>

            <section id="section-11" className="legal-section mb-64">
              <h2 className="font-['Oswald'] text-lg text-white uppercase tracking-widest mb-8 border-b border-white/5 pb-4">11. Governing Law</h2>
              <div className="space-y-4 text-[#A3A3A3] text-sm leading-relaxed font-light italic">
                <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which The Alpha Collective is registered, without regard to its conflict of law principles.</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-20 border-t border-white/5 bg-[#050505] text-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-8 flex justify-center gap-12 text-[10px] font-['Oswald'] uppercase tracking-[0.2em]">
          <span>© 2024 THE ALPHA COLLECTIVE</span>
          <Link to="/philosophy" className="hover:text-[#C9A84C] transition-all">THE PHILOSOPHY</Link>
          <Link to="/" className="hover:text-[#C9A84C] transition-all">RETURN HOME</Link>
        </div>
      </footer>
    </div>
  );
};

export default TermsPage;
