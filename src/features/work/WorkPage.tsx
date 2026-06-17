import Section from "../../shared/components/Section";

const experience = [
  {
    role: "Frontend Developer",
    company: "Your Company",
    period: "2024 — Present",
    summary: "Placeholder work entry — replace with your real experience.",
  },
  {
    role: "Web Developer",
    company: "Previous Role",
    period: "2022 — 2024",
    summary: "Another placeholder role you can expand into a full case study.",
  },
];

export default function WorkPage() {
  return (
    <Section
      id="work-page"
      subtitle="Work"
      title="Experience"
      className="pt-28"
    >
      <p className="mb-10 max-w-2xl text-left text-neutral-600">
        This is a separate page route. You can link to it from the header or
        make cards on the home page clickable later.
      </p>

      <div className="space-y-6">
        {experience.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="rounded-2xl border border-neutral-200 bg-white p-6 text-left shadow-sm md:p-8"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h2 className="text-xl font-semibold text-neutral-900">
                {item.role}
              </h2>
              <span className="text-sm text-neutral-500">{item.period}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-neutral-700">
              {item.company}
            </p>
            <p className="mt-4 text-neutral-600">{item.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
