import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { solutions } from '../data/solutions';
import { industries } from '../data/industries';

interface NavbarProps {
  onNavigate: (page: string, id?: string) => void;
  currentPage: string;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const nav = [
    {
      label: 'Solutions',
      key: 'solutions',
      items: solutions.map(s => ({ label: s.title, action: () => onNavigate('solution', s.id) })),
    },
    {
      label: 'Industries',
      key: 'industries',
      items: industries.map(i => ({ label: i.name, action: () => onNavigate('industry', i.id) })),
    },
    {
      label: 'Products',
      key: 'products',
      items: [
        { label: 'Dust Suppression', action: () => onNavigate('products', 'dust-suppression') },
        { label: 'Dust Extraction', action: () => onNavigate('products', 'dust-extraction') },
        { label: 'Odour Control', action: () => onNavigate('products', 'odour') },
        { label: 'Air Filtration', action: () => onNavigate('products', 'air-filtration') },
        { label: 'Monitoring Systems', action: () => onNavigate('products', 'monitoring') },
        { label: 'Spare Parts', action: () => onNavigate('products', 'spare-parts') },
      ],
    },
    {
      label: 'Projects',
      key: 'projects',
      items: null,
      action: () => onNavigate('projects'),
    },
    {
      label: 'Resources',
      key: 'resources',
      items: [
        { label: 'Case Studies', action: () => onNavigate('resources', 'case-studies') },
        { label: 'FAQs', action: () => onNavigate('resources', 'faqs') },
        { label: 'Guides', action: () => onNavigate('resources', 'guides') },
        { label: 'Downloads', action: () => onNavigate('resources', 'downloads') },
      ],
    },
    {
      label: 'About',
      key: 'about',
      items: null,
      action: () => onNavigate('about'),
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-brand-dark border-b border-white/10'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => { onNavigate('home'); setMobileOpen(false); }}
            className="flex items-center group"
          >
            <img
              src="/image copy copy.png"
              alt="PCP Group"
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {nav.map(item => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => item.items && setActiveDropdown(item.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={item.action}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                    currentPage === item.key
                      ? 'text-brand-orange'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.items && <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.key ? 'rotate-180' : ''}`} />}
                </button>

                {item.items && activeDropdown === item.key && (
                  <div className="absolute top-full left-0 mt-1 bg-brand-dark-2 border border-white/10 min-w-[200px] shadow-2xl">
                    {item.items.map(sub => (
                      <button
                        key={sub.label}
                        onClick={() => { sub.action(); setActiveDropdown(null); }}
                        className="block w-full text-left px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-brand-dark-4 transition-colors border-b border-white/5 last:border-0"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+35345863220"
              className="hidden lg:flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Phone size={14} />
              <span>+353 45 863220</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="hidden lg:block btn-primary text-xs py-2 px-4"
            >
              Contact Engineer
            </button>
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-white/10 max-h-[80vh] overflow-y-auto">
          {nav.map(item => (
            <div key={item.key} className="border-b border-white/5">
              <button
                onClick={() => {
                  if (!item.items && item.action) { item.action(); setMobileOpen(false); }
                }}
                className="flex items-center justify-between w-full px-5 py-4 text-sm font-semibold text-white"
              >
                {item.label}
              </button>
              {item.items && (
                <div className="bg-brand-dark-3 pb-2">
                  {item.items.map(sub => (
                    <button
                      key={sub.label}
                      onClick={() => { sub.action(); setMobileOpen(false); }}
                      className="block w-full text-left px-8 py-2.5 text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="p-5 flex flex-col gap-3">
            <a href="tel:+35345863220" className="flex items-center gap-2 text-sm text-white/70">
              <Phone size={14} /> +353 45 863220
            </a>
            <button onClick={() => { onNavigate('contact'); setMobileOpen(false); }} className="btn-primary justify-center">
              Contact Engineer
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
