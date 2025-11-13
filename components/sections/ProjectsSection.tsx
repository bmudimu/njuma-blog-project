// components/sections/ProjectsSection.tsx
import Container from "@/components/layout/Container";
import ProjectCard from "@/components/cards/ProjectCard";

const PROJECTS = [
  {
    title: "Retail Sales Dashboard",
    image: "/projects/blog-1.jpg",
    description: "Automated Power BI dashboard tracking sales, GP%, and inventory turnover across 50 stores.",
    tags: ["Analytics", "Power BI", "Retail"],
    href: "/projects/blog-1.jpg",
  },
  {
    title: "Excel OTB Planning Tool",
    image: "/projects/blog-2.jpg",
    description: "A dynamic Open-to-Buy model integrating PowerPivot, VBA, and SQL data refreshes.",
    tags: ["Excel", "VBA", "Planning"],
    href: "/projects/otb-tool",
  },
  {
    title: "Clinic Meal Delivery System",
    image: "/projects/blog-3.jpg",
    description: "Web-based system for managing clinic meal plans and deliveries with live status tracking.",
    tags: ["Django", "React", "Operations"],
    href: "/projects/clinic-orders",
  },
];

export default function ProjectsSection() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--bg)] py-16">
      <Container>
        <h2 className="font-heading text-h2 font-semibold tracking-tight mb-6">
          Featured Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
