import React from "react";
import ReactDOM from "react-dom";
import routerList from "@src/config/index-router";
import { BrowserRouter } from "react-router-dom";
import { getRoutes } from "@src/utils/routes";
import "@src/style/index.less";
import "@src/style/common.less";
import "antd/dist/antd.less";
ReactDOM.render(
  <BrowserRouter>{getRoutes(routerList)}</BrowserRouter>,
  document.getElementById("root")
);
