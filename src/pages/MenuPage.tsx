// src/pages/MenuPage.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import menu from '../data/menu.json';
import { useTheme } from '../context/hooks/useTheme';
import { useComanda } from '../context/hooks/useComanda';
import Layout from '../components/Layout';

const MenuPage: React.FC = () => {
  const navigate = useNavigate();
  const { casaActual } = useTheme();
  const { comandaActual, agregarAComanda, finalizarComanda, cancelarComanda } = useComanda()

  const productsByCategory: Record<string, typeof menu> = {}

  menu.forEach(item => {
    if(!productsByCategory[item.categoria])  productsByCategory[item.categoria] = []
    productsByCategory[item.categoria].push(item)
  })
  
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
  
  
  const total = comandaActual.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  

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
      <div className={` max-w-3xl mx-auto space-y-8 ${comandaActual.length > 0 ? 'pb-[200px] md:pb-[300px]' : ''}`}>
        {Object.entries(productsByCategory).map(([categoria, productos]) => (
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
                    <h3 className={`font-semibold text-${secondary}-600`}>{item.nombre}</h3>
                    <p className={`text-sm text-${primary}-600 italic`}>{item.descripcion}</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <span className={`px-2 py-1 bg-${primary}-500 text-${secondary}-500 font-bold rounded mr-2`}>
                      {item.precio.toFixed(2)} G
                    </span>
                    {/* ✨ Botón AGREGAR */}
                    <button
                      onClick={() => agregarAComanda(item)}
                      className={`px-3 py-1 bg-${primary}-500 hover:bg-${primary}-600 text-white font-hogwarts rounded text-sm transition transform hover:scale-105`}
                    >
                      + Agregar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 🪄 Drawer de comanda (solo si hay productos) */}
      {comandaActual.length > 0 && (
        <div
          className={`
            fixed bottom-0 left-0 right-0 bg-white border-t-2 
            border-${primary}-500 shadow-2xl
            transform transition-transform duration-300 ease-in-out
            translate-y-0
            z-50
          `}
        >
          <div className="max-w-3xl mx-auto p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className={`font-hogwarts text-lg text-${primary}-600`}>
                🧾 Comanda en curso
              </h3>
              <button
                onClick={cancelarComanda}
                className={`text-white text-2xl px-3 py-2 transition-all width-[24px] heigth-[24px] hover:bg-red-900`}
                title="Cancelar comanda"
              >
                🗑
              </button>
            </div>

            <div className="space-y-2 mb-3 max-h-36 md:max-h-24 overflow-y-auto">
              {comandaActual.map(item => (
                <div key={item.id} className="flex justify-between text-gray-800 text-sm">
                  <span>{item.nombre} ×{item.cantidad}</span>
                  <span>{(item.precio * item.cantidad).toFixed(2)} G</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between text-gray-700 items-center font-bold border-t pt-2">
              <span>Total:</span>
              <span>{total.toFixed(2)} G</span>
            </div>

            <div className="mt-3 flex gap-2">
              <button
                onClick={finalizarComanda}
                className={`flex-1 py-2 bg-${primary}-500 hover:bg-${primary}-600 text-white font-hogwarts rounded shadow transition`}
              >
                🧑‍🍳 Enviar a cocina
              </button>
            </div>
          </div>
        </div>
      )}

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
