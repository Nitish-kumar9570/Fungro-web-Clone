import React, { useState } from 'react';
import { X, Smartphone, QrCode, CheckCircle2, ShieldCheck, Download, ArrowRight, Send } from 'lucide-react';

interface TeenAppDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeenAppDownloadModal: React.FC<TeenAppDownloadModalProps> = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setIsSent(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden text-left"
        role="dialog"
        aria-modal="true"
        aria-labelledby="app-download-title"
      >
        {/* Top Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
              Student Earning App
            </div>
            <h3 id="app-download-title" className="text-lg font-bold text-white">
              Get the Funngro App
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors focus:ring-2 focus:ring-emerald-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Top Highlights */}
          <div className="flex items-center gap-4 bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-lg shrink-0">
              F
            </div>
            <div className="text-xs text-emerald-950">
              <div className="font-bold text-sm text-slate-900">Funngro: Learn & Earn</div>
              <div className="text-slate-600 mt-0.5">
                4.6 ★ Rated on App Stores · 70 Lakh+ Young Indian Earners
              </div>
            </div>
          </div>

          {/* QR Code and Mobile Experience */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center bg-stone-50 border border-stone-200/80 rounded-xl p-4">
            <div className="flex flex-col items-center justify-center text-center p-2 bg-white rounded-lg border border-stone-200">
              {/* Simulated stylized QR Code with SVG */}
              <div className="w-32 h-32 bg-slate-900 p-2 rounded-lg flex items-center justify-center text-white relative">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                  {/* Outer position boxes */}
                  <rect x="5" y="5" width="28" height="28" fill="none" stroke="white" strokeWidth="6" />
                  <rect x="12" y="12" width="14" height="14" fill="white" />
                  <rect x="67" y="5" width="28" height="28" fill="none" stroke="white" strokeWidth="6" />
                  <rect x="74" y="12" width="14" height="14" fill="white" />
                  <rect x="5" y="67" width="28" height="28" fill="none" stroke="white" strokeWidth="6" />
                  <rect x="12" y="74" width="14" height="14" fill="white" />
                  {/* Decorative data pattern blocks */}
                  <rect x="42" y="10" width="8" height="8" fill="white" />
                  <rect x="52" y="20" width="8" height="8" fill="white" />
                  <rect x="42" y="42" width="16" height="16" fill="#10B981" />
                  <rect x="15" y="42" width="8" height="12" fill="white" />
                  <rect x="70" y="42" width="12" height="8" fill="white" />
                  <rect x="42" y="70" width="12" height="10" fill="white" />
                  <rect x="65" y="70" width="8" height="15" fill="white" />
                  <rect x="80" y="80" width="10" height="10" fill="white" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-emerald-600 text-white font-bold text-[10px] px-1.5 py-0.5 rounded shadow">
                    SCAN
                  </div>
                </div>
              </div>
              <span className="text-[11px] text-slate-500 font-medium mt-2">
                Scan with phone camera
              </span>
            </div>

            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="font-semibold text-slate-900 text-sm">
                Get started on iOS & Android
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Free account setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct UPI & bank payouts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero previous experience needed</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Parental safety compliant</span>
              </div>
            </div>
          </div>

          {/* SMS / WhatsApp Link Sender */}
          <div>
            <div className="text-xs font-semibold text-slate-800 mb-1.5">
              Or send download link via SMS:
            </div>
            {isSent ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-lg text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Link sent to +91 {phoneNumber}! Check your messages to install.</span>
              </div>
            ) : (
              <form onSubmit={handleSendLink} className="flex gap-2">
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-2 text-xs font-medium text-slate-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full pl-11 pr-3 py-2 text-xs border border-stone-300 rounded-lg focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none font-mono"
                  />
                </div>
                <button
                  type="submit"
                  disabled={phoneNumber.length < 10}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1"
                >
                  <span>Send Link</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            )}
          </div>

          {/* Direct App Store Download Badges */}
          <div className="pt-2 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <span>Also available on:</span>
            <div className="flex gap-2">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-slate-800 rounded-md font-medium text-[11px] transition-colors"
              >
                Google Play Store ↗
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-slate-800 rounded-md font-medium text-[11px] transition-colors"
              >
                Apple App Store ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
