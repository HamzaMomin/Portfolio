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
    type: "Full-time",
    company: "Xgrid.co",
    period: "Sep 2025 – Present",
    points: [
      "Build and ship software on Webflow, WordPress, PHP, Unbounce, and React.",
      "Run QA and manual testing across multiple sites to keep them functional and responsive.",
      "Improved page speed from 60% to 92%.",
      "Design and customize layouts with Bricks Builder and current interface practices.",
    ],
  },
  {
    role: "Junior WordPress Developer",
    type: "Full-time",
    company: "Xgrid.co",
    period: "Sep 2024 – Aug 2025",
    points: [
      "Worked across the interface and the server with HTML, CSS, Bootstrap, and PHP.",
      "Integrated ACF fields and built dynamic pages.",
      "Fixed site issues, improved performance, and ran QA.",
      "Built and customized pages with Elementor and Avada.",
    ],
  },
  {
    role: "Junior WordPress Developer",
    type: "Internship",
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
