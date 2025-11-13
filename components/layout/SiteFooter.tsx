// components/layout/SiteFooter.tsx
import Container from "./Container";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <Container className="py-4 flex items-center justify-between text-xs text-slate-400">
        <span>© {new Date().getFullYear()} Data &amp; Growth Lab</span>
        <span>Built with Next.js + Tailwind</span>
      </Container>
    </footer>
  );
}
