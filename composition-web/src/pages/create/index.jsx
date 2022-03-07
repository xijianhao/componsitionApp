import React from "react";
import { Button, Form, Input } from "antd";
import { useHistory } from "react-router-dom";
import appStore from "@src/stores/app";
import "./style.less";

const { TextArea } = Input;

const Index = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  const { onCreate } = appStore;

  const onSubmit = async () => {
    const params = await form.validateFields();
    const result = await onCreate(params);
    if (result.code === 0) {
      form.resetFields();
      history.push("/");
    }
  };

  return (
    <div className="create">
      <div>
        <Button
          size="small"
          type="primary"
          onClick={() => {
            history.push("/");
          }}
        >
          返回
        </Button>
      </div>
      <div className="create-form">
        <Form form={form}>
          <Form.Item
            label="姓名"
            name="author"
            required
            rules={[{ required: true, message: "请输入姓名" }]}
          >
            <Input style={{ width: "200px" }} placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item
            label="标题"
            name="title"
            required
            rules={[{ required: true, message: "请输入作文标题" }]}
          >
            <Input style={{ width: "200px" }} placeholder="请输入作文标题" />
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            required
            rules={[{ required: true, message: "请输入作文内容" }]}
          >
            <TextArea placeholder="请输入作文内容" rows={20} />
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" size="large" onClick={onSubmit}>
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Index;
