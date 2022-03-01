import { filtroPorRaza } from '../src/filtrado.js';
import data from './mockData.js'

describe('Test del filtrado', () => {
    test('Comprobar que es un funcion', () => {
        expect(typeof filtroPorRaza).toBe('function');
    });

    test('Filtrado datos', () => {
        expect(filtroPorRaza('spaniel', data.dogs)).toStrictEqual([
            {
                id: '1',
                image: 'https://images.dog.ceo/breeds/spaniel-cocker/n02102318_11221.jpg',
                breed: 'spaniel'
            }
        ])
    });

    test('Filtrado datos para evitar falsos positivos', () => {
        expect(filtroPorRaza('spaniel', data.dogs)).not.toStrictEqual([
            {
                "id": "21",
                "image": "https://images.dog.ceo/breeds/labrador/lab_young.JPG",
                "breed": "labrador"
            }
        ])
    });

    test('Comprobar la longitud del retorno filtrado para evitar falso positivo', () => {
        expect(filtroPorRaza('spaniel', data.dogs)).not.toHaveLength(2);
    })

    test('Comprobar la longitud del retorno filtrado ', () => {
        expect(filtroPorRaza('spaniel', data.dogs)).toHaveLength(1);
    })

})