import { useEffect, useRef, useState } from "react";
import { skillLabel, skillTies, skillTree } from "../../../data/skillTree";
import Section from "../../../shared/components/Section";

interface Box {
  id: string;
  left: number;
  right: number;
  top: number;
  bottom: number;
  midX: number;
  midY: number;
}

interface TiePath {
  id: string;
  d: string;
  cross: boolean;
  skills: [string, string];
}

function delay(seconds: number) {
  return { animationDelay: `${seconds}s` };
}

function offsetBox(element: HTMLElement, frame: HTMLElement): Box {
  let left = 0;
  let top = 0;
  let node: HTMLElement | null = element;

  while (node && node !== frame) {
    left += node.offsetLeft;
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }

  const width = element.offsetWidth;
  const height = element.offsetHeight;

  return {
    id: element.dataset.node ?? "",
    left,
    right: left + width,
    top,
    bottom: top + height,
    midX: left + width / 2,
    midY: top + height / 2,
  };
}

function skillBranch(id: string) {
  return skillTree.find((branch) => branch.skills.some((skill) => skill.id === id))?.id;
}

function linkCurve(a: Box, b: Box) {
  if (Math.abs(a.midY - b.midY) < 14) {
    const left = a.left <= b.left ? a : b;
    const right = left === a ? b : a;
    const midX = (left.right + right.left) / 2;
    const lift = Math.max(28, (right.left - left.right) * 0.25);
    return `M ${left.right} ${left.midY} Q ${midX} ${left.top - lift}, ${right.left} ${right.midY}`;
  }

  const upper = a.midY <= b.midY ? a : b;
  const lower = upper === a ? b : a;
  const midY = (upper.bottom + lower.top) / 2;
  return `M ${upper.midX} ${upper.bottom} C ${upper.midX} ${midY}, ${lower.midX} ${midY}, ${lower.midX} ${lower.top}`;
}

function measureTies(frame: HTMLElement, activeId: string | null): TiePath[] {
  if (!activeId) return [];

  const boxes = [...frame.querySelectorAll<HTMLElement>("[data-node]")].map((element) =>
    offsetBox(element, frame),
  );
  const byId = new Map(boxes.map((box) => [box.id, box]));
  const active = byId.get(activeId);
  if (!active) return [];

  return skillTies.flatMap((tie) => {
    if (!tie.skills.includes(activeId)) return [];
    const otherId = tie.skills.find((id) => id !== activeId);
    const other = otherId ? byId.get(otherId) : undefined;
    if (!other) return [];
    return [
      {
        id: tie.id,
        d: linkCurve(active, other),
        cross: skillBranch(tie.skills[0]) !== skillBranch(tie.skills[1]),
        skills: [activeId, other.id] as [string, string],
      },
    ];
  });
}

function Node({
  label,
  nodeId,
  seconds,
  tone,
  emphasis = "none",
  scanning = false,
  onPick,
}: {
  label: string;
  nodeId: string;
  seconds: number;
  tone: "root" | "branch" | "leaf";
  emphasis?: "none" | "active" | "cross" | "same" | "dim";
  scanning?: boolean;
  onPick?: (id: string, fromClick: boolean) => void;
}) {
  const size =
    tone === "root"
      ? "tree-root whitespace-nowrap bg-section-reviews px-3 py-2 text-sm font-black"
      : tone === "branch"
        ? "bg-white px-3 py-2 text-sm font-black"
        : "bg-white px-2 py-1 text-xs font-bold sm:text-sm";
  const glow =
    emphasis === "active"
      ? "shadow-[3px_3px_0_0_#fff]"
      : emphasis === "cross"
        ? "shadow-[3px_3px_0_0_#ff4911]"
        : emphasis === "same"
          ? "shadow-[3px_3px_0_0_#3ee0ff]"
          : emphasis === "dim"
            ? "opacity-40 shadow-[3px_3px_0_0_#ffeb3b]"
            : "shadow-[3px_3px_0_0_#ffeb3b]";
  const className = `tree-node relative z-10 inline-flex max-w-full border-2 border-black text-left text-black transition-opacity ${glow} ${size}`;

  if (tone === "leaf") {
    return (
      <button
        type="button"
        data-node={nodeId}
        className={`${className} cursor-pointer${scanning ? " is-scan" : ""}`}
        style={delay(seconds)}
        onMouseEnter={() => {
          if (window.matchMedia("(pointer: coarse)").matches) return;
          onPick?.(nodeId, false);
        }}
        onClick={() => onPick?.(nodeId, true)}
      >
        {label}
      </button>
    );
  }

  return (
    <span data-node={nodeId} className={className} style={delay(seconds)}>
      {label}
    </span>
  );
}

