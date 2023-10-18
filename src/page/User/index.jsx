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
  } = useAuthForm();

  return (
    <div className="w-[1330px] h-[1000px] mx-[96px] py-[60px]">
      <form>
        <h1 className="heading-01 text-center mt-[68px]">My account</h1>
        <Tabs
          data-selected-index={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList data-selected-index={tabIndex} onSelect={handleChange}>
            <div className="user-container">
              <Tab
                value={1}
                className={`user-login ${activeTabs ? "active-tab" : ""}`}
                onClick={() => tabChange(0)}
              >
                Sign In
              </Tab>
              <Tab
                value={2}
                className={`user-login ${activeTabs ? "active-tab" : ""}`}
                onClick={() => tabChange(1)}
              >
                Register
              </Tab>
            </div>
          </TabList>
          <TabPanel value={1}>
            {errorMsg.length > 0 && (
              <div className="user-errorMsg">{errorMsg}</div>
            )}
            {successMsg.length > 0 && (
              <div className="user-successMsg">{successMsg}</div>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="">
              <input className="" type="checkbox" />
              <label>Remember me</label>
            </div>
            <button type="submit" className="btn-black">
              Sign In
            </button>
            <h5>
              <Link to="/reset-password">
                Have you forgotten your password?
              </Link>
            </h5>
          </TabPanel>
          <TabPanel>Hello Daddy</TabPanel>
        </Tabs>
      </form>
    </div>
  );
};

export default User;
