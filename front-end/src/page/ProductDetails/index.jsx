import React from "react";
import { ReviewProduct } from "components/common";
import { Row } from "antd";
import * as ProductService from "../../services/ProductService";
import { useQuery } from "@tanstack/react-query";
import ProductDetailsComponent from "components/common/ProductDetailsComponent";

const ProductDetails = () => {
  const fetchProductAll = async () => {
    const res = await ProductService.getAllProduct();
    console.log("res", res);
    return res;
  };

  const { isLoading, data: products } = useQuery(
    ["products"],
    fetchProductAll,
    { retry: 3, retryDelay: 1000 }
  );
  console.log("products", products);
  return (
    <Row className="w-[1330px] h-[1600px] mx-[96px] py-[128px]">
      <div className="flex justify-between mb-[99px]">
        {products?.data?.map((product) => (
          <ProductDetailsComponent
            key={product._id}
            image={product.image}
            description={product.description}
            name={product.name}
            price={product.price}
            rating={product.rating}
          />
        ))}
        <div className="flex flex-row">
          <div className="flex flex-row w-[102px] h-[53px] bg-gray_light py-[14px] px-[16px] rounded mr-[23px] mt-[48px]">
            <p className="mr-[24px] cursor-pointer">-</p>
            <p className="mr-[24px]">1</p>
            <p className="cursor-pointer">+</p>
          </div>
          <button className="w-[360px] h-[53px] py-[16px] border-[1px] border-solid border-black px-[127px] rounded text-[14px] font-semibold mt-[48px] cursor-pointer ease-in duration-500 hover:bg-black hover:text-white">
            ADD CART
          </button>
        </div>
        <div>
          <h2 className="text-[26px] font-bold text-center mb-[47px]">
            You may also like
          </h2>
          <div className="gap-[25px] flex flex-row">
            {products?.data?.map((product) => (
              <ReviewProduct
                key={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </Row>
  );
};

export default ProductDetails;
