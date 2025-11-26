export type Producto = {
    id:number;
    nombre:string;
    precio:number;
    imagen:string;
    categoria:string;
    descripcion:string;
}

export type ItemComanda = Producto & { cantidad:number; }
export type Casa = 'gryffindor' | 'slytherin' | 'ravenclaw' | 'hufflepuff';

export type ThemeContextType = {
  casaActual: Casa;
  cambiarCasa: (casa: Casa) => void;
};