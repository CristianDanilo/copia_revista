import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { dataReemplazo } from '../data/encuestaIA';
import '../components/charts.css';

const COLORS = ['#20bf6b', '#fa8231'];

const DonutReemplazoTrabajadores = () => (
  <div className='chart-container'>
    <h3>¿Es justo reemplazar empleos humanos con IA?</h3>
    <PieChart width={400} height={300}>
      <Pie
        data={dataReemplazo}
        cx='50%'
        cy='50%'
        innerRadius={60}
        outerRadius={100}
        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
        fill='#8884d8'
        dataKey='value'
      >
        {dataReemplazo.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </div>
);

export default DonutReemplazoTrabajadores;
