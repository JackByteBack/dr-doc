import { useCase } from '../state/CaseContext';
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Issues() {
  const { documents, issues } = useCase();
  const [filter, setFilter] = useState('ALL');

  const allIssues = [
    ...issues,
    ...documents.filter((d) => d.qualityScore < 80).map((d) => ({
      severity: 'NEEDS REVIEW',
      desc: `${d.name} has low quality score (${d.qualityScore}/100)`,
      doc: d.name,
    })),
    ...documents.filter((d) => !d.verified).map((d) => ({
      severity: 'CRITICAL',
      desc: `${d.name} has not been verified`,
      doc: d.name,
    })),
  ];

  const filtered = filter === 'ALL' ? allIssues : allIssues.filter((i) => i.severity === filter);

  return (
    <div>
      <div className="tag-bracket text-maroon mb-2">PHASE 07 // DOCUMENT AUDIT FINDINGS</div>
      <h1 className="text-3xl font-black uppercase mb-2">CASE ISSUES</h1>
      <p className="text-dark/60 mb-6 text-sm">Review and resolve all flagged discrepancies before submitting your application.</p>

      <div className="flex gap-2 mb-6">
        {['ALL', 'CRITICAL', 'NEEDS REVIEW', 'RESOLVED'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-[10px] font-mono px-3 py-1.5 border-2 border-dark cursor-pointer transition-colors ${
              filter === f ? 'bg-maroon text-cream' : 'bg-white text-dark hover:bg-cream-dark'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="card-stamp p-8 text-center">
          <CheckCircle size={48} className="mx-auto text-sage mb-4" />
          <div className="font-bold text-lg uppercase mb-2">NO ISSUES FOUND IN THIS CATEGORY</div>
          <div className="text-xs text-dark/50">All uploaded documents are fully compliant with application requirements.</div>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((issue, i) => (
            <div key={i} className="card-stamp p-4 flex items-center gap-4">
              <span className={`pill text-[9px] ${
                issue.severity === 'CRITICAL' ? 'bg-maroon text-cream' : 'pill-pink'
              }`}>
                {issue.severity}
              </span>
              <div className="flex-1">
                <div className="text-sm font-bold">{issue.desc}</div>
                <div className="text-[9px] font-mono text-dark/50">Document: {issue.doc}</div>
              </div>
              <button className="btn-outline text-[10px]">FIX</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
