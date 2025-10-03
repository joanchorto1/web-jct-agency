import React from 'react';
import './ResultsPage.css';

const kpiHighlights = [
  {
    label: 'Temps d\'equip estalviat',
    expectedImpact: '−5 – −10 h/setmana',
    description: 'Placeholder per ajustar hores reals segons projecte i mida de l\'equip.'
  },
  {
    label: 'Reducció d\'errors operatius',
    expectedImpact: '−30% – −45%',
    description: 'Placeholder per xifres d\'error actualitzades a cada implantació.'
  },
  {
    label: 'Acceleració en el time-to-market',
    expectedImpact: '−2 – −4 setmanes',
    description: 'Placeholder per objectius reals de lliurament i cicles de llançament.'
  },
  {
    label: 'Increment de satisfacció del client final',
    expectedImpact: '+12 – +18 punts NPS',
    description: 'Placeholder per dades d\'enquestes i feedbacks específics.'
  }
];

const typicalExamples = [
  {
    title: 'Exemple típic: Integració d\'ERP',
    before: ['Flux d\'informació dispers', 'Duplicació manual de dades', 'Visibilitat mensual tardana'],
    after: ['Quadres de comandament en temps real', 'Sync automàtica entre sistemes', 'Decisions setmanals basades en dades'],
    placeholderNote: 'Reservat per substituir per cas real d\'integració (quote + mètriques)'
  },
  {
    title: 'Exemple típic: Portal de clients B2B',
    before: ['Processos de comanda via email', 'Sense historial compartit', 'Alta càrrega del servei d\'atenció'],
    after: ['Autoservei 24/7', 'Tracking centralitzat', 'Equip d\'atenció focalitzat en consultes de valor'],
    placeholderNote: 'Reservat per testimoni real d\'empresa distribuïdora (en preparació)'
  },
  {
    title: 'Exemple típic: Automatització de reporting',
    before: ['Consola de fulls de càlcul', 'Errors humans recurrents', 'Tancaments mensuals lents'],
    after: ['Pipeline validat i auditable', 'Alarmes automàtiques', 'Tancaments setmanals'],
    placeholderNote: 'Espai per cita d\'equip financer i gràfic de resultats'
  }
];

const ResultsPage = () => {
  return (
    <div className="results-page">
      <header className="results-hero">
        <div className="results-hero__content">
          <p className="eyebrow">Resultats previstos</p>
          <h1>Impacte tangible des del primer trimestre</h1>
          <p className="subtitle">
            Aquesta secció presenta KPI esperats i escenaris basats en projectes similars. Les xifres són placeholders
            i es podran ajustar amb dades reals a partir de l\'anàlisi inicial i la monitorització continuada.
          </p>
          <a className="cta" href="/pressupost">Sol·licita una anàlisi personalitzada</a>
        </div>
      </header>

      <section className="kpi-section">
        <h2>KPI esperats (placeholders)</h2>
        <p className="section-intro">
          Cada projecte defineix objectius específics. Utilitza aquestes mètriques com a marc inicial fins que disposem
          de dades contrastades del teu cas.
        </p>
        <div className="kpi-grid">
          {kpiHighlights.map((kpi) => (
            <article key={kpi.label} className="kpi-card">
              <h3>{kpi.label}</h3>
              <p className="kpi-impact">{kpi.expectedImpact}</p>
              <p className="kpi-description">{kpi.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="examples-section" aria-labelledby="typical-examples-title">
        <div className="examples-header">
          <h2 id="typical-examples-title">Exemples típics (per convertir en casos reals)</h2>
          <p>
            Cada exemple inclou diagrama abans/després i una nota clara sobre el futur testimoni. Quan disposem de dades
            concretes, només caldrà substituir els placeholders per mètriques, cites i logos.
          </p>
        </div>
        <div className="examples-grid">
          {typicalExamples.map((example) => (
            <article key={example.title} className="example-card">
              <header className="example-card__header">
                <h3>{example.title}</h3>
                <span className="example-card__tag">Exemple típic</span>
              </header>
              <div className="example-diagram">
                <div className="diagram-column">
                  <h4>Abans</h4>
                  <ul>
                    {example.before.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="diagram-arrow" aria-hidden="true">→</div>
                <div className="diagram-column">
                  <h4>Després</h4>
                  <ul>
                    {example.after.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="placeholder-note">{example.placeholderNote}</p>
              <a className="example-cta" href="/pressupost">Revisa l\'anàlisi pas a pas</a>
            </article>
          ))}
        </div>
      </section>

      <section className="future-proof-section">
        <h2>Properament: testimonis i cites reals</h2>
        <div className="future-proof-grid">
          <div className="future-proof-slot" role="status" aria-live="polite">
            <h3>Slot per testimoni</h3>
            <p>
              Placeholder per a cita destacada d\'un client real, amb foto i càrrec. El disseny garanteix que afegir el
              contingut no alteri l\'estructura actual.
            </p>
          </div>
          <div className="future-proof-slot">
            <h3>Slot per mètriques en profunditat</h3>
            <p>
              Espai reservat per a gràfiques o dashboards interactius un cop disposem d\'analítica consolidada.
            </p>
          </div>
          <div className="future-proof-slot">
            <h3>Slot per logotips i quotes</h3>
            <p>
              Àrea pensada per incorporar logotips aprovats i quotes verificades sense afectar l\'experiència existent.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultsPage;
