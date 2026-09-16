import { useRef, useState } from 'react';
import { useCase } from '../state/CaseContext';
import { Upload, FileText, X, Check } from 'lucide-react';

export default function Documents() {
  const { documents, addDocuments, removeDocument, verifyDocument, profile } = useCase();
  const fileInput = useRef();
  const [dragOver, setDragOver] = useState(false);

  const handleFiles = (files) => {
    const arr = Array.from(files).filter((f) =>
      ['application/pdf', 'image/png', 'image/jpeg', 'image/webp'].includes(f.type)
    );
    if (arr.length > 0) addDocuments(arr);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div>
      <div className="tag-bracket text-maroon mb-2">PHASE 02 // DOCUMENT INTAKE DESK [20 MAX]</div>
      <h1 className="text-3xl font-black uppercase mb-2">DOCUMENT INBOX</h1>
      <p className="text-dark/60 mb-6 max-w-2xl text-sm">Upload all documents required for your application. Dr. Doc automatically analyzes, classifies, and verifies each file.</p>

      <div
        onDrop={onDrop}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        className={`border-3 border-dashed p-12 text-center mb-6 transition-colors cursor-pointer ${
          dragOver ? 'border-maroon bg-blush/30' : 'border-dark/30'
        }`}
        onClick={() => fileInput.current?.click()}
      >
        <Upload size={40} className="mx-auto text-dark/30 mb-3" />
        <div className="font-bold text-lg uppercase mb-1">DRAG & DROP YOUR FILES HERE</div>
        <div className="text-xs text-dark/50 mb-4">Upload up to 20 documents simultaneously (PDF, PNG, JPG, WEBP). Auto-classifies and audits immediately.</div>
        <button className="btn-maroon text-xs" onClick={(e) => { e.stopPropagation(); fileInput.current?.click(); }}>
          UPLOAD (MAX 20)
        </button>
        <input ref={fileInput} type="file" multiple accept=".pdf,.png,.jpg,.jpeg,.webp" className="hidden" onChange={(e) => handleFiles(e.target.files)} />
      </div>

      <div className="text-[10px] font-mono text-dark/40 mb-3">
        Active Profile: {profile.name} · Max file: {profile.maxFileMB}MB · {documents.length}/20 files
      </div>

      {documents.length > 0 && (
        <div className="space-y-2">
          {documents.map((doc) => (
            <div key={doc.id} className="card-stamp p-3 flex items-center gap-3">
              <div className="icon-chip"><FileText size={16} /></div>
              <div className="flex-1">
                <div className="font-bold text-sm">{doc.name}</div>
                <div className="text-[9px] font-mono text-dark/50">{doc.category} · {doc.type} · {(doc.size / 1024).toFixed(0)} KB</div>
              </div>
              <span className={`pill text-[9px] ${doc.verified ? 'pill-green' : 'pill-pink'}`}>
                {doc.verified ? '✓ VERIFIED' : doc.category}
              </span>
              <div className="flex gap-1">
                {!doc.verified && (
                  <button onClick={() => verifyDocument(doc.id)} className="icon-chip cursor-pointer hover:bg-sage transition-colors">
                    <Check size={14} />
                  </button>
                )}
                <button onClick={() => removeDocument(doc.id)} className="icon-chip cursor-pointer hover:bg-blush transition-colors">
                  <X size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
