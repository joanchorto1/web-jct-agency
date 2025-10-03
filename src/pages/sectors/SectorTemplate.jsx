import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layouts/layout';

const SectorTemplate = ({ title, idealFlow, kpis, typicalExample, budgetRange }) => {
  const flowItems = Array.isArray(idealFlow) ? idealFlow : [idealFlow];
  const kpiItems = Array.isArray(kpis) ? kpis : [kpis];
  const example = typicalExample || {};
  const exampleHighlights = Array.isArray(example.highlights) ? example.highlights : [];

  return (
    <Layout>
      <Helmet>
        <title>{`JCT Agency | Solucions digitals per a ${title.toLowerCase()}`}</title>
        <meta
          name="description"
          content={`Coneix com JCT Agency optimitza processos per al sector ${title} amb un flux ideal de treball, KPIs clau i fases d'implementació de ${budgetRange}.`}
        />
      </Helmet>

      <div className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">Sector</span>
            <h1 className="display-5 fw-bold">{title}</h1>
            <p className="lead text-muted">
              Dissenyem solucions SaaS i consultoria operativa perquè el teu equip treballi amb més control,
              traçabilitat i capacitat de resposta.
            </p>
          </div>

          <div className="row g-4 mb-5" data-aos="fade-up">
            <div className="col-md-6">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body p-4">
                  <h2 className="h4">Flux ideal de treball</h2>
                  <p className="text-muted">Traçem les fases claus per detectar colls d'ampolla i automatitzar tasques repetitives.</p>
                  <ol className="ps-3">
                    {flowItems.map((item, index) => (
                      <li key={`flow-${index}`} className="mb-2">
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body p-4">
                  <h2 className="h4">KPIs que monitoritzem</h2>
                  <p className="text-muted">Definim mètriques accionables per veure l'impacte de cada sprint.</p>
                  <ul className="ps-3">
                    {kpiItems.map((item, index) => (
                      <li key={`kpi-${index}`} className="mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm border-0 mb-5" data-aos="fade-up">
            <div className="card-body p-4 p-md-5">
              <h2 className="h4">Exemple típic d'implementació</h2>
              {example.title && <h3 className="h5 text-primary mt-3">{example.title}</h3>}
              {example.description && <p className="text-muted">{example.description}</p>}
              {exampleHighlights.length > 0 && (
                <ul className="ps-3">
                  {exampleHighlights.map((highlight, index) => (
                    <li key={`example-${index}`} className="mb-2">
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="row g-4 align-items-center mb-5" data-aos="fade-up">
            <div className="col-md-7">
              <div className="p-4 p-md-5 bg-white shadow-sm rounded-4 h-100">
                <h2 className="h4">Pressupost per fases</h2>
                <p className="mb-2">
                  Treballem amb iteracions curtes per aportar valor tangible des de la primera entrega.
                </p>
                <p className="fw-semibold mb-1">{budgetRange}</p>
                <p className="text-muted mb-0">
                  Cada fase se centra a desbloquejar un tram del flux ideal: discovery, prototipat, desplegament i evolució.
                  Els projectes acostumen a situar-se entre <strong>3.000 € i 8.000 € per fase</strong>, depenent de la complexitat i del nombre d'integracions necessàries.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="p-4 p-md-5 bg-primary text-white rounded-4 shadow-sm text-center">
                <h2 className="h4 mb-3">Vols començar?</h2>
                <p className="mb-4">
                  Reservem una sessió de 20 minuts per entendre el teu procés actual i detectar automatitzacions prioritàries.
                </p>
                <a href="/contacto" className="btn btn-light btn-lg fw-semibold">
                  Analitzem el teu procés (20’)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};


export default SectorTemplate;
