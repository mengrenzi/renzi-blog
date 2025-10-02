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
    path: '/renzi-blog/tags',
    component: ComponentCreator('/renzi-blog/tags', '77e'),
    exact: true
  },
  {
    path: '/renzi-blog/tags/note',
    component: ComponentCreator('/renzi-blog/tags/note', '646'),
    exact: true
  },
  {
    path: '/renzi-blog/',
    component: ComponentCreator('/renzi-blog/', '445'),
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
