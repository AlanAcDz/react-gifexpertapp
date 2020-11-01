import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';
import '@testing-library/jest-dom';

describe('<GifExpertApp/> tests', () => {
    test('should render properly', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('should show category list', () => {
        const categories = ['Game of Thrones', 'Bloodborne'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid')).toHaveLength(categories.length);
    });
});
