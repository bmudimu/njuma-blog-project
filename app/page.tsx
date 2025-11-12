// app/page.tsx
export default function HomePage() {
  return (
    <section className="flex flex-col gap-8 py-4">
      <div className="max-w-2xl space-y-4">
        <p className="text-md uppercase tracking-[0.2em] text-sky-400">
          Data · Code · Growth
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl text-secondary-500">
          I analyse data, build simple tools, and treat personal growth like an experiment.
        </h1>
        <p className="text-sm text-secondary-200 sm:text-base">
          This is my lab for sharing analytics projects, interactive dashboards,
          and data-driven experiments around habits, work, and money.
        </p>
      </div>

								<div className="">
									<div className="rounded-xl bg-color-2 p-4">
										<span className="icon2"><i className="icon-bulb"></i></span>
										<h3>Graphic Design</h3>
									</div>
								</div>
								<div className="">
									<div className="bg-boxsecondary p-4">
										<span className="icon2"><i className="icon-globe-outline"></i></span>
										<h3>Web Design</h3>
                    <p className="my-4 text-sm text-secondary-200">
                      Analysing real datasets and business questions. Clear write-ups,
                      charts, and practical takeaways.
                    </p>
									</div>
								</div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <h2 className="text-sm font-semibold text-secondary-500">Analytics Projects</h2>
          <p className="mt-2 text-xs text-secondary-200">
            Analysing real datasets and business questions. Clear write-ups,
            charts, and practical takeaways.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <h2 className="text-sm font-semibold text-sky-400">Blog & Notes</h2>
          <p className="mt-2 text-xs text-slate-300">
            Short posts on SQL, Python, dashboards, and how I use data to
            improve my own life and work.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <h2 className="text-sm font-semibold text-sky-400">Interactive Lab</h2>
          <p className="mt-2 text-xs text-slate-300">
            Simple tools, dashboards, and experiments you can click through —
            built in public as I learn.
          </p>
        </div>
      </div>

      <div className="mt-4 text-sm text-slate-300">
        <p>
          If you&apos;re looking for help with your data, dashboards, or reports,
          this is where you can see how I think and what I build.
        </p>
      </div>
    </section>
  );
}
