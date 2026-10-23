import { ArrowUpRight } from "lucide-react";
import { projects, projectViewUrl } from "../../data/projects";
import ProjectTag from "../../shared/components/ProjectTag";
import Section from "../../shared/components/Section";

export default function ProjectsPage() {
  return (
    <Section
      id="projects-page"
      subtitle="Projects"
      title="All projects"
      className="border-y-2 border-black bg-section-projects pt-28"
    >
      <p className="neo-card mb-10 max-w-2xl p-5 text-left font-medium text-black">
        Apps, games-adjacent experiments, and product sites — from phosphorus
        tracking and fraud detection to blockchain collections and landing pages.
      </p>

      <div className="grid gap-6">
        {projects.map((project) => (
          <article key={project.id} className="neo-card p-6 text-left md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-black">{project.name}</h2>
                <p className="mt-2 max-w-2xl font-medium text-black">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <ProjectTag key={tag} tag={tag} />
                  ))}
                </div>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                {projectViewUrl(project) && (
                  <a
                    href={projectViewUrl(project)}
                    target="_blank"
                    rel="noreferrer"
                    className="neo-pill gap-1 text-sm"
                  >
                    View
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
