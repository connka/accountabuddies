import React, { Component } from 'react';
import SimpleBottomNavigation from './bottomNavigation';
import GoalsImage from '../images/goals.png';

class Goals extends Component {
  render() {
    return (
      <div>
        <img src={GoalsImage} alt={'logo'} id="image" />
        <SimpleBottomNavigation />
      </div>
    );
  }
}

export default Goals;
