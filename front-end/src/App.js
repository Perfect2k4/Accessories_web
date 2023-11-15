import { BrowserRouter as Router } from "react-router-dom";
import AppRouting from "./routes/AppRouting";
import { useEffect } from "react";
import { isJsonString } from "utils";
import { jwtDecode } from "jwt-decode";
import * as UserService from "services/UserService";
import { useDispatch } from "react-redux";
import { updateUser } from "redux/slides/userSlide";

const App = () => {
  const dispatch = useDispatch();

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

  const handleDecoded = () => {
    let storageData = localStorage.getItem("access_token");
    let decoded = {};
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      decoded = jwtDecode(storageData);
    }
    return { decoded, storageData };
  };

  useEffect(() => {
    const { storageData, decoded } = handleDecoded();
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData);
    }
  }, []);

  UserService.axiosJWT.interceptors.request.use(
    async function (config) {
      const currentTime = new Date();
      const { decoded } = handleDecoded();
      if (decoded?.exp < currentTime.getTime() / 1000) {
        const data = await UserService.refreshToken();
        config.headers["token"] = `Bearer ${data?.access_token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return (
    <Router>
      <AppRouting />
    </Router>
  );
};

export default App;
