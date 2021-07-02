import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

import '@testing-library/jest-dom';

describe('Pruebas en <AddCategory />', () => {
    const setCategorias = jest.fn();
    let wrapper = shallow(<AddCategory setCategorias={setCategorias} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategorias={setCategorias} />);
    });

    test('Debe de mostrarse correctamente.', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', {target: { value: value }});
    });

    test('No debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit',{ preventDefault(){} });

        expect(setCategorias).not.toHaveBeenCalled();
    });

    test('Debe llamar el setCategorias y limpiar la caja de texto', () => {
        const value = '';// Hola mundo

        wrapper.find('input').simulate('change', {target: { value }});
        wrapper.find('form').simulate('sumbit', { preventDefault(){} });

        expect(setCategorias).not.toHaveBeenCalled();
        expect(setCategorias).not.toHaveBeenCalledTimes(1);
        expect(setCategorias).not.toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
    });

});
