import { getGifs } from '../../helpers/getGifs';
import '@testing-library/jest-dom';

describe('getGifs tests', () => {
    test('should return 10 elements', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    });
    test('should return no elements if category is empty', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});
