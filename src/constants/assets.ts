/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  HOW TO ADD YOUR IMAGES
 * ─────────────────────────────────────────────────────────────────────────────
 *  1. Save the file in /public at the exact path below.
 *  2. Uncomment that same path in AVAILABLE_ASSETS.
 *
 *  The component picks it up automatically — next/image optimisation, lazy
 *  loading and correct sizing are already wired. Nothing here needs filling in
 *  for the site to build and deploy.
 *
 *  Tech-stack logos (AWS, GCP, Hetzner, Python, Docker …) are NOT images —
 *  they render as vector brand icons from react-icons. See components/common/Icon.tsx.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const ASSET_PATHS = {
  profile: "/images/profile.jpg",

  logos: {
    linkData: "/images/logos/link-data.png",
    islab: "/images/logos/islab.png",
    tsue: "/images/logos/tsue.png",
    ibm: "/images/logos/ibm.png",
    deeplearningAi: "/images/logos/deeplearning-ai.png",
    datacamp: "/images/logos/datacamp.png",
    itv: "/images/logos/itv.png",
    efootball: "/images/logos/efootball.png",
  },

  education: {
    tsueCampus: "/images/education/tsue-campus.jpg",
  },
} as const;

/**
 * Paths of files that actually exist in /public. Anything not listed here
 * falls back to a labelled placeholder instead of a broken image request.
 */
export const AVAILABLE_ASSETS = new Set<string>([
  // ── Profile ────────────────────────────────────────────────────────────
  // "/images/profile.jpg",

  // ── Project covers ─────────────────────────────────────────────────────
  // "/images/projects/asint-cover.png",        // ASINT brand pattern
  // "/images/projects/dwh-cover.png",
  // "/images/projects/efahub-cover.png",       // eFootball logo
  // "/images/projects/call-operator-cover.png", // ITV logo
  // "/images/projects/attendance-cover.png",

  // ── Architecture diagrams ──────────────────────────────────────────────
  // "/images/diagrams/asint-architecture.png",
  // "/images/diagrams/dwh-architecture.png",
  // "/images/diagrams/efahub-architecture.png",
  // "/images/diagrams/call-operator-architecture.png",
  // "/images/diagrams/attendance-architecture.png",

  // ── Screenshots ────────────────────────────────────────────────────────
  // "/images/projects/asint-shot-1.png",
  // "/images/projects/asint-shot-2.png",

  // ── Logos ──────────────────────────────────────────────────────────────
  // "/images/logos/link-data.png",
  // "/images/logos/islab.png",
  // "/images/logos/tsue.png",
  // "/images/logos/itv.png",
  // "/images/logos/efootball.png",
  // "/images/logos/ibm.png",
  // "/images/logos/deeplearning-ai.png",
  // "/images/logos/datacamp.png",

  // ── Education ──────────────────────────────────────────────────────────
  // "/images/education/tsue-campus.jpg",
]);

/** Returns the path only when the file has been added, otherwise undefined. */
export function asset(path?: string): string | undefined {
  return path && AVAILABLE_ASSETS.has(path) ? path : undefined;
}
