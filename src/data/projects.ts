export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  href?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "savesquare",
    name: "SaveSquare",
    description:
      "An AI bookmark manager that files saved links into folders and shares a collection with one link.",
    tags: ["Browser extension", "AI", "Chrome", "Edge"],
    href: "https://savesquare.io/",
    demo: "https://savesquare.io/",
    featured: true,
  },
  {
    id: "phostrack",
    name: "Phostrack",
    description: "A mobile app and landing page for phosphorus tracking.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Cloudflare", "Hugging Face"],
    href: "https://github.com/HamzaMomin/phostrack.com",
    demo: "https://phostrack.com/",
    featured: false,
  },
  {
    id: "insignia",
    name: "Real Estate Insignia",
    description: "A mobile app and web dashboard for real estate fraud detection.",
    tags: ["Flutter", "Firebase", "University Final Year Project"],
    href: "https://github.com/HamzaMomin/Real_Estate_Insignia",
    featured: true,
  },
  {
    id: "gun-lord",
    name: "Gun Lord / Gun Lord Club",
    description:
      "A collection of pixel-animated gun NFTs on the Polygon and Ethereum blockchains.",
    tags: ["Python", "Polygon", "ERC-721", "Blockchain", "JSON"],
    href: "https://opensea.io/collection/gunlord",
    demo: "https://opensea.io/collection/gunlordclub",
    featured: true,
  },
  {
    id: "poistivus",
    name: "Poistivus",
    description:
      "A Figma design built into a responsive page with CSS, Bootstrap, and JavaScript.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Figma"],
    href: "https://github.com/HamzaMomin/Poistivus",
    demo: "https://hamzamomin.github.io/Poistivus/",
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
    id: "estac",
    name: "Estac Web Monitoring",
    description: "A landing page for Estac, a web monitoring service.",
    tags: ["HTML", "CSS", "Bootstrap", "GitHub"],
    href: "https://github.com/HamzaMomin/Web-Monitoring-Landing-Page-Design",
    demo: "https://hamzamomin.github.io/Web-Monitoring-Landing-Page-Design/",
  },
  {
    id: "eureka",
    name: "Eureka",
    description:
      "A landing page designed in Figma and built in Webflow, with GSAP scroll animations.",
    tags: ["Webflow", "GSAP", "Figma"],
    href: "https://eureka-e40f4e.webflow.io/",
    demo: "https://eureka-e40f4e.webflow.io/",
  },
  {
    id: "forecaster",
    name: "Forecaster",
    description:
      "A responsive landing page designed in Figma and built in Webflow with a client-first approach.",
    tags: ["Webflow", "Responsive layout", "Figma"],
    href: "https://forecaster-870aa6.webflow.io/",
    demo: "https://forecaster-870aa6.webflow.io/",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

/** Live site when one exists, otherwise the GitHub or other project URL. */
export function projectViewUrl(project: Project) {
  return project.demo || project.href;
}
