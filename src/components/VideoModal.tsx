import { useState } from 'react';
import { X, CheckCircle, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { VideoGuide } from '../data/videos';

interface VideoModalProps {
  video: VideoGuide;
  onClose: () => void;
  onNavigate: (page: string, id?: string) => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

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

        {/* Video player */}
        <div className="relative aspect-video bg-black overflow-hidden group/player">
          {/* Poster / thumbnail */}
          <img
            src={`${video.thumbnail}?auto=compress&cs=tinysrgb&w=900`}
            alt={video.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${playing ? 'opacity-30' : 'opacity-70'}`}
          />

          {/* Fake progress bar at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
            <div
              className={`h-full bg-brand-orange transition-all duration-[60000ms] ease-linear ${playing ? 'w-full' : 'w-0'}`}
            />
          </div>

          {/* Centre play/pause button */}
          <button
            onClick={() => setPlaying(p => !p)}
            className="absolute inset-0 flex items-center justify-center w-full"
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 shadow-2xl
              ${playing ? 'bg-white/20 opacity-0 group-hover/player:opacity-100' : 'bg-brand-orange/90'}
            `}>
              {playing
                ? <Pause size={22} fill="white" className="text-white" />
                : <Play size={22} fill="white" className="text-white ml-0.5" />
              }
            </div>
          </button>

          {/* Playing label */}
          {playing && (
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/70 px-2.5 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-white text-xs font-semibold tracking-wide">PLAYING</span>
            </div>
          )}

          {/* Controls bar */}
          <div className="absolute bottom-1 left-0 right-0 flex items-center gap-3 px-3 pb-2 pt-1
            opacity-0 group-hover/player:opacity-100 transition-opacity"
          >
            <button
              onClick={() => setPlaying(p => !p)}
              className="text-white hover:text-brand-orange transition-colors"
            >
              {playing ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <div className="flex-1 h-0.5 bg-white/20 relative cursor-pointer">
              <div className={`h-full bg-brand-orange transition-all duration-[60000ms] ease-linear ${playing ? 'w-full' : 'w-0'}`} />
            </div>
            <span className="text-white/60 text-xs font-mono">{video.duration}</span>
            <button
              onClick={() => setMuted(m => !m)}
              className="text-white hover:text-brand-orange transition-colors"
            >
              {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>
            <button className="text-white hover:text-brand-orange transition-colors">
              <Maximize2 size={14} />
            </button>
          </div>

          {/* Topic badge */}
          <div className="absolute top-3 right-3 bg-brand-orange text-white text-xs font-semibold px-2 py-1">
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
        </div>
      </div>
    </div>
  );
}
