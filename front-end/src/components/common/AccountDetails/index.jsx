import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AccountDetails = () => {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setEmail(user?.email);
    setFullName(user?.fullName);
    setName(user?.name);
  }, [user]);

  return (
    <div className="px-[420px] h-[1000px]">
      <h1 className="mt-[39px] flex justify-center heading-01">
        Account details
      </h1>
      <div className="flex flex-col mt-[37px]">
        <input
          type="text"
          placeholder="First and last name"
          className="fill"
          value={fullName}
        />
        <input
          className="border-b-[1px] border-solid border-grays pb-[13px] mb-[37px]"
          type="text"
          placeholder="Display name*"
          value={name}
        />
        <input
          className="border-b-[1px] border-solid border-grays pb-[13px] mb-[37px]"
          type="email"
          placeholder="Email address*"
          value={email}
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
  );
};

export default AccountDetails;
