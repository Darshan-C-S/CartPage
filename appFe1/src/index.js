import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

import productsReducer, { productsFetch } from './feactures/productsSlice';
import { productsApi } from './feactures/productApi';
import cartReducer, { getTotals } from "./feactures/cartSlice";


const store = configureStore({
  reducer:{
    products : productsReducer,
    cart:cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});


store.dispatch(productsFetch());// you can see the backend responce where we use redux toolkit like postman 
store.dispatch(getTotals());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
