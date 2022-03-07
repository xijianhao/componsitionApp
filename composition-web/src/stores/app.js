import { makeAutoObservable } from "mobx";
import request from "@src/utils/request";
import { message } from "antd";
class App {
  api = {
    getList: "/componsition/pass-list",
    onCreate: "/componsition",
  };

  list = [];

  constructor() {
    makeAutoObservable(this);
  }

  getList = async () => {
    const result = await request.get(this.api.getList);
    this.list = result.data;
  };

  onCreate = async (params) => {
    const reuslt = await request.post(this.api.onCreate, params);
    if (reuslt.code === 0) {
      message.success("提交成功");
    }
    return reuslt;
  };
}
export default new App();
