import { ArrowRight, ChevronRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { products } from '../data/products';

interface ProductsPageProps {
  onNavigate: (page: string, id?: string) => void;
}

const categoryGroups = [
  {
    id: 'dust-suppression',
    title: 'Dust Suppression',
    description: 'Mobile atomisers, fog cannons, fogging lines and road treatments for open-area dust control.',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
    solutionId: 'dust',
  },
  {
    id: 'dust-extraction',
    title: 'Dust Extraction',
    description: 'Industrial vacuums and foam-based systems for capturing dust at the point of generation.',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
    solutionId: 'extraction',
  },
  {
    id: 'odour',
    title: 'Odour Control',
    description: 'Source treatment, boundary suppression and advanced filtration for industrial odour.',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg',
    solutionId: 'odour',
  },
  {
    id: 'air-filtration',
    title: 'Air Filtration',
    description: 'Baghouse management, personnel de-dusting and stack monitoring for clean air compliance.',
    image: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg',
    solutionId: 'air-filtration',
  },
  {
    id: 'monitoring',
    title: 'Monitoring Systems',
    description: 'Real-time dust, odour and air quality monitoring to demonstrate compliance and guide decisions.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    solutionId: 'monitoring',
  },
];

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  return (
    <div className="bg-brand-dark pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-brand-dark-2">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">Products</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Equipment &amp; Systems</h1>
          <p className="text-xl text-white/60 max-w-2xl">
            The technology behind the solution. Click any product to see full specifications, how it works and where it is used.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="px-4 py-3 bg-brand-dark-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: 'Products' }]} onNavigate={onNavigate} />
        </div>
      </div>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {categoryGroups.map(cat => {
            const catProducts = products.filter(p => p.categoryId === cat.id);
            return (
              <div key={cat.id}>
                {/* Category header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                  <div>
                    <div className="w-8 h-0.5 bg-brand-orange mb-3" />
                    <h2 className="text-3xl font-bold text-white">{cat.title}</h2>
                    <p className="text-white/50 mt-2 text-sm max-w-lg">{cat.description}</p>
                  </div>
                  <button
                    onClick={() => onNavigate('solution', cat.solutionId)}
                    className="shrink-0 text-sm text-brand-orange hover:text-white transition-colors flex items-center gap-1.5 font-medium whitespace-nowrap"
                  >
                    View {cat.title} Solution <ArrowRight size={14} />
                  </button>
                </div>

                {/* Product grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {catProducts.map(prod => (
                    <button
                      key={prod.id}
                      onClick={() => onNavigate('product', prod.id)}
                      className="group bg-brand-dark-3 border border-white/5 hover:border-brand-orange/50 transition-all text-left overflow-hidden"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={`${prod.heroImage}?auto=compress&cs=tinysrgb&w=500`}
                          alt={prod.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute top-3 right-3 w-7 h-7 bg-white opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                          <ArrowRight size={13} className="text-brand-orange" />
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="w-4 h-0.5 bg-brand-orange mb-2" />
                        <h3 className="text-white font-bold text-sm leading-tight group-hover:text-brand-orange transition-colors">
                          {prod.name}
                        </h3>
                        <p className="text-white/40 text-xs mt-1.5 leading-relaxed line-clamp-2">{prod.tagline}</p>
                        <div className="flex items-center gap-1 text-brand-orange text-xs font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          View Details <ArrowRight size={11} />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Category divider */}
                <div className="mt-12 h-px bg-white/5" />
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-orange py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Not sure which product is right for your site?
          </h2>
          <p className="text-white/80 mb-8">Our engineers will specify the correct solution for your specific application.</p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-brand-orange font-bold text-sm py-4 px-8 hover:bg-white/90 transition-colors inline-flex items-center gap-2"
          >
            Speak to an Engineer <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
