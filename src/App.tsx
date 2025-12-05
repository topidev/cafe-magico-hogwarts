// src/App.tsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import OrdenarPage from './pages/OrdenarPage';
import CocinaPage from './pages/CocinaPage';
import SelectorCasa from './components/SelectorCasa'
import "./pages/css/loader.css"

const MenuPageLazy = lazy(() => import("./pages/MenuPage"))

const MenuPageSuspense = () => (
  <Suspense fallback = {
    <div className='w-96 flex justify-center items-center'>
      <div className='loader'> </div>
    </div>
  }>
    <MenuPageLazy/>
  </Suspense>
)

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuPage />} />
          {/* <Route path="/menu" element={<MenuPage />} /> */}
          <Route path="/menu" element={MenuPageSuspense()} />
          <Route path="/ordenar" element={<OrdenarPage />} />
          <Route path="/cocina" element={<CocinaPage />} />
        </Routes>
      </BrowserRouter>
      <SelectorCasa />
    </>
  );
};

export default App;