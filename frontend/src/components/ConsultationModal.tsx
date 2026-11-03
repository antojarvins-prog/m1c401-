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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl rounded-3xl bg-navy-900 border border-teal-500/30 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold">
                <Lock className="w-3.5 h-3.5" />
                <span>100% Confidential Clinical Triage</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white font-display">
                Schedule a Private Consultation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Speak directly with a senior clinical coordinator. We treat all inquiries with absolute medical discretion and dignity.
              </p>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <a
                href="tel:+918029559040"
                className="p-3 rounded-xl bg-navy-850 hover:bg-navy-800 border border-slate-700 flex items-center justify-center gap-2 text-xs font-semibold text-teal-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 80 2955 9040</span>
              </a>
              <a
                href="https://wa.me/918029559040?text=Hello%20SPJ%20RESET%20360,%20I%20would%20like%20to%20inquire%20confidentially%20about%20the%20residential%20rehab%20programme."
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 flex items-center justify-center gap-2 text-xs font-semibold text-emerald-300 hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discreet WhatsApp</span>
              </a>
            </div>

            <div className="relative flex items-center justify-center my-4">
              <div className="border-t border-slate-800 w-full"></div>
              <span className="bg-navy-900 px-3 text-[11px] font-mono text-slate-500 uppercase">Or submit details below</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Name or Pseudonym
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh or Anonymous"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-850 border border-slate-700/80 text-white text-sm focus:border-teal-400 focus:outline-none transition-colors placeholder:text-slate-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-850 border border-slate-700/80 text-white text-sm focus:border-teal-400 focus:outline-none transition-colors placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    I am Inquiring For
                  </label>
                  <select
                    value={formData.relationship}
                    onChange={e => setFormData({ ...formData, relationship: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-850 border border-slate-700/80 text-white text-sm focus:border-teal-400 focus:outline-none transition-colors"
                  >
                    <option value="Family Member">Family Member (Spouse/Child/Parent)</option>
                    <option value="Self">Myself (Confidential)</option>
                    <option value="Friend/Colleague">Friend or Corporate Colleague</option>
                    <option value="Doctor/Referral">Physician / Psychiatrist Referral</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Preferred Consultation Mode
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Confidential Call', 'In-Person Bengaluru', 'Secure Video Call'].map(mode => (
                    <button
                      type="button"
                      key={mode}
                      onClick={() => setFormData({ ...formData, consultType: mode })}
                      className={`p-2 rounded-lg border text-xs font-medium text-center transition-all ${
                        formData.consultType === mode
                          ? 'bg-teal-500/20 border-teal-400 text-white font-bold'
                          : 'bg-navy-850 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Brief Context / Substance of Concern (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Alcohol dependence for 3 years, seeking non-punitive residential rehabilitation..."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-850 border border-slate-700/80 text-white text-sm focus:border-teal-400 focus:outline-none transition-colors placeholder:text-slate-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold text-sm shadow-lg shadow-teal-500/25 hover:from-teal-400 hover:to-emerald-500 transition-all flex items-center justify-center gap-2 mt-4"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Confirm Confidential Consultation Request</span>
              </button>

              <p className="text-[11px] text-center text-slate-400 mt-2">
                🔒 Your privacy is absolute. We do not share records or spam.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-extrabold text-white font-display">
              Consultation Request Received
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name || 'Friend'}</strong>. A senior clinical coordinator will contact you via <strong className="text-teal-300">{formData.phone}</strong> for your requested <strong className="text-teal-300">{formData.consultType}</strong>.
            </p>
            <div className="p-4 rounded-xl bg-navy-850 border border-slate-800 text-xs text-slate-400 max-w-sm mx-auto">
              For immediate emergency triage or urgent admission inquiries, call our direct 24/7 desk at <strong className="text-white">+91 (080) 2955-9040</strong>.
            </div>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-teal-500 text-white font-semibold text-xs hover:bg-teal-400 transition-colors"
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
