import { Link } from 'react-router-dom';
import Ticker from '../components/Ticker';
import { FileText, Link2, Layers } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="grid lg:grid-cols-2 gap-12 p-8 lg:p-12 max-w-[1400px] mx-auto items-center">
        <div className="flex flex-col justify-center">
          <span className="pill pill-dark mb-5 self-start">● DR. DOC · DOCUMENT INTELLIGENCE</span>
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black uppercase leading-[0.88] tracking-tight mb-6">
            YOUR DOCUMENTS.<br />
            <span className="text-maroon">UNDER</span><br />
            EXAMINATION.
          </h1>
          <p className="text-dark/70 mb-8 max-w-lg text-base leading-relaxed">
            Upload your documents. Dr. Doc identifies, extracts, verifies and cross-checks them before submission. No rejected applications due to missing files or name mismatches.
          </p>
          <div className="flex gap-4 mb-10">
            <Link to="/verify" className="btn-maroon text-sm no-underline px-6 py-3">START A DOCUMENT CHECKUP →</Link>
            <Link to="/documents" className="btn-outline text-sm no-underline px-6 py-3">📁 INBOX (0/20)</Link>
          </div>
          <div className="grid grid-cols-3 gap-4 text-[11px] font-mono">
            <div className="border-2 border-dark p-3"><div className="font-bold mb-1">100% AUTOMATED</div><div className="text-dark/50">Multi-Doc Classification</div></div>
            <div className="border-2 border-dark p-3"><div className="font-bold mb-1">CROSS-DOCUMENT</div><div className="text-dark/50">Inconsistency Detection</div></div>
            <div className="border-2 border-dark p-3"><div className="font-bold mb-1">IN-LINE FIX</div><div className="text-dark/50">Compression & Tools</div></div>
          </div>
        </div>

        {/* Evidence Board */}
        <div className="card-stamp p-0 relative">
          <div className="flex items-center justify-between border-b-2 border-dark px-5 py-3">
            <span className="tag-bracket text-dark/70">EVIDENCE DESK // DR-2026-00142</span>
            <span className="tag-bracket text-dark/70">LIVE ANALYSIS BOARD</span>
          </div>
          <div className="p-6 relative min-h-[340px]">
            {/* Aadhaar Card - back left */}
            <div className="absolute top-4 left-4 w-[220px] bg-white border-2 border-dark p-3 z-10" style={{ transform: 'rotate(-3deg)' }}>
              <div className="flex justify-between items-start mb-1">
                <span className="text-[8px] font-mono text-dark/50 uppercase">Identity</span>
                <span className="pill pill-green text-[8px] py-0 px-1.5">VERIFIED</span>
              </div>
              <div className="text-[10px] font-mono text-dark/60 mb-0.5">AADHAAR CARD</div>
              <div className="text-xs font-bold">NAME: Ved Gharat</div>
              <div className="text-[9px] font-mono text-dark/40 mt-1">UID: XXXX-XXXX-4912</div>
              {/* Dashed line connector */}
              <svg className="absolute -right-8 top-12 w-16 h-20 pointer-events-none" style={{zIndex: 5}}>
                <path d="M0,10 C30,10 30,40 60,40" stroke="#5C1A1B" strokeWidth="1.5" strokeDasharray="4,3" fill="none"/>
              </svg>
            </div>

            {/* Driving License - back right */}
            <div className="absolute top-2 right-4 w-[210px] bg-white border-2 border-dark p-3 z-20" style={{ transform: 'rotate(2deg)' }}>
              <div className="flex justify-between items-start mb-1">
                <span className="text-[8px] font-mono text-dark/50 uppercase">Identity</span>
                <span className="pill pill-green text-[8px] py-0 px-1.5">VERIFIED</span>
              </div>
              <div className="text-[10px] font-mono text-dark/60 mb-0.5">DRIVING LICENSE</div>
              <div className="text-xs font-bold">Ved Gharat</div>
              <div className="text-[9px] font-mono text-dark/40 mt-1">DL: MH-20260023357</div>
            </div>

            {/* Bank Statement - front center */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[240px] bg-white border-2 border-dark p-3 z-30" style={{ transform: 'translateX(-50%) rotate(-1deg)' }}>
              <div className="flex justify-between items-start mb-1">
                <span className="text-[8px] font-mono text-dark/50 uppercase">Address</span>
                <span className="pill pill-green text-[8px] py-0 px-1.5">READY FOR SUBMISSION ✓</span>
              </div>
              <div className="text-[10px] font-mono text-dark/60 mb-0.5">BANK STATEMENT</div>
              <div className="text-xs font-bold">NAME: <span className="text-maroon">Ved Gharat</span></div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[9px] text-dark/50">✓ All Checks Passed</span>
              </div>
              <div className="text-[9px] font-mono text-dark/40 mt-0.5">2.4 MB</div>
            </div>

            {/* Floating tags */}
            <div className="absolute top-8 right-20 z-40">
              <span className="pill pill-pink text-[9px]">EVIDENCE 99%</span>
            </div>
            <div className="absolute bottom-8 right-6 z-40">
              <span className="pill pill-green text-[9px]">MATCH ✓</span>
            </div>
          </div>
          {/* Bottom bar */}
          <div className="border-t-2 border-dark px-5 py-3 flex items-center justify-between">
            <span className="pill pill-pink text-[9px]">COMPATIBLE (Middle Name) ✓</span>
            <span className="text-[10px] font-mono text-dark/50">READINESS SCORE: 100 / 100 &nbsp;&nbsp; READY FOR SUBMISSION</span>
          </div>
        </div>
      </section>

      <Ticker />

      {/* Section 01 — Case Study */}
      <section className="bg-cream-dark py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="tag-bracket text-maroon mb-3">[ SECTION 01 // CASE STUDY ]</div>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-10 leading-tight max-w-4xl">PAPERWORK SHOULD NOT BE THE REASON AN APPLICATION FAILS.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'MISSING DOCUMENT', desc: 'Portals reject applications instantly when a single required PDF or GST certificate is forgotten. Dr. Doc checks completeness against exact application profiles.', icon: FileText },
              { num: '02', title: 'NAME MISMATCH', desc: '"Rahul Kumar" vs "R. Kumar" across PAN and Bank statements cause silent delays and manual rejections. Dr. Doc flags cross-document inconsistencies before submission.', icon: Link2 },
              { num: '03', title: 'WRONG / LOW-QUALITY FILE', desc: 'Blurry scans, incorrect PNG formats, or files exceeding strict 10MB portal size limits. Dr. Doc inspects text visibility and provides instant built-in tools to fix them.', icon: Layers },
            ].map((card) => (
              <div key={card.num} className="card-stamp p-6 bg-cream">
                <div className="pill pill-pink text-[10px] mb-4 self-start">{card.num}</div>
                <div className="icon-chip mb-4"><card.icon size={20} /></div>
                <h3 className="font-black text-xl uppercase mb-3">{card.title}</h3>
                <p className="text-sm text-dark/60 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 02 — Examination Methodology */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="tag-bracket text-maroon mb-3">[ SECTION 02 // EXAMINATION METHODOLOGY ]</div>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-10">HOW DR. DOC WORKS</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {[
              { label: 'UPLOAD', desc: 'Drag multiple files' },
              { label: 'CLASSIFY', desc: 'Detect doc types' },
              { label: 'EXTRACT', desc: 'OCR key fields' },
              { label: 'VERIFY', desc: 'Quality & rules' },
              { label: 'CROSS-CHECK', desc: 'Compare names' },
              { label: 'FIX', desc: 'Compress/replace' },
              { label: 'RECHECK', desc: 'Re-eval score' },
              { label: 'READY', desc: 'Final case report' },
            ].map((step, i) => (
              <div key={i} className="card-stamp p-4 text-center bg-cream">
                <div className="text-3xl font-black text-maroon mb-2">{String(i + 1).padStart(2, '0')}</div>
                <div className="text-xs font-bold uppercase mb-1">{step.label}</div>
                <div className="text-[10px] font-mono text-dark/50">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03 — Automated Ingestion */}
      <section className="bg-cream-dark py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="tag-bracket text-maroon mb-3">[ SECTION 03 // AUTOMATED INGESTION ]</div>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-10">SMART DOCUMENT CLASSIFICATION</h2>
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-start">
            <div className="card-stamp p-5 bg-cream">
              <div className="tag-bracket text-dark/60 mb-4">BEFORE: UNORGANIZED FILES</div>
              <div className="space-y-2">
                {['IMG_2837.png', 'scan001.pdf', 'document_final.pdf', 'photo.jpg', 'aadhaar_new.pdf', 'bank_statement.pdf'].map((f, i) => (
                  <div key={i} className="flex justify-between items-center text-xs font-mono border border-dark/20 p-2.5 bg-white">
                    <span>{f}</span>
                    <span className="pill pill-pink text-[8px]">UNKNOWN</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center py-8">
              <div className="bg-dark text-cream px-5 py-3 text-sm font-mono font-bold">↓ AI EXAMINATION ↓</div>
            </div>
            <div className="card-stamp p-5 bg-cream">
              <div className="tag-bracket text-dark/60 mb-4">AFTER: AUTOMATIC CASE CATEGORIZATION</div>
              <div className="space-y-3">
                <div className="border-2 border-dark/20 bg-white p-4">
                  <div className="text-[10px] font-mono text-dark/50 mb-1">IDENTITY CATEGORY</div>
                  <div className="text-sm font-bold">Aadhaar Card · PAN Card · Passport</div>
                </div>
                <div className="border-2 border-dark/20 bg-white p-4">
                  <div className="text-[10px] font-mono text-dark/50 mb-1">ADDRESS PROOF</div>
                  <div className="text-sm font-bold">Electricity Bill · Bank Statement</div>
                </div>
                <div className="border-2 border-dark/20 bg-white p-4">
                  <div className="text-[10px] font-mono text-dark/50 mb-1">BUSINESS & PERSONAL</div>
                  <div className="text-sm font-bold">GST Certificate · Passport Photograph</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04 — Cross-Document Reasoning */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="tag-bracket text-maroon mb-3">[ SECTION 04 // CROSS-DOCUMENT REASONING ]</div>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-10">CROSS-DOCUMENT INTELLIGENCE</h2>
          <div className="card-stamp p-6 bg-cream">
            <div className="grid md:grid-cols-3 gap-4 mb-5">
              {[
                { doc: 'PAN Card', name: 'Ved Gharat', matched: false },
                { doc: 'Aadhaar Card', name: 'Ved Nishad Gharat', matched: false },
                { doc: 'Driving License', name: 'Ved Gharat', matched: true },
              ].map((item, i) => (
                <div key={i} className={`border-2 border-dark p-4 ${item.matched ? 'bg-sage/40' : 'bg-white'}`}>
                  <div className="text-[10px] font-mono text-dark/50 mb-1">{item.doc}</div>
                  <div className="text-sm font-bold font-mono">{item.name}</div>
                </div>
              ))}
            </div>
            <div className="bg-dark text-cream px-5 py-3 flex items-center justify-between text-xs font-mono">
              <span>⚠ CASE FINDING: POTENTIAL NAME MISMATCH DETECTED: COMPATIBLE (Middle Name) ✓</span>
              <span className="underline cursor-pointer">VIEW RELATIONSHIP MATRIX →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05 — Integrated Resolution */}
      <section className="bg-cream-dark py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="tag-bracket text-maroon mb-3">[ SECTION 05 // INTEGRATED RESOLUTION ]</div>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-10">FIX, DON'T JUST FLAG.</h2>
          <div className="grid grid-cols-5 gap-4">
            {[
              { num: '01', label: 'DETECT', desc: 'File size exceeds portal limit' },
              { num: '02', label: 'WHY?', desc: 'Portal caps attachments at 10 MB' },
              { num: '03', label: 'ACTION', desc: 'Compress PDF below limit' },
              { num: '04', label: 'TOOL', desc: 'Click "COMPRESS NOW"', dark: true },
              { num: '05', label: 'RECHECK', desc: 'Ready for Submission ✓', maroon: true },
            ].map((step) => (
              <div key={step.num} className={`card-stamp p-5 text-center ${step.maroon ? 'bg-maroon text-cream border-maroon' : step.dark ? 'bg-dark text-cream border-dark' : 'bg-cream'}`}>
                <div className="text-sm font-mono font-bold mb-1">{step.num} {step.label}</div>
                <div className="text-[11px] font-mono opacity-80">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 px-8 text-center">
        <div className="pill pill-dark mb-4 self-center mx-auto">SUBMIT WITH CONFIDENCE</div>
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-5">GET READY BEFORE YOU SUBMIT.</h2>
        <p className="text-dark/60 mb-8 max-w-lg mx-auto text-base">Avoid unnecessary delays and rejected applications. Check your document bundle now.</p>
        <div className="flex gap-4 justify-center">
          <Link to="/verify" className="btn-maroon text-base no-underline px-8 py-3">START VERIFICATION →</Link>
          <Link to="/documents" className="btn-outline text-base no-underline px-8 py-3">📁 OPEN DOCUMENT INBOX</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-cream py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full border-2 border-cream/30 bg-maroon flex items-center justify-center">
                  <span className="text-cream text-[9px] font-bold font-mono leading-tight text-center">DR.<br/>DOC</span>
                </div>
                <div>
                  <div className="font-bold text-sm">DR. DOC</div>
                  <div className="text-[9px] font-mono text-cream/40 uppercase tracking-widest">DOCUMENT INTELLIGENCE</div>
                </div>
              </div>
              <div className="text-xs text-cream/50 leading-relaxed mb-3">DR. DOC — Intelligent Document Verification Platform</div>
              <span className="pill pill-green text-[9px]">● SYSTEM STATUS: BACKEND ONLINE</span>
            </div>
            <div>
              <div className="text-[10px] font-mono text-cream/40 uppercase mb-3 tracking-widest">WORKSPACES</div>
              <div className="space-y-2 text-sm text-cream/70">
                {['VERIFY', 'DOCUMENTS', 'OCR', 'QUALITY CHECK', 'TOOLS', 'CROSS-CHECK'].map((w) => (
                  <div key={w} className="font-mono text-xs">{w}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-cream/40 uppercase mb-3 tracking-widest">SECURITY ARCHITECTURE</div>
              <div className="space-y-2 text-sm text-cream/70">
                {['Privacy Policy', 'Terms of Service', 'Security Architecture', 'Our Philosophy'].map((w) => (
                  <div key={w} className="text-xs">{w}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-cream/40 uppercase mb-3 tracking-widest">STATION INFO</div>
              <div className="space-y-2 text-xs font-mono text-cream/70">
                <div>TERMINAL: DOC-SEC-01</div>
                <div>BUILD: 2026.09.01-PROD</div>
                <div>SESSION: ACTIVE</div>
              </div>
            </div>
          </div>
          <div className="border-t border-cream/20 pt-5 flex flex-wrap justify-between items-center text-xs text-cream/40">
            <span>© 2026 DR. DOC. All rights reserved.</span>
            <span className="flex items-center gap-2">
              <span>Privacy Policy</span>
              <span>·</span>
              <span>Terms of Service</span>
              <span>·</span>
              <span>⚡ Admin Portal</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
