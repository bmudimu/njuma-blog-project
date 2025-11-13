// components/blog/ArticleTOC.tsx
"use client";

import { useEffect, useState } from "react";

type Item = { id: string; text: string; level: number };

export default function ArticleTOC({ targetId }: { targetId: string }) {
  const [items, setItems] = useState<Item[]>([]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const root = document.getElementById(targetId);
    if (!root) return;

    const hs = Array.from(root.querySelectorAll("h2, h3, h4")) as HTMLHeadingElement[];
    const arr = hs.map(h => {
      if (!h.id) h.id = h.textContent?.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "") ?? "";
      return { id: h.id, text: h.textContent ?? "", level: Number(h.tagName.replace("H", "")) };
    });
    setItems(arr);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).id);
        });
      },
      { rootMargin: "0px 0px -70% 0px", threshold: [0, 1] }
    );
    hs.forEach(h => obs.observe(h));
    return () => obs.disconnect();
  }, [targetId]);

  if (!items.length) return null;

  return (
    <nav className="sticky top-24 hidden h-min w-64 shrink-0 self-start md:block">
      <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3">
        <div className="mb-2 text-xs font-semibold text-slate-400">On this page</div>
        <ul className="space-y-1">
          {items.map(({ id, text, level }) => {
            const pad = level === 2 ? "" : level === 3 ? "pl-3" : "pl-6";
            const isActive = active === id;
            return (
              <li key={id} className={pad}>
                <a
                  href={`#${id}`}
                  className={[
                    "block rounded px-2 py-1 text-xs transition-colors",
                    isActive
                      ? "bg-[var(--bg)] text-[var(--primary)]"
                      : "text-slate-400 hover:text-[var(--text)]",
                  ].join(" ")}
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
