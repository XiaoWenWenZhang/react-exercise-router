import React, { Component } from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import User from "./User";
import NotMatch from "./NotMatch";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="app">
        <Switch>
        <Route exact path='/' component={Home} />
            <Route path='/notmatch' component={NotMatch} />
            <Route path='/:id(\d+)' component={User} />
            <Route path='/about' component={About} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
