import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
  it('renders without crashing', () => {
    shallow(<GuessCount />);
  });
})