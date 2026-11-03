import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Activity, Calendar, Sparkles } from 'lucide-react';

export default function Journey90Days() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      step: "01",
      name: "UNDERSTAND",
      days: "Days 1–7",
      milestone: "Individual Recovery Blueprint",
      tagline: "Comprehensive medical, psychiatric, and psychological diagnostic baseline.",
      details: [
        "In-depth psychiatric and medical evaluation by Consultant Psychiatrist and Medical Officer.",
        "Baseline dual-diagnosis assessment for anxiety, depression, trauma, and sleep architecture.",
        "Social and relational history mapping with the Psychiatric Social Worker.",
        "Formulation of the resident's personalised Individual Recovery Blueprint."
      ],
      focus: "Safety, Medical Baseline, Diagnostic Clarity",
      deliverable: "Individual Recovery Blueprint v1.0"
    },
    {
      step: "02",
      name: "STABILISE",
      days: "Days 8–14",
      milestone: "Clinical Stability & Engagement Review",
      tagline: "Restoring physiological balance, circadian rhythm, and therapeutic alliance.",
      details: [
        "Continuous 24/7 nursing observation, vital sign monitoring, and medication reconciliation.",
        "Dietary and metabolic replenishment supervised by the Clinical Dietitian.",
        "Establishment of predictable circadian sleep-wake cycles and gentle graded physical movement.",
        "Formal Multidisciplinary Clinical Stability & Engagement Review."
      ],
      focus: "Physiological Balance, Routine, Nursing Support",
      deliverable: "Clinical Stability & Engagement Review"
    },
    {
      step: "03",
      name: "RESET THE MIND",
      days: "Days 15–30",
      milestone: "Trigger & Thinking Pattern Map",
      tagline: "Initiation of the MIND360 curriculum: identifying cognitive distortions and emotional triggers.",
      details: [
        "Daily cognitive restructuring workshops addressing automatic addictive loops.",
        "Detailed mapping of external environmental triggers and internal emotional vulnerability states.",
        "Dialectical emotional regulation drills for managing intense distress and impulse surges.",
        "Creation of the resident's personal Trigger and Thinking Pattern Map."
      ],
      focus: "Cognitive Awareness, Trigger Mapping, Emotional Regulation",
      deliverable: "Trigger & Thinking Pattern Map"
    },
    {
      step: "04",
      name: "RECONDITION",
      days: "Days 31–45",
      milestone: "Personal Behaviour Change Plan",
      tagline: "Replacing self-defeating behavioral patterns with healthy coping mechanisms.",
      details: [
        "Structured behavioral activation and daily habit transformation routines.",
        "Intensive CBT and DBT-informed skills building with the Clinical Psychologist.",
        "Practicing real-time craving de-escalation strategies and distress tolerance.",
        "Finalization and execution of the resident's Personal Behaviour Change Plan."
      ],
      focus: "Habit Transformation, Distress Tolerance, Coping",
      deliverable: "Personal Behaviour Change Plan"
    },
    {
      step: "05",
      name: "REBUILD IDENTITY",
      days: "Days 46–60",
      milestone: "Life-Rebuilding Blueprint",
      tagline: "Moving beyond addiction into values, purpose, and healthy self-narrative.",
      details: [
        "Values clarification exercises to restore self-respect, accountability, and integrity.",
        "Resolving unresolved emotional guilt, shame, and interpersonal ruptures in therapy.",
        "Vocational and career goal mapping with the Vocational Counsellor.",
        "Formulation of the long-term Life-Rebuilding Blueprint."
      ],
      focus: "Core Values, Vocational Goals, Self-Concept",
      deliverable: "Life-Rebuilding Blueprint"
    },
    {
      step: "06",
      name: "REAL-LIFE PRACTICE",
      days: "Days 61–75",
      milestone: "Real-World Recovery Readiness Assessment",
      tagline: "Therapist-guided role-play and simulation of high-stakes real-world exposures.",
      details: [
        "Immersive rehearsals in the Trigger Simulation Lab (old acquaintances, corporate stress, family friction).",
        "Refusal assertiveness, boundary enforcement, and urge-surfing under simulated pressure.",
        "Family therapy sessions to re-establish healthy communication and supportive boundaries.",
        "Formal Real-World Recovery Readiness Assessment."
      ],
      focus: "Trigger Simulation Lab, Role-Play, Boundary Setting",
      deliverable: "Recovery Readiness Assessment"
    },
    {
      step: "07",
      name: "REINTEGRATE",
      days: "Days 76–90",
      milestone: "Individual LIFE360 Recovery Continuity Plan",
      tagline: "Phased transition into real life with a complete 12-month post-discharge support system.",
      details: [
        "Graduated home visits and real-world exposure trials with clinical debriefing.",
        "Finalization of medical and psychiatric maintenance prescriptions with treating physician.",
        "Setting up scheduled weekly/monthly clinical follow-ups for the next 12 months.",
        "Delivery of the formal Individual LIFE360 Recovery Continuity Plan."
      ],
      focus: "Safe Handoff, 12-Month Support Setup, Discharge Safety",
      deliverable: "Individual LIFE360 Continuity Plan"
    }
  ];

  return (
    <section id="programme-90" className="py-20 lg:py-28 bg-linen-50 border-t border-linen-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linen-200 border border-linen-300 text-forest-800 text-xs font-semibold uppercase tracking-wider font-sans">
            RESET 360° Residential Pathway
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal text-forest-950 font-serif tracking-tight">
            The 90-Day Residential Patient Journey
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans font-light">
            A structured, 7-milestone therapeutic progression designed to rebuild mind, behavior, and life step by step before returning to the real world.
          </p>
        </div>

        {/* Milestone Navigation Pills (Horizontal Scroller) */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none no-scrollbar">
          {stages.map((stage, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStage(idx)}
              className={`shrink-0 px-4 py-3 rounded-2xl border text-left transition-all ${
                activeStage === idx 
                  ? 'bg-forest-800 border-forest-800 text-ivory shadow-md' 
                  : 'bg-ivory-pure border-linen-300 text-charcoal-600 hover:border-sage-400'
              }`}
            >
              <div className="flex items-center gap-2 font-sans">
                <span className={`text-xs font-bold ${activeStage === idx ? 'text-bronze-300' : 'text-charcoal-400'}`}>
                  {stage.step}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded ${activeStage === idx ? 'bg-forest-900 text-linen-200' : 'bg-linen-150 text-charcoal-700'}`}>
                  {stage.days}
                </span>
              </div>
              <div className="text-sm font-serif font-bold mt-1 whitespace-nowrap">
                {stage.name}
              </div>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="rounded-3xl bg-ivory-pure border border-linen-300 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Stage Summary */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="text-5xl sm:text-6xl font-serif text-bronze-600 font-normal">
                  {stages[activeStage].step}
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-forest-800 px-2.5 py-0.5 rounded bg-sage-100 font-sans">
                    {stages[activeStage].days}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest-950 mt-1">
                    {stages[activeStage].name}
                  </h3>
                </div>
              </div>

              <p className="text-charcoal-700 text-base leading-relaxed font-sans font-light">
                {stages[activeStage].tagline}
              </p>

              <div className="p-5 rounded-2xl bg-linen-100 border border-linen-300 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-forest-800 font-sans">
                  Key Milestone Deliverable
                </div>
                <div className="text-base font-bold text-forest-950 flex items-center gap-2.5 font-serif">
                  <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0" />
                  <span>{stages[activeStage].deliverable}</span>
                </div>
              </div>

              <div className="text-xs text-charcoal-500 flex items-center gap-2 font-sans">
                <Activity className="w-4 h-4 text-bronze-600" />
                <span>Clinical Focus: <strong className="text-forest-900 font-medium">{stages[activeStage].focus}</strong></span>
              </div>
            </div>

            {/* Right Column: Protocols */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-400 font-sans">
                Core Clinical Protocols in Stage {stages[activeStage].step}:
              </h4>

              <div className="space-y-3">
                {stages[activeStage].details.map((item, i) => (
                  <div 
                    key={i} 
                    className="p-4 rounded-2xl bg-linen-50 border border-linen-200 flex items-start gap-3.5 hover:border-linen-300 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-sage-100 text-forest-800 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-sans">
                      {i + 1}
                    </div>
                    <p className="text-sm text-charcoal-800 leading-relaxed font-sans font-light">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Navigation Stepper */}
              <div className="pt-4 flex items-center justify-between border-t border-linen-200 mt-6 font-sans">
                <button
                  disabled={activeStage === 0}
                  onClick={() => setActiveStage(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-full bg-linen-150 text-charcoal-700 hover:text-forest-950 disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold"
                >
                  ← Previous Stage
                </button>

                <div className="text-xs text-charcoal-400 font-medium">
                  Stage {activeStage + 1} of 7
                </div>

                <button
                  disabled={activeStage === stages.length - 1}
                  onClick={() => setActiveStage(prev => Math.min(stages.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-full bg-forest-800 hover:bg-forest-900 text-ivory disabled:opacity-30 disabled:pointer-events-none text-xs font-medium flex items-center gap-1.5"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

          {/* Clinical Milestone Disclaimer Note from Slide 08 */}
          <div className="mt-8 pt-4 border-t border-linen-200 text-xs text-charcoal-400 italic font-sans">
            * Note: These are programme milestones, not fixed medical recovery periods. Patients can require additional treatment or an adapted level of care based on ongoing clinical assessment.
          </div>
        </div>

      </div>
    </section>
  );
}
