import { Link } from "react-router-dom";
import Section from "../../../shared/components/Section";

export default function HeroSection() {
  return (
    <Section id="hero" className="pt-28 pb-16 md:pt-36">
      <div className="text-left">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-neutral-500">
          Frontend Developer
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 md:text-6xl">
          Hi, I&apos;m Hamza Momin — I build thoughtful web experiences.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-600">
          This portfolio blends a single-page flow with dedicated pages. Explore
          sections below or jump to full pages when you need more detail.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="neo-pill neo-pill-filled text-sm"
          >
            View projects
          </button>
          <Link to="/contact" className="neo-pill text-sm">
            Contact me
          </Link>
        </div>
      </div>
    </Section>
  );
}
