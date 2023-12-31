/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
})

module.exports = withMDX(nextConfig)