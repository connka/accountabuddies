import React, { Component } from 'react';
import SimpleBottomNavigation from './bottomNavigation';
import BuddyImage from '../images/buddy.png';

class Buddies extends Component {
  render() {
    return (
      <div>
        <img src={BuddyImage} alt={'logo'} id="image" />
        <SimpleBottomNavigation />
      </div>
    );
  }
}

export default Buddies;
