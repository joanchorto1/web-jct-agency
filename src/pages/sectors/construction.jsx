import React from 'react';
import SectorTemplate from './SectorTemplate';

const ConstructionSector = () => (
  <SectorTemplate
    title="Construcció i obra civil"
    idealFlow={[
      'Captació i qualificació de licitacions o peticions d\'obra.',
      'Planificació de recursos (equips, subcontractes i materials) per fase.',
      'Execució a obra amb control d\'hores, incidències i certificacions.',
      'Validació de qualitat i seguretat, amb informes digitals al client.',
      'Tancament econòmic amb conciliació de costos versus pressupost inicial.',
    ]}
    kpis={[
      'Percentatge d\'ofertes guanyades respecte licitacions presentades.',
      'Variació del marge per projecte i desviacions detectades en temps real.',
      'Compliment de terminis per fase vs. planificació inicial.',
      'Temps de resolució d\'incidències registrades al peu d\'obra.',
    ]}
    typicalExample={{
      title: 'Implantació de quadre de comandament per a constructora comarcal',
      description:
        'Conversem amb la direcció d\'obra i administració per unificar planificació, seguiment de costos i reporting de seguretat.',
      highlights: [
        'Automatització de parts d\'obra i certificacions en Power Apps connectades amb SharePoint.',
        'Enviament d\'alertes de desviacions de marge via Power BI i Teams.',
        'Integració amb ERP existent per sincronitzar compres i facturació sense duplicitats.',
      ],
    }}
    budgetRange="Full de ruta modular: 3.000 € – 8.000 € per fase segons abast"
  />
);

export default ConstructionSector;
