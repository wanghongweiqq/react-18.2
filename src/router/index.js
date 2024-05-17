/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-04 15:46:24
 * @Description: 路由总表
 * @FilePath: /react-18.2/src/router/index.js
 */
import React from 'react'
import common from './routes/common'
import doc from './routes/doc'
import home from './routes/home'
import demo from './routes/demo'
import Layout from '../layout'

const routes = [
  {
    path: '/',
    name: '首页',
    element: <Layout />,
    children: [
      ...common,
      home,
      doc,
      demo,
    ],
  },
]

export default routes
