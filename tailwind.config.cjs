// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    // ===== COLORES DE TEXTO PRIMARIOS (títulos, botones) =====
    'text-scarlet-500', 'text-scarlet-600', 'text-scarlet-700',
    'text-slytherin-500', 'text-slytherin-600', 'text-slytherin-700',
    'text-ravenclaw-500', 'text-ravenclaw-600', 'text-ravenclaw-700',
    'text-hufflepuff-500', 'text-hufflepuff-600', 'text-hufflepuff-700',
    'text-gryffindor-800', 'text-slytherin-800', 'text-ravenclaw-800', 'text-hufflepuff-800', 
    'text-bronze-600', 'text-silver-600', 'text-black-600',

    // ===== FONDOS PRIMARIOS (botones) =====
    'bg-scarlet-500', 'bg-scarlet-600',
    'bg-slytherin-500', 'bg-slytherin-600',
    'bg-ravenclaw-500', 'bg-ravenclaw-600',
    'bg-hufflepuff-500', 'bg-hufflepuff-600',
    'bg-silver-500', 'bg-silver-600', 'bg-bronze-600',
    'bg-black-500',
    
    // ===== FONDOS SECUNDARIOS (tarjetas, descripciones) =====
    'bg-gryffindor-50', 'bg-gryffindor-100', 'bg-gryffindor-200',
    'bg-slytherin-50', 'bg-slytherin-100', 'bg-slytherin-200', 'bg-gryffindor-600',
    'bg-ravenclaw-50', 'bg-ravenclaw-100', 'bg-ravenclaw-200',
    'bg-hufflepuff-50', 'bg-hufflepuff-100', 'bg-hufflepuff-200',

    // ===== COLORES SECUNDARIOS (dorado, plata, bronce, negro) =====
    'text-bronze-100',
    'text-gryffindor-500','text-gryffindor-600', 'text-silver-400', 'text-bronze-500', 'text-silver-100','text-black-500', 'text-bronze-800', 'text-silver-50', 'text-silver-500', 'text-silver-700', 'text-scarlet-100', 
    'bg-gryffindor-500', 'bg-silver-400', 'bg-bronze-500', 'bg-black-500',
    'border-gryffindor-200', 'border-silver-200', 'border-bronze-200', 'border-black-200',

    // ===== BORDES =====
    'border-bronze-100',
    'border-scarlet-500', 'border-scarlet-400', 'border-slytherin-500', 'border-ravenclaw-500', 'border-hufflepuff-500', 'border-bronze-500', 'border-black-500', 'border-silver-500',
    'border-gryffindor-200', 'border-slytherin-00', 'border-ravenclaw-200', 'border-hufflepuff-200',
    'ring-scarlet-500', 'ring-slytherin-500', 'ring-ravenclaw-500', 'ring-hufflepuff-500',

    // ===== FONDOS DE ICONOS / BADGES =====
    'bg-gryffindor-50', 'bg-slytherin-50', 'bg-ravenclaw-50', 'bg-hufflepuff-50',
  ],
  theme: {
    extend: {
      colors: {
        // Gryffindor: Rojo y dorado
        gryffindor: {
          50: '#fdf6f0',
          100: '#c74040',
          200: '#f0d4ab',
          300: '#e6b97a',
          400: '#d99c4f',
          500: '#bb0000',
          600: '#990000',
          700: '#7a0000',
          800: '#5c3517',
          900: '#3b210f',
        },
        scarlet: {
          100: '#f9e8d5',
          500: '#c57a30',
          600: '#a65e1f',
          700: '#7f471a',
        },
        // Slytherin: Verde y plata
        slytherin: {
          50: '#f0f9f4',
          100: '#d1e8dd',
          200: '#a8d1ba',
          300: '#78b496',
          400: '#4d9473',
          500: '#2a7454',
          600: '#1f5a40',
          700: '#174430',
          800: '#113323',
          900: '#0b2217',
        },
        silver: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#868e96',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        // Ravenclaw: Azul y bronce
        ravenclaw: {
          50: '#f0f6fc',
          100: '#d1e3f3',
          200: '#3060db',
          300: '#78b0e0',
          400: '#4a92d4',
          500: '#072778',
          600: '#213264',
          700: '#174473',
          800: '#113354',
          900: '#0b2237',
        },
        bronze: {
          100: '#c99057',
          500: '#cd7f32',
          600: '#b5651d',
        },
        // Hufflepuff: Amarillo y negro
        hufflepuff: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        black: {
          500: '#000000',
          600: '#111827',
        }
      },
      fontFamily: {
        hogwarts: ['"Cinzel"', 'serif'],
        magic: ['"Homemade Apple"', 'cursive'],
      }
    },
  },
  plugins: [],
}