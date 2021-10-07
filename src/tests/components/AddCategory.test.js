import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en component AddCategory', () => {

    // const setCategories = ()=> {};
    const setCategories = jest.fn(); //con la funciton de jest podemos evaluar o usar la function
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach( () => {
        jest.clearAllMocks(); //esto se llama para limpiar cualquier llamada a funciones 
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        // Para mandar el evento, el targe especificamente se pasa un segundo argumento, un objeto { }
        const value = 'Hola Mundo';
        // input.simulate('change', { target: { value:value }});
        input.simulate('change', { target: { value }}); //forma corta cuando el property se llama igual
        expect(wrapper.find('p').text().trim()).toBe(value);
    });
    
    test('No debe de posterar la informacion del Subimit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){}} );
        // Para evaluar si una function se llamo toHaveBeenCalled() method
        expect(setCategories).not.toHaveBeenCalled(); 
    });
    

})
