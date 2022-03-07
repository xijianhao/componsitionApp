import React, { useEffect, useState } from "react";
import { Table, Button, message } from "antd";
import { observer } from "mobx-react-lite";
import store from "./store";
import Detail from "./detail";
import "./style.less";
import dayjs from "dayjs";

const Index = () => {
  const { list, selectKeys, getList, onAudit } = store;
  const [visible, setVisible] = useState(false);
  const [auditId, setAuditId] = useState(0);
  useEffect(() => {
    getList();
  }, [getList]);

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      width: "10%",
    },
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
      width: "15%",
      render: (text, record) => {
        return (
          <Button
            type="link"
            onClick={() => {
              setAuditId(record.id);
              setVisible(true);
            }}
          >
            {text}
          </Button>
        );
      },
    },
    {
      title: "文章内容",
      dataIndex: "content",
      key: "content",
      width: "30%",
      render: (text) => <span className="audit-content">{text}</span>,
    },
    {
      title: "创建时间",
      dataIndex: "ctime",
      key: "ctime",
      render: (text) => (
        <span>{dayjs.unix(text).format("YYYY年MM月DD日 HH:mm:ss")}</span>
      ),
    },
    {
      title: "操作",
      dataIndex: "op",
      key: "op",
      render: (text, record) => (
        <div>
          <Button
            type="primary"
            size="small"
            style={{ marginRight: "6px" }}
            onClick={() => {
              onInnerAudit(record.id, 0);
            }}
          >
            通过
          </Button>
          <Button
            type="primary"
            danger
            size="small"
            onClick={() => {
              onInnerAudit(record.id, 2);
            }}
          >
            拒绝
          </Button>
        </div>
      ),
    },
  ];

  const onInnerAudit = async (id, status) => {
    const result = await onAudit({
      id,
      status,
    });
    if (result.code === 0) {
      message.success("审核成功");
      getList();
    }
  };

  return (
    <div>
      <Detail
        visible={visible}
        auditId={auditId}
        onCancel={() => {
          setVisible(false);
        }}
      />
      <div className="audit-op">
        <Button
          type="primary"
          style={{ marginRight: "10px" }}
          onClick={() => {
            onInnerAudit(selectKeys, 0);
          }}
        >
          批量通过
        </Button>
        <Button
          type="primary"
          danger
          onClick={() => {
            onInnerAudit(selectKeys, 2);
          }}
        >
          批量拒绝
        </Button>
      </div>
      <Table
        dataSource={list}
        rowKey="id"
        columns={columns}
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys) => {
            console.log(selectedRowKeys, "selectedRowKeys");
            store.selectKeys = selectedRowKeys;
          },
        }}
      />
    </div>
  );
};

export default observer(Index);
