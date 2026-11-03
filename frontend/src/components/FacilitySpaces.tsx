import React, { useState } from 'react';
import { Home, Users, HeartPulse, Coffee, BookOpen, Shield, Sun, Moon, Clock, Bed, Sparkles } from 'lucide-react';

export default function FacilitySpaces() {
  const [activeSpace, setActiveSpace] = useState(0);

  const spaces = [
    {
      name: "Residential Bedrooms",
      sqft: "850 sq. ft.",
      beds: "15 Beds (Intimate 5-bed suites or semi-private)",
      desc: "Designed for restful circadian sleep restoration. Acoustic dampening, orthopedic bedding, individual storage, and climate-controlled calming ambiance.",
      icon: Bed,
      amenities: ["Orthopedic bedding", "Personal secure locker", "Acoustic insulation", "Individual reading sconce"]
    },
    {
      name: "Group Therapy Hall",
      sqft: "250 sq. ft.",
      beds: "Comfortable circular seating for 15+ residents",
      desc: "Dedicated sanctuary for the MIND360 curriculum, morning mindfulness meetings, psycho-education workshops, and peer support circles.",
      icon: Users,
      amenities: ["Acoustic wall panels", "Audiovisual teaching screen", "Natural sunlight exposure", "Ergonomic lounge seating"]
    },
    {
      name: "Individual Counselling Suite",
      sqft: "180 sq. ft.",
      beds: "Private 1-on-1 therapy",
      desc: "Soundproof, private clinical space for confidential psychotherapeutic sessions, CBT/DBT drills, trauma processing, and values exploration.",
      icon: HeartPulse,
      amenities: ["Double soundproof door", "Discrete white noise machine", "Warm therapeutic lighting", "Full privacy guarantee"]
    },
    {
      name: "Consultation & Medical Office",
      sqft: "150 sq. ft.",
      beds: "Physician & Psychiatrist consultations",
      desc: "Equipped for dual-diagnosis psychiatric diagnostics, vital health evaluations, and medical review by the Medical Officer.",
      icon: Shield,
      amenities: ["Diagnostic examination table", "Secure digital health records", "Vital monitoring equipment", "Direct physician access"]
    },
    {
      name: "Nursing & Medication Station",
      sqft: "100 sq. ft.",
      beds: "24/7 Qualified Nursing oversight",
      desc: "Locked pharmaceutical dispensary, temperature-controlled drug storage, emergency first aid kit, and nursing handover desk.",
      icon: HeartPulse,
      amenities: ["Locked medication cabinet", "Electronic medication MAR", "Emergency response kit", "24/7 nursing presence"]
    },
    {
      name: "Dining & Nutrition Kitchen",
      sqft: "250 sq. ft.",
      beds: "Communal dining",
      desc: "Serving balanced, dietitian-planned therapeutic meals designed to replenish depleted neurotransmitters and restore liver/gut health.",
      icon: Coffee,
      amenities: ["Fresh chef-prepared meals", "Nutritional neuro-replenishment", "Herbal hydration bar", "Communal dining table"]
    },
    {
      name: "Recreation & Activity Space",
      sqft: "200 sq. ft.",
      beds: "Indoor relaxation & movement",
      desc: "Space for gentle yoga, guided physical rehabilitation, board games, creative art therapies, and mindful de-stressing.",
      icon: Sun,
      amenities: ["Yoga mats & props", "Art therapy supplies", "Curated recovery library", "Calm relaxation lounge"]
    },
    {
      name: "Reception & Administration",
      sqft: "180 sq. ft.",
      beds: "Family intake & coordination",
      desc: "Welcoming reception foyer for family visits, intake screening, and administrative coordination.",
      icon: Home,
      amenities: ["Welcoming client reception", "Visitor confidentiality", "Intake coordinator desk", "Secure records archive"]
    }
  ];

  const dailySchedule = [
    { time: "07:00 AM", title: "Morning Rise & Somatic Mindfulness", desc: "Gentle wake-up, herbal hydration, guided meditation or yoga." },
    { time: "08:15 AM", title: "Nutritious Replenishment Breakfast", desc: "Neurotransmitter-supportive balanced breakfast planned by clinical dietitian." },
    { time: "09:00 AM", title: "Morning Medical & Nursing Check-in", desc: "Vital signs review, morning medications under nursing oversight." },
    { time: "10:00 AM", title: "MIND360 Group Curriculum Workshop", desc: "Structured psycho-education on cognitive restructuring, coping, and habit science." },
    { time: "11:30 AM", title: "Trigger Simulation Lab / Individual Therapy", desc: "Alternating 1-on-1 psychotherapy sessions with high-stakes scenario role-plays." },
    { time: "01:00 PM", title: "Mindful Lunch & Restorative Rest", desc: "Wholesome lunch followed by quiet downtime and reflection." },
    { time: "02:30 PM", title: "Functional Rehabilitation & Life Skills", desc: "Occupational therapy, executive functioning, financial and career workshops." },
    { time: "04:30 PM", title: "Graded Physical Fitness & Tea Break", desc: "Physiotherapy-led light conditioning, outdoor stroll, herbal tea." },
    { time: "06:00 PM", title: "Evening Reflection & Peer Support Circle", desc: "Daily triumphs, vulnerability check-in, mutual peer accountability." },
    { time: "07:30 PM", title: "Nourishing Dinner & Leisure Downtime", desc: "Communal dinner, reading, music, art therapy, board games." },
    { time: "09:30 PM", title: "Night Nursing Rounds & Restorative Sleep", desc: "Evening medications, sleep hygiene coaching, lights out for circadian repair." }
  ];

  return (
    <section id="facility" className="py-20 lg:py-28 bg-navy-850 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            Infrastructure & Environment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            The 15-Bed Sanctuary —{' '}
            <span className="text-slate-400 font-medium">2,710 Sq. Ft. Model</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Deliberately limited to 15 beds to prevent overcrowding, institutional impersonality, and chaos. A tranquil, safe, and dignified healing environment in Bengaluru.
          </p>
        </div>

        {/* Space Breakdown Interactive Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Space List Navigation */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-2">
              Select Facility Zone:
            </div>
            {spaces.map((sp, idx) => {
              const Icon = sp.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveSpace(idx)}
                  className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                    activeSpace === idx
                      ? 'bg-teal-500/20 border-teal-400 text-white shadow-lg'
                      : 'bg-navy-900 border-slate-700/60 text-slate-300 hover:bg-navy-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${activeSpace === idx ? 'bg-teal-500 text-white' : 'bg-navy-800 text-teal-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">{sp.name}</div>
                      <div className="text-xs text-slate-400">{sp.beds}</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-teal-300 bg-navy-950 px-2.5 py-1 rounded border border-teal-500/20">
                    {sp.sqft}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Space Showcase Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-navy-900 border border-teal-500/30 p-8 sm:p-10 shadow-2xl relative">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono">
                    {spaces[activeSpace].sqft} Dedicated Area
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1">
                    {spaces[activeSpace].name}
                  </h3>
                  <div className="text-sm font-semibold text-slate-300 mt-1">
                    {spaces[activeSpace].beds}
                  </div>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                  {React.createElement(spaces[activeSpace].icon, { className: "w-7 h-7" })}
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {spaces[activeSpace].desc}
              </p>

              <div className="border-t border-slate-800 pt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Key Architectural & Clinical Amenities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {spaces[activeSpace].amenities.map((am, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-2 p-3 rounded-xl bg-navy-850 border border-slate-800 text-xs text-slate-200">
                      <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>{am}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total Space Metric Strip */}
              <div className="mt-8 p-4 rounded-xl bg-navy-950 border border-teal-500/20 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div>
                  <span className="text-slate-400">Total Planned Area: </span>
                  <strong className="text-white font-mono">2,710 sq. ft.</strong>
                </div>
                <div>
                  <span className="text-slate-400">Bed Capacity: </span>
                  <strong className="text-teal-400 font-mono">15 Beds Maximum</strong>
                </div>
                <div>
                  <span className="text-slate-400">Sanitary Standard: </span>
                  <strong className="text-slate-200 font-mono">3+ Toilets, 2+ Full Baths</strong>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Daily Schedule Preview ("A Day in the Life") */}
        <div className="rounded-3xl bg-navy-900 border border-slate-700/60 p-8 lg:p-12 shadow-xl">
          <div className="max-w-3xl mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Predictable Healing Structure</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              A Typical Day of Recovery at SPJ
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Addiction thrives in chaos and unstructured isolation. Our rhythm provides gentle, restorative structure from dawn to dusk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dailySchedule.map((item, dIdx) => (
              <div key={dIdx} className="p-4 rounded-xl bg-navy-850 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="text-xs font-mono font-bold text-teal-400 mb-1">
                  {item.time}
                </div>
                <div className="text-sm font-bold text-white mb-1">
                  {item.title}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
