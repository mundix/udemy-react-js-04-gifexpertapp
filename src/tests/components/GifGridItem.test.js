import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en archivo GifGridItem', () => {

   const title = 'Un titulo';
   const url = 'https://localhost/algo.js';
   const wrapper = shallow(<GifGridItem title={title} url={url}/>);
    
   test('Comprobar GifGridItem correctamente', () => {
        expect(wrapper).toMatchSnapshot();
   });

   test('Dene tener un parrafo con el title', () => {
      const p = wrapper.find('p');
      expect(p.text().trim()).toBe(title);
   });

   test('Debe tener la la imagen igual al url y alt de los props', () => {
      const img = wrapper.find('img');
      // console.log(img.props());
      // console.log(img.prop('src'));

      expect(img.prop('src')).toBe(url);
      expect(img.prop('alt')).toBe(title);
   });

   test('Debe de tener animate_fadeIn', () => {
      const div = wrapper.find('div');
      expect(div.hasClass('animate__fadeIn')).toBe(true);
   });

   test('Debe de tener animate_fadeIn con Includes', () => {
      const div = wrapper.find('div');
      const className = div.prop('className');
      expect(className.includes('animate__fadeIn')).not.toBe(false);
   });
   
});