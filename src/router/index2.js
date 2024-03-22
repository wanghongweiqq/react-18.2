/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-04 15:46:24
 * @Description: 页面/组件/功能的描述
 * @FilePath: /react-c/src/router/index.js
 */
import { useEffect } from "react";

import {
  createBrowserRouter,
  Link,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import { Route1, Route2 } from "./routes/route1.js";

function usePageViews() {
  const location = useLocation();
  console.log("usePageViews");
  useEffect(() => {
    const { key } = location;
    if (key) {
      console.log("watchLocation");
      console.log(location);
    }
  }, [location.key]);
  //   let location = useLocation();
  //   React.useEffect(() => {
  //     console.log("watchLocation");
  //     console.log(location);
  //   });
}

function Check(prop) {
  usePageViews();
  const isLogin = true;
  console.log(1111);
  console.log(prop);
  //   return setTimeout(() => {
  //     console.log("setTimeout");

  if (isLogin) {
    return (
      <div>
        <p>首页layout</p>
        <Outlet />
      </div>
    );
  } else {
    return <Navigate to="/403" replace />;
  }
  //   }, 4000);
}

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Check />,
    children: [
        ...Route1,
        ...Route2,
    //   {
    //     index: true,
    //     // path: "index",
    //     element: (
    //       <div>
    //         <h1>Hello World</h1>
    //         <Link to="/a/a1">go to a1</Link>
    //         <button
    //           onClick={() => {
    //             //   useNavigate()("/a/a2");
    //           }}
    //         >
    //           go to a2
    //         </button>
    //       </div>
    //     ),
    //   },
    //   {
    //     path: "a",
    //     element: (
    //       <div>
    //         <h2>a的layout</h2>
    //         <Outlet />
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "a1",
    //         element: (
    //           <div>
    //             <p>
    //               <Link to="/403" replace>
    //                 403
    //               </Link>
    //             </p>
    //             <p>
    //               <Link to="/">a1 to index</Link>
    //             </p>
    //           </div>
    //         ),
    //       },
    //       {
    //         path: "a2",
    //         element: <Link to="/">a2 to index</Link>,
    //       },
    //     ],
    //   },
    //   {
    //     path: "d",
    //     element: (
    //       <div>
    //         <h1>d</h1>
    //         <Link to="/a/a2">go to a2</Link>
    //       </div>
    //     ),
    //   },
    ],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
  {
    path: "403",
    element: <div>403</div>,
  },
]);

export default routes;
