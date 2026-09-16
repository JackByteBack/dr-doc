import { useState } from 'react';
import { useCase } from '../state/CaseContext';
import { Upload } from 'lucide-react';

const TOOLS = [
  'COMPRESS PDF / IMAGE',
  'JPG/PNG → PDF',
  'IMAGE FORMAT (WEBP/JPG/PNG)',
  'TXT ↔ PDF',
  'MERGE PDFs',
  'IMPROVE READABILITY',
  'RENAME FILE',
];

const ACTION_LABELS = {
  'COMPRESS PDF / IMAGE': 'COMPRESS FILE BELOW 10 MB',
  'JPG/PNG → PDF': 'CONVERT TO PDF',
  'IMAGE FORMAT (WEBP/JPG/PNG)': 'CONVERT FORMAT',
  'TXT ↔ PDF': 'CONVERT FILE',
  'MERGE PDFs': 'MERGE SELECTED FILES',
  'IMPROVE READABILITY': 'ENHANCE READABILITY',
  'RENAME FILE': 'RENAME FILE',
};

export default function Tools() {
  const { profile } = useCase();
  const [activeTool, setActiveTool] = useState(TOOLS[0]);
  const [threshold, setThreshold] = useState(10);

  return (
    <div>
      <div className="tag-bracket text-maroon mb-2">PHASE 09 // UTILITY SUITE [NODE ENGINE]</div>
      <h1 className="text-3xl font-black uppercase mb-2">DOCUMENT TOOLS</h1>
      <p className="text-dark/60 mb-6 text-sm">Compress PDFs, sharpen low-quality scans, convert image formats, merge documents, and more.</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {TOOLS.map((tool) => (
          <button
            key={tool}
            onClick={() => setActiveTool(tool)}
            className={`text-[10px] font-mono px-3 py-1.5 border-2 border-dark cursor-pointer transition-colors ${
              activeTool === tool ? 'bg-maroon text-cream' : 'bg-white text-dark hover:bg-cream-dark'
            }`}
          >
            {tool}
          </button>
        ))}
      </div>

      <div className="card-stamp p-6">
        <div className="tag-bracket text-dark/50 mb-4">SELECT FILE(S) TO PROCESS (MAX 20 FILES)</div>
        <div className="border-2 border-dashed border-dark/30 p-8 text-center mb-4 cursor-pointer hover:border-maroon transition-colors">
          <Upload size={32} className="mx-auto text-dark/30 mb-2" />
          <div className="text-sm font-bold">⬆ CLICK TO SELECT FILE FROM YOUR COMPUTER</div>
          <div className="text-[9px] text-dark/40 mt-1">Supports PDF, PNG, JPG, WEBP</div>
        </div>

        <div className="mb-4">
          <div className="text-[9px] font-mono text-dark/50 mb-2">TARGET PORTAL FILE SIZE THRESHOLD (MB)</div>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="1"
              max="50"
              value={threshold}
              onChange={(e) => setThreshold(Number(e.target.value))}
              className="flex-1 accent-maroon"
            />
            <span className="text-sm font-mono font-bold w-12 text-right">{threshold} MB</span>
          </div>
          <div className="text-[9px] font-mono text-dark/40 mt-1">Active Profile Limit: {profile.maxFileMB} MB</div>
        </div>

        <button className="btn-maroon text-xs w-full">{ACTION_LABELS[activeTool]}</button>
      </div>
    </div>
  );
}
