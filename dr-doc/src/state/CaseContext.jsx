import { createContext, useContext, useState } from 'react';

const CaseContext = createContext();

const PROFILES = [
  {
    id: 'UNIVERSAL_FORENSICS_v1',
    name: 'Default: Universal Document Forensics & Ingestion',
    required: ['Identity Proof (PAN/Aadhaar/Passport)', 'Address Proof (Electricity Bill/Statement)', 'Photograph / Photo ID'],
    maxFileMB: 25,
    default: true,
  },
  {
    id: 'BIZ_REG_2026',
    name: 'Business Registration (GST/MSME)',
    required: ['PAN Card', 'Aadhaar Card', 'Bank Statement', 'GST Certificate', 'Photograph'],
    maxFileMB: 10,
  },
  {
    id: 'KYC_BANK_v2',
    name: 'Bank Account & KYC Verification',
    required: ['PAN Card', 'Aadhaar Card', 'Passport', 'Electricity Bill', 'Photograph'],
    maxFileMB: 5,
  },
  {
    id: 'LOAN_COMM_101',
    name: 'Commercial Loan Application',
    required: ['PAN Card', 'Aadhaar Card', 'Bank Statement', 'GST Certificate'],
    maxFileMB: 15,
  },
];

export function CaseProvider({ children }) {
  const [profile, setProfile] = useState(PROFILES[0]);
  const [documents, setDocuments] = useState([]);
  const [issues, setIssues] = useState([]);

  const addDocuments = (files) => {
    const newDocs = files.map((file, i) => ({
      id: `doc-${Date.now()}-${i}`,
      file,
      name: file.name,
      type: file.type,
      size: file.size,
      category: classifyFile(file.name, file.type),
      ocrFields: generateMockOCR(file.name),
      qualityScore: Math.floor(Math.random() * 30) + 70,
      status: 'pending',
      verified: false,
    }));
    setDocuments((prev) => [...prev, ...newDocs].slice(0, 20));
  };

  const removeDocument = (id) => {
    setDocuments((prev) => prev.filter((d) => d.id !== id));
  };

  const verifyDocument = (id) => {
    setDocuments((prev) =>
      prev.map((d) => (d.id === id ? { ...d, status: 'verified', verified: true } : d))
    );
  };

  const readinessScore = documents.length === 0 ? 0 : Math.min(100, Math.round(
    (documents.filter((d) => d.verified).length / Math.max(documents.length, 1)) * 60 +
    (documents.reduce((a, d) => a + d.qualityScore, 0) / documents.length / 100) * 20 +
    (issues.length === 0 ? 20 : Math.max(0, 20 - issues.length * 5))
  ));

  return (
    <CaseContext.Provider
      value={{
        profile,
        profiles: PROFILES,
        setProfile,
        documents,
        addDocuments,
        removeDocument,
        verifyDocument,
        issues,
        setIssues,
        readinessScore,
      }}
    >
      {children}
    </CaseContext.Provider>
  );
}

export function useCase() {
  return useContext(CaseContext);
}

function classifyFile(name, type) {
  const n = name.toLowerCase();
  if (n.includes('aadhaar') || n.includes('aadhar')) return 'Aadhaar Card';
  if (n.includes('pan')) return 'PAN Card';
  if (n.includes('passport')) return 'Passport';
  if (n.includes('bank') || n.includes('statement')) return 'Bank Statement';
  if (n.includes('gst')) return 'GST Certificate';
  if (n.includes('electric') || n.includes('electricity') || n.includes('bill')) return 'Electricity Bill';
  if (n.includes('photo') || n.includes('img') || n.includes('pic')) return 'Photograph';
  if (n.includes('license') || n.includes('licence') || n.includes('dl')) return 'Driving License';
  if (type?.startsWith('image/')) return 'Image Document';
  return 'Unknown Document';
}

function generateMockOCR(name) {
  return {
    name: 'Ved Gharat',
    dob: '15/08/1995',
    idNumber: 'XXXX-XXXX-' + Math.floor(1000 + Math.random() * 9000),
    address: '123 Main St, Mumbai, Maharashtra 400001',
    extractedAt: new Date().toISOString(),
  };
}
