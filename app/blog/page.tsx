// app/blog/page.tsx
export default function BlogPage() {
    return (
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
        <p className="max-w-2xl text-sm text-slate-300">
          Short, practical posts on data analysis, tooling, and using numbers to
          improve decisions and habits. I&apos;ll start by publishing simple
          breakdowns of my own projects and experiments.
        </p>
  
        <div className="rounded-xl border border-dashed border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-400">
          No posts live yet.
          <br />
          First posts will likely cover:
          <ul className="mt-2 list-disc pl-5">
            <li>How I approach a new dataset step-by-step</li>
            <li>Basic charts that answer most business questions</li>
            <li>How I analyse my own data (habits, work, money)</li>
          </ul>
        </div>
      </section>
    );
  }
  