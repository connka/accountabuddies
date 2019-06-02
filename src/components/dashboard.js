import React, { Component } from 'react';
import SimpleBottomNavigation from './bottomNavigation';
import DashboardBackground from '../images/image.png';

var sectionStyle = {
  width: '411px',
  height: '823px',
  backgroundImage: `url(${DashboardBackground})`
};

class Dashboard extends Component {
  render() {
    return (
      <div>
        <section style={sectionStyle} />
        <SimpleBottomNavigation />
      </div>
    );
  }
}

export default Dashboard;
