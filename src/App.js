import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/home';
import Dashboard from './components/dashboard';
import Buddies from './components/buddies';
import Goals from './components/goals';
import Prizes from './components/prizes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <main className="">
          <Switch>
            <Redirect from="/" to="/home" exact />
            <Route path="/home" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/goals" component={Goals} />
            <Route path="/buddies" component={Buddies} />
            <Route path="/prizes" component={Prizes} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
