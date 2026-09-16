import { useCase } from '../state/CaseContext';
import { Link } from 'react-router-dom';

export default function Verification() {
  const { profile, documents, readinessScore, issues } = useCase();

  const providedCount = documents.filter((d) => d.verified).length;
  const requiredCount = profile.required.length;

  return (
    <div>
      <div className="tag-bracket text-maroon mb-2">DOCUMENT AUDIT & COMPLIANCE</div>
      <h1 className="text-3xl font-black uppercase mb-2">APPLICATION READINESS</h1>
      <p className="text-dark/60 mb-6 text-sm">Application: {profile.name}</p>

      {/* Score Panel */}
      <div className="card-stamp p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[9px] font-mono text-dark/50">READINESS SCORE</div>
            <div className="text-5xl font-black">{readinessScore}/100</div>
          </div>
          <span className={`pill text-[11px] ${readinessScore >= 80 ? 'pill-green' : readinessScore > 0 ? 'pill-pink' : 'pill-dark'}`}>
            {readinessScore >= 80 ? 'READY' : readinessScore > 0 ? 'IN PROGRESS' : 'NOT EVALUATED'}
          </span>
        </div>
        <Link to="/documents" className="btn-maroon text-xs no-underline inline-block mt-4">⬆ START A DOCUMENT CHECKUP</Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Required Documents Checklist */}
        <div className="card-stamp p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="tag-bracket text-maroon">REQUIRED DOCUMENTS CHECKLIST</div>
            <span className="pill pill-dark text-[9px]">{providedCount} / {requiredCount} DOCS PROVIDED</span>
          </div>
          <div className="space-y-2">
            {profile.required.map((req, i) => {
              const found = documents.some((d) => d.verified && d.category.toLowerCase().includes(req.toLowerCase().split(' ')[0]));
              return (
                <div key={i} className={`flex items-center gap-3 p-2 border-2 ${found ? 'border-sage bg-sage/20' : 'border-blush bg-blush/30'}`}>
                  <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-[10px] ${found ? 'border-sage bg-sage' : 'border-blush bg-blush text-maroon'}`}>
                    {found ? '✓' : '✕'}
                  </span>
                  <span className="text-sm flex-1">{req}</span>
                  <span className={`pill text-[9px] ${found ? 'pill-green' : 'pill-pink'}`}>
                    {found ? 'FOUND' : 'MISSING ✕'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          {/* Verification Summary */}
          <div className="card-stamp p-4">
            <div className="tag-bracket text-maroon mb-3">VERIFICATION SUMMARY</div>
            <div className="space-y-3">
              {[
                { label: 'Document Validity', value: readinessScore },
                { label: 'Document Quality', value: Math.round(documents.reduce((a, d) => a + d.qualityScore, 0) / Math.max(documents.length, 1)) },
                { label: 'Information Consistency', value: readinessScore },
                { label: 'Completeness', value: Math.round((providedCount / Math.max(requiredCount, 1)) * 100) },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-mono text-dark/50">{stat.label}</span>
                    <span className="font-bold">{stat.value}%</span>
                  </div>
                  <div className="w-full bg-cream-dark h-2 border border-dark/20 overflow-hidden">
                    <div className="h-full bg-maroon" style={{ width: `${stat.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Issues */}
          <div className="card-stamp p-4">
            <div className="tag-bracket text-maroon mb-3">ISSUES REQUIRING ATTENTION</div>
            {issues.length === 0 ? (
              <div className="flex items-center gap-2 text-sage">
                <span className="text-lg">✓</span>
                <span className="text-sm font-bold">NO ISSUES FLAGGED</span>
              </div>
            ) : (
              <div className="space-y-2">
                {issues.map((issue, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-maroon">⚠</span>
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
