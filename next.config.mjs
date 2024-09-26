/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

const nextConfig = {
  output: "export",
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
    unoptimized: true,
  },
  experimental: {
    mdxRs: false,
  },
};

const withMDX = nextMDX();

export default withMDX(nextConfig);
