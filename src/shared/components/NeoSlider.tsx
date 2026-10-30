import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NeoSliderProps {
  children: ReactNode[];
  label: string;
  perView?: { base: number; md: number; lg: number };
  /** Size the frame to the slides on screen, instead of the tallest slide. */
  fitVisible?: boolean;
}

function slidesForWidth(width: number, perView: NonNullable<NeoSliderProps["perView"]>) {
  if (width >= 1024) return perView.lg;
  if (width >= 768) return perView.md;
  return perView.base;
}

export default function NeoSlider({
  children,
  label,
  perView = { base: 1, md: 2, lg: 3 },
  fitVisible = false,
}: NeoSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [frameHeight, setFrameHeight] = useState<number>();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(() =>
    typeof window === "undefined"
      ? perView.base
      : slidesForWidth(window.innerWidth, perView),
  );

  useEffect(() => {
    const update = () => setVisible(slidesForWidth(window.innerWidth, perView));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [perView]);

  const maxIndex = Math.max(0, children.length - visible);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  useLayoutEffect(() => {
    if (!fitVisible) return;
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const slides = [...track.children] as HTMLElement[];
      const height = slides.slice(index, index + visible).reduce((tallest, slide) => {
        const card = slide.querySelector("article");
        if (!card) return Math.max(tallest, slide.offsetHeight);
        const clone = card.cloneNode(true) as HTMLElement;
        clone.style.height = "max-content";
        clone.style.minHeight = "0";
        clone.style.flex = "none";
        clone.style.width = `${card.clientWidth}px`;
        clone.style.position = "absolute";
        clone.style.visibility = "hidden";
        clone.style.pointerEvents = "none";
        document.body.appendChild(clone);
        const next = clone.offsetHeight;
        clone.remove();
        return Math.max(tallest, next);
      }, 0);
      setFrameHeight(height);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [fitVisible, index, visible, children.length]);

  useEffect(() => {
    if (maxIndex === 0) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 4200);
    return () => window.clearInterval(timer);
  }, [maxIndex]);

  const go = (direction: -1 | 1) => {
    setIndex((current) => {
      const next = current + direction;
      if (next < 0) return maxIndex;
      if (next > maxIndex) return 0;
      return next;
    });
  };

  return (
    <div>
      <div
        className="overflow-hidden transition-[height] duration-500"
        style={fitVisible && frameHeight ? { height: frameHeight } : undefined}
      >
        <div
          ref={trackRef}
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
        >
          {children.map((child, childIndex) => (
            <div
              key={childIndex}
              className="flex shrink-0 px-2"
              style={{
                width: `${100 / visible}%`,
                height: fitVisible && frameHeight ? frameHeight : undefined,
              }}
            >
              <div className="flex h-full w-full flex-col">{child}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm font-bold text-current">
          {index + 1} / {maxIndex + 1}
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            className="neo-icon-btn"
            aria-label={`Previous ${label}`}
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="neo-icon-btn"
            aria-label={`Next ${label}`}
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
