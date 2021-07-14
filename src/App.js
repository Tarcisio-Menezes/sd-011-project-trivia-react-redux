import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/game" component={ Game } />
          <Route exact path="/settings" component={ Settings } />
        </Switch>
      </div>
    );
  }
}

export default App;
