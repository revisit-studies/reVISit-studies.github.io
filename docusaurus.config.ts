import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'reVISit',
  tagline: 'A Toolkit For Data Visualization Experiments',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'University of Utah', // Usually your GitHub org/user name.
  projectName: 'reVISit', // Usually your repo name.

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
          versions:{
            current:{
              label: 'v1.0.0-beta5',
              path:'v1.0.0-beta5'
            }
          },
          // includeCurrentVersion: false
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logos/revisitLogoThumbnail.png',
    navbar: {
      title: 'reVISit',
      logo: {
        alt: 'reVISit Logo',
        src: 'img/logos/revisitLogoThumbnail-solid-light.svg',
        srcDark: 'img/logos/revisitLogoThumbnail-solid-dark.svg'
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
          // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          // dropdownActiveClassDisabled: true,
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
      copyright: `Copyright © 2022-2024 The reVISit team. All content on this website is licensed under
      the Creative <a href="https://creativecommons.org/licenses/by/4.0/legalcode" target="_blank">Commons Attribution license (CC BY)</a>.<br/>Copyright or exclusive license of the linked publications is frequently with the publishers. Last updated on ${new Date().toISOString().split('T')[0]}. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
