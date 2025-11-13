// components/blog/BlogIndexClient.tsx
"use client";

import { useMemo, useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import BlogPostCard, { BlogPostMeta } from "@/components/cards/BlogPostCard";

type Props = {
  initialPosts: BlogPostMeta[];
  categories: string[];
  pageSize?: number;
};

export default function BlogIndexClient({ initialPosts, categories, pageSize = 9 }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  // URL state
  const qParam = sp.get("q") ?? "";
  const catParam = sp.get("cat") ?? "All";
  const pageParam = Number(sp.get("page") ?? "1");

  const [q, setQ] = useState(qParam);
  const [cat, setCat] = useState(catParam);
  const [page, setPage] = useState(pageParam);

  // keep URL in sync
  useEffect(() => {
    const search = new URLSearchParams();
    if (q) search.set("q", q);
    if (cat && cat !== "All") search.set("cat", cat);
    if (page > 1) search.set("page", String(page));
    const query = search.toString();
    router.replace(query ? `${pathname}?${query}` : pathname);
  }, [q, cat, page, pathname, router]);

  // Filter + sort
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const selected = cat === "All" ? null : cat;

    return initialPosts
      .filter(p => (selected ? p.category === selected : true))
      .filter(p => {
        if (!needle) return true;
        return (
          p.title.toLowerCase().includes(needle) ||
          p.excerpt.toLowerCase().includes(needle) ||
          (p.category?.toLowerCase().includes(needle) ?? false)
        );
      })
      .sort((a, b) => +new Date(b.date) - +new Date(a.date));
  }, [initialPosts, q, cat]);

  // Pagination
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  useEffect(() => {
    if (safePage !== page) setPage(safePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPages]);

  const start = (safePage - 1) * pageSize;
  const visible = filtered.slice(start, start + pageSize);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map(c => {
            const active = cat === c;
            return (
              <button
                key={c}
                onClick={() => { setCat(c); setPage(1); }}
                className={[
                  "rounded-full px-3 py-1 text-sm",
                  active
                    ? "bg-[var(--primary)] text-[color:#0B0F19]"
                    : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:opacity-90",
                ].join(" ")}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <input
            value={q}
            onChange={e => { setQ(e.target.value); setPage(1); }}
            placeholder="Search posts…"
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

      {/* Results */}
      {visible.length === 0 ? (
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 text-center text-sm text-slate-400">
          No posts found.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map(p => <BlogPostCard key={p.slug} {...p} />)}
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
