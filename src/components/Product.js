import { useContext } from "react";
import { Link } from "react-router-dom";
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
          <Link to={`/product/${id}`}> item no.{id} </Link>
          <br></br>
          {title}
        </div>
        <h6>{price} $</h6>
        <button
          onClick={() => {
            const countItems = cartItems.filter((item) => item.id === id);
            setCartItems([
              ...cartItems,
              { image, price, title, id, count: countItems.length + 1 },
            ]);
          }}
        >
          add to this cart
        </button>
      </div>
    </div>
  );
}

export default Product;
