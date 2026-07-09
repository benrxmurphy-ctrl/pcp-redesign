import { ArrowRight, MapPin, ChevronRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { projects } from '../data/projects';

interface ProjectsPageProps {
  onNavigate: (page: string, id?: string) => void;
}

const solutionFilters = ['All', 'Dust Suppression', 'Odour Control', 'Dust Extraction'];

export default function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  return (
    <div className="bg-brand-dark pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-brand-dark-2">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">Case Studies</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Projects</h1>
          <p className="text-xl text-white/60 max-w-2xl">
            Real solutions. Measurable results. Click any project to read the full case study.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="px-4 py-3 bg-brand-dark-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: 'Projects' }]} onNavigate={onNavigate} />
        </div>
      </div>

      {/* Stats strip */}
      <section className="py-8 px-4 bg-brand-orange">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/20">
          {[
            { value: '1,000+', label: 'Projects Completed' },
            { value: '10+', label: 'Industries Served' },
            { value: '57+', label: 'Years Experience' },
            { value: '15+', label: 'Countries Supplied' },
          ].map(s => (
            <div key={s.label} className="bg-brand-orange p-6 text-center">
              <div className="text-3xl font-black text-white mb-1">{s.value}</div>
              <div className="text-white/70 text-xs uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <button
                key={project.id}
                onClick={() => onNavigate('project', project.id)}
                className="group bg-brand-dark-3 border border-white/5 hover:border-brand-orange/40 transition-all overflow-hidden text-left"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={`${project.image}?auto=compress&cs=tinysrgb&w=600`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-brand-orange text-white text-xs font-semibold px-2 py-1">
                      {project.solution}
                    </span>
                    <span className="bg-black/70 text-white/80 text-xs px-2 py-1">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                    <ArrowRight size={14} className="text-brand-orange" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-white/40 text-xs mb-3">
                    <MapPin size={11} />
                    <span>{project.location}</span>
                    <span className="text-white/20">·</span>
                    <span>{project.industry}</span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-3 leading-tight group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>
                  <div className="bg-brand-orange/10 border border-brand-orange/20 p-3 mt-3">
                    <p className="text-white/40 text-xs uppercase tracking-wide font-semibold mb-1">Result</p>
                    <p className="text-brand-orange text-xs font-medium leading-relaxed">{project.result}</p>
                  </div>
                  <div className="flex items-center gap-1 text-brand-orange text-xs font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read Full Case Study <ArrowRight size={12} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solution cross-links */}
      <section className="py-16 px-4 bg-brand-dark-2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-2">Explore by Solution</p>
            <h2 className="text-2xl font-bold text-white">Browse projects by solution type</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Dust Suppression', id: 'dust' },
              { label: 'Odour Control', id: 'odour' },
              { label: 'Dust Extraction', id: 'extraction' },
              { label: 'Air Filtration', id: 'air-filtration' },
              { label: 'Monitoring', id: 'monitoring' },
            ].map(s => (
              <button
                key={s.id}
                onClick={() => onNavigate('solution', s.id)}
                className="px-5 py-2.5 bg-brand-dark-3 border border-white/10 hover:border-brand-orange text-white/70 hover:text-white text-sm font-medium transition-all"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-orange py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Add your project to this list.
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Contact our engineers for a free site assessment.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-brand-orange font-bold text-sm py-4 px-8 hover:bg-white/90 transition-colors inline-flex items-center gap-2"
          >
            Request a Free Site Visit <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
