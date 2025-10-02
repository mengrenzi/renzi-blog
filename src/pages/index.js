import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useGlobalData from '@docusaurus/useGlobalData';

export default function Home() {
  const globalData = useGlobalData();

  // 优先用常见的插件 key，拿到 blog 实例数据
  const tryKeys = [
    '@docusaurus/plugin-content-blog',
    'docusaurus-plugin-content-blog',
  ];
  let blogData = null;

  for (const k of tryKeys) {
    const inst = globalData && globalData[k];
    if (inst) {
      blogData = inst.default || inst[Object.keys(inst)[0]];
      if (blogData) break;
    }
  }

  // 兜底：遍历所有插件实例，找到含 blogPosts 的
  if (!blogData && globalData) {
    for (const inst of Object.values(globalData)) {
      const cand = inst.default || inst[Object.keys(inst)[0]];
      if (cand && Array.isArray(cand.blogPosts)) {
        blogData = cand;
        break;
      }
    }
  }

  const posts = blogData && blogData.blogPosts ? blogData.blogPosts : [];

  // 按日期新→旧并取最近 5 篇
  const recent = [...posts]
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
    .slice(0, 5);

  return (
    <Layout title="Renzi Blog" description="Recent blog posts">
      <main className="container margin-vert--lg">
        <h1>📚 最近文章</h1>

        {recent.length === 0 ? (
          <>
            <p>暂时没有检测到博客文章。</p>
            <p>
              请确认 <code>docusaurus.config.js</code> 开启了 <code>blog</code>
              ， 并在 <code>blog/</code> 目录创建至少一篇 <code>.md/.mdx</code>
              。
            </p>
          </>
        ) : (
          <ul>
            {recent.map((post) => (
              <li key={post.metadata.permalink}>
                <Link to={post.metadata.permalink}>{post.metadata.title}</Link>
                <small>
                  {' '}
                  — {new Date(post.metadata.date).toISOString().split('T')[0]}
                </small>
              </li>
            ))}
          </ul>
        )}

        <p style={{ marginTop: 16 }}>
          <Link to="/blog">查看全部 →</Link>
        </p>
      </main>
    </Layout>
  );
}
