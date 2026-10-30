export type ProjectGroup = "client" | "product" | "archive";

export interface Project {
  id: string;
  name: string;
  description: string;
  result?: string;
  note?: string;
  tags: string[];
  href?: string;
  demo?: string;
  featured?: boolean;
  group: ProjectGroup;
  company?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "savesquare",
    name: "SaveSquare",
    company: "KORRALL",
    description:
      "An AI-powered bookmark management and sharing SaaS, built as a browser extension.",
    result: "Saved links are filed into folders, and a folder can be shared with one URL.",
    tags: ["Next.js", "React", "WXT", "Supabase", "Cloudflare Workers", "Creem"],
    href: "https://savesquare.io/",
    demo: "https://savesquare.io/",
    group: "client",
    featured: true,
  },
  {
    id: "alkira",
    name: "Alkira",
    company: "XGRID",
    description:
      "Cloud networking platform. Redesigned the enterprise website in Avada with improved UI/UX, a responsive structure, and custom Splide.js sliders.",
    result: "A responsive marketing site with stronger frontend interactivity.",
    tags: ["WordPress", "Avada", "JavaScript", "CSS"],
    demo: "https://alkira.com",
    group: "client",
    featured: true,
  },
  {
    id: "chkk",
    name: "Chkk.io",
    company: "XGRID",
    description:
      "AI and cloud platform. Converted Figma designs into pixel-perfect, responsive Webflow CMS pages using Flexbox and Grid.",
    result: "A BEM component system that stays consistent across pages and devices.",
    tags: ["Webflow", "Figma", "HTML", "CSS", "BEM"],
    demo: "https://chkk.io",
    group: "client",
    featured: true,
  },
  {
    id: "givecampus",
    name: "GiveCampus",
    company: "XGRID",
    description:
      "Fundraising platform. Built 5 HubSpot landing pages from Figma designs for lead-generation campaigns.",
    result: "HubSpot forms on each page capture leads from the campaigns.",
    tags: ["HubSpot", "Figma"],
    demo: "https://go.givecampus.com",
    group: "client",
  },
  {
    id: "okfb",
    name: "Oklahoma Farm Bureau Insurance",
    company: "XGRID",
    description:
      "US insurance provider. Improved PageSpeed and Core Web Vitals, and kept the site maintained.",
    result: "PageSpeed from 60 to 90, with SEO managed across 100+ pages.",
    tags: ["WordPress", "ACF", "Rank Math"],
    demo: "https://okfbinsurance.com",
    group: "client",
  },
  {
    id: "knives",
    name: "Rejuvenated Knives",
    company: "XGRID",
    description:
      "A WooCommerce store with product management, checkout, and Stripe payments.",
    result: "Reusable Bricks Builder and ACF templates for the catalog.",
    tags: ["WordPress", "WooCommerce", "Bricks Builder", "ACF", "PHP"],
    demo: "https://get.rejuvenatedknives.com",
    group: "client",
  },
  {
    id: "korrall",
    name: "Korrall Consulting: Client SaaS Apps",
    company: "KORRALL",
    description:
      "SaaS products for 3 US clients, with AI features, authentication, and payments, built on Next.js and Supabase.",
    note: "Details available on request.",
    tags: ["Next.js", "React", "Supabase"],
    group: "client",
  },
  {
    id: "phostrack",
    name: "Phostrack",
    description: "A mobile app and landing page for phosphorus tracking.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Cloudflare", "Hugging Face"],
    href: "https://github.com/HamzaMomin/phostrack.com",
    demo: "https://phostrack.com/",
    group: "product",
  },
  {
    id: "insignia",
    name: "Real Estate Insignia",
    description: "A mobile app and web dashboard for real estate fraud detection.",
    tags: ["Flutter", "Firebase", "University Final Year Project"],
    href: "https://github.com/HamzaMomin/Real_Estate_Insignia",
    group: "product",
  },
  {
    id: "poistivus",
    name: "Poistivus",
    description:
      "A Figma design built into a responsive page with CSS, Bootstrap, and JavaScript.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Figma"],
    href: "https://github.com/HamzaMomin/Poistivus",
    demo: "https://hamzamomin.github.io/Poistivus/",
    group: "archive",
  },
  {
    id: "estac",
    name: "Estac Web Monitoring",
    description: "A landing page for Estac, a web monitoring service.",
    tags: ["HTML", "CSS", "Bootstrap", "GitHub"],
    href: "https://github.com/HamzaMomin/Web-Monitoring-Landing-Page-Design",
    demo: "https://hamzamomin.github.io/Web-Monitoring-Landing-Page-Design/",
    group: "archive",
  },
  {
    id: "eureka",
    name: "Eureka",
    description:
      "A landing page designed in Figma and built in Webflow, with GSAP scroll animations.",
    tags: ["Webflow", "GSAP", "Figma"],
    href: "https://eureka-e40f4e.webflow.io/",
    demo: "https://eureka-e40f4e.webflow.io/",
    group: "archive",
  },
  {
    id: "forecaster",
    name: "Forecaster",
    description:
      "A responsive landing page designed in Figma and built in Webflow with a client-first approach.",
    tags: ["Webflow", "Responsive layout", "Figma"],
    href: "https://forecaster-870aa6.webflow.io/",
    demo: "https://forecaster-870aa6.webflow.io/",
    group: "archive",
  },
  {
    id: "portfolio",
    name: "Hamza Momin Portfolio",
    description: "A personal portfolio website showcasing projects and skills.",
    tags: ["React", "Tailwind CSS", "Cloudflare"],
    href: "https://github.com/HamzaMomin/Portfolio",
    demo: "https://hamzamomin.com/",
    group: "archive",
  },
  {
    id: "gun-lord",
    name: "Gun Lord / Gun Lord Club",
    description:
      "A collection of pixel-animated gun NFTs on the Polygon and Ethereum blockchains.",
    tags: ["Python", "Polygon", "ERC-721", "Blockchain", "JSON"],
    href: "https://opensea.io/collection/gunlord",
    demo: "https://opensea.io/collection/gunlordclub",
    group: "archive",
  },
];

export const showcaseProjects = projects.filter((project) => project.group !== "archive");

export const archiveProjects = projects.filter((project) => project.group === "archive");

export const featuredProjects = projects.filter((project) => project.featured);

/** Live site when one exists, otherwise the GitHub or other project URL. */
export function projectViewUrl(project: Project) {
  return project.demo || project.href;
}
