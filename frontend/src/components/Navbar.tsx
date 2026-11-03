import React, { useState } from 'react';
import { Shield, Phone, Sparkles, Menu, X, ArrowRight, HeartHandshake, Compass } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Clinical Notification Banner */}
      <div className="bg-gradient-to-r from-navy-950 via-teal-950 to-navy-950 border-b border-teal-500/20 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-300">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="text-teal-300 font-medium">Boutique 15-Bed Residential Rehabilitation</span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">SPJ • Bengaluru, Karnataka, India</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-400">Confidential 24/7 Clinical Triage:</span>
            <a 
              href="tel:+918029559040" 
              className="text-teal-300 font-semibold hover:text-teal-200 flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 (080) 2955-9040
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-navy-900/90 backdrop-blur-md border-b border-navy-750">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold text-white tracking-tight font-display">RESET 360°</span>
                  <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">SPJ</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium tracking-wide">A New Beginning • Bengaluru</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
              <a href="#clinical-distinction" className="hover:text-teal-400 transition-colors">Philosophy</a>
              <a href="#programme-90" className="hover:text-teal-400 transition-colors">90-Day Journey</a>
              <a href="#mind360" className="hover:text-teal-400 transition-colors">MIND360</a>
              <a href="#life360" className="hover:text-teal-400 transition-colors">LIFE360 Aftercare</a>
              <a href="#facility" className="hover:text-teal-400 transition-colors">15-Bed Sanctuary</a>
              <a href="#team" className="hover:text-teal-400 transition-colors">Clinical Team</a>
              <a href="#screener" className="text-teal-300 hover:text-teal-200 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                Self-Assessment
              </a>
            </nav>

            {/* Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-semibold text-sm shadow-md shadow-teal-600/25 hover:from-teal-400 hover:to-emerald-500 transition-all active:scale-95"
              >
                <span>Confidential Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="px-3 py-1.5 rounded-lg bg-teal-500 text-white text-xs font-semibold"
              >
                Consult
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-navy-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-950 border-b border-navy-750 px-4 pt-3 pb-6 space-y-3 animate-fade-in">
            <a 
              href="#clinical-distinction" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-teal-400 border-b border-navy-800 font-medium text-sm"
            >
              Philosophy & Distinct Model
            </a>
            <a 
              href="#programme-90" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-teal-400 border-b border-navy-800 font-medium text-sm"
            >
              The 90-Day RESET 360° Pathway
            </a>
            <a 
              href="#mind360" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-teal-400 border-b border-navy-800 font-medium text-sm"
            >
              MIND360 Behavioural Curriculum
            </a>
            <a 
              href="#life360" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-teal-400 border-b border-navy-800 font-medium text-sm"
            >
              LIFE360 12-Month Aftercare
            </a>
            <a 
              href="#facility" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-teal-400 border-b border-navy-800 font-medium text-sm"
            >
              15-Bed Sanctuary & Space Model
            </a>
            <a 
              href="#team" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-teal-400 border-b border-navy-800 font-medium text-sm"
            >
              Multidisciplinary Clinical Team
            </a>
            <a 
              href="#screener" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-teal-400 font-semibold text-sm"
            >
              ✦ Confidential Suitability Screener
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-semibold text-sm text-center shadow-lg"
              >
                Book a Confidential Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
