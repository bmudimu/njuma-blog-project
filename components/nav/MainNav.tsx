// components/nav/MainNav.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../ThemeToggle";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },

  // { href: "/lab", label: "Lab" },
  // { href: "/typofonts", label: "Fonts" },
];

export default function MainNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between">
      {/* Brand */}
      <Link href="/" className="font-heading text-h4 font-semibold tracking-tight uppercase">
        DoData
      </Link>

      {/* Desktop links */}
      <div className="hidden items-center gap-6 md:flex">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className="font-body text-small hover:text-[var(--primary)]">
            {l.label}
          </Link>
        ))}
        <ThemeToggle />
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-14 z-50 border-b border-[var(--border)] bg-[var(--surface)] md:hidden"
        >
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-body text-body hover:text-[var(--primary)]"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
