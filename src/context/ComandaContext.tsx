// src/contexts/ComandaContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ItemComanda } from '../types';

type ComandaContextType = {
  comandaActual: ItemComanda[];
  comandasFinalizadas: ItemComanda[][];
  agregarAComanda: (item: ItemComanda) => void;
  finalizarComanda: () => void;
  cancelarComanda: () => void;
  limpiarComandasFinalizadas: () => void; // opcional
};

const ComandaContext = createContext<ComandaContextType | undefined>(undefined);

const STORAGE_KEYS = {
  actual: 'comanda_actual',
  finalizadas: 'comandas_finalizadas',
};

// Helper: guardar en localStorage de forma segura
const saveToStorage = (key: string, data: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('No se pudo guardar en localStorage', e);
  }
};

// Helper: cargar desde localStorage
const loadFromStorage = (key: string): any => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.error('Error al cargar de localStorage', e);
    return null;
  }
};

export const ComandaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Estados
  const [comandaActual, setComandaActual] = useState<ItemComanda[]>([]);
  const [comandasFinalizadas, setComandasFinalizadas] = useState<ItemComanda[][]>([]);

  // Cargar desde localStorage al iniciar
  useEffect(() => {
    const actual = loadFromStorage(STORAGE_KEYS.actual) || [];
    const finalizadas = loadFromStorage(STORAGE_KEYS.finalizadas) || [];
    setComandaActual(actual);
    setComandasFinalizadas(finalizadas);
  }, []); // ← solo al montar

  // ✨ Ahora, las funciones actualizan Y guardan al mismo tiempo
  const agregarAComanda = (item: ItemComanda) => {
    setComandaActual(prev => {
      const existente = prev.find(i => i.id === item.id);
      let nuevaComanda;
      if (existente) {
        nuevaComanda = prev.map(i =>
          i.id === item.id ? { ...i, cantidad: i.cantidad + 1 } : i
        );
      } else {
        nuevaComanda = [...prev, { ...item, cantidad: 1 }];
      }
      saveToStorage(STORAGE_KEYS.actual, nuevaComanda); // ✅ guardamos aquí
      return nuevaComanda;
    });
  };

  const finalizarComanda = () => {
    if (comandaActual.length === 0) return;
    setComandasFinalizadas(prev => [...prev, comandaActual]);
    setComandaActual([]);
  };

  const cancelarComanda = () => {
    setComandaActual([]);
  };

  const limpiarComandasFinalizadas = () => {
    setComandasFinalizadas([]);
  };

  return (
    <ComandaContext.Provider
      value={{
        comandaActual,
        comandasFinalizadas,
        agregarAComanda,
        finalizarComanda,
        cancelarComanda,
        limpiarComandasFinalizadas,
      }}
    >
      {children}
    </ComandaContext.Provider>
  );
};

export const useComanda = () => {
  const context = useContext(ComandaContext);
  if (!context) {
    throw new Error('useComanda debe usarse dentro de ComandaProvider');
  }
  return context;
};