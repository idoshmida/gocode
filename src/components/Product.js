import { useContext } from "react";
import { CartContext } from "../App";

function Product({ id, title, price, description, category, image }) {
  const { setCartItems, cartItems } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="product-image">
        <img alt="" src={image} />
      </div>

      <div className="product-info">
        <div>
          {" "}
          item no.{id} <br></br>
          {title}
        </div>
        <h6>{price} $</h6>
        <button
          onClick={() => {
            setCartItems([...cartItems, { image, price, title, id }]);
          }}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
