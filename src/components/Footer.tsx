import { Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react';
import { solutions } from '../data/solutions';
import { industries } from '../data/industries';

interface FooterProps {
  onNavigate: (page: string, id?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <img src="/image copy copy.png" alt="PCP Group" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Industrial environmental solutions for dust, odour and airborne emissions. Protecting people, assets and reputation since 1967.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com/company/pcpgroup" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 hover:bg-brand-orange transition-colors flex items-center justify-center">
                <Linkedin size={14} className="text-white" />
              </a>
              <a href="https://twitter.com/pcpgroupie" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 hover:bg-brand-orange transition-colors flex items-center justify-center">
                <Twitter size={14} className="text-white" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Solutions</h4>
            <ul className="space-y-2">
              {solutions.slice(0, 6).map(s => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('solution', s.id)}
                    className="text-white/50 text-sm hover:text-white transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Industries</h4>
            <ul className="space-y-2">
              {industries.slice(0, 6).map(i => (
                <li key={i.id}>
                  <button
                    onClick={() => onNavigate('industry', i.id)}
                    className="text-white/50 text-sm hover:text-white transition-colors text-left"
                  >
                    {i.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+35345863220" className="flex items-start gap-2.5 text-white/50 text-sm hover:text-white transition-colors">
                  <Phone size={14} className="mt-0.5 shrink-0" />
                  +353 45 863220
                </a>
              </li>
              <li>
                <a href="mailto:info@pcpgroup.ie" className="flex items-start gap-2.5 text-white/50 text-sm hover:text-white transition-colors">
                  <Mail size={14} className="mt-0.5 shrink-0" />
                  info@pcpgroup.ie
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-white/50 text-sm">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  Naas, Co. Kildare, Ireland
                </span>
              </li>
            </ul>
            <button
              onClick={() => onNavigate('contact')}
              className="mt-6 btn-primary text-xs py-2.5 px-5 w-full justify-center"
            >
              Contact an Engineer
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} PCP Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('about')} className="text-white/30 text-xs hover:text-white/60 transition-colors">About</button>
            <button onClick={() => onNavigate('contact')} className="text-white/30 text-xs hover:text-white/60 transition-colors">Contact</button>
            <button onClick={() => onNavigate('resources')} className="text-white/30 text-xs hover:text-white/60 transition-colors">Resources</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
