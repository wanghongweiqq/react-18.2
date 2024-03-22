/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-14 15:45:26
 * @Description: 页面/组件/功能的描述
 * @FilePath: /react-c/src/view/common/403.js
 */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Page403() {
  console.log("Page403");
  console.log(window.location.href);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("window.location.href");
    // navigate("/a/a1");
    // window.location.href="/403"
  }, [window.location.href]);
  const handleClick = () => {
    // navigate("/"); // push
    navigate(-1); // 重定向
  };

  return (
    <div>
      <h2>页面没有访问权限</h2>
      <button onClick={handleClick}>返回上一页</button>
    </div>
  );
}
export default Page403;
