import { useEffect, useState } from 'react';
import { CreditCard, Sparkles, ShieldCheck, Rocket, Sun, Moon, Crown } from 'lucide-react';

export default function Navbar() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enableDark = stored ? stored === 'dark' : prefersDark || true;
    setDark(enableDark);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/30 dark:bg-slate-900/30 border-b border-white/10 dark:border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-tr from-teal-400 via-blue-500 to-fuchsia-500 shadow-lg">
            <CreditCard className="h-5 w-5 text-white drop-shadow" />
            <Sparkles className="h-4 w-4 text-white absolute -top-1 -right-1" />
          </div>
          <span className="font-semibold tracking-tight text-slate-900 dark:text-white text-lg">SpendWise</span>
          <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Beta</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
          <a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#features">Features</a>
          <a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#security">Privacy</a>
          <a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#pricing">Upgrade</a>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(d => !d)}
            aria-label="Toggle theme"
            className="h-9 w-9 grid place-items-center rounded-xl border border-white/20 bg-white/40 dark:bg-slate-800/60 hover:bg-white/60 dark:hover:bg-slate-800 transition-colors shadow-sm"
          >
            {dark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
          </button>
          <a
            href="#upgrade"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow hover:brightness-110 transition">
            <Crown className="h-4 w-4" />
            <span className="font-medium">Upgrade</span>
          </a>
        </div>
      </nav>
      <div id="security" className="sr-only" aria-hidden>
        <ShieldCheck className="h-0 w-0" />
        <Rocket className="h-0 w-0" />
      </div>
    </header>
  );
}
