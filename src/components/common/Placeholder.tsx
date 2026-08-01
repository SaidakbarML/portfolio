import Image from "next/image";

import { asset } from "@/constants/assets";
import manifest from "@/constants/image-manifest.json";
import { cn } from "@/lib/utils";
import { UiIcon } from "@/components/common/Icon";

const IMAGE_SIZES = manifest as Record<string, { width: number; height: number }>;

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
  aspect?: string;
  priority?: boolean;
  sizes?: string;
  /**
   * "cover" crops to fill — only use when the source is high-res AND its
   * aspect matches the slot. "contain" shows the whole image, never cropped.
   * "logo" is contain with breathing room for brand marks.
   */
  fit?: "cover" | "contain" | "logo";
  imageClassName?: string;
}

/**
 * Renders a real image when one exists, otherwise a placeholder documenting
 * what belongs there. Inherits the surrounding slab's tone tokens.
 *
 * Small sources are never stretched: the build-time manifest gives each file's
 * intrinsic size and the image is capped to it, centred on a blurred copy of
 * itself. A 240px logo stays crisp at 240px instead of turning to mush at 400px.
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
  fit = "contain",
  imageClassName,
}: PlaceholderProps) {
  const resolved = asset(src);
  const intrinsic = resolved ? IMAGE_SIZES[resolved] : undefined;

  return (
    <div
      className={cn(
        "relative isolate flex w-full items-center justify-center overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface-2)]",
        aspect,
        fit === "logo" && "p-5 sm:p-7",
        className,
      )}
    >
      {resolved ? (
        <>
          {fit !== "cover" && (
            // Blurred copy fills the slot so a letterboxed image never leaves
            // dead space. The blur hides that the backdrop is upscaled.
            <Image
              src={resolved}
              alt=""
              aria-hidden
              fill
              quality={35}
              sizes="180px"
              className="scale-125 object-cover opacity-25 blur-2xl saturate-150"
            />
          )}

          {fit === "cover" ? (
            <Image
              src={resolved}
              alt={alt}
              fill
              sizes={sizes}
              quality={92}
              priority={priority}
              loading={priority ? undefined : "lazy"}
              className={cn("object-cover", imageClassName)}
            />
          ) : (
            <Image
              src={resolved}
              alt={alt}
              width={intrinsic?.width ?? 1200}
              height={intrinsic?.height ?? 800}
              sizes={sizes}
              quality={92}
              priority={priority}
              loading={priority ? undefined : "lazy"}
              // Hard cap at the file's real pixel size: a 240px logo renders
              // at most 240px instead of being stretched into mush.
              style={
                intrinsic
                  ? { maxWidth: intrinsic.width, maxHeight: intrinsic.height }
                  : undefined
              }
              className={cn(
                "relative h-auto max-h-full w-auto max-w-full object-contain",
                imageClassName,
              )}
            />
          )}
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
            {label && <p className="text-sm font-semibold text-[color:var(--fg)]">{label}</p>}
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
        "relative flex size-12 shrink-0 items-center justify-center overflow-hidden border border-[color:var(--line)] bg-white",
        className,
      )}
    >
      {resolved ? (
        <Image
          src={resolved}
          alt={alt}
          fill
          sizes="96px"
          quality={92}
          className="object-contain p-1.5"
        />
      ) : (
        <span className="font-mono text-sm font-bold text-[color:var(--accent)]" aria-hidden>
          {fallback}
        </span>
      )}
      <span className="sr-only">{alt}</span>
    </div>
  );
}
