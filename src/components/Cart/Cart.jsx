import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  // const Cart = props.cart; //option one.
  //   const { cart } = props; //Option two.
    console.log(cart);

    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
        
        
  return (
    <div className="cart">
      <h1>Order summary</h1>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: {total}</p>
      <p>Total Shipping : </p>
      <p>Tax:</p>
      <h6>Grand Total: </h6>
    </div>
  );
};

export default Cart;
