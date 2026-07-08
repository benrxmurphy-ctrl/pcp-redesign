import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { VideoGuide } from '../data/videos';

interface VideoModalProps {
  video: VideoGuide;
  onClose: () => void;
  onNavigate: (page: string, id?: string) => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-3xl bg-brand-dark border border-white/10 overflow-hidden">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 bg-black/60 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <X size={16} className="text-white" />
        </button>

        {/* YouTube embed */}
        <div className="relative aspect-video bg-black">
          {/* Poster shown until iframe loads */}
          {!loaded && (
            <div className="absolute inset-0">
              <img
                src={`${video.thumbnail}?auto=compress&cs=tinysrgb&w=900`}
                alt={video.title}
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-brand-orange/40 border-t-brand-orange rounded-full animate-spin" />
              </div>
            </div>
          )}
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setLoaded(true)}
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Info */}
        <div className="p-7">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h2 className="text-white font-bold text-xl leading-snug">{video.title}</h2>
            <span className="bg-brand-orange text-white text-xs font-semibold px-2 py-1 shrink-0 mt-0.5">{video.topic}</span>
          </div>
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
        </div>
      </div>
    </div>
  );
}
