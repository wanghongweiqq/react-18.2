/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-14 15:45:26
 * @Description:  demo视图3
 * @FilePath: /react-18.2/src/view/Demo/View3.js
 */
import React, { useState, useEffect } from 'react'
import { Link, useLocation, useParams, Outlet } from 'react-router-dom'

function View3 () {
  const getLocation = useLocation()
  console.log('View3')
  console.log(getLocation)
  console.log(JSON.stringify(getLocation.state))
  console.log(useParams())

  useEffect(() => {
    console.log('View3 useEffect')
  }, [ ])

  // 触发：
  // navigate("/a/a2", { state: { x: 1 } });
  // 获取：
  //   {
  //     "pathname": "/a/a2",
  //     "search": "",
  //     "hash": "",
  //     "state": {
  //         "x": 1
  //     },
  //     "key": "7xo9r0xm"
  // }
  return (
    <div className='pg-doc'>
      <p>
        <Link to='/'>a2 to index</Link>
      </p>
      <Outlet />
    </div>
  )
}
export default View3
