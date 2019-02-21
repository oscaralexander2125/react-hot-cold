import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
  it('renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('should start newGame when clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onRestartGame={callback} />)
    wrapper.find('.new').simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  })

  it('should call onGenerateAuralUpdate when state of game clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
    wrapper.find('.status-link').simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  })
})