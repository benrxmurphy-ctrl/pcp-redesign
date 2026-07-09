import { ArrowRight, ChevronRight, CheckCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

interface AboutPageProps {
  onNavigate: (page: string, id?: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div
      className="pt-20"
      style={{
        backgroundImage: "url('/images/spencer-davis-8DQz9z99GjU-unsplash.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="section-label mb-3">About PCP Group</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl">
            Ireland's Industrial Environmental Specialists Since 1967.
          </h1>
          <p className="text-xl text-white/60 max-w-2xl">
            Founded by Raymond Murphy to bring cutting-edge technologies from leading international manufacturers to Irish industry. Over 50 years later, we remain Ireland's trusted leader in dust, odour and environmental control.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="px-4 py-3 bg-brand-dark-2/90 border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: 'About' }]} onNavigate={onNavigate} />
        </div>
      </div>

      {/* Stats */}
      <section className="py-6 px-4 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(232, 98, 26, 0.85)' }} />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: '1967', label: 'Year Founded' },
            { value: '50+', label: 'Years Experience' },
            { value: '1,000+', label: 'Projects Completed' },
            { value: '10+', label: 'Industries Served' },
          ].map(s => (
            <div key={s.label} className="bg-transparent p-8 text-center">
              <div className="text-4xl font-black text-white mb-1">{s.value}</div>
              <div className="text-white/70 text-xs uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-brand-dark/75" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built on honest service and solid expertise.
            </h2>
            <div className="space-y-4 text-white/60 text-sm leading-relaxed">
              <p>PCP Group is a proud Irish company, founded by Raymond Murphy in 1967 to bring cutting-edge technologies from leading international manufacturers to various industries.</p>
              <p>Building on this legacy, PCP Group is committed to empowering Irish businesses with innovative and disruptive technological solutions. Our offerings are designed to be straightforward while ensuring the protection of your people, assets and organisation.</p>
              <p>We represent over 50 leading international manufacturers, providing Irish industry with access to the best available technology for dust suppression, odour control, air filtration and environmental monitoring.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Port operations" className="w-full h-52 object-cover" loading="lazy" />
            <img src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Industrial facility" className="w-full h-52 object-cover" loading="lazy" />
            <img src="https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Quarry" className="w-full h-52 object-cover" loading="lazy" />
            <img src="https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Manufacturing" className="w-full h-52 object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-brand-dark-2/88" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Our Values</p>
            <h2 className="section-title mb-4">What drives us.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Safety First', body: 'Safety comes first in every decision we make — for our team, your workforce and the communities around your site.' },
              { title: 'Innovation That Is Useful', body: 'We pursue innovation that genuinely improves how businesses operate, not just clever technology for its own sake.' },
              { title: 'Long-Term Partnerships', body: 'We build straightforward, honest partnerships with our clients. Not transactional sales — lasting relationships.' },
              { title: 'High Standards', body: 'Consistency, accountability and work done to a high standard. Every site. Every time.' },
              { title: 'Environmental Respect', body: 'We take our responsibility to the environment seriously — helping industry operate cleaner, safer and more sustainably.' },
              { title: 'Local Expertise', body: 'Deep understanding of Irish EPA regulations, local authority requirements and site operating conditions.' },
            ].map(v => (
              <div key={v.title} className="bg-brand-dark-3 border border-white/5 p-8">
                <div className="w-8 h-0.5 bg-brand-orange mb-5" />
                <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-brand-dark/75" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">Why PCP Group</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Why industry chooses us.</h2>
            <div className="space-y-4">
              {[
                'Free site assessment — no obligation or call-out charge',
                'Bespoke solutions designed for your specific challenge and site',
                'Expert installation by trained, experienced engineers',
                'Full service and maintenance backup after installation',
                'Rapid response when complaints or enforcement pressure arises',
                'One point of contact from assessment through to ongoing support',
                'Access to 50+ leading international manufacturers',
                'Irish company with local expertise and rapid availability',
              ].map(point => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-brand-orange shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-dark-3 border border-white/10 p-10">
            <h3 className="text-white font-bold text-xl mb-6">Our Objectives</h3>
            <div className="space-y-6">
              <div>
                <div className="w-5 h-0.5 bg-brand-orange mb-2" />
                <p className="text-white/80 text-sm font-medium mb-1">Vision</p>
                <p className="text-white/50 text-sm">To establish ourselves as Ireland's leading experts in sustainable dust, odour and metal control solutions.</p>
              </div>
              <div>
                <div className="w-5 h-0.5 bg-brand-orange mb-2" />
                <p className="text-white/80 text-sm font-medium mb-1">Mission</p>
                <p className="text-white/50 text-sm">To remain Ireland's trusted leader in industrial safety and environmental control, known for honest service, solid expertise and innovation that genuinely improves how businesses operate.</p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Certifications &amp; Memberships</p>
                <div className="flex flex-wrap gap-3">
                  {['ISO Certified', 'MPA Member', 'NISO Member', 'IMQS', 'Enterprise Ireland'].map(cert => (
                    <span key={cert} className="px-3 py-1.5 bg-brand-dark-4 border border-white/10 text-white/50 text-xs">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(232, 98, 26, 0.85)' }} />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to work with Ireland's leading environmental specialists?
          </h2>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-brand-orange font-bold text-sm py-4 px-8 hover:bg-white/90 transition-colors inline-flex items-center gap-2 mt-4"
          >
            Get in Touch <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
