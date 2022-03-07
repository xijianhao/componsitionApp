import React from "react";
import { BarsOutlined, FormOutlined } from "@ant-design/icons";

export const menuList = [
  {
    name: "作文列表",
    icon: <BarsOutlined />,
    route: "/list",
  },
  {
    name: "作文审核",
    icon: <FormOutlined />,
    route: "/audit",
  },
];
