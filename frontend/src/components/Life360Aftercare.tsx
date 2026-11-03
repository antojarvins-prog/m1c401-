import React from 'react';
import { Heart, Briefcase, Compass, Users, CheckCircle, ArrowRight, ShieldCheck, Sparkles, Clock } from 'lucide-react';

export default function Life360Aftercare() {
  const pillars = [
    {
      title: "FAMILY",
      sub: "Relationships & Healing",
      desc: "Structured family reconciliation sessions, rebuilding fractured trust, boundary coaching, and healthy communication workshops.",
      icon: Heart,
    },
    {
      title: "CAREER",
      sub: "Employment & Vocation",
      desc: "Resuming professional roles, managing workplace executive stress, interview confidence, and workplace trigger mitigation.",
      icon: Briefcase,
    },
    {
      title: "INDEPENDENCE",
      sub: "Life Skills & Finance",
      desc: "Re-establishing financial self-discipline, personal routines, somatic wellness, and managing independent unstructured time.",
      icon: Compass,
    },
    {
      title: "RECOVERY",
      sub: "Clinical & Peer Support",
      desc: "Psychiatric check-ins, medication continuity reviews, SPJ Alumni Recovery Network meetings, and rapid-response relapse protocols.",
      icon: Users,
    }
  ];

  const rhythm = [
    { period: "Days 1–30", frequency: "Weekly Clinical Follow-up", desc: "Frequent recovery check-ins, vital medication review, and close family reintegration support." },
    { period: "Days 31–60", frequency: "Fortnightly Clinical Review", desc: "Coping skills reinforcement, trigger debriefs, and local recovery community immersion." },
    { period: "Days 61–90", frequency: "Monthly Review & Vocational", desc: "Active vocational reintegration coaching, career monitoring, and ongoing family therapy." },
    { period: "Months 4–6", frequency: "Monthly Clinical Reviews", desc: "Structured sober social activities, accountability reviews, and relapse risk audits." },
    { period: "Months 7–9", frequency: "Independence Milestones", desc: "Clinically indicated follow-up, full independence review, and peer leadership coaching." },
    { period: "Months 10–12", frequency: "Long-Term Continuing Care", desc: "Comprehensive 1-year recovery evaluation and transition into the SPJ Lifetime Alumni Network." }
  ];

  const components = [
    "Psychiatric Continuity & Refills",
    "Couples & Family Support Circle",
    "Executive & Vocational Reintegration",
    "Financial Rehabilitation Guidance",
    "Active Recovery Community",
    "Rapid Relapse Response Protocol",
    "SPJ Alumni Recovery Network"
  ];

  return (
    <section id="life360" className="py-20 lg:py-28 bg-navy-900 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            12-Month Post-Discharge Framework
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            LIFE360 —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Recovery Must Work in Real Life
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            The true test of sobriety begins when returning to family, career, and daily temptations. LIFE360 provides a 12-month clinical scaffolding so no one walks alone.
          </p>
        </div>

        {/* 4 Quadrants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-7 rounded-2xl bg-navy-850 border border-slate-700/60 hover:border-teal-500/40 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-5 group-hover:bg-teal-500/20 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 font-display">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-teal-400 mb-3">
                    {item.sub}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 12-Month Cadence Timeline */}
        <div className="rounded-3xl bg-navy-850 border border-teal-500/30 p-8 lg:p-12 shadow-2xl relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono">
                The Continuity Cadence
              </span>
              <h3 className="text-2xl font-bold text-white font-display mt-1">
                Structured 12-Month Aftercare Rhythm
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300 bg-navy-900 px-4 py-2 rounded-xl border border-slate-800">
              <Clock className="w-4 h-4 text-teal-400" />
              <span>Full Year Structured Accountability</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {rhythm.map((rh, rIdx) => (
              <div key={rIdx} className="p-5 rounded-2xl bg-navy-900 border border-slate-700/60 hover:border-slate-600 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-teal-300 px-2.5 py-0.5 rounded bg-teal-500/10 border border-teal-500/20 font-mono">
                    {rh.period}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">Milestone {rIdx + 1}</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5 font-display">
                  {rh.frequency}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {rh.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Component Badges */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
              Integrated Components:
            </span>
            {components.map((comp, cIdx) => (
              <span key={cIdx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-900 border border-teal-500/20 text-xs text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-teal-400" />
                <span>{comp}</span>
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
