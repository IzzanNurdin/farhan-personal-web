module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'components'],
  },
  webpack5: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: ['@svgr/webpack'],
    })

    return config
  },
}
