import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../reducers/cartSlice";

const Product = ({ name, id, imageURL, price }) => {
  const cartItems = useSelector((state) => state.cart.itemsList);

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart({ name, id, price }));
  };

  return (
    <div>
      <img src={imageURL} alt={name} />
      <h2>{name}</h2>
      <p>NGN {price}</p>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
};

export default Product;
