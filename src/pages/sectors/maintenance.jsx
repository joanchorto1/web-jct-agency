import React from 'react';
import SectorTemplate from './SectorTemplate';

const MaintenanceSector = () => (
  <SectorTemplate
    title="Serveis de manteniment"
    idealFlow={[
      'Recepció d\'avisos i classificació segons criticitat.',
      'Assignació d\'equips i planificació de rutes diàries.',
      'Execució del servei amb recollida d\'evidències i consumibles.',
      'Informes automàtics al client amb recomanacions preventives.',
      'Anàlisi periòdic de rendiment i propostes de millora.',
    ]}
    kpis={[
      'Temps de resposta i resolució per nivell de servei (SLA).',
      'Percentatge de primer cop resolt (First Time Fix).',
      'Ingresos recurrents per contracte i taxa de renovació.',
      'Cost operatiu per intervenció i marge per tècnic.',
    ]}
    typicalExample={{
      title: 'Centralització de manteniment multiservei',
      description:
        'Acompanyem una empresa de facility management a connectar incidències, planificació i facturació.',
      highlights: [
        'Portal de clients amb registre d\'avisos i seguiment d\'estat.',
        'Assignació automàtica de tècnics en funció de la zona i competències.',
        'Dashboards de rendibilitat per contracte i alarms sobre SLA en risc.',
      ],
    }}
    budgetRange="Iteracions d\'entre 3.000 € i 8.000 € segons processos prioritzats"
  />
);

export default MaintenanceSector;
