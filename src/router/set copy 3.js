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

let platRoutes = []; //扁平化的路由，方便title设置
let userRightList = []; //用户权限列表

function SetRouter() {
  console.log("SetRouter");
  const location = useLocation();
  const [userRight, setUserRight] = useState([]);

  //获取用户信息和权限，只执行一次
  useEffect(() => {
    console.log("getUserInfo");
    // platRoutes = [];
    getUserInfo();
  }, []);

  //路由改变时执行，初始话时因为没有用户权限暂不执行，待接口返回用户权限后再执行filterTitle
  useEffect(() => {
    if (userRight && userRight.length > 0) {
      // setTitle();
      filterTitle(routes);
    }
  }, [location.pathname]);
  useEffect(() => {
    console.log("aaaaaaaaaa");
  }, [routes]);

  //用户权限改变时执行
  // useEffect(() => {
  //   console.log('用户权限改变时执行userRight')
  //   console.log(userRight)
  //   if (userRight && userRight.length > 0) {
  //     // platRoutes = [];
  //     // //对原始路由routes做权限过滤，接下来将作为useRoutes的入参
  //     // filterRouter(routes);
  //     // console.log("结果filterRouter");
  //     // console.log(routes);
  //     // // setTitle();
  //     // filterTitle(routes);
  //   }
  // }, [userRight]);

  function filterTitle(paramRoutes) {
    paramRoutes.forEach((item) => {
      if (item.path === location.pathname && item.meta) {
        document.title = item.meta.title;
      } else if (item.children && item.children.length > 0) {
        filterTitle(item.children);
      }
    });
  }

  // 过滤路由：1、直接操作routes处理没有权限的路由；2、把嵌套路由变为扁平路由，方便title设置
  function filterRouter(paramRoutes, parentPath) {
    console.log("filterRouter");
    console.log(paramRoutes);
    // if (userRight && userRight.length > 0) {
    paramRoutes.forEach((item) => {
      if (
        item.meta &&
        item.meta.auth &&
        item.meta.auth.length > 0 &&
        userRightList.indexOf(item.meta.auth) === -1
      ) {
        item.element = <Page403 />; //<Navigate to="/403" replace />
      }

      // let obj = {};
      if (item.path && /^\//.test(item.path) === false && parentPath) {
        const path = parentPath === "/" ? "" : "/";
        // obj.path = parentPath + path + item.path;
        item.path = parentPath + path + item.path;
      } else if (item.index) {
        item.path = parentPath;
      } else {
        //根目录路由“/”，或是以/开头的路由
        // obj.path = item.path;
      }

      if (item.children && item.children.length > 0) {
        filterRouter(item.children, item.path);
        // const childrenHaveIndex = item.children.some((child) => child.index);
        // if (childrenHaveIndex) return;
      }
      // obj.meta = item.meta;
      // platRoutes.push(obj);
      // console.log("platRoutes");
      // console.log(platRoutes);
    });
    // }
  }
  // function setTitle() {
  //   console.log("setTitle");
  //   console.log(platRoutes);
  //   console.log(location.pathname);
  //   const result = platRoutes.find((item) => item.path === location.pathname);
  //   if (result && result.meta && result.meta.title) {
  //     document.title = result.meta.title;
  //   }
  // }

  const getUserInfo = () => {
    ajax.common.getUserInfo().then((res) => {
      if (res.body) {
        if (res.body.empID) {
          getUserRight(res.body.empID);
        }
      }
    });
  };
  const getUserRight = (empID) => {
    ajax.common.getUserRight({ empID, systemKey: "MIS_PC" }).then((res) => {
      let temRightList = [];
      if (res.right) {
        for (const item of res.right) {
          if (item.rightList && item.rightList.length > 0) {
            for (const list of item.rightList) {
              temRightList.push(list.rightCode);
            }
          }
        }
      }
      setUserRight(temRightList);
      userRightList = temRightList;
      // platRoutes = [];
      //对原始路由routes做权限过滤，接下来将作为useRoutes的入参
      filterRouter(routes);
      console.log("结果filterRouter");
      console.log(routes);
      // setTitle();
      filterTitle(routes);
    });
  };
  // routes作为useRoutes的入参，通过useRoutes方法后，返回react路由主体
  const router = useRoutes(routes);

  console.log("render");
  if (userRight.length > 0) {
    return router;
  } else {
    return <div>Loading...</div>;
  }
}

export default SetRouter;
