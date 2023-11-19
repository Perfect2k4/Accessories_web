import React from "react";
import { Col, Image } from "antd";
import { StarFilled } from "@ant-design/icons";
import { product01 } from "assets/import";

const ProductDetailsComponent = (props) => {
  const { image, name, price, description, rating } = props;

  return (
    <div>
      <Col span={10} className="flex justify-between">
        <div className="">
          <Image
            src={image}
            alt="product"
            preview={false}
            className="w-[560px] h-[500px] rounded-lg bg-grays"
          />
        </div>
      </Col>
      <Col span={14} className="flex flex-col ml-[64px]">
        <h2 className="heading-02  mb-[23px]">{name}</h2>
        <h4 className="heading-04 text-accent mb-[70px]">{price}</h4>
        <div className="flex flex-row">
          <span className="mr-[8px]">
            <span>{rating}</span>
            <StarFilled className="w-[18px] h-[18px] mr-[10px]" />
          </span>
        </div>
        <p className="mt-[19px] w-[484px]">{description}</p>
      </Col>
    </div>
  );
};

export default ProductDetailsComponent;
