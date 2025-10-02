import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/renzi-blog/__docusaurus/debug',
    component: ComponentCreator('/renzi-blog/__docusaurus/debug', '101'),
    exact: true
  },
  {
    path: '/renzi-blog/__docusaurus/debug/config',
    component: ComponentCreator('/renzi-blog/__docusaurus/debug/config', '52f'),
    exact: true
  },
  {
    path: '/renzi-blog/__docusaurus/debug/content',
    component: ComponentCreator('/renzi-blog/__docusaurus/debug/content', 'eec'),
    exact: true
  },
  {
    path: '/renzi-blog/__docusaurus/debug/globalData',
    component: ComponentCreator('/renzi-blog/__docusaurus/debug/globalData', '789'),
    exact: true
  },
  {
    path: '/renzi-blog/__docusaurus/debug/metadata',
    component: ComponentCreator('/renzi-blog/__docusaurus/debug/metadata', '803'),
    exact: true
  },
  {
    path: '/renzi-blog/__docusaurus/debug/registry',
    component: ComponentCreator('/renzi-blog/__docusaurus/debug/registry', 'd6d'),
    exact: true
  },
  {
    path: '/renzi-blog/__docusaurus/debug/routes',
    component: ComponentCreator('/renzi-blog/__docusaurus/debug/routes', 'dc1'),
    exact: true
  },
  {
    path: '/renzi-blog/blog',
    component: ComponentCreator('/renzi-blog/blog', 'bde'),
    exact: true
  },
  {
    path: '/renzi-blog/blog/archive',
    component: ComponentCreator('/renzi-blog/blog/archive', '232'),
    exact: true
  },
  {
    path: '/renzi-blog/blog/authors',
    component: ComponentCreator('/renzi-blog/blog/authors', 'dc5'),
    exact: true
  },
  {
    path: '/renzi-blog/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/renzi-blog/blog/authors/all-sebastien-lorber-articles', '896'),
    exact: true
  },
  {
    path: '/renzi-blog/blog/authors/yangshun',
    component: ComponentCreator('/renzi-blog/blog/authors/yangshun', '922'),
    exact: true
  },
  {
    path: '/renzi-blog/blog/first-blog-post',
    component: ComponentCreator('/renzi-blog/blog/first-blog-post', '267'),
    exact: true
  },
  {
    path: '/renzi-blog/blog/long-blog-post',
    component: ComponentCreator('/renzi-blog/blog/long-blog-post', 'e48'),
    exact: true
  },
  {
    path: '/renzi-blog/blog/mdx-blog-post',
    component: ComponentCreator('/renzi-blog/blog/mdx-blog-post', '137'),
    exact: true
  },
  {
    path: '/renzi-blog/blog/tags',
    component: ComponentCreator('/renzi-blog/blog/tags', '555'),
    exact: true
  },
  {
    path: '/renzi-blog/blog/tags/docusaurus',
    component: ComponentCreator('/renzi-blog/blog/tags/docusaurus', '542'),
    exact: true
  },
  {
    path: '/renzi-blog/blog/tags/facebook',
    component: ComponentCreator('/renzi-blog/blog/tags/facebook', '49e'),
    exact: true
  },
  {
    path: '/renzi-blog/blog/tags/hello',
    component: ComponentCreator('/renzi-blog/blog/tags/hello', '74e'),
    exact: true
  },
  {
    path: '/renzi-blog/blog/tags/hola',
    component: ComponentCreator('/renzi-blog/blog/tags/hola', 'ed9'),
    exact: true
  },
  {
    path: '/renzi-blog/blog/welcome',
    component: ComponentCreator('/renzi-blog/blog/welcome', '419'),
    exact: true
  },
  {
    path: '/renzi-blog/markdown-page',
    component: ComponentCreator('/renzi-blog/markdown-page', '21a'),
    exact: true
  },
  {
    path: '/renzi-blog/docs',
    component: ComponentCreator('/renzi-blog/docs', '6c2'),
    routes: [
      {
        path: '/renzi-blog/docs',
        component: ComponentCreator('/renzi-blog/docs', '155'),
        routes: [
          {
            path: '/renzi-blog/docs',
            component: ComponentCreator('/renzi-blog/docs', 'dec'),
            routes: [
              {
                path: '/renzi-blog/docs/category/tutorial---basics',
                component: ComponentCreator('/renzi-blog/docs/category/tutorial---basics', '588'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/renzi-blog/docs/category/tutorial---extras',
                component: ComponentCreator('/renzi-blog/docs/category/tutorial---extras', 'd79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/renzi-blog/docs/intro',
                component: ComponentCreator('/renzi-blog/docs/intro', '249'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/renzi-blog/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/renzi-blog/docs/tutorial-basics/congratulations', '704'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/renzi-blog/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/renzi-blog/docs/tutorial-basics/create-a-blog-post', 'f6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/renzi-blog/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/renzi-blog/docs/tutorial-basics/create-a-document', 'd21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/renzi-blog/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/renzi-blog/docs/tutorial-basics/create-a-page', '4d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/renzi-blog/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/renzi-blog/docs/tutorial-basics/deploy-your-site', '60b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/renzi-blog/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/renzi-blog/docs/tutorial-basics/markdown-features', '59a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/renzi-blog/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/renzi-blog/docs/tutorial-extras/manage-docs-versions', '17c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/renzi-blog/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/renzi-blog/docs/tutorial-extras/translate-your-site', 'd0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/renzi-blog/',
    component: ComponentCreator('/renzi-blog/', '646'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
