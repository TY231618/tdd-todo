import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from './index';
import '../../../tools/testSetup';

describe('AddTodo', () => {

  let component;
  const submitMock = jest.fn();

  beforeEach(() => {
    component = shallow(
      <AddTodo submitTodo={submitMock} />
    )
  })

  it('should render successfully', () => {
    expect(component.exists()).toEqual(true);
  })

  it('should have one input', () => {
    expect(component.find('.todo-input').length).toEqual(1);
  })

  describe('AddTodo button', () => {
    it('should exist', () => {
      expect(component.find('.todo-submit').length).toEqual(1);
    })

    it('should call the submitTodo function when clicked', () => {
      component = mount(<AddTodo submitTodo={submitMock} />);

      expect(submitMock.mock.calls.length).toEqual(0);
      component.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1);
    })
  })
})