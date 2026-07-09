import { useState } from 'react';
import {
  ChevronRight, FileText, BookOpen, Download,
  ArrowRight, Clock, Play, Film, FileDown, Shield,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { guides } from '../data/guides';
import { projects } from '../data/projects';
import { brochures, triggerDownload } from '../data/downloads';
import { videoGuides } from '../data/videos';
import VideoModal from '../components/VideoModal';
import DownloadToast from '../components/DownloadToast';

interface ResourcesPageProps {
  onNavigate: (page: string, id?: string) => void;
  section?: string;
}

const faqs = [
  {
    q: 'How quickly can you respond to a dust or odour complaint situation?',
    a: 'We can typically arrange a site visit within 48 hours. For urgent situations involving enforcement or imminent complaints, we prioritise rapid response. Call us directly on +353 45 863220.',
  },
  {
    q: 'Do you offer equipment hire as well as purchase?',
    a: 'Yes. We offer hire of mobile atomisers, industrial vacuums and temporary suppression systems. This is particularly useful for construction projects, urgent complaint response or trialling equipment before committing to purchase.',
  },
  {
    q: 'What is involved in a site assessment?',
    a: 'A free site visit where our engineer reviews your operations, identifies the source of the dust or odour, assesses site conditions (wind direction, proximity to boundaries, process layout) and recommends the most appropriate solution. No charge, no obligation.',
  },
  {
    q: 'Will your solutions meet EPA and local authority requirements?',
    a: 'Our solutions are designed around Irish EPA requirements and local authority environmental licence conditions. We have successfully supported customers through EPA audits, local authority enforcement responses and environmental permit applications.',
  },
  {
    q: 'Do you install the equipment or just supply it?',
    a: 'We supply, install, commission and maintain all equipment. One point of contact from initial assessment through to ongoing service. We also train your team on system operation.',
  },
  {
    q: 'How do I know which dust suppression method is right for my site?',
    a: 'That is exactly what our free site assessment is designed to answer. The right solution depends on dust particle size, source location, site layout, climate and your budget. We will assess and recommend — you do not need to know the answer before contacting us.',
  },
  {
    q: 'Can you provide ongoing maintenance and servicing?',
    a: 'Yes. We provide planned preventative maintenance, emergency callout, consumable supply (chemistry, nozzles, filters) and remote monitoring support for all systems we install.',
  },
  {
    q: 'Do you cover Northern Ireland?',
    a: 'Yes. We cover both the Republic of Ireland and Northern Ireland. Get in touch via phone or email and we will arrange a visit.',
  },
];

const typeColor: Record<string, string> = {
  'Solution Brochure': 'bg-brand-orange',
  'Product Datasheet': 'bg-blue-600',
  'Compliance Guide': 'bg-green-700',
  'Technical Note': 'bg-zinc-600',
};

const typeIcon: Record<string, typeof FileText> = {
  'Solution Brochure': FileText,
  'Product Datasheet': FileDown,
  'Compliance Guide': Shield,
  'Technical Note': BookOpen,
};

export default function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  const [activeVideo, setActiveVideo] = useState<(typeof videoGuides)[0] | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const handleDownload = (b: (typeof brochures)[0]) => {
    triggerDownload(b);
    setToast(b.title);
  };

  return (
    <div className="bg-brand-dark pt-20">
      {/* Video modal */}
      {activeVideo && (
        <VideoModal
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
          onNavigate={onNavigate}
        />
      )}

      {/* Toast */}
      {toast && <DownloadToast title={toast} onDismiss={() => setToast(null)} />}

      {/* Hero */}
      <section className="py-20 px-4 bg-brand-dark-2">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">Resources</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Knowledge Base</h1>
          <p className="text-xl text-white/60 max-w-2xl">
            Technical guides, video walkthroughs, downloadable datasheets and case studies for site operators and EHS engineers.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="px-4 py-3 bg-brand-dark-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: 'Resources' }]} onNavigate={onNavigate} />
        </div>
      </div>

      {/* Resource type overview */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {[
            { icon: Film, title: 'Video Guides', desc: 'Site walkthroughs and technology explanations.', count: `${videoGuides.length} videos` },
            { icon: BookOpen, title: 'Tech Guides', desc: 'In-depth guides on suppression, extraction and monitoring.', count: `${guides.length} guides` },
            { icon: FileText, title: 'Case Studies', desc: 'Real projects, measured results from Irish industry.', count: `${projects.length} case studies` },
            { icon: Download, title: 'Downloads', desc: 'Datasheets, brochures and compliance guides.', count: `${brochures.length} documents` },
          ].map(r => (
            <div key={r.title} className="bg-brand-dark-3 border border-white/5 p-8">
              <r.icon size={28} className="text-brand-orange mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-white/50 text-sm mb-3">{r.desc}</p>
              <p className="text-brand-orange text-xs font-semibold">{r.count}</p>
            </div>
          ))}
        </div>

        {/* ── VIDEO GUIDES ── */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <p className="section-label mb-2">Video Library</p>
              <h2 className="section-title flex items-center gap-3">
                Video Guides
                <span className="text-white/20 text-base font-normal">|</span>
                <span className="text-brand-orange text-sm font-semibold">{videoGuides.length} videos</span>
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {videoGuides.map(video => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="group bg-brand-dark-3 border border-white/5 hover:border-brand-orange/40 transition-all text-left overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={`${video.thumbnail}?auto=compress&cs=tinysrgb&w=500`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play size={18} fill="white" className="text-white ml-0.5" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 font-mono">
                    {video.duration}
                  </div>

                  {/* Topic */}
                  <div className="absolute top-2 left-2 bg-brand-orange text-white text-xs font-semibold px-2 py-0.5">
                    {video.topic}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-brand-orange transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-white/40 text-xs mt-2 line-clamp-2 leading-relaxed">{video.description}</p>
                  <div className="flex items-center gap-1 text-brand-orange text-xs font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={11} /> Watch Guide
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── WRITTEN GUIDES ── */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <p className="section-label mb-2">Technical Reading</p>
              <h2 className="section-title">Written Guides</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map(g => (
              <button
                key={g.id}
                onClick={() => onNavigate('guide', g.id)}
                className="group bg-brand-dark-3 border border-white/5 hover:border-brand-orange/40 transition-all text-left overflow-hidden"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={`${g.image}?auto=compress&cs=tinysrgb&w=600`}
                    alt={g.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-orange text-white text-xs font-semibold px-2 py-1">{g.topic}</span>
                  </div>
                  <div className="absolute top-3 right-3 w-7 h-7 bg-white opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                    <ArrowRight size={13} className="text-brand-orange" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-white/40 text-xs mb-2">
                    <Clock size={11} />
                    <span>{g.readTime}</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-brand-orange transition-colors">
                    {g.title}
                  </h3>
                  <p className="text-white/40 text-xs mt-2 line-clamp-2 leading-relaxed">{g.intro}</p>
                  <div className="flex items-center gap-1 text-brand-orange text-xs font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read Guide <ArrowRight size={12} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── CASE STUDIES ── */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <p className="section-label mb-2">Case Studies</p>
              <h2 className="section-title">Recent Projects</h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="text-brand-orange text-sm font-semibold flex items-center gap-1 hover:text-white transition-colors whitespace-nowrap"
            >
              All Projects <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.slice(0, 6).map(project => (
              <button
                key={project.id}
                onClick={() => onNavigate('project', project.id)}
                className="group bg-brand-dark-3 border border-white/5 hover:border-brand-orange/40 transition-all text-left overflow-hidden"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={`${project.image}?auto=compress&cs=tinysrgb&w=600`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="bg-brand-orange text-white text-xs font-semibold px-2 py-1">{project.industry}</span>
                    <span className="bg-black/60 text-white/80 text-xs px-2 py-1">{project.year}</span>
                  </div>
                  <div className="absolute top-3 right-3 w-7 h-7 bg-white opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                    <ArrowRight size={13} className="text-brand-orange" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-sm leading-snug mb-2 group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-brand-orange text-xs font-medium leading-relaxed">{project.result}</p>
                  <div className="flex items-center gap-1 text-brand-orange text-xs font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read Case Study <ArrowRight size={12} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── DOWNLOADS ── */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="mb-10">
            <p className="section-label mb-2">Downloads</p>
            <h2 className="section-title mb-2">Datasheets &amp; Brochures</h2>
            <p className="text-white/50 text-sm">Click any document to download instantly. All documents are provided in text format for compatibility.</p>
          </div>

          {/* By type */}
          {(['Solution Brochure', 'Product Datasheet', 'Compliance Guide', 'Technical Note'] as const).map(type => {
            const docs = brochures.filter(b => b.type === type);
            if (docs.length === 0) return null;
            const Icon = typeIcon[type] ?? FileText;
            return (
              <div key={type} className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-6 h-6 flex items-center justify-center ${typeColor[type]} shrink-0`}>
                    <Icon size={13} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-widest">{type}s</h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {docs.map(doc => (
                    <button
                      key={doc.id}
                      onClick={() => handleDownload(doc)}
                      className="group bg-brand-dark-3 border border-white/5 hover:border-brand-orange/50 transition-all text-left overflow-hidden"
                    >
                      {/* Thumbnail */}
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src={`${doc.image}?auto=compress&cs=tinysrgb&w=400`}
                          alt={doc.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
                        <div className={`absolute top-2 left-2 text-white text-xs font-semibold px-2 py-0.5 ${typeColor[type]}`}>
                          {doc.type}
                        </div>
                        {/* Download icon on hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-10 h-10 bg-brand-orange flex items-center justify-center">
                            <Download size={18} className="text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-4">
                        <h4 className="text-white font-semibold text-xs leading-snug group-hover:text-brand-orange transition-colors mb-2">
                          {doc.title}
                        </h4>
                        <p className="text-white/40 text-xs leading-relaxed line-clamp-2">{doc.description}</p>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-white/30 text-xs">{doc.pages} pages · {doc.fileSize}</span>
                          <span className="text-brand-orange text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Download size={11} /> Download
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── FAQS ── */}
        <div className="max-w-4xl mx-auto">
          <p className="section-label mb-3">FAQs</p>
          <h2 className="section-title mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-brand-dark-3 border border-white/5 hover:border-brand-orange/20 transition-all">
                <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer list-none">
                  <span className="text-white font-medium text-sm leading-relaxed">{faq.q}</span>
                  <ChevronRight size={16} className="text-brand-orange shrink-0 mt-0.5 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 pt-0">
                  <div className="w-full h-px bg-white/10 mb-4" />
                  <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-orange py-16 px-4 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Can't find what you need?</h2>
          <p className="text-white/80 mb-8">Talk to one of our engineers directly.</p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-brand-orange font-bold text-sm py-4 px-8 hover:bg-white/90 transition-colors inline-flex items-center gap-2"
          >
            Contact an Engineer <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
