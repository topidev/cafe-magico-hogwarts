// src/utils/temaCasa.ts
import type { Casa } from '../types.ts';

export const getColoresCasa = (casa: Casa) => {
  switch (casa) {
    case 'gryffindor':
      return {
        primary: 'scarlet-500',
        secondary: 'gryffindor-500',
        bgLight: 'gryffindor-50',
        bgCard: 'white',
        text: 'gryffindor-800',
      };
    case 'slytherin':
      return {
        primary: 'slytherin-500',
        secondary: 'silver-400',
        bgLight: 'slytherin-50',
        bgCard: 'white',
        text: 'slytherin-800',
      };
    case 'ravenclaw':
      return {
        primary: 'ravenclaw-500',
        secondary: 'bronze-500',
        bgLight: 'ravenclaw-50',
        bgCard: 'white',
        text: 'ravenclaw-800',
      };
    case 'hufflepuff':
      return {
        primary: 'hufflepuff-500',
        secondary: 'black-500',
        bgLight: 'hufflepuff-50',
        bgCard: 'white',
        text: 'black-600',
      };
    default:
      return {
        primary: 'ravenclaw-500',
        secondary: 'bronze-500',
        bgLight: 'ravenclaw-50',
        bgCard: 'white',
        text: 'ravenclaw-800',
      };
  }
};