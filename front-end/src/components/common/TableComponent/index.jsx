import React from "react";
import { Table } from "antd";
import { columns } from "data/UserAdminData";

const TableComponent = (props) => {
  const { selectionType = "checkbox", products = [] } = props;
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  const data =
    products?.length &&
    products?.map((product) => {
      return { ...product, key: product._id };
    });

  console.log("data", data);

  return (
    <div>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default TableComponent;
