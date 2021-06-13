import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Resume from './components/Resume';
import Landing from './components/Landing';
import Test from './components/Test';
import Peepo from './components/Peepo';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/resume">
          <Resume/>
        </Route>
        <Route path="/" exact>
          <Landing/>
        </Route>
        <Route path="/test">
          <Test/>
        </Route>
        <Route path="/TestPage">
          <Peepo/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
