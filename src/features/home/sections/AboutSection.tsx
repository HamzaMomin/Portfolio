import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Section from "../../../shared/components/Section";

export default function AboutSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLive(true);
      },
      { threshold: 0.3 },
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="about"
      subtitle="About"
      title="From pixel art to production code"
      titleClassName="pixel-text text-center !text-2xl leading-snug sm:!text-3xl"
      className="bg-section-about"
    >
      <div
        ref={cardRef}
        className={`about-card neo-card p-6 text-left md:p-8${live ? " is-live" : ""}`}
      >
        <p className="about-line text-lg leading-relaxed text-black">
          I started out drawing pixel art, always curious about how things look
          and why they work. Somewhere along the way I fell for the web, and
          I&apos;ve been building websites and SaaS products ever since.
        </p>
        <p className="about-line mt-4 text-lg leading-relaxed text-black">
          These days I work with remote teams and clients across time zones. I
          like clear communication, honest timelines and owning a project from
          the first Figma file to launch day. I treat every build like it&apos;s
          my own product.
        </p>
        <Link to="/work" className="about-line neo-pill mt-8 text-sm">
          See experience
        </Link>
      </div>
    </Section>
  );
}
