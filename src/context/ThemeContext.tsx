import React, { createContext, useContext, useEffect, useState } from 'react'
import type { ThemeContextType, Casa } from '../types.ts'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
const CASA_STORE_KEY = 'hogwarts_casa'

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [casaActual, setCasaActual] = useState<Casa>('ravenclaw')

    useEffect(() => {
        const casaGuardada = localStorage.getItem(CASA_STORE_KEY) as Casa | null
        if (casaGuardada && ['gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff'].includes(casaGuardada)) {
            setCasaActual(casaGuardada)
        }
    }, [])

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

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme debe usarse dentro de ThemeProvider')
    }
    return context;
}