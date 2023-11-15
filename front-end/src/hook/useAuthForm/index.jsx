import { useMutationHook } from "hook/useMutation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as UserService from "services/UserService";
import * as message from "../../components/common/Message/index";
import { useDispatch } from "react-redux";
import { updateUser } from "redux/slides/userSlide";

export const useAuthForm = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const mutation = useMutationHook((data) => UserService.signUpUser(data));

  const { data, isLoanding, isSuccess, isError } = mutation;

  const handleOnchangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnchangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnchangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleOnchangeUserName = (e) => {
    setName(e.target.value);
  };

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

  useEffect(() => {
    if (isSuccess) {
      message.success();
      history("/accounts");
    } else if (isError) {
      message.error();
    }
  }, [isSuccess, isError]);

  const handleSignUp = () => {
    mutation.mutate({
      name,
      email,
      password,
      confirmPassword,
    });
  };

  return {
    data,
    email,
    name,
    password,
    confirmPassword,
    handleOnchangeEmail,
    handleOnchangePassword,
    handleOnchangeConfirmPassword,
    handleSignUp,
    handleOnchangeUserName,
    handleGetDetailsUser,
    isLoanding,
  };
};
