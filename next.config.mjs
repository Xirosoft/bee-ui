import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.js',
  staticImage: true,
  latex: true,
  unstable_staticImage: true,
  flexsearch: {
    codeblock: true
  }
})

export default withNextra({
  reactStrictMode: true
})
