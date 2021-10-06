import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas en archivo GifGridItem', () => {

   const title = 'Un titulo';
   const url = 'https://localhost/algo.js';
    
   test('Comprobar GifGridItem correctamente', () => {
       
        const wrapper = shallow(<GifGridItem title={title} url={url}/>);
        expect(wrapper).toMatchSnapshot();
   })
    
});