import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import TableComponent from "../TableComponent";

const AdminUser = () => {
  return (
    <div>
      <div className="heading-01 text-center">User Management</div>
      <button className="mt-[20px] w-[150px] h-[150px] rounded-md border-dashed border-[1px] border-gray-400">
        <PlusOutlined className="text-[40px] hover:text-blue-300 duration-300" />
      </button>
      <div className="mt-[16px]">
        <TableComponent />
      </div>
    </div>
  );
};

export default AdminUser;
