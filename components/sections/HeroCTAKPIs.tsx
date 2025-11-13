// components/sections/HeroCTAKPIs.tsx
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

type KPI = {
  label: string;
  value: string;
  hint?: string; // optional small caption
};

const KPIS: KPI[] = [
  { label: "Projects", value: "12+", hint: "case studies & demos" },
  { label: "Datasets", value: "40k+", hint: "rows analysed" },
  { label: "Turnaround", value: "~48h", hint: "typical mini-engagement" },
];

function KpiChip({ k }: { k: KPI }) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-center">
      <div className="font-heading text-h3 leading-none">{k.value}</div>
      <div className="mt-1 font-body text-small text-slate-400">{k.label}</div>
      {k.hint ? (
        <div className="mt-0.5 font-body text-xs text-slate-500">{k.hint}</div>
      ) : null}
    </div>
  );
}

export default function HeroCTAKPIs() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--surface)]">
      <Container className="py-16 md:py-20">
        {/* Eyebrow */}
        <p className="font-heading text-small text-[var(--primary)] tracking-wide uppercase mb-3 text-center">
          Welcome to Data & Growth Lab
        </p>

        {/* Headline */}
        <h1 className="font-heading text-h1 font-semibold tracking-tight mb-4 max-w-3xl mx-auto text-center">
          Turn your data into decisions that actually drive growth.
        </h1>

        {/* Subtext */}
        <p className="font-body text-body text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed text-center">
          Hands-on analytics, visualisation, and automation to help small businesses and professionals turn numbers into action.
        </p>

        {/* CTA buttons */}
        <div className="mb-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" variant="primary">Get Started</Button>
          <Button size="lg" variant="secondary">View Projects</Button>
        </div>

        {/* KPI row */}
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          {KPIS.map((k) => (
            <KpiChip key={k.label} k={k} />
          ))}
        </div>

        {/* Background flare */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--primary) 0%, transparent 70%)",
          }}
        />
      </Container>
    </section>
  );
}
