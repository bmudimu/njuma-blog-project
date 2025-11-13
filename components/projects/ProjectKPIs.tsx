// components/projects/ProjectKPIs.tsx
type KPI = { label: string; value: string; hint?: string };

export default function ProjectKPIs({ items }: { items: KPI[] }) {
  if (!items?.length) return null;
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 my-6">
      {items.map((k) => (
        <div key={k.label} className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-center">
          <div className="font-heading text-h3 leading-none">{k.value}</div>
          <div className="mt-1 font-body text-small text-slate-400">{k.label}</div>
          {k.hint && <div className="mt-0.5 font-body text-xs text-slate-500">{k.hint}</div>}
        </div>
      ))}
    </div>
  );
}
