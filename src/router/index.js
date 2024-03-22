/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-04 15:46:24
 * @Description: 路由总表
 * @FilePath: /react-c/src/router/index.js
 */

import common from "./routes/common.js";
import route1 from "./routes/route1.js";
import route2 from "./routes/route2.js";
import Layout from "../layout/index.js";

const routes = [
  {
    path: "/",
    name: '首页',
    element: <Layout />,
    children: [ ...common,...route1, ...route2,],
  },
];

export default routes;
