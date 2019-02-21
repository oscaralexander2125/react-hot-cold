import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';
import { wrap } from 'module';


describe('<GuessFrom />', () => {
  it('renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('should reset input on submit', () => {
    const wrapper = mount(<GuessForm />);
    const value = 5;
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(wrapper.find('input[type="number"]').instance().value).toEqual('');
  })

  it('should fire the onMakeGuess callback when form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />)
    const value = 5;
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value.toString());
  })
})