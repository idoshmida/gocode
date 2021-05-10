import "./App.css";

import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";

import Cart from "./components/Cart";
// import { isDOMComponent } from 'react-dom/test-utils';
export const CartContext = React.createContext();

function App() {
  const [productArr, setProducts] = useState([]);

  const [categoryState, setCategoryState] = useState("all categories");

  const [cartItems, setCartItems] = useState([]);

  const [sliderState, setSliderState] = useState([5, 190]);

  // const { setCartItems, cartItems } = useContext(CartContext);

  // function addToCart(cartItem) {
  //   console.log("addToCart was worked!");
  //   setCartItems(...cartItems, cartItem)

  // }

  function filteredCategory(category) {
    setCategoryState(category);
  }

  function fetchProd() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }

  useEffect(() => {
    fetchProd();
  }, []);

  const groupBy = (xs, key) =>
    xs.reduce((rv, x) => {
      rv[x[key]] = true || [];
      return rv;
    }, {});

  const categories = Object.keys(groupBy(productArr, "category"));

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/product/:id">
          <ProductPage />
        </Route>
        <Route>
          <div className="App">
            <CartContext.Provider
              value={{ cartItems, setCartItems, sliderState, setSliderState }}
            >
              <aside
                className="cart
      "
              >
                <Cart />
              </aside>

              <div className="store">
                <Header
                  categories={categories}
                  filteredCategory={filteredCategory}
                />
                <Products
                  productArr={productArr.filter(
                    (obj) =>
                      (obj.category === categoryState ||
                        categoryState === "all categories") &&
                      ((obj.price > sliderState[0] &&
                        obj.price < sliderState[1]) ||
                        (obj.price > sliderState[1] &&
                          obj.price < sliderState[0]))
                  )}
                />
              </div>
            </CartContext.Provider>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
