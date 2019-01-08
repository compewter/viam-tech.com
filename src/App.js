import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './containers/HomePage'
import Contact from './containers/ContactPage'

class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" render={props => <Home activePage='home' />} />
            <Route exact path="/contact" render={props => <Contact activePage='contact' />} />
            <Route render={props => <Home />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
