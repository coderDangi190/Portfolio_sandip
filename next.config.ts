import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // needed for next/image on static exports
};

export default nextConfig;
