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
      { id: "ghl", label: "GoHighLevel" },
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

/** Skills used together. Same-group pairs stay cyan. Cross-group pairs are accent-colored. */
export const skillTies: SkillTie[] = [
  { id: "html-elementor", skills: ["html", "elementor"] },
  { id: "css-webflow", skills: ["css", "webflow"] },
  { id: "scss-oxygen", skills: ["scss", "oxygen"] },
  { id: "scss-bricks", skills: ["scss", "bricks"] },
  { id: "javascript-gtm", skills: ["javascript", "gtm"] },
  { id: "react-wordpress", skills: ["react", "wordpress"] },
  { id: "react-firebase", skills: ["react", "firebase"] },
  { id: "react-posthog", skills: ["react", "posthog"] },
  { id: "react-resend", skills: ["react", "resend"] },
  { id: "next-emailjs", skills: ["next", "emailjs"] },
  { id: "next-supabase", skills: ["next", "supabase"] },
  { id: "next-ga4", skills: ["next", "ga4"] },
  { id: "wxt-rest", skills: ["wxt", "rest"] },
  { id: "bootstrap-wordpress", skills: ["bootstrap", "wordpress"] },
  { id: "responsive-pagespeed", skills: ["responsive", "pagespeed"] },
  { id: "astro-cloudflare", skills: ["astro", "cloudflare"] },
  { id: "wordpress-php", skills: ["wordpress", "php"] },
  { id: "wordpress-gtm", skills: ["wordpress", "gtm"] },
  { id: "wordpress-posthog", skills: ["wordpress", "posthog"] },
  { id: "wordpress-ghl", skills: ["wordpress", "ghl"] },
  { id: "wordpress-seo", skills: ["wordpress", "seo"] },
  { id: "wordpress-tawk", skills: ["wordpress", "tawk"] },
  { id: "woocommerce-mysql", skills: ["woocommerce", "mysql"] },
  { id: "acf-php", skills: ["acf", "php"] },
  { id: "elementor-ga4", skills: ["elementor", "ga4"] },
  { id: "avada-seo", skills: ["avada", "seo"] },
  { id: "webflow-zapier", skills: ["webflow", "zapier"] },
  { id: "wix-zapier", skills: ["wix", "zapier"] },
  { id: "squarespace-ga4", skills: ["squarespace", "ga4"] },
  { id: "rest-n8n", skills: ["rest", "n8n"] },
  { id: "cursor-react", skills: ["cursor", "react"] },
  { id: "botpress-claude", skills: ["botpress", "claude"] },
  { id: "gemini-n8n", skills: ["gemini", "n8n"] },
  { id: "huggingface-rest", skills: ["huggingface", "rest"] },
  { id: "groq-botpress", skills: ["groq", "botpress"] },
  { id: "typebot-webflow", skills: ["typebot", "webflow"] },
  { id: "landbot-wix", skills: ["landbot", "wix"] },
  { id: "selenium-github", skills: ["selenium", "github"] },
  { id: "manual-jira", skills: ["manual", "jira"] },
  { id: "pagespeed-cloudflare", skills: ["pagespeed", "cloudflare"] },
  { id: "jira-github", skills: ["jira", "github"] },
  { id: "react-tailwind", skills: ["react", "tailwind"] },
  { id: "next-sanity", skills: ["next", "sanity"] },
  { id: "wordpress-woocommerce", skills: ["wordpress", "woocommerce"] },
  { id: "php-mysql", skills: ["php", "mysql"] },
  { id: "supabase-postgresql", skills: ["supabase", "postgresql"] },
  { id: "zapier-ghl", skills: ["zapier", "ghl"] },
  { id: "n8n-twilio", skills: ["n8n", "twilio"] },
  { id: "agile-jira", skills: ["agile", "jira"] },
  { id: "scrum-clickup", skills: ["scrum", "clickup"] },
  { id: "git-docker", skills: ["git", "docker"] },
  { id: "aws-cloudflare", skills: ["aws", "cloudflare"] },
  { id: "cursor-aimcp", skills: ["cursor", "aimcp"] },
];

export function skillLabel(id: string) {
  for (const branch of skillTree) {
    const skill = branch.skills.find((item) => item.id === id);
    if (skill) return skill.label;
  }
  return id;
}
