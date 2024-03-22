/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-04 15:46:24
 * @Description: 路由初始话设置，1、路由拦截；2、浏览器Title的设置
 * @FilePath: /react-c/src/router/set.js
 */

import React, { useState, useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import routes from "./index.js";
import Page403 from "../view/common/403.js";
import ajax from "../service/";

let userRightList = []; //用户权限列表

function SetRouter() {
  console.log("SetRouter");
  const location = useLocation();
  const [userRight, setUserRight] = useState([]);

  //获取用户信息和权限，只执行一次
  useEffect(() => {
    console.log("getUserInfo");
    getUserInfo();
  }, []);

  //路由改变时执行设置页面title，为了减少方法filterRouter调用次数，初始话时因为没有用户权限暂不执行，待接口返回用户权限后先执行filterRouter生产绝对路径的path后再执行filterTitle
  useEffect(() => {
    if (userRight && userRight.length > 0) {
      filterTitle(routes);
    }
  }, [location.pathname]);
  useEffect(() => {
    console.log("aaaaaaaaaa");
  }, [routes]);

  function filterTitle(paramRoutes) {
    paramRoutes.forEach((item) => {
      if (item.path === location.pathname && item.meta && item.meta.title) {
        if (item.children && item.children.length > 0) { //当item的子集有设置index=true时，过滤掉当前item，获取子集的title
          const childrenHaveIndex = item.children.some((child) => child.index);
          if (childrenHaveIndex) return;
        }
        document.title = item.meta.title;
      } else if (item.children && item.children.length > 0) {
        filterTitle(item.children);
      }
    });
  }

  // 过滤路由：1、直接操作routes处理没有权限的路由；2、把路由path属性统一改为绝对路径
  function filterRouter(paramRoutes, parentPath) {
    console.log("filterRouter");
    console.log(paramRoutes);
    paramRoutes.forEach((item) => {
      if (
        item.meta &&
        item.meta.auth &&
        item.meta.auth.length > 0 &&
        userRightList.indexOf(item.meta.auth) === -1
      ) {
        item.element = <Page403 />; //<Navigate to="/403" replace />
      }

      if (item.path && /^\//.test(item.path) === false && parentPath) {
        const path = parentPath === "/" ? "" : "/";
        item.path = parentPath + path + item.path;
      } else if (item.index) {
        item.path = parentPath;
      }
      if (item.children && item.children.length > 0) {
        filterRouter(item.children, item.path);
      }
    });
  }

  // 获取用户信息
  const getUserInfo = () => {
    ajax.common.getUserInfo().then((res) => {
      if (res.body) {
        if (res.body.empID) {
          getUserRight(res.body.empID);
        }
      }
    });
  };

  // 获取用户权限
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
      //对原始路由routes做权限过滤，接下来将作为useRoutes的入参
      filterRouter(routes);
      console.log("结果filterRouter");
      console.log(routes);
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
