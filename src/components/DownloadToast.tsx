import { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface DownloadToastProps {
  title: string;
  onDismiss: () => void;
}

export default function DownloadToast({ title, onDismiss }: DownloadToastProps) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 4000);
    return () => clearTimeout(t);
  }, [onDismiss]);

  return (
    <div className="fixed bottom-6 right-6 z-[300] animate-slide-up">
      <div className="flex items-center gap-3 bg-brand-dark-3 border border-white/10 shadow-2xl px-5 py-4 min-w-72">
        <CheckCircle size={18} className="text-green-400 shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm">Download started</p>
          <p className="text-white/50 text-xs truncate mt-0.5">{title}</p>
        </div>
        <button onClick={onDismiss} className="text-white/30 hover:text-white transition-colors">
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
