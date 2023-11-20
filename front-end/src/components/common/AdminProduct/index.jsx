import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import TableComponent from "../TableComponent";
import { Button, Input, Modal, Form } from "antd";

const AdminProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = () => {};
  return (
    <>
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
      <Modal title="Create Products" open={isModalOpen} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Image" name="image">
            <Input />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input your Price!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Rating"
            name="rating"
            rules={[{ required: true, message: "Please input your Rating!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input your Description!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="text-black bg-blue-700"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AdminProduct;
