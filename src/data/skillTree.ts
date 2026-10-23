export interface SkillItem {
  id: string;
  label: string;
}

export interface SkillBranch {
  id: string;
  name: string;
  skills: SkillItem[];
}

export interface SkillTie {
  id: string;
  skills: string[];
}

export const skillTree: SkillBranch[] = [
  {
    id: "development",
    name: "Development",
    skills: [
      { id: "html", label: "HTML5" },
      { id: "css", label: "CSS3" },
      { id: "scss", label: "SCSS" },
      { id: "javascript", label: "JavaScript (ES6+)" },
      { id: "react", label: "React.js" },
      { id: "next", label: "Next.js" },
      { id: "wxt", label: "WXT" },
      { id: "tailwind", label: "Tailwind CSS" },
      { id: "bootstrap", label: "Bootstrap" },
      { id: "responsive", label: "Responsive Web Design" },
      { id: "sanity", label: "Sanity" },
      { id: "astro", label: "Astro" },
    ],
  },
  {
    id: "cms",
    name: "CMS",
    skills: [
      { id: "wordpress", label: "WordPress" },
      { id: "woocommerce", label: "WooCommerce" },
      { id: "acf", label: "ACF" },
      { id: "elementor", label: "Elementor" },
      { id: "oxygen", label: "Oxygen Builder" },
      { id: "avada", label: "Avada" },
      { id: "bricks", label: "Bricks Builder" },
      { id: "webflow", label: "Webflow" },
      { id: "wix", label: "Wix" },
      { id: "squarespace", label: "Squarespace" },
    ],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    skills: [
      { id: "php", label: "PHP" },
      { id: "rest", label: "REST APIs" },
      { id: "firebase", label: "Firebase" },
      { id: "supabase", label: "Supabase" },
      { id: "mysql", label: "MySQL" },
      { id: "postgresql", label: "PostgreSQL" },
    ],
  },
  {
    id: "automation",
    name: "Automation & Integrations",
    skills: [
      { id: "zapier", label: "Zapier" },
      { id: "n8n", label: "N8N" },
      { id: "twilio", label: "Twilio" },
      { id: "emailjs", label: "EmailJS" },
      { id: "resend", label: "Resend" },
      { id: "botpress", label: "Botpress" },
      { id: "typebot", label: "Typebot" },
      { id: "landbot", label: "Landbot" },
      { id: "tawk", label: "Tawk.to" },
    ],
  },
  {
    id: "testing",
    name: "Testing & Optimization",
    skills: [
      { id: "selenium", label: "Selenium WebDriver" },
      { id: "manual", label: "Manual QA" },
      { id: "pagespeed", label: "PageSpeed Optimization" },
      { id: "seo", label: "SEO Optimization" },
      { id: "ga4", label: "GA4" },
      { id: "gtm", label: "GTM" },
      { id: "posthog", label: "PostHog" },
    ],
  },
  {
    id: "management",
    name: "Project Management",
    skills: [
      { id: "agile", label: "Agile" },
      { id: "scrum", label: "Scrum" },
      { id: "jira", label: "Jira" },
      { id: "clickup", label: "ClickUp" },
    ],
  },
  {
    id: "devops",
    name: "Tools & DevOps",
    skills: [
      { id: "git", label: "Git" },
      { id: "github", label: "GitHub" },
      { id: "aws", label: "AWS" },
      { id: "docker", label: "Docker" },
      { id: "cloudflare", label: "Cloudflare" },
    ],
  },
  {
    id: "ai",
    name: "AI Tools",
    skills: [
      { id: "cursor", label: "Cursor MCP" },
      { id: "claude", label: "Claude" },
      { id: "gemini", label: "Gemini" },
      { id: "huggingface", label: "Hugging Face" },
      { id: "aimcp", label: "AI MCP" },
      { id: "groq", label: "Groq AI" },
    ],
  },
];

/** Pairs that are used together. Each pair is a blue link when a clear path exists. */
export const skillTies: SkillTie[] = [
  { id: "js-react", skills: ["javascript", "react"] },
  { id: "react-next", skills: ["react", "next"] },
  { id: "react-wxt", skills: ["react", "wxt"] },
  { id: "sanity-astro", skills: ["sanity", "astro"] },
  { id: "wp-woo", skills: ["wordpress", "woocommerce"] },
  { id: "woo-acf", skills: ["woocommerce", "acf"] },
  { id: "acf-elementor", skills: ["acf", "elementor"] },
  { id: "elementor-oxygen", skills: ["elementor", "oxygen"] },
  { id: "oxygen-avada", skills: ["oxygen", "avada"] },
  { id: "avada-bricks", skills: ["avada", "bricks"] },
  { id: "webflow-wix", skills: ["webflow", "wix"] },
  { id: "wix-squarespace", skills: ["wix", "squarespace"] },
  { id: "wp-php", skills: ["wordpress", "php"] },
  { id: "php-mysql", skills: ["php", "mysql"] },
  { id: "react-rest", skills: ["react", "rest"] },
  { id: "rest-firebase", skills: ["rest", "firebase"] },
  { id: "firebase-supabase", skills: ["firebase", "supabase"] },
  { id: "supabase-postgres", skills: ["supabase", "postgresql"] },
  { id: "zapier-n8n", skills: ["zapier", "n8n"] },
  { id: "n8n-rest", skills: ["n8n", "rest"] },
  { id: "email-resend", skills: ["emailjs", "resend"] },
  { id: "botpress-typebot", skills: ["botpress", "typebot"] },
  { id: "typebot-landbot", skills: ["typebot", "landbot"] },
  { id: "selenium-manual", skills: ["selenium", "manual"] },
  { id: "pagespeed-seo", skills: ["pagespeed", "seo"] },
  { id: "pagespeed-cloudflare", skills: ["pagespeed", "cloudflare"] },
  { id: "ga4-gtm", skills: ["ga4", "gtm"] },
  { id: "gtm-posthog", skills: ["gtm", "posthog"] },
  { id: "agile-scrum", skills: ["agile", "scrum"] },
  { id: "scrum-jira", skills: ["scrum", "jira"] },
  { id: "jira-clickup", skills: ["jira", "clickup"] },
  { id: "jira-github", skills: ["jira", "github"] },
  { id: "git-github", skills: ["git", "github"] },
  { id: "aws-docker", skills: ["aws", "docker"] },
  { id: "docker-cloudflare", skills: ["docker", "cloudflare"] },
  { id: "cursor-claude", skills: ["cursor", "claude"] },
  { id: "claude-gemini", skills: ["claude", "gemini"] },
  { id: "botpress-claude", skills: ["botpress", "claude"] },
];

export function skillLabel(id: string) {
  for (const branch of skillTree) {
    const skill = branch.skills.find((item) => item.id === id);
    if (skill) return skill.label;
  }
  return id;
}
