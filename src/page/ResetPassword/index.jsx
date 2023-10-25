import React from "react";

const ResetPassword = () => {
  return (
    <div className="flex flex-col w-[1330px] h-[700px] mx-[96px]">
      <div className="mt-[128px]">
        <h1 className="heading-01 text-center">
          Have you Forgotten Your Password ?
        </h1>
        <h3 className="heading-03 text-center mt-[39px] ml-[400px] w-[550px]">
          If you've forgotten your password, enter your e-mail address and we'll
          send you an e-mail
        </h3>
        <input
          className="ml-[400px] mt-[76px] w-[500px] h-[30px] heading-05 border-b-[1px] border-solid border-grays mb-[46px]"
          type="email"
          placeholder="Email"
        ></input>
        <button
          type="submit"
          className="bg-black hover:bg-gray-500 hover:shadow-xxl hover:text-black ease-in duration-500 text-white ml-[400px] w-[500px] h-[53px] rounded-lg "
        >
          RESET PASSWORD
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
