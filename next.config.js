// require('dotenv').config();
const nextra = require('nextra')
const BASE_PATH = process.env.NODE_ENV == 'development' ? '' : '/bee-ui'


console.log(process.env, BASE_PATH)
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
  webpack: (config) => {
    config.resolve.alias['@components'] = __dirname + '/src/components';
    return config;
  },
  images: {
    // unoptimized: true,
    loader: "custom",
    path: BASE_PATH,
  },
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH,
}

module.exports = withNextra(nextConfig)
