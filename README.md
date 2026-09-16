# Dr. Doc

**Document Intelligence Platform**

> Paperwork should never be the reason an application fails.

Dr. Doc is an intelligent document verification and preparation platform that helps users prepare bundles of official documents before submission to government portals, banks, or business registration authorities. It catches missing files, low-quality scans, and cross-document mismatches so no application gets rejected.

---

## Features

- **Application Profile Selection** — Choose your application type (Business Registration, Bank KYC, Commercial Loan, etc.) and get the exact required document checklist and portal file-size limits.
- **Document Upload & Auto-Classification** — Drag-and-drop up to 20 files (PDF, PNG, JPG, WEBP). Files are automatically classified by type (Aadhaar, PAN, GST Certificate, Bank Statement, etc.) using filename heuristics.
- **OCR Extraction** — Inspect extracted fields (name, DOB, ID number, address) per document with a dedicated OCR viewer.
- **Quality Check** — Each document is scored for resolution, blur, format, and file size with visual progress bars.
- **Cross-Document Comparison** — Side-by-side field comparison between any two documents with MATCHED/MISMATCHED status using fuzzy matching.
- **Readiness Dashboard** — A composite readiness score (0–100) combining verification count, quality scores, and issue counts with a required-documents checklist.
- **Issue Tracking** — Aggregated issues (CRITICAL / NEEDS REVIEW) with filtering and one-click fix actions.
- **Document Tools** — Compress, convert, merge PDFs, improve readability, and rename files with a configurable target file-size threshold.
- **Nearby Help Centers** — Directory of real service points (Aadhaar Seva Kendra, CSC, Cyber Cafes) with directions.
- **Final Verification Report** — Formal certificate-style report with decision (READY / ACTION REQUIRED), audit summary, and download/export options.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Routing | React Router DOM 7 |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| State Management | React Context API |
| Linting | Oxlint |
| Language | JavaScript (JSX) |

---

## Project Structure

```
dr-doc/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/
    ├── state/
    │   └── CaseContext.jsx
    ├── components/
    │   ├── Layout.jsx
    │   ├── Navbar.jsx
    │   ├── Sidebar.jsx
    │   └── Ticker.jsx
    └── pages/
        ├── Home.jsx
        ├── Verify.jsx
        ├── Documents.jsx
        ├── OCR.jsx
        ├── QualityCheck.jsx
        ├── Verification.jsx
        ├── CrossCheck.jsx
        ├── Issues.jsx
        ├── Tools.jsx
        ├── Report.jsx
        └── HelpNearby.jsx
```

---

## Routes

| Route | Phase | Page | Purpose |
|---|---|---|---|
| `/` | — | Home | Landing page with hero, case study, and methodology |
| `/verify` | 01 | Verify | Select application profile |
| `/documents` | 02 | Documents | Upload and manage documents |
| `/ocr` | 03 | OCR | View extracted OCR fields per document |
| `/quality-check` | 04 | Quality Check | Score and analyze document quality |
| `/verification` | — | Verification | Readiness dashboard with composite score |
| `/cross-check` | 06 | Cross Check | Compare fields between two documents |
| `/issues` | 07 | Issues | Filterable issue list with severity levels |
| `/tools` | 09 | Tools | Document utility tools (compress, convert, merge) |
| `/report` | 08 | Report | Final verification report / certificate |
| `/help-nearby` | 10 | Help Nearby | Nearby service center directory |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/JackByteBack/dr-doc.git
cd dr-doc
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

---

## Application Profiles

The app supports 4 predefined application profiles, each with its own required documents and file-size limits:

| Profile | Required Documents | File Size Limit |
|---|---|---|
| Universal Forensics v1 | 3 documents | 25 MB |
| Business Registration 2026 | 5 documents | 10 MB |
| Bank KYC v2 | 5 documents | 5 MB |
| Commercial Loan 101 | 4 documents | 15 MB |

---

## How It Works

1. **Select Profile** — Choose your application type on the `/verify` page
2. **Upload Documents** — Drag-and-drop or click to upload up to 20 files on `/documents`
3. **Review OCR** — Check extracted fields on `/ocr`
4. **Quality Check** — Analyze document quality scores on `/quality-check`
5. **Cross-Check** — Compare fields between documents on `/cross-check`
6. **Track Issues** — Review flagged issues on `/issues`
7. **Use Tools** — Fix documents with utility tools on `/tools`
8. **Get Report** — View your final verification report on `/report`

---

## License

MIT
