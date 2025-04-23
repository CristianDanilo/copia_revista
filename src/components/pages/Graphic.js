// src/components/Graphic.js
import React from 'react';
import PiePreguntas from '../PiePreguntas';
import DonutReemplazoTrabajadores from '../DonutReemplazoTrabajadores';
import PieChartImparcialidad from '../PieChartImparcialidad';
import BarSesgos from '../BarSesgos';

const configuraciones = [
  {
    pregunta: 'vida',
    titulo: '¿Debería una IA decidir quién vive o muere?',
    analisis:
      'La mayoría opina que una IA no debería tener poder sobre decisiones de vida o muerte, reflejando una preocupación ética fuerte.',
  },
  {
    pregunta: 'vigilancia',
    titulo: '¿Estás de acuerdo con el uso de IA para vigilancia masiva?',
    analisis:
      'Hay una ligera tendencia hacia el rechazo de la vigilancia masiva, lo que indica inquietudes sobre la privacidad y la libertad individual.',
  },
  {
    pregunta: 'imparcialidad',
    titulo: '¿Crees que la IA puede ser imparcial en todas sus decisiones?',
    componente: PieChartImparcialidad,
    analisis:
      'Los resultados sugieren desconfianza en la imparcialidad total de la IA, lo que resalta la necesidad de supervisión humana.',
  },
  {
    pregunta: 'reemplazo',
    titulo: '¿Es justo reemplazar empleos humanos con IA?',
    componente: DonutReemplazoTrabajadores,
    analisis:
      'Una mayoría cree que no es justo reemplazar empleos humanos, mostrando preocupación por el desempleo tecnológico.',
  },
  {
    pregunta: 'sesgos',
    titulo: '¿Qué tipos de sesgos crees que puede tener una IA?',
    componente: BarSesgos,
    analisis:
      'Los encuestados identifican principalmente sesgos raciales y de género, destacando los riesgos sociales del uso de IA no controlada.',
  },
];

const Graphic = () => {
  return (
    <div className='chart-container'>
      {configuraciones.map(({ pregunta, titulo, componente: Componente, analisis }, i) => (
        <div key={i} style={{ marginBottom: '60px' }}>
          {Componente ? <Componente /> : <PiePreguntas pregunta={pregunta} titulo={titulo} />}
          <p style={{ marginTop: '10px', textAlign: 'center', fontStyle: 'italic' }}>{analisis}</p>
        </div>
      ))}
    </div>
  );
};

export default Graphic;