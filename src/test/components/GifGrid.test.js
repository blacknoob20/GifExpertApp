import React from 'react';
import { shallow } from 'enzyme/build';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../components/hooks/useFetchGifs';
import '@testing-library/jest-dom';

jest.mock('../../components/hooks/useFetchGifs');

describe('Pruebas en el <GifGrid />', () => {
    const categoria = 'One Punch';

    test('Debe mostrarse correctamente <GifGrid />', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid categoria={categoria} />);

        expect(wrapper).toMatchSnapshot();
    });


    test('Debe mostrarse items cuando se cargan imágenes useFetchGifs', () => {
        const imgs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'cualquier cosa',
        }]

        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: true,
        });

        const wrapper = shallow(<GifGrid categoria={categoria} />);

        expect( wrapper.find('p').exist() ).toBe(false);
        // expect( wrapper.find('GifGridItem').length ).toBe(imgs.length);
    });
});
