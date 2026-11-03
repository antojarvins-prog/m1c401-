import React from 'react';
import { Brain, HeartPulse, RefreshCw, Stethoscope, Briefcase, AlertCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ClinicalDistinction() {
  const specializations = [
    {
      title: "Psychiatric Treatment",
      desc: "Comprehensive dual-diagnosis care actively identifying and managing coexisting depression, anxiety, trauma, and mood fluctuations.",
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
      tag: "Habit Science"
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
    <section id="clinical-distinction" className="py-20 lg:py-28 bg-linen-50 border-t border-linen-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 border border-sage-300 text-forest-800 text-xs font-semibold uppercase tracking-wider font-sans">
            Clinical Distinction & Boundary
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal text-forest-950 font-serif tracking-tight">
            A Rehabilitation Institution —{' '}
            <span className="italic text-forest-700">Not an Acute Detox Hospital</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans font-light">
            SPJ specialises in what happens <strong className="font-semibold text-forest-900">after</strong> the immediate withdrawal crisis has passed: treating co-occurring mental health conditions, restructuring habits, and restoring independent life.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-14">
          {specializations.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-ivory-pure border border-linen-300 hover:border-sage-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-linen-100 border border-linen-200 flex items-center justify-center text-forest-800 mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-forest-700" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-bronze-700 mb-1.5 block font-sans">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-forest-950 mb-2 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-linen-200 flex items-center text-xs font-medium text-forest-800 font-sans">
                  <span>90-Day Programme Core</span>
                  <CheckCircle2 className="w-3.5 h-3.5 ml-1.5 text-sage-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Operating Boundary Banner */}
        <div className="rounded-3xl bg-ivory-pure border border-linen-300 p-7 sm:p-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-linen-150 border border-linen-300 text-forest-800 shrink-0 mt-0.5">
              <AlertCircle className="w-6 h-6 text-bronze-600" />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-linen-200 text-forest-900 font-sans">
                  Operating Boundary
                </span>
                <span className="text-sm font-semibold text-forest-950 font-sans">Hospital Emergency Transfer Agreement</span>
              </div>
              <p className="text-sm text-charcoal-700 leading-relaxed max-w-3xl font-sans font-light">
                Acute alcohol detoxification, severe complicated drug withdrawal, uncontrolled seizures, and delirium tremens (DT) management are hospital-referred. We maintain formal hospital transfer agreements with leading multispecialty hospitals in Bengaluru. Routine nursing observation and medication administration in our facility do not substitute for intensive hospital-level withdrawal care.
              </p>
            </div>
          </div>

          <a 
            href="#screener" 
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-800 hover:bg-forest-900 text-ivory text-xs font-medium transition-all shadow-sm font-sans"
          >
            <span>Review Admission Criteria</span>
            <ArrowUpRight className="w-4 h-4 text-bronze-300" />
          </a>
        </div>

      </div>
    </section>
  );
}
