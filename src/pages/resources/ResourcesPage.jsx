import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Layout from '../../components/layouts/layout';

const foundationClusters = [
  {
    id: 'transformacio-digital',
    title: 'Transformació digital i operacions',
    description:
      'Plans i eines per connectar processos, automatitzar tasques i construir una operativa àgil que s’adapti al creixement.',
    focusAreas: ['Anàlisi de processos', 'Automatitzacions SaaS', 'Gestió del canvi'],
    posts: [
      {
        slug: '/blog/digitalitzar-pime',
        title: 'Com digitalitzar la gestió d’una PIME en 5 passos',
        description:
          'Diagnòstic inicial, eines recomanades i full de ruta per transformar la gestió del teu negoci.',
        tags: ['Transformació digital', 'Operacions'],
      },
    ],
  },
  {
    id: 'creixement-i-marqueting',
    title: 'Creixement i màrqueting digital',
    description:
      'Estratègies per guanyar visibilitat, captar clients i consolidar la marca de la teva PIME en canals digitals.',
    focusAreas: ['SEO local', 'Inbound marketing', 'Contingut per a gestories'],
    posts: [
      {
        slug: '/blog/optimitzacio-seo',
        title: 'Optimització SEO per a PIMEs: guia completa',
        description:
          'De la recerca de paraules clau a l’anàlisi de resultats per posicionar-te millor a Google.',
        tags: ['SEO', 'Creixement'],
      },
    ],
  },
  {
    id: 'compliance-i-facturacio',
    title: 'Compliance, fiscalitat i facturació',
    description:
      'Normatives tecnològiques i bones pràctiques per complir requisits fiscals sense perdre productivitat.',
    focusAreas: ['Veri*Factu', 'Seguretat de dades', 'Integració comptable'],
    posts: [
      {
        slug: '/blog/verifactu-gestories',
        title: 'Guia pràctica per a gestories sobre Veri*Factu',
        description:
          'Com adaptar-te a la normativa de facturació electrònica i aprofitar-la per oferir més valor.',
        tags: ['Fiscalitat', 'Veri*Factu'],
      },
    ],
  },
];

const futureResources = [
  {
    title: 'Checklist de maduresa digital per a PIMEs',
    description:
      'Un qüestionari ràpid per detectar forats operatius i prioritzar iniciatives digitals abans d’invertir.',
    type: 'analysis',
  },
  {
    title: 'Demo guiada d’Avero per a gestories',
    description:
      'Recorregut interactiu pel nostre ERP SaaS amb casos reals de gestories i despatxos professionals.',
    type: 'demo',
  },
  {
    title: 'Plantilla de reporting mensual per a equips híbrids',
    description:
      'Format base per consolidar mètriques operatives, fiscals i de màrqueting en una única taula.',
    type: 'analysis',
  },
];

const getCta = (type) => {
  if (type === 'demo') {
    return { label: 'Reserva una demo', to: '/avero' };
  }
  return { label: 'Sol·licita una anàlisi', to: '/pressupost' };
};

const ResourcesPage = () => (
  <Layout>
    <Helmet>
      <title>Recursos i guies per a PIMEs | JCT Agency</title>
      <meta
        name="description"
        content="Central de recursos amb guies fundacionals, categories per clúster i plantilles per impulsar la digitalització de la teva PIME."
      />
    </Helmet>
    <section className="bg-light py-5 border-bottom">
      <div className="container py-3">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <h1 className="display-5 fw-semibold mb-3">Hub de recursos per activar la teva estratègia digital</h1>
            <p className="lead text-muted mb-0">
              Accedeix als continguts clau per entendre com treballem la digitalització, el creixement i el compliment
              normatiu. Hem agrupat els recursos per clústers perquè puguis avançar pas a pas en cada àrea crítica.
            </p>
          </div>
          <div className="col-lg-5">
            <div className="p-4 bg-white shadow-sm rounded-3 h-100">
              <h2 className="h5 text-uppercase text-primary mb-3">Com utilitzar aquest hub</h2>
              <ul className="mb-0 text-muted small">
                <li className="mb-2">Explora els clústers i les seves àrees de focus per identificar el punt de partida adequat.</li>
                <li className="mb-2">Consulta els articles fundacionals i comparteix-los amb el teu equip.</li>
                <li className="mb-0">Activa els recursos futurs per obtenir suport personalitzat: anàlisi experta o demo guiada.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="container py-5">
      {foundationClusters.map((cluster) => (
        <div className="mb-5" key={cluster.id}>
          <div className="row g-4 align-items-start">
            <div className="col-lg-4">
              <span className="badge bg-primary-subtle text-primary-emphasis mb-2 text-uppercase fw-semibold">
                Clúster
              </span>
              <h2 className="h3 mb-3">{cluster.title}</h2>
              <p className="text-muted">{cluster.description}</p>
              <h3 className="h6 text-uppercase text-muted mt-4">Àrees de focus</h3>
              <ul className="ps-3 text-muted">
                {cluster.focusAreas.map((area) => (
                  <li key={area} className="mb-1">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-8">
              <div className="row g-4">
                {cluster.posts.map((post) => (
                  <div className="col-md-6" key={post.slug}>
                    <article className="h-100 border rounded-3 p-4 position-relative">
                      <div className="mb-3">
                        {post.tags.map((tag) => (
                          <span key={tag} className="badge bg-secondary-subtle text-secondary-emphasis me-2">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="h5">
                        <Link to={post.slug} className="stretched-link text-decoration-none">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-muted mb-0">{post.description}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>

    <section className="py-5 bg-body-secondary">
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="badge bg-dark-subtle text-dark-emphasis text-uppercase fw-semibold mb-2">En desenvolupament</span>
          <h2 className="h3">Models de targeta breu per als pròxims recursos</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '680px' }}>
            Estem preparant nous materials que complementaran els continguts fundacionals. Subscriu-te a la demo o
            demana una anàlisi personalitzada i sigues el primer en rebre’ls quan estiguin disponibles.
          </p>
        </div>
        <div className="row g-4">
          {futureResources.map((resource) => {
            const cta = getCta(resource.type);
            return (
              <div className="col-md-4" key={resource.title}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body d-flex flex-column">
                    <span className="badge bg-info-subtle text-info-emphasis text-uppercase fw-semibold mb-3">
                      {resource.type === 'demo' ? 'Demo' : 'Anàlisi'}
                    </span>
                    <h3 className="h5">{resource.title}</h3>
                    <p className="text-muted flex-grow-1">{resource.description}</p>
                    <Link to={cta.to} className="btn btn-primary mt-3 align-self-start">
                      {cta.label}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
);

export default ResourcesPage;
