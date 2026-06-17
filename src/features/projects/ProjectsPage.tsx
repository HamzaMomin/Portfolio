import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "../../data/projects";
import Section from "../../shared/components/Section";

export default function ProjectsPage() {
  return (
    <Section
      id="projects-page"
      subtitle="Projects"
      title="All projects"
      className="pt-28"
    >
      <p className="mb-10 max-w-2xl text-left text-neutral-600">
        A dedicated projects page. The home page shows a preview — this page
        can hold the full list, filters, and case studies as your design grows.
      </p>

      <div className="grid gap-6">
        {featuredProjects.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl border border-neutral-200 bg-white p-6 text-left shadow-sm md:p-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-neutral-900">
                  {project.name}
                </h2>
                <p className="mt-2 max-w-2xl text-neutral-600">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex shrink-0 flex-wrap gap-4 text-sm font-medium">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-neutral-900 hover:underline"
                  >
                    Live demo
                    <ArrowUpRight size={14} />
                  </a>
                )}
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-neutral-600 hover:text-neutral-900"
                  >
                    Source
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
