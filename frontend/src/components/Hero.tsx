import React from 'react';
import { Shield, ArrowRight, Sparkles, CheckCircle2, Heart, Activity, Users, Compass, Lock } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreScreener: () => void;
}

export default function Hero({ onOpenBooking, onExploreScreener }: HeroProps) {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-navy-900 via-navy-850 to-navy-900">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Institutional Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/90 border border-teal-500/30 text-teal-300 text-xs font-medium shadow-inner">
            <span className="w-2 h-2 rounded-full bg-teal-400"></span>
            <span>SPJ Institutional Blueprint • Bengaluru</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300 font-semibold">RESET 360°</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy-800/60 border border-slate-700/60 text-slate-300 text-xs font-medium">
            <Shield className="w-3.5 h-3.5 text-teal-400" />
            <span>Non-Coercive • Evidence-Informed Care</span>
          </div>
        </div>

        {/* Hero Typography */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-display">
            A New Beginning.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400">
              A Different Way of Living.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            An integrated, evidence-informed residential rehabilitation programme in Bengaluru for alcohol and substance-use disorders. Combining psychiatric care, behavioural transformation, functional rehabilitation, and 12 months of structured recovery support.
          </p>

          {/* Action Button Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold text-base shadow-xl shadow-teal-600/25 transition-all flex items-center justify-center gap-3 active:scale-98 group"
            >
              <span>Schedule Confidential Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreScreener}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-navy-800/90 hover:bg-navy-750 text-slate-200 hover:text-white border border-slate-700/80 font-semibold text-base transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Interactive Suitability Screener</span>
            </button>
          </div>

          {/* Discretion & Privacy Note */}
          <div className="flex items-center justify-center gap-6 text-xs text-slate-400 pt-2">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-teal-400" />
              100% Confidential Triage
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Voluntary Informed Care
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-teal-400" />
              1.5:1 Staff-to-Resident Ratio
            </span>
          </div>
        </div>

        {/* 4 Pillars Stat Metric Strip (Directly from Blueprint Slide 01) */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          
          {/* Stat 1 */}
          <div className="p-6 rounded-2xl bg-navy-800/70 border border-slate-700/60 backdrop-blur-md hover:border-teal-500/40 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight group-hover:text-teal-400 transition-colors">
                15
              </span>
              <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="text-sm font-bold text-slate-200">Residential Beds</div>
            <p className="text-xs text-slate-400 mt-1">
              Boutique, intimate capacity ensuring individualized psychiatric and therapeutic attention.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="p-6 rounded-2xl bg-navy-800/70 border border-slate-700/60 backdrop-blur-md hover:border-teal-500/40 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight group-hover:text-teal-400 transition-colors">
                90
              </span>
              <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <Activity className="w-5 h-5" />
              </div>
            </div>
            <div className="text-sm font-bold text-slate-200">Programme Days</div>
            <p className="text-xs text-slate-400 mt-1">
              Individually adjusted residential rehabilitation pathway across 7 developmental stages.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="p-6 rounded-2xl bg-navy-800/70 border border-slate-700/60 backdrop-blur-md hover:border-teal-500/40 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight group-hover:text-teal-400 transition-colors">
                24/7
              </span>
              <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <Shield className="w-5 h-5" />
              </div>
            </div>
            <div className="text-sm font-bold text-slate-200">Residential Supervision</div>
            <p className="text-xs text-slate-400 mt-1">
              Continuous medical, psychiatric, and qualified nursing oversight around the clock.
            </p>
          </div>

          {/* Stat 4 */}
          <div className="p-6 rounded-2xl bg-navy-800/70 border border-slate-700/60 backdrop-blur-md hover:border-teal-500/40 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight group-hover:text-teal-400 transition-colors">
                12
              </span>
              <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <Heart className="w-5 h-5" />
              </div>
            </div>
            <div className="text-sm font-bold text-slate-200">Months Aftercare</div>
            <p className="text-xs text-slate-400 mt-1">
              LIFE360 continuum supporting family, career, independent living, and relapse response.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
