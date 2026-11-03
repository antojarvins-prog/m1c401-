import React from 'react';
import { Stethoscope, HeartPulse, Shield, Users, Activity, Sparkles, CheckCircle2, Award } from 'lucide-react';

export default function TeamStaffing() {
  const departments = [
    {
      category: "Clinical Leadership",
      leadIcon: Stethoscope,
      accent: "teal",
      roles: [
        { title: "Medical Director (1)", desc: "Holds absolute clinical authority; oversees medical ethics, admission suitability, and patient safety." },
        { title: "Consultant Psychiatrist (1)", desc: "Conducts dual-diagnosis evaluations, psychotropic pharmacotherapy, and weekly clinical reviews." },
        { title: "Medical Officer (1)", desc: "Onsite physician overseeing daily vitals, chronic medical conditions, and clinical monitoring." }
      ]
    },
    {
      category: "Nursing & 24/7 Observation",
      leadIcon: HeartPulse,
      accent: "emerald",
      roles: [
        { title: "Nursing Lead (1)", desc: "Supervises residential nursing protocols, pharmaceutical logs, and clinical handovers." },
        { title: "Staff Nurses (4–5)", desc: "Continuous round-the-clock shift coverage, medication administration, and vital signs monitoring." }
      ]
    },
    {
      category: "Psychological & Rehabilitation Team",
      leadIcon: Activity,
      accent: "teal",
      roles: [
        { title: "Clinical Psychologist (1)", desc: "Conducts psychometric assessments, CBT/DBT therapy, and cognitive restructuring." },
        { title: "Addiction Counsellor (1)", desc: "Leads the MIND360 curriculum, craving management drills, and group sessions." },
        { title: "Psychiatric Social Worker (1)", desc: "Facilitates family reconciliation, relational healing, and social system mapping." },
        { title: "Occupational Therapist (1)", desc: "Rebuilds daily executive functioning, motor balance, and functional routines." }
      ]
    },
    {
      category: "Wellness & Allied Health",
      leadIcon: Sparkles,
      accent: "amber",
      roles: [
        { title: "Yoga / Exercise Specialist (1)", desc: "Daily somatic regulation, gentle pranayama breathwork, and mindful movement." },
        { title: "Clinical Dietitian (1)", desc: "Formulates nutritional replenishment plans for neurotransmitter balance and liver support." },
        { title: "Physiotherapist (1)", desc: "Physical rehabilitation and muscular conditioning after prolonged substance strain." },
        { title: "Vocational Counsellor (1)", desc: "Career assessment, resume restructuring, and professional transition coaching." }
      ]
    },
    {
      category: "Residential Operations & Support",
      leadIcon: Users,
      accent: "slate",
      roles: [
        { title: "Residential Care Attendants (3–4)", desc: "Assisting daily personal living routines, accompaniment, and peer safety." },
        { title: "Centre Administrator & Reception (2)", desc: "Handling seamless family coordination, logistics, and confidential inquiries." },
        { title: "Housekeeping, Culinary & Security (6–8)", desc: "Fresh nutritious daily cooking, sterile sanitary living standards, and 24/7 security." }
      ]
    }
  ];

  return (
    <section id="team" className="py-20 lg:py-28 bg-navy-900 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            People & Multidisciplinary Capability
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Over 20+ Professionals Dedicated to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Just 15 Residents
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Recovery requires intensive human connection, constant medical vigilance, and multifaceted therapeutic care. We maintain an extraordinary staffing ratio.
          </p>
        </div>

        {/* Clinical Authority Callout Card (Slide 06) */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-navy-850 via-navy-800 to-navy-850 border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 shrink-0">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono">
                Institutional Clinical Governance
              </span>
              <h3 className="text-xl font-bold text-white font-display mt-0.5 mb-1">
                The Medical Director Holds Ultimate Clinical Authority
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                At SPJ, commercial management is structurally prohibited from overriding clinical decisions. Patient safety, admission suitability, emergency transfers, and discharge readiness are strictly determined by credentialed physicians.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-950 border border-teal-500/20 text-xs text-teal-300 font-semibold font-mono">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            <span>Strict Clinical Primacy</span>
          </div>
        </div>

        {/* Staffing Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, dIdx) => {
            const Icon = dept.leadIcon;
            return (
              <div 
                key={dIdx}
                className="p-6 rounded-2xl bg-navy-850 border border-slate-700/60 hover:border-teal-500/40 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 border-b border-slate-800 pb-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white font-display">
                      {dept.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {dept.roles.map((r, rIdx) => (
                      <div key={rIdx} className="space-y-1">
                        <div className="text-xs font-bold text-teal-300 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                          <span>{r.title}</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed pl-3">
                          {r.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
                  Dedicated Staffing Model
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
