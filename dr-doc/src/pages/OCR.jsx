import { useCase } from '../state/CaseContext';
import { Eye, FileText } from 'lucide-react';
import { useState } from 'react';

export default function OCR() {
  const { documents } = useCase();
  const [selected, setSelected] = useState(null);

  if (documents.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <div className="border-4 border-dashed border-dark/20 p-12 text-center">
          <Eye size={48} className="mx-auto text-dark/20 mb-4" />
          <div className="font-bold text-lg uppercase mb-2">NO DOCUMENTS UPLOADED YET</div>
          <div className="text-xs text-dark/50">DRAG AND DROP FILES OR CLICK TO UPLOAD.</div>
          <div className="text-[10px] text-dark/40 mt-1">Select a document above to examine its OCR extraction stream.</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="tag-bracket text-maroon mb-2">PHASE 03 // OCR EXTRACTION STREAM</div>
      <h1 className="text-3xl font-black uppercase mb-6">OCR EXTRACTION VIEWER</h1>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <div className="text-[9px] font-mono text-dark/50 mb-2">SELECT DOCUMENT</div>
          {documents.map((doc) => (
            <button
              key={doc.id}
              onClick={() => setSelected(doc)}
              className={`card-stamp p-3 w-full text-left cursor-pointer transition-all ${
                selected?.id === doc.id ? 'ring-4 ring-maroon/30' : ''
              }`}
            >
              <div className="flex items-center gap-2">
                <FileText size={14} />
                <div className="flex-1">
                  <div className="text-xs font-bold truncate">{doc.name}</div>
                  <div className="text-[9px] font-mono text-dark/50">{doc.category}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-2">
          {selected ? (
            <div className="card-stamp p-5">
              <div className="tag-bracket text-maroon mb-3">OCR EXTRACTION — {selected.name}</div>
              <div className="space-y-3">
                {Object.entries(selected.ocrFields).filter(([k]) => k !== 'extractedAt').map(([key, value]) => (
                  <div key={key} className="flex border-b border-dark/10 pb-2">
                    <div className="w-32 text-[9px] font-mono text-dark/50 uppercase">{key.replace(/([A-Z])/g, ' $1')}</div>
                    <div className="text-sm font-bold">{value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-[9px] font-mono text-dark/40">
                EXTRACTED AT: {new Date(selected.ocrFields.extractedAt).toLocaleString()}
              </div>
            </div>
          ) : (
            <div className="card-stamp p-8 text-center text-dark/30 text-sm">
              Select a document to view OCR extraction
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
