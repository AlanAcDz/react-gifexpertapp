import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('<AddCategory/> tests', () => {
    const value = 'Text';
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    });
    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot(); 
    });
    test('should change input value', () => {
        const input = wrapper.find('input');
        input.simulate('change', { target: { value } });
        expect(input.props().value).toBe('');
    });
    test('should not submit if category is empty', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });
    test('should call setCategories if category has a value', () => {
        const input = wrapper.find('input');
        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.props().value).toBe('');
    });
});
