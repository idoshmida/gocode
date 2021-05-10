import "./Cart.css";
import React, { useContext, useState } from "react";
import { CartContext } from "../App";
function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [countState, setCountState] = useState(0);

  return (
    <div>
      <p>this is the cart:</p> <br></br>
      {cartItems.map((obj, index) => (
        <div key={index} className="cart-item">
          <img alt="" height="42" width="42" src={obj.image}></img>
          <div>
            item no.{obj.id} : {obj.title} price: {obj.price}$ {obj.count}
          </div>
          <button onClick={() => console.log(obj.id)}>remove</button>
          <hr></hr>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default Cart;
