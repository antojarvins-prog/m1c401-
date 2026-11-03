import React, { useState } from 'react';
import { X, Lock, Phone, MessageSquare, CheckCircle2, Shield, Calendar, HeartHandshake } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    relationship: 'Family Member',
    consultType: 'Confidential Call',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl rounded-3xl bg-ivory border border-linen-300 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-charcoal-400 hover:text-forest-950 hover:bg-linen-200/60 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900/5 border border-forest-900/15 text-forest-800 text-xs font-medium">
                <Lock className="w-3.5 h-3.5 text-sage-600" />
                <span>100% Confidential Clinical Triage</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-forest-950">
                Schedule a Private Consultation
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans">
                Speak directly with a senior clinical coordinator. We treat all inquiries with absolute medical discretion, empathy, and dignity.
              </p>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <a
                href="tel:+918029559040"
                className="p-3 rounded-xl bg-linen-100 hover:bg-linen-200/80 border border-linen-300 flex items-center justify-center gap-2 text-xs font-semibold text-forest-900 hover:text-forest-950 transition-colors"
              >
                <Phone className="w-4 h-4 text-forest-800" />
                <span>Call +91 (080) 2955-9040</span>
              </a>
              <a
                href="https://wa.me/918029559040?text=Hello%20SPJ%20RESET%20360,%20I%20would%20like%20to%20inquire%20confidentially%20about%20the%20residential%20rehab%20programme."
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-forest-900 text-linen-100 hover:bg-forest-800 flex items-center justify-center gap-2 text-xs font-semibold transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-sage-300" />
                <span>Discreet WhatsApp</span>
              </a>
            </div>

            <div className="relative flex items-center justify-center my-4">
              <div className="border-t border-linen-300 w-full"></div>
              <span className="bg-ivory px-3 text-[11px] font-mono text-charcoal-400 uppercase tracking-wider">
                Or submit details below
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1 font-sans">
                  Your Name or Pseudonym
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh or Anonymous"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-linen-100/70 border border-linen-300 text-charcoal-900 text-sm focus:border-forest-700 focus:bg-white focus:outline-none transition-colors placeholder:text-charcoal-400 font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1 font-sans">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-linen-100/70 border border-linen-300 text-charcoal-900 text-sm focus:border-forest-700 focus:bg-white focus:outline-none transition-colors placeholder:text-charcoal-400 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1 font-sans">
                    I am Inquiring For
                  </label>
                  <select
                    value={formData.relationship}
                    onChange={e => setFormData({ ...formData, relationship: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-linen-100/70 border border-linen-300 text-charcoal-900 text-sm focus:border-forest-700 focus:bg-white focus:outline-none transition-colors font-sans"
                  >
                    <option value="Family Member">Family Member (Spouse/Child/Parent)</option>
                    <option value="Self">Myself (Confidential)</option>
                    <option value="Friend/Colleague">Friend or Corporate Colleague</option>
                    <option value="Doctor/Referral">Physician / Psychiatrist Referral</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1 font-sans">
                  Preferred Consultation Mode
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Confidential Call', 'In-Person Bengaluru', 'Secure Video Call'].map(mode => (
                    <button
                      type="button"
                      key={mode}
                      onClick={() => setFormData({ ...formData, consultType: mode })}
                      className={`p-2.5 rounded-xl border text-xs font-medium text-center transition-all ${
                        formData.consultType === mode
                          ? 'bg-forest-900 border-forest-900 text-linen-100 font-semibold shadow-sm'
                          : 'bg-linen-100 border-linen-300 text-charcoal-600 hover:bg-linen-200/60'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1 font-sans">
                  Brief Context / Substance of Concern (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Alcohol dependence for 3 years, seeking non-punitive residential rehabilitation..."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-linen-100/70 border border-linen-300 text-charcoal-900 text-sm focus:border-forest-700 focus:bg-white focus:outline-none transition-colors placeholder:text-charcoal-400 font-sans"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-linen-100 font-medium text-sm shadow-md transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer"
              >
                <HeartHandshake className="w-4 h-4 text-bronze-300" />
                <span>Confirm Confidential Consultation Request</span>
              </button>

              <p className="text-[11px] text-center text-charcoal-500 mt-2 font-sans">
                🔒 Absolute medical discretion assured. No spam or third-party sharing.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-4 animate-fade-in font-sans">
            <div className="w-16 h-16 rounded-full bg-forest-900/10 border border-forest-900/20 text-forest-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-forest-950">
              Consultation Request Received
            </h3>
            <p className="text-sm text-charcoal-700 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-forest-950">{formData.name || 'Friend'}</strong>. A senior clinical coordinator will contact you via <strong className="text-forest-900 font-semibold">{formData.phone}</strong> for your requested <strong className="text-forest-900 font-semibold">{formData.consultType}</strong>.
            </p>
            <div className="p-4 rounded-xl bg-linen-100 border border-linen-300 text-xs text-charcoal-600 max-w-sm mx-auto leading-relaxed">
              For immediate emergency triage or urgent admission inquiries, call our direct 24/7 desk at <strong className="text-forest-950">+91 (080) 2955-9040</strong>.
            </div>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-forest-900 text-linen-100 font-medium text-xs hover:bg-forest-800 transition-colors shadow-sm"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
