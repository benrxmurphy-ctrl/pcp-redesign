import { ArrowRight, ChevronRight, Phone, CheckCircle, Package } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { productById, productsBySolution } from '../data/products';
import { solutionById } from '../data/solutions';
import { industries } from '../data/industries';

interface ProductDetailPageProps {
  id: string;
  onNavigate: (page: string, id?: string) => void;
}

export default function ProductDetailPage({ id, onNavigate }: ProductDetailPageProps) {
  const product = productById(id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-white/50 mb-4">Product not found.</p>
          <button onClick={() => onNavigate('products')} className="btn-primary">
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const solution = solutionById(product.solutionId);
  const relatedProds = productsBySolution(product.solutionId)
    .filter(p => p.id !== product.id)
    .slice(0, 3);
  const relatedIndustries = industries.filter(i => product.industries.includes(i.name));

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${product.heroImage}?auto=compress&cs=tinysrgb&w=1920)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/65 to-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 w-full">
          <div className="inline-flex items-center gap-2 bg-brand-orange px-3 py-1 mb-4">
            <Package size={12} className="text-white" />
            <span className="text-white text-xs font-semibold uppercase tracking-widest">{product.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none mb-4 max-w-3xl">
            {product.name}
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mb-8">{product.tagline}</p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => onNavigate('contact')} className="btn-primary">
              Get a Quote <ArrowRight size={14} />
            </button>
            {solution && (
              <button
                onClick={() => onNavigate('solution', solution.id)}
                className="btn-outline"
              >
                View {solution.title} Solution
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="px-4 py-3 bg-black/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            crumbs={[
              { label: 'Products', page: 'products' },
              { label: product.category, page: 'products', id: product.categoryId },
              { label: product.name },
            ]}
            onNavigate={onNavigate}
          />
        </div>
      </div>

      {/* Overview + Specs */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="section-label mb-3">Overview</p>
            <h2 className="text-3xl font-bold text-white mb-6">What is the {product.name}?</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">{product.overview}</p>

            <p className="section-label mb-3">How It Works</p>
            <h3 className="text-2xl font-bold text-white mb-4">The Technology</h3>
            <p className="text-white/60 leading-relaxed">{product.howItWorks}</p>
          </div>

          {/* Spec Table */}
          <div>
            <div className="bg-brand-dark-3 border border-white/10 sticky top-24">
              <div className="bg-brand-orange p-5">
                <h3 className="text-white font-bold text-sm uppercase tracking-widest">Specifications</h3>
              </div>
              <div className="p-6">
                <dl className="space-y-0">
                  {product.specifications.map((spec, i) => (
                    <div
                      key={spec.label}
                      className={`flex justify-between gap-4 py-3 text-sm ${
                        i < product.specifications.length - 1 ? 'border-b border-white/5' : ''
                      }`}
                    >
                      <dt className="text-white/40 shrink-0">{spec.label}</dt>
                      <dd className="text-white font-medium text-right">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 space-y-3">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="btn-primary w-full justify-center text-xs"
                  >
                    Request a Quote
                  </button>
                  <a
                    href="tel:+35345863220"
                    className="btn-outline w-full justify-center text-xs inline-flex items-center gap-2"
                  >
                    <Phone size={12} /> Call an Engineer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 bg-black/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Benefits</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Why specify the {product.name}?
              </h2>
              <div className="space-y-4">
                {product.keyBenefits.map(benefit => (
                  <div key={benefit} className="flex items-start gap-4 p-4 bg-brand-dark-3 border-l-2 border-brand-orange">
                    <CheckCircle size={16} className="text-brand-orange shrink-0 mt-0.5" />
                    <p className="text-white/70 text-sm leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={`${product.heroImage}?auto=compress&cs=tinysrgb&w=800`}
                alt={product.name}
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Applications</p>
            <h2 className="section-title mb-4">Where This Product Is Used</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.applications.map((app, i) => (
              <div key={app} className="flex items-start gap-4 bg-brand-dark-3 border border-white/5 p-5">
                <div className="w-8 h-8 bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center shrink-0">
                  <span className="text-brand-orange text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      {relatedIndustries.length > 0 && (
        <section className="py-20 px-4 bg-black/80">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label mb-3">Industries</p>
              <h2 className="section-title mb-4">Sectors Using This Product</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedIndustries.map(ind => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-black/20 group-hover:from-brand-orange/80 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <h3 className="text-white font-bold text-sm">{ind.name}</h3>
                      <p className="text-white/60 text-xs mt-0.5 leading-tight hidden group-hover:block">{ind.tagline}</p>
                    </div>
                    <ArrowRight size={14} className="text-white opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProds.length > 0 && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label mb-3">Related Products</p>
              <h2 className="section-title mb-4">Often Used Alongside</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProds.map(prod => (
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

      {/* CTA */}
      <section className="bg-brand-orange py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Want to know if the {product.name} is right for your site?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Our engineers will assess your specific challenge and confirm whether this is the best solution. Free site visit, no obligation.
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
