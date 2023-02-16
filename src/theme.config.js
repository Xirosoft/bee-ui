import { useConfig } from 'nextra-theme-docs'

const BASE_PATH = process.env.NODE_ENV == 'development' ? '' : '/bee-ui'


/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  logo: (
    <>
      <span style={{ fontSize: '2.5rem', fontWeight: '700', marginRight: '1rem' }}>Bee UI </span>
      <span>Ultimate UI Package</span>
    </>
  ),
  banner: {
    key: 'notice',
    text: 'Our UI development is under condtruction!'
  },
  project: {
    link: 'https://github.com/Xirosoft/bee-ui/'
  },
  sidebar: {
    toggleButton: true
  },
  footer: {
    component: null
  },
  docsRepositoryBase:
    'https://github.com/Xirosoft/bee-ui/edit/main',
  editLink: {
    text: 'Edit this page on GitHub'
  },
  toc: {
    extraContent: (
      <>
        <p style={{marginTop: '2.5rem'}}>Below will render an iframe</p>
        <iframe src="https://www.youtube.com/embed/QILR_2CczIo" frameBorder={0} allow="accelerometer; autoplay" allowFullScreen></iframe>
      </>
    )
  },
  // faviconGlyph: 'x',
  useNextSeoProps() {
    const { frontMatter } = useConfig()
    return {
      additionalLinkTags: [
        {
          href: BASE_PATH+'/assets/images/favicon.png',
          rel: 'apple-touch-icon',
          sizes: '180x180'
        },
        {
          href: BASE_PATH+'/assets/images/favicon.png',
          rel: 'icon',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          href: BASE_PATH+'/assets/images/favicon.png',
          rel: 'icon',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          href: BASE_PATH+'/assets/images/favicon.png',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          href: BASE_PATH+'/assets/images/favicon.png',
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png'
        }
      ],
      additionalMetaTags: [
        { content: 'en', httpEquiv: 'Content-Language' },
        { content: 'Bee UI', name: 'apple-mobile-web-app-title' },
        { content: '#fff', name: 'msapplication-TileColor' },
        { content: BASE_PATH+'/assets/images/favicon.png', name: 'msapplication-TileImage' }
      ],
      description:
        frontMatter.description || 'Bee UI: the Ultimate UI site builder',
      openGraph: {
        images: [
          { url: frontMatter.image || 'https://nextra.vercel.app/og.png' }
        ]
      },
      twitter: {
        cardType: 'summary_large_image',
        site: 'https://xirosoft.github.io/bee-ui'
      },
      titleTemplate: '%s – Bee UI',
    }
  },
}
