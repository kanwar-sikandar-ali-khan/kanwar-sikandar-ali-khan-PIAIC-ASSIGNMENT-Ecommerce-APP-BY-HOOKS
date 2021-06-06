import React from 'react';
import './App.css';
import Nav from './components/nav'
import Home from './components/home'
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom"
import Cart from './components/cart'
import Details from './components/details' 

function App() {
  return (
    <div className="App">
 
      



      <Router>  


        <Nav/>

        <Route path="/" exact component={Home} /> 
        <Route path="/cart" exact component={Cart} /> 
         <Route path="/details/:id" component={Details} />


      </Router>
    

    </div>
  );
}

export default App;
