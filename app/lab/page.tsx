// app/lab/page.tsx
export default function LabPage() {
    return (
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight">Lab</h1>
        <p className="max-w-2xl text-sm text-slate-300">
          This is the playground for interactive tools, dashboards, and small
          experiments. Think forecasting widgets, KPI explorers, and simple
          decision helpers built with real data.
        </p>
  
        <div className="rounded-xl border border-dashed border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-400">
          Nothing live here yet.
          <br />
          First ideas:
          <ul className="mt-2 list-disc pl-5">
            <li>Simple sales or budget projection tool</li>
            <li>KPI explorer on a sample dataset</li>
            <li>Personal habit tracker visualisation</li>
          </ul>
        </div>
      </section>
    );
  }
  