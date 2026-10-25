import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ResumeDialog from "../ResumeDialog";

function TrackingEye({
  top,
  left,
  size,
  offset,
}: {
  top: string;
  left: string;
  size: string;
  offset: { x: number; y: number };
}) {
  return (
    <span
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[3px] border-black bg-white"
      style={{ top, left, width: size, height: size }}
    >
      <span
        className="absolute top-1/2 left-1/2 rounded-full bg-black"
        style={{
          width: "4.2cqw",
          height: "4.2cqw",
          transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px))`,
        }}
      />
    </span>
  );
}

export default function HeroSection() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const frame = frameRef.current;
      if (!frame) return;
      const rect = frame.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height * 0.46);
      const distance = Math.hypot(dx, dy) || 1;
      const smallEye = rect.width * 0.105;
      const pupil = rect.width * 0.042;
      const reach = Math.max(2, smallEye / 2 - pupil / 2 - 4);
      setOffset({
        x: (dx / distance) * reach,
        y: (dy / distance) * reach,
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="hero"
      className="scroll-mt-24 bg-section-hero px-4 py-14 sm:px-6 md:px-12 md:py-20 lg:px-24 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="text-left">
          <p className="neo-sticker mb-6 bg-section-reviews">Solutions Engineer</p>
          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Hamza Momin — I build software, from web products to games.
          </h1>
          <p className="mt-6 max-w-xl border-l-4 border-section-reviews pl-4 text-lg font-medium text-white">
            Solutions engineer with a knack for pixel art. I ship apps and sites at
            Xgrid, and I previously built games at Mindstorm Studios.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="neo-pill bg-section-reviews text-sm"
            >
              View projects
            </button>
            <Link to="/work" className="neo-pill bg-brand-accent text-sm text-black">
              Experience
            </Link>
            <Link to="/contact" className="neo-pill text-sm">
              Contact me
            </Link>
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="neo-pill resume-cta text-sm"
            >
              Resume
              <span aria-hidden className="resume-star">
                ✦
              </span>
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <p className="neo-card pixel-text absolute -top-4 left-2 z-20 -rotate-6 bg-brand-accent px-3 py-2 text-sm text-black">
            I see you.
          </p>
          <div ref={frameRef} className="@container neo-card relative rotate-1 bg-section-reviews">
            <img
              src="/hamza-eyes.jpg"
              alt="Illustrated portrait of Hamza Momin"
              className="w-full"
            />
            <TrackingEye top="49%" left="39.9%" size="10.5cqw" offset={offset} />
            <TrackingEye top="46.2%" left="53.4%" size="18cqw" offset={offset} />
          </div>
        </div>
      </div>
      {resumeOpen && <ResumeDialog onClose={() => setResumeOpen(false)} />}
    </section>
  );
}
