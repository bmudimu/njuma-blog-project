// components/nav/TopBar.tsx
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-[var(--surface)] border-b border-[var(--border)] text-[var(--text)] text-xs md:text-sm font-body">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-1.5">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <Link href="mailto:info@yourdomain.com" className="hover:text-[var(--primary)]">
            info@yourdomain.com
          </Link>
          <span className="hidden md:inline">•</span>
          <Link href="tel:+123456789" className="hover:text-[var(--primary)] hidden md:inline">
            +1 (234) 567 8910
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link href="https://twitter.com" className="hover:text-[var(--primary)]">
            Twitter
          </Link>
          <Link href="https://facebook.com" className="hover:text-[var(--primary)]">
            Facebook
          </Link>
        </div>
      </div>
    </div>
  );
}
