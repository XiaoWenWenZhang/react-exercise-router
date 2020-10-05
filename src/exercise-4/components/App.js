import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import User from "./User";
import NotMatch from "./NotMatch";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/:id(\d+)' component={User} />
            <Route path='/about' component={About} />
            <Route component={NotMatch} />
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
