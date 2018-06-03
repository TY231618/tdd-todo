import React from 'react';
import {shallow} from 'enzyme';
import Puppy from './index';
import '../../../tools/testSetup';

describe('Puppy', () => {

  const getPuppyPicMock = jest.fn();

  it('should render successfully', () => {
    const component = shallow(<Puppy />);

    expect(component.exists()).toEqual(true);
  })

  it('should display a puppy pic after button click', () => {
    const component = shallow(<Puppy getPuppyPic={getPuppyPicMock}/>);
    expect(getPuppyPicMock.mock.calls.length).toEqual(0);
    component.find('.puppy-fetch').simulate('click');
    expect(getPuppyPicMock.mock.calls.length).toEqual(1);
  })
})