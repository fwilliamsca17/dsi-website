/** @type {import('next').NextConfig} */

// Notes on the CSP:
// - script-src needs 'unsafe-inline' for Next's inline hydration payloads
//   (no nonce infrastructure on a fully static deploy). JSON-LD blocks are
//   data blocks and are not executed, so they are unaffected either way.
// - style-src needs 'unsafe-inline' for the style attributes framer-motion
//   and FadeIn write.
// - connect-src allows the Web3Forms endpoint both lead forms POST to.
// - img-src data: covers the inline-SVG grain/dot textures in globals.css.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self' https://api.web3forms.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // www serves duplicate content otherwise — canonical host is the apex.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.trustdsi.com" }],
        destination: "https://trustdsi.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
