import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  it('renders without crashing', () => {
    shallow(<Game />);
  });

  it('Starts a new game', () => {
    const wrapper = shallow(<Game />)
    
    wrapper.setState({
      guesses: [1, 2, 3, 4],
      feedback: 'correct',
      correctAnswer: -2
    })
    wrapper.instance().restartGame();
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess!')
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
  })

  it('make a guess', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer:100
    })
    wrapper.instance().makeGuess(20);
    expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...')
    expect(wrapper.state('guesses')).toEqual([20]);

    wrapper.instance().makeGuess(100);
    expect(wrapper.state('feedback')).toEqual('You got it!')
  })

  it('generateAuralUpdates', () => {
    const wrapper = shallow(<Game />)
    wrapper.setState({
      correctAnswer:20,
      guesses:[1, 2, 3, 4]
    })

    wrapper.instance().makeGuess(5);
    wrapper.instance().generateAuralUpdate();
    expect(wrapper.state('auralStatus')).toEqual(`Here's the status of the game right now: You\'re Warm. You've made 5 guesses. In order of most- to least-recent, they are: 5, 4, 3, 2, 1`)
  })
})