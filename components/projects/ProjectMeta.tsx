// components/projects/ProjectMeta.tsx
export default function ProjectMeta({
  stack = [],
  tags = [],
  links = [],
}: {
  stack?: string[]; // e.g., ["Next.js", "Tailwind", "Power BI"]
  tags?: string[];  // e.g., ["Retail", "Dashboard"]
  links?: { label: string; href: string }[];
}) {
  const Pill = ({ children }: { children: React.ReactNode }) => (
    <span className="rounded-full bg-[color:rgb(0_0_0/0.05)] px-2 py-0.5 text-xs text-slate-500 dark:bg-[color:rgb(255_255_255/0.08)]">
      {children}
    </span>
  );

  return (
    <aside className="space-y-3">
      {stack.length > 0 && (
        <div>
          <div className="mb-1 text-xs font-semibold text-slate-400">Tech stack</div>
          <div className="flex flex-wrap gap-2">{stack.map(s => <Pill key={s}>{s}</Pill>)}</div>
        </div>
      )}
      {tags.length > 0 && (
        <div>
          <div className="mb-1 text-xs font-semibold text-slate-400">Tags</div>
          <div className="flex flex-wrap gap-2">{tags.map(t => <Pill key={t}>{t}</Pill>)}</div>
        </div>
      )}
      {links.length > 0 && (
        <div>
          <div className="mb-1 text-xs font-semibold text-slate-400">Links</div>
          <ul className="space-y-1">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-[var(--primary)] hover:opacity-80" target="_blank" rel="noopener noreferrer">
                  {l.label} →
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
