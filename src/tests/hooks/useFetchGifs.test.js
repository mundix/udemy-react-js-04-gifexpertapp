import React from 'react';
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';


// Aqui no hay nada que presentar con el snaptshot 
describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe retornar el estado inicial', () => {

        const { result } = renderHook(() => useFetchGifs('One Punch') );
        const  { data, loading } = result.current;

        // console.log(data, loading);

        expect(data).toEqual([]);
        expect(loading).toEqual(true);

    });

});