const leafIds = skillTree.flatMap((branch) => branch.skills.map((skill) => skill.id));

export default function SkillTreeSection() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [scanIndex, setScanIndex] = useState(0);
  const [ties, setTies] = useState<TiePath[]>([]);

  const linked = new Map<string, "cross" | "same">();
  if (activeId) {
    for (const tie of skillTies) {
      if (!tie.skills.includes(activeId)) continue;
      const otherId = tie.skills.find((id) => id !== activeId);
      if (!otherId) continue;
      const cross = skillBranch(tie.skills[0]) !== skillBranch(tie.skills[1]);
      linked.set(otherId, cross ? "cross" : "same");
    }
  }

  const pickSkill = (id: string, fromClick: boolean) => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (fromClick && !coarse) return;
    setActiveId((current) => (fromClick && current === id ? null : id));
  };

  useEffect(() => {
    if (!live || activeId) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setScanIndex((index) => (index + 1) % leafIds.length);
    }, 650);

    return () => window.clearInterval(timer);
  }, [live, activeId]);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const measure = () => setTies(measureTies(frame, activeId));
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(frame);
    frame.addEventListener("animationend", measure);
    document.fonts?.ready.then(measure).catch(() => undefined);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLive(true);
      },
      { threshold: 0.08 },
    );
    intersectionObserver.observe(frame);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      frame.removeEventListener("animationend", measure);
    };
  }, [activeId]);

  return (
    <Section
      id="skills"
      subtitle="Skills"
      className="bg-section-skills"
      light
    >
      <div
        ref={frameRef}
        className={`skill-tree relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-0 ${live ? "is-live" : ""}`}
        onMouseLeave={() => {
          if (!window.matchMedia("(pointer: coarse)").matches) setActiveId(null);
        }}
      >
        <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden>
          {ties.map((tie, index) => (
            <path
              key={tie.id}
              className={tie.cross ? "tie-line tie-line-cross" : "tie-line"}
              d={tie.d}
              pathLength={1}
              style={{ ["--tie-i" as string]: index }}
            />
          ))}
        </svg>

        <div className="flex justify-center lg:w-auto lg:shrink-0 lg:justify-start">
          <Node label="Software Engineer" nodeId="root" seconds={0.05} tone="root" />
        </div>

        <div className="flex justify-center lg:hidden">
          <span aria-hidden className="tree-v block h-8 w-1 bg-white" style={delay(0.25)} />
        </div>
        <div className="hidden items-center lg:flex">
          <span aria-hidden className="tree-h block h-1 w-10 bg-white" style={delay(0.25)} />
        </div>

        <div className="relative flex min-w-0 flex-1 flex-col gap-4 lg:py-2 lg:pl-8">
          <span
            aria-hidden
            className="tree-v absolute top-3 bottom-3 left-0 hidden w-1 bg-white lg:block"
            style={delay(0.4)}
          />

          {skillTree.map((branch, branchIndex) => {
            const branchAt = 0.55 + branchIndex * 0.14;
            return (
              <div key={branch.id} className="relative flex flex-col gap-3 md:flex-row md:items-start">
                <span
                  aria-hidden
                  className="tree-h absolute top-4 -left-8 hidden h-1 w-8 bg-white lg:block"
                  style={delay(branchAt)}
                />
                <div className="shrink-0 md:w-56 lg:w-60">
                  <Node label={branch.name} nodeId={branch.id} seconds={branchAt} tone="branch" />
                </div>
                <ul className="flex min-w-0 flex-wrap gap-x-2 gap-y-3">
                  {branch.skills.map((skill, skillIndex) => (
                    <li key={skill.id}>
                      <Node
                        label={skill.label}
                        nodeId={skill.id}
                        seconds={branchAt + 0.12 + skillIndex * 0.035}
                        tone="leaf"
                        scanning={!activeId && skill.id === leafIds[scanIndex]}
                        emphasis={
                          !activeId
                            ? "none"
                            : skill.id === activeId
                              ? "active"
                              : linked.get(skill.id) ?? "dim"
                        }
                        onPick={pickSkill}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-bold text-white">
        <span>Point at a skill to see where it connects.</span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-0.5 w-8 bg-[#3ee0ff]" />
          Same group
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-0.5 w-8 bg-brand-accent" />
          Across groups
        </span>
      </p>
      {activeId && (
        <p className="mt-3 text-sm font-bold text-white">
          {skillLabel(activeId)} connects to{" "}
          {[...linked.keys()].map(skillLabel).join(", ")}.
        </p>
      )}
      <ul className="sr-only">
        {skillTies.map((tie) => (
          <li key={tie.id}>{tie.skills.map(skillLabel).join(", ")}</li>
        ))}
      </ul>
    </Section>
  );
}
