import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import route from './route.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      <HashRouter>
        {route}
      </HashRouter>
      </div>
    );
  }
}

export default App;
