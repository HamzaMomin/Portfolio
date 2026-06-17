import Section from "../../shared/components/Section";

export default function ContactPage() {
  return (
    <Section
      id="contact-page"
      subtitle="Contact"
      title="Let's work together"
      className="pt-28"
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div className="text-left">
          <p className="text-lg text-neutral-600">
            This contact page is ready for your form, EmailJS integration, or
            social links. Tell me what you want clickable and I&apos;ll wire it
            up.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-left">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Reach out
          </p>
          <ul className="mt-4 space-y-3 text-neutral-700">
            <li>
              Email:{" "}
              <a
                href="mailto:hamzamomin5@gmail.com"
                className="font-medium text-neutral-900 hover:underline"
              >
                hamzamomin5@gmail.com
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/HamzaMomin"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-neutral-900 hover:underline"
              >
                @HamzaMomin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
