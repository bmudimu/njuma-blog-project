// components/ThemeToggle.tsx
"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const el = document.documentElement;
    dark ? el.classList.add("theme-dark") : el.classList.remove("theme-dark");
  }, [dark]);

  return (
    <button
      onClick={() => setDark((v) => !v)}
      className="rounded border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
