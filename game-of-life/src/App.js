import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import Game from './component/game.js'
import AboutPage from './component/about.js'
import Header from './component/header.js'
import GameRule from './component/rule.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
        <Switch>
          <Route path='/about'>
            <AboutPage />          
          </Route>
          <Route path='/game'>
            <Game />
          </Route>
          <Route path='/'>
            <GameRule />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
