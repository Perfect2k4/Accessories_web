import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "routes";
import { DefaultLayout } from "components/utils";

const AppRouting = () => {
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
    </Routes>
  );
};

export default AppRouting;
