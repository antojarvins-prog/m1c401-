import React from 'react';
import { Heart, ShieldCheck, Stethoscope, UserCheck, Dumbbell, Clock, Check, Sparkles } from 'lucide-react';

export default function CarePhilosophy() {
  const principles = [
    {
      num: "01",
      title: "Addiction is Treatable",
      desc: "Substance-use disorder is an evidence-informed clinical condition. We reject moral judgement, punitive measures, humiliation, or stigma.",
      icon: Heart,
    },
    {
      num: "02",
      title: "Medical Safety Comes First",
      desc: "Withdrawal risk, physical health, sleep architecture, and chronic medical illnesses are thoroughly assessed prior to and throughout residential stay.",
      icon: ShieldCheck,
    },
    {
      num: "03",
      title: "Psychiatric Care is Essential",
      desc: "Dual-diagnosis is standard. Coexisting depression, trauma, generalized anxiety, and mood disorders are actively identified and treated.",
      icon: Stethoscope,
    },
    {
      num: "04",
      title: "Recovery is Individual",
      desc: "No rigid one-size-fits-all regimes. Each patient receives a bespoke Individual Recovery Blueprint continually calibrated by the clinical team.",
      icon: UserCheck,
    },
    {
      num: "05",
      title: "Behaviour Changes Through Practice",
      desc: "Therapy cannot remain purely theoretical. Adaptive coping skills, emotional regulation, and boundaries are practiced daily in real-world scenarios.",
      icon: Dumbbell,
    },
    {
      num: "06",
      title: "Recovery Continues After Discharge",
      desc: "Completing 90 residential days is a milestone, not the finish line. Structured follow-up through the 12-month LIFE360 framework ensures sustained stability.",
      icon: Clock,
    },
  ];

  const objectives = [
    "Clinical Stabilisation",
    "Understanding Substance-Use Disorder",
    "Trigger Awareness",
    "Coping & Emotional Regulation",
    "Psychiatric Optimization",
    "Healthy Circadian Routines",
    "Physical Health & Nutrition",
    "Family Reconciliation",
    "Vocational & Career Goals",
    "Lifelong Recovery Network"
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory border-t border-linen-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linen-200 border border-linen-300 text-forest-800 text-xs font-semibold uppercase tracking-wider font-sans">
            Care Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal text-forest-950 font-serif tracking-tight">
            Person-Centred Recovery,{' '}
            <span className="italic text-forest-700">Built Around Six Principles</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans font-light">
            Every clinical protocol, therapeutic interaction, and daily routine at SPJ is grounded in personal dignity, scientific evidence, and medical safety.
          </p>
        </div>

        {/* 6 Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-8 rounded-3xl bg-ivory-pure border border-linen-300/90 shadow-sm hover:border-sage-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-serif italic text-bronze-600 font-bold tracking-widest">
                      Principle {item.num}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-linen-100 border border-linen-200 flex items-center justify-center text-forest-800 group-hover:bg-sage-100 transition-colors">
                      <Icon className="w-4 h-4 text-forest-700" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-forest-950 mb-2.5 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed font-sans font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Non-Coercive Care Charter (Forest Sanctuary Card) */}
        <div className="rounded-3xl bg-forest-900 border border-forest-800 p-8 sm:p-12 text-linen-100 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-4xl space-y-6 relative z-10">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-bronze-400"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-bronze-300 font-sans">
                Our Ethical Standard & Patient Rights
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif font-normal text-ivory tracking-tight">
              The Uncompromising Non-Coercive Care Charter
            </h3>

            <p className="text-linen-200 text-sm sm:text-base leading-relaxed font-sans font-light">
              We stand in firm opposition to punitive rehabilitation practices. At SPJ, there is strictly <strong className="text-white font-medium">no punitive physical punishment, no humiliation, no deprivation of food, no forced excessive exercise, no public shaming, and no abusive isolation</strong>. Residential admission is never blanket permission for involuntary confinement. Every resident is treated with human empathy, privacy, and full autonomy.
            </p>

            {/* Treatment Objectives Tag Cloud */}
            <div className="pt-6 border-t border-forest-800">
              <span className="text-xs font-semibold text-linen-300 uppercase tracking-widest block mb-3 font-sans">
                Institutional Treatment Objectives:
              </span>
              <div className="flex flex-wrap gap-2">
                {objectives.map((obj, i) => (
                  <span 
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest-800/80 border border-forest-700 text-xs font-medium text-linen-150 font-sans"
                  >
                    <Check className="w-3.5 h-3.5 text-bronze-400" />
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
