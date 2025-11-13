// components/cards/BlogPostCard.tsx
import Image from "next/image";
import Link from "next/link";

export type BlogPostMeta = {
  slug: string;           // "/blog/your-post" or "your-post" (we'll normalize)
  title: string;
  excerpt: string;
  cover?: string;         // e.g., "/blog/your-post/cover.jpg"
  category?: string;      // e.g., "Analytics"
  date: string | Date;    // ISO or Date
  readingTime?: string;   // e.g., "6 min read"
};

function formatDate(d: string | Date) {
  const dt = typeof d === "string" ? new Date(d) : d;
  // fallback if invalid
  if (isNaN(dt.getTime())) return "";
  return new Intl.DateTimeFormat(undefined, { year: "numeric", month: "short", day: "2-digit" }).format(dt);
}

export default function BlogPostCard({
  slug,
  title,
  excerpt,
  cover,
  category,
  date,
  readingTime,
}: BlogPostMeta) {
  const href = slug.startsWith("/") ? slug : `/blog/${slug}`;

  return (
    <article className="group overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
      {/* Cover */}
      <Link href={href} className="block relative aspect-[16/9] w-full">
        {cover ? (
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width:768px) 100vw, 50vw"
            priority={false}
          />
        ) : (
          <div className="h-full w-full bg-[var(--bg)]" />
        )}
      </Link>

      {/* Content */}
      <div className="p-5">
        {/* Meta */}
        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          {category && (
            <span className="rounded-full bg-[color:rgb(0_0_0/0.05)] px-2 py-0.5 dark:bg-[color:rgb(255_255_255/0.08)]">
              {category}
            </span>
          )}
          <span className="opacity-80">{formatDate(date)}</span>
          {readingTime && <span className="opacity-60">• {readingTime}</span>}
        </div>

        {/* Title */}
        <h3 className="mb-2 font-heading text-h4 font-semibold leading-snug">
          <Link
            href={href}
            className="hover:text-[var(--primary)] transition-colors"
          >
            {title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="font-body text-small text-slate-400">
          {excerpt}
        </p>

        {/* Read link */}
        <div className="mt-4">
          <Link
            href={href}
            className="font-body text-sm text-[var(--primary)] hover:opacity-80"
            aria-label={`Read ${title}`}
          >
            Read article →
          </Link>
        </div>
      </div>
    </article>
  );
}
