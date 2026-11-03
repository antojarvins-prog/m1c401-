import React from 'react';
import { Heart, Briefcase, Compass, Users, CheckCircle, Clock } from 'lucide-react';

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
    <section id="life360" className="py-20 lg:py-28 bg-linen-50 border-t border-linen-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linen-200 border border-linen-300 text-forest-800 text-xs font-semibold uppercase tracking-wider font-sans">
            12-Month Post-Discharge Framework
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal text-forest-950 font-serif tracking-tight">
            LIFE360 —{' '}
            <span className="italic text-forest-700">Recovery Must Work in Real Life</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans font-light">
            The true test of sobriety begins when returning to family, career, and daily life. LIFE360 provides a 12-month clinical scaffolding so no one walks alone.
          </p>
        </div>

        {/* 4 Quadrants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-7 rounded-3xl bg-ivory-pure border border-linen-300 shadow-sm hover:border-sage-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-linen-100 border border-linen-200 flex items-center justify-center text-forest-800 mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-forest-700" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-forest-950 mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-bronze-700 mb-3 font-sans">
                    {item.sub}
                  </div>
                  <p className="text-xs text-charcoal-600 leading-relaxed font-sans font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 12-Month Cadence Timeline Card */}
        <div className="rounded-3xl bg-ivory-pure border border-linen-300 p-8 sm:p-12 shadow-sm relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-linen-200 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-bronze-700 font-sans">
                The Continuity Cadence
              </span>
              <h3 className="text-2xl font-serif font-bold text-forest-950 mt-1">
                Structured 12-Month Aftercare Rhythm
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-forest-900 bg-linen-100 px-4 py-2 rounded-full border border-linen-300 font-sans">
              <Clock className="w-4 h-4 text-bronze-600" />
              <span>Full Year Structured Accountability</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 font-sans">
            {rhythm.map((rh, rIdx) => (
              <div key={rIdx} className="p-5 rounded-2xl bg-linen-50 border border-linen-200 hover:border-linen-300 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-forest-800 px-2.5 py-0.5 rounded-full bg-sage-100 border border-sage-200">
                    {rh.period}
                  </span>
                  <span className="text-[11px] text-charcoal-400">Milestone {rIdx + 1}</span>
                </div>
                <h4 className="text-sm font-serif font-bold text-forest-950 mb-1.5">
                  {rh.frequency}
                </h4>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  {rh.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Component Badges */}
          <div className="pt-6 border-t border-linen-200 flex flex-wrap items-center gap-2 font-sans">
            <span className="text-xs font-semibold text-charcoal-400 uppercase tracking-wider mr-2">
              Integrated Components:
            </span>
            {components.map((comp, cIdx) => (
              <span key={cIdx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-linen-100 border border-linen-200 text-xs text-forest-950">
                <CheckCircle className="w-3.5 h-3.5 text-sage-600" />
                <span>{comp}</span>
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
