import { Phone, Mail, MapPin } from 'lucide-react';
import { solutions } from '../data/solutions';
import { industries } from '../data/industries';

const socialLinks = [
  {
    href: 'https://x.com/pcpgroupIE',
    label: 'X',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: 'https://www.facebook.com/people/PCP-Group/61562212171106/',
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622 2.145 2.145 0 0 0-.263.979V12.04h3.382l-.464 3.667h-2.918v7.984H9.101z" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/pcpgroup.ie/',
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    href: 'https://linkedin.com/company/pcpgroup',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

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
            <div className="mb-8">
              <img src="/Untitled_design_(7).png" alt="PCP Group" className="h-12 w-auto object-contain" />
            </div>
            <div className="mb-8">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Hours of Operation</p>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">Mon – Fri</span>
                <span className="text-white text-sm font-medium">8:00 am – 5:00 pm</span>
              </div>
            </div>
            <div className="flex gap-2.5">
              {socialLinks.map(({ href, label, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-brand-orange flex items-center justify-center text-white transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Solutions</h4>
            <ul className="space-y-2">
              {solutions.slice(0, 3).map(s => (
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
                <a
                  href="https://www.google.com/maps/place/PCP+GROUP/@53.1339053,-6.6185107,17z/data=!3m1!4b1!4m6!3m5!1s0x486783df90160a4b:0xe5299cbcddf6eceb!8m2!3d53.1339021!4d-6.6159358!16s%2Fg%2F11r9gg02yx?entry=ttu&g_ep=EgoyMDI2MDcwNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-white/50 text-sm hover:text-white transition-colors"
                >
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  Ballymore Eustace, Co. Kildare, Ireland
                </a>
              </li>
            </ul>
            <button
              onClick={() => onNavigate('contact')}
              className="mt-6 btn-primary text-xs py-2.5 px-5 w-full justify-center"
            >
              Get in touch
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
