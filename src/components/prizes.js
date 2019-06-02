import React, { Component } from 'react';
import SimpleBottomNavigation from './bottomNavigation';
import PrizesImage from '../images/prizes.png';

class Prizes extends Component {
  render() {
    return (
      <div>
        <img src={PrizesImage} alt={'logo'} id="image" />
        <SimpleBottomNavigation />
      </div>
    );
  }
}

export default Prizes;
