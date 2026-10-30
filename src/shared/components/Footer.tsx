import { Github, Linkedin } from "lucide-react";

function XIcon({ size = 20 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

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
  {
    label: "X",
    href: "https://x.com/hamzamomindev",
    icon: XIcon,
  },
];

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
