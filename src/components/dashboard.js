import React, { Component } from 'react';
import SimpleBottomNavigation from './bottomNavigation';
import DashboardImage from '../images/dashboard.png';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <img src={DashboardImage} alt={'logo'} id="image" />

        <SimpleBottomNavigation />
      </div>
    );
  }
}

export default Dashboard;
