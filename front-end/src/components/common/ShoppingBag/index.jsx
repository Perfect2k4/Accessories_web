import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "configs/fontIcon";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShoppingBag = ({ open, onclose }) => {
  const [isClosing, setIsClosing] = useState(false);

  if (!open) return null;
  return (
    <div className="fixed top-0 left-0 flex justify-end z-[999] w-full h-full bg-black bg-opacity-50 ">
      <div
        className={`fixed top-0 right-0 h-[1005px] w-[420px] bg-white  ${
          isClosing ? "closing" : ""
        }`}
      >
        <div className="flex justify-between pt-[72px] pl-[36px] ">
          <h5 className="text-[16px] font-bold flex flex-start ">
            Shopping bag
          </h5>
          <div className="flex flex-end">
            <FontAwesomeIcon
              onClick={() => {
                setIsClosing(true);
                onclose();
              }}
              icon="fa-solid fa-x"
              className="text-gray-500 cursor-pointer mr-[20px]"
            />
          </div>
        </div>
        <div className="mb-[39px]"></div>
        <div className="view-cart">
          <div className="flex justify-between">
            <h5 className="text-[20px] font-bold pl-[36px]">
              Subtotal (5 items)
            </h5>
            <h5 className="heading-05 text-accent mr-[20px]">$ 100,00</h5>
          </div>
          <Link to="/cart">
            <div
              onClick={() => {
                setIsClosing(true);
                onclose();
              }}
              className="cursor-pointer ml-[36px] mt-[21px] flex justify-center items-center w-[328px] h-[53px] rounded text-[16px] font-bold border-[1px] border-solid border-black "
            >
              VIEW CART
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;
