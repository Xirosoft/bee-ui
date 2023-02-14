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


import nextra from 'nextra'


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
  i18n: {
    locales: ['en', 'bn'],
    defaultLocale: 'en'
  },
  images: {
    unoptimized : true
  },
  basePath: process.env.BASE_PATH,
}

export default withNextra(nextConfig)
