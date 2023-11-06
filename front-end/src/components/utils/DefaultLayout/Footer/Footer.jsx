import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "configs/fontIcon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-between w-[1330px] h-[159px] mb-[90px] mx-[96px]  border-t-[1px] border-solid border-gray-400 py-[40px] ">
      <div>
        <div className="flex flex-row">
          <h6 className="mr-[20px] text-gray-600 cursor-pointer">CONTACT</h6>
          <h6 className="mr-[20px] text-gray-600 cursor-pointer">
            SHIPPING AND RETURNS
          </h6>
          <h6 className="mr-[20px] text-gray-600 cursor-pointer">
            TERMS OF SERVICES
          </h6>
        </div>
        <div className="mt-[57px]">
          © 2021 Shelly. <span className="text-gray-600">Terms of use</span> and
          <Link to="/privacy">
            <span className="text-gray-600 cursor-pointer">
              privacy policy.
            </span>
          </Link>
        </div>
      </div>
      <div>
        <div className="border-solid border-b-[1px] border-black pb-[13px] mb-[50px] w-[395px] ml-[100px]">
          <input
            className="mr-[127px] w-[250px] outline-none "
            type="email"
            placeholder="Give an email, get the newsletter."
          />
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-right-long"
            className="cursor-pointer"
          />
        </div>
        <div className="icon text-gray-600 ml-[350px] ">
          <FontAwesomeIcon
            icon="fa-brands fa-linkedin-in"
            className="cursor-pointer ml-[20px]"
          />
          <FontAwesomeIcon
            icon="fa-brands fa-facebook-f"
            className="cursor-pointer ml-[20px]"
          />{" "}
          <FontAwesomeIcon
            icon="fa-brands fa-instagram"
            className="cursor-pointer ml-[20px]"
          />
          <FontAwesomeIcon
            icon="fa-brands fa-twitter"
            className="cursor-pointer ml-[20px]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
