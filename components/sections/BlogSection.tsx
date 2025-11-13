// components/sections/BlogSection.tsx
import Container from "@/components/layout/Container";
import BlogPostCard, { BlogPostMeta } from "@/components/cards/BlogPostCard";

const POSTS: BlogPostMeta[] = [
  {
    slug: "eda-first-steps",
    title: "Exploratory Data Analysis: First 60 Minutes",
    excerpt: "A fast, practical EDA workflow you can run on any new dataset to get 80% of the insight.",
    cover: "/blog/eda-first-steps/cover.jpg",
    category: "Analytics",
    date: "2025-10-18",
    readingTime: "6 min read",
  },
  {
    slug: "five-charts-most-answers",
    title: "5 Charts That Answer Most Business Questions",
    excerpt: "Bar, line, area, scatter, and cumulative charts — when to use which and why.",
    cover: "/blog/five-charts-most-answers/cover.jpg",
    category: "Visualization",
    date: "2025-10-25",
    readingTime: "5 min read",
  },
  {
    slug: "habit-tracking-with-data",
    title: "Habit Tracking with Data (Without Getting Lost)",
    excerpt: "A simple model to collect, visualize, and act on personal metrics in under 15 minutes a week.",
    cover: "/blog/habit-tracking-with-data/cover.jpg",
    category: "Personal Growth",
    date: "2025-11-01",
    readingTime: "7 min read",
  },
];

export default function BlogSection() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--bg)] py-16">
      <Container>
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-heading text-h2 font-semibold tracking-tight">Latest Articles</h2>
          <a
            href="/blog"
            className="font-body text-sm text-[var(--primary)] hover:opacity-80"
          >
            View all →
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <BlogPostCard key={p.slug} {...p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
