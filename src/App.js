import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Lyrics from './components/tracks/Lyrics';
import Index from './components/layout/Index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { Provider } from './context';


class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route exact path="/lyrics/track/:id" component={Lyrics}></Route>
          </Switch>
        </div>
      </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
