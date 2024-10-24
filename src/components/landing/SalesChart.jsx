import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './SalesChart.css'; // Puedes crear este archivo para estilos específicos, si es necesario.

const SalesChart = () => {
  const [data, setData] = useState([
    { name: '00:00', sales: 2400 },
    { name: '01:00', sales: 1398 },
    { name: '02:00', sales: 9800 },
    { name: '03:00', sales: 3908 },
    { name: '04:00', sales: 4800 },
    { name: '05:00', sales: 3800 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [...prevData];
        newData.shift(); // Elimina el primer valor
        newData.push({
          name: new Date().toLocaleTimeString(),
          sales: Math.floor(Math.random() * 10000), // Genera datos aleatorios
        });
        return newData;
      });
    }, 2000); // Actualiza cada 2 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="sales-chart">
      <h2>Live Sales Data</h2>
      <p>
        Stay updated with real-time sales data. The chart below is continuously updating with the latest sales performance data.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
