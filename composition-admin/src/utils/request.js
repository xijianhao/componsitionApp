import axios from "axios";
import { message } from "antd";
const { NODE_ENV } = process.env;

const baseURL = NODE_ENV === "development" ? "/proxy" : "/";

const request = axios.create({
  baseURL,
  timeout: 30000,
});

request.interceptors.request.use(
  (config) => {
    const userinfo = JSON.parse(localStorage.getItem("userinfo") || "{}");
    return {
      ...config,
      headers: {
        ...config.headers,
        "X-Access-Token": userinfo.access_token || "",
      },
    };
  },
  function (error) {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    if (response && response.status !== 200) {
      const errorText = response.statusText;
      const { status } = response;
      message.error(`请求错误 ${status}:${errorText}`);
    } else if (!response) {
      message.error("您的网络发生异常，无法连接服务器 , 网络异常");
    }
    if (response.data.code !== 0) {
      message.error(response.data.errmsg);
    }

    return response.data || {};
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request;
