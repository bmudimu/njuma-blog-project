// lib/projects.ts
export type Project = {
  slug: string;
  title: string;
  client?: string;
  period?: string;
  role?: string;
  cover?: string;
  kpis?: { label: string; value: string; hint?: string }[];
  stack?: string[];
  tags?: string[];
  links?: { label: string; href: string }[];
  description: string;   // short blurb for cards
  content: string;       // long case-study text (used in [slug])
};

export const PROJECTS: Project[] = [
  {
    slug: "retail-dashboard",
    title: "Retail Sales Dashboard",
    client: "JB Group",
    period: "2025",
    role: "Analytics, BI Engineering",
    cover: "/projects/retail-dashboard.jpg",
    kpis: [
      { label: "Stores", value: "50" },
      { label: "Latency", value: "< 15m", hint: "near real-time" },
      { label: "Adoption", value: "90%+", hint: "weekly active" },
    ],
    stack: ["Power BI", "SQL Server", "Python", "DAX"],
    tags: ["Retail", "Dashboard", "Sales", "Inventory"],
    links: [{ label: "Case study PDF", href: "#" }],
    description:
      "Automated sales & inventory dashboard with unified KPI definitions and near real-time refresh.",
    content: `
## Problem
Area managers had fragmented reports…

## Approach
Consolidated sources into a tidy facts/dim model…

## Sample query
\`\`\`sql
SELECT d.Date, SUM(f.SalesAmount_BWP) AS Sales
FROM FactSales f
JOIN DimDate d ON d.DateKey = f.DateKey
GROUP BY d.Date
\`\`\`

## Outcome
Weekly review time dropped…
`,
  },
  {
    slug: "retail-product-performance",
    title: "Retail Product Dashboard",
    client: "JB Group",
    period: "2025",
    role: "Analytics, BI Engineering",
    cover: "/projects/img-5.jpg",
    kpis: [
      { label: "Stores", value: "50" },
      { label: "Latency", value: "< 15m", hint: "near real-time" },
      { label: "Adoption", value: "90%+", hint: "weekly active" },
    ],
    stack: ["Power BI", "SQL Server", "Python", "DAX"],
    tags: ["Retail", "Dashboard", "Sales", "Inventory"],
    links: [{ label: "Case study PDF", href: "#" }],
    description:
      "Automated sales & inventory dashboard with unified KPI definitions and near real-time refresh. This reports shows how the styles are performing for the week",
    content: `
## Problem
Helps Buyers and Planners make quick decesions to react to fast sellers or slow sellers…

## Approach
Consolidated sources into a tidy facts/dim model…

## Sample query
\`\`\`sql
SELECT d.Date, SUM(f.SalesAmount_BWP) AS Sales
FROM FactSales f
JOIN DimDate d ON d.DateKey = f.DateKey
GROUP BY d.Date
\`\`\`

## Outcome
Weekly review time dropped…
`,
  },
  
];

export function getAllProjects() {
  // newest first if you want to sort later by period etc.
  return PROJECTS.slice();
}

export function getProjectBySlug(slug: string) {
  return PROJECTS.find(p => p.slug === slug);
}

export function getAllProjectSlugs() {
  return PROJECTS.map(p => p.slug);
}
