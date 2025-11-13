// app/about/page.tsx
import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

type Stat = { label: string; value: string; hint?: string };
type Tool = { name: string; level?: "basic" | "intermediate" | "advanced" };

const STATS: Stat[] = [
  { label: "Years in retail analytics", value: "10+" },
  { label: "Projects delivered", value: "40+" },
  { label: "Turnaround (mini-gigs)", value: "~48h", hint: "typical" },
];

const SKILLS: string[] = [
  "Analytics & BI", "Forecasting", "Merchandise Planning",
  "Dashboards (Power BI)", "Excel/VBA Automation", "Python (pandas)",
  "SQL", "Data Modeling (facts/dims)", "React/Next.js",
];

const TOOLS: Tool[] = [
  { name: "Python (pandas)", level: "advanced" },
  { name: "Power BI / DAX", level: "advanced" },
  { name: "SQL Server / Postgres", level: "advanced" },
  { name: "Excel / VBA", level: "advanced" },
  { name: "Next.js / React", level: "intermediate" },
  { name: "Tailwind CSS", level: "intermediate" },
];

const TIMELINE = [
  { year: "2025", title: "Data & Growth Lab", detail: "Personal platform for case studies, playbooks, and client work." },
  { year: "2023-2024", title: "Planning & Automation", detail: "Built OTB tools, stock allocation logic, weekly performance packs." },
  { year: "2018-2022", title: "Retail Analytics", detail: "Sales dashboards, WOC, sell-through, store grading." },
];

function StatChip({ s }: { s: Stat }) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-center">
      <div className="font-heading text-h3 leading-none">{s.value}</div>
      <div className="mt-1 font-body text-small text-slate-400">{s.label}</div>
      {s.hint && <div className="mt-0.5 font-body text-xs text-slate-500">{s.hint}</div>}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-[color:rgb(0_0_0/0.05)] px-2 py-0.5 text-xs text-slate-500 dark:bg-[color:rgb(255_255_255/0.08)]">
      {children}
    </span>
  );
}

function Level({ level }: { level?: Tool["level"] }) {
  const map: Record<string, string> = {
    advanced: "bg-[color:rgb(34_197_94/0.15)] text-[color:rgb(21_128_61)] dark:text-[color:rgb(187_247_208)]",
    intermediate: "bg-[color:rgb(59_130_246/0.15)] text-[color:rgb(30_64_175)] dark:text-[color:rgb(191_219_254)]",
    basic: "bg-[color:rgb(234_179_8/0.15)] text-[color:rgb(113_63_18)] dark:text-[color:rgb(254_240_138)]",
  };
  if (!level) return null;
  return <span className={`rounded px-1.5 py-0.5 text-[10px] ${map[level]}`}>{level}</span>;
}

export default function AboutPage() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <Container className="py-10">
        {/* Header */}
        <header className="grid gap-8 md:grid-cols-[1fr_280px] md:items-start">
          <div>
            <p className="font-heading text-small uppercase tracking-wide text-[var(--primary)] mb-2">
              About
            </p>
            <h1 className="font-heading text-h1 font-semibold tracking-tight mb-4">
              I turn messy data into decisions that move the needle.
            </h1>
            <p className="font-body text-body text-slate-400 leading-relaxed">
              I’m a data analyst and merchandise planner focused on practical outcomes: clearer dashboards,
              tighter forecasts, and leaner ops. I publish playbooks and case studies, and take on compact
              gigs where a sharp analysis or small tool makes a big difference.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button as="link" href="/projects" variant="primary">View Projects</Button>
              <Button as="link" href="/blog" variant="secondary">Read the Blog</Button>
              <Button as="link" href="/contact" variant="ghost">Work with me</Button>
            </div>
          </div>

          {/* Portrait / Placeholder */}
          <div className="justify-self-end w-full max-w-[280px]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              {/* Replace with your image in /public/about.jpg */}
              <Image src="/hero-analytics.jpg" alt="Portrait" fill className="object-cover" />
            </div>
          </div>
        </header>

        {/* Stats */}
        <section className="mt-10">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {STATS.map((s) => <StatChip key={s.label} s={s} />)}
          </div>
        </section>

        {/* Skills & Tools */}
        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="font-heading text-h3 font-semibold mb-2">Core skills</h2>
            <p className="font-body text-small text-slate-400 mb-3">
              What I use weekly across planning, analytics, and automation.
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s) => <Pill key={s}>{s}</Pill>)}
            </div>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="font-heading text-h3 font-semibold mb-2">Tools</h2>
            <p className="font-body text-small text-slate-400 mb-3">
              Main stack for delivery. Level is rough and practical.
            </p>
            <ul className="space-y-2">
              {TOOLS.map((t) => (
                <li key={t.name} className="flex items-center justify-between rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2">
                  <span className="text-sm">{t.name}</span>
                  <Level level={t.level} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Approach */}
        <section className="mt-12 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <h2 className="font-heading text-h3 font-semibold mb-3">Approach</h2>
          <ol className="ml-5 list-decimal space-y-2 font-body text-small text-slate-400">
            <li><span className="text-[var(--text)] font-medium">Clarify the goal.</span> Define the smallest valuable outcome.</li>
            <li><span className="text-[var(--text)] font-medium">Model cleanly.</span> Facts/dims, clear metric definitions, single source of truth.</li>
            <li><span className="text-[var(--text)] font-medium">Visualise for action.</span> Fewer charts, sharper comparisons, KPIs that matter.</li>
            <li><span className="text-[var(--text)] font-medium">Automate the boring.</span> Refreshes, exports, and alerts where it helps.</li>
            <li><span className="text-[var(--text)] font-medium">Ship, measure, iterate.</span> Tight loops over big rewrites.</li>
          </ol>
        </section>

        {/* Timeline */}
        <section className="mt-12">
          <h2 className="font-heading text-h3 font-semibold mb-4">Timeline</h2>
          <div className="space-y-3">
            {TIMELINE.map((t) => (
              <div key={t.year} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                <div className="text-xs text-slate-400">{t.year}</div>
                <div className="font-heading text-h4 font-semibold">{t.title}</div>
                <div className="font-body text-small text-slate-400">{t.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="font-heading text-h3 font-semibold">Have a small project or a sticky metric?</h3>
                <p className="mt-1 font-body text-small text-slate-400">
                  I take concise, well-scoped gigs. Send a brief and I’ll reply with options.
                </p>
              </div>
              <div className="flex gap-3">
                <Button as="link" href="/contact" variant="primary">Get in touch</Button>
                <Button as="link" href="/projects" variant="secondary">See case studies</Button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
