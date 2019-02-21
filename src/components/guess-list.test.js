import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
  it('renders without crashing', () => {
    shallow(<GuessList guesses={[]}/>);
  });

  it('Renders a list of guesses', () => {
    const values = [1, 2, 3, 4];
    const wrapper = shallow(<GuessList guesses={values} />)
    const items = wrapper.find('li')

    expect(items.length).toEqual(values.length);
  })
})