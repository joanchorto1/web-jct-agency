import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { localSeoPages } from '../data/localSeoPages';

function LocalSeoHubPage() {
  return (
    <article className="light-page">
      <Helmet>
        <title>Consultoría informática local | Joan Chorto Consultor</title>
        <meta
          name="description"
          content="Consultoría informática, empresas de desarrollo de software y servicios informáticos para pymes en Tortosa, Amposta, La Ràpita, Deltebre, Cambrils, Reus, Tarragona y Vinaroz."
        />
      </Helmet>

      <section className="light-page__hero" data-aos="fade-up">
        <div className="site-container light-page__hero-grid">
          <div>
            <p className="light-page__eyebrow">SEO local</p>
            <h1>Consultoría informática para empresas de la zona.</h1>
            <p>
              Desarrollo de software, servicios informáticos y software de gestión para pymes que necesitan control,
              datos claros y procesos que funcionen.
            </p>
            <Link to="/analisis-gratuito" className="home-premium__cta">
              Analizar mi empresa
            </Link>
          </div>
          <div className="light-page__side-note" data-aos="zoom-in" data-aos-delay="120">
            <p className="light-page__eyebrow">Zonas</p>
            <h2>Terres de l'Ebre, Tarragona, Baix Camp, Costa Daurada y Baix Maestrat.</h2>
          </div>
        </div>
      </section>

      <section className="light-page__section">
        <div className="site-container">
          <div className="light-page__card-grid light-page__card-grid--three">
            {localSeoPages.map((page, index) => (
              <article className="light-page__card" key={page.slug} data-aos="fade-up" data-aos-delay={(index % 3) * 80}>
                <p className="light-page__eyebrow">{page.area}</p>
                <h2>{page.title}</h2>
                <p>{page.metaDescription}</p>
                <Link to={`/consultoria-informatica/${page.slug}`} className="seo-link-button">
                  Ver zona
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

export default LocalSeoHubPage;
