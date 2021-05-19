import "./Cart.css";
import React, { useContext } from "react";
import { CartContext } from "../App";
function Cart() {
  const { remove, cart } = useContext(CartContext);
  // const [countState, setCountState] = useState(0);

  const filteredCart = cart
    .filter(
      (obj, index, arr) => arr.findIndex((t) => t.title === obj.title) === index
    )
    .map((obj, index) => (
      <div key={index} className="cart-item">
        <img alt="" height="42" width="42" src={obj.image}></img>
        <div>
          item no.{obj.id} : {obj.title} price: {obj.price}$ {obj.count}
        </div>
        <button
          onClick={() => {
            remove(cart[index]);
          }}
        >
          remove
        </button>
        <hr></hr>
        <br></br>
      </div>
    ));

  return (
    <div>
      <p>this is the cart:</p> <br></br>
      <div>{filteredCart}</div>
    </div>
  );
}

export default Cart;
