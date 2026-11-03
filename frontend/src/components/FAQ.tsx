import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why is the residential programme 90 days rather than 30 days?",
      a: "Scientific neuroplasticity and habit change require time. The first 14 days focus on physiological stabilization and sleep restoration; days 15 to 45 implement the intensive MIND360 cognitive restructuring; and days 46 to 90 embed real-life practice in our Trigger Simulation Lab, family reconciliation, and vocational planning. Research demonstrates that residential stays of 90 days significantly lower 1-year relapse rates compared to rapid 30-day revolving-door stays."
    },
    {
      q: "What makes SPJ RESET 360° different from other de-addiction centres in India?",
      a: "Three fundamental pillars: (1) Absolute Non-Coercive Care with zero punitive punishment, zero shaming, and zero involuntary confinement; (2) An extraordinary multidisciplinary team of over 20+ professionals (including Medical Director, Psychiatrist, Psychologist, Nurses) dedicated to only 15 beds; and (3) A clinical boundary that prioritizes safety—we specialize in what happens post-withdrawal crisis, providing comprehensive psychiatric dual-diagnosis care."
    },
    {
      q: "How are co-existing psychiatric conditions (Dual Diagnosis) treated?",
      a: "Substance dependence rarely occurs in isolation. It is frequently an attempt to self-medicate untreated depression, trauma, generalized anxiety, adult ADHD, or bipolar mood fluctuations. Our Consultant Psychiatrist and Medical Officer actively assess and manage co-occurring conditions with evidence-based medications, alongside CBT and DBT psychotherapy with our Clinical Psychologist."
    },
    {
      q: "Are families permitted to visit and participate in the recovery?",
      a: "Yes. Family healing is integral to sustainable recovery. After the initial stabilization phase, scheduled family therapy sessions, structured visiting hours, and ongoing progress updates are held under the guidance of our Psychiatric Social Worker. We also coach families on how to set healthy boundaries without enabling."
    },
    {
      q: "What happens if a resident experiences a medical emergency or acute withdrawal?",
      a: "We maintain written emergency response protocols and formal hospital transfer agreements with leading multispecialty hospitals in Bengaluru. While 24/7 qualified nurses and physicians monitor daily health, acute life-threatening emergencies or severe withdrawal complications are immediately transferred to partner hospital intensive units."
    },
    {
      q: "How strictly is patient confidentiality and privacy guarded?",
      a: "With absolute discretion. No information, records, or admission details are ever disclosed to outside third parties, employers, or non-nominated individuals. Our small 15-bed setting ensures high privacy and dignified anonymity."
    },
    {
      q: "What happens after the 90 residential days conclude?",
      a: "Graduation from the residential facility is just the foundation. All residents transition smoothly into our 12-month LIFE360 aftercare framework, which provides weekly and monthly clinical follow-ups, psychiatric check-ins, career support, and access to the SPJ Alumni Recovery Network."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-850 border-t border-navy-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Transparent, honest insights into our clinical model, living environment, and care philosophy.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="rounded-2xl bg-navy-900 border border-slate-700/60 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:text-teal-300 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white font-display">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-navy-850 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-teal-400' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
