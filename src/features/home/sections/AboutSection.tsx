import { Link } from "react-router-dom";
import Section from "../../../shared/components/Section";

export default function AboutSection() {
  return (
    <Section
      id="about"
      subtitle="About"
      title="Solutions engineer with a knack for pixel art"
      className="bg-section-about"
    >
      <div className="neo-card p-6 text-left md:p-8">
        <p className="text-lg leading-relaxed text-black">
          I&apos;m a solutions engineer who builds products across the web and
          interactive media. At Xgrid I work on React, WordPress, PHP, Webflow,
          and Unbounce — including QA and performance work that raised page
          speed from 60% to 92%.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-black">
          Before that I apprenticed as a game developer at Mindstorm Studios. I
          designed and built FooDefender, a 3D pixel-art tower defense game, in
          one month, and won the Outstanding Art Award at Pakistan&apos;s
          largest game jam.
        </p>
        <Link to="/work" className="neo-pill mt-8 text-sm">
          See experience
        </Link>
      </div>
    </Section>
  );
}
