import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import logo from './logo.svg';
import Posts from './Posts';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div id="App">

          <header className="App-header">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <h1 className="App-title">CodingTest - Front End</h1>
          </header>

          <Route exact path="/" component={Posts} />

        </div>
      </Router>
    );
  }
}
