import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-[1330px] h-[700px] mx-[96px] py-[255px]">
      <div className="">
        <h1 className="heading-01 text-center">404 ERROR</h1>
        <h3 className="heading-03 text-center mt-[15px]">
          This page not found; back to home and start again
        </h3>
        <Link to="/">
          <button className="cursor-pointer mt-[64px] ml-[570px] w-[187px] h-[53px] rounded border-[1px] border-solid border-black text-[16px] font-bold">
            HOMEPAGE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
