import React from "react";
import { Link } from "react-router-dom";

const ReviewProduct = (props) => {
  const { imgUrl, title, price } = props;
  return (
    <div>
      <div className="product-box relative w-full overflow-hidden z-[-1]">
        <Link to="/product-details">
          <img
            src={imgUrl}
            alt="review"
            className="w-[377px] h-[380px] rounded-lg bg-grays cursor-pointer ease-in duration-500 hover:scale-110"
          />
        </Link>
        <div className="product-layer cursor-pointer absolute bottom-0 left-0 w-full h-full text-center translate-y-full p-[20px] bg-layer rounded-md ease-in duration-500">
          <h5 className="cursor-pointer body-large">Add to Cart</h5>
        </div>
      </div>

      <h3 className="mt-[20px] heading-03">{title}</h3>
      <h4 className="text-[20px] font-medium leading-[26px] text-accent">
        {price}
      </h4>
    </div>
  );
};

export default ReviewProduct;
