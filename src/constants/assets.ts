/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  HOW TO ADD YOUR IMAGES
 * ─────────────────────────────────────────────────────────────────────────────
 *  1. Save the file in /public at the exact path below.
 *  2. Uncomment that same path in AVAILABLE_ASSETS.
 *
 *  The component picks it up automatically — next/image optimisation, lazy
 *  loading and correct sizing are already wired. Anything still commented out
 *  renders a labelled placeholder instead of a broken image.
 *
 *  Tech-stack logos (AWS, GCP, Hetzner, Python, Docker …) are NOT images —
 *  they render as vector brand icons from react-icons, so they stay sharp at
 *  any size. See components/common/Icon.tsx.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const ASSET_PATHS = {
  profile: "/images/profile.jpg",

  logos: {
    asint: "/images/logos/asint.png",
    linkData: "/images/logos/link-data.png",
    islab: "/images/logos/islab.png",
    tsue: "/images/logos/tsue.png",
    ibm: "/images/logos/ibm.png",
    deeplearningAi: "/images/logos/deeplearning-ai.png",
    datacamp: "/images/logos/datacamp.png",
  },

  education: {
    tsueCampus: "/images/education/tsue-campus.png",
  },
} as const;

/**
 * Paths of files that actually exist in /public. Anything not listed here
 * falls back to a labelled placeholder instead of a broken image request.
 */
export const AVAILABLE_ASSETS = new Set<string>([
  // ── Project covers ─────────────────────────────────────────────────────
  "/images/projects/asint-cover.png", // vehicle photo
  "/images/projects/dwh-cover.png", // GeoScore aerial
  "/images/projects/efahub-cover.jpg", // eFootball mark
  "/images/projects/call-operator-cover.png", // ITV mark
  "/images/projects/attendance-cover.png", // face-recognition kiosk

  // ── Logos ──────────────────────────────────────────────────────────────
  "/images/logos/asint.png",
  "/images/logos/link-data.png",
  "/images/logos/tsue.png",

  // ── Education ──────────────────────────────────────────────────────────
  "/images/education/tsue-campus.png",

  // ── Not supplied yet ───────────────────────────────────────────────────
  // "/images/profile.jpg",
  // "/images/diagrams/asint-architecture.png",
  // "/images/diagrams/dwh-architecture.png",
  // "/images/diagrams/efahub-architecture.png",
  // "/images/diagrams/call-operator-architecture.png",
  // "/images/diagrams/attendance-architecture.png",
  // "/images/projects/asint-shot-1.png",
  // "/images/projects/asint-shot-2.png",
  // "/images/logos/islab.png",
  // "/images/logos/ibm.png",
  // "/images/logos/deeplearning-ai.png",
  // "/images/logos/datacamp.png",
]);

/** Returns the path only when the file has been added, otherwise undefined. */
export function asset(path?: string): string | undefined {
  return path && AVAILABLE_ASSETS.has(path) ? path : undefined;
}
