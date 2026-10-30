import React from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClear: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClear }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#30202D] text-white px-4 py-3 shadow-2xl border border-stone-600 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
      <div className="w-5 h-5 rounded-full bg-emerald-600/30 flex items-center justify-center shrink-0">
        <Check className="w-3.5 h-3.5 text-emerald-400" />
      </div>
      <p className="text-xs font-mono text-stone-200">{message}</p>
      <button
        onClick={onClear}
        className="text-stone-400 hover:text-white text-xs ml-2 font-mono underline"
      >
        Dismiss
      </button>
    </div>
  );
};
