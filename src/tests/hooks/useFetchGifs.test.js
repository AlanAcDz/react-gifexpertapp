import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('useFetchGifs tests', () => {
    const category = 'Tests'
    test('should return initial state', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    });
    test('should return an array of images, loading = false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect(data).toHaveLength(10);
        expect(loading).toBeFalsy();
    });
});
