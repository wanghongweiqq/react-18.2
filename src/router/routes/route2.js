/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-14 15:39:48
 * @Description: 页面/组件/功能的描述
 * @FilePath: /react-c/src/router/routes/route2.js
 */
import { Outlet } from "react-router-dom";
import View2 from "../../view/view2.js";
import View3 from "../../view/view3.js";

const route2 = [
  {
    path: "a",
    // element: (
    //   <div>
    //     <h2>a的layout</h2>
    //     <Outlet />
    //   </div>
    // ),
    meta: {
      title: "a标题",
      // auth: "a",
    },
    children: [
      {
        index: true,
        // path: "a1",
        element: <View2 />,
        meta: {
          title: "a1标题",
          auth: "aaddhllWorkOrder.gongdanmoban.templateManage",
        },
      },
      {
        path: "a2",
        element: <View3 />,
        meta: {
          title: "a2标题",
          auth: "hllWorkOrder.gongdanzhongxin.workOrderTrigger",
        },
        children: [
          {
            // index: true,
            path: "a3",
            element: <View3 />,
            meta: {
              title: "a3标题",
            },
          },
        ],
      },
    ],
  },
];

export default route2;
