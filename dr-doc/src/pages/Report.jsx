import { useCase } from '../state/CaseContext';

export default function Report() {
  const { profile, documents, readinessScore, issues } = useCase();

  return (
    <div>
      <div className="tag-bracket text-maroon mb-2">PHASE 08</div>

      {/* Certificate Card */}
      <div className="card-stamp p-6 max-w-4xl mx-auto mb-6">
        {/* Header */}
        <div className="flex items-start justify-between border-b-2 border-dark pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-dark bg-maroon flex items-center justify-center">
              <span className="text-cream text-[10px] font-bold font-mono leading-tight text-center">DR.<br/>DOC</span>
            </div>
            <div>
              <div className="font-black text-lg uppercase">FINAL VERIFICATION REPORT</div>
              <div className="text-[9px] font-mono text-dark/50">DOCUMENT INTELLIGENCE PLATFORM</div>
            </div>
          </div>
          <div className="text-right text-[9px] font-mono text-dark/50">
            <div>CASE ID: DR-2026-00142</div>
            <div>DATE: {new Date().toLocaleDateString()}</div>
            <div className="mt-1">
              <span className={`pill text-[9px] ${readinessScore >= 80 ? 'pill-green' : 'pill-maroon'}`}>
                {readinessScore >= 80 ? 'READY' : 'ACTION REQUIRED'}
              </span>
            </div>
          </div>
        </div>

        {/* Stat Bar */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: 'APPLICATION', value: profile.name.split(':')[0] },
            { label: 'READINESS SCORE', value: `${readinessScore}/100` },
            { label: 'DOCUMENTS', value: `${documents.length}/20 Files` },
            { label: 'CASE ISSUES', value: `${issues.length} Issues` },
          ].map((stat) => (
            <div key={stat.label} className="border-2 border-dark p-3">
              <div className="text-[8px] font-mono text-dark/50">{stat.label}</div>
              <div className="text-sm font-bold truncate">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Application Decision */}
        <div className={`border-2 border-dark p-4 mb-6 ${readinessScore >= 80 ? 'bg-sage/30' : 'bg-blush/30'}`}>
          <div className="text-[9px] font-mono text-dark/50 mb-1">APPLICATION DECISION</div>
          <div className="flex items-center justify-between">
            <div className="font-black text-2xl uppercase">{readinessScore >= 80 ? 'READY FOR SUBMISSION' : 'ACTION REQUIRED'}</div>
            <span className={`pill ${readinessScore >= 80 ? 'pill-green' : 'pill-maroon'}`}>
              {readinessScore >= 80 ? '✓ APPROVED' : '⚠ PENDING'}
            </span>
          </div>
        </div>

        {/* Document Audit Summary */}
        <div className="mb-6">
          <div className="tag-bracket text-maroon mb-3">DOCUMENT AUDIT SUMMARY</div>
          <table className="w-full text-sm border-2 border-dark">
            <thead>
              <tr className="bg-dark text-cream">
                <th className="text-left py-2 px-3 font-mono text-[9px]">CLASSIFIED TYPE</th>
                <th className="text-left py-2 px-3 font-mono text-[9px]">EXTRACTED CREDENTIALS</th>
                <th className="text-left py-2 px-3 font-mono text-[9px]">PHOTO AUDIT</th>
                <th className="text-left py-2 px-3 font-mono text-[9px]">QUALITY</th>
                <th className="text-left py-2 px-3 font-mono text-[9px]">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {documents.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-4 text-center text-dark/30 text-xs font-mono">
                    NO DOCUMENTS IN CASE FILE
                  </td>
                </tr>
              ) : (
                documents.map((doc) => (
                  <tr key={doc.id} className="border-t border-dark/20">
                    <td className="py-2 px-3 font-bold">{doc.category}</td>
                    <td className="py-2 px-3 text-xs font-mono">{doc.ocrFields.name} · {doc.ocrFields.idNumber}</td>
                    <td className="py-2 px-3 text-xs">{doc.verified ? '✓ Verified' : '— Pending'}</td>
                    <td className="py-2 px-3">
                      <span className={`pill text-[9px] ${doc.qualityScore >= 80 ? 'pill-green' : 'pill-pink'}`}>
                        {doc.qualityScore}/100
                      </span>
                    </td>
                    <td className="py-2 px-3">
                      <span className={`pill text-[9px] ${doc.verified ? 'pill-green' : 'pill-pink'}`}>
                        {doc.verified ? 'VERIFIED' : 'PENDING'}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="border-t-2 border-dark pt-4">
          <p className="text-xs text-dark/60 italic mb-3">
            "Paperwork should never be the reason an application fails. Dr. Doc checks, verifies, and fixes document issues before official submission."
          </p>
          <div className="flex justify-between items-center">
            <div className="text-[9px] font-mono text-dark/40">AUTHORIZED DIGITAL SIGNATURE</div>
            <div className="border-b border-dark/30 w-48" />
          </div>
        </div>
      </div>

      {/* Consolidated PDF */}
      <div className="card-stamp p-5 max-w-4xl mx-auto mb-6">
        <div className="tag-bracket text-maroon mb-2">CONSOLIDATED MASTER APPLICATION PDF</div>
        <p className="text-xs text-dark/60 mb-3">Bundles all verified case documents into one unified, paginated A4 master submission PDF.</p>
        <button className="btn-maroon text-xs w-full">⬇ DOWNLOAD CONSOLIDATED PDF BUNDLE</button>
      </div>

      {/* Action Row */}
      <div className="flex gap-3 max-w-4xl mx-auto">
        <button className="bg-amber-600 text-cream px-4 py-2 text-xs font-mono font-bold border-2 border-dark flex-1 cursor-pointer">
          ▦ EXPORT TO MOBILE VIA QR (30m)
        </button>
        <button className="bg-dark text-cream px-4 py-2 text-xs font-mono font-bold border-2 border-dark flex-1 cursor-pointer">
          🖨 PRINT CERTIFICATE
        </button>
      </div>
    </div>
  );
}
