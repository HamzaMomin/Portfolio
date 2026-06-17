import Section from "../../../shared/components/Section";

export default function AboutSection() {
  return (
    <Section
      id="about"
      subtitle="About"
      title="A little about me"
      className="bg-neutral-50"
    >
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div className="text-left">
          <p className="text-lg leading-relaxed text-neutral-700">
            I&apos;m a frontend developer focused on clean UI, responsive
            layouts, and polished interactions. I enjoy turning ideas into
            accessible, performant web products.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-neutral-700">
            This section lives on the home page. You can later make parts of it
            clickable — for example a resume download, skills list, or a link to
            a dedicated about page.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-left shadow-sm">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Quick facts
          </p>
          <ul className="mt-4 space-y-3 text-neutral-700">
            <li>Role: Frontend Developer</li>
            <li>Focus: React, TypeScript, Tailwind CSS</li>
            <li>Location: Available for remote work</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
