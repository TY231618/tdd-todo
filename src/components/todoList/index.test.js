import React from 'react';
import { shallow, mount } from 'enzyme';
import TodoList from './index';
import '../../../tools/testSetup';

describe('TodoList', () => {
  
  const todos = [
    {
      id: 1,
      text: 'A todo'
    }
  ];

  const component = shallow(<TodoList todos={todos}/>);

  it('should render successfully', () => {
    expect(component.exists()).toEqual(true);
  })

  it('should display a todo when passed as a prop', () => {
    expect(component.find('.todo-text').text()).toEqual(todos[0].text);
  })
})