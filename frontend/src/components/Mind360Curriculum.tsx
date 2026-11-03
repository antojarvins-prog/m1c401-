import React, { useState } from 'react';
import { Brain, Heart, Zap, Compass, PlayCircle, Layers, CheckCircle2 } from 'lucide-react';

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
        "Practise Response: 'I am on a new health journey and not attending drinking environments. Let us catch up over coffee next Tuesday.'",
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
        "Automatic Thought: 'Nobody appreciates how hard I am trying; what is the point?'",
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
        "Automatic Thought: 'Just once will not hurt, nobody will know.'",
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
        "Automatic Thought: 'Everyone else can drink normally, why can I not?'",
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
    <section id="mind360" className="py-20 lg:py-28 bg-ivory border-t border-linen-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linen-200 border border-linen-300 text-forest-800 text-xs font-semibold uppercase tracking-wider font-sans">
            MIND360 Curriculum
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal text-forest-950 font-serif tracking-tight">
            The Science and Practice of Changing Behaviour
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans font-light">
            A structured 45-day therapeutic curriculum embedded within the 90-day residential programme. Delivered by clinicians to rewire neural responses to stress and cravings.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 font-sans">
          <button
            onClick={() => setActiveTab('pillars')}
            className={`px-5 py-2.5 rounded-full font-medium text-xs tracking-wide transition-all ${
              activeTab === 'pillars'
                ? 'bg-forest-800 text-ivory shadow-sm'
                : 'bg-linen-100 text-charcoal-700 hover:bg-linen-200 border border-linen-300'
            }`}
          >
            The 4 Pillars (Think, Feel, Act, Live)
          </button>
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`px-5 py-2.5 rounded-full font-medium text-xs tracking-wide transition-all ${
              activeTab === 'curriculum'
                ? 'bg-forest-800 text-ivory shadow-sm'
                : 'bg-linen-100 text-charcoal-700 hover:bg-linen-200 border border-linen-300'
            }`}
          >
            9-Week Syllabus Breakdown
          </button>
          <button
            onClick={() => setActiveTab('simulation')}
            className={`px-5 py-2.5 rounded-full font-medium text-xs tracking-wide transition-all flex items-center gap-2 ${
              activeTab === 'simulation'
                ? 'bg-forest-800 text-ivory shadow-sm'
                : 'bg-linen-100 text-charcoal-700 hover:bg-linen-200 border border-linen-300'
            }`}
          >
            <PlayCircle className="w-3.5 h-3.5 text-bronze-400" />
            <span>Trigger Simulation Lab</span>
          </button>
          <button
            onClick={() => setActiveTab('rubric')}
            className={`px-5 py-2.5 rounded-full font-medium text-xs tracking-wide transition-all ${
              activeTab === 'rubric'
                ? 'bg-forest-800 text-ivory shadow-sm'
                : 'bg-linen-100 text-charcoal-700 hover:bg-linen-200 border border-linen-300'
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
                  className="p-8 rounded-3xl bg-ivory-pure border border-linen-300 shadow-sm hover:border-sage-400 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-linen-100 border border-linen-200 flex items-center justify-center text-forest-800 mb-6 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-forest-700" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-bronze-700 mb-1 block font-sans">
                      {item.tag}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-forest-950 mb-1">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold text-charcoal-500 mb-3 font-sans">
                      {item.sub}
                    </div>
                    <p className="text-sm text-charcoal-600 leading-relaxed font-sans font-light">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-fade-in font-sans">
            {weeklyWeeks.map((wk, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-ivory-pure border border-linen-300 shadow-sm hover:border-sage-300 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-linen-150 text-forest-900 border border-linen-300">
                    {wk.week}
                  </span>
                  <span className="text-xs text-charcoal-400">Stage {Math.ceil((idx + 1) / 1.5)}</span>
                </div>
                <h4 className="text-lg font-serif font-bold text-forest-950 mb-2">
                  {wk.title}
                </h4>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  {wk.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Trigger Simulation Lab */}
        {activeTab === 'simulation' && (
          <div className="rounded-3xl bg-ivory-pure border border-linen-300 p-8 sm:p-12 shadow-sm animate-fade-in">
            <div className="max-w-3xl mb-8 space-y-2">
              <div className="flex items-center gap-2 text-bronze-700 text-xs font-bold uppercase tracking-wider font-sans">
                <PlayCircle className="w-4 h-4" />
                <span>Therapist-Guided Role-Play Engine</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-forest-950">
                Practising Recovery Skills Before Real-World Exposure
              </h3>
              <p className="text-charcoal-700 text-sm leading-relaxed font-sans font-light">
                Residents physically practice boundaries and urge-surfing in realistic simulated scenarios until neural pathways feel reflexive.
              </p>
            </div>

            {/* Scenario selector tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8 font-sans">
              {simulations.map((sim, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSimulationIndex(i)}
                  className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                    activeSimulationIndex === i 
                      ? 'bg-forest-800 border-forest-800 text-ivory shadow-sm' 
                      : 'bg-linen-50 border-linen-200 text-charcoal-700 hover:bg-linen-100'
                  }`}
                >
                  <div className={`text-[10px] font-bold ${activeSimulationIndex === i ? 'text-bronze-300' : 'text-charcoal-400'}`}>Scenario 0{i + 1}</div>
                  <div className="truncate mt-1">{sim.scenario}</div>
                </button>
              ))}
            </div>

            {/* Active Simulation Display */}
            <div className="p-6 sm:p-8 rounded-2xl bg-linen-50 border border-linen-200 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-linen-200 pb-4">
                <div>
                  <span className="text-xs font-sans font-bold text-bronze-700 uppercase tracking-wider block">
                    Skill: {simulations[activeSimulationIndex].skill}
                  </span>
                  <h4 className="text-xl font-serif font-bold text-forest-950 mt-0.5">
                    {simulations[activeSimulationIndex].scenario}
                  </h4>
                </div>
                <div className="text-xs text-charcoal-600 bg-ivory-pure px-3.5 py-1.5 rounded-full border border-linen-300 font-sans">
                  {simulations[activeSimulationIndex].context}
                </div>
              </div>

              {/* 6-Step Sequence */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400 block mb-4 font-sans">
                  The Six-Step Simulation Exercise:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {simulations[activeSimulationIndex].steps.map((st, sIdx) => {
                    const [stepName, stepContent] = st.split(': ');
                    return (
                      <div key={sIdx} className="p-4 rounded-xl bg-ivory-pure border border-linen-200 flex flex-col justify-between">
                        <div>
                          <span className="text-[11px] font-bold text-forest-800 block mb-1 font-sans">
                            Step 0{sIdx + 1}: {stepName}
                          </span>
                          <p className="text-xs text-charcoal-700 leading-relaxed font-sans font-light">
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
          <div className="rounded-3xl bg-ivory-pure border border-linen-300 p-8 sm:p-12 shadow-sm animate-fade-in space-y-8 font-sans">
            <div className="max-w-3xl space-y-2">
              <h3 className="text-2xl font-serif font-bold text-forest-950">
                Objective Recovery Competency Rubric
              </h3>
              <p className="text-charcoal-700 text-sm font-light">
                Progress at SPJ is measured through objective behavioral mastery across 7 core domains, evaluated on a 5-level rubric.
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
                <div key={lIdx} className="p-4 rounded-xl bg-linen-50 border border-linen-200">
                  <div className="w-7 h-7 rounded-full bg-forest-800 text-ivory font-bold flex items-center justify-center text-xs mb-2">
                    L{lvl.lvl}
                  </div>
                  <div className="text-xs font-bold text-forest-950 mb-1">{lvl.title}</div>
                  <div className="text-[11px] text-charcoal-600 font-light">{lvl.desc}</div>
                </div>
              ))}
            </div>

            {/* 7 Domains */}
            <div className="pt-6 border-t border-linen-200">
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400 block mb-3 font-sans">
                7 Functional Domains Assessed:
              </span>
              <div className="flex flex-wrap gap-2">
                {rubricDomains.map((dm, dIdx) => (
                  <span key={dIdx} className="px-3.5 py-1.5 rounded-full bg-linen-100 border border-linen-300 text-xs font-medium text-forest-950">
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
