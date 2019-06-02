import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import HomeImage from '../images/home.png';

class Home extends Component {
  render() {
    return (
      <div>
        {/* <img src={HomeImage} alt={'logo'} id="image" /> */}
        <p />
        <NavLink to={'/dashboard'}>
          <button className="signup-btn">SIGN UP</button>
        </NavLink>
        <p />
        <NavLink to={'/dashboard'}>
          <button className="login-btn">LOGIN</button>
        </NavLink>
      </div>
    );
  }
}

export default Home;
