import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects, projectViewUrl } from "../../../data/projects";
import ProjectTag from "../../../shared/components/ProjectTag";
import Section from "../../../shared/components/Section";

export default function ProjectsPreviewSection() {
  return (
    <Section
      id="projects"
      subtitle="Projects"
      title="Selected projects"
      className="border-y-2 border-black bg-section-projects"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <article key={project.id} className="neo-card flex flex-col p-6 text-left">
            <h3 className="text-xl font-bold text-black">{project.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-black">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <ProjectTag key={tag} tag={tag} />
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
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
          </article>
        ))}
      </div>

      <div className="mt-10 text-left">
        <Link to="/projects" className="neo-pill neo-pill-filled gap-1 text-sm">
          View all projects
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
