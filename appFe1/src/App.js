import './App.css';
import React, { Component }  from 'react';

import {BrowserRouter, Route , Routes , Navigate  } from "react-router-dom"

import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes> {/* switch to routs */}
       
        <Route  path = "*" element = {<NotFound/>}/>
        <Route  path = "/cart" element = {<Cart/>}/>    {/* always use most specific path first  */} 
        <Route  path = "/"  element = {<Home/>}/>
        {/* Redirect to Navigate  */}
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
