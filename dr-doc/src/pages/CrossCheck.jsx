import { useCase } from '../state/CaseContext';
import { Link } from 'react-router-dom';
import { ShieldAlert, GitCompare } from 'lucide-react';
import { useState } from 'react';

export default function CrossCheck() {
  const { documents } = useCase();
  const [docA, setDocA] = useState(null);
  const [docB, setDocB] = useState(null);

  if (documents.length < 2) {
    return (
      <div>
        <div className="tag-bracket text-maroon mb-2">PHASE 06 // CROSS-DOCUMENT FORENSIC REASONING [MULTI-DOCUMENT ENGINE]</div>
        <h1 className="text-3xl font-black uppercase mb-6">CROSS-DOCUMENT COMPARISON</h1>
        <div className="flex flex-col items-center justify-center py-16">
          <div className="card-stamp p-8 text-center">
            <ShieldAlert size={48} className="mx-auto text-dark/20 mb-4" />
            <div className="font-bold text-lg uppercase mb-2">NO DOCUMENTS IN CASE</div>
            <div className="text-xs text-dark/50 mb-4">Upload at least 2 documents to cross-check name, DOB, photo, gender, and address consistency.</div>
            <div className="flex gap-2 justify-center">
              <Link to="/documents" className="btn-maroon text-xs no-underline">GO TO DOCUMENT INBOX</Link>
              <button className="btn-outline text-xs">LOAD DEMO CASE</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const fields = ['name', 'dob', 'address'];

  return (
    <div>
      <div className="tag-bracket text-maroon mb-2">PHASE 06 // CROSS-DOCUMENT FORENSIC REASONING [MULTI-DOCUMENT ENGINE]</div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-black uppercase">CROSS-DOCUMENT COMPARISON</h1>
        <Link to="/documents" className="btn-maroon text-xs no-underline">+ INGEST MORE FILES</Link>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <div className="text-[9px] font-mono text-dark/50 mb-1">DOCUMENT A</div>
          <select
            className="w-full border-2 border-dark p-2 text-sm font-bold bg-white"
            value={docA?.id || ''}
            onChange={(e) => setDocA(documents.find((d) => d.id === e.target.value))}
          >
            <option value="">Select document...</option>
            {documents.map((d) => (
              <option key={d.id} value={d.id}>{d.name} — {d.category}</option>
            ))}
          </select>
        </div>
        <div>
          <div className="text-[9px] font-mono text-dark/50 mb-1">DOCUMENT B</div>
          <select
            className="w-full border-2 border-dark p-2 text-sm font-bold bg-white"
            value={docB?.id || ''}
            onChange={(e) => setDocB(documents.find((d) => d.id === e.target.value))}
          >
            <option value="">Select document...</option>
            {documents.map((d) => (
              <option key={d.id} value={d.id}>{d.name} — {d.category}</option>
            ))}
          </select>
        </div>
      </div>

      {docA && docB && (
        <div className="card-stamp p-5">
          <div className="tag-bracket text-maroon mb-3">FIELD-BY-FIELD COMPARISON</div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-dark">
                <th className="text-left py-2 font-mono text-[9px] text-dark/50 uppercase">Field</th>
                <th className="text-left py-2 font-mono text-[9px] text-dark/50 uppercase">{docA.name}</th>
                <th className="text-left py-2 font-mono text-[9px] text-dark/50 uppercase">{docB.name}</th>
                <th className="text-left py-2 font-mono text-[9px] text-dark/50 uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {fields.map((field) => {
                const valA = docA.ocrFields[field] || '—';
                const valB = docB.ocrFields[field] || '—';
                const match = valA.toLowerCase().trim() === valB.toLowerCase().trim() ||
                  valA.toLowerCase().includes(valB.toLowerCase().split(' ')[0]) ||
                  valB.toLowerCase().includes(valA.toLowerCase().split(' ')[0]);
                return (
                  <tr key={field} className={`border-b border-dark/10 ${match ? 'bg-sage/20' : 'bg-blush/30'}`}>
                    <td className="py-2 font-mono text-xs uppercase">{field}</td>
                    <td className="py-2">{valA}</td>
                    <td className="py-2">{valB}</td>
                    <td className="py-2">
                      <span className={`pill text-[9px] ${match ? 'pill-green' : 'pill-pink'}`}>
                        {match ? 'MATCHED ✓' : 'MISMATCH ✕'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
