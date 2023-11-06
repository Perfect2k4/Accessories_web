import React from "react";
import { useTabs } from "hook/useTabs";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const Account = () => {
  const { tabIndex, setTabIndex, activeTabs, handleChange, tabChange } =
    useTabs(0);

  return (
    <div className="w-[1330px] h-[1800px] mx-[96px] py-[96px]">
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
            <h3 className="heading-05 ">
              Hello Vitatheme (not Vitatheme?{" "}
              <span className="text-accent cursor-pointer">Log out</span>)
            </h3>
            <h3 className="heading-05">
              From your account dashboard you can view your{" "}
              <span className="text-accent">recent orders</span>, manage your{" "}
              <span className="text-accent">
                shipping and billing addresses
              </span>
              , and edit your{" "}
              <span className="text-accent">password and account details</span>.
            </h3>
          </div>
        </TabPanel>
        <TabPanel value={2}>
          <div className="flex justify-between mt-[39px] w-[1248px] h-[68px] border-t-[1px] border-solid border-black bg-gray_light">
            <h4 className="heading-03 px-[19px] py-[20px] ">
              No order has been made yet.
            </h4>
            <span className="cursor-pointer font-bold text-accent px-[23px] py-[20px]">
              BROWSE PRODUCT
            </span>
          </div>
        </TabPanel>
        <TabPanel value={3}>
          <div className="flex justify-between mt-[39px] w-[1248px] h-[68px] border-t-[1px] border-solid border-black bg-gray_light">
            <h4 className="heading-03 px-[19px] py-[20px]">
              No downloads available yet.
            </h4>
            <span className="cursor-pointer font-bold text-accent px-[23px] py-[20px]">
              BROWSE PRODUCT
            </span>
          </div>
        </TabPanel>
        <TabPanel value={4}>
          <div className="mt-[36px]">
            <h2 className="heading-05">
              The following addresses will be used on the checkout page by
              default.
            </h2>
            <div className="flex justify-between w-[1000px]">
              <div className="mt-[45px]">
                <h3 className="heading-03">Billing address</h3>
                <p className="text-[20px] font-bold text-accent">ADD</p>
                <h6 className="heading-03">
                  You have not set up this type of address yet.
                </h6>
              </div>
              <div className="mt-[45px]">
                <h3 className="heading-03">Shipping address</h3>
                <p className="text-[20px] font-bold text-accent">ADD</p>
                <h6 className="heading-03">
                  You have not set up this type of address yet.
                </h6>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={5}>
          <div className="px-[420px]">
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
