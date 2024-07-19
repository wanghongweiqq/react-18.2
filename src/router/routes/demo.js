/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-14 15:39:48
 * @Description: 页面/组件/功能的描述
 * @FilePath: /react-18.2/src/router/routes/demo.js
 */
import { Outlet } from 'react-router-dom'
import Navigate from '@/view/Demo/Navigate.js'
import View2 from '@/view/Demo/View2.js'
import View3 from '@/view/Demo/View3.js'

import React from 'react'
const route2 = {
  path: 'demo',
  element: (
    <div>
      <h2>demo的layout</h2>
      <Outlet />
    </div>
  ),
  meta: {
    title: 'demo标题',
    // auth: '没有权限啊',
  },
  children: [
    {
      path: 'navigate',
      element: <Navigate />,
      meta: { title: 'Navigate' },
    },
    {
      path: 'b1',
      element: <View2 />,
      meta: { title: 'b1标题' },
      children: [
        {
          path: 'c1',
          element: <View3 />,
          meta: {
            title: 'c1标题',
            auth: 'hllWorkOrder.gongdanmoban.templateManage',
          },
        },
        {
          path: 'c2',
          element: <View3 />,
          meta: {
            title: 'c2标题',
            auth: 'xxxxhllWorkOrder.gongdanmoban.templateManage',
          },
        },
      ],
    },
    {
      path: 'b2',
      element: <View2 />,
      meta: {
        title: 'b2标题',
        // auth: 'hllWorkOrder.gongdanzhongxin.workOrderTrigger',
      },
      children: [
        {
          // path: ':id/:cd',
          path: 'c3/:id/:cd',
          element: <View3 />,
          meta: { title: '动态路由标题' },
        },
        {
          path: 'c3/4',
          element: <View3 />,
          meta: { title: '普通路由标题' },
        },
      ],
    },
  ],
}

export default route2
