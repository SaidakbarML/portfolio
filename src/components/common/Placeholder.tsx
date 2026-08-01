import Image from "next/image";

import { asset } from "@/constants/assets";
import { cn } from "@/lib/utils";
import { UiIcon } from "@/components/common/Icon";

interface PlaceholderProps {
  /**
   * Intended path in /public. Renders the real image once that path is listed
   * in AVAILABLE_ASSETS (src/constants/assets.ts), otherwise a placeholder.
   */
  src?: string;
  alt: string;
  label?: string;
  hint?: string;
  icon?: string;
  className?: string;
  accent?: "blue" | "purple" | "cyan";
  aspect?: string;
  priority?: boolean;
  sizes?: string;
  /**
   * "cover" crops a photo to fill the slot. "contain" keeps a logo whole and
   * letterboxes it, which is what brand marks need.
   */
  fit?: "cover" | "contain";
  /** Extra classes on the <img>, e.g. "object-top" to control the crop. */
  imageClassName?: string;
}

/**
 * Renders a real image when one exists, otherwise a placeholder that documents
 * what belongs there. Inherits the surrounding slab's tone tokens.
 */
export function Placeholder({
  src,
  alt,
  label,
  hint,
  icon = "sparkles",
  className,
  aspect = "aspect-16/10",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fit = "cover",
  imageClassName,
}: PlaceholderProps) {
  const resolved = asset(src);

  return (
    <div
      className={cn(
        "relative isolate w-full overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface-2)]",
        aspect,
        className,
      )}
    >
      {resolved ? (
        <>
          {fit === "contain" && (
            // Blurred fill behind a letterboxed logo, so the slot never
            // shows dead space.
            <Image
              src={resolved}
              alt=""
              aria-hidden
              fill
              sizes={sizes}
              className="scale-110 object-cover opacity-20 blur-2xl"
            />
          )}
          <Image
            src={resolved}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            loading={priority ? undefined : "lazy"}
            className={cn(
              "relative",
              fit === "contain" ? "object-contain p-8" : "object-cover",
              imageClassName,
            )}
          />
        </>
      ) : (
        <>
          <div aria-hidden className="absolute inset-0 grid-bg opacity-60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <div
              className="flex size-11 items-center justify-center"
              style={{ background: "var(--accent)", color: "var(--on-accent)" }}
            >
              <UiIcon name={icon} className="size-5" />
            </div>
            {label && (
              <p className="text-sm font-semibold text-[color:var(--fg)]">{label}</p>
            )}
            {hint && (
              <p className="max-w-[30ch] font-mono text-[10px] leading-relaxed text-[color:var(--fg-faint)]">
                {hint}
              </p>
            )}
          </div>
          <span className="sr-only">{alt}</span>
        </>
      )}
    </div>
  );
}

/** Square logo slot used by experience, education and certificate rows. */
export function LogoPlaceholder({
  src,
  alt,
  fallback,
  className,
}: {
  src?: string;
  alt: string;
  fallback: string;
  className?: string;
}) {
  const resolved = asset(src);

  return (
    <div
      className={cn(
        "relative flex size-12 shrink-0 items-center justify-center overflow-hidden border border-[color:var(--line)]",
        className,
      )}
    >
      {resolved ? (
        <Image src={resolved} alt={alt} fill sizes="48px" className="object-contain p-2" />
      ) : (
        <span
          className="font-mono text-sm font-bold text-[color:var(--accent)]"
          aria-hidden
        >
          {fallback}
        </span>
      )}
      <span className="sr-only">{alt}</span>
    </div>
  );
}
