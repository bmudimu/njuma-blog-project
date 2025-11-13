// app/projects/[slug]/page.tsx
import Container from "@/components/layout/Container";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectKPIs from "@/components/projects/ProjectKPIs";
import ProjectMeta from "@/components/projects/ProjectMeta";
import ArticleTOC from "@/components/blog/ArticleTOC";
import Prose from "@/components/prose/Prose";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";


export function generateStaticParams() {
  return getAllProjectSlugs().map(slug => ({ slug }));
}

export const dynamicParams = true;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // Next version where params is a Promise
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <div className="bg-[var(--bg)]">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-[1fr_260px]">
          <div id="project-article-root">
            <ProjectHeader
              title={project.title}
              client={project.client}
              period={project.period}
              role={project.role}
              cover={project.cover}
            />

            <ProjectKPIs items={project.kpis ?? []} />

            <Prose>
              {/* ultra-light markdown-ish render for now */}
              {project.content.split("\n").map((line, i) => {
                if (line.startsWith("## ")) {
                  const id = line.slice(3).toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
                  return <h2 key={i} id={id}>{line.slice(3)}</h2>;
                }
                if (line.startsWith("```sql")) {
                  const endIdx = project.content.indexOf("```", project.content.indexOf("```sql") + 1);
                  const code = project.content.slice(project.content.indexOf("```sql") + 6, endIdx).trim();
                  return (
                    <pre key={i}><code>{code}</code></pre>
                  );
                }
                if (line.startsWith("> ")) return <blockquote key={i}>{line.slice(2)}</blockquote>;
                if (!line.trim()) return <br key={i} />;
                return <p key={i}>{line}</p>;
              })}
            </Prose>
          </div>

          <div className="space-y-6">
            <ArticleTOC targetId="project-article-root" />
            <ProjectMeta stack={project.stack} tags={project.tags} links={project.links} />
          </div>
        </div>
      </Container>
    </div>
  );
}
