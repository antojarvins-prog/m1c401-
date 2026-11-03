import React, { useState } from 'react';
import { Brain, Heart, Zap, Compass, CheckCircle2, PlayCircle, Layers, Award, ArrowRight, ShieldAlert } from 'lucide-react';

export default function Mind360Curriculum() {
  const [activeTab, setActiveTab] = useState<'pillars' | 'curriculum' | 'simulation' | 'rubric'>('pillars');
  const [activeSimulationIndex, setActiveSimulationIndex] = useState(0);

  const pillars = [
    {
      title: "THINK",
      sub: "Cognitive Restructuring",
      desc: "Identifying and reframing cognitive distortions, automatic rationalizations for substance use, and rigid black-and-white thought loops.",
      icon: Brain,
      tag: "Cognitive Science"
    },
    {
      title: "FEEL",
      sub: "Emotional Regulation",
      desc: "Developing distress tolerance, somatic mindfulness, dialectical emotional grounding, and healthy coping with acute negative feelings.",
      icon: Heart,
      tag: "Dialectical Skills"
    },
    {
      title: "ACT",
      sub: "Behavioural Activation",
      desc: "Graded habit replacement, structuring daily dopamine loops around meaningful goals, physical health, and productive activity.",
      icon: Zap,
      tag: "Habit Transformation"
    },
    {
      title: "LIVE",
      sub: "Values and Identity",
      desc: "Aligning day-to-day choices with deeply held personal values, restoring integrity, rebuilding family relationships, and forging self-respect.",
      icon: Compass,
      tag: "Purpose & Rebirth"
    }
  ];

  const weeklyWeeks = [
    { week: "Week 1", title: "Understanding Addiction", desc: "Neurobiology of dopamine, dependence mechanics, and removing moral guilt." },
    { week: "Week 2", title: "Self-Awareness", desc: "Mapping somatic signals, craving triggers, and vulnerability states." },
    { week: "Week 3", title: "Challenging Thoughts", desc: "Cognitive restructuring and dismantling internal 'permission-giving' thoughts." },
    { week: "Week 4", title: "Emotional Mastery", desc: "Distress tolerance drills, mindfulness, and de-escalating anger and anxiety." },
    { week: "Week 5", title: "Craving Management", desc: "Urge-surfing protocols, delay tactics, and stimulus control." },
    { week: "Week 6", title: "Habit Transformation", desc: "Cue-routine-reward replacement and designing supportive home environments." },
    { week: "Week 7", title: "Personal Identity", desc: "Separating personal self-worth from past substance behaviors; values inventory." },
    { week: "Week 8", title: "Relationships", desc: "Rebuilding broken trust, healthy boundary enforcement, and resolving resentment." },
    { week: "Week 9", title: "Purpose and Direction", desc: "Vocational restoration, long-term life vision, and LIFE360 continuity readiness." }
  ];

  const simulations = [
    {
      scenario: "Old drinking companion calls",
      skill: "Boundary setting & firm refusal",
      context: "An old friend rings up inviting the resident to a weekend celebration.",
      steps: [
        "Identify Trigger: Phone call from previous social circle.",
        "Recognise Emotion: Mild nostalgic urge, fear of social awkwardness.",
        "Automatic Thought: 'I could just drop in for 10 minutes and have a soft drink.'",
        "Evaluate Consequences: High risk of social pressure and craving cascade.",
        "Practise Response: 'I'm on a completely new health journey and not attending drinking environments. Let's catch up over coffee next Tuesday.'",
        "Therapist Review: Debrief vocal tone, body language assertiveness, and immediate contact blocking if needed."
      ]
    },
    {
      scenario: "Work-related severe stress",
      skill: "Executive stress coping without substances",
      context: "A high-stakes corporate deadline or severe conflict with management.",
      steps: [
        "Identify Trigger: Escalated email, looming target, feelings of inadequacy.",
        "Recognise Emotion: Racing heart, chest tightness, irritability.",
        "Automatic Thought: 'I need a stiff drink to calm my nerves tonight.'",
        "Evaluate Consequences: Hangover, compromised clarity, relapse guilt.",
        "Practise Response: 15-minute physiological sigh breathing, brisk graded physical walk, task compartmentalization.",
        "Therapist Review: Re-evaluate stress coping repertoire and corporate boundaries."
      ]
    },
    {
      scenario: "Intense family argument or conflict",
      skill: "Emotional regulation & de-escalation",
      context: "A discussion with spouse or parents sparks past accusations or anger.",
      steps: [
        "Identify Trigger: Criticism regarding past financial or emotional damage.",
        "Recognise Emotion: Defensive rage, shame, despair.",
        "Automatic Thought: 'Nobody appreciates how hard I'm trying; what's the point?'",
        "Evaluate Consequences: Destructive emotional outburst and self-sabotaging urge.",
        "Practise Response: Implement agreed 20-minute emotional 'time-out'; utilize distress tolerance worksheet; return calmly.",
        "Therapist Review: Joint debrief with Psychiatric Social Worker to safeguard recovery."
      ]
    },
    {
      scenario: "Loneliness & isolation on a weekend",
      skill: "Proactive support-seeking & activation",
      context: "Sitting alone on a quiet evening with empty hours ahead.",
      steps: [
        "Identify Trigger: Sensory silence, lack of planned activity, boredom.",
        "Recognise Emotion: Emptiness, melancholy, creeping urge.",
        "Automatic Thought: 'Just once won't hurt, nobody will know.'",
        "Evaluate Consequences: Loss of hard-earned clarity, immediate spiral.",
        "Practise Response: Immediate telephone contact with designated recovery peer or counsellor; initiate scheduled creative or physical project.",
        "Therapist Review: Validate loneliness and reinforce daily calendar scheduling."
      ]
    },
    {
      scenario: "Social event or wedding involving alcohol",
      skill: "Pre-planned decision-making & graceful exits",
      context: "Family gathering with open bar and social drinking.",
      steps: [
        "Identify Trigger: Sight of glassware, celebration atmosphere.",
        "Recognise Emotion: Feeling left out or hyper-visible.",
        "Automatic Thought: 'Everyone else can drink normally, why can't I?'",
        "Evaluate Consequences: Immediate compromise of the 90-day progress.",
        "Practise Response: Hold a non-alcoholic beverage continuously; bring recovery ally; execute planned early departure after 60 minutes.",
        "Therapist Review: Review social confidence without reliance on liquid disinhibition."
      ]
    },
    {
      scenario: "Unexpected visceral craving",
      skill: "Urge-surfing & cognitive distraction",
      context: "Passing a familiar lounge or smelling alcohol unexpectedly.",
      steps: [
        "Identify Trigger: Olfactory or visual sensory cue.",
        "Recognise Emotion: Physical salivary response, mental craving surge.",
        "Automatic Thought: 'I have to have it right now.'",
        "Evaluate Consequences: Neurochemical relapse.",
        "Practise Response: 'Urge Surfing' technique: ride the 15-minute peak like an ocean wave without acting; cold water immersion.",
        "Therapist Review: Confirm that cravings always decay if not fed."
      ]
    }
  ];

  const rubricDomains = [
    "Cognitive Awareness",
    "Emotional Regulation",
    "Craving Management",
    "Decision-Making",
    "Interpersonal Skills",
    "Routine & Self-Management",
    "Relapse Preparedness"
  ];

  return (
    <section id="mind360" className="py-20 lg:py-28 bg-navy-850 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            MIND360 Framework
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            The Science and Practice of Changing Behaviour
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A structured 45-day therapeutic curriculum embedded within the 90-day residential programme, taught by clinicians to re-wire neural responses to stress and cravings.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('pillars')}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'pillars'
                ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/25'
                : 'bg-navy-900 text-slate-400 hover:text-white border border-slate-700/60'
            }`}
          >
            The 4 Pillars (Think, Feel, Act, Live)
          </button>
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'curriculum'
                ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/25'
                : 'bg-navy-900 text-slate-400 hover:text-white border border-slate-700/60'
            }`}
          >
            9-Week Syllabus Breakdown
          </button>
          <button
            onClick={() => setActiveTab('simulation')}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
              activeTab === 'simulation'
                ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/25'
                : 'bg-navy-900 text-slate-400 hover:text-white border border-slate-700/60'
            }`}
          >
            <PlayCircle className="w-4 h-4 text-teal-300" />
            <span>Trigger Simulation Lab</span>
          </button>
          <button
            onClick={() => setActiveTab('rubric')}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'rubric'
                ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/25'
                : 'bg-navy-900 text-slate-400 hover:text-white border border-slate-700/60'
            }`}
          >
            Competency Rubric
          </button>
        </div>

        {/* Tab 1: The 4 Pillars */}
        {activeTab === 'pillars' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="p-8 rounded-3xl bg-navy-900 border border-slate-700/60 hover:border-teal-500/40 transition-all flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-1 block font-mono">
                      {item.tag}
                    </span>
                    <h3 className="text-2xl font-black text-white font-display mb-1">
                      {item.title}
                    </h3>
                    <div className="text-sm font-semibold text-slate-300 mb-3">
                      {item.sub}
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: 9-Week Curriculum */}
        {activeTab === 'curriculum' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {weeklyWeeks.map((wk, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-navy-900 border border-slate-700/60 hover:border-teal-500/40 transition-all shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 font-mono">
                    {wk.week}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Stage {Math.ceil((idx + 1) / 1.5)}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-display">
                  {wk.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {wk.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Trigger Simulation Lab */}
        {activeTab === 'simulation' && (
          <div className="rounded-3xl bg-navy-900 border border-teal-500/30 p-8 lg:p-12 shadow-2xl animate-fade-in">
            <div className="max-w-3xl mb-8 space-y-2">
              <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
                <PlayCircle className="w-4 h-4" />
                <span>Therapist-Guided Role-Play Engine</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Practising Recovery Skills Before Real-World Exposure
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Residents do not simply hear advice; they physically practice boundaries and urge-surfing in realistic simulated scenarios until neural pathways feel reflexive.
              </p>
            </div>

            {/* Scenario selector tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
              {simulations.map((sim, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSimulationIndex(i)}
                  className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                    activeSimulationIndex === i 
                      ? 'bg-teal-500/20 border-teal-400 text-white' 
                      : 'bg-navy-850 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="text-[10px] text-teal-300 font-mono">Scenario 0{i + 1}</div>
                  <div className="truncate mt-1">{sim.scenario}</div>
                </button>
              ))}
            </div>

            {/* Active Simulation Display */}
            <div className="p-6 sm:p-8 rounded-2xl bg-navy-850 border border-slate-700/60 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-teal-400 uppercase tracking-wider block">
                    Focus Skill: {simulations[activeSimulationIndex].skill}
                  </span>
                  <h4 className="text-xl font-bold text-white font-display mt-0.5">
                    {simulations[activeSimulationIndex].scenario}
                  </h4>
                </div>
                <div className="text-xs text-slate-400 bg-navy-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  {simulations[activeSimulationIndex].context}
                </div>
              </div>

              {/* 6-Step Sequence */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-4">
                  The Six-Step Simulation Exercise:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {simulations[activeSimulationIndex].steps.map((st, sIdx) => {
                    const [stepName, stepContent] = st.split(': ');
                    return (
                      <div key={sIdx} className="p-4 rounded-xl bg-navy-900 border border-slate-800 flex flex-col justify-between">
                        <div>
                          <span className="text-[11px] font-bold text-teal-400 font-mono block mb-1">
                            Step 0{sIdx + 1}: {stepName}
                          </span>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {stepContent}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Competency Rubric */}
        {activeTab === 'rubric' && (
          <div className="rounded-3xl bg-navy-900 border border-slate-700/60 p-8 lg:p-12 shadow-xl animate-fade-in space-y-8">
            <div className="max-w-3xl space-y-2">
              <h3 className="text-2xl font-bold text-white font-display">
                Objective Recovery Competency Rubric
              </h3>
              <p className="text-slate-300 text-sm">
                Progress at SPJ is measured through objective behavioral mastery, not subjective opinions. Residents are evaluated on a 5-level scale across 7 core domains.
              </p>
            </div>

            {/* 5 Levels */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {[
                { lvl: "1", title: "Not Yet Demonstrated", desc: "Requires comprehensive clinician direction." },
                { lvl: "2", title: "With Substantial Assistance", desc: "Demonstrates emerging awareness with step-by-step help." },
                { lvl: "3", title: "With Prompting", desc: "Recognizes triggers and applies tools with subtle therapist cues." },
                { lvl: "4", title: "Independently in Structured Exercises", desc: "Applies skills autonomously within the residential environment." },
                { lvl: "5", title: "Consistently Across Relevant Situations", desc: "Exhibits reflexive, resilient coping under simulated pressure." }
              ].map((lvl, lIdx) => (
                <div key={lIdx} className="p-4 rounded-xl bg-navy-850 border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 font-mono font-bold flex items-center justify-center text-xs mb-2">
                    L{lvl.lvl}
                  </div>
                  <div className="text-xs font-bold text-white mb-1">{lvl.title}</div>
                  <div className="text-[11px] text-slate-400">{lvl.desc}</div>
                </div>
              ))}
            </div>

            {/* 7 Domains Assessed */}
            <div className="pt-6 border-t border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                7 Functional Domains Assessed:
              </span>
              <div className="flex flex-wrap gap-2">
                {rubricDomains.map((dm, dIdx) => (
                  <span key={dIdx} className="px-3.5 py-1.5 rounded-lg bg-navy-850 border border-slate-700 text-xs font-medium text-slate-200">
                    {dm}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
