/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 路由说明
 * @FilePath: /react-18.2/src/view/Doc/Router.js
 */
import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { paramsToSearch } from '@/utils'

function Router () {
  const navigate = useNavigate()

  return (
    <div className='pg-doc'>
      <h1>react路由说明</h1>

      <h2>安装依赖</h2>
      <pre>npm install react-router-dom --save</pre>
      <table>
        <tbody>
          <tr><td>时间</td><td>2024年03月14日</td></tr>
          <tr><td>react-router-dom</td><td>6.22.3</td></tr>
        </tbody>
      </table>

      <h2>创建过程</h2>
      <table>
        <tbody>
          <tr><td width='50'>步骤 1</td><td>在入口文件src/index.js创建路由入口，使用history路由<em>&lt;BrowserRouter /&gt;</em></td></tr>
          <tr><td>步骤 2</td><td>在BrowserRouter内引入过滤好的，使用方法<em>useRoutes()</em>初始话的路由文件，不支持异步方法内使用useRoutes（如接口请求后执行），路由文件使用普通数组格式</td></tr>
          <tr><td>步骤 3</td><td>在文件的公共部分通过<em>&lt;Outlet /&gt;</em>设置子路由的入口</td></tr>
          <tr><td>步骤 4</td><td>
            <p>路由格式如下：[ &#123; path, element, ... &#125;, ... ]</p>
            <table>
              <tbody>
                <tr><td width='60'>path</td><td>String，路由的访问路径,两种形式：1：不以/开头，会自动根据路径逐层拼接，除了最外层的根目录可以用/开头，其他层级不用使用/开头，会导致路由匹配不上；2：以/开头，后面紧跟各父级的路径，这种写法会导致看起来路径比较长，但比较清晰</td></tr>
                <tr><td>element</td><td>JSX，挂载在该路由下的组件或页面</td></tr>
                <tr><td>index</td><td>Boolean，是否作为默认父级路由展示，同级有path属性时index不生效</td></tr>
                <tr><td>meta</td><td>Object，定义元数据，如标题、权限、是否展示在导航菜单中等</td></tr>
                <tr><td>children</td><td>Array，配置子路由，子路由格式同上</td></tr>
              </tbody>
            </table>
          </td></tr>
        </tbody>
      </table>

      <h2>路由跳转</h2>
      <h3>跳转形式：标签跳转（声明式跳转）和 编程式跳转</h3>
      <table>
        <thead>
          <tr>
            <th width='100'>形式</th>
            <th>跳转</th>
            <th>解析</th>
            <th>示例</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={2} width='70'>标签跳转</td>
            <td>&lt;a&gt;</td>
            <td>
              <p><em>不推荐，</em>a标签作为一种网络连接，会重新请求网页，导致页面刷新，所有资源包括js、接口等会重新加载，导致显示慢，性能低</p>
              <p><img alt='a标签跳转' src={require('@/assets/images/doc/router-a.png')} /></p>
            </td>
            <td>
              <a
                href='/demo/navigate?id=1'
                title='a标签跳转'
              >a标签跳转</a>
            </td>
          </tr>
          <tr>
            <td>&lt;Link&gt;</td>
            <td>
              <p><em>推荐，</em>Link标签只是用DOM操作将页面中的标签切换，通过网址来切换组件。该支持的参数都支持，只是样式有些单一，文字跳转比较合适</p>
              <pre>import &#123; Link &#125; from &#39;react-router-dom&#39;</pre>
              <p><img alt='Link标签跳转' src={require('@/assets/images/doc/router-link.png')} /></p>
            </td>
            <td>
              <Link
                to='/demo/navigate?id=1'
                state={{ x: 1, y: 2 }}
                replace
                title='state参数-Link标签跳转'
              >state参数-Link标签跳转</Link>
            </td>
          </tr>
          <tr>
            <td>编程式跳转</td>
            <td>useNavigate()</td>
            <td>
              <p><em>推荐，</em>支持丰富的参数</p>
              <pre>import &#123; useNavigate &#125; from &#39;react-router-dom&#39;</pre>
              <pre>const navigate = useNavigate()</pre>
              <p><img alt='useNavigate方法跳转' src={require('@/assets/images/doc/router-navigate.png')} /></p>
              <pre>如果需要实现goBack，go等语法，也可直接在 navigate的url中传层级参数：-1、1等</pre>
            </td>
            <td>
              <button onClick={() => {
                navigate('/demo/navigate?id=1', // url支持层级参数: 前一级:-1、后一级:1、后两级:2
                  { // 除了Link能使用的state、replace属性外，其他属性都无法传递
                    state: { x: 1, y: 2 },
                    replace: false,
                    search: { a: 3 }, // 无法传递
                    hash: 4, // 无法传递
                  })
              }}>useNavigate方法跳转</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>传参形式：search、state、params</h3>
      <table>
        <thead>
          <tr>
            <th width='5%'>形式</th>
            <th width='40%'>跳转</th>
            <th width='45%'>解析</th>
            <th width='10%'>示例</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={3}>search</td>
            <td rowSpan={3}>
              <p>直接拼接在url后面，可以自行写一个拼接的工具类方法：paramsToSearch</p>
              <p><img alt='search传参跳转' src={require('@/assets/images/doc/navigate-search.png')} /></p>
            </td>
            <td>方式1：推荐，使用工具类方法：searchToParams，解析出具体的参数对象，如果属性比较多，可以对该对象解构赋值</td>

            <td rowSpan={3}>
              <button onClick={() => {
                const params = { id: 1, num: 2 }
                navigate(`/demo/navigate${ paramsToSearch(params) }`)
              }}>search传参跳转</button>
            </td>
          </tr>
          <tr>
            <td>方式2：不推荐，useLocation() 可以直接解构出search、state等参数，但search是?开头的字符串格式，还需要使用方式1/方式3再解析</td>
          </tr>
          <tr>
            <td>
              <p>方式3：不推荐，useSearchParams() 也可用来解析search参数，但使用复杂，而且只能逐个获取，有些笨重</p>
              <pre>const [ searchParams, setSearchParams ] = useSearchParams() //setSearchParams可以不写</pre>
              <pre>const id = searchParams.get(&#39;id&#39;)</pre>
            </td>
          </tr>
          <tr>
            <td>state</td>
            <td>
              <p>state传参的数据会存到缓存中（类似于sessionStorage），并不是像search/params传参拼接到url后面，隐式传参，传参于无形中，刷新/强刷当前页面state参数不会丢失（这点比vue的params强），复制链接到新tab下或其他人用此链接时，state参数会丢失，慎重选择此形式</p>
              <p><img alt='search传参跳转' src={require('@/assets/images/doc/navigate-state.png')} /></p>
            </td>
            <td>
              <p>使用useLocation()解构赋值获取参数，const &#123; state : &#123; x, y &#125; &#125; = useLocation()</p>
              <p>这样解构时没有state变量，只有x和y，如果需要state，可以这样：const &#123;  state, state：&#123; x, y &#125; &#125; = useLocation()</p>
            </td>
            <td>
              <button onClick={() => {
                navigate('/demo/navigate', { state: { x: 1, y: 2 } })
              }}>state传参跳转</button>
            </td>
          </tr>
          <tr>
            <td>params</td>
            <td>
              <p>params传参也叫动态路由传参，参数放在网址中，放在passname中</p>
              <p><img alt='search传参跳转' src={require('@/assets/images/doc/navigate-params.png')} /></p>
            </td>
            <td>
              <p>使用useParams()解构赋值获取参数，const &#123; id, cd &#125; = useParams() // &#123; id: &#39;3&#39;, cd: &#39;4&#39; &#125;</p>
              <p>路由信息：<img alt='动态路由的设置' src={require('@/assets/images/doc/router-params.png')} /></p>
            </td>
            <td>
              <button onClick={() => {
                navigate('/demo/b2/c3/3/4')
              }}>params传参</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Router

