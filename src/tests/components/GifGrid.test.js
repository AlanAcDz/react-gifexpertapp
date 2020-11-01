import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';

jest.mock('../../hooks/useFetchGifs');

describe('<GifGrid/> tests', () => {
    const category = 'Tests';
    test('should render properly', () => {
        useFetchGifs.mockReturnValue({ data: [], loading: true });
        const wrapper = shallow(<GifGrid category={ category }/>);
        expect(wrapper).toMatchSnapshot(); 
    });
    test('should show items when images load with useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://test.com',
            title: 'Text'
        }];
        useFetchGifs.mockReturnValue({ data: gifs, loading: false });
        const wrapper = shallow(<GifGrid category={ category }/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBeFalsy();
        expect(wrapper.find('GifGridItem')).toHaveLength(gifs.length);
    });
});
