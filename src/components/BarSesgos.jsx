// src/components/BarSesgos.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { dataSesgos } from '../data/encuestaIA';

const BarSesgos = () => {
  return (
    <div style={{ marginBottom: '50px', textAlign: 'center' }}>
      <h3>¿Qué tipos de sesgos crees que puede tener una IA?</h3>
      <BarChart width={600} height={300} data={dataSesgos}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='value' fill='#8884d8' />
      </BarChart>
    </div>
  );
};

export default BarSesgos;
