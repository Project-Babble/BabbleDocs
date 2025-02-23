// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Babble Docs',
  tagline: 'Open-source and DIY friendly VR mouth tracking ecosystem.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.babble.diy/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ProjectBabble', // Usually your GitHub org/user name.
  projectName: 'ProjectBabble', // Usually your repo name.
  
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'deployment',
  trailingSlash: false,
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/babbleBanner.png',
      navbar: {
        title: 'Babble Docs',
        logo: {
          alt: 'Babble Logo',
          src: 'svg/BabbleFinalLogoNoBGBlack.svg',
          srcDark: 'svg/BabbleFinalLogoNoBGWhite.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Project-Babble/ProjectBabble',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/welcome',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/2nnx36uaE5',
              },
              {
                 label: 'Twitter',
                 href: 'https://twitter.com/projectBabbleVR',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCv2iNebcgy9gCKPTRxejQew',
             },
            ],
          },
          {
            title: 'More',
            items: [
              {
               label: 'Blog',
               to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Project-Babble/ProjectBabble',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Project Babble. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
