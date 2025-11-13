// components/sections/HeroCTAKPIImage.tsx
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

type KPI = { label: string; value: string; hint?: string };

const KPIS: KPI[] = [
  { label: "Projects", value: "12+", hint: "case studies & demos" },
  { label: "Datasets", value: "40k+", hint: "rows analysed" },
  { label: "Turnaround", value: "~48h", hint: "mini-engagement" },
];

function KpiChip({ k }: { k: KPI }) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-center">
      <div className="font-heading text-h3 leading-none">{k.value}</div>
      <div className="mt-1 font-body text-small text-slate-400">{k.label}</div>
      {k.hint && <div className="mt-0.5 font-body text-xs text-slate-500">{k.hint}</div>}
    </div>
  );
}

export default function HeroCTAKPIImage() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--surface)]">
      <Container className="py-12 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: copy + CTAs + KPIs */}
          <div>
            <p className="font-heading text-small text-[var(--primary)] tracking-wide uppercase mb-3">
              Data & Growth Lab
            </p>

            <h1 className="font-heading text-h1 font-semibold tracking-tight mb-4">
              Turn your data into decisions that actually drive growth.
            </h1>

            <p className="font-body text-body text-slate-400 mb-6 leading-relaxed">
              Hands-on analytics, visualisation, and automation to help small businesses and professionals turn numbers into action.
            </p>

            <div className="mb-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="primary">Get Started</Button>
              <Button size="lg" variant="secondary">View Projects</Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg">
              {KPIS.map((k) => <KpiChip key={k.label} k={k} />)}
            </div>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg)]">
              <Image
                src="/hero-analytics.jpg"   // put your image in /public
                alt="Analytics dashboard mockup"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* subtle glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 opacity-40 blur-2xl"
              style={{ background: "radial-gradient(closest-side, var(--primary), transparent)" }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
