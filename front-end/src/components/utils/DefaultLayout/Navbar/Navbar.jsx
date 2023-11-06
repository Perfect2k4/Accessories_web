import React from "react";
import { Link } from "react-router-dom";
import logo from "assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "configs/fontIcon";
import { Badge } from "antd";

const Navbar = () => {
  return (
    <header className="header sticky flex justify-between mx-[96px] pt-[40px] pb-[17px] border-b-[1px] border-solid border-gray-400 ">
      <Link to="/">
        <img src={logo} alt="logo" className="cursor-pointer" />
      </Link>

      <nav className="flex gap-[40px] text-stone-800 duration-700">
        <Link to="/product">Product</Link>
        <Link
          to="/about"
          className="pr-[40px] border-r-[1px] border-solid border-gray-400"
        >
          About
        </Link>
        <span>
          <Link to="/cart">
            <Badge count={1} size="small" color="purple">
              <FontAwesomeIcon
                icon="fa-solid fa-cart-shopping"
                className="cursor-pointer relative"
              />
            </Badge>
          </Link>
        </span>
        <Link to="/user">
          <FontAwesomeIcon icon="fa-regular fa-user" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
