import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import Layout from '../layouts/layout';
import { DEFAULT_LANGUAGE } from '../../i18n';

const Blog = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang ?? DEFAULT_LANGUAGE;

  const buildPath = (path = '') => `/${currentLang}${path ? `/${path}` : ''}`;

  const posts = [
    { path: 'blog/optimitzacio-seo', key: 'blog.posts.seo' },
    { path: 'blog/software-a-mida-beneficis', key: 'blog.posts.software' },
    { path: 'blog/digitalitzar-pime', key: 'blog.posts.digital' },
    { path: 'blog/verifactu-gestories', key: 'blog.posts.verifactu' },
    { path: 'blog/saas-vs-tradicional', key: 'blog.posts.saas' },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t('blog.meta.title')}</title>
        <meta
          name="description"
          content={t('blog.meta.description')}
        />
      </Helmet>
      <section className="container py-5">
        <h1 className="mb-4 text-center">{t('blog.title')}</h1>
        {posts.map(({ path, key }) => (
          <article className="mb-4" key={key}>
            <h2>
              <Link to={buildPath(path)} className="text-decoration-none">
                {t(`${key}.title`)}
              </Link>
            </h2>
            <p className="text-muted">
              {t(`${key}.excerpt`)}
            </p>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default Blog;
