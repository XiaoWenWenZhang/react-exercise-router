import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Home from './Home';
import AboutUs from './AboutUs';
import Myprofiles from "./MyProfiles";
import Products from "./Products";
import ProductDetails from "./ProductDetails";

class App extends Component {
  render() {
    return (

<BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/products' component={Products} />
            <Route path='/myprofile' component={Myprofiles} />
            <Route path='/about-us' component={AboutUs} />
            <Route path="/ProductDetails/:id" component={ProductDetails} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
