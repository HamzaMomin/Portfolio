import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/HamzaMomin",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hamzamomin/",
    icon: Linkedin,
  },
] as const;

export default function Footer() {
  return (
    <footer className="border-t-2 border-brand-ink bg-brand-header py-4 pl-4 pr-6 shadow-brutal-lg-top md:pl-6 md:pr-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-left text-sm font-bold text-brand-ink">
          © {new Date().getFullYear()} Hamza Momin. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="neo-icon-btn"
            >
              <Icon size={20} strokeWidth={2.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
