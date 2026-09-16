import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'HOME' },
  { to: '/verify', label: 'VERIFY' },
  { to: '/documents', label: 'DOCUMENTS' },
  { to: '/ocr', label: 'OCR' },
  { to: '/quality-check', label: 'QUALITY CHECK' },
  { to: '/verification', label: 'VERIFICATION' },
  { to: '/cross-check', label: 'CROSS-CHECK' },
  { to: '/issues', label: 'ISSUES' },
  { to: '/tools', label: 'TOOLS' },
  { to: '/report', label: 'FINAL REPORT' },
  { to: '/help-nearby', label: 'NEARBY HELP' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-cream border-b-2 border-dark flex items-center justify-between px-4 h-[52px]">
      <Link to="/" className="flex items-center gap-2 no-underline shrink-0">
        <div className="w-10 h-10 rounded-full border-2 border-dark bg-maroon flex items-center justify-center">
          <span className="text-cream text-[10px] font-bold font-mono leading-tight text-center">DR.<br/>DOC</span>
        </div>
        <div className="hidden sm:block">
          <div className="font-extrabold text-dark text-sm tracking-tight uppercase leading-tight">DR. DOC</div>
          <div className="text-[9px] font-mono text-dark/60 uppercase tracking-widest">Document Intelligence</div>
        </div>
      </Link>

      <div className="hidden xl:flex items-center gap-0.5 overflow-x-auto">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`px-1.5 py-1 text-[10px] font-bold font-mono no-underline uppercase whitespace-nowrap transition-colors ${
              location.pathname === link.to
                ? 'text-maroon border-b-2 border-maroon'
                : 'text-dark/50 hover:text-dark'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <span className="text-[10px] font-mono text-dark/50 hidden lg:inline">🌐 EN ▾</span>
        <span className="pill pill-pink text-[9px]">📁 0</span>
        <Link to="/verify" className="btn-maroon text-[10px] no-underline hidden sm:inline-block py-1.5 px-3">START CHECKUP</Link>
      </div>
    </nav>
  );
}
