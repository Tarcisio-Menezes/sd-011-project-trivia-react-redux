import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Score from './pages/Score';
import TriviaQuestions from './pages/TriviaQuestions';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/triviaquestions" component={ TriviaQuestions } />
      <Route exact path="/settings" component={ Settings } />
      <Route exact path="/ranking" component={ Score } />
    </Switch>
  );
}
