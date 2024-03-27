/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 路由说明
 * @FilePath: /react-18.2/src/view/doc/router.js
 */
import React from 'react'

function Router () {
  return (
    <div className='pg-doc'>
      <h1>react路由说明</h1>
      <h2>路由版本说明</h2>
      <table>
        <tr><td>时间</td><td>2024年03月14日</td></tr>
        <tr><td>react-router-dom</td><td>6.22.3</td></tr>
      </table>
      <h2>创建过程</h2>

      <table>
        <tr><td>1</td><td>在入口文件src/index.js创建路由入口，使用history路由<em>&lt;BrowserRouter /&gt;</em></td></tr>
        <tr><td>2</td><td>在BrowserRouter内引入过滤好的，使用方法<em>useRoutes()</em>初始话的路由文件，不支持异步方法内使用useRoutes（如接口请求后执行），路由文件使用普通数组格式</td></tr>
        <tr><td>3</td><td>在文件的公共部分通过<em>&lt;Outlet /&gt;</em>设置子路由的入口</td></tr>
        <tr><td>4</td><td>
          <p>路由格式如下：[ &#123; path, element, ... &#125;, ... ]</p>
          <table>
            <tr><td>path</td><td>String，路由的访问路径,两种形式：1：不以/开头，会自动根据路径逐层拼接，除了最外层的根目录可以用/开头，其他层级不用使用/开头，会导致路由匹配不上；2：以/开头，后面紧跟各父级的路径，这种写法会导致看起来路径比较长，但比较清晰</td></tr>
            <tr><td>element</td><td>JSX，挂载在该路由下的组件或页面</td></tr>
            <tr><td>index</td><td>Boolean，是否作为默认父级路由展示，同级有path属性时index不生效</td></tr>
            <tr><td>meta</td><td>Object，定义元数据，如标题、权限、是否展示在导航菜单中等</td></tr>
            <tr><td>children</td><td>Array，配置子路由，子路由格式同上</td></tr>
          </table>
        </td></tr>
        <tr><td></td><td></td></tr>
      </table>
    </div>
  )
}

export default Router

