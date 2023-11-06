import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "configs/fontIcon";
import { ReviewProduct } from "components/common";
import { products } from "data/ProductData";
import { Pagination } from "antd";

const Product = () => {
  const onChange = () => {};

  return (
    <div className="w-[1330px] h-[1300px] mx-[96px] py-[60px]">
      <h1 className="heading-01">Shop The Latest</h1>
      <div className="flex justify-between">
        <div className="mt-[41px] ">
          <div className="flex justify-between pb-[11px] w-[261px] border-solid border-b-[1px] border-grays ">
            <input type="search" placeholder="Search..." />
            <FontAwesomeIcon
              className="cursor-pointer"
              icon="fa-solid fa-magnifying-glass"
            />
          </div>
          <select className=" mt-[39px] border-solid border-[1px] borer-grays w-[261px] h-[53px]">
            <option>Top choice</option>
            <option>Price rising</option>
            <option>Price falling</option>
          </select>
        </div>

        <div className="ml-[36px] grid grid-cols-3 items-center gap-[27px] mt-[40px]">
          {products.map((product, index) => (
            <ReviewProduct
              key={index}
              title={product.title}
              price={product.price}
              imgUrl={product.imgUrl}
            />
          ))}
        </div>
      </div>
      <Pagination
        className="text-center mt-[40px]"
        showQuickJumper
        defaultCurrent={2}
        total={500}
        onChange={onChange}
      />
    </div>
  );
};

export default Product;
