// import nextra from 'nextra'
// import withPlugins from 'next-compose-plugins'
// import nextOptimizedImages from 'next-optimized-images'

// const nextraConfig = nextra({
//   theme: 'nextra-theme-docs',
//   themeConfig: './src/theme.config.js',
//   staticImage: true,
//   latex: true,
//   unstable_staticImage: true,
//   flexsearch: {
//     codeblock: true
//   },
// })

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     unoptimized:  true,
//     disableStaticImages: false,
//     loader: 'akamai',
//     path: '/bee-ui/',
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: `${process.env.GITHUB_REPOSITORY_OWNER}.github.io/`,
    //     pathname: `${process.env.BASE_PATH}/**`,
    //   },
    // ],
//   },
//   basePath: process.env.BASE_PATH,
//   assetPrefix: process.env.BASE_PATH,
// }

// export default withPlugins([nextraConfig, nextOptimizedImages], nextConfig)


// const withNextra = require('nextra')({
//   theme: "nextra-theme-docs",
//   themeConfig: "./src/theme.config.js",
// })

// const nextConfig = {
//   i18n: {
//     locales: ['en', 'bn'],
//     defaultLocale: 'en'
//   },
//   basePath: process.env.BASE_PATH,
// }
 
// module.exports = withNextra(nextConfig)

import * as dotenv from 'dotenv'
import nextra from 'nextra'

dotenv.config()

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.js',
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblock: false
  },
})

const nextConfig = {
  images: {
    unoptimized : true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.GITHUB_REPOSITORY_OWNER}.github.io/`,
        pathname: `${process.env.BASE_PATH}/**`,
      },
    ],
  },
  basePath: process.env.BASE_PATH,
  assetPrefix: process.env.BASE_PATH,
}

export default withNextra(nextConfig)
