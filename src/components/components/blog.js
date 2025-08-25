import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/layout';

const Blog = () => (
  <Layout>
    <Helmet>
      <title>Blog de JCT Agency | Recursos per a PIMEs i gestories</title>
      <meta
        name="description"
        content="Articles sobre SEO, desenvolupament i màrqueting digital per ajudar la teva empresa a créixer."
      />
    </Helmet>
    <section className="container py-5">
      <h1 className="mb-4 text-center">Blog</h1>
      <article className="mb-4">
        <h2>
          <Link to="/blog/optimitzacio-seo" className="text-decoration-none">
            Optimització SEO per a PIMEs: 5 consells clau
          </Link>
        </h2>
        <p className="text-muted">
          Aprèn com millorar la visibilitat del teu negoci a Google amb tècniques senzilles i efectives.
        </p>
      </article>
      <article className="mb-4">
        <h2>
          <Link to="/blog/software-a-mida-beneficis" className="text-decoration-none">
            Beneficis del software a mida per a gestories i PIMEs
          </Link>
        </h2>
        <p className="text-muted">
          Descobreix per què invertir en solucions personalitzades pot impulsar l'eficiència del teu negoci.
        </p>
      </article>
    </section>
  </Layout>
);

export default Blog;
