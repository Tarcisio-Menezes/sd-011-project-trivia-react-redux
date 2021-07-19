import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Game from '../pages/Game';
import Configuration from '../pages/Configuration';
import Feedback from '../pages/Feedback';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/game" component={ Game } />
        <Route path="/configuration" component={ Configuration } />
        <Route path="/feedback" component={ Feedback } />
      </Switch>
    );
  }
}

export default Routes;
