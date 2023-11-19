import React from "react";
import { useTabs } from "hook/useTabs";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "services/UserService";
import { resetUser } from "redux/slides/userSlide";
import Addresses from "components/common/Address";
import AccountDetails from "components/common/AccountDetails";
import OrderUser from "components/common/OrderUser";
import { Link } from "react-router-dom";

const Account = () => {
  const dispatch = useDispatch();
  const { tabIndex, setTabIndex, activeTabs, handleChange, tabChange } =
    useTabs(0);
  const user = useSelector((state) => state.user);

  const handleLogout = async () => {
    await UserService.logoutUser();
    dispatch(resetUser());
  };

  return (
    <div className="w-[1330px] h-[1300px] mx-[96px] py-[96px]">
      <h1 className="heading-01 text-center">My Account</h1>
      <Tabs
        data-selected-index={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList data-selected-index={tabIndex} onSelect={handleChange}>
          <div className="flex flex-row relative border-b-[1px] border-solid border-grays pb-[34px] ">
            <Tab
              value={1}
              className={`account-tab ${activeTabs[0] ? "active-tab" : ""}`}
              onClick={() => tabChange(0)}
            >
              <h4 className="heading-03">Dashboard</h4>
            </Tab>
            <Tab
              value={2}
              className={`account-tab ${activeTabs[1] ? "active-tab" : ""}`}
              onClick={() => tabChange(1)}
            >
              <h4 className="heading-03">Orders</h4>
            </Tab>
            <Tab
              value={3}
              className={`account-tab ${activeTabs[2] ? "active-tab" : ""}`}
              onClick={() => tabChange(2)}
            >
              <h4 className="heading-03">Downloads</h4>
            </Tab>
            <Tab
              value={4}
              className={`account-tab ${activeTabs[3] ? "active-tab" : ""}`}
              onClick={() => tabChange(3)}
            >
              <h4 className="heading-03">Addresses</h4>
            </Tab>
            <Tab
              value={5}
              className={`account-tab ${activeTabs[4] ? "active-tab" : ""}`}
              onClick={() => tabChange(4)}
            >
              <h4 className="heading-03">Account details</h4>
            </Tab>
          </div>
        </TabList>
        <TabPanel value={1}>
          <div className="mt-[39px]">
            <div className="flex flex-row">
              <h5 className="heading-05 flex flex-row">
                Hello
                <div className="font-bold pl-[5px]">{user.name}</div>
                (not
                <div className=" font-bold pl-[5px]">{user.name}</div>?
              </h5>
              <Link to="/" className="mt-[3px]">
                <span
                  onClick={handleLogout}
                  className="text-accent cursor-pointer pl-[5px] mt-[14px] font-bold text-[17 px]"
                >
                  Log out
                </span>
                )
              </Link>
            </div>
            <h5 className="heading-05 ">
              From your account dashboard you can view your
              <span className="text-accent ml-[4px]">recent orders</span>,
              manage your
              <span className="text-accent ml-[4px]">
                shipping and billing addresses
              </span>
              , and edit your
              <span className="text-accent ml-[4px]">
                password and account details
              </span>
              .
            </h5>
          </div>
        </TabPanel>
        <TabPanel value={2}>
          <div className="flex justify-between mt-[39px] w-[1248px] h-[68px] border-t-[1px] border-solid border-black bg-gray_light">
            <h3 className="heading-03 px-[19px] py-[20px] ">
              No order has been made yet.
            </h3>
            <span className="cursor-pointer font-bold text-accent px-[23px] py-[20px]">
              BROWSE PRODUCT
            </span>
          </div>
        </TabPanel>
        <TabPanel value={3}>
          <OrderUser />
        </TabPanel>
        <TabPanel value={4}>
          <Addresses />
        </TabPanel>
        <TabPanel value={5}>
          <AccountDetails />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Account;
