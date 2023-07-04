import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../reducers/cartSlice";

const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const showCart = () => {
    dispatch(cartActions.setShowCart);
  };
  return (
    <div>
      <h3 onClick={showCart}>{quantity} items</h3>
    </div>
  );
};

export default Cart;
