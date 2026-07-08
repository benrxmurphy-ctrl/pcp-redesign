import { ArrowRight, ChevronRight, Clock, BookOpen, Phone } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { guideById, guides } from '../data/guides';
import { productById } from '../data/products';

interface GuidePageProps {
  id: string;
  onNavigate: (page: string, id?: string) => void;
}

export default function GuidePage({ id, onNavigate }: GuidePageProps) {
  const guide = guideById(id);

  if (!guide) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-white/50 mb-4">Guide not found.</p>
          <button onClick={() => onNavigate('resources')} className="btn-primary">
            Back to Resources
          </button>
        </div>
      </div>
    );
  }

  const relatedProds = guide.relatedProducts.map(pid => productById(pid)).filter(Boolean);
  const relatedGuidesList = guide.relatedGuides.map(gid => guides.find(g => g.id === gid)).filter(Boolean);

  return (
    <div className="bg-brand-dark">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${guide.image}?auto=compress&cs=tinysrgb&w=1920)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/65 to-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 w-full">
          <div className="mb-5">
            <Breadcrumb
              crumbs={[
                { label: 'Resources', page: 'resources' },
                { label: 'Guides', page: 'resources', id: 'guides' },
                { label: guide.title },
              ]}
              onNavigate={onNavigate}
            />
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-brand-orange text-white text-xs font-semibold px-3 py-1">{guide.topic}</span>
            <span className="bg-white/10 text-white/70 text-xs px-3 py-1 flex items-center gap-1.5">
              <Clock size={11} /> {guide.readTime}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 max-w-4xl">
            {guide.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Article */}
          <article className="lg:col-span-2">
            {/* Intro */}
            <div className="border-l-4 border-brand-orange pl-6 mb-12">
              <p className="text-white/70 text-lg leading-relaxed">{guide.intro}</p>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {guide.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    <span className="text-brand-orange text-sm font-semibold tracking-widest uppercase block mb-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {section.heading}
                  </h2>
                  <p className="text-white/60 leading-relaxed mb-4">{section.body}</p>
                  {section.bullets && (
                    <ul className="space-y-3">
                      {section.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-white/60">
                          <div className="w-1.5 h-1.5 bg-brand-orange rounded-full shrink-0 mt-2" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Related Guides */}
            {relatedGuidesList.length > 0 && (
              <div className="mt-16 pt-10 border-t border-white/10">
                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                  <BookOpen size={18} className="text-brand-orange" />
                  Related Guides
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {relatedGuidesList.map(g => g && (
                    <button
                      key={g.id}
                      onClick={() => onNavigate('guide', g.id)}
                      className="group bg-brand-dark-3 border border-white/5 hover:border-brand-orange/40 transition-all text-left overflow-hidden"
                    >
                      <img
                        src={`${g.image}?auto=compress&cs=tinysrgb&w=500`}
                        alt={g.title}
                        className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="p-4">
                        <span className="text-brand-orange text-xs font-semibold">{g.topic}</span>
                        <h4 className="text-white text-sm font-bold mt-1 leading-snug group-hover:text-brand-orange transition-colors">
                          {g.title}
                        </h4>
                        <div className="flex items-center gap-1 text-brand-orange text-xs font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          Read Guide <ArrowRight size={11} />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* CTA */}
            <div className="bg-brand-orange p-6">
              <h4 className="text-white font-bold text-base mb-2">
                Got a question about this topic?
              </h4>
              <p className="text-white/80 text-sm mb-5">
                Our engineers are happy to discuss your specific situation. Free site visit available.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white text-brand-orange font-bold text-xs py-3 px-5 w-full hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                Contact an Engineer <ArrowRight size={12} />
              </button>
              <a
                href="tel:+35345863220"
                className="border border-white/40 text-white font-semibold text-xs py-2.5 px-5 w-full hover:border-white transition-colors inline-flex items-center justify-center gap-2 mt-3"
              >
                <Phone size={12} /> +353 45 863220
              </a>
            </div>

            {/* Related Products */}
            {relatedProds.length > 0 && (
              <div className="bg-brand-dark-3 border border-white/10 p-6">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Related Products</h4>
                <div className="space-y-4">
                  {relatedProds.map(prod => prod && (
                    <button
                      key={prod.id}
                      onClick={() => onNavigate('product', prod.id)}
                      className="group flex items-start gap-3 w-full text-left"
                    >
                      <img
                        src={`${prod.heroImage}?auto=compress&cs=tinysrgb&w=100`}
                        alt={prod.name}
                        className="w-12 h-12 object-cover shrink-0"
                        loading="lazy"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs font-semibold group-hover:text-brand-orange transition-colors leading-snug">
                          {prod.name}
                        </p>
                        <p className="text-white/40 text-xs mt-0.5 leading-tight truncate">{prod.tagline}</p>
                      </div>
                      <ChevronRight size={12} className="text-white/30 group-hover:text-brand-orange transition-colors shrink-0 mt-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* All Guides */}
            <div className="bg-brand-dark-3 border border-white/10 p-6">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">More Guides</h4>
              <div className="space-y-2">
                {guides.filter(g => g.id !== id).slice(0, 4).map(g => (
                  <button
                    key={g.id}
                    onClick={() => onNavigate('guide', g.id)}
                    className="group flex items-center gap-2 w-full text-left py-2 border-b border-white/5 last:border-0"
                  >
                    <div className="w-1 h-1 bg-brand-orange rounded-full shrink-0" />
                    <p className="text-white/60 text-xs group-hover:text-white transition-colors flex-1 leading-snug">
                      {g.title}
                    </p>
                  </button>
                ))}
                <button
                  onClick={() => onNavigate('resources')}
                  className="text-brand-orange text-xs font-semibold flex items-center gap-1 mt-3 hover:text-white transition-colors"
                >
                  All Guides <ArrowRight size={11} />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
