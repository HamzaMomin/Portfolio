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

function crosses(obstacles: Box[], x1: number, y1: number, x2: number, y2: number, ignore: Set<string>) {
  const pad = 1;
  const left = Math.min(x1, x2) - pad;
  const right = Math.max(x1, x2) + pad;
  const top = Math.min(y1, y2) - pad;
  const bottom = Math.max(y1, y2) + pad;

  return obstacles.some(
    (box) =>
      !ignore.has(box.id) &&
      box.right > left &&
      box.left < right &&
      box.bottom > top &&
      box.top < bottom,
  );
}

function channelLink(
  a: Box,
  b: Box,
  obstacles: Box[],
  lanes: { top: number; bottom: number }[],
  origin: number,
  direction: 1 | -1,
  limit: number,
) {
  const ignore = new Set([a.id, b.id]);
  const top = Math.min(a.midY, b.midY);
  const bottom = Math.max(a.midY, b.midY);

  for (let index = 0; index <= lanes.length; index += 1) {
    const x = origin + direction * index * 5;
    if (direction === 1 && x > limit) return null;
    if (direction === -1 && x < limit) return null;

    const lane = lanes[index];
    if (lane && !(bottom < lane.top - 6 || top > lane.bottom + 6)) continue;

    const fromX = x < a.midX ? a.left : a.right;
    const toX = x < b.midX ? b.left : b.right;
    const clear =
      !crosses(obstacles, fromX, a.midY, x, a.midY, ignore) &&
      !crosses(obstacles, x, a.midY, x, b.midY, ignore) &&
      !crosses(obstacles, x, b.midY, toX, b.midY, ignore);
    if (!clear) return null;

    const next = { top, bottom };
    if (lane) {
      lanes[index] = {
        top: Math.min(lane.top, top),
        bottom: Math.max(lane.bottom, bottom),
      };
    } else {
      lanes.push(next);
    }
    return `M ${fromX} ${a.midY} H ${x} V ${b.midY} H ${toX}`;
  }

  return null;
}

function linkPair(a: Box, b: Box, obstacles: Box[], frameWidth: number, lanes: {
  left: { top: number; bottom: number }[];
  right: { top: number; bottom: number }[];
  leftOrigin: number;
  rightOrigin: number;
}) {
  const ignore = new Set([a.id, b.id]);
  const upper = a.top <= b.top ? a : b;
  const lower = upper === a ? b : a;

  if (Math.abs(a.midY - b.midY) < 10) {
    const left = a.left <= b.left ? a : b;
    const right = left === a ? b : a;
    if (!crosses(obstacles, left.right, left.midY, right.left, right.midY, ignore)) {
      return `M ${left.right - 1} ${left.midY} H ${right.left + 1}`;
    }
    return null;
  }

  const shared = Math.min(a.right, b.right) - Math.max(a.left, b.left);
  const sharedX = (Math.max(a.left, b.left) + Math.min(a.right, b.right)) / 2;
  if (shared > 16 && !crosses(obstacles, sharedX, upper.bottom, sharedX, lower.top, ignore)) {
    return `M ${sharedX} ${upper.bottom - 1} V ${lower.top + 1}`;
  }

  const gap = lower.top - upper.bottom;
  if (gap > 4 && gap < 28 && Math.abs(upper.midX - lower.midX) < 200) {
    const gapY = upper.bottom + gap / 2;
    const clear =
      !crosses(obstacles, upper.midX, upper.bottom, upper.midX, gapY, ignore) &&
      !crosses(obstacles, upper.midX, gapY, lower.midX, gapY, ignore) &&
      !crosses(obstacles, lower.midX, gapY, lower.midX, lower.top, ignore);
    if (clear) {
      return `M ${upper.midX} ${upper.bottom - 1} V ${gapY} H ${lower.midX} V ${lower.top + 1}`;
    }
  }

  return (
    channelLink(a, b, obstacles, lanes.left, lanes.leftOrigin, -1, 8) ??
    channelLink(a, b, obstacles, lanes.right, lanes.rightOrigin, 1, frameWidth - 8)
  );
}

function measureTies(frame: HTMLElement): TiePath[] {
  const boxes = [...frame.querySelectorAll<HTMLElement>("[data-node]")].map((element) =>
    offsetBox(element, frame),
  );
  const byId = new Map(boxes.map((box) => [box.id, box]));
  const branchIds = new Set(skillTree.map((branch) => branch.id).concat("root"));
  const skills = boxes.filter((box) => !branchIds.has(box.id));
  if (skills.length < 2) return [];

  const lanes = {
    left: [] as { top: number; bottom: number }[],
    right: [] as { top: number; bottom: number }[],
    leftOrigin: Math.min(...skills.map((box) => box.left)) - 12,
    rightOrigin: Math.max(...skills.map((box) => box.right)) + 12,
  };

  return skillTies.flatMap((tie) => {
    const [first, second] = tie.skills.map((id) => byId.get(id));
    if (!first || !second) return [];
    const d = linkPair(first, second, boxes, frame.clientWidth, lanes);
    return d ? [{ id: tie.id, d }] : [];
  });
}

function Node({
  label,
  nodeId,
  seconds,
  tone,
}: {
  label: string;
  nodeId: string;
  seconds: number;
  tone: "root" | "branch" | "leaf";
}) {
  const size =
    tone === "root"
      ? "tree-root bg-section-reviews px-4 py-3 text-base font-black sm:text-lg"
      : tone === "branch"
        ? "bg-white px-3 py-2 text-sm font-black"
        : "bg-white px-2 py-1 text-xs font-bold sm:text-sm";

  return (
    <span
      data-node={nodeId}
      className={`tree-node relative z-10 inline-flex max-w-full border-2 border-black text-left text-black shadow-[3px_3px_0_0_#ffeb3b] ${size}`}
      style={delay(seconds)}
    >
      {label}
    </span>
  );
}

export default function SkillTreeSection() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);
  const [ties, setTies] = useState<TiePath[]>([]);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const measure = () => setTies(measureTies(frame));
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(frame);
    frame.addEventListener("animationend", measure);
    document.fonts?.ready.then(measure).catch(() => undefined);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLive(true);
      },
      { threshold: 0.2 },
    );
    intersectionObserver.observe(frame);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      frame.removeEventListener("animationend", measure);
    };
  }, []);

  return (
    <Section
      id="skills"
      subtitle="Skills"
      title="Skill tree"
      className="bg-section-skills"
      light
    >
      <div
        ref={frameRef}
        className={`skill-tree relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-0 ${live ? "is-live" : ""}`}
      >
        <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden>
          {ties.map((tie, index) => (
            <path
              key={tie.id}
              className="tie-line"
              d={tie.d}
              pathLength={1}
              style={{ ["--tie-i" as string]: index }}
            />
          ))}
        </svg>

        <div className="flex justify-center lg:w-52 lg:shrink-0 lg:justify-start">
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
                      />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <p className="mt-8 flex items-center gap-2 text-sm font-bold text-white">
        <span className="inline-block h-0.5 w-8 bg-[#3ee0ff]" />
        Blue lines join skills that are used together
      </p>
      <ul className="sr-only">
        {skillTies.map((tie) => (
          <li key={tie.id}>{tie.skills.map(skillLabel).join(", ")}</li>
        ))}
      </ul>
    </Section>
  );
}
