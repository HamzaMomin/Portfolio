import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { trackEvent } from "../../analytics";
import Section from "../../shared/components/Section";

const links = [
  { label: "info@hamzamomin.com", href: "mailto:info@hamzamomin.com" },
  { label: "GitHub", href: "https://github.com/HamzaMomin" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hamzamomin/" },
  { label: "Fiverr", href: "https://www.fiverr.com/s/yvNKYob" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~01c3ec471b65026c1f?mp_source=share" },
];

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setStatus("idle");
    trackEvent("clicked_contact", { category: "Contact" });

    emailjs
      .sendForm(
        "service_h94tldk",
        "template_6w6a00j",
        form.current,
        "FmRbhS07q7oZLbZGT",
      )
      .then(
        () => {
          setStatus("sent");
          form.current?.reset();
          setIsSubmitting(false);
        },
        () => {
          setStatus("error");
          setIsSubmitting(false);
        },
      );
  };

  return (
    <Section
      id="contact-page"
      subtitle="Contact"
      title="Let's work together"
      className="bg-section-contact pt-28"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="neo-card p-6 text-left md:p-8">
          <p className="text-lg font-medium text-black">
            Want to collaborate or hire a software engineer for a project? Send
            a note and I&apos;ll get back to you.
          </p>
          <ul className="mt-6 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="font-bold text-black underline decoration-2 underline-offset-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="neo-card p-6 text-left"
        >
          <div className="grid gap-4">
            <label className="block text-sm font-bold text-black">
              Name
              <input
                type="text"
                name="user_name"
                required
                autoComplete="name"
                className="mt-2 w-full border-2 border-black bg-white px-3 py-2 text-black shadow-[4px_4px_0_0_#000] outline-none"
              />
            </label>
            <label className="block text-sm font-bold text-black">
              Email
              <input
                type="email"
                name="user_email"
                required
                autoComplete="email"
                className="mt-2 w-full border-2 border-black bg-white px-3 py-2 text-black shadow-[4px_4px_0_0_#000] outline-none"
              />
            </label>
            <label className="block text-sm font-bold text-black">
              Message
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full border-2 border-black bg-white px-3 py-2 text-black shadow-[4px_4px_0_0_#000] outline-none"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="neo-pill neo-pill-filled mt-6 text-sm disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending…" : "Send message"}
          </button>

          {status === "sent" && (
            <p className="mt-4 text-sm font-medium text-green-700">
              Message sent. I&apos;ll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm font-medium text-red-700">
              Something went wrong. Email info@hamzamomin.com instead.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
