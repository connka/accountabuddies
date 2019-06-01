import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Success Partners</h1>
        {/* <img alt="logo" src="" /> */}
        <NavLink to={'/dashboard'}>
          <button className="login-btn">SIGN UP</button>
        </NavLink>
        <NavLink to={'/dashboard'}>
          <button className="login-btn">LOGIN</button>
        </NavLink>
      </div>
    );
  }
}

export default Home;
