import { Star } from "lucide-react";
import { reviews, type Review } from "../../../data/reviews";
import NeoSlider from "../../../shared/components/NeoSlider";
import Section from "../../../shared/components/Section";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={16}
          strokeWidth={2.5}
          aria-hidden
          className={index < count ? "fill-black text-black" : "text-black"}
        />
      ))}
    </div>
  );
}

function PlatformMark({ platform }: { platform: Review["platform"] }) {
  if (platform === "Fiverr") {
    return (
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden>
        <circle cx="16" cy="16" r="16" fill="#111111" />
        <path
          fill="#7dffc3"
          d="M20.2 7.4h-4.2c-3.2 0-5.3 2-5.6 5.2H7.6v3.4h2.8V25h3.8v-9H17v-3.4h-2.6c.3-1.4 1.2-2 2.5-2h3.3V7.4z"
        />
      </svg>
    );
  }

  if (platform === "Upwork") {
    return (
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden>
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

  return <img src="/linkedin.svg" alt="" className="h-8 w-8 shrink-0" />;
}

const cardTone = {
  Fiverr: "testimonial-fiverr",
  Upwork: "testimonial-upwork",
  LinkedIn: "testimonial-linkedin",
} as const;

export default function ReviewsSection() {
  return (
    <Section
      id="reviews"
      title="Testimonials"
      className="bg-section-testimonials"
      light
    >
      <NeoSlider label="testimonials" perView={{ base: 1, md: 2, lg: 3 }} fitVisible>
        {reviews.map((review) => (
          <article
            key={review.id}
            className={`neo-card flex h-full flex-1 flex-col p-4 text-left ${cardTone[review.platform]}`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-2 text-sm font-black text-black">
                <PlatformMark platform={review.platform} />
                {review.platform}
              </span>
              {review.stars ? <Stars count={review.stars} /> : null}
            </div>
            <p className="mt-4 text-base font-medium leading-snug text-black">“{review.quote}”</p>
            <div className="mt-auto border-t-2 border-black pt-3">
              <p className="text-sm font-bold text-black">{review.name}</p>
              {review.gig ? <p className="mt-1 text-xs font-bold text-black">{review.gig}</p> : null}
            </div>
          </article>
        ))}
      </NeoSlider>
    </Section>
  );
}
