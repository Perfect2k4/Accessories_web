import React from "react";
import { Banner, ReviewProduct } from "components/common/index";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { banners, reviews } from "data/ProductData";

const Default = () => {
  return (
    <div className="w-[1330px] h-[1800px] mx-[96px] py-[60px] z-1 ">
      <Swiper
        className="max-w-[1330px] max-h-[700px] mb-[35px] z-[-1]  bg-gray-300 rounded-lg "
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
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
        {reviews.map((review, index) => (
          <ReviewProduct
            key={index}
            title={review.title}
            price={review.price}
            imgUrl={review.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Default;
