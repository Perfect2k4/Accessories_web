import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "configs/fontIcon";
import { ReviewProduct } from "components/common";
import { products, products_01 } from "data/ProductData";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { useTabs } from "hook/useTabs/index";

const Product = () => {
  const { tabIndex, setTabIndex, handleChange, tabChange, activeTabs } =
    useTabs(0);

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
        <Tabs
          data-selected-index={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList data-selected-index={tabIndex} onSelect={handleChange}>
            <TabPanel value={1}>
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
            </TabPanel>
            <TabPanel value={2}>
              <div className="ml-[36px] grid grid-cols-3 items-center gap-[27px] mt-[40px]">
                {products_01.map((product, index) => (
                  <ReviewProduct
                    key={index}
                    title={product.title}
                    price={product.price}
                    imgUrl={product.imgUrl}
                  />
                ))}
              </div>
            </TabPanel>
            <div className="flex flex-row mt-[64px] ml-[550px] ">
              <Tab
                className={`product-tab ${activeTabs[0] ? "active-tab" : ""}`}
                value={1}
                onClick={() => tabChange(0)}
              >
                1
              </Tab>
              <Tab
                className={`product-tab ${activeTabs[1] ? "active-tab" : ""}`}
                value={2}
                onClick={() => tabChange(1)}
              >
                2
              </Tab>
            </div>
          </TabList>
        </Tabs>
      </div>
    </div>
  );
};

export default Product;
