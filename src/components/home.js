import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <img
          className="logo"
          alt="logo"
          width="350px"
          height="350"
          src="https://github.com/connka/accountabuddies/blob/master/src/images/Pactionlogo.png?raw=true"
        />
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
