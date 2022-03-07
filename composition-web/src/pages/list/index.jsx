import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import List from "@src/components/list";

const Index = () => {
  const history = useHistory();
  return (
    <div>
      <div style={{ textAlign: "center", margin: "10px 0px" }}>
        <Button
          type="primary"
          size="large"
          onClick={() => {
            history.push("/create");
          }}
        >
          我要投稿
        </Button>
      </div>
      <List />
    </div>
  );
};

export default Index;
