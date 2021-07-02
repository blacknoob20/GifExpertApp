import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    const setCategorias = () => {};
    const wrapper = shallow(<AddCategory setCategorias={setCategorias} />);

    test('Debe de mostrarse correctamente.', () => {

        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', {target: { value: value }});
    });
    
});
