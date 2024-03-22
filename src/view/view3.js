/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-14 15:45:26
 * @Description: 页面/组件/功能的描述
 * @FilePath: /react-c/src/view/view3.js
 */

import { Link, useLocation } from "react-router-dom";

function View3() {
  const getLocation = useLocation();
  console.log("View3");
  console.log(getLocation);
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
        <Link to="/">a2 to index</Link>
      </p>
    </div>
  );
}
export default View3;
