import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
//import { Provider } from "react-redux";
//import store from "./store";

//import logo from './logo.svg';
import './App.css';

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";

import "./App.css";
import DemProductx from "./components/demproductx/DemProductx";
import ReptEstimates from "./components/reptestimates/ReptEstimates";
import DisplayProducts from './components/displayproducts/DisplayProducts'
//import OperatorDefinition from "./components/operatorefinition/OperatorDefinition";


class App extends Component{
  render(){
      return (     
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/demproductx" component={DemProductx} />
            <Route exact path="/reptestimates" component={ReptEstimates} />        
            <Route exact path="/displayproducts" component={DisplayProducts} /> 
            <Footer />
          </div>
        </Router>    
     )
 }
}

export default App;
