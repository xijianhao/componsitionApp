import React, { useEffect } from "react";
import appStore from "@src/stores/app";
import { observer } from "mobx-react-lite";
import dayjs from "dayjs";
import "./style.less";

const Index = () => {
  const { list, getList } = appStore;

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <div className="list">
      {list.map((item) => {
        return (
          <div className="list-card" key={item.id}>
            <div className="list-card-header">
              <div className="list-card-title">《{item.title}》</div>
              <div className="list-card-info">
                <div className="list-card-author">{item.author}</div>
                <div className="list-card-ctime">
                  创建时间：
                  {dayjs.unix(item.ctime).format("YYYY年MM月DD日 HH:mm:ss")}
                </div>
              </div>
            </div>
            <div className="list-card-content">{item.content}</div>
          </div>
        );
      })}
    </div>
  );
};
export default observer(Index);
