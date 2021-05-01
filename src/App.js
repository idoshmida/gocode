import './App.css';

import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header'
import Products from './components/Products'
import Cart from './components/Cart'
// import { isDOMComponent } from 'react-dom/test-utils';
export const CartContext = React.createContext();





function App() {

  const [productArr, setProducts] = useState([])

  const [categoryState, setCategoryState] = useState("all categories")

  const [cartItems, setCartItems] = useState([])

  // function addToCart(cartItem) {
  //   console.log("addToCart was worked!");
  //   setCartItems(...cartItems, cartItem)

  // }

  function filteredCategory(category) {
    setCategoryState(category)
  }


  function fetchProd() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }

  useEffect(() => {
    fetchProd();
  }, []);

  
const groupBy = (xs, key) => xs.reduce((rv, x) => {
  (rv[x[key]] = true || []);
  return rv;
}, {});


const categories = Object.keys(groupBy(productArr, 'category'));



  
      

      return (
        <div className="App">
          <CartContext.Provider value={{cartItems, setCartItems}}>


          <div className="cart">
            <Cart />
          </div>

          <div className="store">
            <Header categories={categories} filteredCategory={filteredCategory}/>
            <Products productArr={productArr.filter(obj => (obj.category === categoryState) || (categoryState === "all categories"))} />

          </div>


          </CartContext.Provider>

             
        </div>
      );
    }

export default App;
