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
  },
  {
    pregunta: 'vigilancia',
    titulo: '¿Estás de acuerdo con el uso de IA para vigilancia masiva?',
  },
  {
    pregunta: 'imparcialidad',
    titulo: '¿Crees que la IA puede ser imparcial en todas sus decisiones?',
    componente: PieChartImparcialidad,
  },
  {
    pregunta: 'reemplazo',
    titulo: '¿Es justo reemplazar empleos humanos con IA?',
    componente: DonutReemplazoTrabajadores,
  },
  {
    pregunta: 'sesgos',
    titulo: '¿Qué tipos de sesgos crees que puede tener una IA?',
    componente: BarSesgos,
  },
];

const Graphic = () => {
  return (
    <div className='chart-container'>
      {configuraciones.map(({ pregunta, titulo, componente: Componente }, i) =>
        Componente ? <Componente key={i} /> : <PiePreguntas key={i} pregunta={pregunta} titulo={titulo} />
      )}
    </div>
  );
};

export default Graphic;
