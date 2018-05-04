import React from 'react';
import { shallow } from 'enzyme';
import Quote from './index';
import '../../../tools/testSetup';

describe('Quote', () => {

  const getQuoteMock = jest.fn();

  it('should render successfully', () => {
    const component = shallow(<Quote />);
    expect(component.exists()).toEqual(true);
  })

  it('should render a quote after calling getQuote on button click', () => {
    const component = shallow(<Quote getQuote={getQuoteMock}/>);
    expect(getQuoteMock.mock.calls.length).toEqual(0);
    component.find('.quote-submit').simulate('click');
    expect(getQuoteMock.mock.calls.length).toEqual(1);
  })
})