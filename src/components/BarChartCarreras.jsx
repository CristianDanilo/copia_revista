import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import * as data from '../data/encuestaIA';

const colores = ['#2b50ff', '#eb3b5a', '#f7b731'];

const PiePreguntas = ({ pregunta, titulo }) => {
  const dataset = data[`data${pregunta.charAt(0).toUpperCase() + pregunta.slice(1)}`];

  return (
    <div className='chart-container'>
      <h3>{titulo}</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={dataset}
          cx='50%'
          cy='50%'
          outerRadius={100}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
          dataKey='value'
        >
          {dataset.map((entry, index) => (
            <Cell key={index} fill={colores[index % colores.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PiePreguntas;
