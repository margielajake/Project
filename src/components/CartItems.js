import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartItems = () => {
  const CartItems = useSelector((state) => state.cart.itemList);
  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {CartItems.map((item) => (
          <li key={item.id}>
            <CartItem
              id={item.id}
              price={item.price}
              total={item.totalPrice}
              name={item.name}
            />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
