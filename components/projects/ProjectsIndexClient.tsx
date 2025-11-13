"use client";

import { useMemo, useState, useEffect } from "react";
import ProjectCard from "@/components/cards/ProjectCard";

export type ProjectCardData = {
  slug: string;
  title: string;
  image?: string;
  description: string;
  tags?: string[];
  stack?: string[];
};

type Props = {
  initial: ProjectCardData[];
  allTags: string[];
  allStacks: string[];
  pageSize?: number;
};

export default function ProjectsIndexClient({ initial, allTags, allStacks, pageSize = 9 }: Props) {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string | "All">("All");
  const [stack, setStack] = useState<string | "All">("All");
  const [page, setPage] = useState(1);

  useEffect(() => setPage(1), [q, tag, stack]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return initial.filter(p => {
      const matchQ =
        !needle ||
        p.title.toLowerCase().includes(needle) ||
        p.description.toLowerCase().includes(needle) ||
        (p.tags || []).some(t => t.toLowerCase().includes(needle)) ||
        (p.stack || []).some(s => s.toLowerCase().includes(needle));
      const matchTag = tag === "All" || (p.tags || []).includes(tag);
      const matchStack = stack === "All" || (p.stack || []).includes(stack);
      return matchQ && matchTag && matchStack;
    });
  }, [initial, q, tag, stack]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  const visible = filtered.slice(start, start + pageSize);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {/* Tag filter */}
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm"
          >
            <option>All</option>
            {allTags.map((t) => <option key={t}>{t}</option>)}
          </select>

          {/* Stack filter */}
          <select
            value={stack}
            onChange={(e) => setStack(e.target.value)}
            className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm"
          >
            <option>All</option>
            {allStacks.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects…"
            className="w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm outline-none focus-visible:outline focus-visible:outline-[var(--primary)]"
          />
          {q && (
            <button
              onClick={() => setQ("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-xs hover:text-[var(--primary)]"
              aria-label="Clear search"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      {visible.length === 0 ? (
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 text-center text-sm text-slate-400">
          No matching projects.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProjectCard
              key={p.slug}
              title={p.title}
              image={p.image || "/projects/placeholder.png"}
              description={p.description}
              tags={p.tags}
              href={`/projects/${p.slug}`}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-2">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            className="rounded border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm disabled:opacity-50"
            disabled={safePage === 1}
          >
            Prev
          </button>
          <div className="text-sm text-slate-400">
            Page <span className="font-medium text-[var(--text)]">{safePage}</span> of {totalPages}
          </div>
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            className="rounded border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm disabled:opacity-50"
            disabled={safePage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
