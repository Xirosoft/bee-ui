import nextra from 'nextra'
import withPlugins from 'next-compose-plugins'
import nextOptimizedImages from 'next-optimized-images'

const nextraConfig = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.js',
  staticImage: false,
  latex: true,
  unstable_staticImage: true,
  flexsearch: {
    codeblock: true
  },
  images: {
    disableStaticImages: true,
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './out',
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized:  true,
  }
}

export default withPlugins([nextraConfig, nextOptimizedImages], nextConfig)
