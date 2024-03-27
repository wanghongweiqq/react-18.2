/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-15 10:42:38
 * @Description: 页面/组件/功能的描述
 * @FilePath: /react-18.2/src/layout/index.js
 */
import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout (prop) {
  console.log('Layout')
  console.log(prop)
  return (
    <div className='wrapper'>
      <p>首页layout</p>
      <Outlet />
    </div>
  )
}
export default Layout
