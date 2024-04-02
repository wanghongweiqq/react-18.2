/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-14 15:45:26
 * @Description:  demo视图3
 * @FilePath: /react-18.2/src/view/demo/view3.js
 */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function View3 () {
  const getLocation = useLocation()
  console.log('View3')
  console.log(getLocation)
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
    <div>
      <p>
        <Link to='/'>a2 to index</Link>
      </p>
    </div>
  )
}
export default View3
