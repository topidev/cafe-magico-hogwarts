// src/pages/CocinaPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useComanda } from '../context/hooks/useComanda';

const CocinaPage: React.FC = () => {
  const { comandaActual, comandasFinalizadas, limpiarComandasFinalizadas } = useComanda();
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">👨‍🍳 Cocina</h1>

      <button
        onClick={() => navigate('/menu')}
        className="mb-6 text-blue-600"
      >
        ← Volver al menú
      </button>

      {/* Comanda en curso */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Comanda en curso</h2>
        {comandaActual.length === 0 ? (
          <p className="text-gray-500">No hay comanda activa</p>
        ) : (
          <div className="border p-4 rounded bg-yellow-50">
            {comandaActual.map(item => (
              <div key={item.id}>
                {item.nombre} ×{item.cantidad}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Comandas finalizadas */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Comandas finalizadas (FIFO)</h2>
        {comandasFinalizadas.length === 0 ? (
          <p>No hay comandas finalizadas</p>
        ) : (
          <div className="space-y-4">
            {comandasFinalizadas.map((comanda, index) => (
              <div key={index} className="border p-4 rounded">
                <h3 className="font-bold">Comanda #{index + 1}</h3>
                {comanda.map(item => (
                  <div key={`${index}-${item.id}`}>
                    {item.nombre} ×{item.cantidad}
                  </div>
                ))}
              </div>
            ))}
            <button
              onClick={limpiarComandasFinalizadas}
              className="mt-4 text-red-500"
            >
              Limpiar historial
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CocinaPage;