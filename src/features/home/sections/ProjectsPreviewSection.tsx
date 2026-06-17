import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "../../../data/projects";
import Section from "../../../shared/components/Section";

export default function ProjectsPreviewSection() {
  return (
    <Section id="projects" subtitle="Projects" title="Selected work">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <article
            key={project.id}
            className="group rounded-2xl border border-neutral-200 bg-white p-6 text-left shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="text-xl font-semibold text-neutral-900">
              {project.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
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
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
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
          </article>
        ))}
      </div>

      <div className="mt-10 text-left">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline"
        >
          View all projects
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
