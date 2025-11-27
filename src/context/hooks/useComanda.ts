import { useContext } from "react";
import { ComandaContext } from "../ComandaContext";

export const useComanda = () => {
  const context = useContext(ComandaContext);
  if (!context) {
    throw new Error('useComanda debe usarse dentro de ComandaProvider');
  }
  return context;
};