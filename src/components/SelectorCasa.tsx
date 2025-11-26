import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const SelectorCasa: React.FC = () => {
    const { casaActual, cambiarCasa } = useTheme()
    const [open, setOpen] = useState(false)

    const casas = [
        { id: 'gryffindor', nombre: 'Gryffindor', color: 'bg-scarlet-500' },
        { id: 'slytherin', nombre: 'Slytherin', color: 'bg-slytherin-500' },
        { id: 'ravenclaw', nombre: 'Ravenclaw', color: 'bg-ravenclaw-500' },
        { id: 'hufflepuff', nombre: 'Hufflepuff', color: 'bg-hufflepuff-500' },
    ]

    return (
        <div className='fixed top-4 right-4 z-50'>
            <button
                onClick={()=> setOpen(!open)}
                className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
                title="Cambiar casa"
            >
                🏰
            </button>
            {open && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-3 w-48">
                    <h3 className="font-hogwarts text-center mb-2">Selecciona tu casa</h3>
                    <div className="space-y-2">
                        {casas.map(casa => (
                        <button
                            key={casa.id}
                            onClick={() => {
                            cambiarCasa(casa.id as any);
                            setOpen(false);
                            }}
                            className={`w-full py-2 rounded flex items-center px-2 ${
                            casaActual === casa.id
                                ? 'ring-2 ring-offset-2 ' + casa.color.replace('bg-', 'ring-')
                                : 'hover:bg-gray-600'
                            }`}
                        >
                            <span className={`w-4 h-4 rounded-full ${casa.color} mr-2`}></span>
                            {casa.nombre}
                        </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
export default SelectorCasa;