import { PoundSterling, TrendingUp, TrendingDown, PieChart } from 'lucide-react';

function GlassCard({ children }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/40 dark:bg-slate-800/60 backdrop-blur shadow-lg p-5">
      {children}
    </div>
  );
}

export default function KPICards() {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <GlassCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-600 dark:text-slate-400">MTD spend</p>
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">£1,248</p>
            </div>
            <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 text-white">
              <PoundSterling className="h-5 w-5" />
            </div>
          </div>
          <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">vs last month <span className="text-emerald-500">-8%</span></p>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-600 dark:text-slate-400">Savings potential</p>
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">£36/mo</p>
            </div>
            <div className="h-10 w-10 grid place-items-center rounded-xl bg-emerald-500 text-white">
              <TrendingDown className="h-5 w-5" />
            </div>
          </div>
          <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">From utilities and subscriptions</p>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-600 dark:text-slate-400">Top category</p>
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">Groceries</p>
            </div>
            <div className="h-10 w-10 grid place-items-center rounded-xl bg-indigo-500 text-white">
              <PieChart className="h-5 w-5" />
            </div>
          </div>
          <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">£342 this month</p>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-600 dark:text-slate-400">Trend</p>
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">Improving</p>
            </div>
            <div className="h-10 w-10 grid place-items-center rounded-xl bg-pink-500 text-white">
              <TrendingUp className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-2 h-2 rounded-full bg-white/50 overflow-hidden">
            <div className="h-full w-3/5 bg-gradient-to-r from-emerald-400 to-teal-500" />
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
