/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Bee UI",
  "tagline": "Bee UI is a lightweight SCSS based UI Framework. You can use, manage and contribute with it in easyest way...",
  "url": "https://xirosoft.github.io",
  "baseUrl": "/bee-ui/",
  "organizationName": "xirosoft",
  "projectName": "bee-ui",
  "favicon": "img/favicon.png",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "scripts": [
    "https://kit.fontawesome.com/2f8664b4cd.js"
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": false,
          "showLastUpdateTime": true,
          "editUrl": "https://github.com/xirosoft/bee-ui-docs/edit/main/",
          "path": "docs",
          "sidebarPath": "/Users/Data/sofiqul/23-01/bee-ui/sidebars.js"
        },
        "theme": {
          "customCss": [
            "/Users/Data/sofiqul/23-01/bee-ui/dist/css/beeui.all.min.css",
            "/Users/Data/sofiqul/23-01/bee-ui/src/css/custom.css"
          ]
        }
      }
    ]
  ],
  "plugins": [
    [
      "@docusaurus/plugin-client-redirects",
      {
        "redirects": []
      }
    ]
  ],
  "themeConfig": {
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "algolia": {
      "appId": "FKPECALRYN",
      "apiKey": "a3dca2c386a4487bd1dccd55cb34c8a6",
      "indexName": "beeui_xirosoft",
      "contextualSearch": true,
      "searchParameters": {},
      "searchPagePath": "search"
    },
    "navbar": {
      "title": "Bee UI Docs",
      "logo": {
        "src": "img/logo.png"
      },
      "items": [
        {
          "to": "docs/intro",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "docs/xirosoft/saiket",
          "label": "Releases",
          "position": "left"
        },
        {
          "href": "https://xirosoft.com",
          "label": "Xirosoft",
          "position": "left"
        },
        {
          "href": "https://github.com/xirosoft/bee-ui-docs",
          "position": "right",
          "className": "header-github-link",
          "aria-label": "GitHub repository"
        }
      ],
      "hideOnScroll": false
    },
    "image": "img/undraw_online.svg",
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Introduction",
              "to": "docs/intro"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Forum",
              "href": "https://xirosoft.com"
            },
            {
              "label": "Facebook",
              "href": "https://facebook.com/xirosoft"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "href": "https://xirosoft.com/blogs"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/xirosoft/bee-ui-docs"
            }
          ]
        }
      ],
      "logo": {
        "alt": "Footer Logo",
        "src": "img/logo.png",
        "width": "50px",
        "href": "https://xirosoft.com"
      },
      "copyright": "Copyright © Xirosoft.com."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "path": "i18n",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "themes": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "mermaid": false
  }
};