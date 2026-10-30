import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  titleClassName?: string;
  children: ReactNode;
  className?: string;
  /** Light text for dark section backgrounds. */
  light?: boolean;
}

export default function Section({
  id,
  title,
  subtitle,
  titleClassName = "",
  children,
  className = "",
  light = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-4 py-16 sm:px-6 md:px-12 md:py-20 lg:px-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        {(title || subtitle) && (
          <header className="mb-12 text-left">
            {subtitle && <p className="neo-sticker mb-4">{subtitle}</p>}
            {title && (
              <h2
                className={`text-3xl font-bold tracking-tight sm:text-4xl ${light ? "text-white" : "text-black"} ${titleClassName}`}
              >
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
