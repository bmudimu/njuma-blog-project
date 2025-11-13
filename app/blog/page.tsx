// app/blog/page.tsx
import BlogIndexClient from "@/components/blog/BlogIndexClient";
import { BlogPostMeta } from "@/components/cards/BlogPostCard";

// Stub data. Replace with real source (MDX, CMS) later.
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
  // add a few more to show pagination
  {
    slug: "sql-starter-queries",
    title: "SQL Starter: 12 Queries You’ll Use Every Week",
    excerpt: "The small set of SELECTs, JOINs, and GROUP BYs that cover most daily analysis.",
    cover: "/blog/habit-tracking-with-data/cover.jpg",
    category: "Analytics",
    date: "2025-09-20",
    readingTime: "8 min read",
  },
  {
    slug: "python-pandas-patterns",
    title: "Pandas Patterns for Real-World Data",
    excerpt: "Indexing, grouping, and reshaping patterns that speed up your analysis.",
    cover: "/blog/eda-first-steps/cover.jpg",
    category: "Engineering",
    date: "2025-08-14",
    readingTime: "9 min read",
  },
  {
    slug: "dashboard-sins",
    title: "Dashboard Sins: 7 Things to Stop Doing",
    excerpt: "Busy isn’t better. Fix these layout and metric issues to make dashboards useful.",
    cover: "/blog/five-charts-most-answers/cover.jpg",
    category: "Visualization",
    date: "2025-07-03",
    readingTime: "5 min read",
  },
  {
    slug: "time-blocking-with-data",
    title: "Time Blocking with Data: Do What Matters",
    excerpt: "Measure, plan, and review. A data-flavoured weekly cadence that actually sticks.",
    cover: "/blog/habit-tracking-with-data/cover.jpg",
    category: "Personal Growth",
    date: "2025-06-12",
    readingTime: "6 min read",
  },
  {
    slug: "chart-cheatsheet",
    title: "Chart Cheat Sheet for Stakeholders",
    excerpt: "Pick the right chart in seconds. What each chart says and when to use it.",
    cover: "/blog/eda-first-steps/cover.jpg",
    category: "Visualization",
    date: "2025-05-22",
    readingTime: "4 min read",
  },
  {
    slug: "excel-to-powerbi",
    title: "From Excel to Power BI Without Pain",
    excerpt: "A pragmatic migration path for small teams and solo operators.",
    cover: "/blog/habit-tracking-with-data/cover.jpg",
    category: "Engineering",
    date: "2025-04-10",
    readingTime: "7 min read",
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(POSTS.map(p => p.category).filter(Boolean))) as string[]];

export default function BlogIndexPage() {
  return (
    <div className="border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <h1 className="font-heading text-h1 font-semibold tracking-tight mb-2">Blog</h1>
        <p className="font-body text-small text-slate-400 mb-6">
          Short, practical posts on analytics, visualization, and data-driven growth.
        </p>

        <BlogIndexClient initialPosts={POSTS} categories={CATEGORIES} pageSize={9} />
      </div>
    </div>
  );
}

  