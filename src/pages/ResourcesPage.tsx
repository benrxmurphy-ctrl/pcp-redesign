import { ChevronRight, FileText, HelpCircle, BookOpen, Download, ArrowRight, Clock } from 'lucide-react';
import { guides } from '../data/guides';
import { projects } from '../data/projects';

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
    a: 'Yes. We cover both the Republic of Ireland and Northern Ireland. NI contact: +44 (0)73 40678343.',
  },
];

export default function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  return (
    <div className="bg-brand-dark pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-brand-dark-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-white/40 text-xs mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button>
            <ChevronRight size={12} />
            <span className="text-white/80">Resources</span>
          </div>
          <p className="section-label mb-3">Resources</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Knowledge Base</h1>
          <p className="text-xl text-white/60 max-w-2xl">
            Practical guidance on dust, odour and air quality management for EHS managers, site operators and engineers.
          </p>
        </div>
      </section>

      {/* Resource type cards */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {[
            { icon: HelpCircle, title: 'FAQs', desc: 'Common questions about dust and odour control solutions.', count: `${faqs.length} questions` },
            { icon: BookOpen, title: 'Guides', desc: 'Technical guides on suppression, extraction and monitoring.', count: `${guides.length} guides` },
            { icon: FileText, title: 'Case Studies', desc: 'Real projects, real results from Irish industry.', count: `${projects.length} case studies` },
            { icon: Download, title: 'Downloads', desc: 'Product datasheets, brochures and technical documents.', count: 'Available on request' },
          ].map(r => (
            <div key={r.title} className="bg-brand-dark-3 border border-white/5 p-8">
              <r.icon size={28} className="text-brand-orange mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-white/50 text-sm mb-3">{r.desc}</p>
              <p className="text-brand-orange text-xs font-semibold">{r.count}</p>
            </div>
          ))}
        </div>

        {/* Guides */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <p className="section-label mb-2">Guides</p>
              <h2 className="section-title">Technical Guides</h2>
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
                  <div className="absolute top-3 left-3 flex gap-2">
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

        {/* Case Studies */}
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
            {projects.slice(0, 3).map(project => (
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
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-orange text-white text-xs font-semibold px-2 py-1">{project.industry}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-sm leading-snug mb-2 group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-brand-orange text-xs font-medium">{project.result}</p>
                  <div className="flex items-center gap-1 text-brand-orange text-xs font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read Case Study <ArrowRight size={12} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* FAQs */}
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

      {/* Downloads */}
      <section className="py-12 px-4 bg-brand-dark-2">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-dark-3 border border-white/10 p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <Download size={36} className="text-brand-orange shrink-0" />
            <div className="flex-1">
              <h3 className="text-white font-bold text-xl mb-2">Downloads &amp; Datasheets</h3>
              <p className="text-white/50 text-sm">
                Product datasheets, technical brochures and specification documents are available on request. Contact our team and we will send you the documentation you need.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary shrink-0"
            >
              Request Downloads <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-orange py-16 px-4">
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
