import React, { useEffect } from "react";
import { Input, Form, Button } from "antd";
import { useHistory } from "react-router-dom";
import AppStore from "@src/stores/app";
import "./style.less";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const inputStyle = {
  borderBottom: "1px solid #eee",
  boxShadow: "none",
};

const Index = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const { login } = AppStore;

  useEffect(() => {
    localStorage.setItem("userinfo", "{}");
    localStorage.setItem("passwd", "");
  }, []);

  const onLoginHandle = async () => {
    const params = await form.validateFields();
    const result = await login(params);
    if (result.errno !== 0) return;
    history.push("/instance/pgsql");
  };

  return (
    <div className="login">
      <div className="login-card">
        <div className="login-card-title">作文分享网后台管理系统</div>
        <div className="login-card-content">
          <Form {...layout} form={form}>
            <Form.Item
              required
              label="用户名"
              name="username"
              rules={[{ required: true, message: "请输入用户名" }]}
            >
              <Input
                style={inputStyle}
                bordered={false}
                placeholder="请输入用户名"
                onPressEnter={onLoginHandle}
              />
            </Form.Item>
            <Form.Item
              required
              label="密码"
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input
                style={inputStyle}
                bordered={false}
                type="password"
                placeholder="请输入密码"
                onPressEnter={onLoginHandle}
              />
            </Form.Item>
          </Form>
        </div>
        <div className="login-card-handle">
          <Button
            type="primary"
            style={{ width: "100%" }}
            onClick={onLoginHandle}
          >
            登录
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
