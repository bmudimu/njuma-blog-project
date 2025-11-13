export default function NotFound() {
  return (
    <div className="min-h-[60vh] grid place-items-center bg-[var(--bg)] text-[var(--text)]">
      <div className="text-center">
        <h1 className="font-heading text-h2 font-semibold">Not found</h1>
        <p className="mt-2 font-body text-small text-slate-400">We couldn’t find that article.</p>
        <a href="/blog" className="mt-4 inline-block text-sm text-[var(--primary)] hover:opacity-80">Back to blog →</a>
      </div>
    </div>
  );
}
