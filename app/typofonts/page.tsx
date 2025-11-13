// example usage anywhere
// export default function Hero() {
//   return (
//     <section className="px-4 py-10">
//       <h1 className="font-heading text-h1 font-semibold tracking-tight">
//         Turning data into clarity
//       </h1>
//       <p className="mt-2 font-body text-body text-slate-400 leading-relaxed">
//         I analyse real-world data and share what actually drives results.
//       </p>

//       <div className="mt-6 flex gap-3">
//         <button className="rounded px-4 py-2 font-body text-sm bg-[var(--primary)] text-[color:#0B0F19]">
//           Get started
//         </button>
//         <button className="rounded px-4 py-2 font-body text-sm border border-[var(--border)] text-[var(--text)]">
//           Learn more
//         </button>
//       </div>
//     </section>

    
//   );
// }

// app/type-scale/page.tsx

import Button from "@/components/ui/Button";
export default function TypeScalePage() {
  const Section = ({
    label,
    className,
    desc,
  }: { label: string; className: string; desc?: string }) => (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="text-xs text-slate-400 mb-2">{label}</div>
      <div className={className}>
        Turning data into clarity: practical analysis, clean visuals, simple decisions.
      </div>
      {desc ? <div className="mt-2 text-xs text-slate-500">{desc}</div> : null}
    </div>
  );

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="m-4 p-4">
      <div className="grid gap-4 md:grid-cols-3">
      <Button>Get started</Button>
      <Button variant="secondary">Learn more</Button>
      <Button variant="subtle">View docs</Button>
      <Button variant="ghost">Contact</Button>
      <Button variant="danger">Delete</Button>
      </div>
<div className="grid gap-4 md:grid-cols-3">
      <Button size="sm">Small</Button>
      <Button size="md">Default</Button>
      </div>
      <Button size="lg" fullWidth>Large full width</Button>
<div className="grid gap-4 md:grid-cols-3">
      <Button size="icon" aria-label="Refresh" variant="secondary">
      {/* any icon component */}
      <svg viewBox="0 0 24 24" className="h-5 w-5"><path d="M..." /></svg>
      </Button>
      </div>
<div className="grid gap-4 md:grid-cols-3">
      <Button leftIcon={<span>📊</span>}>Dashboard</Button>
      <Button rightIcon={<span>→</span>} variant="secondary">Read more</Button>

      <Button loading>Saving…</Button>

      <Button as="link" href="/contact" variant="secondary">Work with me</Button>
      </div>
</div>





      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="font-heading text-h2 md:text-h1 font-semibold tracking-tight mb-1">
          Type Scale Cheat Sheet
        </h1>
        <p className="font-body text-small text-slate-400 mb-6">
          Uses your current theme tokens and Tailwind v4 utilities.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <Section
            label="H1 – font-heading text-h1"
            className="font-heading text-h1 font-semibold leading-tight tracking-tight"
            desc="Hero titles, landing headlines."
          />
          <Section
            label="H2 – font-heading text-h2"
            className="font-heading text-h2 font-semibold leading-tight"
            desc="Primary section titles."
          />
          <Section
            label="H3 – font-heading text-h3"
            className="font-heading text-h3 font-semibold"
            desc="Subsection headings."
          />
          <Section
            label="H4 – font-heading text-h4"
            className="font-heading text-h4 font-medium"
            desc="Card titles, widget headers."
          />
          <Section
            label="H5 – font-heading text-h5"
            className="font-heading text-h5 font-medium"
            desc="Minor headings, table section labels."
          />
          <Section
            label="H6 – font-heading text-h6"
            className="font-heading text-h6 font-medium uppercase tracking-wide"
            desc="Overlines, small labels."
          />
          <Section
            label="Body – font-body text-body"
            className="font-body text-body leading-relaxed"
            desc="Default paragraph copy."
          />
          <Section
            label="Small – font-body text-small"
            className="font-body text-small leading-relaxed text-slate-300"
            desc="Meta info, captions."
          />
        </div>

        {/* Extras */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
            <div className="text-xs text-slate-400 mb-2">Numbers & Emphasis</div>
            <div className="grid gap-3">
              <div className="font-heading text-h3 leading-none">12,345</div>
              <div className="font-body text-body">
                YoY change: <span className="font-semibold text-[var(--primary)]">+7.8%</span>
              </div>
              <div className="font-body text-small text-slate-400">
                Updated <span className="font-semibold">2025-11-12</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
            <div className="text-xs text-slate-400 mb-2">Code & Inline</div>
            <pre className="overflow-auto rounded border border-[var(--border)] bg-[var(--bg)] p-3 text-xs">
{`SELECT date, sales, margin
FROM facts
WHERE date >= '2025-01-01';`}
            </pre>
            <p className="mt-2 font-body text-small text-slate-300">
              Inline <code className="rounded bg-[var(--bg)] px-1">code</code> looks like this.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
          <div className="text-xs text-slate-400 mb-2">Paragraph Rhythm</div>
          <p className="font-body text-body leading-relaxed">
            Good body copy has comfortable line-height and readable measure (60–80 chars).
            Use <span className="font-semibold">text-body</span> with <span className="font-semibold">leading-relaxed</span> for articles.
            For dense UI, tighten to <span className="font-semibold">leading-snug</span>.
          </p>
          <p className="mt-3 font-body text-body leading-snug text-slate-300">
            For supporting text and captions, drop to <span className="font-semibold">text-small</span> and soften color.
          </p>
        </div>
      </div>
    </div>
  );
}

