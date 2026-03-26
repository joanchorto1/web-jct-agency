import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { services } from '../data/seoContent';

const solutionBlocks = [
  {
    title: 'Caos en la gestión diaria',
    painPoints: ['Falta de control', 'Información dispersa', 'Decisiones a ciegas'],
    message: 'Centralizamos tu empresa para que sepas qué está pasando en cada momento.',
  },
  {
    title: 'Pérdida de tiempo en tareas manuales',
    painPoints: ['Excels eternos', 'Repetir feina', 'Procesos duplicados'],
    message: 'Automatizamos tareas para que dejes de perder horas cada semana.',
  },
  {
    title: 'Falta de control económico real',
    painPoints: ['No saber si ganas o pierdes', 'Facturación desordenada', 'Costes ocultos'],
    message: 'Te damos visibilidad real de números, sin historias.',
  },
  {
    title: 'Problemas con facturación y procesos administrativos',
    painPoints: ['Errores en facturas', 'Procesos lentos', 'Cumplimiento legal con Avero y VeriFactu'],
    message: 'Sistema de facturación controlado, automatizado y adaptado a normativa.',
  },
  {
    title: 'Desorganización en clientes y proyectos',
    painPoints: ['Seguimiento inexistente', 'Información perdida', 'Mala comunicación interna'],
    message: 'Organizamos clientes, trabajos y procesos en un único sistema.',
  },
  {
    title: 'Sistemas que no hablan entre ellos',
    painPoints: ['TPV, Excel y apps separadas', 'Datos duplicados', 'Integraciones inexistentes'],
    message: 'Conectamos herramientas para que todo funcione como un sistema.',
  },
  {
    title: 'Crecimiento bloqueado por desorden interno',
    painPoints: ['No escalan', 'Dependen de personas', 'Todo es manual'],
    message: 'Preparamos tu empresa para crecer sin multiplicar el caos.',
  },
  {
    title: 'Empresas que necesitan algo más que un software',
    painPoints: ['Procesos mal definidos', 'Herramientas que no encajan', 'Cambios sin criterio'],
    message: 'No vendemos herramientas. Diseñamos cómo debe funcionar tu empresa.',
  },
];

function SolutionsPage() {
  return (
    <section className="section page-headroom">
      <Helmet>
        <title>Soluciones para ordenar gestión, procesos y control empresarial</title>
        <meta
          name="description"
          content="Soluciones para empresas con caos operativo, tareas manuales, errores de facturación, falta de control económico e integraciones rotas. Diseñamos sistemas que ordenan y hacen crecer."
        />
      </Helmet>

      <div className="site-container">
        <div className="section-title-row" data-aos="fade-up">
          <p className="eyebrow">Soluciones</p>
          <h1>Resolvemos desorden, fricción y falta de control en la operativa diaria</h1>
          <p>
            Si tu empresa trabaja con demasiados Excels, procesos manuales, datos repartidos y poca visibilidad,
            aquí tienes los bloques de solución que usamos para ordenar, automatizar y hacer escalable la gestión.
          </p>
          <p className="key-message">No añadimos más ruido. Diseñamos un sistema claro para que la empresa funcione mejor.</p>
        </div>

        <div className="solution-grid">
          {solutionBlocks.map((block) => (
            <article key={block.title} className="solution-card" data-aos="fade-up">
              <h2>{block.title}</h2>
              <ul>
                {block.painPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="key-message">{block.message}</p>
            </article>
          ))}
        </div>

        <div className="section-title-row" data-aos="fade-up" style={{ marginTop: '72px' }}>
          <p className="eyebrow">Soluciones especializadas</p>
          <h2>Servicios concretos para implantar el sistema adecuado en tu empresa</h2>
          <p>
            Una vez detectado el cuello de botella, aterrizamos la solución en servicios específicos: consultoría,
            implantación, integración y desarrollo. Aquí puedes ver las landings de cada línea de trabajo.
          </p>
        </div>

        <div className="solution-grid">
          {services.map((service) => (
            <article key={service.slug} className="solution-card" data-aos="fade-up">
              <h2>{service.shortTitle}</h2>
              <p>{service.excerpt}</p>
              <Link to={`/soluciones/${service.slug}`} className="seo-link-button">
                Ver servicio
              </Link>
            </article>
          ))}
        </div>

        <section className="section section--cta" data-aos="fade-up">
          <div className="cta-box">
            <p className="eyebrow">Diferenciación</p>
            <h2>La diferencia no está en el software. Está en cómo debe funcionar tu empresa.</h2>
            <p>
              Hay empresas que no necesitan otra herramienta, sino una lógica de trabajo mejor: qué se registra, quién
              valida, cómo se factura, cómo se controla el margen y cómo se evita depender de una sola persona para
              que todo avance.
            </p>
            <p>
              Por eso combinamos consultoría, diseño de procesos, automatización, ERP, CRM, integración y facturación
              con criterio de negocio. El objetivo no es digitalizar por digitalizar. El objetivo es que tu empresa
              gane control, velocidad y capacidad de crecer sin multiplicar el caos.
            </p>
            <div className="seo-detail-actions">
              <Link to="/contacto#reserva" className="btn-primary">
                Reservar diagnóstico
              </Link>
              <Link to="/consultoria" className="seo-link-button">
                Ver consultoría
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default SolutionsPage;
