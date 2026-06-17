import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-6 py-20 md:px-12 lg:px-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        {(title || subtitle) && (
          <header className="mb-12 text-left">
            {subtitle && (
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-neutral-500">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
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
