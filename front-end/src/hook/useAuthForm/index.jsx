import { emailValidator, passwordValidator } from "components/common/Regex";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthForm = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [activeTabs, setActiveTabs] = useState(
    new Array(2).fill(false).map((_, index) => index === 0)
  );

  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (index) => {
    setTabIndex(index);
  };

  const tabChange = (index) => {
    setTabIndex(index);

    const newActiveTabs = activeTabs.map((_, i) => i === index);
    setActiveTabs(newActiveTabs);
  };

  useEffect(() => {
    if (localStorage.getItem("auth")) history("/accounts");
  });

  const formSubmitter = (e) => {
    e.preventDefault();
    setSuccessMsg("");
    if (!emailValidator(email))
      return setErrorMsg("Please enter a valid email address");
    if (!passwordValidator(password))
      return setErrorMsg(
        "Password should have a minimum of 8 characters with a combination of uppercase, lowercase, and numbers."
      );
    if (email !== "perfect@123.com" || password !== "Perfect123")
      return setErrorMsg("Invalid email or password");
    history("/accounts");
  };

  return {
    tabIndex,
    setTabIndex,
    activeTabs,
    handleChange,
    tabChange,
    username,
    setUsername,
    setEmail,
    setPassword,
    errorMsg,
    successMsg,
    formSubmitter,
  };
};
