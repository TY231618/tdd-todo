import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';
import '../../../tools/testSetup';

describe('Footer', () => {
  it('should have a h1 element with text', () => {

    const component = shallow(<Footer />);
    expect(component.find('h1').text()).toEqual('I am a FOOTER');
  })
})