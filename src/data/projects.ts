export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  href?: string;
  demo?: string;
}

export const featuredProjects: Project[] = [
  {
    id: "phostrack",
    name: "Phostrack",
    description: "A mobile app and landing page for phosphorus tracking.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/HamzaMomin/phostrack.com",
    demo: "https://phostrack.com/",
  },
  {
    id: "portfolio",
    name: "Hamza Momin Portfolio",
    description: "A personal portfolio website showcasing projects and skills.",
    tags: ["React", "Tailwind CSS", "Cloudflare"],
    href: "https://github.com/HamzaMomin/Portfolio",
    demo: "https://hamzamomin.com/",
  },
  {
    id: "poistivus",
    name: "Poistivus",
    description: "Figma design converted to a responsive frontend page.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    href: "https://github.com/HamzaMomin/Poistivus",
    demo: "https://hamzamomin.github.io/Poistivus/",
  },
];
