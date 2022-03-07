import Create from "@src/pages/create";
import List from "@src/pages/list";

const config = [
  {
    path: "/list",
    Component: List,
  },
  {
    path: "/create",
    Component: Create,
  },
  {
    from: "/",
    to: "list",
  },
];

export default config;
