/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  HOW TO REPLACE THE PLACEHOLDER VISUALS
 * ─────────────────────────────────────────────────────────────────────────────
 *  Every image slot on the site renders a styled placeholder until the real
 *  file exists. To swap one in:
 *
 *    1. Drop your file in /public at the exact path listed below
 *       e.g. public/images/profile.jpg
 *    2. Uncomment that path in AVAILABLE_ASSETS.
 *
 *  That's it — the component picks it up automatically, with next/image
 *  optimisation, lazy loading and correct sizing already wired.
 *
 *  Nothing here needs to be filled in for the site to build and deploy.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const ASSET_PATHS = {
  profile: "/images/profile.jpg",

  logos: {
    linkData: "/images/logos/link-data.svg",
    islab: "/images/logos/islab.svg",
    tsue: "/images/logos/tsue.svg",
    ibm: "/images/logos/ibm.svg",
    deeplearningAi: "/images/logos/deeplearning-ai.svg",
    datacamp: "/images/logos/datacamp.svg",
  },
} as const;

/**
 * Paths of assets that actually exist in /public. Anything not listed here
 * falls back to a generated placeholder instead of a broken image request.
 */
export const AVAILABLE_ASSETS = new Set<string>([
  // "/images/profile.jpg",
  // "/images/logos/link-data.svg",
  // "/images/projects/asint-cover.svg",
  // "/images/diagrams/asint-architecture.svg",
]);

/** Returns the path only when the file has been added, otherwise undefined. */
export function asset(path?: string): string | undefined {
  return path && AVAILABLE_ASSETS.has(path) ? path : undefined;
}
