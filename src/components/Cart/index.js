import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../CartReducer";
import Navbar from "../Navbar/navbar";
import './index.css'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <center>
      <h2>Cart</h2>
        {cartItems.length === 0 ? <p>Your cart is empty</p> : 
            <ul className="list">
            {cartItems.map((item) => (
                <li key={item.id} className="item">
                <img src={item.image} alt={item.name} width="50" />
                <p>{item.productName}</p>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </li>
            ))}
            </ul>
        }
      </center>
    </div>
  );
};

export default Cart;
