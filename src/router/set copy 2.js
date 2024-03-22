/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-04 15:46:24
 * @Description: 页面/组件/功能的描述
 * @FilePath: /react-c/src/router/set.js
 */

import React, { useState, useEffect } from "react";
import { useRoutes, useLocation, useMatch, Navigate } from "react-router-dom";
import routes from "./index.js";
import Page403 from "../view/common/403.js";
import ajax from "../service/";

// 过滤路由，处理没有权限的路由
function filterRouter(routes, userRight) {
  console.log("filterRouter");
  console.log(routes);
  if (userRight && userRight.length > 0) {
    routes.forEach((item) => {
      if (
        item.meta &&
        item.meta.auth &&
        item.meta.auth.length > 0 &&
        userRight.indexOf(item.meta.auth) === -1
      ) {
        item.element = <Page403 />; //<Navigate to="/403" replace />
      }
      if (item.children && item.children.length > 0) {
        filterRouter(item.children, userRight);
      }
    });
  }
  return routes;
}
let resetList = [];
function resetRouter(route, parentPath) {
  route.forEach((item) => {
    let obj = {};

    if (item.path && /^\//.test(item.path) === false && parentPath) {
      const path = parentPath === "/" ? "" : "/";
      obj.path = parentPath + path + item.path;
    } else if (item.index) {
      obj.path = parentPath;
    } else {
      //根目录路由“/”，或是以/开头的路由
      obj.path = item.path;
    }

    if (item.children && item.children.length > 0) {
      resetRouter(item.children, obj.path);
      const childrenHaveIndex = item.children.some((child) => child.index);
      if (childrenHaveIndex) return;
    }
    obj.meta = item.meta;
    resetList.push(obj);
  });
}
function setTitle(pathname) {
  resetList = [];
  resetRouter(routes);
  const result = resetList.find((item) => item.path === pathname);
  console.log("resetList");
  console.log(resetList);
  console.log(result);
  if (result.meta && result.meta.title) {
    document.title = result.meta.title;
  }
  // routes.forEach((item) => {
  //   if (item.path && /^\//.test(item.path) === false) {
  //   }
  // });
}

function SetRouter() {
  console.log("SetRouter");
  const location = useLocation();
  console.log(location);
  console.log(useMatch(location.pathname));
  const [userRight, setUserRight] = useState([]);

  //获取用户信息和权限，只执行一次
  useEffect(() => {
    console.log("getUserInfo");
    getUserInfo();
  }, []);

  //路由改变时执行
  useEffect(() => {
    setTitle(location.pathname);
  }, [location.pathname]);

  const getUserInfo = () => {
    ajax.common.getUserInfo().then((res) => {
      console.log("getUserInfo");
      console.log(res);
      if (res.body) {
        // setUserInfo(res.body);
        if (res.body.empID) {
          getUserRight(res.body.empID);
        }
      }
    });
  };
  const getUserRight = (empID) => {
    ajax.common.getUserRight({ empID, systemKey: "MIS_PC" }).then((res) => {
      console.log("权限接口返回");
      let rightList = [];
      if (res.right) {
        for (const item of res.right) {
          if (item.rightList && item.rightList.length > 0) {
            for (const list of item.rightList) {
              rightList.push(list.rightCode);
            }
          }
        }
      }
      setUserRight(rightList);
      console.log("rightList");
      // console.log(rightList);
    });
  };
  //经过权限过滤后的路由，作为useRoutes的入参
  const filterRoutes = filterRouter(routes, userRight);
  // 通过useRoutes方法后，返回的路由主体
  const router = useRoutes(filterRoutes);
  console.log("router");
  console.log(router);

  console.log("render");
  if (userRight.length > 0) {
    return router;
  } else {
    return <div>Loading...</div>;
  }
}

export default SetRouter;
