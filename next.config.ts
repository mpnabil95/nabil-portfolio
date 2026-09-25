import type { NextConfig } from 'next';
// Empty for a domain root; /repository-name for GitHub project pages.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const nextConfig: NextConfig = {
  output: 'export', trailingSlash: true, basePath,
  images: { unoptimized: true }, experimental: { cpus: 2 },
};
export default nextConfig;
