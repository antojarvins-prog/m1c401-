import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why is the residential programme 90 days rather than 30 days?",
      a: "Scientific neuroplasticity and sustainable behavioral change require structured time. The first 14 days focus on physiological stabilization and sleep restoration; days 15 to 45 implement the intensive MIND360 cognitive restructuring; and days 46 to 90 embed real-life practice in our Trigger Simulation Lab, family reconciliation, and vocational re-entry planning. Research consistently indicates that residential stays of 90 days significantly lower 1-year relapse rates compared to rapid 30-day revolving-door stays."
    },
    {
      q: "What makes SPJ RESET 360° different from conventional de-addiction centres in India?",
      a: "Three fundamental pillars: (1) Absolute Non-Coercive Care with zero punitive discipline, zero shaming, and zero involuntary confinement; (2) An extraordinary multidisciplinary team of over 20+ professionals (including Medical Director, Psychiatrist, Psychologist, Nurses) dedicated to only 15 beds; and (3) A distinct clinical boundary that prioritizes safety—we specialize in what happens post-withdrawal crisis, providing comprehensive psychiatric dual-diagnosis care within a calming, sanctuary environment."
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
      a: "With absolute discretion. No information, records, or admission details are ever disclosed to outside third parties, employers, or non-nominated individuals. Our boutique 15-bed setting ensures high privacy and dignified anonymity."
    },
    {
      q: "What happens after the 90 residential days conclude?",
      a: "Graduation from the residential sanctuary is the foundation for lasting independence. All residents transition smoothly into our 12-month LIFE360 aftercare framework, which provides weekly and monthly clinical follow-ups, psychiatric check-ins, career support, and access to the SPJ Alumni Recovery Network."
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-ivory border-t border-linen-300 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/5 border border-forest-900/15 text-forest-800 text-xs font-medium tracking-wide">
            <HelpCircle className="w-3.5 h-3.5 text-sage-600" />
            <span>Clear Clinical Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-forest-950 font-serif tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-charcoal-600 font-sans max-w-2xl mx-auto leading-relaxed">
            Transparent, honest insights into our clinical model, living environment, and non-coercive philosophy of care.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-forest-800/30 shadow-[0_8px_20px_rgba(35,61,50,0.06)]' 
                    : 'bg-linen-100/50 border-linen-300/80 hover:border-forest-700/30 hover:bg-white/80'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none transition-colors"
                >
                  <span className="text-base sm:text-lg font-serif font-medium text-forest-950 leading-snug">
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-xl shrink-0 transition-transform duration-300 ${
                    isOpen 
                      ? 'rotate-180 bg-forest-900 text-linen-100' 
                      : 'bg-linen-200/80 text-charcoal-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-charcoal-700 leading-relaxed border-t border-linen-200/80 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="mt-12 p-6 rounded-2xl bg-linen-200/50 border border-linen-300 text-center space-y-2">
          <p className="text-xs uppercase tracking-wider font-semibold text-forest-800">
            Have a Specific Clinical or Family Inquiry?
          </p>
          <p className="text-sm text-charcoal-600 font-sans">
            Our Senior Medical Coordinator is available 24/7 for discreet, unhurried conversations about admission, dual-diagnosis suitability, or family support.
          </p>
          <div className="pt-2">
            <a
              href="tel:+918029559040"
              className="inline-flex items-center gap-2 text-xs font-semibold text-forest-900 hover:text-bronze-600 underline underline-offset-4"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Call +91 (080) 2955-9040 with Complete Discretion</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
