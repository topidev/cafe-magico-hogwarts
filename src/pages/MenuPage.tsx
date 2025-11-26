// src/pages/MenuPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import menu from '../data/menu.json';
import { useTheme } from '../context/ThemeContext';
import Layout from '../components/Layout';

const MenuPage: React.FC = () => {
  const navigate = useNavigate();
  const { casaActual } = useTheme();

  // Agrupar productos por categoría
  const categorias = Array.from(
    new Map(menu.map(item => [item.categoria, null])).keys()
  );
  const productosPorCategoria = categorias.reduce((acc, cat) => {
    acc[cat] = menu.filter(item => item.categoria === cat);
    return acc;
  }, {} as Record<string, typeof menu>);

  // Colores por casa
  const getPrimaryColor = () => {
    switch (casaActual) {
      case 'gryffindor': return 'gryffindor';
      case 'slytherin': return 'slytherin';
      case 'ravenclaw': return 'ravenclaw';
      case 'hufflepuff': return 'hufflepuff';
      default: return 'ravenclaw';
    }
  };

  const getSecondaryColor = () => {
    switch (casaActual) {
      case 'gryffindor': return 'scarlet';
      case 'slytherin': return 'silver';
      case 'ravenclaw': return 'bronze';
      case 'hufflepuff': return 'black';
      default: return 'bronze';
    }
  };

  const primary = getPrimaryColor();
  const secondary = getSecondaryColor();

  return (
    <Layout>
      {/* Encabezado mágico */}
      <div className="text-center mb-8">
        <h1 className={`text-4xl md:text-5xl font-hogwarts text-${primary}-500 mb-2 tracking-wide`}>
          {casaActual === 'gryffindor' && '🦁'}
          {casaActual === 'slytherin' && '🐍'}
          {casaActual === 'ravenclaw' && '🦅'} 
          {casaActual === 'hufflepuff' && '🦡'}
          {' '}Café Mágico
        </h1>
        <p className={`text-${primary}-600 font-magic text-lg`}>
          "Donde los dulces saltan y el butterbeer fluye"
        </p>
      </div>

      {/* Menú por categorías */}
      <div className="max-w-3xl mx-auto space-y-8">
        {Object.entries(productosPorCategoria).map(([categoria, productos]) => (
          <div
            key={categoria}
            className={`bg-white bg-opacity-80 backdrop-blur-sm rounded-xl border-2 border-${secondary}-500 shadow-lg p-5`}
          >
            <h2 className={`text-2xl font-hogwarts text-${secondary}-600 mb-4 border-b-2 border-${primary}-200 pb-2`}>
              {categoria}
            </h2>
            <div className="space-y-3">
              {productos.map(item => (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row justify-between items-start md:items-center p-3 bg-${primary}-50 rounded-lg border border-${primary}-200 hover:bg-${primary}-100 transition`}
                >
                  <div>
                    <h3 className={`font-semibold text-${primary}-800`}>{item.nombre}</h3>
                    <p className={`text-sm text-${secondary}-600 italic`}>{item.descripcion}</p>
                  </div>
                  <span className={`mt-2 md:mt-0 px-3 py-1 bg-${secondary}-500 text-white font-bold rounded-full`}>
                    {item.precio.toFixed(2)} G
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Botones fijos en la parte inferior */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => navigate('/ordenar')}
          className={`px-6 py-3 bg-${primary}-500 hover:bg-${primary}-600 text-white font-hogwarts rounded-full shadow-lg border-2 border-${secondary}-500 transition transform hover:scale-105`}
        >
          🧑‍🍳 Ordenar (Mesero)
        </button>
        <button
          onClick={() => navigate('/cocina')}
          className={`px-6 py-3 bg-${secondary}-500 hover:bg-${secondary}-600 text-white font-hogwarts rounded-full shadow-lg border-2 border-${primary}-500 transition transform hover:scale-105`}
        >
          👨‍🍳 Cocina
        </button>
      </div>
    </Layout>
  );
};

export default MenuPage;
