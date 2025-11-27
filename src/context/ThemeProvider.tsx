import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import type { Casa } from '../types';

const CASA_STORE_KEY = 'hogwarts_casa'
const CASAS_VALIDAS: readonly Casa[] = ['gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff']

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    
    const [casaActual, setCasaActual] = useState<Casa>(() => {
        if (typeof window === 'undefined') return 'ravenclaw';   // SSR-safe
        try {
            const stored = window.localStorage.getItem(CASA_STORE_KEY);
            if (stored && CASAS_VALIDAS.includes(stored as Casa)) {
                return stored as Casa;
            }
        } catch { /* ignore */ }
        return 'ravenclaw';
    });
    
    const cambiarCasa = (casa: Casa) => {
        setCasaActual(casa)
        localStorage.setItem(CASA_STORE_KEY, casa)
    }

    return (
        <ThemeContext.Provider value={{ casaActual, cambiarCasa }}>
            { children }
        </ThemeContext.Provider>
    )
}
