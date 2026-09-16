import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CaseProvider } from './state/CaseContext';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Home from './pages/Home';
import Verify from './pages/Verify';
import Documents from './pages/Documents';
import OCR from './pages/OCR';
import QualityCheck from './pages/QualityCheck';
import Verification from './pages/Verification';
import CrossCheck from './pages/CrossCheck';
import Issues from './pages/Issues';
import Tools from './pages/Tools';
import HelpNearby from './pages/HelpNearby';
import Report from './pages/Report';

export default function App() {
  return (
    <CaseProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/verify" element={<Verify />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/ocr" element={<OCR />} />
              <Route path="/quality-check" element={<QualityCheck />} />
              <Route path="/verification" element={<Verification />} />
              <Route path="/cross-check" element={<CrossCheck />} />
              <Route path="/issues" element={<Issues />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/help-nearby" element={<HelpNearby />} />
              <Route path="/report" element={<Report />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </CaseProvider>
  );
}
