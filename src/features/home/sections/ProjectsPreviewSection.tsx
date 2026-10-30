import { useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects, projectViewUrl, type Project } from "../../../data/projects";
import ProjectTag from "../../../shared/components/ProjectTag";
import Section from "../../../shared/components/Section";

function ProjectPreviewCard({ project }: { project: Project }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });
  const viewUrl = projectViewUrl(project);

  const tiltCard = (event: MouseEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - box.left) / box.width - 0.5;
    const py = (event.clientY - box.top) / box.height - 0.5;
    setTilt({ x: py * -12, y: px * 14, active: true });
  };

  return (
    <div className="[perspective:900px]">
      <article
        className="neo-card flex h-full flex-col p-6 text-left"
        onMouseMove={tiltCard}
        onMouseLeave={() => setTilt({ x: 0, y: 0, active: false })}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: tilt.active ? "none" : "transform 0.45s var(--ease-brutal)",
          boxShadow: tilt.active ? "10px 14px 0 0 #000" : undefined,
        }}
      >
        <h3 className="text-xl font-bold text-black">{project.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-black">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <ProjectTag key={tag} tag={tag} />
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {viewUrl && (
            <a
              href={viewUrl}
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
    </div>
  );
}

export default function ProjectsPreviewSection() {
  return (
    <Section
      id="projects"
      subtitle="Projects"
      className="border-y-2 border-black bg-section-projects"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectPreviewCard key={project.id} project={project} />
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
