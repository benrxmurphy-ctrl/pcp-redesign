import { ArrowRight, CheckCircle, ChevronRight, Phone } from 'lucide-react';
import { industryById } from '../data/industries';
import { solutions } from '../data/solutions';
import { projects } from '../data/projects';

interface IndustryPageProps {
  id: string;
  onNavigate: (page: string, id?: string) => void;
}

export default function IndustryPage({ id, onNavigate }: IndustryPageProps) {
  const industry = industryById(id);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/50 mb-4">Industry not found.</p>
          <button onClick={() => onNavigate('home')} className="btn-primary">Back to Home</button>
        </div>
      </div>
    );
  }

  const relatedSolutions = solutions.filter(s => industry.solutions.includes(s.id));

  return (
    <div className="bg-brand-dark">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${industry.heroImage}?auto=compress&cs=tinysrgb&w=1920)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 w-full">
          <div className="flex items-center gap-2 text-white/40 text-xs mb-5">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button>
            <ChevronRight size={12} />
            <span>Industries</span>
            <ChevronRight size={12} />
            <span className="text-white/80">{industry.name}</span>
          </div>
          <p className="section-label mb-3">Industry</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-4">
            {industry.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl">
            {industry.tagline}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4 bg-brand-orange">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-3">Overview</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Environmental Challenges in {industry.name}
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">{industry.overview}</p>
            </div>
            <div className="bg-white/10 border border-white/20 p-8">
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Key Metrics</h3>
              <div className="grid grid-cols-3 gap-4">
                {industry.stats.map(stat => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-white/60 text-xs leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 px-4 bg-brand-dark-2">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="section-label mb-3">Site Challenges</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Common Challenges in {industry.name}
              </h2>
              <div className="space-y-4">
                {industry.challenges.map(c => (
                  <div key={c} className="flex items-start gap-4 p-4 bg-brand-dark-3 border-l-2 border-brand-orange">
                    <CheckCircle size={16} className="text-brand-orange shrink-0 mt-0.5" />
                    <p className="text-white/70 text-sm">{c}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="section-label mb-3">Recommended Solutions</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                How We Can Help
              </h2>
              <div className="space-y-4">
                {relatedSolutions.map(sol => (
                  <button
                    key={sol.id}
                    onClick={() => onNavigate('solution', sol.id)}
                    className="group w-full flex items-center gap-5 p-5 bg-brand-dark-3 border border-white/5 hover:border-brand-orange/50 transition-all text-left"
                  >
                    <div className="flex-1">
                      <div className="w-4 h-0.5 bg-brand-orange mb-2" />
                      <h4 className="text-white font-semibold text-sm">{sol.title}</h4>
                      <p className="text-white/50 text-xs mt-1 leading-relaxed">{sol.tagline}</p>
                    </div>
                    <ArrowRight size={16} className="text-white/30 group-hover:text-brand-orange transition-colors shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution deep-dive */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Recommended Solutions</p>
            <h2 className="section-title mb-4">Solutions For {industry.name}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedSolutions.map(sol => (
              <button
                key={sol.id}
                onClick={() => onNavigate('solution', sol.id)}
                className="group relative overflow-hidden text-left"
              >
                <img
                  src={`${sol.heroImage}?auto=compress&cs=tinysrgb&w=600`}
                  alt={sol.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-brand-orange/80 transition-all" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-1">{sol.title}</h3>
                  <p className="text-white/70 text-sm">{sol.tagline}</p>
                  <div className="flex items-center gap-2 text-white text-xs font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Solution <ArrowRight size={12} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-20 px-4 bg-brand-dark-2">
        <div className="max-w-5xl mx-auto text-center">
          <p className="section-label mb-3">Process</p>
          <h2 className="section-title mb-12">Your Journey With PCP Group</h2>
          <div className="relative">
            <div className="absolute top-6 left-[8%] right-[8%] h-px bg-brand-orange/30 hidden md:block" />
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {[
                { step: '01', label: 'Contact Us' },
                { step: '02', label: 'Site Assessment' },
                { step: '03', label: 'Technology Recommended' },
                { step: '04', label: 'Installation' },
                { step: '05', label: 'Maintenance' },
                { step: '06', label: 'Ongoing Support' },
              ].map(s => (
                <div key={s.step} className="flex flex-col items-center gap-3">
                  <div className="relative w-12 h-12 bg-brand-orange flex items-center justify-center z-10">
                    <span className="text-white font-black text-sm">{s.step}</span>
                  </div>
                  <p className="text-white/60 text-xs text-center leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {(() => {
        const industryProjects = projects.filter(p => p.industryId === industry.id).slice(0, 3);
        if (industryProjects.length === 0) return null;
        return (
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-end justify-between gap-4 mb-10">
                <div>
                  <p className="section-label mb-2">Case Studies</p>
                  <h2 className="section-title">{industry.name} Projects</h2>
                </div>
                <button
                  onClick={() => onNavigate('projects')}
                  className="text-brand-orange text-sm font-semibold flex items-center gap-1 hover:text-white transition-colors whitespace-nowrap"
                >
                  All Projects <ArrowRight size={14} />
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {industryProjects.map(proj => (
                  <button
                    key={proj.id}
                    onClick={() => onNavigate('project', proj.id)}
                    className="group bg-brand-dark-3 border border-white/5 hover:border-brand-orange/40 transition-all text-left overflow-hidden"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={`${proj.image}?auto=compress&cs=tinysrgb&w=600`}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="bg-brand-orange text-white text-xs font-semibold px-2 py-1">{proj.solution}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-white font-bold text-sm mb-2 leading-snug group-hover:text-brand-orange transition-colors">{proj.title}</h3>
                      <p className="text-brand-orange text-xs font-medium">{proj.result}</p>
                      <div className="flex items-center gap-1 text-brand-orange text-xs font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        Read Case Study <ArrowRight size={12} />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Contact CTA */}
      <section className="bg-brand-orange py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Speak to a {industry.name} specialist.
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Free site assessment. No obligation. Our engineers understand {industry.name.toLowerCase()} operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-brand-orange font-bold text-sm py-4 px-8 hover:bg-white/90 transition-colors inline-flex items-center gap-2"
            >
              Request a Free Site Visit <ArrowRight size={16} />
            </button>
            <a
              href="tel:+35345863220"
              className="border-2 border-white/50 text-white font-bold text-sm py-4 px-8 hover:border-white transition-colors inline-flex items-center gap-2"
            >
              <Phone size={16} /> +353 45 863220
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
