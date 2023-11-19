import { useMutationHook } from "hook/useMutation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "services/UserService";
import * as message from "../../common/Message";
import { updateUser } from "redux/slides/userSlide";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { getBase64 } from "utils";

const Addresses = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isAddressForm, setIsAddressForm] = useState(true);

  const mutation = useMutationHook((data) => {
    const { id, access_token, ...rests } = data;
    UserService.updateUser(id, rests, access_token);
  });
  const { isSuccess, isError } = mutation;

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

  useEffect(() => {
    if (isSuccess) {
      message.success();
      handleGetDetailsUser(user?.id, user?.access_token);
    } else if (isError) {
      message.error();
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    setEmail(user?.email);
    setFullName(user?.fullName);
    setPhone(user?.phone);
    setAddress(user?.address);
    setAvatar(user?.avatar);
  }, [user]);

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangeName = (e) => {
    setFullName(e.target.value);
  };

  const handleOnChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleOnChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleOnChangeAvatar = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setAvatar(file.preview);
  };

  const handleUpdate = () => {
    mutation.mutate({
      id: user?.id,
      email,
      phone,
      address,
      fullName,
      avatar,
      access_token: user?.access_token,
    });
  };

  const handleAddressForm = () => {
    setIsAddressForm(!isAddressForm);
  };

  return (
    <div className="mt-[36px]">
      <h5 className="heading-05">
        The following addresses will be used on the checkout page by default.
      </h5>
      <div className="flex justify-between w-[1000px]">
        <div className="mt-[45px]">
          <h3 className="heading-03">Billing address</h3>
          <p
            onClick={handleAddressForm}
            className="text-[20px] font-bold text-accent cursor-pointer w-[10px]"
          >
            ADD
          </p>
        </div>
        <div className="mt-[45px]">
          <h3 className="heading-03">Shipping address</h3>
          <p className="text-[20px] font-bold text-accent cursor-pointer">
            ADD
          </p>
        </div>
      </div>
      <div
        id="add-address"
        style={isAddressForm ? { display: "none" } : {}}
        className="flex flex-col mt-[30px]"
      >
        <input
          type="text"
          placeholder="First and last name"
          className="fill"
          value={fullName}
          onChange={handleOnChangeName}
        />
        <input
          type="text"
          placeholder="Street Address *"
          className="fill"
          value={address}
          onChange={handleOnChangeAddress}
        />
        <input
          type="text"
          placeholder="Phone *"
          className="fill"
          value={phone}
          onChange={handleOnChangePhone}
        />
        <input
          type="text"
          placeholder="Email *"
          className="fill"
          value={email}
          onChange={handleOnChangeEmail}
        />
        <h5 className="heading-05">Avatar</h5>
        <div className="mb-[50px] flex flex-row">
          <Upload
            onChange={handleOnChangeAvatar}
            maxCount={1}
            className="mt-[10px]"
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
          {avatar && (
            <img
              src={avatar}
              alt="avatar"
              className="h-[60px] w-[60px] rounded-[50%] object-cover ml-[10px]"
            />
          )}
        </div>
        <button
          onClick={handleUpdate}
          className="cursor-pointer w-[500px] h-[53px] rounded-sm bg-black font-bold text-[16px] text-white"
        >
          SAVE ADDRESS
        </button>
      </div>
    </div>
  );
};

export default Addresses;
