import React, { useState } from 'react';
import { X, CheckCircle2, Smartphone, Building2, ArrowRight, ShieldCheck } from 'lucide-react';

interface DemoLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: 'teen' | 'company';
  onLoginSuccess?: (role: 'teen' | 'company') => void;
}

export const DemoLoginModal: React.FC<DemoLoginModalProps> = ({
  isOpen,
  onClose,
  initialRole = 'teen',
  onLoginSuccess,
}) => {
  const [role, setRole] = useState<'teen' | 'company'>(initialRole);
  const [step, setStep] = useState<'input' | 'otp' | 'success'>('input');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [otp, setOtp] = useState('');

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneOrEmail.trim().length > 3) {
      setStep('otp');
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    setTimeout(() => {
      onLoginSuccess?.(role);
      handleClose();
    }, 1200);
  };

  const handleQuickDemo = (selectedRole: 'teen' | 'company') => {
    setRole(selectedRole);
    setStep('success');
    setTimeout(() => {
      onLoginSuccess?.(selectedRole);
      handleClose();
    }, 1000);
  };

  const handleClose = () => {
    setStep('input');
    setPhoneOrEmail('');
    setOtp('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden text-left"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
              Secure Access
            </div>
            <h3 id="login-title" className="text-lg font-bold text-white">
              Log in to Funngro
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors focus:ring-2 focus:ring-emerald-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {step === 'success' ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Welcome, {role === 'teen' ? 'Young Earner' : 'Brand Partner'}!
              </h4>
              <p className="text-xs text-slate-500">
                Logged in successfully in frontend simulation mode.
              </p>
            </div>
          ) : (
            <>
              {/* Role Selector Tabs */}
              <div className="bg-stone-100 p-1 rounded-lg flex text-xs font-semibold text-slate-600">
                <button
                  type="button"
                  onClick={() => setRole('teen')}
                  className={`flex-1 py-2 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                    role === 'teen'
                      ? 'bg-white text-slate-900 shadow-sm font-bold'
                      : 'hover:text-slate-900'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Teen / Student</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole('company')}
                  className={`flex-1 py-2 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                    role === 'company'
                      ? 'bg-white text-slate-900 shadow-sm font-bold'
                      : 'hover:text-slate-900'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Company / Brand</span>
                </button>
              </div>

              {step === 'input' && (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {role === 'teen' ? 'Registered Mobile Number' : 'Work Email Address'}
                    </label>
                    <input
                      type={role === 'teen' ? 'tel' : 'email'}
                      required
                      value={phoneOrEmail}
                      onChange={(e) => setPhoneOrEmail(e.target.value)}
                      placeholder={role === 'teen' ? '98765 43210' : 'marketing@brand.com'}
                      className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Request One-Time Code</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

              {step === 'otp' && (
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div className="text-xs text-slate-600">
                    Enter the demo code sent to{' '}
                    <strong className="text-slate-900">{phoneOrEmail}</strong> (any 4 digits):
                  </div>
                  <input
                    type="text"
                    maxLength={4}
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    placeholder="1234"
                    className="w-full px-3 py-2 text-center text-lg font-mono tracking-widest border border-stone-300 rounded-lg focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs rounded-lg transition-colors"
                  >
                    Verify & Enter
                  </button>
                </form>
              )}

              {/* 1-Click Fast Sandbox Previews */}
              <div className="pt-2 border-t border-stone-200">
                <div className="text-[11px] font-medium text-slate-500 mb-2 text-center">
                  Or instant 1-click test profile:
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleQuickDemo('teen')}
                    className="flex-1 py-1.5 px-2 bg-stone-100 hover:bg-stone-200 text-slate-800 rounded-lg text-[11px] font-semibold transition-colors"
                  >
                    Student Demo Profile
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickDemo('company')}
                    className="flex-1 py-1.5 px-2 bg-stone-100 hover:bg-stone-200 text-slate-800 rounded-lg text-[11px] font-semibold transition-colors"
                  >
                    Brand Manager Demo
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
