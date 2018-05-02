import React from 'react';
import { shallow } from 'enzyme'
import App from './App';
import '../../tools/testSetup';

describe('App', () => {
  it('should render successfully', () => {
    const component = shallow(<App />);
    expect(component.exists()).toEqual(true);
  })
})