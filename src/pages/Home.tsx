import { ArrowRight, CheckCircle, ChevronRight, Shield, Award, Globe2, Wrench, BadgeCheck } from 'lucide-react';
import { industries } from '../data/industries';

interface HomeProps {
  onNavigate: (page: string, id?: string) => void;
}

const problems = [
  { text: 'We are getting dust complaints from neighbours.', solution: 'dust', icon: '💨' },
  { text: 'Our site smells and we are facing odour enforcement.', solution: 'odour', icon: '🏭' },
  { text: 'We fail environmental inspections.', solution: 'monitoring', icon: '📋' },
  { text: 'Our conveyors and crushers produce visible dust.', solution: 'extraction', icon: '⚙️' },
  { text: 'Our hoppers and tipping areas generate emissions.', solution: 'dust', icon: '🔧' },
  { text: 'Our shredder or waste processing creates odour.', solution: 'odour', icon: '🗂️' },
];

const industryIcons: Record<string, string> = {
  ports: '⚓',
  quarrying: '⛏️',
  recycling: '♻️',
  waste: '🗑️',
  manufacturing: '🏗️',
  'food-processing': '🌾',
  'water-treatment': '💧',
  energy: '⚡',
  construction: '🏢',
  biomass: '🌿',
};

const trustStats = [
  { value: '57', suffix: '+', label: 'Years in Business', icon: Award },
  { value: '10', suffix: '+', label: 'Industries Served', icon: Globe2 },
  { value: '1,000', suffix: '+', label: 'Projects Completed', icon: Wrench },
  { value: '15', suffix: '+', label: 'Countries Supplied', icon: Globe2 },
  { value: 'ISO', suffix: '', label: 'Certified', icon: BadgeCheck },
  { value: '50', suffix: '+', label: 'Manufacturers Represented', icon: Shield },
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="bg-brand-dark">
      {/* ── SECTION 1: Hero ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Single Ken Burns image */}
        <div
          className="absolute inset-0 bg-cover bg-center hero-kenburns"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

        {/* Content */}
        <div className="relative z-10 w-full px-6 md:px-16 pb-20 pt-40 max-w-3xl">
          <div className="mb-3">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange border border-brand-orange/40 px-3 py-1">
              Trusted Since 1968
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 text-brand-orange">
            Providing Bespoke<br />
            Sustainable Solutions<br />
            For <span className="italic font-extrabold">Over 50 Years</span>
          </h1>
          <p className="text-white font-medium text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            PCP Group is here to help you solve your industrial dust, odour, and metal problems.
            Our innovative solutions help protect your people, assets, and reputation while
            delivering value to your organisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-white text-brand-orange font-bold text-sm py-4 px-8 hover:bg-white/90 transition-colors"
            >
              Contact Us <ArrowRight size={16} />
            </button>
            <button
              onClick={() => {
                document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-outline text-sm py-4 px-8"
            >
              Find Your Industry <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 md:right-16 z-10 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent mx-auto" />
        </div>
      </section>

      {/* ── Shared background wrapper: sections 2–5 + CTA ── */}
      <div
        className="relative"
        style={{
          backgroundImage: 'url(/metal-industry-worker-sprays-protective-suit-night-generated-by-ai-scaled.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >

      {/* ── SECTION 2: What problem do you solve? ── */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">What We Solve</p>
            <h2 className="section-title mb-6">Your site. Your problems. Our solutions.</h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg">
              We do not sell equipment. We solve the problems that are costing you time, compliance and reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              {
                icon: '🌫️',
                title: 'Reduce Dust',
                body: 'Keep airborne dust below site limits before it reaches neighbours, workers or monitoring stations.',
                action: () => onNavigate('solution', 'dust'),
              },
              {
                icon: '🚫',
                title: 'Eliminate Odours',
                body: 'Neutralise nuisance odours at source before they cross your site boundary and attract complaints.',
                action: () => onNavigate('solution', 'odour'),
              },
              {
                icon: '🌬️',
                title: 'Improve Air Quality',
                body: 'Filter and extract hazardous particles from your process air streams, protecting workers and the environment.',
                action: () => onNavigate('solution', 'air-filtration'),
              },
              {
                icon: '🦺',
                title: 'Protect Workers',
                body: 'Give your people a safe working environment free from harmful dust, fumes and airborne hazards.',
                action: () => onNavigate('solution', 'extraction'),
              },
            ].map(item => (
              <button
                key={item.title}
                onClick={item.action}
                className="bg-white/5 backdrop-blur-sm p-8 text-left hover:bg-white/10 transition-all group"
              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
                <div className="mt-6 flex items-center gap-2 text-brand-orange text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  See Solutions <ArrowRight size={14} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Which industry? ── */}
      <section id="industries" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Industries We Serve</p>
            <h2 className="section-title mb-6">Which industry are you in?</h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg">
              Every industry has its own dust, odour and air quality challenges. Select yours for tailored solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {industries.map(industry => (
              <button
                key={industry.id}
                onClick={() => onNavigate('industry', industry.id)}
                className="group relative overflow-hidden aspect-square"
              >
                <img
                  src={`${industry.heroImage}?auto=compress&cs=tinysrgb&w=400`}
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-brand-orange/80 transition-all duration-300" />
                <div className="relative z-10 h-full flex flex-col justify-end p-4">
                  <div className="text-2xl mb-2">{industryIcons[industry.id]}</div>
                  <h3 className="text-white font-bold text-sm leading-tight">{industry.name}</h3>
                  <p className="text-white/60 text-xs mt-1 hidden group-hover:block leading-snug">
                    {industry.tagline}
                  </p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: What problem are you having? ── */}
      <section id="problems" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Find Your Solution</p>
              <h2 className="section-title mb-6">Describe what is happening on your site.</h2>
              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                You do not need to know the product name. Tell us the problem and we will show you the solution.
              </p>
              <div className="flex flex-col gap-3">
                {problems.map(p => (
                  <button
                    key={p.text}
                    onClick={() => onNavigate('solution', p.solution)}
                    className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-orange/50 hover:bg-white/10 transition-all text-left"
                  >
                    <div className="text-2xl shrink-0">{p.icon}</div>
                    <p className="text-white/70 group-hover:text-white text-sm font-medium transition-colors flex-1">
                      {p.text}
                    </p>
                    <ChevronRight size={16} className="text-white/30 group-hover:text-brand-orange transition-colors shrink-0" />
                  </button>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Industrial dust control"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-transparent lg:from-transparent lg:via-transparent lg:to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 bg-brand-orange p-6">
                <p className="text-white font-bold text-lg leading-tight mb-1">
                  Not sure where to start?
                </p>
                <p className="text-white/80 text-sm mb-4">
                  Our engineers will assess your site and recommend the right solution.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-white text-brand-orange font-bold text-sm py-2 px-5 hover:bg-white/90 transition-colors inline-flex items-center gap-2"
                >
                  Request a Free Site Visit <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Why trust PCP? ── */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Why PCP Group</p>
            <h2 className="section-title mb-6">Trusted by Irish industry since 1967.</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 mb-16">
            {trustStats.map(stat => (
              <div key={stat.label} className="bg-white/5 backdrop-blur-sm p-8 text-center">
                <div className="stat-number mb-2">
                  {stat.value}<span className="text-brand-orange">{stat.suffix}</span>
                </div>
                <div className="text-white/50 text-xs uppercase tracking-widest leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Why choose us?</h3>
              <div className="space-y-4">
                {[
                  'Free site assessment — no obligation to purchase',
                  'Bespoke solutions designed around your specific challenge',
                  'Expert installation and full service backup',
                  'Rapid response when complaints or enforcement pressure arises',
                  'Deep understanding of Irish EPA and local authority requirements',
                  'Supply, install and maintain — one point of contact',
                ].map(point => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-4">
                <button onClick={() => onNavigate('about')} className="btn-outline text-xs">
                  About PCP Group
                </button>
                <button onClick={() => onNavigate('projects')} className="btn-primary text-xs">
                  See Our Projects
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img
                src="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Port operations"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Industrial site"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <img
                src="https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Quarry dust suppression"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <img
                src="https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Manufacturing facility"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(232, 98, 26, 0.78)' }} />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to solve your site's dust or odour problem?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Our engineers will visit your site, assess the challenge, and recommend the right solution. No obligation.
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
              <span>Call +353 45 863220</span>
            </a>
          </div>
        </div>
      </section>

      </div> {/* end shared background wrapper */}
    </div>
  );
}
