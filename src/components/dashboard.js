import React, { Component } from 'react';
import SimpleBottomNavigation from './bottomNavigation';
import logo from '../images/image.png';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt={'logo'} id="image" />

        <SimpleBottomNavigation />
      </div>
    );
  }
}

export default Dashboard;
