import React from 'react';
import { PhoneCall, Stethoscope, CheckCircle, FileText, Compass, ArrowRight, ShieldCheck } from 'lucide-react';

interface WorkflowProps {
  onOpenBooking: () => void;
}

export default function AdmissionWorkflow({ onOpenBooking }: WorkflowProps) {
  const steps = [
    {
      num: "01",
      title: "Enquiry & Confidential Screening",
      desc: "Initial conversation with our Clinical Coordinator via phone, WhatsApp, or confidential in-person consult in Bengaluru.",
      icon: PhoneCall
    },
    {
      num: "02",
      title: "Medical & Psychiatric Assessment",
      desc: "Comprehensive diagnostic review by our Medical Officer and Consultant Psychiatrist to confirm clinical stability.",
      icon: Stethoscope
    },
    {
      num: "03",
      title: "Suitability & Informed Consent",
      desc: "Transparent discussion of programme parameters, resident rights under MHA 2017, and voluntary informed consent.",
      icon: ShieldCheck
    },
    {
      num: "04",
      title: "Individual Recovery Blueprint",
      desc: "Our multidisciplinary team formulates the resident's personalized 90-day clinical and therapeutic roadmap.",
      icon: FileText
    },
    {
      num: "05",
      title: "90-Day Residential Journey",
      desc: "Welcomed into the peaceful 15-bed sanctuary to commence the RESET 360° pathway and MIND360 curriculum.",
      icon: Compass
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-900 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            Safe & Dignified Pathway
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            The Admission Decision Workflow
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every admission is based strictly on individual clinical needs, treatment capacity, and voluntary consent. No involuntary pickups. No hidden clauses.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-14">
          {steps.map((st, sIdx) => {
            const Icon = st.icon;
            return (
              <div 
                key={sIdx}
                className="p-6 rounded-2xl bg-navy-850 border border-slate-700/60 hover:border-teal-500/40 transition-all flex flex-col justify-between group shadow-lg relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-black text-teal-400 bg-navy-900 px-2.5 py-1 rounded border border-teal-500/20">
                      Step {st.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-display">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center text-[11px] text-teal-400 font-medium">
                  <span>Transparent Stage</span>
                  <CheckCircle className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Consultation Prompt */}
        <div className="text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold text-sm shadow-xl shadow-teal-500/25 hover:from-teal-400 hover:to-emerald-500 transition-all"
          >
            <span>Begin Step 1: Confidential Enquiry & Clinical Screening</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
