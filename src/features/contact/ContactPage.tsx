import { Github, Linkedin, Mail } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { trackEvent } from "../../analytics";
import { sendContact } from "../../lib/mail";
import Section from "../../shared/components/Section";

function FiverrMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#111111" />
      <path
        fill="#7dffc3"
        d="M20.2 7.4h-4.2c-3.2 0-5.3 2-5.6 5.2H7.6v3.4h2.8V25h3.8v-9H17v-3.4h-2.6c.3-1.4 1.2-2 2.5-2h3.3V7.4z"
      />
    </svg>
  );
}

function UpworkMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#14a800" />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Arial, sans-serif"
        fontSize="13"
        fontWeight="700"
      >
        Up
      </text>
    </svg>
  );
}

const links: { label: string; detail: string; href: string; tone: string; icon: ReactNode }[] = [
  {
    label: "Email",
    detail: "info@hamzamomin.com",
    href: "mailto:info@hamzamomin.com",
    tone: "bg-white",
    icon: <Mail size={22} strokeWidth={2.5} aria-hidden />,
  },
  {
    label: "Email",
    detail: "hamzamomin5@gmail.com",
    href: "mailto:hamzamomin5@gmail.com",
    tone: "bg-white",
    icon: <Mail size={22} strokeWidth={2.5} aria-hidden />,
  },
  {
    label: "GitHub",
    detail: "github.com/HamzaMomin",
    href: "https://github.com/HamzaMomin",
    tone: "bg-[#f4f4f4]",
    icon: <Github size={22} strokeWidth={2.5} aria-hidden />,
  },
  {
    label: "LinkedIn",
    detail: "linkedin.com/in/hamzamomin",
    href: "https://www.linkedin.com/in/hamzamomin/",
    tone: "bg-[#d7e9ff]",
    icon: <Linkedin size={22} strokeWidth={2.5} aria-hidden />,
  },
  {
    label: "Fiverr",
    detail: "fiverr.com/hamzamomin1",
    href: "https://www.fiverr.com/hamzamomin1?public_mode=true",
    tone: "bg-[#1dbf73]",
    icon: <FiverrMark />,
  },
  {
    label: "Upwork",
    detail: "Hire me on Upwork",
    href: "https://www.upwork.com/freelancers/~01c3ec471b65026c1f?mp_source=share",
    tone: "bg-white",
    icon: <UpworkMark />,
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setIsSubmitting(true);
    setStatus("idle");
    trackEvent("clicked_contact", { category: "Contact" });

    sendContact({
      name: String(data.get("user_name") ?? ""),
      email: String(data.get("user_email") ?? ""),
      message: String(data.get("message") ?? ""),
    }).then(
      () => {
        setStatus("sent");
        form.reset();
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
        <div className="text-left">
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
                  className={`neo-card flex items-center gap-3 px-4 py-3 transition-transform hover:-translate-y-1 hover:translate-x-1 ${link.tone}`}
                >
                  <span className="neo-icon-btn shrink-0">{link.icon}</span>
                  <span>
                    <span className="block text-sm font-black text-black">{link.label}</span>
                    <span className="block text-sm font-medium text-black">{link.detail}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={sendEmail} className="neo-card p-6 text-left">
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
