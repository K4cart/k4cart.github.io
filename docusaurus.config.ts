import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'k4cart Help',
  tagline: 'Guides for store owners — get set up and start selling',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Organization Pages: https://k4cart.github.io/
  url: 'https://k4cart.github.io',
  baseUrl: '/',

  organizationName: 'k4cart',
  projectName: 'k4cart.github.io',
  trailingSlash: false,

  onBrokenLinks: 'throw',

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
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'k4cart Help',
      logo: {
        alt: 'k4cart',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'merchantSidebar',
          position: 'left',
          label: 'Guides',
        },
        {
          href: 'https://k4cart.com',
          label: 'k4cart.com',
          position: 'right',
        },
        {
          href: 'https://k4cart.com/sign-in',
          label: 'Sign in',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {label: 'Getting started', to: '/docs/getting-started/create-account'},
            {label: 'Go live checklist', to: '/docs/go-live/overview'},
            {label: 'Plans & limits', to: '/docs/plans/overview'},
          ],
        },
        {
          title: 'k4cart',
          items: [
            {label: 'Website', href: 'https://k4cart.com'},
            {label: 'Pricing', href: 'https://k4cart.com/pricing'},
            {label: 'Contact', href: 'https://k4cart.com/contact'},
          ],
        },
        {
          title: 'Legal',
          items: [
            {label: 'Privacy policy', href: 'https://k4cart.com/privacy-policy'},
            {label: 'Terms', href: 'https://k4cart.com/terms'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} k4cart. Built for merchants.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
