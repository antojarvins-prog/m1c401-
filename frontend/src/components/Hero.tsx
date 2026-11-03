import React from 'react';
import { ArrowRight, Sparkles, Shield, Lock, CheckCircle2, Users, Activity, Heart, Clock } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreScreener: () => void;
}

export default function Hero({ onOpenBooking, onExploreScreener }: HeroProps) {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 bg-ivory overflow-hidden">
      
      {/* Background Architectural Glows & Soft Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-sage-100/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[350px] bg-linen-200/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-linen-150 border border-linen-300 text-forest-900 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-sage-500"></span>
            <span className="font-semibold">SPJ Institutional Blueprint • Bengaluru</span>
            <span className="text-linen-400">|</span>
            <span className="text-charcoal-600 font-serif italic text-sm">RESET 360°</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ivory-pure border border-linen-300 text-charcoal-700 text-xs font-medium shadow-sm">
            <Shield className="w-3.5 h-3.5 text-sage-600" />
            <span>Person-Centred • Non-Coercive Residential Care</span>
          </div>
        </div>

        {/* Editorial Headline & Mission */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-forest-950 font-serif tracking-tight leading-[1.08]">
            A New Beginning.{' '}
            <span className="italic text-forest-700 block sm:inline font-serif">
              A Different Way of Living.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-charcoal-700 font-sans font-light leading-relaxed max-w-3xl mx-auto">
            An integrated, evidence-informed residential rehabilitation sanctuary in Bengaluru for alcohol and substance-use disorders. Combining 90 days of psychiatric care and behavioural transformation with 12 months of structured aftercare.
          </p>

          {/* Action Button Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-forest-800 hover:bg-forest-900 text-ivory font-medium text-sm tracking-wide shadow-lg shadow-forest-950/15 transition-all flex items-center justify-center gap-3 active:scale-98 group font-sans"
            >
              <span>Schedule Confidential Consultation</span>
              <ArrowRight className="w-4 h-4 text-bronze-300 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreScreener}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-linen-100 hover:bg-linen-200 text-forest-950 border border-linen-300 font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-sm font-sans"
            >
              <Sparkles className="w-4 h-4 text-bronze-600" />
              <span>Interactive Suitability Assessment</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-charcoal-500 pt-2 font-sans">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-sage-600" />
              Absolute Medical Discretion
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-sage-600" />
              100% Voluntary Informed Consent
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-sage-600" />
              1.5:1 Staff-to-Resident Ratio (20+ for 15 Beds)
            </span>
          </div>
        </div>

        {/* Architectural Sanctuary Showcase Banner */}
        <div className="mt-14 max-w-5xl mx-auto rounded-3xl bg-linen-100 border border-linen-300/80 p-8 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-bronze-700 font-sans">
                <span>The Sanctuary Philosophy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-forest-950 leading-tight">
                Designed for Calm, Human Dignity & Restorative Healing
              </h2>
              <p className="text-sm text-charcoal-700 leading-relaxed font-sans">
                Rather than an institutional asylum or clinical hospital ward, SPJ is envisioned as a daylight-filled sanctuary. Crafted with natural timber, acoustic calm, and thoughtful communal and private spaces, it fosters genuine recovery through peace, medical safety, and individual respect.
              </p>
              <div className="pt-2 flex items-center gap-6 text-xs text-forest-900 font-medium font-sans">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze-500"></span>
                  Natural Daylight & Ventilation
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze-500"></span>
                  Acoustic Privacy
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze-500"></span>
                  Restorative Living
                </span>
              </div>
            </div>

            <div className="md:col-span-5 bg-ivory-pure rounded-2xl p-6 border border-linen-300 shadow-sm space-y-3.5">
              <div className="text-xs font-bold uppercase tracking-widest text-charcoal-400 font-sans">
                Key Parameters at a Glance
              </div>
              <div className="divide-y divide-linen-200 text-sm">
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-charcoal-600">Location:</span>
                  <strong className="text-forest-950 font-sans">Bengaluru, Karnataka</strong>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-charcoal-600">Initial Pilot Capacity:</span>
                  <strong className="text-forest-950 font-sans">15 Residential Beds</strong>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-charcoal-600">Residential Pathway:</span>
                  <strong className="text-forest-950 font-sans">90 Programme Days</strong>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-charcoal-600">Post-Discharge Support:</span>
                  <strong className="text-forest-950 font-sans">12 Months (LIFE360)</strong>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Core Pillars Stat Strip */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          
          {/* Card 1 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-ivory-pure border border-linen-300/80 shadow-sm hover:border-sage-400 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-4xl sm:text-5xl font-serif text-forest-900 group-hover:text-forest-700 transition-colors">
                15
              </span>
              <div className="w-9 h-9 rounded-full bg-sage-50 border border-sage-200 flex items-center justify-center text-forest-800">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-sm font-bold text-forest-950 font-sans">Residential Beds</div>
            <p className="text-xs text-charcoal-600 mt-1.5 leading-relaxed font-sans">
              Boutique, intimate scale ensuring deep therapeutic alliance and personal dignity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-ivory-pure border border-linen-300/80 shadow-sm hover:border-sage-400 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-4xl sm:text-5xl font-serif text-forest-900 group-hover:text-forest-700 transition-colors">
                90
              </span>
              <div className="w-9 h-9 rounded-full bg-sage-50 border border-sage-200 flex items-center justify-center text-forest-800">
                <Activity className="w-4 h-4" />
              </div>
            </div>
            <div className="text-sm font-bold text-forest-950 font-sans">Programme Days</div>
            <p className="text-xs text-charcoal-600 mt-1.5 leading-relaxed font-sans">
              Individually adjusted residential rehabilitation pathway across 7 stages.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-ivory-pure border border-linen-300/80 shadow-sm hover:border-sage-400 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-4xl sm:text-5xl font-serif text-forest-900 group-hover:text-forest-700 transition-colors">
                24/7
              </span>
              <div className="w-9 h-9 rounded-full bg-sage-50 border border-sage-200 flex items-center justify-center text-forest-800">
                <Shield className="w-4 h-4" />
              </div>
            </div>
            <div className="text-sm font-bold text-forest-950 font-sans">Clinical Supervision</div>
            <p className="text-xs text-charcoal-600 mt-1.5 leading-relaxed font-sans">
              Around-the-clock qualified nursing and continuous physician oversight.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-ivory-pure border border-linen-300/80 shadow-sm hover:border-sage-400 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-4xl sm:text-5xl font-serif text-forest-900 group-hover:text-forest-700 transition-colors">
                12
              </span>
              <div className="w-9 h-9 rounded-full bg-sage-50 border border-sage-200 flex items-center justify-center text-forest-800">
                <Heart className="w-4 h-4" />
              </div>
            </div>
            <div className="text-sm font-bold text-forest-950 font-sans">Months Continuity</div>
            <p className="text-xs text-charcoal-600 mt-1.5 leading-relaxed font-sans">
              Structured LIFE360 aftercare supporting family, career, and relapse prevention.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
