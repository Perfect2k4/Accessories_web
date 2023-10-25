import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = (props) => {
  const { imgSrc, title, details, price } = props;
  const [isVisible, setIsVisible] = useState(true);
  const [count, setCount] = useState(1);

  const handleRemoveClick = () => {
    setIsVisible(false);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    isVisible && (
      <div className="">
        <div className="">
          <img src={imgSrc} alt="itemCart" />
          <div className="">
            <h3>{title}</h3>
            <h4>{details}</h4>
            <h5>{price}</h5>
          </div>
        </div>
        <div className="">
          <div className="">
            <p onClick={handleDecrement}>-</p>
            <p>{count}</p>
            <p onClick={handleIncrement}></p>
          </div>
          <FontAwesomeIcon
            className="icon-item"
            icon="fa-solid fa-x"
            onClick={handleRemoveClick}
          />
        </div>
      </div>
    )
  );
};

export default CartItem;
