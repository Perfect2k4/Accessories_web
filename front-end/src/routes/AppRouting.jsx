import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes } from "routes";
import { DefaultLayout, Error } from "components/utils";
import { useSelector } from "react-redux";

const AppRouting = () => {
  const user = useSelector((state) => state.user);

  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Page = route.component;
        const Layout = route.layout ? DefaultLayout : Fragment;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
};

export default AppRouting;
