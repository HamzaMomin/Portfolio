const tagColors: Record<string, string> = {
  React: "#7ee0ff",
  TypeScript: "#c5d8ff",
  "Tailwind CSS": "#99f6e4",
  Cloudflare: "#ffcf70",
  "Hugging Face": "#ffe14d",
  Flutter: "#b6f3ff",
  Firebase: "#ffd59a",
  "University Final Year Project": "#e4d4ff",
  Python: "#ffe566",
  Polygon: "#d4c2ff",
  "ERC-721": "#ffc2d4",
  Blockchain: "#b8f5c8",
  JSON: "#ddd6fe",
  HTML: "#ffc09a",
  CSS: "#a9d4ff",
  Bootstrap: "#d7c4ff",
  JavaScript: "#ffe14d",
  Figma: "#ffc2e2",
  GitHub: "#d5f5d8",
  Webflow: "#c5dcff",
  GSAP: "#9ef0b5",
  "Responsive layout": "#ffe7a3",
};

const fallbackColors = ["#ffd6e0", "#d6f5ff", "#e4ffb8", "#ffe7c2", "#e6d6ff", "#c8fff4"];

function colorFor(tag: string) {
  const known = tagColors[tag];
  if (known) return known;
  const index = [...tag].reduce((sum, char) => sum + char.charCodeAt(0), 0) % fallbackColors.length;
  return fallbackColors[index];
}

export default function ProjectTag({ tag }: { tag: string }) {
  return (
    <span className="neo-tag" style={{ backgroundColor: colorFor(tag) }}>
      {tag}
    </span>
  );
}
