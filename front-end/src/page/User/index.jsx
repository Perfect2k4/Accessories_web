import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { useTabs } from "hook/useTabs";
import InputSignIn from "components/common/InputSignIn";
import InputSignUp from "components/common/InputSignUp";

const User = () => {
  const { tabIndex, setTabIndex, handleChange, tabChange, activeTabs } =
    useTabs(0);

  return (
    <div className="w-[1330px] h-[1000px] mx-[96px] py-[60px]">
      <h1 className="heading-01 text-center mt-[68px]">My account</h1>
      <Tabs
        data-selected-index={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList data-selected-index={tabIndex} onSelect={handleChange}>
          <div className="flex justify-between ml-[400px] mt-[64px] p-[5px] w-[500px] h-[60px] rounded-lg bg-grays mb-[126px] ">
            <Tab
              value={1}
              className={`account w-[236px] h-[50px] rounded-lg ${
                activeTabs[0] ? "active-tab" : ""
              }`}
              onClick={() => tabChange(0)}
            >
              <h3 className="heading-03">Sign In</h3>
            </Tab>
            <Tab
              value={2}
              className={`account py-[16px] px-[84px] rounded-lg  ${
                activeTabs[1] ? "active-tab" : ""
              }`}
              onClick={() => tabChange(1)}
            >
              <h3 className="heading-03">Register</h3>
            </Tab>
          </div>
        </TabList>
        <TabPanel className="ml-[400px]" value={1}>
          <InputSignIn />
        </TabPanel>
        <TabPanel className="ml-[400px]" value={2}>
          <InputSignUp />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default User;
