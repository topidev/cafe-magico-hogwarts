// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import OrdenarPage from './pages/OrdenarPage';
import CocinaPage from './pages/CocinaPage';
import SelectorCasa from './components/SelectorCasa'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/ordenar" element={<OrdenarPage />} />
          <Route path="/cocina" element={<CocinaPage />} />
        </Routes>
      </BrowserRouter>
      <SelectorCasa />
    </>
  );
};

export default App;