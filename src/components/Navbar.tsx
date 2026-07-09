import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { solutions } from '../data/solutions';
import { industries } from '../data/industries';

interface NavItem {
  label: string;
  action: () => void;
}

interface NavGroup {
  heading?: string;
  items: NavItem[];
}

interface NavEntry {
  label: string;
  key: string;
  items?: NavItem[] | null;
  groups?: NavGroup[] | null;
  action?: () => void;
}

interface NavbarProps {
  onNavigate: (page: string, id?: string) => void;
  currentPage: string;
}

const PRIMARY_SOLUTION_IDS = ['dust', 'metal', 'odour'];

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const primarySolutions = solutions.filter(s => PRIMARY_SOLUTION_IDS.includes(s.id));
  const otherSolutions = solutions.filter(s => !PRIMARY_SOLUTION_IDS.includes(s.id));

  const nav: NavEntry[] = [
    {
      label: 'Solutions',
      key: 'solutions',
      groups: [
        {
          items: primarySolutions.map(s => ({ label: s.title, action: () => onNavigate('solution', s.id) })),
        },
        {
          heading: 'Other',
          items: otherSolutions.map(s => ({ label: s.title, action: () => onNavigate('solution', s.id) })),
        },
        {
          heading: 'Product Ranges',
          items: [
            { label: 'Dust Suppression', action: () => onNavigate('products', 'dust-suppression') },
            { label: 'Dust Extraction', action: () => onNavigate('products', 'dust-extraction') },
            { label: 'Odour Control', action: () => onNavigate('products', 'odour') },
            { label: 'Air Filtration', action: () => onNavigate('products', 'air-filtration') },
            { label: 'Monitoring Systems', action: () => onNavigate('products', 'monitoring') },
          ],
        },
      ],
    },
    {
      label: 'Industries',
      key: 'industries',
      items: industries.map(i => ({ label: i.name, action: () => onNavigate('industry', i.id) })),
    },
    {
      label: 'Projects',
      key: 'projects',
      items: null,
      action: () => onNavigate('projects'),
    },
    {
      label: 'Rental',
      key: 'rental',
      items: null,
      action: () => onNavigate('rental'),
    },
    {
      label: 'Resources',
      key: 'resources',
      items: [
        { label: 'Case Studies', action: () => onNavigate('resources', 'case-studies') },
        { label: 'FAQs', action: () => onNavigate('resources', 'faqs') },
        { label: 'Guides', action: () => onNavigate('resources', 'guides') },
        { label: 'Downloads', action: () => onNavigate('resources', 'downloads') },
        { label: 'About Us', action: () => onNavigate('about') },
      ],
    },
  ];

  const hasDropdown = (item: NavEntry) => !!(item.items || item.groups);

  const closeAndRun = (action: () => void) => {
    action();
    setActiveDropdown(null);
    setMobileOpen(false);
  };

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
              src="/Untitled_design_(7).png"
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
                onMouseEnter={() => hasDropdown(item) && openDropdown(item.key)}
                onMouseLeave={() => hasDropdown(item) && scheduleClose()}
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
                  {hasDropdown(item) && (
                    <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.key ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {activeDropdown === item.key && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-brand-dark-2 border border-white/10 min-w-[220px] shadow-2xl"
                    onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
                    onMouseLeave={scheduleClose}
                  >
                    {/* Grouped dropdown (Solutions) */}
                    {item.groups && item.groups.map((group, gi) => (
                      <div key={gi}>
                        {gi > 0 && <div className="border-t border-white/10 mx-2" />}
                        {group.heading && (
                          <p className="px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-widest text-white/30">
                            {group.heading}
                          </p>
                        )}
                        {group.items.map(sub => (
                          <button
                            key={sub.label}
                            onClick={() => closeAndRun(sub.action)}
                            className="block w-full text-left px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-brand-dark-4 transition-colors border-b border-white/5 last:border-0"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    ))}
                    {/* Flat dropdown */}
                    {item.items && item.items.map(sub => (
                      <button
                        key={sub.label}
                        onClick={() => closeAndRun(sub.action)}
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
              Get in touch
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
                  if (!hasDropdown(item) && item.action) { item.action(); setMobileOpen(false); }
                }}
                className="flex items-center justify-between w-full px-5 py-4 text-sm font-semibold text-white"
              >
                {item.label}
              </button>
              {item.groups && (
                <div className="bg-brand-dark-3 pb-2">
                  {item.groups.map((group, gi) => (
                    <div key={gi}>
                      {group.heading && (
                        <p className="px-8 pt-3 pb-1 text-xs font-semibold uppercase tracking-widest text-white/30">
                          {group.heading}
                        </p>
                      )}
                      {group.items.map(sub => (
                        <button
                          key={sub.label}
                          onClick={() => closeAndRun(sub.action)}
                          className="block w-full text-left px-8 py-2.5 text-sm text-white/60 hover:text-white transition-colors"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}
              {item.items && (
                <div className="bg-brand-dark-3 pb-2">
                  {item.items.map(sub => (
                    <button
                      key={sub.label}
                      onClick={() => closeAndRun(sub.action)}
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
              Get in touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
