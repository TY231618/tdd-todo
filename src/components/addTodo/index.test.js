import React from 'react';
import { shallow, mount } from 'enzyme';
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

    it('should call the submitTodo function when clicked', () => {
      const submitTodoMock = jest.fn();
      const component = mount(<AddTodo submitTodo={submitTodoMock} />);

      expect(submitTodoMock.mock.calls.length).toEqual(0);
      component.find('form').simulate('submit');
      expect(submitTodoMock.mock.calls.length).toEqual(1);
    })
  })
})