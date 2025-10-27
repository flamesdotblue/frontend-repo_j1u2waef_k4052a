import { useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSpline from './components/HeroSpline';
import UploadZone from './components/UploadZone';
import KPICards from './components/KPICards';

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400">
        <p>© {new Date().getFullYear()} SpendWise. Built for privacy-first personal finance.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white">Terms</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const uploadRef = useRef(null);

  const scrollToUpload = () => {
    uploadRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 text-slate-900 dark:text-white">
      <Navbar />
      <main>
        <HeroSpline onUploadClick={scrollToUpload} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <KPICards />
        </div>
        <div ref={uploadRef}>
          <UploadZone />
        </div>

        <section className="py-14" id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3">
            {[{
              title: 'Auto-categorised spending',
              desc: 'Groceries, Transport, Dining, and more — organised instantly to help you see where money goes.',
            }, {
              title: 'Smart savings insights',
              desc: 'Spot expensive plans and find cheaper alternatives for subscriptions and utilities.',
            }, {
              title: 'Budgets and alerts',
              desc: 'Create monthly category budgets and get gentle nudges at 80% usage.',
            }].map((f, i) => (
              <div key={i} className="rounded-2xl border border-white/20 bg-white/40 dark:bg-slate-800/60 backdrop-blur shadow-lg p-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 mb-4" />
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
