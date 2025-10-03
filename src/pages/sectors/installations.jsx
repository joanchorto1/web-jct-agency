import React from 'react';
import SectorTemplate from './SectorTemplate';

const InstallationsSector = () => (
  <SectorTemplate
    title="Enginyeries i instal·lacions"
    idealFlow={[
      'Recepció de peticions i càlcul d\'ofertes tècniques.',
      'Planificació de brigades i calendaris d\'instal·lació.',
      'Gestió de compres i logística de materials cap a cada obra.',
      'Execució amb checklists digitals i validació normativa.',
      'Posada en marxa i lliurament de documentació al client.',
    ]}
    kpis={[
      'Temps mitjà de resposta a una sol·licitud tècnica.',
      'Percentatge de parts tancats sense incidències en la primera visita.',
      'Desviació de costos de material per projecte.',
      'Utilització de les brigades i hores facturables.',
    ]}
    typicalExample={{
      title: 'Suite de camp per a instal·ladora HVAC',
      description:
        'Dissenyem un ecosistema Microsoft 365 per coordinar pressupostos, compres i equips de camp en temps real.',
      highlights: [
        'Aplicació mòbil per a tècnics amb checklists i evidències fotogràfiques.',
        'Dashboards Power BI sobre costos i temps de cada instal·lació.',
        'Automatització d\'avisos de manteniment preventiu cap al CRM.',
      ],
    }}
    budgetRange="Paquets iteratius entre 3.000 € i 8.000 € per fase de desplegament"
  />
);

export default InstallationsSector;
