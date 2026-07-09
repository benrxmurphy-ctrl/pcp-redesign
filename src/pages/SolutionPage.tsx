import { useState } from 'react';
import { ArrowRight, CheckCircle, ChevronDown, Phone } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { solutionById } from '../data/solutions';
import { industries } from '../data/industries';
import { productsBySolution } from '../data/products';
import { projects } from '../data/projects';

interface SolutionPageProps {
  id: string;
  onNavigate: (page: string, id?: string) => void;
}

export default function SolutionPage({ id, onNavigate }: SolutionPageProps) {
  const solution = solutionById(id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/50 mb-4">Solution not found.</p>
          <button onClick={() => onNavigate('home')} className="btn-primary">Back to Home</button>
        </div>
      </div>
    );
  }

  const relatedIndustries = industries.filter(i => solution.industries.includes(i.name));

  return (
    <div className="bg-brand-dark">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${solution.heroImage}?auto=compress&cs=tinysrgb&w=1920)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 w-full">
          <p className="section-label mb-3">Solution</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none mb-4">
            {solution.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl">
            {solution.heroStatement}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="px-4 py-3 bg-brand-dark-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            crumbs={[{ label: 'Solutions' }, { label: solution.title }]}
            onNavigate={onNavigate}
          />
        </div>
      </div>

      {/* Overview */}
      <section className="py-20 px-4 bg-brand-orange">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-3">Overview</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Target Nuisance {solution.title.includes('Dust') ? 'Dust' : solution.title.includes('Odour') ? 'Odours' : 'Emissions'} At Source
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">{solution.overview}</p>
            </div>
            <div className="bg-white/10 border border-white/20 p-8">
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Related Products &amp; Services</h3>
              <ul className="space-y-2">
                {solution.equipment.slice(0, 5).map(e => (
                  <li key={e.name}>
                    {e.productId ? (
                      <button
                        onClick={() => onNavigate('product', e.productId)}
                        className="flex items-center gap-3 text-white/80 text-sm hover:text-white transition-colors group w-full text-left"
                      >
                        <div className="w-1.5 h-1.5 bg-white rounded-full shrink-0" />
                        <span className="group-hover:underline underline-offset-2">{e.name}</span>
                      </button>
                    ) : (
                      <span className="flex items-center gap-3 text-white/80 text-sm">
                        <div className="w-1.5 h-1.5 bg-white rounded-full shrink-0" />
                        {e.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
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
                Challenges You May Be Facing
              </h2>
              <div className="space-y-4">
                {solution.challenges.map(c => (
                  <div key={c} className="flex items-start gap-4 p-4 bg-brand-dark-3 border-l-2 border-brand-orange">
                    <CheckCircle size={16} className="text-brand-orange shrink-0 mt-0.5" />
                    <p className="text-white/70 text-sm">{c}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="section-label mb-3">PCP Approach</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                How We Can Help
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                PCP shapes approaches around the emissions profile, site conditions and what the operator can realistically achieve. This can start by calibrating conditions, then layer solutions and an intake strategy. The aim is always more responsible odour routes added incrementally, scaled to budget and timeline.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {solution.approaches.map(a => (
                  <div key={a.title} className="bg-brand-dark-3 border border-white/5 p-5">
                    <div className="w-1 h-5 bg-brand-orange mb-3" />
                    <h4 className="text-white font-semibold text-sm mb-2">{a.title}</h4>
                    <p className="text-white/50 text-xs leading-relaxed">{a.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Equipment</p>
            <h2 className="section-title mb-4">
              Types of {solution.title} We Provide
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Click any product to see full specifications, how it works and where it is used.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsBySolution(solution.id).map((prod, i) => (
              <button
                key={prod.id}
                onClick={() => onNavigate('product', prod.id)}
                className="group bg-brand-dark-3 border border-white/5 hover:border-brand-orange/50 transition-all overflow-hidden text-left"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`${prod.heroImage}?auto=compress&cs=tinysrgb&w=600`}
                    alt={prod.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3 bg-brand-orange text-white text-xs font-semibold px-2 py-1">
                    PART {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-7 h-7 bg-white flex items-center justify-center">
                      <ArrowRight size={13} className="text-brand-orange" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="w-6 h-0.5 bg-brand-orange mb-3" />
                  <h3 className="text-white font-bold text-sm mb-2 group-hover:text-brand-orange transition-colors">{prod.name}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{prod.tagline}</p>
                  <div className="flex items-center gap-1 text-brand-orange text-xs font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Full Details <ArrowRight size={12} />
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
          <h2 className="section-title mb-12">How We Deliver Results</h2>
          <div className="relative">
            <div className="absolute top-6 left-[10%] right-[10%] h-px bg-brand-orange/30 hidden md:block" />
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {[
                { step: '01', label: 'Problem Identified' },
                { step: '02', label: 'Site Assessment' },
                { step: '03', label: 'Solution Designed' },
                { step: '04', label: 'Equipment Installed' },
                { step: '05', label: 'Maintained' },
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

      {/* Industries */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Applications</p>
            <h2 className="section-title mb-4">Industries Where This Solution Works</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {solution.industries.map(name => {
              const ind = industries.find(i => i.name === name);
              return (
                <button
                  key={name}
                  onClick={() => ind && onNavigate('industry', ind.id)}
                  className="px-5 py-2.5 bg-brand-dark-3 border border-white/10 hover:border-brand-orange text-white/70 hover:text-white text-sm font-medium transition-all"
                >
                  {name}
                </button>
              );
            })}
          </div>
          {relatedIndustries.length > 0 && (
            <div className="grid md:grid-cols-3 gap-4">
              {relatedIndustries.slice(0, 3).map(ind => (
                <button
                  key={ind.id}
                  onClick={() => onNavigate('industry', ind.id)}
                  className="group relative overflow-hidden h-40"
                >
                  <img
                    src={`${ind.heroImage}?auto=compress&cs=tinysrgb&w=600`}
                    alt={ind.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 group-hover:from-brand-orange/80 transition-all" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-bold text-sm">{ind.name}</h3>
                    <p className="text-white/70 text-xs mt-1 hidden group-hover:block">{ind.tagline}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Related Projects */}
      {(() => {
        const solutionProjects = projects.filter(p => p.solutionId === solution.id).slice(0, 3);
        if (solutionProjects.length === 0) return null;
        return (
          <section className="py-20 px-4 bg-brand-dark-2">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <p className="section-label mb-3">Case Studies</p>
                <h2 className="section-title mb-4">Projects Using This Solution</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {solutionProjects.map(proj => (
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
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-brand-orange text-white text-xs font-semibold px-2 py-1">{proj.industry}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-white font-bold text-sm mb-2 leading-snug group-hover:text-brand-orange transition-colors">{proj.title}</h3>
                      <p className="text-brand-orange text-xs leading-relaxed">{proj.result}</p>
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

      {/* FAQ */}
      {solution.faqs && solution.faqs.length > 0 && (
        <section className="py-20 px-4 bg-brand-dark">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label mb-3">FAQ</p>
              <h2 className="section-title mb-4">Frequently Asked Questions</h2>
              <p className="text-white/50 max-w-lg mx-auto">
                Common questions from site managers and engineers about {solution.title.toLowerCase()}.
              </p>
            </div>
            <div className="space-y-px">
              {solution.faqs.map((faq, i) => (
                <div key={i} className="bg-brand-dark-2 border border-white/5 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                  >
                    <span className={`text-sm font-semibold leading-snug transition-colors ${openFaq === i ? 'text-brand-orange' : 'text-white group-hover:text-brand-orange'}`}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-brand-orange shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="px-6 pb-5 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-brand-dark-3">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Contact an Engineer</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Speak to a {solution.title} specialist.
              </h2>
              <p className="text-white/60 mb-6">
                Our engineers will assess your specific site conditions and recommend the most effective solution. Free site visit, no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-primary"
                >
                  Request Site Visit <ArrowRight size={14} />
                </button>
                <a href="tel:+35345863220" className="btn-outline inline-flex items-center gap-2">
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </div>
            <div className="bg-brand-dark-4 border border-white/10 p-8">
              <h4 className="text-white font-semibold mb-5">What Happens Next</h4>
              <div className="space-y-4">
                {[
                  'We contact you within 1 business day',
                  'We arrange a free site visit at your convenience',
                  'We assess your specific dust or odour challenge',
                  'We recommend the most appropriate solution',
                  'We provide a clear, honest proposal',
                ].map((step, i) => (
                  <div key={step} className="flex items-center gap-3 text-sm">
                    <div className="w-6 h-6 bg-brand-orange text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-white/70">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
