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
    path: '/renzi-blog/archive',
    component: ComponentCreator('/renzi-blog/archive', '412'),
    exact: true
  },
  {
    path: '/renzi-blog/authors',
    component: ComponentCreator('/renzi-blog/authors', 'bd5'),
    exact: true
  },
  {
    path: '/renzi-blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/renzi-blog/authors/all-sebastien-lorber-articles', 'edb'),
    exact: true
  },
  {
    path: '/renzi-blog/authors/yangshun',
    component: ComponentCreator('/renzi-blog/authors/yangshun', '776'),
    exact: true
  },
  {
    path: '/renzi-blog/first-blog-post',
    component: ComponentCreator('/renzi-blog/first-blog-post', '0d4'),
    exact: true
  },
  {
    path: '/renzi-blog/hello-world',
    component: ComponentCreator('/renzi-blog/hello-world', '795'),
    exact: true
  },
  {
    path: '/renzi-blog/markdown-page',
    component: ComponentCreator('/renzi-blog/markdown-page', '21a'),
    exact: true
  },
  {
    path: '/renzi-blog/mdx-blog-post',
    component: ComponentCreator('/renzi-blog/mdx-blog-post', '13a'),
    exact: true
  },
  {
    path: '/renzi-blog/tags',
    component: ComponentCreator('/renzi-blog/tags', '77e'),
    exact: true
  },
  {
    path: '/renzi-blog/tags/demo',
    component: ComponentCreator('/renzi-blog/tags/demo', '491'),
    exact: true
  },
  {
    path: '/renzi-blog/tags/docusaurus',
    component: ComponentCreator('/renzi-blog/tags/docusaurus', '1c3'),
    exact: true
  },
  {
    path: '/renzi-blog/tags/facebook',
    component: ComponentCreator('/renzi-blog/tags/facebook', 'c4e'),
    exact: true
  },
  {
    path: '/renzi-blog/tags/hello',
    component: ComponentCreator('/renzi-blog/tags/hello', '3b3'),
    exact: true
  },
  {
    path: '/renzi-blog/tags/hola',
    component: ComponentCreator('/renzi-blog/tags/hola', 'a18'),
    exact: true
  },
  {
    path: '/renzi-blog/tags/学习笔记',
    component: ComponentCreator('/renzi-blog/tags/学习笔记', '4f5'),
    exact: true
  },
  {
    path: '/renzi-blog/welcome',
    component: ComponentCreator('/renzi-blog/welcome', '737'),
    exact: true
  },
  {
    path: '/renzi-blog/',
    component: ComponentCreator('/renzi-blog/', 'af2'),
    exact: true
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
