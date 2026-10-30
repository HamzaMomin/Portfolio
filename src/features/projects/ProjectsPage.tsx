import { ArrowUpRight } from "lucide-react";
import { showcaseProjects, projectViewUrl, type Project } from "../../data/projects";
import ProjectTag from "../../shared/components/ProjectTag";
import Section from "../../shared/components/Section";

function ProjectCard({ project }: { project: Project }) {
  const viewUrl = projectViewUrl(project);

  return (
    <article className="neo-card p-6 text-left md:p-8">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-2xl font-bold text-black">{project.name}</h2>
          {project.company ? (
            <span className="neo-tag" style={{ backgroundColor: "#111", color: "#fff" }}>
              {project.company}
            </span>
          ) : null}
        </div>
        <p className="mt-3 max-w-2xl font-medium text-black">{project.description}</p>
        {project.result ? (
          <p className="mt-3 max-w-2xl font-medium text-black">
            <span className="font-black">Result:</span> {project.result}
          </p>
        ) : null}
        {project.note ? (
          <p className="mt-3 max-w-2xl font-bold text-black">{project.note}</p>
        ) : null}
        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <ProjectTag key={tag} tag={tag} />
            ))}
          </div>
          {viewUrl ? (
            <a
              href={viewUrl}
              target="_blank"
              rel="noreferrer"
              className="neo-pill shrink-0 gap-1 text-sm"
            >
              View
              <ArrowUpRight size={14} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <Section
      id="projects-page"
      subtitle="Projects"
      className="border-y-2 border-black bg-section-projects pt-28"
    >
      <p className="mb-8 max-w-2xl text-left text-lg font-medium text-black">
        Projects I built with teams at Xgrid and Korrall.
      </p>
      <div className="grid gap-6">
        {showcaseProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
