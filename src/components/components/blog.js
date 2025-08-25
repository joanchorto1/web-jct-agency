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
        content="Guies de digitalització, SEO i programari Veri*Factu per fer créixer el teu negoci i millorar la gestió empresarial."
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
      <article className="mb-4">
        <h2>
          <Link to="/blog/digitalitzar-pime" className="text-decoration-none">
            Com digitalitzar la gestió d’una PIME en 5 passos
          </Link>
        </h2>
        <p className="text-muted">
          Guia pas a pas per modernitzar la teva empresa amb eines digitals accessibles i eficients.
        </p>
      </article>
      <article className="mb-4">
        <h2>
          <Link to="/blog/verifactu-gestories" className="text-decoration-none">
            Guia pràctica per a gestories sobre Veri*Factu
          </Link>
        </h2>
        <p className="text-muted">
          Tot el que has de saber sobre la nova normativa de facturació i com adaptar-t’hi sense complicacions.
        </p>
      </article>
      <article className="mb-4">
        <h2>
          <Link to="/blog/saas-vs-tradicional" className="text-decoration-none">
            Per què un SaaS és millor que un software tradicional?
          </Link>
        </h2>
        <p className="text-muted">
          Comparativa entre models per escollir la solució tecnològica més adequada per al teu negoci.
        </p>
      </article>
    </section>
  </Layout>
);

export default Blog;
