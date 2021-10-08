import React from 'react';
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';


// Aqui no hay nada que presentar con el snaptshot 
describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch') );
        const  { data, loading } = result.current;
        
        //en esta parte se pone despues por que se debve actauazliar despues de usar el hook
        await waitForNextUpdate(); 
        expect(data).toEqual([]);
        expect(loading).toEqual(true);

    });

    test('Debe de retornar un arreglo de imagenes y el loading en false', async() => {
        // Como hago par esperar el resultado  ? vamos a trabajar para esperar un nuevo cambio en el estado  
        //waitForNextUpdate: esto es una func que regresa una promesa que me indica cuando ya sucedio el cambio
        //en el estado del custom hook , se hace poniendo el async en la funcion fleca del test
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch') );
        await waitForNextUpdate(); //debe ir antes del result hasta que llegen los valores 
        const  { data, loading } = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toEqual(false);
    });
    

});
