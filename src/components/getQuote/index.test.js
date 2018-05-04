import React from 'react';
import { shallow } from 'enzyme';
import Quote from './index';
import '../../../tools/testSetup';

describe('Quote', () => {
  it('should render successfully', () => {
    const component = shallow(<Quote />);
    expect(componet.exists()).toEqual(true);
  })
})