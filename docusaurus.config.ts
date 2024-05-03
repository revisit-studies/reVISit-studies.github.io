import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ReVISit',
  tagline: 'A Toolkit For Data Visualization Experiments',
  favicon: 'img/favicon.ico',

  url: 'https://revisit.dev',
  baseUrl: '/',

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
            current: { label: 'v1.0.0-beta6', path: '' },
          }
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
    image: 'img/logos/revisitLogoThumbnail.png',
    navbar: {
      title: 'ReVISit',
      logo: {
        alt: 'ReVISit Logo',
        src: 'img/logos/revisitLogoThumbnail-dotted-light.svg',
        srcDark: 'img/logos/revisitLogoThumbnail-dotted-dark.svg',
      },
      items: [
        {to: '/introduction', label: 'Introduction', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {to: '/community', label: 'Community', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/faq', label: 'FAQ', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/revisit-studies/study',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style:'light',
      links: [
        {
          html:` 
            <div class="footer-wrapper">
              <a target="_blank" href="https://vdl.sci.utah.edu/">
                <img src="/img/logos/vdl-logo-light.svg" class='logo light-theme'/>
                <img src="/img/logos/vdl-logo-dark.svg" class='logo dark-theme'/>
              </a>
              <a target="_blank" href="https://www.sci.utah.edu/">
                <img src="/img/logos/sci-logo-light.svg" class='logo light-theme'/>
                <img src="/img/logos/sci-logo-dark.svg" class='logo dark-theme'/>
              </a>
              <a target="_blank" href="https://www.cs.utah.edu/">
                <img src="/img/logos/ULogo-light.svg" class='logo light-theme'/>
                <img src="/img/logos/ULogo-dark.svg" class='logo dark-theme'/>
              </a>
              <a target="_blank" href="http://web.cs.wpi.edu/~ltharrison/">
                <img src="/img/logos/view-logo-light.svg" class='logo light-theme'/>
                <img src="/img/logos/view-logo-dark.svg" class='logo dark-theme'/>
              </a>
              <a target="_blank" href="https://wpi.edu/">
                <img src="/img/logos/wpi.png" class='logo'/>
              </a>
              <a target="_blank" href="https://www.cs.toronto.edu/~cnobre/">
                <img src="/img/logos/HIVE_logo.png" class='logo light-theme'/>
                <img src="/img/logos/HIVE-logo-dark.svg" class='logo dark-theme'/>
              </a>
              <a target="_blank" href="https://www.cs.toronto.edu/">
                <img src="/img/logos/UofTLogo.png" class='logo light-theme'/>
                <img src="/img/logos/UofT-logo-dark.svg" class='logo dark-theme'/>
              </a>
              <a target="_blank" href="https://www.nsf.gov/">
                <img src="/img/logos/nsf.png" class='logo'/>
              </a>                                                       
            </div>
          `
        },
      ],
      copyright: `Copyright © 2022-${new Date().getFullYear()}. The reVISit team. Last updated on ${new Date().toISOString().split('T')[0]}. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
