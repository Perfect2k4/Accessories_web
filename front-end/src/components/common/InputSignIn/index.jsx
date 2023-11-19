import React, { useEffect } from "react";
import { useAuthForm } from "hook/useAuthForm";
import { Link, useLocation } from "react-router-dom";
import { useMutationHook } from "hook/useMutation";
import { useNavigate } from "react-router-dom";
import * as UserService from "services/UserService";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateUser } from "redux/slides/userSlide";

// import Loading from "../Loading";

const InputSignIn = () => {
  const history = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { email, password, handleOnchangeEmail, handleOnchangePassword } =
    useAuthForm();

  const mutation = useMutationHook((data) => UserService.loginUser(data));
  const { data, isSuccess } = mutation;

  const handleGetDetailsUser = async (id, token) => {
    const storage = localStorage.getItem("refresh_token");
    const refreshToken = JSON.parse(storage);
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token, refreshToken }));
  };

  useEffect(() => {
    if (isSuccess) {
      if (location?.state) {
        history(location?.state);
      } else {
        history("/");
      }
      localStorage.setItem("access_token", JSON.stringify(data?.access_token));
      localStorage.setItem(
        "refresh_token",
        JSON.stringify(data?.refresh_token)
      );
      if (data?.access_token) {
        const decoded = jwtDecode(data?.access_token);
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token);
        }
      }
    }
  }, [isSuccess]);

  const handleSignIn = () => {
    mutation.mutate({
      email,
      password,
    });
  };

  return (
    <form>
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
      {/* <Loading isLoading={isLoading}> */}
      <div
        className="w-[500px] h-[53px] rounded-md bg-black mt-[69px] text-white mb-[13px] text-center cursor-pointer pt-[14px]"
        onClick={handleSignIn}
      >
        Sign In
      </div>
      {/* </Loading> */}
      <h5 className="heading-05 ml-[120px]">
        <Link to="/reset-password">Have you forgotten your password?</Link>
      </h5>
    </form>
  );
};

export default InputSignIn;
