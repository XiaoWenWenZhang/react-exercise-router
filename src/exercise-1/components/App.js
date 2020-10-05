import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from './Header'
import Home from './Home';
import AboutUs from './AboutUs';
import Myprofiles from "./MyProfiles";
import Products from "./Products";
import ProductDetails from "./ProductDetails";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/products' component={Products} />
            <Route path='/my-profile' component={Myprofiles} />
            <Route path='/about-us' component={AboutUs} />
            <Route path="/goods">
              <Redirect to="/products" />
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
