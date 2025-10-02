import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/renzi-blog/authors',
    component: ComponentCreator('/renzi-blog/authors', 'bd5'),
    exact: true
  },
  {
    path: '/renzi-blog/markdown-page',
    component: ComponentCreator('/renzi-blog/markdown-page', '21a'),
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
