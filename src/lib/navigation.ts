export type NavItem =
  | { label: string; type: "route"; path: string }
  | { label: string; type: "section"; path: "/"; sectionId: string };

export const mainNav: NavItem[] = [
  { label: "About", type: "section", path: "/", sectionId: "about" },
  { label: "Projects", type: "section", path: "/", sectionId: "projects" },
  { label: "Work", type: "route", path: "/work" },
  { label: "Contact", type: "route", path: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "Home", type: "route", path: "/" },
  { label: "About", type: "section", path: "/", sectionId: "about" },
  { label: "Projects", type: "route", path: "/projects" },
  { label: "Work", type: "route", path: "/work" },
  { label: "Contact", type: "route", path: "/contact" },
];
