import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Settings from './pages/Settings';
import TriviaQuestions from './pages/triviaQuestions';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/TriviaQuestions" component={ TriviaQuestions } />
      <Route exact path="/settings" component={ Settings } />
    </Switch>
  );
}
