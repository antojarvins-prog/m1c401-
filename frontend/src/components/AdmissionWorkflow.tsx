import React from 'react';
import { PhoneCall, Stethoscope, ShieldCheck, FileText, Compass, ArrowRight, CheckCircle } from 'lucide-react';

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
      desc: "Transparent discussion of programme parameters, resident rights, and voluntary informed consent.",
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
    <section className="py-20 lg:py-28 bg-linen-50 border-t border-linen-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linen-200 border border-linen-300 text-forest-800 text-xs font-semibold uppercase tracking-wider font-sans">
            Dignified & Safe Intake
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal text-forest-950 font-serif tracking-tight">
            The Five-Step Admission Pathway
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans font-light">
            Every admission is based strictly on individual clinical needs, treatment capacity, and voluntary consent. No involuntary pickups. No hidden clauses.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-14 font-sans">
          {steps.map((st, sIdx) => {
            const Icon = st.icon;
            return (
              <div 
                key={sIdx}
                className="p-6 rounded-3xl bg-ivory-pure border border-linen-300 shadow-sm hover:border-sage-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-serif font-bold italic text-bronze-700">
                      Step {st.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-linen-100 flex items-center justify-center text-forest-800">
                      <Icon className="w-4 h-4 text-forest-700" />
                    </div>
                  </div>
                  <h3 className="text-base font-serif font-bold text-forest-950 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-linen-200 flex items-center text-[11px] text-forest-800 font-medium">
                  <span>Voluntary Protocol</span>
                  <CheckCircle className="w-3.5 h-3.5 ml-1.5 text-sage-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest-800 hover:bg-forest-900 text-ivory font-medium text-sm shadow-md transition-all font-sans"
          >
            <span>Begin Step 1: Confidential Enquiry & Clinical Screening</span>
            <ArrowRight className="w-4 h-4 text-bronze-300" />
          </button>
        </div>

      </div>
    </section>
  );
}
