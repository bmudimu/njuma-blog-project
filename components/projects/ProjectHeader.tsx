// components/projects/ProjectHeader.tsx
import Image from "next/image";

export default function ProjectHeader({
  title,
  client,
  period,
  role,
  cover,
}: {
  title: string;
  client?: string;
  period?: string;  // e.g., "Jan–Mar 2025"
  role?: string;    // e.g., "Analytics, Engineering"
  cover?: string;
}) {
  return (
    <header className="mb-6">
      {/* Meta line */}
      <div className="mb-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
        {client && <span className="rounded-full bg-[color:rgb(0_0_0/0.05)] px-2 py-0.5 dark:bg-[color:rgb(255_255_255/0.08)]">Client: {client}</span>}
        {period && <span>{period}</span>}
        {role && <span className="opacity-80">• {role}</span>}
      </div>

      <h1 className="font-heading text-h1 font-semibold tracking-tight mb-4">
        {title}
      </h1>

      {cover && (
        <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg)]">
          <Image src={cover} alt={title} fill className="object-cover" priority />
        </div>
      )}
    </header>
  );
}
