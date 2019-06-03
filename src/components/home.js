import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
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
