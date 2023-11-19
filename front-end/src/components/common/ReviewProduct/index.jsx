import React from "react";
import { Link } from "react-router-dom";

const ReviewProduct = (props) => {
  const { image, name, price, description } = props;
  return (
    <div>
      <div className="product-box relative w-full overflow-hidden z-[1] ">
        <Link to="/product-details">
          <img
            src={image}
            alt="review"
            className="w-[377px] h-[380px] rounded-lg bg-grays cursor-pointer ease-in duration-500 hover:scale-110"
          />
        </Link>
      </div>

      <h3 className="mt-[20px] heading-03">{name}</h3>
      <h4 className="text-[20px] font-medium leading-[26px] text-accent">
        {price}
      </h4>
    </div>
  );
};

export default ReviewProduct;
