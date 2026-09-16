import { useCase } from '../state/CaseContext';

export default function Verify() {
  const { profile, profiles, setProfile } = useCase();

  return (
    <div>
      <div className="tag-bracket text-maroon mb-2">PHASE 01 // APPLICATION PROFILE SELECTION</div>
      <h1 className="text-3xl font-black uppercase mb-2">SELECT APPLICATION TYPE</h1>
      <p className="text-dark/60 mb-8 max-w-2xl text-sm">Choose the official application you are preparing. Dr. Doc will load the exact compliance rules and required document checklist.</p>

      <div className="grid md:grid-cols-2 gap-4">
        {profiles.map((p) => (
          <button
            key={p.id}
            onClick={() => setProfile(p)}
            className={`card-stamp p-5 text-left cursor-pointer transition-all ${
              profile.id === p.id ? 'ring-4 ring-maroon/30' : ''
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <code className="tag-bracket bg-dark text-cream px-2 py-0.5">{p.id}</code>
              {profile.id === p.id && <span className="pill pill-maroon text-[9px]">SELECTED</span>}
            </div>
            <h3 className="font-black text-lg uppercase mb-2">{p.name}</h3>
            <div className="mb-3">
              <div className="text-[9px] font-mono text-dark/50 mb-1">REQUIRED DOCUMENT BUNDLE</div>
              <div className="flex flex-wrap gap-1">
                {p.required.map((r) => (
                  <span key={r} className="pill pill-pink text-[9px]">{r}</span>
                ))}
              </div>
            </div>
            <div className="text-[10px] font-mono text-dark/50">PORTAL MAX FILE LIMIT: {p.maxFileMB} MB</div>
          </button>
        ))}
      </div>
    </div>
  );
}
