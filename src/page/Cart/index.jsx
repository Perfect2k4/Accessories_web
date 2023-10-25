import React from "react";
import CartItem from "components/common/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="w-[1330px] h-[1600px] mx-[96px]">
      <h1 className="heading-01 text-center pt-[96px]">Shopping Cart</h1>
      <div className="flex justify-between">
        <div className="">
          <CartItem />
          <Link to="/product">
            <button className="">UPDATE CART</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
