// src/main.tsx
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ComandaProvider } from './context/ComandaContext';
import { ThemeProvider } from './context/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ComandaProvider>
        <App />
      </ComandaProvider>
    </ThemeProvider>
  </React.StrictMode>
);