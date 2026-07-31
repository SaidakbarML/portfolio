"use client";

import { TECH_BADGES } from "@/data/skills";
import { TechIcon } from "@/components/common/Icon";
import { cn } from "@/lib/utils";

/** Infinite horizontal ticker. The track is duplicated for a seamless loop. */
export function TechMarquee({
  items = TECH_BADGES,
  reverse = false,
  className,
}: {
  items?: string[];
  reverse?: boolean;
  className?: string;
}) {
  const track = [...items, ...items];

  return (
    <div aria-hidden className={cn("group relative w-full overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max items-center group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        {track.map((name, index) => (
          <span
            key={`${name}-${index}`}
            className="flex shrink-0 items-center gap-3 border-r border-[color:var(--line)] px-7 py-4 text-[15px] font-medium text-[color:var(--fg-muted)] transition-colors hover:bg-[color:var(--accent)] hover:text-[color:var(--on-accent)]"
          >
            <TechIcon name={name} className="size-4 shrink-0" />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
