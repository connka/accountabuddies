import React, { Component } from 'react';
import SimpleBottomNavigation from './bottomNavigation';
import Background from '../images/image.png';

var sectionStyle = {
  width: '411px',
  height: '823px',
  backgroundImage: `url(${Background})`
};

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <section style={sectionStyle} />
        <SimpleBottomNavigation />
      </div>
    );
  }
}

export default Dashboard;
