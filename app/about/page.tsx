// app/about/page.tsx
export default function AboutPage() {
    return (
      <section className="max-w-2xl space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight">About</h1>
        <p className="text-sm text-slate-300">
          I&apos;m a data analyst who enjoys turning messy data into clear stories,
          simple tools, and practical decisions. I also care about personal growth,
          and I treat my own life like a series of small experiments.
        </p>
        <p className="text-sm text-slate-300">
          This site is my working lab: I publish projects, notes, and small
          interactive tools as I learn. The focus is on real-world problems,
          not textbook exercises.
        </p>
        <p className="text-sm text-slate-300">
          Over time, this will become a hub for freelance work, templates, and
          analytics support for people and teams who want data to actually drive action.
        </p>
      </section>
    );
  }
  