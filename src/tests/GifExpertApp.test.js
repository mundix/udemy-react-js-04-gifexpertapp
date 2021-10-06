import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('Pruebas en archivo GifExpertApp', () => {
    
   test('Comprobar GifExpertApp correctamente', () => {
       
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
   })
    
});
