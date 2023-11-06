import React from "react";
import { Link } from "react-router-dom";

const Banner = (props) => {
  const { imgSrc, title, price } = props;
  return (
    <div className="flex justify-between flex-row ">
      <div className="py-[100px] px-[80px]">
        <h3 className="text-[35px] font-medium w-[500px] mb-[20px]">{title}</h3>
        <h4 className="heading-04 mb-[40px] text-accent">{price}</h4>
        <Link to="/product-details">
          <button className="w-[190px] h-[50px] rounded-[10px] ease-in duration-300 bg-red-600 text-white font-semibold text-[33px] hover:scale-110 hover:shadow-xxl">
            Shop Now
          </button>
        </Link>
      </div>
      <img src={imgSrc} alt="banner" className="w-[800px] max-h-[400px] " />
    </div>
  );
};

export default Banner;
