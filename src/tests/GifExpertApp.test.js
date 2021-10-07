import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en archivo GifExpertApp', () => {
    
   test('Comprobar GifExpertApp correctamente', () => {
       
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
   });

   test('Debe mostrar una lista de categorias', () => {
      const categories  = ['Baku No hero Academy', 'Shingeki No Kyogi'];
      const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('GifGrid').length).toBe(categories.length);

   });
   
    
});
