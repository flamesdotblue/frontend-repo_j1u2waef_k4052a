import { useRef, useState } from 'react';
import { Upload, FileText, FileSpreadsheet, FileArchive, AlertTriangle, CheckCircle2 } from 'lucide-react';

const ACCEPT = '.csv,.xlsx,.xls,.pdf';

export default function UploadZone() {
  const inputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('idle'); // idle | uploading | success | error

  const simulateUpload = (f) => {
    setStatus('uploading');
    setProgress(0);
    const total = 100;
    let current = 0;
    const timer = setInterval(() => {
      current += 5 + Math.random() * 10;
      setProgress(Math.min(total, Math.round(current)));
      if (current >= total) {
        clearInterval(timer);
        setStatus('success');
      }
    }, 120);
  };

  const handleFiles = (files) => {
    if (!files || files.length === 0) return;
    const f = files[0];
    setFile(f);
    simulateUpload(f);
  };

  return (
    <section className="py-8" id="upload">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(e) => { e.preventDefault(); setDragActive(false); handleFiles(e.dataTransfer.files); }}
          className={`relative rounded-2xl border border-white/20 bg-white/40 dark:bg-slate-800/60 backdrop-blur shadow-xl p-6 sm:p-10 transition ${dragActive ? 'ring-2 ring-teal-400' : ''}`}
        >
          <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-40 bg-gradient-to-br from-teal-500/10 via-blue-500/10 to-fuchsia-500/10" />
          <div className="relative z-10 grid sm:grid-cols-[auto,1fr] gap-6 items-center">
            <div className="h-16 w-16 grid place-items-center rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 text-white shadow-lg">
              <Upload className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Drag & drop your bank statement</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">We support PDF, CSV, and Excel. Your data stays private and you can delete it anytime.</p>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <button
                  onClick={() => inputRef.current?.click()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow hover:brightness-110 transition">
                  <Upload className="h-4 w-4" />
                  <span>Choose file</span>
                </button>
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <FileText className="h-4 w-4" />
                  <FileSpreadsheet className="h-4 w-4" />
                  <FileArchive className="h-4 w-4" />
                  <span>PDF, CSV, XLSX</span>
                </div>
              </div>
              <input
                ref={inputRef}
                type="file"
                accept={ACCEPT}
                className="hidden"
                onChange={(e) => handleFiles(e.target.files)}
              />
            </div>
          </div>

          {status !== 'idle' && (
            <div className="relative z-10 mt-6">
              <div className="flex items-center justify-between text-sm mb-2">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  {status === 'success' ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                  )}
                  <span>{file ? file.name : 'Processing…'}</span>
                </div>
                <span className="text-slate-600 dark:text-slate-300">{progress}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/40 dark:bg-slate-700 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${status === 'success' ? 'from-emerald-500 to-teal-500' : 'from-teal-500 to-blue-600'}`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              {status === 'success' && (
                <p className="mt-3 text-sm text-emerald-600 dark:text-emerald-400">Upload complete. Parsing and insights ready on Pro.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
