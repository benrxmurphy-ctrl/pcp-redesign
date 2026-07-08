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
              <img src="/pcp-logo.png" alt="PCP Group" className="h-12 w-auto object-contain mix-blend-screen brightness-125" />
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
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Solutions</h4>
            <ul className="space-y-2.5">
              {solutions.map(s => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('solution', s.id)}
                    className="text-white/50 hover:text-brand-orange text-sm transition-colors"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Industries</h4>
            <ul className="space-y-2.5">
              {industries.slice(0, 8).map(i => (
                <li key={i.id}>
                  <button
                    onClick={() => onNavigate('industry', i.id)}
                    className="text-white/50 hover:text-brand-orange text-sm transition-colors"
                  >
                    {i.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin size={14} className="text-brand-orange mt-0.5 shrink-0" />
                <span>PCP House, Ballymore Eustace, Co. Kildare, W91W275, Ireland</span>
              </li>
              <li>
                <a href="tel:+35345863220" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors">
                  <Phone size={14} className="text-brand-orange shrink-0" />
                  +353 (0)45 863220
                </a>
              </li>
              <li>
                <a href="mailto:info@pcpgroup.ie" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors">
                  <Mail size={14} className="text-brand-orange shrink-0" />
                  info@pcpgroup.ie
                </a>
              </li>
            </ul>
            <div className="mt-5 text-white/40 text-xs">
              <p>Mon – Fri: 8am – 5pm</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} PCP Group Ltd. All rights reserved. Registered in Ireland.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/30 text-xs">
              <span className="w-5 h-5 border border-white/20 flex items-center justify-center text-[9px] font-bold text-white/40">ISO</span>
              <span>ISO Certified</span>
            </div>
            <div className="text-white/30 text-xs">|</div>
            <div className="text-white/30 text-xs">50+ Years in Business</div>
            <div className="text-white/30 text-xs">|</div>
            <div className="text-white/30 text-xs">Founded 1967</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
