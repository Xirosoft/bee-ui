import dotenv from 'dotenv'
import nextra from 'nextra'
import withPlugins from 'next-compose-plugins'
import nextOptimizedImages from 'next-optimized-images'

dotenv.config()

const rootPath = process.env.NODE_ENV == 'development' ? '' :`/${process.env.npm_package_name}`;

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
  basePath: rootPath,
  assetPrefix: rootPath,
}

export default withPlugins([nextraConfig, nextOptimizedImages], nextConfig)