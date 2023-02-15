// require('dotenv').config();
const nextra = require('nextra')
const BASE_PATH = process.env.NODE_ENV == 'development' ? '' : '/bee-ui'


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
    // unoptimized: true,
    loader: "custom",
    path: BASE_PATH,
  },
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH,
}

module.exports = withNextra(nextConfig)
