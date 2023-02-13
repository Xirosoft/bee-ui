import nextra from 'nextra'
import withPlugins from 'next-compose-plugins'
import nextOptimizedImages from 'next-optimized-images'

const rootPath = process.env.MODE == 'production' ? '/bee-ui' : '';


const nextraConfig = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.js',
  staticImage: true,
  latex: true,
  unstable_staticImage: true,
  flexsearch: {
    codeblock: true
  },
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized:  true,
    disableStaticImages: true,
    loader: 'akamai',
    path: '',
  },
  basePath: '/bee-ui',
  assetPrefix: rootPath,
}

export default withPlugins([nextraConfig, nextOptimizedImages], nextConfig)