import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../layouts/layout';

const SeoArticle = () => (
  <Layout>
    <Helmet>
      <title>Optimització SEO per a PIMEs: 5 consells clau | JCT Agency</title>
      <meta
        name="description"
        content="Guia pràctica de SEO per a petites empreses: millora el posicionament orgànic a Google amb passos simples."
      />
    </Helmet>
    <article className="container py-5">
      <h1 className="mb-4">Optimització SEO per a PIMEs: 5 consells clau</h1>
      <p>
        Posicionar la teva empresa als cercadors és essencial per atraure nous clients.
        A continuació, et presentem cinc consells pràctics per començar a treballar el teu SEO:
      </p>
      <h2 className="mt-4">1. Investigació de paraules clau</h2>
      <p>
        Identifica els termes que els teus clients potencials busquen. Utilitza eines com
        Google Keyword Planner per descobrir oportunitats amb poc volum de competència.
      </p>
      <h2 className="mt-4">2. Contingut de qualitat</h2>
      <p>
        Redacta articles que resolguin dubtes reals i utilitza les paraules clau de manera natural.
        El contingut valuós augmenta el temps de permanència i redueix la taxa de rebot.
      </p>
      <h2 className="mt-4">3. Optimització tècnica</h2>
      <p>
        Assegura't que la teva web carregui ràpidament i sigui responsive. Una bona experiència d'usuari
        és clau perquè Google valori positivament el teu lloc.
      </p>
      <h2 className="mt-4">4. Enllaços interns i externs</h2>
      <p>
        Crea una xarxa d'enllaços entre les teves pàgines i busca col·laboracions per obtenir backlinks
        de qualitat. Això incrementa l'autoritat del teu domini.
      </p>
      <h2 className="mt-4">5. Seguiment i anàlisi</h2>
      <p>
        Monitoritza els resultats amb Google Analytics i Search Console. Ajusta la teva estratègia segons les dades.
      </p>
      <p className="mt-4">
        Implementant aquests passos, la teva PIME millorarà la visibilitat en línia i atraurà clients potencials.
      </p>
    </article>
  </Layout>
);

export default SeoArticle;
