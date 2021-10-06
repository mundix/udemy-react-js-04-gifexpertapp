import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en component AddCategory', () => {

    const setCategories = ()=> {};

    test('Debe de mostrarse correctamente', () => {
        
        const wrapper = shallow(<AddCategory setCategories={setCategories}/>);
        expect(wrapper).toMatchSnapshot();
    })

})
