import { experience } from "../../data/experience";
import Section from "../../shared/components/Section";

export default function WorkPage() {
  return (
    <Section
      id="work-page"
      subtitle="Work Experience"
      className="bg-section-work pt-28"
    >
      <ol className="relative">
        {experience.map((item, index) => (
          <li
            key={`${item.company}-${item.role}-${item.period}`}
            className="relative pb-8 pl-14 last:pb-0 md:pl-16"
          >
            {index < experience.length - 1 && (
              <span
                aria-hidden
                className="absolute top-10 -bottom-12 left-[7px] w-1 bg-black md:left-[9px]"
              />
            )}
            <span
              aria-hidden
              className="absolute top-[30px] left-0 z-10 h-5 w-5 border-[3px] border-black bg-section-reviews"
            />
            <span
              aria-hidden
              className="absolute top-[38px] left-5 h-1 w-9 bg-black md:w-11"
            />
            <article className="neo-card p-6 text-left md:p-8">
              <div className="flex flex-col gap-3 border-b-2 border-black pb-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-black">
                    {item.role} | {item.type}
                  </h2>
                  {item.company && (
                    <p className="mt-2 inline-block border-2 border-black bg-section-reviews px-3 py-1 text-sm font-bold text-black">
                      {item.company}
                    </p>
                  )}
                </div>
                <span className="neo-sticker">{item.period}</span>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 font-medium text-black">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
