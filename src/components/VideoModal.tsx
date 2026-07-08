import { X, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { VideoGuide } from '../data/videos';

interface VideoModalProps {
  video: VideoGuide;
  onClose: () => void;
  onNavigate: (page: string, id?: string) => void;
}

export default function VideoModal({ video, onClose, onNavigate }: VideoModalProps) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-3xl bg-brand-dark border border-white/10 overflow-hidden">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <X size={16} className="text-white" />
        </button>

        {/* Fake video player */}
        <div className="relative aspect-video bg-black overflow-hidden">
          <img
            src={`${video.thumbnail}?auto=compress&cs=tinysrgb&w=900`}
            alt={video.title}
            className="w-full h-full object-cover opacity-50"
          />

          {/* Player overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Play icon — stylised */}
            <div className="w-20 h-20 rounded-full bg-brand-orange/90 backdrop-blur-sm flex items-center justify-center mb-6 shadow-2xl">
              <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

            {/* Request access box */}
            <div className="bg-black/80 border border-white/20 px-8 py-5 text-center max-w-sm">
              <p className="text-white font-bold text-sm mb-2">Video On Demand</p>
              <p className="text-white/60 text-xs leading-relaxed mb-4">
                This video guide is available to registered customers and prospects. Contact our team to access the full video library.
              </p>
              <button
                onClick={() => { onClose(); onNavigate('contact'); }}
                className="bg-brand-orange text-white text-xs font-bold py-2.5 px-5 hover:bg-brand-orange/80 transition-colors inline-flex items-center gap-2"
              >
                Request Access <ArrowRight size={12} />
              </button>
            </div>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 font-mono">
            {video.duration}
          </div>

          {/* Topic badge */}
          <div className="absolute top-3 left-3 bg-brand-orange text-white text-xs font-semibold px-2 py-1">
            {video.topic}
          </div>
        </div>

        {/* Info */}
        <div className="p-7">
          <h2 className="text-white font-bold text-xl mb-3 leading-snug">{video.title}</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-6">{video.description}</p>

          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-3">What's covered</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {video.highlights.map(h => (
                <div key={h} className="flex items-start gap-2.5">
                  <CheckCircle size={13} className="text-brand-orange shrink-0 mt-0.5" />
                  <span className="text-white/60 text-xs">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-7 pt-5 border-t border-white/10">
            <button
              onClick={() => { onClose(); onNavigate('contact'); }}
              className="btn-primary text-xs"
            >
              Request Video Access <ArrowRight size={13} />
            </button>
            <a
              href="tel:+35345863220"
              className="btn-outline text-xs inline-flex items-center gap-2"
            >
              <Phone size={13} /> +353 45 863220
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
