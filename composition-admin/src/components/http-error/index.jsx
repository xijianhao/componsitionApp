import React from "react";
import { Empty } from "antd";
import "./style.less";

const errorMsg = {
  404: "未找到当前页面",
};

const Index = ({ errorCode = 404 }) => {
  return (
    <div className="http-error">
      <Empty description={errorMsg[errorCode]} />
    </div>
  );
};

export default Index;
