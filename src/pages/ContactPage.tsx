import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronRight, CheckCircle } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string, id?: string) => void;
}

const industries = [
  'Ports', 'Quarrying', 'Recycling', 'Waste', 'Manufacturing',
  'Food Processing', 'Water Treatment', 'Energy', 'Construction', 'Biomass', 'Other',
];

const enquiryTypes = [
  'Dust complaint from neighbours',
  'Odour complaint / enforcement',
  'Failed environmental inspection',
  'Conveyor / crusher dust problem',
  'Hopper / tipping area emissions',
  'Shredder / processing odour',
  'Air quality monitoring',
  'Equipment hire',
  'General enquiry',
];

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    industry: '', enquiry: '', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-brand-dark pt-20">
      {/* Header */}
      <section className="py-20 px-4 bg-brand-dark-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-white/40 text-xs mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button>
            <ChevronRight size={12} />
            <span className="text-white/80">Contact</span>
          </div>
          <p className="section-label mb-3">Contact an Engineer</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Talk to us about<br />
            <span className="text-brand-orange">your site.</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl">
            Free site assessment. No obligation. Our engineers understand industrial operations and will recommend the right solution for your specific challenge.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-5">Get in touch</h3>
              <div className="space-y-4">
                <a href="tel:+35345863220" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-brand-orange flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">ROI</p>
                    <p className="text-white group-hover:text-brand-orange transition-colors font-medium">+353 (0)45 863220</p>
                  </div>
                </a>
                <a href="mailto:info@pcpgroup.ie" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-brand-dark-4 border border-white/10 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-white/50" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Email</p>
                    <p className="text-white group-hover:text-brand-orange transition-colors font-medium">info@pcpgroup.ie</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-dark-4 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-white/50" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Address</p>
                    <p className="text-white/70 text-sm">PCP House<br />Ballymore Eustace<br />Co. Kildare, W91W275<br />Ireland</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-dark-4 border border-white/10 flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-white/50" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Opening Hours</p>
                    <p className="text-white/70 text-sm">Monday – Friday: 8am – 5pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-dark-3 border border-white/10 p-6">
              <h4 className="text-white font-semibold mb-4">What Happens Next</h4>
              <div className="space-y-3">
                {[
                  'We contact you within 1 business day',
                  'We arrange a free site visit',
                  'We assess your specific challenge',
                  'We recommend the right solution',
                  'We provide a clear, honest proposal',
                ].map((step, i) => (
                  <div key={step} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 bg-brand-orange text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-white/60">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-brand-dark-3 border border-brand-orange/30 p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-brand-orange flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-2xl mb-3">Enquiry Received</h3>
                <p className="text-white/60 max-w-md">
                  Thank you for contacting PCP Group. One of our engineers will be in touch within 1 business day to discuss your requirements.
                </p>
                <button
                  onClick={() => { setSubmitted(false); onNavigate('home'); }}
                  className="mt-8 btn-outline"
                >
                  Back to Home
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-brand-dark-3 border border-white/10 p-8 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full bg-brand-dark-4 border border-white/10 text-white px-4 py-3 text-sm focus:border-brand-orange focus:outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">Company *</label>
                    <input
                      required
                      type="text"
                      value={form.company}
                      onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                      className="w-full bg-brand-dark-4 border border-white/10 text-white px-4 py-3 text-sm focus:border-brand-orange focus:outline-none transition-colors"
                      placeholder="Company Ltd."
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full bg-brand-dark-4 border border-white/10 text-white px-4 py-3 text-sm focus:border-brand-orange focus:outline-none transition-colors"
                      placeholder="john@company.ie"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full bg-brand-dark-4 border border-white/10 text-white px-4 py-3 text-sm focus:border-brand-orange focus:outline-none transition-colors"
                      placeholder="+353 ..."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">Industry</label>
                  <select
                    value={form.industry}
                    onChange={e => setForm(f => ({ ...f, industry: e.target.value }))}
                    className="w-full bg-brand-dark-4 border border-white/10 text-white px-4 py-3 text-sm focus:border-brand-orange focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select your industry</option>
                    {industries.map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">What Best Describes Your Problem?</label>
                  <select
                    value={form.enquiry}
                    onChange={e => setForm(f => ({ ...f, enquiry: e.target.value }))}
                    className="w-full bg-brand-dark-4 border border-white/10 text-white px-4 py-3 text-sm focus:border-brand-orange focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select enquiry type</option>
                    {enquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">Tell Us More</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    rows={5}
                    className="w-full bg-brand-dark-4 border border-white/10 text-white px-4 py-3 text-sm focus:border-brand-orange focus:outline-none transition-colors resize-none"
                    placeholder="Describe the problem you are experiencing, your site type and any relevant details..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center py-4">
                  Send Enquiry — We'll Respond Within 1 Business Day
                </button>
                <p className="text-white/30 text-xs text-center">
                  Free site assessment. No obligation. No hard selling.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
