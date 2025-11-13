// app/projects/page.tsx
import Container from "@/components/layout/Container";
import ProjectsIndexClient, { ProjectCardData } from "@/components/projects/ProjectsIndexClient";
import { getAllProjects } from "@/lib/projects";

export default function ProjectsIndexPage() {
  const projects = getAllProjects();

  // derive card data
  const cards: ProjectCardData[] = projects.map(p => ({
    slug: p.slug,
    title: p.title,
    image: p.cover,
    description: p.description,
    tags: p.tags,
    stack: p.stack,
  }));

  const allTags = Array.from(new Set(cards.flatMap(c => c.tags || []))).sort();
  const allStacks = Array.from(new Set(cards.flatMap(c => c.stack || []))).sort();

  return (
    <div className="border-b border-[var(--border)] bg-[var(--bg)]">
      <Container className="py-10">
        <h1 className="font-heading text-h1 font-semibold tracking-tight mb-2">
          Projects
        </h1>
        <p className="font-body text-small text-slate-400 mb-6">
          Case studies, internal tools, and experiments.
        </p>

        <ProjectsIndexClient initial={cards} allTags={allTags} allStacks={allStacks} pageSize={9} />
      </Container>
    </div>
  );
}
