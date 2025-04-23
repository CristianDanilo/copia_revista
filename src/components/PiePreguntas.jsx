// src/components/PiePreguntas.jsx
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import * as data from '../data/encuestaIA';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PiePreguntas = ({ pregunta, titulo }) => {
  const dataset = data[`data${pregunta.charAt(0).toUpperCase() + pregunta.slice(1)}`];

  return (
    <div style={{ marginBottom: '50px', textAlign: 'center' }}>
      <h3>{titulo}</h3>
      <PieChart width={400} height={300}>
        <Pie data={dataset} dataKey='value' nameKey='name' cx='50%' cy='50%' outerRadius={100} fill='#8884d8' label>
          {dataset.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PiePreguntas;
