import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import Layout from '../../layouts/layout';

const SeoArticle = () => {
  const { t } = useTranslation();
  const sections = t('articles.seo.sections', { returnObjects: true });

  return (
    <Layout>
      <Helmet>
        <title>{t('articles.seo.meta.title')}</title>
        <meta
          name="description"
          content={t('articles.seo.meta.description')}
        />
      </Helmet>
      <article className="container py-5">
        <h1 className="mb-4">{t('articles.seo.title')}</h1>
        {sections.map((section, index) => (
          <div key={index} className="article-section">
            {section.heading && <h2 className="mt-4">{section.heading}</h2>}
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}
          </div>
        ))}
      </article>
    </Layout>
  );
};

export default SeoArticle;
