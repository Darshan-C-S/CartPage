import React, { Component } from 'react';
import {  useGetAllProductsQuery } from '../feactures/productApi';
import { useDispatch , useSelector } from 'react-redux';
import { addToCart } from '../feactures/cartSlice';
import { useNavigate } from 'react-router-dom'

const Home = () => {

   const { items: products, status } = useSelector((state) => state.products);
   var dispatch = useDispatch();
   const history = useNavigate();

   const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history("/cart");
  };


    return ( 
    <div className='home-container'>
        {status === "success" ? (
        <>
        <h2>New Arrivals</h2>
        <div className="products">
        {data &&
              data?.map((product) => (
                <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                    <span className="desc">{product.desc}</span>
                    <span className="discount">{product.discount}</span>
                    <span className="price">${product.price}</span>
                    </div>
                    <button onClick={() => handleAddToCart(product)}>Add to cart</button>
               
            </div>
            ))}
        </div>
        </>
        ):  status === "pending" ? (
            <p>Loading...</p>
          ) : (
            <p>Unexpected error occured...</p>
          )}
    </div>
    );
};
 
export default Home;