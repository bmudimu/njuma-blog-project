// components/blog/ArticleHeader.tsx
import Image from "next/image";

export default function ArticleHeader({
  title,
  category,
  date,
  readingTime,
  cover,
}: {
  title: string;
  category?: string;
  date?: string | Date;
  readingTime?: string;
  cover?: string;
}) {
  const dt =
    date ? new Intl.DateTimeFormat(undefined, { year: "numeric", month: "short", day: "2-digit" }).format(new Date(date)) : null;

  return (
    <header className="mb-6">
      {/* eyebrow/meta */}
      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
        {category && (
          <span className="rounded-full bg-[color:rgb(0_0_0/0.05)] px-2 py-0.5 dark:bg-[color:rgb(255_255_255/0.08)]">
            {category}
          </span>
        )}
        {dt && <span>{dt}</span>}
        {readingTime && <span className="opacity-70">• {readingTime}</span>}
      </div>

      {/* title */}
      <h1 className="font-heading text-h1 font-semibold tracking-tight mb-4">
        {title}
      </h1>

      {/* cover */}
      {cover && (
        <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg)]">
          <Image src={cover} alt={title} fill className="object-cover" priority />
        </div>
      )}
    </header>
  );
}
