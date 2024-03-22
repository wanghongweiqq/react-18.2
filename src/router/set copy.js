/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-04 15:46:24
 * @Description: 页面/组件/功能的描述
 * @FilePath: /react-c/src/router/set.js
 */
import { useRoutes, Navigate } from "react-router-dom";
import routes from "./index.js";
import Page403 from "../view/common/403.js";
import ajax, { getUserInfo } from "../service/apis/common.js";

// 已获取的权限列表
const autuList = ["a", "a1"];

function filterRouter(routes) {
  // console.log("routes");
  // console.log(routes);
  routes.forEach((item) => {
    // console.log("item");
    // console.log(item);
    if (item.meta && item.meta.auth && item.meta.auth.length > 0) {
      const authOk = autuList.some((auth) => {
        return auth === item.meta.auth;
      });
      if (!authOk) {
        item.element = <Page403 />;
      }
    }

    if (item.children && item.children.length > 0) {
      filterRouter(item.children);
    }
  });
  return routes;
}

function SetRouter() {
  const filterRoutes = filterRouter(routes);
  const router = useRoutes(filterRoutes);
  // ajax.getUserInfo().then((res) => {
  //   if (res.body) {
  //     // console.log("res.body");
  //     // console.log(res.body);
  //   }
  // });
  return router;
}

export default SetRouter;
