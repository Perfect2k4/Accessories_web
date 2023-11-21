import React from "react";
import { Banner, ReviewProduct } from "components/common/index";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { banners } from "data/ProductData";
import * as ProductService from "services/ProductService";
import { useQuery } from "@tanstack/react-query";

const Default = () => {
  const fetchProductAll = async () => {
    const res = await ProductService.getAllProduct();
    console.log("res", res);
    return res;
  };

  const { data: products } = useQuery(["products"], fetchProductAll, {
    retry: 3,
    retryDelay: 1000,
  });
  console.log("products", products);

  return (
    <div className="w-[1330px] h-[1800px] mx-[96px] py-[60px] z-[0]">
      <Swiper
        className="max-w-full max-h-[38.8%] mb-[35px]  bg-gray-300 rounded-lg "
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        speed={800}
      >
        {banners.map((product, index) => (
          <SwiperSlide key={index}>
            <Banner
              title={product.title}
              price={product.price}
              imgSrc={product.imgSrc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-between">
        <h1 className="heading-01">Shop The Latest</h1>
        <h4 className="heading-04 cursor-pointer text-accent">View All</h4>
      </div>
      <div className="grid grid-cols-4 items-center gap-[37px] mt-[40px]">
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
  );
};

export default Default;
