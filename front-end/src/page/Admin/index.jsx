import { Menu } from "antd";
import React, { useState } from "react";
import { getItem } from "utils";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Navbar } from "components/utils";

const Admin = () => {
  const items = [
    getItem("User", "users", <UserOutlined />, []),
    getItem("Product", "products", <ShoppingCartOutlined />, [
      getItem("Option 3", "3"),
      getItem("Option 4", "4"),
      getItem("Submenu", "sub1-2", null, [
        getItem("Option 5", "5"),
        getItem("Option 6", "6"),
      ]),
    ]),
  ];

  const rootSubmenuKeys = ["User", "Product"];
  const [openKeys, setOpenKeys] = useState(["User"]);
  const [keySelected, setKeySelected] = useState("");
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const handleOnClick = ({ key }) => {
    setKeySelected(key);
  };

  return (
    <>
      <Navbar isHiddenProduct isHiddenAbout isHiddenCart />
      <div className="flex mx-[96px]">
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{
            width: 256,
          }}
          items={items}
          onClick={handleOnClick}
          className="bg-gray-200"
        />
        <div className="flex-1">
          {keySelected === "6" && <span>key la 6</span>}
          <span>test</span>
        </div>
      </div>
    </>
  );
};

export default Admin;
