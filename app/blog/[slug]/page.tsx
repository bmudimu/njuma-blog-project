// app/blog/[slug]/page.tsx
import Container from "@/components/layout/Container";
import ArticleHeader from "@/components/blog/ArticleHeader";
import ArticleTOC from "@/components/blog/ArticleTOC";
import Prose from "@/components/prose/Prose";
import { notFound } from "next/navigation";

// --- Replace this with real data (MDX/CMS) later ---
type Post = {
  slug: string;
  title: string;
  excerpt: string;
  cover?: string;
  category?: string;
  date: string;
  readingTime?: string;
  content: string; // markdown-ish string for now
};

const POSTS: Post[] = [
  {
    slug: "eda-first-steps",
    title: "Exploratory Data Analysis: First 60 Minutes",
    excerpt: "A fast, practical EDA workflow you can run on any new dataset to get 80% of the insight.",
    cover: "/blog/eda-first-steps/cover.jpg",
    category: "Analytics",
    date: "2025-10-18",
    readingTime: "6 min read",
    content: `
## Frame the question
Start by clarifying the business goal and the few key metrics that matter. Avoid drowning in columns.

## Load & audit the data
Check shape, dtypes, NA counts, unique values, and obvious outliers.

## First five charts
1. Volume over time
2. Top contributors (Pareto)
3. Distribution of key metric
4. Scatter: driver vs outcome
5. Heatmap / cohort if relevant

> Tip: Invest early in a clean date dimension and a tidy "facts" table.

\`\`\`sql
SELECT date, SUM(sales) AS sales, SUM(margin) AS margin
FROM facts_sales
WHERE date >= '2025-01-01'
GROUP BY date
ORDER BY date;
\`\`\`

## Next actions
Write down the first three hypotheses you want to test next. Own a measurable next step.
`,
  },
  // add more posts or fetch externally
];

function getPostBySlug(slug: string) {
  return POSTS.find(p => p.slug === slug);
}

export function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }));
}

export const dynamicParams = true; // allow unknown slugs to 404 via notFound()

export const metadata = {
  title: "Blog article",
};


export default async function BlogPostPage({ params, }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <div className="bg-[var(--bg)]">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-[1fr_260px]">
          <div id="article-root">
            <ArticleHeader
              title={post.title}
              category={post.category}
              date={post.date}
              readingTime={post.readingTime}
              cover={post.cover}
            />
            <Prose>
              {/* naive render: this is a plain string with simple markdown-like sections. 
                 For real MDX, swap this block with <MDXRemote /> or compiled MDX. */}
              {post.content.split("\n").map((line, i) => {
                // very shallow markdown-ish rendering for demo only:
                if (line.startsWith("## ")) {
                  const id = line.slice(3).toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
                  return <h2 key={i} id={id}>{line.slice(3)}</h2>;
                }
                if (line.startsWith("```sql")) {
                  const end = post.content.indexOf("```", post.content.indexOf("```sql") + 1);
                  const code = post.content.slice(post.content.indexOf("```sql") + 6, end).trim();
                  return (
                    <pre key={i}>
                      <code>{code}</code>
                    </pre>
                  );
                }
                if (line.startsWith("> ")) return <blockquote key={i}>{line.slice(2)}</blockquote>;
                if (!line.trim()) return <br key={i} />;
                return <p key={i}>{line}</p>;
              })}
            </Prose>
          </div>

          {/* TOC */}
          <ArticleTOC targetId="article-root" />
        </div>
      </Container>
    </div>
  );
}


