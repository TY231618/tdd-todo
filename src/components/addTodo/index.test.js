import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from './index';
import '../../../tools/testSetup';

describe('AddTodo', () => {
  it('should render successfully', () => {
    const component = shallow(<AddTodo />);
    expect(component.exists()).toEqual(true);
  })

  it('should have one input', () => {
    const component = shallow(<AddTodo />);
    expect(component.find('.todo-input').length).toEqual(1);
  })

  describe('AddTodo button', () => {
    it('should exist', () => {
      const component = shallow(<AddTodo />);
      expect(component.find('.todo-submit').length).toEqual(1);
    })
  })
})