import React from 'react';
import { Stethoscope, Brain, HeartPulse, RefreshCw, Briefcase, AlertCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ClinicalDistinction() {
  const specializations = [
    {
      title: "Psychiatric Treatment",
      desc: "Comprehensive dual-diagnosis care actively identifying and managing coexisting depression, anxiety, PTSD, and mood conditions.",
      icon: Brain,
      tag: "Medical Oversight"
    },
    {
      title: "Psychological Recovery",
      desc: "Evidence-informed cognitive restructuring, emotional regulation skills, and trauma-informed clinical counselling.",
      icon: HeartPulse,
      tag: "Emotional Healing"
    },
    {
      title: "Behavioural Change",
      desc: "The structured 45-day MIND360 curriculum embedded within the 90-day stay to dismantle maladaptive coping habits.",
      icon: RefreshCw,
      tag: "Action & Habits"
    },
    {
      title: "Functional Restoration",
      desc: "Re-establishing circadian rhythms, structured daily living routines, executive functioning, and self-reliance.",
      icon: Stethoscope,
      tag: "Daily Living"
    },
    {
      title: "Sustainable Reintegration",
      desc: "Structured reconciliation with family, career restoration coaching, and peer support network building.",
      icon: Briefcase,
      tag: "Real-Life Readiness"
    }
  ];

  return (
    <section id="clinical-distinction" className="py-20 lg:py-28 bg-navy-900 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            Clinical Distinction & Boundary
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            A Rehabilitation Institution —{' '}
            <span className="text-slate-400 font-medium">Not an Acute Detox Hospital</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            The acute crisis is only the beginning. True recovery happens in what unfolds next: rebuilding the mind, resetting daily behaviors, and establishing lasting independence.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mb-12">
          {specializations.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-navy-850 border border-slate-700/60 hover:border-teal-500/50 hover:bg-navy-800 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-5 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400/90 mb-1 block">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 flex items-center text-xs font-medium text-teal-400">
                  <span>Included in 90 Days</span>
                  <CheckCircle2 className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Operating Boundary Banner (Slide 03) */}
        <div className="rounded-2xl bg-gradient-to-r from-navy-950 via-navy-850 to-navy-950 border border-teal-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 shrink-0 mt-0.5">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-500/20 text-teal-300">
                  Operating Boundary
                </span>
                <span className="text-sm font-semibold text-white">Emergency Medical Protocol</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                Acute alcohol detoxification, severe complicated drug withdrawal, uncontrolled seizures, and delirium tremens (DT) management are handled via immediate hospital transfer / tertiary medical referral. Routine nursing observation, vital checks, and prescribed medications in our facility do not replace hospital-grade intensive withdrawal units.
              </p>
            </div>
          </div>

          <a 
            href="#screener" 
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-750 text-teal-300 hover:text-white border border-teal-500/30 text-xs font-semibold transition-all"
          >
            <span>Review Admission Criteria</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
