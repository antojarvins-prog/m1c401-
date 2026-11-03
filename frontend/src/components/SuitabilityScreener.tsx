import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, RotateCcw, AlertTriangle, ShieldCheck, HeartHandshake, Phone, MessageSquare } from 'lucide-react';

interface ScreenerProps {
  onOpenBooking: () => void;
}

export default function SuitabilityScreener({ onOpenBooking }: ScreenerProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    forWhom: '',
    substance: '',
    medicalStatus: '',
    primaryGoal: ''
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelect = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({
      forWhom: '',
      substance: '',
      medicalStatus: '',
      primaryGoal: ''
    });
    setCurrentStep(1);
    setIsCompleted(false);
  };

  return (
    <section id="screener" className="py-20 lg:py-28 bg-navy-850 border-t border-navy-800 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Clinical Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Confidential Suitability Screener
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Answer 4 confidential questions to determine whether our 90-day residential programme in Bengaluru is the appropriate clinical step.
          </p>
        </div>

        {/* Screener Interactive Card */}
        <div className="rounded-3xl bg-navy-900 border border-teal-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {!isCompleted ? (
            <div>
              {/* Stepper Progress Indicator */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
                <span className="text-xs font-mono font-bold text-teal-400">
                  Step {currentStep} of 4
                </span>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4].map(step => (
                    <div 
                      key={step} 
                      className={`h-2 rounded-full transition-all ${
                        currentStep === step 
                          ? 'w-8 bg-teal-400' 
                          : currentStep > step 
                            ? 'w-4 bg-teal-600' 
                            : 'w-4 bg-navy-800'
                      }`} 
                    />
                  ))}
                </div>
              </div>

              {/* Step 1: For Whom */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    1. Who are you seeking confidential guidance for?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { label: "A Family Member", sub: "Spouse, adult child, or sibling", value: "family" },
                      { label: "Myself", sub: "Discreet personal assessment", value: "self" },
                      { label: "A Friend or Colleague", sub: "Corporate or personal referral", value: "other" }
                    ].map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => handleSelect('forWhom', opt.value)}
                        className="p-5 rounded-2xl bg-navy-850 border border-slate-700/80 hover:border-teal-400 hover:bg-navy-800 text-left transition-all group"
                      >
                        <div className="text-base font-bold text-white group-hover:text-teal-300 mb-1">
                          {opt.label}
                        </div>
                        <div className="text-xs text-slate-400">
                          {opt.sub}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Substance / Issue */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    2. What is the primary area of concern?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: "Alcohol Dependence", sub: "Daily, binge, or health-impairing consumption", value: "alcohol" },
                      { label: "Prescription Medication", sub: "Sedatives, sleeping medication, or pain relievers", value: "prescription" },
                      { label: "Cannabis, Stimulants or Other Substances", sub: "Substance interference with work and life", value: "substances" },
                      { label: "Dual Diagnosis / Co-occurring Emotional Strain", sub: "Substance use intertwined with severe stress, depression, or anxiety", value: "dual" }
                    ].map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => handleSelect('substance', opt.value)}
                        className="p-5 rounded-2xl bg-navy-850 border border-slate-700/80 hover:border-teal-400 hover:bg-navy-800 text-left transition-all group"
                      >
                        <div className="text-base font-bold text-white group-hover:text-teal-300 mb-1">
                          {opt.label}
                        </div>
                        <div className="text-xs text-slate-400">
                          {opt.sub}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Medical / Withdrawal State */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    3. What is the current physical & medical withdrawal status?
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { label: "Medically Stable & Functional", sub: "Currently able to converse, no active delirium, seizures, or physical collapse.", value: "stable" },
                      { label: "Recently Completed Hospital Detoxification", sub: "Acute withdrawal managed; now ready for psychological & behavioural rehabilitation.", value: "post-detox" },
                      { label: "Currently Experiencing Severe Acute Withdrawal", sub: "Active delirium tremens, tremors, severe vomiting, or medical distress.", value: "acute" },
                      { label: "Uncertain / Need Clinical Physician Evaluation", sub: "Require clinical triage to determine appropriate level of care.", value: "unsure" }
                    ].map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => handleSelect('medicalStatus', opt.value)}
                        className="p-4 rounded-xl bg-navy-850 border border-slate-700/80 hover:border-teal-400 hover:bg-navy-800 text-left transition-all group flex items-start justify-between"
                      >
                        <div>
                          <div className="text-sm font-bold text-white group-hover:text-teal-300 mb-0.5">
                            {opt.label}
                          </div>
                          <div className="text-xs text-slate-400">
                            {opt.sub}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 shrink-0 mt-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Primary Goal */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    4. What is the most critical outcome you wish to achieve?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: "Comprehensive 90-Day Reset", sub: "Rebuild habits, thinking patterns, and emotional stability", value: "90day" },
                      { label: "Prevent Continuous Relapse Cycles", sub: "Long-term behavioural change and 12-month aftercare support", value: "relapse" },
                      { label: "Heal Co-occurring Depression & Anxiety", sub: "Medical psychiatric care combined with psychotherapeutic skills", value: "psychiatric" },
                      { label: "Restore Family, Career & Autonomy", sub: "Reintegration without shame, punishment, or social alienation", value: "family" }
                    ].map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => handleSelect('primaryGoal', opt.value)}
                        className="p-5 rounded-2xl bg-navy-850 border border-slate-700/80 hover:border-teal-400 hover:bg-navy-800 text-left transition-all group"
                      >
                        <div className="text-base font-bold text-white group-hover:text-teal-300 mb-1">
                          {opt.label}
                        </div>
                        <div className="text-xs text-slate-400">
                          {opt.sub}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6 animate-fade-in">
              {answers.medicalStatus === 'acute' ? (
                /* Emergency Hospital Guidance */
                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-4">
                  <div className="flex items-center gap-3 text-amber-400">
                    <AlertTriangle className="w-6 h-6 shrink-0" />
                    <h4 className="text-xl font-bold font-display">
                      Immediate Hospital Stabilization Recommended First
                    </h4>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Based on your input indicating acute severe withdrawal or medical instability, immediate medical safety comes first. SPJ is a post-crisis residential rehabilitation institution, not an acute medical detoxification hospital.
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We recommend immediate evaluation at a tertiary multispecialty hospital. Once medical stabilization is complete, the resident is warmly welcomed into our 90-day RESET 360° programme.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <a 
                      href="tel:+918029559040"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs shadow-md"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Speak with Our Clinical Triage Physician</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-4 py-2.5 rounded-xl bg-navy-800 text-slate-300 text-xs font-semibold hover:text-white"
                    >
                      Restart Assessment
                    </button>
                  </div>
                </div>
              ) : (
                /* High Suitability Match */
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-teal-400">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-teal-300" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono">
                        Clinical Assessment Result
                      </span>
                      <h4 className="text-2xl font-extrabold text-white font-display">
                        High Suitability for RESET 360° Residential Pathway
                      </h4>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    Your profile matches our person-centred rehabilitation model. Because the individual is medically stable, they can fully engage in the <strong className="text-white">90-day residential journey</strong>, the <strong className="text-white">MIND360 cognitive restructuring curriculum</strong>, and our <strong className="text-white">12-month LIFE360 aftercare continuum</strong> in Bengaluru.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-navy-850 border border-slate-800 text-xs">
                    <div>
                      <span className="text-slate-400 block">Recommended Pathway:</span>
                      <strong className="text-teal-300">90-Day Residential Journey</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Staffing Environment:</span>
                      <strong className="text-white">15-Bed Boutique Setting</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Follow-up Continuity:</span>
                      <strong className="text-emerald-400">12 Months (LIFE360)</strong>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      onClick={onOpenBooking}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold text-sm shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2 hover:from-teal-400 hover:to-emerald-500"
                    >
                      <HeartHandshake className="w-4 h-4" />
                      <span>Schedule In-Person / Video Consultation</span>
                    </button>
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-navy-850 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retake Assessment</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
