import { ChevronRight, Home } from 'lucide-react';

export interface Crumb {
  label: string;
  page?: string;
  id?: string;
}

interface BreadcrumbProps {
  crumbs: Crumb[];
  onNavigate: (page: string, id?: string) => void;
}

export default function Breadcrumb({ crumbs, onNavigate }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 flex-wrap">
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center text-white/40 hover:text-white transition-colors"
        aria-label="Home"
      >
        <Home size={12} />
      </button>

      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            <ChevronRight size={11} className="text-white/25 shrink-0" />
            {isLast || !crumb.page ? (
              <span className="text-white/80 text-xs font-medium truncate max-w-[220px]">
                {crumb.label}
              </span>
            ) : (
              <button
                onClick={() => onNavigate(crumb.page!, crumb.id)}
                className="text-white/40 text-xs hover:text-white transition-colors whitespace-nowrap"
              >
                {crumb.label}
              </button>
            )}
          </span>
        );
      })}
    </nav>
  );
}
