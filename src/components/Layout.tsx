// src/components/Layout.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { casaActual } = useTheme();

  const getBgClass = () => {
    switch (casaActual) {
      case 'gryffindor': return 'bg-gryffindor-50';
      case 'slytherin': return 'bg-slytherin-50';
      case 'ravenclaw': return 'bg-ravenclaw-50';
      case 'hufflepuff': return 'bg-hufflepuff-50';
      default: return 'bg-gryffindor-50';
    }
  };

  return (
    <div className={`min-h-screen w-full ${getBgClass()} p-4 md:p-6`}>
      {children}
    </div>
  );
};

export default Layout;