import { useAuthForm } from "hook/useAuthForm";
import React from "react";

const InputSignUp = () => {
  const {
    name,
    email,
    password,
    confirmPassword,
    data,
    handleOnchangeEmail,
    handleOnchangePassword,
    handleOnchangeConfirmPassword,
    handleSignUp,
    handleOnchangeUserName,
  } = useAuthForm();

  return (
    <form>
      <input
        className="fill"
        type="text"
        name="Username"
        placeholder="Username"
        value={name}
        onChange={handleOnchangeUserName}
      />
      <input
        className="fill"
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleOnchangeEmail}
      />
      <input
        className="fill"
        type="password"
        placeholder="Password"
        value={password}
        onChange={handleOnchangePassword}
      />
      <input
        className="fill"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={handleOnchangeConfirmPassword}
      />
      <div className="flex flex-row">
        <input
          className="w-[16px] h-[17px] mt-[4px] mr-[4px]"
          type="checkbox"
        />
        <h5>Remember me</h5>
      </div>
      {data?.status === "ERR" && (
        <span className="text-red-700">{data?.message}</span>
      )}
      <div
        className="w-[500px] h-[53px] rounded-md bg-black mt-[50px] text-white mb-[13px] text-center cursor-pointer pt-[14px]"
        onClick={handleSignUp}
      >
        Register
      </div>
    </form>
  );
};

export default InputSignUp;
