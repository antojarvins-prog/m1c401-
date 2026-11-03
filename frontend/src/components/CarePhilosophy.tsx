import React from 'react';
import { Heart, ShieldCheck, Stethoscope, UserCheck, Dumbbell, Clock, Check, Sparkles } from 'lucide-react';

export default function CarePhilosophy() {
  const principles = [
    {
      num: "01",
      title: "Addiction is Treatable",
      desc: "Substance dependence is a complex neurobiological and behavioural health condition. We reject moral judgement, stigma, guilt, or punitive regimes.",
      icon: Heart,
    },
    {
      num: "02",
      title: "Medical Safety Comes First",
      desc: "Every resident undergoes rigorous clinical assessment. Physical health, sleep architecture, and withdrawal risks are continually monitored by physicians and nurses.",
      icon: ShieldCheck,
    },
    {
      num: "03",
      title: "Psychiatric Care is Essential",
      desc: "Dual-diagnosis care is standard. Underlying depression, trauma, generalized anxiety, and mood fluctuations are treated alongside addiction.",
      icon: Stethoscope,
    },
    {
      num: "04",
      title: "Recovery is Individual",
      desc: "No cookie-cutter solutions. Each resident receives a bespoke Individual Recovery Blueprint adjusted continually through weekly multidisciplinary reviews.",
      icon: UserCheck,
    },
    {
      num: "05",
      title: "Behaviour Changes Through Practice",
      desc: "Therapy cannot remain purely theoretical. Coping skills, distress tolerance, and boundaries are practiced daily in real-world simulations.",
      icon: Dumbbell,
    },
    {
      num: "06",
      title: "Recovery Continues After Discharge",
      desc: "Completing 90 residential days is a milestone, not the finish line. Our structured 12-month LIFE360 continuity ensures long-term relapse prevention.",
      icon: Clock,
    },
  ];

  const objectives = [
    "Clinical Stabilisation",
    "Understanding Substance Neurobiology",
    "Deep Trigger Awareness",
    "Emotional Regulation Mastery",
    "Psychiatric Optimization",
    "Healthy Circadian Routines",
    "Physical Health & Nutrition",
    "Family Reconciliation",
    "Vocational & Career Goals",
    "Lifelong Recovery Network"
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-850 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            Care Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Person-Centred Recovery,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Built Around Six Principles
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every clinical protocol, therapeutic interaction, and daily routine at SPJ is grounded in respect, science, and medical safety.
          </p>
        </div>

        {/* 6 Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-7 rounded-2xl bg-navy-900 border border-slate-700/60 hover:border-emerald-500/40 transition-all group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black tracking-widest text-emerald-400 font-mono">
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Non-Coercive Care Charter (Slide 14) */}
        <div className="rounded-3xl bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 border border-emerald-500/30 p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-4xl space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                Ethical Standard & Patient Rights
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Our Uncompromising Non-Coercive Care Charter
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We stand in stark contrast to unregulated facilities. At SPJ, there is strictly <strong className="text-white">no punitive physical punishment, no humiliation, no deprivation of food, no forced excessive exercise, no public shaming, and no abusive isolation</strong>. Residential admission is never blanket permission for involuntary confinement. Every resident retains dignity, personal autonomy, and privacy.
            </p>

            {/* Treatment Objectives Tag Cloud */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                Core Clinical & Therapeutic Objectives:
              </span>
              <div className="flex flex-wrap gap-2">
                {objectives.map((obj, i) => (
                  <span 
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-800/80 border border-slate-700/60 text-xs font-medium text-slate-200"
                  >
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>{obj}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
