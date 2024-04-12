/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-14 15:39:48
 * @Description: 页面/组件/功能的描述
 * @FilePath: /react-18.2/src/router/routes/route1.js
 */
import React from 'react'
import View1 from '@/view/Demo/View1.js'

const route1 = [
  {
    index: true,
    // path: "/",
    element: <View1 />,
    meta: { title: '首页' },
  },
]

export default route1
