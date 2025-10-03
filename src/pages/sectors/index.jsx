import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layouts/layout';

const sectors = [
  {
    title: 'Construcció i obra civil',
    description: 'Organitzem la planificació, control de costos i seguiment d\'obra amb solucions SaaS a mida.',
    to: '/sectors/construction',
  },
  {
    title: 'Enginyeries i instal·lacions',
    description: 'Connectem oficina tècnica i equips de camp per fer el salt a processos digitals i repetibles.',
    to: '/sectors/installations',
  },
  {
    title: 'Serveis de manteniment',
    description: 'Centralitzem avisos, rutes i contractes perquè puguis escalar el teu servei amb control total.',
    to: '/sectors/maintenance',
  },
];

const SectorsIndex = () => (
  <Layout>
    <Helmet>
      <title>Sectors | JCT Agency</title>
      <meta
        name="description"
        content="Selecciona el sector amb què treballem a JCT Agency i descobreix com digitalitzem processos amb pressupostos per fases de 3.000 € a 8.000 €."
      />
    </Helmet>

    <div className="bg-white py-5">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="badge bg-secondary-subtle text-secondary px-3 py-2 mb-3">Sectors</span>
          <h1 className="display-6 fw-bold">Solucions digitals per a equips operatius</h1>
          <p className="lead text-muted">
            Tria el teu sector per veure com abordem el flux ideal, les mètriques clau i els paquets iteratius de 3.000 € – 8.000 € per fase.
          </p>
        </div>

        <div className="row g-4">
          {sectors.map((sector) => (
            <div className="col-12 col-md-4" key={sector.to} data-aos="fade-up">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column p-4">
                  <h2 className="h4">{sector.title}</h2>
                  <p className="text-muted flex-grow-1">{sector.description}</p>
                  <Link to={sector.to} className="btn btn-primary mt-3 align-self-start">
                    Descobreix el sector
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default SectorsIndex;
