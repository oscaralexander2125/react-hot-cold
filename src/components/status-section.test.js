import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {
  it('renders without crashing', () => {
    shallow(<StatusSection guesses={[]} />);
  });


});