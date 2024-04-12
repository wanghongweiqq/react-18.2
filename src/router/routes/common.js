/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-14 15:39:48
 * @Description: 页面/组件/功能的描述
 * @FilePath: /react-18.2/src/router/routes/common.js
 */
import React from 'react'
import Page403 from '@/view/common/403.js'
import Page404 from '@/view/common/404.js'

const common = [
  {
    path: '403',
    element: <Page403 />,
    meta: { title: '403' },
  },
  {
    path: '*',
    element: <Page404 />,
    meta: { title: '404' },
  },
]

export default common
