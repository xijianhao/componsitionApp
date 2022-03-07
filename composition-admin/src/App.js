import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import { observer } from "mobx-react-lite";
import { getRoutes } from "@src/utils/routes";
import Menu from "@src/components/menu";
import Header from "@src/components/header";
import routerList from "@src/config/content-router";
import appStore from "./stores/app";
import "./style/app.less";

const { Content, Sider } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { getTypeList } = appStore;

  useEffect(() => {
    getTypeList();
  }, []);

  return (
    <div className="app">
      <Layout className="app-layout">
        <Sider
          collapsible
          className="app-sider"
          collapsed={collapsed}
          theme="light"
          width="200"
          onCollapse={(collapsed) => {
            setCollapsed(collapsed);
          }}
        >
          <div className="app-logo">
            {!collapsed ? <div className="app-logo-text">作文分享网</div> : ""}
          </div>
          <Menu collapsed={collapsed} />
        </Sider>
        <Layout>
          <Header />
          <Content>
            <div className="app-content">{getRoutes(routerList)}</div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default observer(App);
