import { Menu } from "antd";
import React, { useState } from "react";
import { getItem } from "utils";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Navbar } from "components/utils";
import { AdminProduct, AdminUser } from "components/common";

const Admin = () => {
  const items = [
    getItem("User", "users", <UserOutlined />),
    getItem("Product", "products", <ShoppingCartOutlined />),
  ];

  const renderPage = (key) => {
    switch (key) {
      case "users":
        return <AdminUser />;
      case "products":
        return <AdminProduct />;
      default:
        return <></>;
    }
  };

  const [keySelected, setKeySelected] = useState("");

  const handleOnClick = ({ key }) => {
    setKeySelected(key);
  };

  console.log("keySelected", keySelected);

  return (
    <>
      <Navbar isHiddenProduct isHiddenAbout isHiddenCart />
      <div className="flex mx-[96px]">
        <Menu
          mode="inline"
          style={{
            width: 256,
            height: "100vh",
            boxShadow: "1px 1px 1px #ccc",
          }}
          items={items}
          onClick={handleOnClick}
          className="bg-gray-200"
        />
        <div className="flex-1 p-[15px]">{renderPage(keySelected)}</div>
      </div>
    </>
  );
};

export default Admin;
