/**
 * JS mirror of theme tokens in src/styles/theme.css.
 * Prefer editing theme.css for visual changes — this is for programmatic use.
 */
export const theme = {
  ink: "#000000",
  surface: "#ffffff",
  accent: "#ff4911",

  header: "#ffeb3b",
  body: "#ffffff",
  footer: "#f3f3f3",

  sections: {
    hero: "#1c723f",
    about: "#e8f5e9",
    projects: "#ead150",
    work: "#8489e9",
    contact: "#604652",
  },
} as const;

export type ThemeColor = keyof typeof theme | keyof typeof theme.sections;
