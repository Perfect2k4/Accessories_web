import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import TableComponent from "../TableComponent";
import { Button, Input, Modal, Form, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { getBase64 } from "utils";
import * as ProductService from "services/ProductService";
import { useMutationHook } from "hook/useMutation";
import { useQuery } from "@tanstack/react-query";

const AdminProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [stateProduct, setStateProduct] = useState({
    name: "",
    price: "",
    rating: "",
    description: "",
    image: "",
  });

  const mutation = useMutationHook((data) => {
    const { name, image, price, rating, description } = data;
    const res = ProductService.createProduct({
      name,
      image,
      price,
      rating,
      description,
    });
    return res;
  });

  const getAllProducts = async () => {
    const res = await ProductService.getAllProduct();
    return res;
  };

  const { isLoadingProducts, products } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
  const { data, isSuccess, isError } = mutation;

  useEffect(() => {
    if (isSuccess && data?.status === "OK") {
      message.success();
      handleCancel();
    } else if (isError) {
      message.error();
    }
  }, [isSuccess]);

  const onFinish = () => {
    mutation.mutate(stateProduct);
    setStateProduct({
      name: "",
      price: "",
      rating: "",
      description: "",
      image: "",
    });
    form.resetFields();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOnChange = (e) => {
    setStateProduct({
      ...stateProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnChangeAvatar = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProduct({
      ...stateProduct,
      image: file.preview,
    });
  };

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
        <TableComponent products={products?.data} />
      </div>
      <Modal
        title="Create Products"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          onFinish={onFinish}
          autoComplete="on"
          form={form}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input
              value={stateProduct.name}
              onChange={handleOnChange}
              name="name"
            />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input your Price!" }]}
          >
            <Input
              value={stateProduct.price}
              onChange={handleOnChange}
              name="price"
            />
          </Form.Item>

          <Form.Item
            label="Rating"
            name="rating"
            rules={[{ required: true, message: "Please input your Rating!" }]}
          >
            <Input
              value={stateProduct.rating}
              onChange={handleOnChange}
              name="rating"
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input your Description!" },
            ]}
          >
            <Input
              value={stateProduct.description}
              onChange={handleOnChange}
              name="description"
            />
          </Form.Item>

          <Form.Item
            className="mt-[15px]"
            label="Image"
            name="image"
            rules={[{ required: true, message: "Please input your Image!" }]}
          >
            <Upload onChange={handleOnChangeAvatar} maxCount={1}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
              {stateProduct?.image && (
                <img
                  src={stateProduct?.image}
                  alt="avatar"
                  className="h-[60px] w-[60px] rounded-[50%] object-cover ml-[10px] mt-[-10px]"
                />
              )}
            </Upload>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
            <Button type="primary" htmlType="submit" className=" bg-blue-700">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AdminProduct;
