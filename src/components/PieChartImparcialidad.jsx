import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { dataImparcialidad } from '../data/encuestaIA';
import '../components/charts.css';

const COLORS = ['#4b7bec', '#eb3b5a'];

const PieChartImparcialidad = () => (
  <div className='chart-container'>
    <h3>¿Crees que la IA puede ser imparcial en todas sus decisiones?</h3>
    <PieChart width={400} height={300}>
      <Pie
        data={dataImparcialidad}
        cx='50%'
        cy='50%'
        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
        outerRadius={100}
        fill='#8884d8'
        dataKey='value'
      >
        {dataImparcialidad.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </div>
);

export default PieChartImparcialidad;
