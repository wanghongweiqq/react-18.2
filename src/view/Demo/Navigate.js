/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-14 15:45:26
 * @Description: 路由跳转示例
 * @FilePath: /react-18.2/src/view/Demo/Navigate.js
 */
import React, { useState, useEffect } from 'react'
import { Link, useLocation, useParams, useSearchParams, useResolvedPath } from 'react-router-dom'

function Navigate () {
  console.log('Navigate')
  const { state, search } = useLocation()
  const [ searchParams, setSearchParams ] = useSearchParams()
  console.log(useLocation())
  console.log('useLocation-state:', state)
  console.log('useLocation-search:', search)

  console.log('useResolvedPath("user?id=1&name=tom#sex"):', useResolvedPath('/user?id=001&name=tom#sex'))

  function demoUseSearchParams () {
    console.log('demoUseSearchParams')
    console.log(searchParams)
    console.log('has("id"):', searchParams.has('id')) // 判断是否含有某个属性，返回true/false
    console.log('get("id"):', searchParams.get('id')) // 必须有入参，只取第一个匹配到的属性值，返回一个字符串，如：'1'
    console.log('getAll("id"):', searchParams.getAll('id')) // 必须有入参，取所有匹配到的属性值，返回一个数组，如：['1','2']
    searchParams.append('id', 'append') // append只在末尾添加该属性，不管前面有没有重复的
    // searchParams.delete('id') // 删除全部该属性
    // searchParams.set('id', 'set') // set会清除原有的该属性值，如果有该属性就末尾自动添加该属性
    searchParams.set('score', 100) // score属性原来没有，直接添加到当前的最后一个
    console.log('toString:', searchParams.toString())// 没有?的search字符串，属性值不会去重，如：id=1&sex=male&id=2
    // searchParams.sort() // 使用 sort() 排序，按照键值升序
    // console.log(searchParams.toString())

    // 以下3种方法可以将search的字符串转化为对象的键值对格式
    // searchParams.forEach((value, key) => {
    // for (const [ key, value ] of searchParams.entries())
    // for (const [ key, value ] of searchParams)

    // 第1种：使用forEach(value, key) 函数迭代遍历searchParams中的参数，params赋值时，重复属性会被覆盖以最后一个为准
    // es6 forEach，只能用于数组， arrXXX.forEach((value, index, arr) => {})
    let params1 = {}
    searchParams.forEach((value, key) => {
      params1[key] = value
      // console.log(key, ':', value)
    })
    console.log('forEach:', params1)

    // 第2种：使用for of searchParams.entries()函数迭代遍历searchParams中的参数[ key, value ]，params赋值时，重复属性会被覆盖以最后一个为准
    const params2 = {}
    for (const [ key, value ] of searchParams.entries()) {
      params2[key] = value
    }
    console.log('entries:', params2)

    // 第3种：使用for of searchParams函数迭代遍历searchParams中的参数[ key, value ]，params赋值时，重复属性会被覆盖以最后一个为准
    const params3 = {}
    for (const [ key, value ] of searchParams) {
      params3[key] = value
    }
    console.log('循环本体:', params3)

    // 使用keys()和values()函数迭代分别遍历searchParams中的键和值
    for(const key of searchParams.keys()) {
      console.log('key:', key)
    }

    for(const value of searchParams.values()) {
      console.log('value:', value)
    }
  }

  function demoURLSearchParams () {
    console.log('demoURLSearchParams')
    let url = new URL(window.location.href)
    let params = new URLSearchParams(url.search) // URLSearchParams的参数也可以使用window.location.search
    console.log(url.search)
    console.log(params)
    console.log(params.get('id'))
    // for of params/params.entries() 输出同样的结果
    for (const [ key, value ] of params) {
      console.log(key, value)
    }
    for (const [ key, value ] of params.entries()) {
      console.log(key, value)
    }
  }

  function demoUseResolvedPath () {
    console.log('useResolvedPath 不能在内部定义的方法内使用，必须在最外层使用')
  }
  useEffect(() => {
    console.log('Navigate useEffect')
    // demoUseSearchParams()
    // demoURLSearchParams()
    // demoUseResolvedPath()
  }, [ ])

  // 触发：const navigate = useNavigate()、Link
  // <Link to='/demo/navigate?id=1' state={{ x: 1, y: 2 }} replace>
  // navigate("/demo/navigate?id=1", { state: { x: 1, y: 2 } });
  // 获取：const { state, search } = useLocation()
  //   {
  //     "pathname": "/demo/navigate",
  //     "search": "?id=1",
  //     "hash": "",
  //     "state": {
  //         x: 1,
  //         y: 2,
  //     },
  //     "key": "7xo9r0xm"
  // }

  return (
    <div className='pg-doc'>
      <p>
        <Link to='/'>返回首页</Link>
      </p>
      <h2>普通跳转传参</h2>
      <p>触发：const navigate = useNavigate()、Link</p>
      <p><Link to='/demo/navigate?id=1' state={{ x: 1, y: 2 }} replace /></p>
      <pre>navigate(&#39;/demo/navigate?id=1&#39;, &#123; </pre>
      <pre>  state: &#123; x: 1, y: 2 &#125;</pre>
      <pre>&#125;)</pre>
      <p>获取：const &#123; state, search &#125; = useLocation()</p>
      <pre>&#123;</pre>
      <pre>  pathname: &#39;/demo/navigate&#39;,</pre>
      <pre>  search: &#39;?id=1&#39;,</pre>
      <pre>  hash: &#39;&#39;,</pre>
      <pre>  state: &#123;</pre>
      <pre>    x: 1,</pre>
      <pre>    y: 2,</pre>
      <pre>  &#125;,</pre>
      <pre>  key: &#39;7xo9r0xm&#39;</pre>
      <pre>&#125;</pre>

      <h2>useSearchParams</h2>
      <p>[ searchParams, setSearchParams ] = useSearchParams( ) </p>
      <p>除了searchParams中有一些实用的方法，如获取search参数的方法 get( )，实际也没啥实际意义，<em>还不如自己封装跳路由、解析路由search的方法</em></p>
      <p>setSearchParams方法没啥实际意义，不能跳转到其他路由，只会在当前路由中改变search参数，这样只会触发重新render，不会执行useEffect等方法</p>
      <button onClick={() => {
        const params = {
          english: 100,
          history: 99,
        }
        setSearchParams(params)
      }} >
          setSearchParams改写路由search参数
      </button>

      <h2>useResolvedPath(xxx)</h2>
      <p>给定一个URL值或&#39;.&#39;（当前）或&#39;..&#39;（url路径的上一级），解析其中的path、search、hash值</p>
      <p>例如：xxx=&#39;/user?id=1&name=tom#sex&#39;</p>
      <p>解析后如下：</p>
      <div>
        <pre>&#123;</pre>
        <pre>  pathname: &#39;/user&#39;,</pre>
        <pre>  search: &#39;?id=1&name=tom&#39;,</pre>
        <pre>  hash: &#39;#sex&#39;</pre>
        <pre>&#125;</pre>
      </div>
    </div>
  )
}
export default Navigate
