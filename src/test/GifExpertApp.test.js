import React from 'react';
import {shallow} from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas GifExpertApp', () => {
    test('Debe mostrarse correctamente.', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe mostrar dos categorias', () => {
        const categorias = ['hunter x hunter', 'full metal'];
        const wrapper = shallow(<GifExpertApp categoriasDef={categorias} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);
    })
    
});
