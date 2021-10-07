import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';

describe('Prueas en el GifGrid', () => {
    
    const category = 'Pokemon';
    const wrapper = shallow(<GifGrid category={category}/>);

    test('Mostrar correctamente GifGrid', () => {
       
        expect(wrapper).toMatchSnapshot();

    });
    

});
