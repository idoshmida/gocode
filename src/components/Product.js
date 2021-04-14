function Product({id, title, price, description, category, image}) {
    return (
      <div className="product-card">
            <div className="product-image">
              <img alt="" src={image}/>
            </div>
            <div className="product-info">
                {/* <p>{category}</p> */}
                <div> item no.{id} <br></br>{title}</div>
                <h6>{price} $</h6>
            </div>
      </div>
    );
  }
  
  export default Product;