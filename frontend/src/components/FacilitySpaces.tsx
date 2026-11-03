import React, { useState } from 'react';
import { Home, Users, HeartPulse, Coffee, Shield, Sun, Clock, Bed, Sparkles, Droplets } from 'lucide-react';

export default function FacilitySpaces() {
  const [activeSpace, setActiveSpace] = useState(0);

  const spaces = [
    {
      name: "Residential Bedrooms",
      sqft: "850 sq. ft.",
      beds: "15 Beds (Intimate 5-bed suites or semi-private)",
      desc: "Designed for circadian sleep restoration. Acoustic dampening, orthopedic natural mattresses, personal storage, soft morning light, and climate-controlled calming ambiance.",
      icon: Bed,
      amenities: ["Orthopedic bedding", "Personal secure timber locker", "Acoustic insulation", "Individual reading sconce"]
    },
    {
      name: "Group Therapy Hall",
      sqft: "250 sq. ft.",
      beds: "Comfortable circular lounge for 15 residents",
      desc: "Dedicated sanctuary for the MIND360 curriculum, morning mindfulness meetings, psycho-education workshops, and peer support circles.",
      icon: Users,
      amenities: ["Acoustic wall panels", "Audiovisual teaching screen", "Natural sunlight exposure", "Ergonomic lounge seating"]
    },
    {
      name: "Individual Counselling Suite",
      sqft: "180 sq. ft.",
      beds: "Private 1-on-1 psychotherapy",
      desc: "Soundproof, private clinical space for confidential psychotherapeutic sessions, CBT/DBT drills, trauma processing, and values exploration.",
      icon: HeartPulse,
      amenities: ["Double soundproof door", "Discrete white noise acoustics", "Warm daylight illumination", "Full confidentiality guarantee"]
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
    { time: "07:00 AM", title: "Morning Rise & Somatic Mindfulness", desc: "Gentle wake-up, herbal hydration, guided meditation or pranayama breathwork." },
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
    <section id="facility" className="py-20 lg:py-28 bg-ivory border-t border-linen-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linen-200 border border-linen-300 text-forest-800 text-xs font-semibold uppercase tracking-wider font-sans">
            The Sanctuary Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal text-forest-950 font-serif tracking-tight">
            The 15-Bed Sanctuary —{' '}
            <span className="italic text-forest-700">2,710 Sq. Ft. Model</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans font-light">
            Deliberately planned for 15 beds to eliminate the chaos, impersonality, and overcrowding of conventional facilities. A tranquil healing environment in Bengaluru.
          </p>
        </div>

        {/* Space Breakdown Interactive Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Space List Navigation */}
          <div className="lg:col-span-5 space-y-2 font-sans">
            <div className="text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-3 px-2">
              Select Facility Zone:
            </div>
            {spaces.map((sp, idx) => {
              const Icon = sp.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveSpace(idx)}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    activeSpace === idx
                      ? 'bg-forest-800 border-forest-800 text-ivory shadow-md'
                      : 'bg-ivory-pure border-linen-300 text-charcoal-800 hover:bg-linen-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${activeSpace === idx ? 'bg-forest-900 text-bronze-300' : 'bg-linen-150 text-forest-800'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{sp.name}</div>
                      <div className={`text-xs ${activeStageClass(activeSpace === idx)}`}>{sp.beds}</div>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${activeSpace === idx ? 'bg-forest-900 text-bronze-300 border-forest-700' : 'bg-linen-150 text-forest-900 border-linen-300'}`}>
                    {sp.sqft}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Space Showcase Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-ivory-pure border border-linen-300 p-8 sm:p-10 shadow-sm relative">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-bronze-700 font-sans">
                    {spaces[activeSpace].sqft} Dedicated Area
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest-950 mt-1">
                    {spaces[activeSpace].name}
                  </h3>
                  <div className="text-sm font-semibold text-charcoal-600 mt-1 font-sans">
                    {spaces[activeSpace].beds}
                  </div>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-linen-150 border border-linen-200 flex items-center justify-center text-forest-800 shrink-0">
                  {React.createElement(spaces[activeSpace].icon, { className: "w-7 h-7 text-forest-700" })}
                </div>
              </div>

              <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed mb-6 font-sans font-light">
                {spaces[activeSpace].desc}
              </p>

              <div className="border-t border-linen-200 pt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400 block mb-3 font-sans">
                  Key Architectural & Restorative Amenities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
                  {spaces[activeSpace].amenities.map((am, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-2 p-3 rounded-xl bg-linen-50 border border-linen-200 text-xs text-charcoal-800">
                      <Sparkles className="w-3.5 h-3.5 text-bronze-600 shrink-0" />
                      <span>{am}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total Space Metric Strip */}
              <div className="mt-8 p-4 rounded-2xl bg-linen-100 border border-linen-300 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
                <div>
                  <span className="text-charcoal-500">Total Planned Area: </span>
                  <strong className="text-forest-950">2,710 sq. ft.</strong>
                </div>
                <div>
                  <span className="text-charcoal-500">Bed Capacity: </span>
                  <strong className="text-forest-900">15 Beds Maximum</strong>
                </div>
                <div>
                  <span className="text-charcoal-500">Sanitary Standard: </span>
                  <strong className="text-forest-950">3+ Toilets, 2+ Full Baths</strong>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Daily Schedule Preview ("Daily Life at SPJ") */}
        <div className="rounded-3xl bg-ivory-pure border border-linen-300 p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 text-bronze-700 text-xs font-bold uppercase tracking-wider font-sans">
              <Clock className="w-4 h-4" />
              <span>Predictable Healing Structure</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest-950">
              Daily Life at SPJ — A Rhythm of Recovery
            </h3>
            <p className="text-charcoal-700 text-sm leading-relaxed font-sans font-light">
              Addiction thrives in chaos and unstructured isolation. Our sanctuary rhythm provides gentle, restorative structure from dawn to dusk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-sans">
            {dailySchedule.map((item, dIdx) => (
              <div key={dIdx} className="p-4 rounded-2xl bg-linen-50 border border-linen-200 hover:border-linen-300 transition-colors">
                <div className="text-xs font-bold text-forest-800 mb-1">
                  {item.time}
                </div>
                <div className="text-sm font-serif font-bold text-forest-950 mb-1">
                  {item.title}
                </div>
                <div className="text-xs text-charcoal-600 leading-relaxed font-light">
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

function activeStageClass(isActive: boolean) {
  return isActive ? 'text-linen-300' : 'text-charcoal-500';
}
