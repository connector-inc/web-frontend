import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find(
      (rule: { test: { test: (arg0: string) => boolean } }) =>
        rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [],
              },
            },
          },
        ],
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
  async rewrites() {
    return [
      {
        source: '/api/auth/:slug*',
        destination: `${process.env.API_URL || 'http://localhost:8000'}/auth/:slug*`,
      },
      {
        source: '/api/users/:slug*',
        destination: `${process.env.API_URL || 'http://localhost:8000'}/users/:slug*`,
      },
      {
        source: '/api/posts/:slug*',
        destination: `${process.env.API_URL || 'http://localhost:8000'}/posts/:slug*`,
      },
      {
        source: '/api/accounts/:slug*',
        destination: `${process.env.API_URL || 'http://localhost:8000'}/accounts/:slug*`,
      },
    ]
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: [
            {
              loader: '@svgr/webpack',
              options: {
                svgoConfig: {
                  plugins: [],
                },
              },
            },
          ],
          as: '*.js',
        },
      },
    },
  },
  // reactStrictMode: false,
}

export default nextConfig
