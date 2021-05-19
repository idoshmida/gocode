import "./Cart.css";
import React, { useContext } from "react";
import { CartContext } from "../App";
function Cart() {
  const { remove, cart } = useContext(CartContext);
  // const [countState, setCountState] = useState(0);

  const filteredCart = cart
    .filter(
      (obj, indexcart, arr) =>
        arr.findIndex((t) => t.title === obj.title) === indexcart
    )
    .map((obj, index) => (
      <div key={index} className="cart-item">
        <img alt="" height="42" width="42" src={obj.image}></img>
        <div>
          item no.{obj.id} : {obj.title} price: {obj.price}$ {obj.count}
        </div>
        <button
          onClick={() => {
            const a = cart.findIndex((e) => e.id === obj.id); //משווה אינדקס של עגלה לאינדקס של עגלה מפולטרת
            remove(cart[a]);
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
      <div>
        {filteredCart} {console.log(cart)}
      </div>
    </div>
  );
}

export default Cart;
