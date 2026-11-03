import React from 'react';
import { Compass, Phone, Mail, MapPin, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-navy-800 text-slate-400 text-xs pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight font-display">RESET 360°</span>
                <span className="text-xs text-teal-400 ml-2 font-mono">SPJ • Bengaluru</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An integrated, evidence-informed residential rehabilitation institution for alcohol and substance-use disorders. Combining 90 days of psychiatric care and behavioural transformation with 12 months of structured aftercare.
            </p>

            <div className="pt-2 text-[11px] text-slate-500 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>SPJ Residential Facility • Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <a href="tel:+918029559040" className="hover:text-teal-300">+91 (080) 2955-9040 (24/7 Clinical Triage)</a>
              </div>
            </div>
          </div>

          {/* Core Programmes Col */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Core Programmes
            </div>
            <ul className="space-y-2">
              <li><a href="#programme-90" className="hover:text-teal-300 transition-colors">90-Day RESET 360° Pathway</a></li>
              <li><a href="#mind360" className="hover:text-teal-300 transition-colors">MIND360 Behavioural Curriculum</a></li>
              <li><a href="#mind360" className="hover:text-teal-300 transition-colors">Trigger Simulation Lab</a></li>
              <li><a href="#life360" className="hover:text-teal-300 transition-colors">LIFE360 12-Month Aftercare</a></li>
              <li><a href="#screener" className="hover:text-teal-300 transition-colors">Suitability Assessment</a></li>
            </ul>
          </div>

          {/* Care & Facility Col */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Institutional Model
            </div>
            <ul className="space-y-2">
              <li><a href="#clinical-distinction" className="hover:text-teal-300 transition-colors">Post-Crisis Clinical Distinction</a></li>
              <li><a href="#facility" className="hover:text-teal-300 transition-colors">15-Bed Sanctuary (2,710 Sq. Ft.)</a></li>
              <li><a href="#team" className="hover:text-teal-300 transition-colors">Multidisciplinary Staffing (20+)</a></li>
              <li><a href="#facility" className="hover:text-teal-300 transition-colors">Daily Living Schedule</a></li>
              <li><a href="#clinical-distinction" className="hover:text-teal-300 transition-colors">Hospital Emergency Protocols</a></li>
            </ul>
          </div>

          {/* Ethical Charter Col */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Care & Ethics
            </div>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> Non-Coercive Care Charter</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> Zero Forced Pickups</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> Medical Director Primacy</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> Dual-Diagnosis Treatment</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> Absolute Confidentiality</li>
            </ul>
          </div>

        </div>

        {/* Emergency Disclaimer Banner (Slide 03) */}
        <div className="p-4 rounded-xl bg-navy-900 border border-slate-800 text-[11px] text-slate-400 leading-relaxed mb-8">
          <strong className="text-slate-300">Clinical Distinction Notice: </strong>
          SPJ is an integrated residential rehabilitation institution specialising in post-withdrawal psychiatric care, behavioural transformation, and functional reintegration. Acute alcohol detoxification, complicated drug withdrawal, delirium tremens (DT), and active medical emergencies are referred to partner multispecialty tertiary hospitals.
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} RESET 360° | SPJ Institutional Development. All rights reserved. Bengaluru, Karnataka.
          </div>
          <div className="flex items-center gap-6">
            <span>A New Beginning. A Different Way of Living.</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-teal-400 transition-colors"
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
