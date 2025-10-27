import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Home | ReVISit',
  tagline: 'reVISit: Reproducible and Powerful Visualization User Studies',
  favicon: 'img/logos/favicon.svg',

  url: 'https://revisit.dev',
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'University of Utah', // Usually your GitHub org/user name.
  projectName: 'ReVISit', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          lastVersion: 'current',
          versions: {
            current: { label: 'v2.3.1', path: '' },
          },
        },

        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-FLX70EGV5P',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: 'support_us',
      content:
        'We released a new version of reVISit! <a href="/blog/2025/10/27/release-2.3/">Read all about reVISit v2.3!</a> &#127881; ',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'CE7T3Q5S25',

      // Public API key: it is safe to commit it
      apiKey: '0e172022221452330a1cf49f25f6ebc6',

      indexName: 'revisit-docusaurus',

      // Ensures that search is based on version
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      // ... other Algolia params
    },
    image: 'img/logos/revisitLogoThumbnail.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ReVISit',
      logo: {
        alt: 'ReVISit Logo',
        src: 'img/logos/revisitLogoThumbnail-dotted-light.svg',
        srcDark: 'img/logos/revisitLogoThumbnail-dotted-dark.svg',
      },
      items: [
        { to: '/community', label: 'Community', position: 'left' },

        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'reference',
          position: 'left',
          label: 'Reference',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        { to: '/about', label: 'About', position: 'left' },
        {
          to: '/testimonials',
          label: 'Testimonials',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/revisit-studies/study',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://revisit.dev/study',
          label: 'Demo',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          html: ` 
            <div class="footer-wrapper row">
              <a class="col " target="_blank" href="https://vdl.sci.utah.edu/">
                <img src="/img/logos/vdl-logo-light.svg" class='logo light-theme-display-component'/>
                <img src="/img/logos/vdl-logo-dark.svg" class='logo dark-theme-display-component'/>
              </a>
              <a class="col " target="_blank" href="https://www.mcnutt.in/#/lab">
                <img src="/img/logos/havoc-logo-light.png" class='logo light-theme-display-component'/>
                <img src="/img/logos/havoc-logo-dark.png" class='logo dark-theme-display-component'/>
              </a>
              <a class="col " target="_blank" href="https://www.sci.utah.edu/">
                <img src="/img/logos/sci-logo-light.svg" class='logo light-theme-display-component'/>
                <img src="/img/logos/sci-logo-dark.svg" class='logo dark-theme-display-component'/>
              </a>
              <a class="col " target="_blank" href="https://www.cs.utah.edu/">
                <img src="/img/logos/ULogo-light.svg" class='logo light-theme-display-component'/>
                <img src="/img/logos/ULogo-dark.svg" class='logo dark-theme-display-component'/>
              </a>
              <a class="col " target="_blank" href="http://web.cs.wpi.edu/~ltharrison/">
                <img src="/img/logos/view-logo-light.svg" class='logo light-theme-display-component'/>
                <img src="/img/logos/view-logo-dark.svg" class='logo dark-theme-display-component'/>
              </a>
              <a class="col " target="_blank" href="https://wpi.edu/">
                <img src="/img/logos/wpi.png" class='logo'/>
              </a>
              <a class="col " target="_blank" href="https://www.nsf.gov/">
                <img src="/img/logos/nsf.png" class='logo'/>
              </a>                                                       
            </div>
          `,
        },
      ],
      copyright: `Copyright © 2022-${new Date().getFullYear()}. The reVISit team. Last updated on ${new Date().toISOString().split('T')[0]}. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'typescript', 'r'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
