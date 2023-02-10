import { useConfig } from 'nextra-theme-docs'

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  banner: {
    key: 'notice',
    text: 'Our UI development is under condtruction!'
  },
  // chat: {
  //   link: 'https://facebook.com/xirosoft' // Next.js discord server,
  // },
  docsRepositoryBase:
    'https://github.com/xirosoft/beeui',
  editLink: {
    text: 'Edit this page on GitHub'
  },
  // faviconGlyph: 'x',
  useNextSeoProps() {
    const { frontMatter } = useConfig()
    return {
      additionalLinkTags: [
        {
          href: '/favicon.png',
          rel: 'apple-touch-icon',
          sizes: '180x180'
        },
        {
          href: '/favicon.png',
          rel: 'icon',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          href: '/favicon.png',
          rel: 'icon',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          href: '/favicon.png',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          href: '/favicon.png',
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png'
        }
      ],
      additionalMetaTags: [
        { content: 'en', httpEquiv: 'Content-Language' },
        { content: 'Bee UI', name: 'apple-mobile-web-app-title' },
        { content: '#fff', name: 'msapplication-TileColor' },
        { content: '/favicon.png', name: 'msapplication-TileImage' }
      ],
      description:
        frontMatter.description || 'Bee UI: the Ultimate UI site builder',
      openGraph: {
        images: [
          { url: frontMatter.image || 'https://nextra.vercel.app/og.png' }
        ]
      },
      titleTemplate: '%s – Bee UI',
      twitter: {
        cardType: 'summary_large_image',
        site: 'https://xirosoft.github.io/beeui'
      }
    }
  },
}
