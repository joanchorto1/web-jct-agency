import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layouts/layout';

import workOrdersIcon from '../../components/img/portatilIcon.png';
import teamPlanningIcon from '../../components/img/EFICIENCIA.png';
import billingIcon from '../../components/img/Facturacio_Avero.png';
import dashboardIcon from '../../components/img/analisis.png';
import roadmapIcon from '../../components/img/ESCALABILITAT.png';

const SolutionsPage = () => (
  <Layout>
    <Helmet>
      <title>Solucions de gestió empresarial | Joan Chorto Consultor</title>
      <meta
        name="description"
        content="Centralitza parts de treball, planifica equips i integra la facturació amb comptabilitat des d'una única plataforma SaaS dissenyada per a PIMEs, gestories i serveis industrials."
      />
    </Helmet>

    <div className="bg-white text-dark">
      <section className="py-5 bg-light border-bottom">
        <div className="container">
          <div className="row align-items-center g-5 flex-column-reverse flex-md-row">
            <div className="col-md-6">
              <span className="badge bg-primary-subtle text-primary fw-semibold mb-3">
                Solucions sectorials
              </span>
              <h1 className="display-5 fw-bold">Software per coordinar operacions, equips i finances</h1>
              <p className="lead">
                Alinea administració i operacions amb una suite modular que connecta
                <strong> parts de treball</strong>, <strong>planificació d'equips</strong>,
                <strong> facturació i comptabilitat</strong>. Dissenyat per reduir errors,
                eliminar duplicats i guanyar visibilitat en temps real.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                <a href="/pressupost" className="btn btn-primary btn-lg">
                  Demana una demo
                </a>
                <a href="/#clients" className="btn btn-outline-primary btn-lg">
                  Veure sectors a qui ajudem
                </a>
              </div>
              <p className="mt-4 small text-muted">
                Inspira't amb el cas d'ús per a <a href="/avero" className="link-primary">gestories</a> o llegeix com
                <a href="/blog/digitalitzar-pime" className="link-primary"> digitalitzar una PIME</a> sense friccions.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <div className="p-4 bg-white shadow-sm rounded-4 h-100">
                <h2 className="h5 text-uppercase text-primary">Impacte immediat</h2>
                <ul className="list-unstyled mt-3 mb-0 text-start">
                  <li className="d-flex gap-3 align-items-start mb-3">
                    <span className="text-primary fs-4" aria-hidden="true">●</span>
                    <div>
                      <strong>Reducció d'un 40%</strong> del temps administratiu eliminant fulls de càlcul dispersos.
                    </div>
                  </li>
                  <li className="d-flex gap-3 align-items-start mb-3">
                    <span className="text-primary fs-4" aria-hidden="true">●</span>
                    <div>
                      <strong>Compliment garantitzat</strong> amb Veri*Factu i connexió directa amb el teu ERP o gestoria.
                    </div>
                  </li>
                  <li className="d-flex gap-3 align-items-start">
                    <span className="text-primary fs-4" aria-hidden="true">●</span>
                    <div>
                      <strong>Col·laboració fluida</strong> entre oficines, equips de camp i direcció en temps real.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="moduls-operatius">
        <div className="container">
          <div className="row justify-content-between align-items-center mb-5">
            <div className="col-lg-6">
              <h2 className="fw-bold">Mòduls clau per al teu dia a dia</h2>
              <p className="mb-0">
                Cada mòdul resol un <strong>dolor operatiu concret</strong>: des de parts que arriben tard fins a
                factures que no quadren amb la comptabilitat. Implementem funcionalitats a mida segons el sector —
                industrial, serveis professionals o <a href="/avero" className="link-primary">gestories</a>.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="p-4 bg-light rounded-4 shadow-sm h-100">
                <h3 className="h5 text-uppercase text-primary">Beneficis tangibles</h3>
                <ul className="mb-0 mt-3 ps-3">
                  <li>Visibilitat en temps real de l'estat de cada servei.</li>
                  <li>Menys correus i trucades internes gràcies a fluxos automatitzats.</li>
                  <li>Informes accionables per prioritzar equips i recursos.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
            <div className="col">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img src={workOrdersIcon} alt="Parts de treball" className="me-3" style={{ width: '48px' }} />
                    <h3 className="h5 mb-0">Parts de treball &amp; ordres de servei</h3>
                  </div>
                  <p>
                    Centralitza parts des de mòbil i tauleta, amb validació digital i signatura del client.
                    Avisos automàtics eviten retards en facturació i reclamacions.
                  </p>
                  <ul className="small ps-3 mb-0">
                    <li>Flux d'aprovació configurable per responsables.</li>
                    <li>Alertes quan falta informació essencial o fotos.</li>
                    <li>Enllaç directe amb el mòdul de facturació.</li>
                  </ul>
                </div>
                <div className="card-footer bg-transparent border-0 px-4 pb-4">
                  <a href="/blog/saas-vs-tradicional" className="btn btn-link p-0">
                    Per què migrar d'Excel a SaaS?
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img src={teamPlanningIcon} alt="Planificació d'equips" className="me-3" style={{ width: '48px' }} />
                    <h3 className="h5 mb-0">Planificació d’equips</h3>
                  </div>
                  <p>
                    Assigna tècnics i recursos en minuts amb calendaris compartits i disponibilitat en temps real.
                    Redueix hores extres no planificades i evita solapaments.
                  </p>
                  <ul className="small ps-3 mb-0">
                    <li>Quadre de disponibilitat amb filtres per competència.</li>
                    <li>Integració amb eines de signatura horària.</li>
                    <li>Alertes instantànies via email o WhatsApp.</li>
                  </ul>
                </div>
                <div className="card-footer bg-transparent border-0 px-4 pb-4">
                  <a href="/blog/digitalitzar-pime" className="btn btn-link p-0">
                    Consells per coordinar equips híbrids
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img src={billingIcon} alt="Integració facturació" className="me-3" style={{ width: '48px' }} />
                    <h3 className="h5 mb-0">Integració facturació / comptabilitat</h3>
                  </div>
                  <p>
                    Genera factures des dels parts aprovats, sincronitza amb comptabilitat i envia-les a la gestoria
                    sense duplicar dades. Compatible amb Veri*Factu.
                  </p>
                  <ul className="small ps-3 mb-0">
                    <li>Control d'estat: esborrany, enviada, cobrada.</li>
                    <li>Exportacions SII i conciliació bancària guiada.</li>
                    <li>Portal per al client amb notificacions automàtiques.</li>
                  </ul>
                </div>
                <div className="card-footer bg-transparent border-0 px-4 pb-4">
                  <a href="/avero" className="btn btn-link p-0">
                    Descobreix la integració amb gestories
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img src={dashboardIcon} alt="Quadres de comandament" className="me-3" style={{ width: '48px' }} />
                    <h3 className="h5 mb-0">Quadres de comandament</h3>
                  </div>
                  <p>
                    Visualitza KPIs clau: marge per servei, temps de resolució i càrrega de cada equip. Exporta
                    informes per compartir amb direcció o clients.
                  </p>
                  <ul className="small ps-3 mb-0">
                    <li>Dashboards configurables per rol.</li>
                    <li>Alarmes quan hi ha desviacions crítiques.</li>
                    <li>Integració amb Power BI i Looker Studio.</li>
                  </ul>
                </div>
                <div className="card-footer bg-transparent border-0 px-4 pb-4">
                  <a href="/blog/software-a-mida-beneficis" className="btn btn-link p-0">
                    Beneficis del software a mida
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img src={roadmapIcon} alt="Mòduls futurs" className="me-3" style={{ width: '48px' }} />
                    <h3 className="h5 mb-0">Futur roadmap</h3>
                  </div>
                  <p>
                    Estem preparant nous mòduls per ampliar la plataforma: des de gestió d'actius fins a integracions amb
                    marketplaces. Explica'ns què necessites i ho prioritzem.
                  </p>
                  <div className="alert alert-primary mb-0" role="status">
                    Prioritzem funcionalitats conjuntament amb els nostres clients perquè sempre responguin a necessitats
                    reals, sense omplir pantalles innecessàries.
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 border-0 shadow-sm border-dashed" style={{ borderStyle: 'dashed' }}>
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="h5 mb-3">Reserva d'espai per futurs mòduls</h3>
                    <p>
                      El nostre enfocament modular garanteix que puguem desplegar ràpidament nous components segons la
                      teva evolució: integracions amb eines d'RPA, control de magatzem o apps mòbils específiques.
                    </p>
                  </div>
                  <a href="/contacto" className="btn btn-outline-primary align-self-start">
                    Prioritza el teu desenvolupament
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <h2 className="fw-bold">Implementació guiada i suport continu</h2>
              <p>
                Treballem amb metodologia agile, implicant responsables de cada departament. El nostre equip de consultoria
                acompanya la formació, la migració de dades i la integració amb sistemes existents.
              </p>
              <ul className="ps-3">
                <li>Sessions de descoberta per prioritzar funcionalitats.</li>
                <li>Full de ruta compartit amb milestones clars.</li>
                <li>Suport evolutiu perquè el software creixi amb el teu negoci.</li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="p-4 bg-white shadow-sm rounded-4">
                <h3 className="h5 text-uppercase text-primary">Recursos relacionats</h3>
                <ul className="list-unstyled mt-3 mb-0">
                  <li className="mb-3">
                    <a href="/blog/verifactu-gestories" className="d-flex align-items-center text-decoration-none">
                      <span className="badge bg-primary-subtle text-primary me-3 rounded-circle" style={{ width: '32px', height: '32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">1</span>
                      <span>Guia Veri*Factu per a gestories</span>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/blog/optimitzacio-seo" className="d-flex align-items-center text-decoration-none">
                      <span className="badge bg-primary-subtle text-primary me-3 rounded-circle" style={{ width: '32px', height: '32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">2</span>
                      <span>SEO per captar nous contractes de manteniment</span>
                    </a>
                  </li>
                  <li>
                    <a href="/pressupost" className="d-flex align-items-center text-decoration-none">
                      <span className="badge bg-primary-subtle text-primary me-3 rounded-circle" style={{ width: '32px', height: '32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">3</span>
                      <span>Calcula el ROI de la transformació digital</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="cta-final">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold">Vols centralitzar operacions i facturació en una sola eina?</h2>
              <p className="lead">
                Ens encarreguem d'analitzar els teus processos, migrar dades i desenvolupar integracions clau perquè el teu
                equip treballi sense friccions.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mt-4">
                <a href="/pressupost" className="btn btn-primary btn-lg">
                  Parlem del teu projecte
                </a>
                <a href="/contacto" className="btn btn-outline-primary btn-lg">
                  Contacta amb nosaltres
                </a>
              </div>
              <p className="mt-3 text-muted small">
                Encara tens dubtes? Descobreix com treballem amb <a href="/" className="link-primary">autònoms i PIMEs</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default SolutionsPage;
