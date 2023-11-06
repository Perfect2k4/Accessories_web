import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { useAuthForm } from "hook/useAuthForm";
import { Link } from "react-router-dom";

const User = () => {
  const {
    tabIndex,
    setTabIndex,
    handleChange,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    errorMsg,
    successMsg,
    tabChange,
    formSubmitter,
    activeTabs,
  } = useAuthForm(0);

  return (
    <div className="w-[1330px] h-[1000px] mx-[96px] py-[60px]">
      <form onSubmit={formSubmitter}>
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
            {errorMsg.length > 0 && (
              <div className="user-errorMsg">{errorMsg}</div>
            )}
            {successMsg.length > 0 && (
              <div className="user-successMsg">{successMsg}</div>
            )}

            <input
              className="fill"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="fill"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex flex-row">
              <input
                className="w-[16px] h-[17px] mt-[4px] mr-[4px]"
                type="checkbox"
              />
              <h5>Remember me</h5>
            </div>
            <button
              type="submit"
              className="w-[500px] h-[53px] rounded-md bg-black mt-[69px] text-white mb-[13px] "
            >
              Sign In
            </button>
            <h5 className="heading-05 ml-[120px]">
              <Link to="/reset-password">
                Have you forgotten your password?
              </Link>
            </h5>
          </TabPanel>
          <TabPanel className="ml-[400px]" value={2}>
            <input
              className="fill"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input className="fill" type="text" placeholder="Email" />
            <input className="fill" type="password" placeholder="Password" />
            <input
              className="fill"
              type="password"
              placeholder="Confirm Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex flex-row">
              <input
                className="w-[16px] h-[17px] mt-[4px] mr-[4px]"
                type="checkbox"
              />
              <h5>Remember me</h5>
            </div>
            <button
              type="submit"
              className="w-[500px] h-[53px] rounded-md bg-black mt-[50px] text-white mb-[13px]"
            >
              Register
            </button>
          </TabPanel>
        </Tabs>
      </form>
    </div>
  );
};

export default User;