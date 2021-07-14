import React from 'react';
// import logo from './trivia.png';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/settings" component={ Settings } />
    </Switch>
  );
}
