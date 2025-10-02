// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Renzi's Blog",
  favicon: 'img/favicon.ico',
  future: { v4: true },

  // === GitHub Pages 基本面 ===
  url: 'https://mengrenzi.github.io', // 你的 GitHub Pages 域名
  baseUrl: '/renzi-blog/', // 仓库名作为子路径
  organizationName: 'mengrenzi', // GitHub 用户名
  projectName: 'renzi-blog', // *** 仓库名 ***

  // 先放宽校验，让它能过（成功后你再改回 'throw'）
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,

  // 单语言站点（干掉 i18n，避免 /en 路径）
  // i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // 先关掉 docs，后面你需要再开
        docs: false,

        // 让“博客就是首页”，并且每页只展示 5 篇（满足你首页“最近5篇”）
        blog: {
          routeBasePath: '/',
          postsPerPage: 5,
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },

        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: { respectPrefersColorScheme: true },

      navbar: {
        title: 'Renzi',
        logo: { alt: 'Logo', src: 'img/logo.svg' },
        items: [
          { to: '/', label: 'Blog', position: 'left' }, // 首页=博客
          {
            href: 'https://github.com/mengrenzi/renzi-blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              { label: 'Blog', to: '/' }, // *** 不要指向 /blog ***
              { label: 'GitHub', href: 'https://github.com/mengrenzi' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Renzi`,
      },

      prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    }),
};

export default config;
