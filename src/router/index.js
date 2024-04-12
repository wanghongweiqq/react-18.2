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
import route1 from './routes/route1'
import route2 from './routes/route2'
import Layout from '../layout'

const routes = [
  {
    path: '/',
    name: '首页',
    element: <Layout />,
    children: [ ...common, ...doc, ...route1, ...route2 ],
  },
]

export default routes
