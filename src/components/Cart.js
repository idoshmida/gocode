import './Cart.css'
import React, { useContext } from 'react'
import { CartContext } from '../App'
 function Cart() {
     const {cartItems} = useContext(CartContext);

return (


<div >
    <p>this is the cart:</p> <br></br>
    {cartItems.map((obj, index) => 
        <div key={index} className="cart-item">
                <img alt="" height="42" width="42" src={obj.image}></img>
            <div > item no.{obj.id} : {obj.title} price: {obj.price}$</div>
            <hr></hr><br></br>

        </div>
   

    
  
   )}
</div>
   





)
 }

 export default Cart;