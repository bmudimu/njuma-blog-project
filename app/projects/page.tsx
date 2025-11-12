// app/projects/page.tsx
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
      <p className="max-w-2xl text-sm text-slate-300">
        This page will collect my analytics projects: exploratory analyses,
        dashboards, and real-world problem breakdowns. For now, it&apos;s a
        simple placeholder while I build the first few case studies.
      </p>

      <div className="rounded-xl border border-dashed border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-400">
        No public projects yet. First targets:
        <ul className="mt-2 list-disc pl-5">
          <li>One analysis of a public dataset</li>
          <li>One dashboard project with screenshots</li>
          <li>One personal data experiment (habits, spending, or workouts)</li>
        </ul>
      </div>

      <p className="text-xs text-slate-500">
        Once a project is ready, it will get its own page with problem, data,
        tools used, and insights.
      </p>
    </section>
  );
}
