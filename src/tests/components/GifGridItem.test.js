import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import '@testing-library/jest-dom';

describe('<GifGridItem /> tests', () => {
    const title = 'Un Titulo';
    const url = 'https://test.com';
    const wrapper = shallow(<GifGridItem title={ title } url={ url } />);
    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should have a paragraph with title text', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    test('should have an image with src url and alt text', () => {
        const img = wrapper.find('img');
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    });
    test('should have a div with fadeIn class', () => {
       const div = wrapper.find('div');
       expect(div.hasClass('animate__fadeIn')).toBeTruthy();
    });
});
