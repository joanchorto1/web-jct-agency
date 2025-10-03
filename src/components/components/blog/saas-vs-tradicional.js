import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import Layout from '../../layouts/layout';

const SaasVsTradicionalArticle = () => {
  const { t } = useTranslation();
  const sections = t('articles.saas.sections', { returnObjects: true });

  return (
    <Layout>
      <Helmet>
        <title>{t('articles.saas.meta.title')}</title>
        <meta
          name="description"
          content={t('articles.saas.meta.description')}
        />
      </Helmet>
      <article className="container py-5">
        <h1 className="mb-4">{t('articles.saas.title')}</h1>
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

export default SaasVsTradicionalArticle;
