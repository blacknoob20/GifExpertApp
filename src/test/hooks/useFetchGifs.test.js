import { useFetchGifs } from '../../components/hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el Hook useFetchGifs', () => {
    test('Debe de retornar el estado inicial', async() => {
        // const {data:images, loading} = useFetchGifs('Full Metal');
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('One Punch') );
        const {data,loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe retornar un arreglo de imagenes y el loading falso', async() => {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('One Punch') );
        await waitForNextUpdate();
        const {data,loading} = result.current;


        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });

});
