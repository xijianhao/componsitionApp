import App from "@src/App";
import Login from "@src/pages/login/index";

const config = [
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/",
    exact: false,
    Component: App,
  },
];

export default config;
