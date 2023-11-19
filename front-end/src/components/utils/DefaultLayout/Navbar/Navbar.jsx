import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "configs/fontIcon";
import { Badge, Popover } from "antd";
import { useSelector } from "react-redux";

const Navbar = ({
  isHiddenProduct = false,
  isHiddenCart = false,
  isHiddenAbout = false,
}) => {
  const user = useSelector((state) => state.user);
  const history = useNavigate();
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [userAvatar, setAvatar] = useState("");
  const [userName, setuserName] = useState("");

  useEffect(() => {
    setAvatar(user?.avatar);
    setuserName(user?.name);
  }, [user?.avatar, user?.name]);

  const content = (
    <div>
      <Link to="/accounts">
        <p className="hover:bg-grays hover:text-blue-400 duration-500 cursor-pointer">
          User Information And Orders
        </p>
      </Link>
      {user?.isAdmin && (
        <p
          onClick={() => history("/system/admin")}
          className="hover:bg-grays hover:text-blue-400 duration-500 cursor-pointer "
        >
          System Management
        </p>
      )}
    </div>
  );

  return (
    <header className="header sticky flex justify-between mx-[96px] pt-[40px] pb-[17px] border-b-[1px] border-solid border-gray-400 ">
      <Link to="/">
        <img src={logo} alt="logo" className="cursor-pointer" />
      </Link>

      <nav className="flex text-stone-800 duration-700">
        {!isHiddenProduct && <Link to="/product">Product</Link>}
        {!isHiddenAbout && (
          <Link
            to="/about"
            className="ml-[40px] pr-[40px] border-r-[1px] border-solid border-gray-400"
          >
            About
          </Link>
        )}
        {!isHiddenCart && (
          <Link to="/cart" className="ml-[40px]">
            <Badge count={1} size="small" color="purple">
              <FontAwesomeIcon
                icon="fa-solid fa-cart-shopping"
                className="cursor-pointer relative"
              />
            </Badge>
          </Link>
        )}
        {userAvatar ? (
          <img
            src={userAvatar}
            alt="avatar"
            className="ml-[40px] w-[30px] h-[30px] rounded-[50%] cursor-pointer"
          />
        ) : (
          <FontAwesomeIcon icon="fa-regular fa-user" className="hidden" />
        )}
        {user?.access_token ? (
          <Popover content={content} trigger="click" open={isOpenPopup}>
            <div
              className="cursor-pointer text-[16px] ml-2 font-bold"
              onClick={() => setIsOpenPopup((prev) => !prev)}
            >
              {userName?.length ? userName : user?.email}
            </div>
          </Popover>
        ) : (
          <Link to="/user">
            <FontAwesomeIcon icon="fa-regular fa-user" className="ml-[40px]" />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
