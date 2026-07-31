import type { NextConfig } from "next";

/**
 * `STATIC_EXPORT=true` builds a plain folder of HTML/CSS/JS in ./out that any
 * free static host will serve (GitHub Pages, Netlify, Cloudflare Pages, Surge).
 * Without it you get a normal Next build for Node hosts (Vercel, Render, Railway).
 */
const isStaticExport = process.env.STATIC_EXPORT === "true";

/** Set BASE_PATH=/repo-name when deploying to a GitHub Pages project site. */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  ...(isStaticExport && {
    output: "export",
    basePath: basePath || undefined,
    // GitHub Pages serves /about/ as /about/index.html.
    trailingSlash: true,
  }),

  images: {
    formats: ["image/avif", "image/webp"],
    // Static hosts have no image optimiser, so ship the originals.
    unoptimized: isStaticExport,
    // Placeholder art may be SVG; only local files are ever served.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons", "framer-motion"],
  },

  // Static hosts serve their own headers, so only define these for Node hosts.
  ...(!isStaticExport && {
    async headers() {
      return [
        {
          source: "/:path*",
          headers: [
            { key: "X-Content-Type-Options", value: "nosniff" },
            { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
            { key: "X-DNS-Prefetch-Control", value: "on" },
          ],
        },
      ];
    },
  }),
};

export default nextConfig;
