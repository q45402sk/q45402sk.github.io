/** @type {import('next').NextConfig} */
const prefix =
  process.env.NODE_ENV === "production" ? "https://q45402sk.github.io/" : "";

const nextConfig = {
  output: "export",
  assetPrefix: prefix,
};

export default nextConfig;
