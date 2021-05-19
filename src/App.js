import "./App.css";

import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
export const CartContext = React.createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.item];
    case "delete":
      const itemKey = state.findIndex(
        (item) => item.title === action.item.title
      );
      const update = [...state];
      update.splice(itemKey, 1);
      return update;
    default:
      return state;
  }
}

function App() {
  const [productArr, setProducts] = useState([]);

  const [categoryState, setCategoryState] = useState("all categories");

  // const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useReducer(cartReducer, []);

  const [sliderState, setSliderState] = useState([5, 190]);

  function add(item) {
    setCart({ item, type: "add" });
  }

  function remove(item) {
    setCart({ item, type: "delete" });
  }

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
              value={{ cart, add, remove, sliderState, setSliderState }}
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
