import React from "react";
import { useTabs } from "hook/useTabs";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { useSelector } from "react-redux";

const Account = () => {
  const { tabIndex, setTabIndex, activeTabs, handleChange, tabChange } =
    useTabs(0);
  const user = useSelector((state) => state.user);
  console.log("user", user);

  return (
    <div className="w-[1330px] h-[600px] mx-[96px] py-[96px]">
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
                <div className="text-red-600 pl-[5px]">{user.name}</div>
                (not
                <div className="text-red-600 pl-[5px]">{user.name}</div>?
              </h5>
              <span className="text-accent cursor-pointer pl-[5px]">
                Log out
              </span>
              )
            </div>
            <h5 className="heading-05">
              From your account dashboard you can view your
              <span className="text-accent">recent orders</span>, manage your
              <span className="text-accent">
                shipping and billing addresses
              </span>
              , and edit your
              <span className="text-accent">password and account details</span>.
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
          <div className="flex justify-between mt-[39px] w-[1248px] h-[68px] border-t-[1px] border-solid border-black bg-gray_light">
            <h3 className="heading-03 px-[19px] py-[20px]">
              No downloads available yet.
            </h3>
            <span className="cursor-pointer font-bold text-accent px-[23px] py-[20px]">
              BROWSE PRODUCT
            </span>
          </div>
        </TabPanel>
        <TabPanel value={4}>
          <div className="mt-[36px]">
            <h5 className="heading-05">
              The following addresses will be used on the checkout page by
              default.
            </h5>
            <div className="flex justify-between w-[1000px]">
              <div className="mt-[45px]">
                <h3 className="heading-03">Billing address</h3>
                <p className="text-[20px] font-bold text-accent cursor-pointer">
                  ADD
                </p>
                <h3 className="heading-03">
                  You have not set up this type of address yet.
                </h3>
              </div>
              <div className="mt-[45px]">
                <h3 className="heading-03">Shipping address</h3>
                <p className="text-[20px] font-bold text-accent cursor-pointer">
                  ADD
                </p>
                <h3 className="heading-03">
                  You have not set up this type of address yet.
                </h3>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={5}>
          <div className="px-[420px] h-[1000px]">
            <h1 className="mt-[39px] flex justify-center heading-01">
              Account details
            </h1>
            <div className="flex flex-col mt-[37px]">
              <input
                className="border-b-[1px] border-solid border-grays pb-[13px] mb-[37px]"
                type="text"
                placeholder="Last name*"
              />
              <input
                className="border-b-[1px] border-solid border-grays pb-[13px] mb-[37px]"
                type="text"
                placeholder="Display name*"
              />
              <input
                className="border-b-[1px] border-solid border-grays pb-[13px] mb-[37px]"
                type="email"
                placeholder="Email address*"
              />
              <input
                className="border-b-[1px] border-solid border-grays pb-[13px] mb-[37px]"
                type="text"
                placeholder="First name*"
              />
            </div>
            <h3 className="mt-[48px] mb-[48px] font-bold text-[16px]">
              Password change
            </h3>
            <div className="">
              <input
                className="w-[500px] border-b-[1px] border-solid border-grays pb-[13px] mb-[37px]"
                type="password"
                placeholder="Current password (leave blank to leave unchanged)"
              />
              <input
                className="w-[500px] border-b-[1px] border-solid border-grays pb-[13px] mb-[37px]"
                type="password"
                placeholder="New password (leave blank to leave unchanged)"
              />
              <input
                className="w-[500px] border-b-[1px] border-solid border-grays pb-[13px] mb-[37px]"
                type="password"
                placeholder="Confirm new password"
              />
            </div>
            <button className="cursor-pointer w-[500px] h-[53px] rounded-sm bg-black font-bold text-[16px] text-white">
              SAVE CHANGES
            </button>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Account;
