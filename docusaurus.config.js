const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

module.exports = {
  title: "Bee UI",
  tagline: "Bee UI is a lightweight SCSS based UI Framework. You can use, manage and contribute with it in easyest way...",
  url: "https://xirosoft.github.io",
  baseUrl: "/bee-ui/",
  organizationName: "xirosoft",
  projectName: "bee-ui",
  favicon: "img/favicon.png",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  scripts: [
    "https://kit.fontawesome.com/2f8664b4cd.js",
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          editUrl: "https://github.com/xirosoft/bee-ui-docs/edit/main/",
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: [
            require.resolve("./dist/css/beeui.all.min.css"),
            require.resolve("./src/css/custom.css")
          ],
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // {
          //   to: '/docs/user-guide/',
          //   from: '/docs/user-guide/user-guide-start',
          // },
          // {
          //   to: '/docs/dev-guide/',
          //   from: '/docs/dev-guide/dev-guide-start',
          // },
          // {
          //   to: '/docs/devops-guide/',
          //   from: '/docs/devops-guide/devops-guide-start',
          // },
        ]
      }
    ]
  ],
  themeConfig: {
    prism: {
      additionalLanguages: ["java", "markdown", "shell", "bash", "gradle", "lua", "html", "css", "javascript", "scss"],
    },
    algolia: {
      appId: 'FKPECALRYN',
      apiKey: 'a3dca2c386a4487bd1dccd55cb34c8a6',
      indexName: 'beeui_xirosoft',
    },
    navbar: {
      title: "Bee UI Docs",
      logo: {
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/intro",
          label: "Docs",
          position: "left",
        },
        {
          to: "docs/xirosoft/saiket",
          label: "Releases",
          position: "left",
        },
        {
          href: "https://xirosoft.com",
          label: "Xirosoft",
          position: "left",
        },
        {
          href: 'https://github.com/xirosoft/bee-ui-docs',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    image: "img/undraw_online.svg",
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/intro",
            }
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Forum",
              href: "https://xirosoft.com",
            },
            {
              label: "Facebook",
              href: "https://facebook.com/xirosoft",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              href: "https://xirosoft.com/blogs",
            },
            {
              label: "GitHub",
              href: "https://github.com/xirosoft/bee-ui-docs",
            }
          ],
        },
      ],
      logo: {
        alt: "Footer Logo",
        src: "img/logo.png",
        width: "50px",
        href: "https://xirosoft.com",
      },
      copyright: `Copyright © Xirosoft.com.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};
