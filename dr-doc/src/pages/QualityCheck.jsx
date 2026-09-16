import { useCase } from '../state/CaseContext';
import { Search, FileText } from 'lucide-react';

export default function QualityCheck() {
  const { documents } = useCase();

  if (documents.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <div className="border-4 border-dashed border-dark/20 p-12 text-center">
          <Search size={48} className="mx-auto text-dark/20 mb-4" />
          <div className="font-bold text-lg uppercase mb-2">NO DOCUMENTS TO CHECK</div>
          <div className="text-xs text-dark/50">Upload documents first to run quality analysis.</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="tag-bracket text-maroon mb-2">PHASE 04 // QUALITY ASSURANCE</div>
      <h1 className="text-3xl font-black uppercase mb-6">QUALITY CHECK</h1>

      <div className="grid gap-4">
        {documents.map((doc) => {
          const score = doc.qualityScore;
          const isGood = score >= 80;
          return (
            <div key={doc.id} className="card-stamp p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-chip"><FileText size={16} /></div>
                <div className="flex-1">
                  <div className="font-bold text-sm">{doc.name}</div>
                  <div className="text-[9px] font-mono text-dark/50">{doc.category} · {doc.type}</div>
                </div>
                <span className={`pill text-[10px] ${isGood ? 'pill-green' : 'pill-pink'}`}>
                  {score}/100
                </span>
              </div>
              <div className="w-full bg-cream-dark h-3 border border-dark/20 overflow-hidden">
                <div
                  className={`h-full transition-all ${isGood ? 'bg-sage' : 'bg-blush'}`}
                  style={{ width: `${score}%` }}
                />
              </div>
              <div className="flex gap-4 mt-3 text-[9px] font-mono text-dark/50">
                <span>RESOLUTION: {score >= 85 ? '✓ PASS' : '✗ LOW'}</span>
                <span>BLUR: {score >= 70 ? '✓ NONE' : '⚠ DETECTED'}</span>
                <span>FORMAT: ✓ {doc.type}</span>
                <span>SIZE: {(doc.size / 1024).toFixed(0)} KB</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
