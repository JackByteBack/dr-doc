import { MapPin, ExternalLink } from 'lucide-react';

const LOCATIONS = [
  {
    category: 'OFFICIAL UIDAI & DOCUMENT CENTER',
    status: 'OPEN',
    name: 'Aadhaar Seva Kendra & Document Facilitation Center',
    address: '12, Ground Floor, Gandhi Nagar, Main Road, Near State Bank, Mumbai - 400001',
    services: ['Aadhaar Name & Address Correction', 'Biometric Update', 'Official Printouts', 'Document Verification'],
    distance: '0.8 km',
  },
  {
    category: 'COMMON SERVICE CENTRE',
    status: 'OPEN',
    name: 'CSC Digital Seva Kendra',
    address: 'Shop 4, Heritage Complex, Linking Road, Bandra West, Mumbai - 400050',
    services: ['PAN Card Application', 'Bank Account Opening', 'Government Forms', 'Photocopy & Scanning'],
    distance: '1.2 km',
  },
  {
    category: 'CYBER CAFE & DOCUMENTATION',
    status: 'OPEN',
    name: 'Apex Cyber Cafe & Legal Documentation',
    address: '23, First Floor, Station Road, Andheri East, Mumbai - 400069',
    services: ['Scanning & Printing', 'Notary Services', 'Affidavit Drafting', 'Passport Photo'],
    distance: '2.1 km',
  },
];

export default function HelpNearby() {
  return (
    <div>
      <div className="tag-bracket text-maroon mb-2">PHASE 10 // FACILITATION DESK</div>
      <h1 className="text-3xl font-black uppercase mb-2">NEARBY HELP CENTERS</h1>
      <p className="text-dark/60 mb-6 text-sm">Locate authorized CSC centers, cyber cafes, and legal notaries near you for scanning, affidavits, and document verification.</p>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search by location or service..."
          className="flex-1 border-2 border-dark p-2 text-sm font-mono bg-white"
        />
        <button className="bg-dark text-cream px-4 py-2 text-xs font-mono font-bold border-2 border-dark flex items-center gap-2 cursor-pointer">
          <MapPin size={14} /> USE CURRENT GPS LOCATION
        </button>
      </div>

      <div className="space-y-4">
        {LOCATIONS.map((loc, i) => (
          <div key={i} className="card-stamp p-5">
            <div className="flex items-start justify-between mb-3">
              <span className="pill pill-dark text-[9px]">{loc.category}</span>
              <span className="pill pill-green text-[9px]">● {loc.status}</span>
            </div>
            <h3 className="font-black text-lg uppercase mb-1">{loc.name}</h3>
            <p className="text-xs text-dark/60 mb-3">{loc.address}</p>
            <div className="mb-3">
              <div className="text-[9px] font-mono text-dark/50 mb-1">SERVICES OFFERED</div>
              <div className="flex flex-wrap gap-1">
                {loc.services.map((s) => (
                  <span key={s} className="pill pill-pink text-[9px]">{s}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between border-t-2 border-dark/10 pt-3">
              <span className="text-xs font-mono font-bold">{loc.distance}</span>
              <a href="#" className="flex items-center gap-1 text-xs font-mono font-bold text-maroon no-underline hover:underline">
                GET DIRECTIONS ↗ <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
