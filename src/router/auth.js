/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-19 16:12:09
 * @Description: 鉴权
 * @FilePath: /react-c/src/router/auth.js
 */
import { useEffect } from 'react';
import ajax from "../service/";

function Auth(props) {
  async function init() {
    console.log("c");
    const a = await ajax.common.getUserInfo();
    console.log("a");
    console.log(a);
  }
  init();

  // useEffect(() => {
  //   init();
  // }, []);
  // ajax.common.getUserInfo().then((res) => {
  //   if (res.body) {
  //     console.log("Auth");
  //     console.log(res.body);
  //     return props.children;
  //   }
  // });
  console.log("b");

  return props.children;
}

export default Auth;
