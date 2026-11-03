import React, { useState } from 'react';
import { Calendar, CheckCircle2, ChevronRight, Activity, Brain, UserCheck, Shield, Sparkles, Clock, ArrowRight } from 'lucide-react';

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
      tagline: "Restoring physiological rhythm, nutrition balance, and initial therapeutic alliance.",
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
      milestone: "Individual LIFE360 Continuity Plan",
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
    <section id="programme-90" className="py-20 lg:py-28 bg-navy-900 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            RESET 360° Programme
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            The 90-Day Residential Patient Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A structured, 7-milestone therapeutic progression designed to rebuild mind, behavior, and life step by step before returning to the real world.
          </p>
        </div>

        {/* Milestone Navigation Pills (Horizontal Scroller on Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-scrollbar">
          {stages.map((stage, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStage(idx)}
              className={`shrink-0 px-4 py-3 rounded-xl border text-left transition-all ${
                activeStage === idx 
                  ? 'bg-teal-500/20 border-teal-400 text-white shadow-lg shadow-teal-500/10' 
                  : 'bg-navy-850 border-slate-700/60 text-slate-400 hover:text-slate-200 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`text-xs font-black font-mono ${activeStage === idx ? 'text-teal-300' : 'text-slate-500'}`}>
                  {stage.step}
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-navy-900 text-slate-300">
                  {stage.days}
                </span>
              </div>
              <div className="text-sm font-bold mt-1 whitespace-nowrap">
                {stage.name}
              </div>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="rounded-3xl bg-navy-850 border border-teal-500/30 p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Left Column: Stage Summary */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl sm:text-5xl font-black text-teal-400 font-display">
                  {stages[activeStage].step}
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-300 px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">
                    {stages[activeStage].days}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1">
                    {stages[activeStage].name}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">
                {stages[activeStage].tagline}
              </p>

              <div className="p-4 rounded-xl bg-navy-900/90 border border-slate-700/60 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Key Milestone Deliverable
                </div>
                <div className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                  <span>{stages[activeStage].deliverable}</span>
                </div>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-2">
                <Activity className="w-4 h-4 text-teal-400" />
                <span>Focus: <strong className="text-slate-200">{stages[activeStage].focus}</strong></span>
              </div>
            </div>

            {/* Right Column: Key Protocols & Interventions */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Core Clinical Protocols in Stage {stages[activeStage].step}:
              </h4>

              <div className="space-y-3">
                {stages[activeStage].details.map((item, i) => (
                  <div 
                    key={i} 
                    className="p-4 rounded-xl bg-navy-900 border border-slate-700/60 flex items-start gap-3.5 hover:border-slate-600 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono">
                      {i + 1}
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Navigation buttons to next stage */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  disabled={activeStage === 0}
                  onClick={() => setActiveStage(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-lg bg-navy-900 text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold"
                >
                  ← Previous Stage
                </button>

                <div className="text-xs text-slate-400 font-mono">
                  Stage {activeStage + 1} of 7
                </div>

                <button
                  disabled={activeStage === stages.length - 1}
                  onClick={() => setActiveStage(prev => Math.min(stages.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-white disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold flex items-center gap-1.5"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

          {/* Clinical Milestone Disclaimer Note from Slide 08 */}
          <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-400 italic">
            * Note: These are programme milestones, not fixed medical recovery periods. Patients can require additional treatment or an adapted level of care based on ongoing clinical assessment.
          </div>
        </div>

      </div>
    </section>
  );
}
