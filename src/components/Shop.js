import React from "react";
import styles from "../style";
import Navbar from "./Navbar";
import Product from "./Product";
import CartItems from "./CartItems";

const Shop = () => {
  return (
    <div>
      <div className="bg-black w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>
      <Product />
      <CartItems />
    </div>
  );
};

export default Shop;
