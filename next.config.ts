import type { NextConfig } from "next";
import createMDX from "@next/mdx";


const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactCompiler: true,
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [['rehype-prism-plus', { ignoreMissing: true }]],
  },
})

export default withMDX(nextConfig);

