import { ArrowRight, Phone, Clock, TrendingUp, ShieldCheck, Zap, CheckCircle, Wrench, PackageCheck, Headphones } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

interface RentalPageProps {
  onNavigate: (page: string, id?: string) => void;
}

interface RentalItem {
  id: string;
  name: string;
  tagline: string;
  image: string;
  badge: string;
  specs: string[];
}

interface RentalCategory {
  heading: string;
  description: string;
  items: RentalItem[];
}

const rentalFleet: RentalCategory[] = [
  {
    heading: 'Dust & Odour Suppression',
    description: 'Mobile suppression units deployable in under 24 hours. Ideal for seasonal peaks, complaint response or site trials.',
    items: [
      {
        id: 'miniat',
        name: 'MINIAT Mobile Atomiser',
        tagline: 'Towable rotary atomiser for dust and odour suppression up to 40m radius.',
        image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
        badge: 'Hire Available',
        specs: ['Up to 40m radius', 'Electric or diesel', 'Towable — 30 min setup', 'Dust + Odour'],
      },
      {
        id: 'fog-cannon',
        name: 'Hennlich Fog Cannon',
        tagline: 'Long-throw cannon for large open areas — 30 to 70 metre coverage.',
        image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
        badge: 'Hire Available',
        specs: ['30–70m throw range', '0–359° oscillation', 'Fixed or trailer-mounted', 'Stockpiles & yards'],
      },
    ],
  },
  {
    heading: 'Acrulog Environmental Monitors',
    description: 'Portable, wireless gas data-loggers for odour compliance, odour investigation and environmental reporting.',
    items: [
      {
        id: 'acrulog-h2s-ppm',
        name: 'Acrulog H2S Monitor (PPM)',
        tagline: 'Portable H2S gas data-logger for wastewater, landfill and industrial sites.',
        image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
        badge: 'Hire Available',
        specs: ['0–200 PPM range', 'Continuous logging', 'Memory backup', 'Harsh environment rated'],
      },
      {
        id: 'acrulog-h2s-ppb',
        name: 'Acrulog H2S Monitor (PPB)',
        tagline: 'Low-level H2S environmental monitor — detects down to 3 PPB.',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
        badge: 'Hire Available',
        specs: ['0–2000 PPB range', '10 min–18 hr intervals', 'Indoor & outdoor', 'EPA audit suitable'],
      },
      {
        id: 'acrulog-nh3',
        name: 'Acrulog NH3 Monitor',
        tagline: 'Portable ammonia data-logger for food, agri and wastewater applications.',
        image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
        badge: 'Hire Available',
        specs: ['Ammonia (NH3)', 'Portable & wireless', 'Harsh environment', 'Compliance logging'],
      },
      {
        id: 'acrulog-cem',
        name: 'Acrulog CEM',
        tagline: 'Continuous emissions monitoring system — multi-point, modular configuration.',
        image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
        badge: 'Hire Available',
        specs: ['1, 2 or 3-point system', 'Multi-gas capable', 'Temperature controlled', 'Before/after filtration'],
      },
    ],
  },
  {
    heading: 'Industrial Vacuum Systems',
    description: 'Heavy-duty, high-performance industrial vacuums for plant clean-up, spillage control and dust collection.',
    items: [
      {
        id: 'ibs25',
        name: 'IBS25 Portable Vacuum Loader',
        tagline: 'Skip-mounted vacuum loader — 3 tonnes per hour, 40m reach, forklift portable.',
        image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg',
        badge: 'Short & Long Term',
        specs: ['3 t/hr loading rate', '40m+ reach', 'Wet and dry materials', 'Forklift portable'],
      },
      {
        id: 'cubo',
        name: 'CUBO Industrial Vacuum',
        tagline: 'Side-channel blower vacuum with integrated hopper — forklift transportable.',
        image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
        badge: 'Short & Long Term',
        specs: ['Integrated hopper', 'Dusty & grainy products', 'Forklift transportable', 'Big bag capable'],
      },
      {
        id: 'puma-atex',
        name: 'PUMA 30 ATEX Vacuum',
        tagline: 'ATEX-rated heavy-duty vacuum for explosive atmospheres and hazardous dust.',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
        badge: 'ATEX Rated',
        specs: ['ATEX Zone rated', 'HEPA filtration', 'Auto dump system', 'Foundry & ceramic grade'],
      },
    ],
  },
];

const whyHire = [
  {
    icon: Zap,
    title: 'Deployed in 24–48 Hours',
    body: 'Mobile and hire units are ready to go with minimal setup. Urgent response to complaints, shutdowns or seasonal peaks.',
  },
  {
    icon: TrendingUp,
    title: 'Try Before You Buy',
    body: 'Test equipment on your site before committing to a purchase. Confirm performance in your specific conditions.',
  },
  {
    icon: ShieldCheck,
    title: 'No Capital Outlay',
    body: 'Treat hire costs as OPEX. Ideal for project-based, temporary or short-term requirements without balance sheet pressure.',
  },
  {
    icon: Clock,
    title: 'Flexible Terms',
    body: 'Short and long-term hire available. Scale up or down as your operation changes without being tied to owned assets.',
  },
];

