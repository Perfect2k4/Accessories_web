import React from "react";
import { startBlack } from "assets/import";
import { products } from "data/ProductData";
import { ReviewProduct } from "components/common";
import { product01, product02 } from "assets/import";
import { Col, Row, Image } from "antd";

const ProductDetails = () => {
  return (
    <Row className="w-[1330px] h-[1600px] mx-[96px] py-[128px]">
      <div className="flex justify-between mb-[99px]">
        <Col span={10} className="flex justify-between">
          <div className="">
            <Image
              src={product01}
              alt="product"
              preview={false}
              className="w-[560px] h-[500px] rounded-lg bg-grays"
            />
            <div className="flex flex-row w-[500px] h-[500px] pt-[10px]">
              <Image
                span={8}
                preview={false}
                src={product02}
                alt=""
                className="bg-grays rounded-lg "
              />
              <Image
                span={8}
                preview={false}
                src={product02}
                alt=""
                className="bg-grays rounded-lg ml-[25px] "
              />
              <Image
                span={8}
                preview={false}
                src={product02}
                alt=""
                className="bg-grays rounded-lg ml-[50px]"
              />
            </div>
          </div>
        </Col>
        <Col span={14} className="flex flex-col ml-[64px]">
          <h2 className="heading-02  mb-[23px]">Lira Earrings</h2>
          <h4 className="heading-04 text-accent mb-[70px]">$ 20.00</h4>
          <div className="flex flex-row">
            {[1, 2, 3, 4, 5].map((item) => (
              <img
                className="w-[18px] h-[18px] mr-[10px]"
                key={item}
                alt={`star${item}`}
                src={startBlack}
              />
            ))}
            <h5 className="heading-05 w-[138px] text-light_gray">
              1 customer review
            </h5>
          </div>
          <p className="mt-[19px] w-[484px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis.
          </p>
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
        </Col>
      </div>
      <div>
        <h2 className="text-[26px] font-bold text-center mb-[47px]">
          You may also like
        </h2>
        <div className="gap-[25px] flex flex-row">
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
    </Row>
  );
};

export default ProductDetails;
