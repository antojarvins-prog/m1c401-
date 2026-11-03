import React from 'react';
import { Compass, Phone, Mail, MapPin, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-950 border-t border-forest-900 text-linen-300 text-xs pt-16 pb-12 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-900 border border-forest-800 flex items-center justify-center text-bronze-300 shadow-inner">
                <Compass className="w-5 h-5 text-bronze-300" />
              </div>
              <div>
                <span className="text-xl font-serif font-light text-linen-100 tracking-wide">RESET 360°</span>
                <span className="text-xs text-sage-300 ml-2 font-mono uppercase tracking-wider">SPJ • Bengaluru</span>
              </div>
            </div>

            <p className="text-xs text-linen-300/80 leading-relaxed max-w-sm">
              An integrated, evidence-informed residential rehabilitation sanctuary for alcohol and substance-use disorders. Combining 90 days of psychiatric care and behavioural transformation with 12 months of structured aftercare.
            </p>

            <div className="pt-2 text-[11px] text-linen-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-bronze-400 shrink-0" />
                <span>SPJ Residential Sanctuary • Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-bronze-400 shrink-0" />
                <a href="tel:+918029559040" className="hover:text-bronze-300 transition-colors">
                  +91 (080) 2955-9040 (24/7 Clinical Triage)
                </a>
              </div>
            </div>
          </div>

          {/* Core Programmes Col */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-linen-200 font-mono">
              Core Programmes
            </div>
            <ul className="space-y-2">
              <li><a href="#programme-90" className="text-linen-400 hover:text-bronze-300 transition-colors">90-Day RESET 360° Pathway</a></li>
              <li><a href="#mind360" className="text-linen-400 hover:text-bronze-300 transition-colors">MIND360 Behavioural Curriculum</a></li>
              <li><a href="#mind360" className="text-linen-400 hover:text-bronze-300 transition-colors">Trigger Simulation Lab</a></li>
              <li><a href="#life360" className="text-linen-400 hover:text-bronze-300 transition-colors">LIFE360 12-Month Aftercare</a></li>
              <li><a href="#screener" className="text-linen-400 hover:text-bronze-300 transition-colors">Suitability Assessment</a></li>
            </ul>
          </div>

          {/* Care & Facility Col */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-linen-200 font-mono">
              Sanctuary Model
            </div>
            <ul className="space-y-2">
              <li><a href="#clinical-distinction" className="text-linen-400 hover:text-bronze-300 transition-colors">Post-Crisis Clinical Distinction</a></li>
              <li><a href="#facility" className="text-linen-400 hover:text-bronze-300 transition-colors">15-Bed Sanctuary (2,710 Sq. Ft.)</a></li>
              <li><a href="#team" className="text-linen-400 hover:text-bronze-300 transition-colors">Multidisciplinary Staffing (20+)</a></li>
              <li><a href="#facility" className="text-linen-400 hover:text-bronze-300 transition-colors">Daily Living Schedule</a></li>
              <li><a href="#clinical-distinction" className="text-linen-400 hover:text-bronze-300 transition-colors">Hospital Emergency Protocols</a></li>
            </ul>
          </div>

          {/* Ethical Charter Col */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-linen-200 font-mono">
              Care & Ethics
            </div>
            <ul className="space-y-2 text-linen-400">
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-sage-400 shrink-0" /> Non-Coercive Care Charter</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-sage-400 shrink-0" /> Zero Forced Admissions</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-sage-400 shrink-0" /> Medical Director Primacy</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-sage-400 shrink-0" /> Dual-Diagnosis Expertise</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-sage-400 shrink-0" /> Absolute Anonymity</li>
            </ul>
          </div>

        </div>

        {/* Emergency Disclaimer Banner */}
        <div className="p-4 rounded-2xl bg-forest-900/60 border border-forest-800/80 text-[11px] text-linen-300/90 leading-relaxed mb-8">
          <strong className="text-linen-100 font-medium">Clinical Distinction Notice: </strong>
          SPJ is an integrated residential rehabilitation sanctuary specialising in post-withdrawal psychiatric care, behavioural transformation, and functional reintegration. Acute alcohol detoxification, complicated drug withdrawal, delirium tremens (DT), and active medical emergencies are referred to partner multispecialty tertiary hospitals in Bengaluru.
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-forest-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-linen-400">
          <div>
            © {new Date().getFullYear()} RESET 360° | SPJ Institutional Sanctuary. All rights reserved. Bengaluru, Karnataka.
          </div>
          <div className="flex items-center gap-6">
            <span className="font-serif italic text-linen-300/80">A New Beginning. A Different Way of Living.</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-linen-300 hover:text-bronze-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
