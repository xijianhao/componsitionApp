import React from "react";
import { observer } from "mobx-react-lite";
import Header from "@src/components/header";
import { getRoutes } from "@src/utils/routes";
import contentList from "@src/config/content-router";

const App = () => {
  return (
    <div className="app">
      <Header />
      {getRoutes(contentList)}
    </div>
  );
};

export default observer(App);
