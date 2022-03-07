import React, { useEffect } from "react";
import { Modal, Input, Button, message, Form, Select, Rate } from "antd";
import { observer } from "mobx-react-lite";
import store from "./store";
import dayjs from "dayjs";
import appStore from "@src/stores/app";
import "./style.less";

const { TextArea } = Input;

const Detail = ({ visible, auditId, onCancel }) => {
  const { getDetail, detail, onAudit, getList } = store;
  const { typeList } = appStore;

  useEffect(() => {
    if (visible) {
      getDetail(auditId);
    }
  }, [visible, getDetail, auditId]);

  const onNestAudit = async (status) => {
    const result = await onAudit({
      id: auditId,
      status,
    });
    if (result.code === 0 && result.data) {
      message.success("审核成功并刷新");
      getDetail(result.data);
    }
  };

  const onCloseAudit = async (status) => {
    const result = await onAudit({
      id: auditId,
      status,
    });
    if (result.code === 0) {
      message.success("审核成功");
      onCancel();
      getList();
    }
  };

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      title={null}
      footer={null}
      width={800}
    >
      <div className="detail-title">{detail.title}</div>
      <div className="detail-ctime">
        {dayjs.unix(detail.ctime).format("YYYY-MM-DD HH:mm:ss")}
      </div>
      <TextArea value={detail.content} rows={20} showCount />
      <div>
        <Form style={{ marginTop: "10px" }}>
          <Form.Item label="类型" name="type" required>
            <Select
              options={typeList}
              mode="multiple"
              style={{ width: "200px" }}
            />
          </Form.Item>
          <Form.Item label="评分" name="score" required>
            <Rate />
          </Form.Item>
        </Form>
      </div>
      <div className="detail-op">
        <Button
          type="primary"
          danger
          onClick={() => {
            onCloseAudit(2);
          }}
        >
          拒绝并关闭
        </Button>
        <Button
          type="primary"
          danger
          style={{ marginLeft: "8px" }}
          onClick={() => {
            onNestAudit(2);
          }}
        >
          拒绝并继续审核下一遍
        </Button>
        <Button
          type="primary"
          style={{ margin: "0px 8px" }}
          onClick={() => {
            onCloseAudit(0);
          }}
        >
          通过并关闭
        </Button>
        <Button
          type="primary"
          onClick={() => {
            onNestAudit(0);
          }}
        >
          通过并继续审核下一遍
        </Button>
      </div>
    </Modal>
  );
};

export default observer(Detail);
