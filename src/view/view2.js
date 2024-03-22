/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-14 15:45:26
 * @Description: 页面/组件/功能的描述
 * @FilePath: /react-c/src/view/view2.js
 */

import { useNavigate, Link } from "react-router-dom";

function View2() {
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate("/"); // push
    navigate("/", { replace: true }); // 重定向
  };

  return (
    <div>
      <p>
        <Link to="/403" replace>
          replace形式跳转到403
        </Link>
      </p>
      <p>
        <Link to="/">a1 to index</Link>
      </p>
      <button onClick={handleClick}>返回首页</button>
    </div>
  );
}
export default View2;
