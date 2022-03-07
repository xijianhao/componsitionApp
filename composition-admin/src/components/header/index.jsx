import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Layout, Dropdown, Menu, message } from "antd";
import { useHistory } from "react-router-dom";
import EditUSerDialog from "../edit-user-dialog";
import { DownOutlined, LogoutOutlined, KeyOutlined } from "@ant-design/icons";
import appStore from "@src/stores/app";

import "./style.less";

const { Header } = Layout;

const Index = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordItem, setPasswordItem] = useState({});
  // const { changePasswd } = appStore;
  const hisroty = useHistory();

  const setPasswordHandle = () => {
    setPasswordItem(userinfo);
    setPasswordVisible(true);
  };

  const onLogoutHandle = () => {
    hisroty.push("/login");
  };

  // const onSetPassword = async (values) => {
  //   const result = await changePasswd(values);
  //   if (result.errno === 0) {
  //     message.success("修改密码成功");
  //     setPasswordVisible(false);
  //   }
  // };

  const menu = (
    <Menu>
      {/* <Menu.Item
        key="password"
        icon={<KeyOutlined />}
        onClick={setPasswordHandle}
      >
        <div>修改密码</div>
      </Menu.Item>
      <Menu.Item
        key="logout"
        icon={<LogoutOutlined />}
        onClick={onLogoutHandle}
      >
        <div>退出登录</div>
      </Menu.Item> */}
    </Menu>
  );
  return (
    <Header>
      <EditUSerDialog
        type="password"
        item={passwordItem}
        visible={passwordVisible}
        onCancel={() => {
          // setPasswordVisible(false);
        }}
        // onOk={onSetPassword}
      />
      <div className="app-header">
        <Dropdown overlay={menu} trigger={["click"]}>
          <div className="app-header-user">
            <div className="app-header-user-icon">
              <DownOutlined />
            </div>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default observer(Index);
