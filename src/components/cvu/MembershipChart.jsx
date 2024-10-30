import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './MembershipChart.css'; // Importa los estilos

const MembershipChart = () => {
  // Colores personalizados para cada estado de membresía
  const COLORS = ['#28a745', '#dc3545', '#ffc107']; // Verde, rojo y amarillo

  // Datos iniciales
  const initialData = [
    { name: 'Vigentes', value: 400 },
    { name: 'Vencidos', value: 300 },
    { name: 'Pendientes', value: 300 },
  ];

  const [data, setData] = useState(initialData);

  // Función para actualizar los datos dinámicamente
  useEffect(() => {
    const interval = setInterval(() => {
      const newData = [
        { name: 'Vigentes', value: Math.floor(Math.random() * 500) + 100 },
        { name: 'Vencidos', value: Math.floor(Math.random() * 400) + 100 },
        { name: 'Pendientes', value: Math.floor(Math.random() * 300) + 50 },
      ];
      setData(newData);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="membership-container">
      <div className="membership-content">
      
        {/* Columna del gráfico */}
        <div className="chart-column">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>

          {/* Columna de texto */}
          <div className="text-column">
          <h2>Estado de Membresías</h2>
          <p>
            Sistema para gestión de membresías que te permite llevar un control en tiempo real sobre el estado de tus usuarios. 
            Este gráfico muestra cuántas membresías están vigentes, vencidas o pendientes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MembershipChart;