const included = [
  { icon: PackageCheck, title: 'Delivery & Collection', body: 'We deliver to your site and collect on completion — no logistics burden on your team.' },
  { icon: Wrench, title: 'Commissioning', body: 'Units are set up and tested on site by our engineers before handover.' },
  { icon: ShieldCheck, title: 'Operator Training', body: 'Your team is trained on safe operation and basic maintenance before we leave.' },
  { icon: Headphones, title: 'Ongoing Support', body: 'PCP engineers remain on call for the duration of the hire period.' },
];

export default function RentalPage({ onNavigate }: RentalPageProps) {
  return (
    <div className="bg-brand-dark">

      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 w-full">
          <div className="mb-5">
            <Breadcrumb crumbs={[{ label: 'Rental' }]} onNavigate={onNavigate} />
          </div>
          <p className="section-label mb-3">Equipment Hire</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-5 max-w-3xl">
            The right equipment.<br />Right when you need it.
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mb-8">
            Fast, flexible hire of dust suppression, gas monitoring and industrial vacuum equipment — fully supported by PCP engineers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => onNavigate('contact')} className="btn-primary">
              Request Hire Enquiry <ArrowRight size={14} />
            </button>
            <a href="tel:+35345863220" className="btn-outline inline-flex items-center gap-2">
              <Phone size={14} /> +353 45 863220
            </a>
          </div>
        </div>
      </section>

      {/* Why Hire */}
      <section className="py-20 px-4 bg-brand-orange">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-3">Why Hire?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-xl">
              Powerful equipment without the long-term commitment.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyHire.map(item => (
              <div key={item.title} className="bg-white/10 border border-white/20 p-6">
                <item.icon size={24} className="text-white mb-4" />
                <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-white/75 text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Fleet */}
      {rentalFleet.map((cat, ci) => (
        <section key={ci} className={`py-20 px-4 ${ci % 2 === 1 ? 'bg-brand-dark-2' : 'bg-brand-dark'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <p className="section-label mb-3">Available for Hire</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{cat.heading}</h2>
              <p className="text-white/50 max-w-xl text-sm leading-relaxed">{cat.description}</p>
            </div>
            <div className={`grid gap-6 ${cat.items.length === 2 ? 'md:grid-cols-2' : cat.items.length === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
              {cat.items.map(item => (
                <div
                  key={item.id}
                  className="group bg-brand-dark-3 border border-white/5 hover:border-brand-orange/50 transition-all overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`${item.image}?auto=compress&cs=tinysrgb&w=600`}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-brand-orange text-white text-xs font-semibold px-2 py-1">{item.badge}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="w-6 h-0.5 bg-brand-orange mb-3" />
                    <h3 className="text-white font-bold text-sm mb-2 group-hover:text-brand-orange transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-white/50 text-xs leading-relaxed mb-4">{item.tagline}</p>
                    <ul className="space-y-1">
                      {item.specs.map(spec => (
                        <li key={spec} className="flex items-center gap-2 text-white/60 text-xs">
                          <CheckCircle size={11} className="text-brand-orange shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Tagline banner */}
      <section className="py-20 px-4 bg-brand-dark-3">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-8">
            {['Fast.', 'Flexible.', 'Fully Supported.'].map(word => (
              <span key={word} className="text-4xl md:text-6xl lg:text-7xl font-black text-white">
                {word}
              </span>
            ))}
          </div>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Our hire fleet is maintained to the highest standards. Every unit arrives ready to work — and PCP engineers stay available throughout your hire period.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 bg-brand-dark-2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Every Hire Includes</p>
            <h2 className="section-title mb-4">End-to-End Support</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {included.map(item => (
              <div key={item.title} className="bg-brand-dark-3 border border-white/5 p-6">
                <div className="w-10 h-10 bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center mb-4">
                  <item.icon size={18} className="text-brand-orange" />
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Hire Works */}
      <section className="py-20 px-4 bg-brand-dark">
        <div className="max-w-5xl mx-auto text-center">
          <p className="section-label mb-3">Process</p>
          <h2 className="section-title mb-12">How Hire Works</h2>
          <div className="relative">
            <div className="absolute top-6 left-[8%] right-[8%] h-px bg-brand-orange/30 hidden md:block" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { step: '01', label: 'Enquiry Received' },
                { step: '02', label: 'Requirement Confirmed' },
                { step: '03', label: 'Unit Prepared & Checked' },
                { step: '04', label: 'Delivered & Commissioned' },
                { step: '05', label: 'Collected on Completion' },
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

      {/* CTA */}
      <section className="py-20 px-4 bg-brand-dark-3">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Get in Touch</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need equipment on site fast?
              </h2>
              <p className="text-white/60 mb-6">
                Tell us what you need, when you need it and where. We'll confirm availability and get a unit moving to your site.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => onNavigate('contact')} className="btn-primary">
                  Request Hire Enquiry <ArrowRight size={14} />
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
                  'We confirm availability and lead time',
                  'We agree hire terms and delivery date',
                  'Unit is delivered and commissioned on site',
                  'PCP support available for the full hire period',
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
