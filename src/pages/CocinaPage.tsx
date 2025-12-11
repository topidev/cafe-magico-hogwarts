// src/pages/CocinaPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useComanda } from '../context/hooks/useComanda';
import { useTheme } from '../context/hooks/useTheme';
import { ChefHat, Eraser } from 'lucide-react';

const CocinaPage: React.FC = () => {
  const { comandaActual, comandasFinalizadas, finalizarComanda, limpiarComandasFinalizadas } = useComanda();
  const { casaActual } = useTheme()
  const navigate = useNavigate();

    // Colores por casa
  const getPrimaryColor = () => {
    switch (casaActual) {
      case 'gryffindor': return 'gryffindor';
      case 'slytherin': return 'slytherin';
      case 'ravenclaw': return 'ravenclaw';
      case 'hufflepuff': return 'hufflepuff';
      default: return 'ravenclaw';
    }
  };

  const getSecondaryColor = () => {
    switch (casaActual) {
      case 'gryffindor': return 'scarlet';
      case 'slytherin': return 'silver';
      case 'ravenclaw': return 'bronze';
      case 'hufflepuff': return 'black';
      default: return 'bronze';
    }
  };

  const primary = getPrimaryColor()
  const secondary = getSecondaryColor()

  return (
    <div className="cocina-layout min-h-screen text-white p-5 md:p-6">
		<div className={`overlay bg-${primary}-500`}></div>
		{/* Botón para volver al menú */}
		<div className="floating-buttons fixed z-10 top-20 right-6 flex lg:right-[20px] xl:right-[65px] 2xl:right-[200px]">
			<button
				onClick={() => navigate('/menu')}
				title='Ver Menú'
				className={`flex justify-center items-center w-12 h-12 bg-${secondary}-500 hover:bg-${secondary}-600 text-white font-hogwarts rounded-full shadow-lg border-2 border-${primary}-500 transition transform hover:scale-105`}
			>
			📖
			</button>
		</div>

		{/* Ordenes/Comandas */}
		<div className={` max-w-6xl mx-auto space-y-8`}>
      		<h1 className={`text-3xl cocina-title md:text-4xl text-center font-hogwarts text-${secondary}-500 mb-2`}>
				Cocina de Hogwarts
			</h1>

      		{/* Comanda en curso */}
			<div className="text-gray-900 mb-8">
				<h2 className="text-xl tracking-wider italic text-center text-gray-300 uppercase font-semibold mb-2">Comanda en curso</h2>
				{comandaActual.length === 0 ? (
					<p>No hay comanda activa</p>
				) : (
					/* Pizarron */
					<div className={`border-${secondary}-400 border-[10px] border-board p-6 bg-${primary}-500`}>
						{comandaActual.map(item => (
						<div className={`text-${secondary}-100 md:text-xl mb-2`} key={item.id}>
							{item.nombre} ×{item.cantidad}
						</div>
						))}
						<br />
						<button
							title='Borrar Pizarron'
							onClick={() => finalizarComanda()}
							className={` flex justify-center shadow-lg items-center text-${secondary}-100 w-12 h-12 rounded-[50%] p-0 border-2 bg-${primary}-500 border-${secondary}-500`}
						>
							<Eraser /> 
						</button>
					</div>
				)}
			</div>

			{/* Comandas finalizadas */}
			<div className='text-gray-900'>
				<h2 className="text-xl font-semibold mb-2">Comandas finalizadas</h2>
				{comandasFinalizadas.length === 0 ? (
					<p>No hay comandas finalizadas</p>
				) : (
					<div className="space-y-4">
						{comandasFinalizadas.map((comanda, index) => (
						<div key={index} className="border p-4 rounded">
							<h3 className="text-gray-900 font-bold">Comanda #{index + 1}</h3>
							{comanda.map(item => (
								<div className='text-gray-900' key={`${index}-${item.id}`}>
								{item.nombre} ×{item.cantidad}
								</div>
							))}
						</div>
						))}
						<button
						onClick={limpiarComandasFinalizadas}
						className="mt-4 text-red-500"
						>
						Limpiar historial
						</button>
					</div>
				)}
			</div>
		</div>
	</div>
  );
};

export default CocinaPage;
