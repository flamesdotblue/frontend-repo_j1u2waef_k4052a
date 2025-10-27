import Spline from '@splinetool/react-spline';
import { ArrowRight, Upload, ShieldCheck, Sparkles } from 'lucide-react';

export default function HeroSpline({ onUploadClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-80 w-80 bg-gradient-to-tr from-teal-400 via-blue-500 to-fuchsia-500 opacity-30 blur-3xl rounded-full animate-pulse" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-orange-400 opacity-20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8 py-14 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 dark:bg-slate-800/60 backdrop-blur border border-white/20 shadow-sm mb-4">
            <Sparkles className="h-4 w-4 text-fuchsia-500" />
            <span className="text-xs font-medium text-slate-700 dark:text-slate-200">Modern money, made simple</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-tight">
            Spend smarter with a premium, glass-morphic finance hub
          </h1>
          <p className="mt-4 text-slate-700 dark:text-slate-300">
            Securely upload bank statements, auto-categorise transactions, and reveal savings in minutes. UK-friendly, privacy-first, confetti on big wins.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={onUploadClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow hover:brightness-110 transition">
              <Upload className="h-4 w-4" />
              <span className="font-medium">Upload statement</span>
            </button>
            <a href="#learn-more" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/60 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 border border-white/30 hover:bg-white/80 dark:hover:bg-slate-800 transition shadow">
              Learn more
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-500" /> GDPR-friendly</div>
            <div>1 free upload/month</div>
            <div>Pro adds PDF parsing</div>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden bg-white/40 dark:bg-slate-800/60 backdrop-blur border border-white/20 shadow-xl">
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}
