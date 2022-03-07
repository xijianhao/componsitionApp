import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { menuList } from "@src/config/menu-config";
import { observer } from "mobx-react-lite";
import appStore from "@src/stores/app";
import "./style.less";

const { SubMenu } = Menu;

const defaultKeys = menuList[0].child
  ? menuList[0].child[0].route
  : menuList[0].route;

const Index = ({ collapsed }) => {
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState(defaultKeys);
  const { userinfo } = appStore;
  const hisroty = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (collapsed) return;
    const defaultOpenKey = [];
    // 进入首页跳转第一项菜单
    if (location.pathname === "/") {
      hisroty.push("/list");
      defaultOpenKey.push("/list");
    } else {
      location.pathname.split("/").forEach((item, index) => {
        if (!item) return;
        defaultOpenKey.push(`${defaultOpenKey[index - 2] || ""}/${item}`);
      });
    }

    setOpenKeys(defaultOpenKey);
    const tmpKeys = location.pathname.split("/").slice(0, 3).join("/");
    setSelectedKeys(tmpKeys);
  }, [collapsed, location, hisroty]);

  const onSelect = (value) => {
    setSelectedKeys(value.key);
  };

  const onPush = (route) => {
    hisroty.push(route);
  };

  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  // 获取菜单
  const getMenu = (list, path = "") => {
    return list.map((menu) => {
      const role = !menu.role || menu.role?.includes(userinfo.role);
      if (menu.child && menu.child.length && role) {
        return (
          <SubMenu icon={menu.icon} key={path + menu.route} title={menu.name}>
            {getMenu(menu.child, path + menu.route)}
          </SubMenu>
        );
      }
      return (
        role && (
          <Menu.Item
            key={path + menu.route}
            icon={menu.icon}
            onClick={() => {
              onPush(path + menu.route);
            }}
          >
            {menu.name}
          </Menu.Item>
        )
      );
    });
  };

  return (
    <Menu
      mode="inline"
      style={{
        background: "transparent",
        color: "#cecece",
      }}
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onOpenChange={onOpenChange}
      onSelect={onSelect}
    >
      {getMenu(menuList)}
    </Menu>
  );
};

export default observer(Index);
