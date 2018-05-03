import React from 'react';
import { shallow } from 'enzyme'
import { App } from './App';
import '../../tools/testSetup';
import { initialState } from '../reducers/index';

describe('App', () => {
  it('should render successfully', () => {

    const mockFunction = jest.fn();

    const component = shallow(
      <App 
        state={initialState}
        submitTodo={mockFunction}
        todos={[]}
      />
    );
    
    expect(component.exists()).toEqual(true);
  })
})