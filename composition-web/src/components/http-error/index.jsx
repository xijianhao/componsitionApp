import React from "react";
import img404 from "@src/static/404.png";
import "./style.less";

const errorMsg = {
  404: "未找到当前页面",
};

const Index = ({ errorCode = 404 }) => {
  return (
    <div className="http-error">
      <div className="http-error-img">
        <img src={img404} alt="" />
      </div>
      {errorMsg[errorCode]}
    </div>
  );
};

export default Index;
