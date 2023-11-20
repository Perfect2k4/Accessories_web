import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import TableComponent from "../TableComponent";
import { Modal } from "antd";
import { Form } from "react-router-dom";

const AdminProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="heading-01 text-center">Product Management</div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-[20px] w-[150px] h-[150px] rounded-md border-dashed border-[1px] border-gray-400"
      >
        <PlusOutlined className="text-[40px] hover:text-blue-300 duration-300" />
      </button>
      <div className="mt-[16px]">
        <TableComponent />
      </div>
      <Modal
        title="Create Products"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
       <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
      </Modal>
    </div>
  );
};

export default AdminProduct;
