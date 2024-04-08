// src/components/Cart.js
import React, {useState} from 'react';
import './Cart.css';

const Cart = ({ cart, proceedToPayment, goBack}) => {
  // Calculate total price
  const [cartItems, setCartItems]= useState(cart);
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const removeFromCart = (productId) => {
    // Call the removeFromCart function passed from the parent component
    const updatedCart = cartItems.filter(item => item.id !== productId);
  setCartItems(updatedCart);
  };
 




  return (
    <div>
      <h2>Selected Cart Products</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.price} Rs
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: {totalPrice} Rs</p>
      <button onClick={proceedToPayment}>Proceed to Payment</button>
      <button onClick={goBack}>Back</button>
    </div>
  );
};

export default Cart;


