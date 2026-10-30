export interface Experience {
  role: string;
  type: string;
  company: string;
  period: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    type: "Korrall Consulting LLC",
    company: "USA, Remote",
    period: "Jan 2026 – Present",
    points: [
      "Develop SaaS products and web applications for clients through outsourced software development engagements.",
      "Build AI-powered features, API integrations, authentication systems, and cloud-based backends using Next.js, React, and Supabase.",
      "Implement payment processing, session management, and secure data-sharing features for browser-based applications.",
      "Coordinate software engineers and SEO marketing teams, manage project timelines, prioritize tasks, and track deliverables to ensure timely project completion.",
      "Gather client requirements, communicate project progress, and translate business needs into technical specifications and actionable development plans.",
    ],
  },
  {
    role: "Web Developer",
    type: "Full-Time",
    company: "Xgrid.co",
    period: "Sep 2024 – Dec 2026",
    points: [
      "Developed enterprise websites using WordPress, Webflow, and HubSpot, improving scalability, performance, and deployment efficiency.",
      "Collaborated in Agile teams with developers, designers, and SEO specialists, ensuring smooth delivery across projects.",
      "Built reusable ACF components and Bricks Builder templates for dynamic, scalable, and maintainable content systems.",
      "Improved website performance and SEO, increasing PageSpeed scores from 60% to 90% across projects.",
      "Performed Selenium-based automated testing, ensuring cross-browser compatibility across multiple devices and browsers.",
    ],
  },
  {
    role: "Junior Web Developer",
    type: "Intern",
    company: "Xgrid.co",
    period: "Mar 2024 – Aug 2024",
    points: [
      "Used Elementor and Avada to design and build pages.",
      "Assisted senior engineers on custom work with HTML, CSS, Bootstrap, and JavaScript.",
      "Ran QA and wrote reports on how the sites behaved.",
      "Found bugs and performance issues.",
    ],
  },
  {
    role: "WordPress Assistant",
    type: "Volunteer",
    company: "National Labour Federation",
    period: "Oct 2023 – Dec 2023",
    points: [
      "Assisted in WordPress theme customization, improving UI consistency, functionality, and overall website performance.",
      "Supported the development team with UI/UX enhancements, troubleshooting, and basic website maintenance.",
    ],
  },
  {
    role: "Game Developer",
    type: "Apprenticeship",
    company: "Mindstorm Studios",
    period: "Jun 2023 – Aug 2023",
    points: [
      "Designed and built FooDefender, a 3D pixel-art tower defense game, in one month.",
      "Integrated 2D character mechanics into 3D environments.",
      "Built strategic gameplay that asks the player to place traps against enemy waves.",
      "Won the Outstanding Art Award at Pakistan’s largest game jam.",
    ],
  },
];
