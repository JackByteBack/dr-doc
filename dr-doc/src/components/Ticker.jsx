export default function Ticker() {
  const text = 'DOCUMENT INTELLIGENCE · OCR ANALYSIS · DOCUMENT CLASSIFICATION · CROSS-DOCUMENT VERIFICATION · QUALITY CHECK · APPLICATION READINESS · EVIDENCE REVIEW · DOCUMENT PREPARATION · RECHECK ·';
  return (
    <div className="ticker-strip">
      <div className="ticker-content font-mono text-xs tracking-widest">
        <span>{text.repeat(4)}</span>
      </div>
    </div>
  );
}
