import React, { useEffect } from "react";
import { Modal, Form, Input } from "antd";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const Index = ({ visible, type, item, onCancel, onOk }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    if (visible && form) {
      form.resetFields();
    }
  }, [visible, form]);

  const onOkHandle = async () => {
    const result = await form.validateFields();
    onOk(result);
  };

  const TypeMap = {
    adduser: {
      title: "新增用户",
      content: (
        <Form.Item
          label="用户名"
          name="username"
          required
          rules={[
            { required: true, message: "请输入用户名" },
            () => ({
              validator(_, value) {
                const regx = /^([0-9a-zA-Z_]*)$/;
                if (regx.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("仅支持字母、数字、下划线"));
              },
            }),
          ]}
        >
          <Input placeholder="60字符以内，仅支持字母、数字、下划线" />
        </Form.Item>
      ),
    },
    password: {
      title: "修改密码",
      content: <Form.Item label="当前用户名">{item.username}</Form.Item>,
    },
  };

  return (
    <Modal
      destroyOnClose
      title={TypeMap[type].title}
      visible={visible}
      onCancel={onCancel}
      onOk={onOkHandle}
      okText="确认"
      cancelText="取消"
    >
      <div>
        <Form {...layout} form={form}>
          {TypeMap[type].content}
          <Form.Item
            required
            label="新密码"
            name="password"
            rules={[
              () => ({
                validator(_, value) {
                  const regx = /^(\d+[a-zA-Z]+|[a-zA-Z]+\d+)([0-9a-zA-Z]*)$/;
                  if (regx.test(value) && value?.length >= 6) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("数字字母组合，不低于6位"));
                },
              }),
            ]}
          >
            <Input
              placeholder="请输入新密码，数字字母组合，不低于6位"
              type="password"
              max={60}
            />
          </Form.Item>
          <Form.Item
            required
            label="确认密码"
            name="password_confirm"
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("密码不一致"));
                },
              }),
            ]}
          >
            <Input type="password" placeholder="请再次输入密码" />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};
export default Index;
