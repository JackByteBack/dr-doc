import { Link, useLocation } from 'react-router-dom';
import { useCase } from '../state/CaseContext';
import { Home, FileText, Eye, Shield, GitCompare, AlertTriangle, Wrench, MapPin, FileCheck, Briefcase, Search } from 'lucide-react';

const SIDEBAR_LINKS = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/documents', label: 'Documents', icon: FileText, badge: true },
  { to: '/ocr', label: 'OCR', icon: Eye },
  { to: '/quality-check', label: 'Quality Check', icon: Search },
  { to: '/verification', label: 'Verification', icon: Shield },
  { to: '/cross-check', label: 'Cross-Check', icon: GitCompare },
  { to: '/issues', label: 'Issues', icon: AlertTriangle },
  { to: '/verify', label: 'Fix Application', icon: Wrench },
  { to: '/tools', label: 'Tools', icon: Briefcase },
  { to: '/help-nearby', label: 'Nearby Help', icon: MapPin },
  { to: '/report', label: 'Final Report', icon: FileCheck },
];

export default function Sidebar() {
  const location = useLocation();
  const { profile, documents } = useCase();

  return (
    <aside className="w-56 bg-cream border-r-2 border-dark flex-shrink-0 flex flex-col">
      <div className="p-3 border-b-2 border-dark">
        <div className="text-[9px] font-mono text-dark/50 uppercase tracking-widest">Active Application</div>
        <div className="text-xs font-bold text-dark mt-1 leading-tight">{profile.name}</div>
      </div>
      <nav className="flex-1 flex flex-col">
        {SIDEBAR_LINKS.map((link) => {
          const Icon = link.icon;
          const active = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-2 px-3 py-2 text-xs font-mono no-underline transition-colors border-l-3 ${
                active
                  ? 'bg-maroon text-cream border-maroon-light'
                  : 'text-dark/70 hover:bg-cream-dark border-transparent'
              }`}
            >
              <Icon size={14} />
              <span className="flex-1">{link.label}</span>
              {link.badge && documents.length > 0 && (
                <span className="pill pill-pink text-[9px] px-1.5 py-0">{documents.length}</span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
