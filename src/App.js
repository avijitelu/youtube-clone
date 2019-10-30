/* ----------Third Party Module---------- */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/* ----------Custom Module---------- */
import Home from './Home';
import Trending from './Trending';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route 
          exact
          path="/"
          render={(routeProps) => <Home />}
        />
        <Route 
          exact
          path="/feed/trending"
          render={(routeProps) => <Trending />}
        />
      </Switch>
    );
  }
}

export default App;