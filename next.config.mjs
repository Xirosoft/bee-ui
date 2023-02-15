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
    loader: "custom",
    //  unoptimized : true,
  },
  basePath: process.env.BASE_PATH,
  assetPrefix: process.env.BASE_PATH,
}

export default withNextra(nextConfig)
