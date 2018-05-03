import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './index';
import '../../../tools/testSetup';

describe('TodoList', () => {
  it('should render successfully', () => {
    const component = shallow(<TodoList />);
    expect(component.exists()).toEqual(true);
  })
})