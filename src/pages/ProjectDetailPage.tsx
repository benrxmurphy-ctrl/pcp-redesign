import { ArrowRight, ChevronRight, MapPin, Calendar, CheckCircle, Quote, Phone } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { projectById } from '../data/projects';
import { productById } from '../data/products';
import { solutionById } from '../data/solutions';
import { industryById } from '../data/industries';

interface ProjectDetailPageProps {
  id: string;
  onNavigate: (page: string, id?: string) => void;
}

export default function ProjectDetailPage({ id, onNavigate }: ProjectDetailPageProps) {
  const project = projectById(id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-white/50 mb-4">Project not found.</p>
          <button onClick={() => onNavigate('projects')} className="btn-primary">
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const usedProducts = project.productsUsed.map(pid => productById(pid)).filter(Boolean);
  const solution = solutionById(project.solutionId);
  const industry = industryById(project.industryId);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image}?auto=compress&cs=tinysrgb&w=1920)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/65 to-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 w-full">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-brand-orange text-white text-xs font-semibold px-3 py-1">{project.solution}</span>
            <span className="bg-white/10 text-white/80 text-xs px-3 py-1">{project.industry}</span>
            <span className="bg-white/10 text-white/80 text-xs px-3 py-1">{project.year}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-4xl">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-brand-orange" />
              {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} className="text-brand-orange" />
              {project.year}
            </span>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="px-4 py-3 bg-black/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            crumbs={[
              { label: 'Projects', page: 'projects' },
              { label: project.title },
            ]}
            onNavigate={onNavigate}
          />
        </div>
      </div>

      {/* Result Banner */}
      <section className="bg-brand-orange py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="shrink-0">
              <p className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-1">Result</p>
              <div className="w-8 h-0.5 bg-white/40" />
            </div>
            <p className="text-white font-bold text-xl md:text-2xl leading-snug">{project.result}</p>
          </div>
        </div>
      </section>

      {/* Challenge + Approach */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <p className="section-label mb-3">The Challenge</p>
            <h2 className="text-3xl font-bold text-white mb-6">What was the problem?</h2>
            <p className="text-white/60 text-lg leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <p className="section-label mb-3">The Approach</p>
            <h2 className="text-3xl font-bold text-white mb-6">How did we solve it?</h2>
            <p className="text-white/60 text-lg leading-relaxed">{project.approach}</p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-4 bg-black/80">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">Outcomes</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Measured Results</h2>
            <div className="space-y-4">
              {project.outcomes.map(outcome => (
                <div key={outcome} className="flex items-start gap-4 p-4 bg-brand-dark-3 border-l-2 border-brand-orange">
                  <CheckCircle size={16} className="text-brand-orange shrink-0 mt-0.5" />
                  <p className="text-white/70 text-sm leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {project.images.slice(1).map((img, i) => (
              <img
                key={i}
                src={`${img}?auto=compress&cs=tinysrgb&w=500`}
                alt={`${project.title} ${i + 1}`}
                className={`w-full object-cover ${i === 0 ? 'h-48' : 'h-48'}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      {project.quote && (
        <section className="py-16 px-4 bg-black/75">
          <div className="max-w-4xl mx-auto text-center">
            <Quote size={36} className="text-brand-orange mx-auto mb-6 opacity-60" />
            <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6 italic">
              "{project.quote.text}"
            </blockquote>
            <div className="text-white/50 text-sm">
              <span className="font-semibold text-white/70">{project.quote.author}</span>
              {' — '}{project.quote.role}
            </div>
          </div>
        </section>
      )}

      {/* Products Used */}
      {usedProducts.length > 0 && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label mb-3">Equipment</p>
              <h2 className="section-title mb-4">Products Used on This Project</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {usedProducts.map(prod => prod && (
                <button
                  key={prod.id}
                  onClick={() => onNavigate('product', prod.id)}
                  className="group bg-brand-dark-3 border border-white/5 hover:border-brand-orange/40 transition-all text-left overflow-hidden"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={`${prod.heroImage}?auto=compress&cs=tinysrgb&w=500`}
                      alt={prod.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute top-3 left-3 bg-brand-orange text-white text-xs font-semibold px-2 py-1">
                      {prod.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="w-5 h-0.5 bg-brand-orange mb-3" />
                    <h3 className="text-white font-bold text-sm mb-1 group-hover:text-brand-orange transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-white/50 text-xs leading-relaxed">{prod.tagline}</p>
                    <div className="flex items-center gap-1 text-brand-orange text-xs font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Product <ArrowRight size={12} />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Solution + Industry */}
      <section className="py-20 px-4 bg-black/80">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {solution && (
            <button
              onClick={() => onNavigate('solution', solution.id)}
              className="group relative overflow-hidden h-56 text-left"
            >
              <img
                src={`${solution.heroImage}?auto=compress&cs=tinysrgb&w=800`}
                alt={solution.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-brand-orange/80 transition-all" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Solution Used</p>
                <h3 className="text-white font-bold text-xl">{solution.title}</h3>
                <div className="flex items-center gap-2 text-white text-xs font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore Solution <ArrowRight size={12} />
                </div>
              </div>
            </button>
          )}
          {industry && (
            <button
              onClick={() => onNavigate('industry', industry.id)}
              className="group relative overflow-hidden h-56 text-left"
            >
              <img
                src={`${industry.heroImage}?auto=compress&cs=tinysrgb&w=800`}
                alt={industry.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-brand-orange/80 transition-all" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Industry</p>
                <h3 className="text-white font-bold text-xl">{industry.name}</h3>
                <div className="flex items-center gap-2 text-white text-xs font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore Industry <ArrowRight size={12} />
                </div>
              </div>
            </button>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-orange py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Want results like this on your site?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Free site assessment. Our engineers will assess your specific challenge and recommend the right approach.
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
