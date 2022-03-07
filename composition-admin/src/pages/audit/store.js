import { makeAutoObservable } from "mobx";
import request from "@src/utils/request";
class Audit {
  api = {
    getList: "/componsition/audit-list",
    getDetail: "/componsition/",
    onAudit: "/componsition/audit",
  };

  list = [];
  detail = {};
  selectKeys = [];
  constructor() {
    makeAutoObservable(this);
  }
  getList = async () => {
    const result = await request.get(this.api.getList);
    this.list = result.data;
  };

  getDetail = async (id) => {
    const result = await request.get(`${this.api.getDetail}${id}`);
    this.detail = result.data;
  };

  onAudit = async (params) => {
    const result = await request.post(`${this.api.onAudit}`, params);
    return result;
  };
}
export default new Audit();
