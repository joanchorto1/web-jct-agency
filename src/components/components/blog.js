import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/layout';

const posts = [
  {
    slug: '/blog/digitalitzar-pime',
    title: 'Com digitalitzar la gestió d’una PIME en 5 passos',
    description:
      'Full de ruta per detectar colls d’ampolla, prioritzar eines SaaS i desplegar un pla de transformació digital.',
    tags: ['Transformació digital', 'Operacions'],
  },
  {
    slug: '/blog/verifactu-gestories',
    title: 'Guia pràctica per a gestories sobre Veri*Factu',
    description:
      'Checklist per adaptar-te a la normativa de factura electrònica, reduir riscos i acompanyar els teus clients.',
    tags: ['Fiscalitat', 'Veri*Factu'],
  },
  {
    slug: '/blog/optimitzacio-seo',
    title: 'Optimització SEO per a PIMEs: guia completa',
    description:
      'Estratègies per posicionar la teva web a Google, reforçar la marca i captar trànsit qualificat.',
    tags: ['SEO', 'Creixement'],
  },
  {
    slug: '/blog/software-a-mida-beneficis',
    title: 'Beneficis del software a mida per a gestories i PIMEs',
    description:
      'Quan optar per solucions personalitzades, com calcular el ROI i què tenir en compte en el desplegament.',
    tags: ['Software a mida', 'Estratègia'],
  },
  {
    slug: '/blog/saas-vs-tradicional',
    title: 'Per què un SaaS és millor que un software tradicional?',
    description:
      'Comparativa de costos, manteniment i velocitat d’implantació per escollir el model tecnològic adequat.',
    tags: ['SaaS', 'Finances'],
  },
];

const Blog = () => (
  <Layout>
    <Helmet>
      <title>Blog de JCT Agency | Guia de recursos digitals per a PIMEs</title>
      <meta
        name="description"
        content="Explora articles amb etiquetes sobre digitalització, SEO, Veri*Factu i software a mida per fer créixer la teva PIME."
      />
    </Helmet>
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="mb-3">Blog</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: '720px' }}>
          Aquesta és la col·lecció d’articles que fonamenta el nostre hub de recursos. Consulta el resum per clústers a la
          <Link to="/recursos" className="text-decoration-none ms-1">
            pàgina de recursos
          </Link>
          i descobreix com aplicar-los a la teva PIME.
        </p>
      </div>
      <div className="row g-4">
        {posts.map((post) => (
          <div className="col-md-6" key={post.slug}>
            <article className="h-100 border rounded-3 p-4 position-relative">
              <div className="mb-3">
                {post.tags.map((tag) => (
                  <span key={tag} className="badge bg-secondary-subtle text-secondary-emphasis me-2">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="h5">
                <Link to={post.slug} className="stretched-link text-decoration-none">
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted mb-0">{post.description}</p>
            </article>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Blog;
