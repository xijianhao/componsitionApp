import { makeAutoObservable } from "mobx";
import request from "@src/utils/request";
import { encryptPassword } from "@src/utils/util";

class App {
  api = {
    getTypeList: "/common/type-list",
  };

  typeList = [];

  constructor() {
    makeAutoObservable(this);
  }

  // 获取分类列表
  getTypeList = async (params) => {
    const result = await request.get(this.api.getTypeList);
    if (result.code === 0) {
      this.typeList = result.data;
    }
  };
}
export default new App();
