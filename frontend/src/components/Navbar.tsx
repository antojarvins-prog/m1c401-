import React, { useState } from 'react';
import { Phone, Compass, ArrowRight, Menu, X, Sparkles, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Clinical Triage Ribbon */}
      <div className="bg-forest-900 border-b border-forest-800 text-xs py-2.5 px-4 sm:px-6 text-linen-100">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500"></span>
            </span>
            <span className="font-medium tracking-wide">SPJ Bengaluru • 15-Bed Residential Sanctuary</span>
            <span className="hidden md:inline text-forest-700">|</span>
            <span className="hidden md:inline text-linen-300">Non-Coercive • Evidence-Informed Recovery</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-linen-300 hidden sm:inline">24/7 Confidential Clinical Triage:</span>
            <a 
              href="tel:+918029559040" 
              className="text-bronze-300 font-semibold hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-bronze-400" />
              <span>+91 (080) 2955-9040</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur-md border-b border-linen-300/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22">
            
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-forest-800 flex items-center justify-center text-ivory shadow-md shadow-forest-900/15 group-hover:bg-forest-700 transition-colors">
                <Compass className="w-6 h-6 text-bronze-300" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold tracking-tight text-forest-950 font-serif">
                    RESET 360°
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-forest-700 px-1.5 py-0.5 rounded bg-linen-200 border border-linen-300 font-sans">
                    SPJ
                  </span>
                </div>
                <span className="text-[11px] text-charcoal-500 font-medium tracking-wider uppercase font-sans">
                  A New Beginning • Bengaluru
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-charcoal-700 font-sans">
              <a href="#clinical-distinction" className="hover:text-forest-800 transition-colors">Philosophy</a>
              <a href="#programme-90" className="hover:text-forest-800 transition-colors">90-Day Pathway</a>
              <a href="#mind360" className="hover:text-forest-800 transition-colors">MIND360</a>
              <a href="#life360" className="hover:text-forest-800 transition-colors">LIFE360 Aftercare</a>
              <a href="#facility" className="hover:text-forest-800 transition-colors">Sanctuary</a>
              <a href="#team" className="hover:text-forest-800 transition-colors">Clinical Team</a>
              <a href="#screener" className="text-forest-800 font-semibold hover:text-bronze-600 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-bronze-500" />
                <span>Self-Assessment</span>
              </a>
            </nav>

            {/* Right Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-800 hover:bg-forest-900 text-ivory font-medium text-xs tracking-wide shadow-sm hover:shadow-md transition-all active:scale-98 font-sans"
              >
                <span>Confidential Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-bronze-300" />
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="px-3.5 py-1.5 rounded-full bg-forest-800 text-ivory text-xs font-semibold"
              >
                Consult
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-charcoal-700 hover:text-forest-900 hover:bg-linen-150 transition-colors"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-ivory border-b border-linen-300 px-5 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl">
            <a 
              href="#clinical-distinction" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-charcoal-800 hover:text-forest-800 border-b border-linen-200 text-sm font-medium"
            >
              Clinical Philosophy & Boundaries
            </a>
            <a 
              href="#programme-90" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-charcoal-800 hover:text-forest-800 border-b border-linen-200 text-sm font-medium"
            >
              The 90-Day RESET 360° Pathway
            </a>
            <a 
              href="#mind360" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-charcoal-800 hover:text-forest-800 border-b border-linen-200 text-sm font-medium"
            >
              MIND360 Behavioural Curriculum
            </a>
            <a 
              href="#life360" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-charcoal-800 hover:text-forest-800 border-b border-linen-200 text-sm font-medium"
            >
              LIFE360 12-Month Aftercare
            </a>
            <a 
              href="#facility" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-charcoal-800 hover:text-forest-800 border-b border-linen-200 text-sm font-medium"
            >
              The 15-Bed Sanctuary (2,710 Sq. Ft.)
            </a>
            <a 
              href="#team" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-charcoal-800 hover:text-forest-800 border-b border-linen-200 text-sm font-medium"
            >
              Multidisciplinary Team (20+ Staff)
            </a>
            <a 
              href="#screener" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-forest-800 font-semibold text-sm"
            >
              ✦ Confidential Suitability Assessment
            </a>
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-forest-800 text-ivory font-semibold text-sm shadow-md"
              >
                Schedule Confidential Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
