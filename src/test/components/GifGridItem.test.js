import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
    const title = 'Prueba Gif Item';
    const url   = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un párrafo con el title', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
    });

    test('Debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('Debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');

        console.log();
        expect(div.prop('className').includes('animate__bounce')).toBe(true);
        // expect(div.props().className).toEqual(expect.stringMatching(/^(animate__bounce)/));
    })

});
