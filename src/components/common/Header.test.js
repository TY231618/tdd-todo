import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import '../../../tools/testSetup';

describe('Header', () => {
  it('should have a h1 element with text', () => {
    const component = shallow(<Header />);
    expect(component.find('h1').text()).toEqual('I am a HEADER');
  })
})
