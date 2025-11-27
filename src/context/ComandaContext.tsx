// src/contexts/ComandaContext.tsx
import { createContext } from 'react';
import type { ItemComanda } from '../types';

type ComandaContextType = {
  comandaActual: ItemComanda[];
  comandasFinalizadas: ItemComanda[][];
  agregarAComanda: (item: ItemComanda) => void;
  finalizarComanda: () => void;
  cancelarComanda: () => void;
  limpiarComandasFinalizadas: () => void;
};

export const ComandaContext = createContext<ComandaContextType | undefined>(undefined);
