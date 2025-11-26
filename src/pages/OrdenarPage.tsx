// src/pages/OrdenarPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import menu from '../data/menu.json';
import { useComanda } from '../context/ComandaContext';

const OrdenarPage: React.FC = () => {
  const { comandaActual, agregarAComanda, finalizarComanda, cancelarComanda } = useComanda();
  const navigate = useNavigate();

  const total = comandaActual.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 Ordenar (Mesero)</h1>

      {/* Menú interactivo */}
      <h2 className="text-lg font-semibold mb-3">Menú</h2>
      <div className="grid grid-cols-1 gap-3 mb-6">
        {menu.map(item => (
          <div key={item.id} className="flex justify-between items-center p-3 border rounded">
            <div>
              <span>{item.nombre}</span> — <span className="text-gray-600">${item.precio}</span>
            </div>
            <button
              onClick={() => agregarAComanda(item)}
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
            >
              Agregar
            </button>
          </div>
        ))}
      </div>

      {/* Comanda actual */}
      <h2 className="text-lg font-semibold mb-2">Comanda actual</h2>
      {comandaActual.length === 0 ? (
        <p className="text-gray-500">No hay productos</p>
      ) : (
        <div className="space-y-2 mb-4">
          {comandaActual.map(item => (
            <div key={item.id} className="flex justify-between">
              <span>{item.nombre} ×{item.cantidad}</span>
              <span>${item.precio * item.cantidad}</span>
            </div>
          ))}
          <div className="font-bold border-t pt-2">Total: ${total}</div>
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={finalizarComanda}
          disabled={comandaActual.length === 0}
          className={`px-4 py-2 rounded ${
            comandaActual.length === 0 ? 'bg-gray-300' : 'bg-green-600 text-white'
          }`}
        >
          Finalizar comanda
        </button>
        <button
          onClick={cancelarComanda}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Cancelar
        </button>
        <button
          onClick={() => navigate('/menu')}
          className="px-4 py-2 border border-gray-500 rounded"
        >
          Volver al menú
        </button>
      </div>
    </div>
  );
};

export default OrdenarPage;