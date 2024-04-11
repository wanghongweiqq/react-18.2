/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 退出循环
 * @FilePath: /react-18.2/src/view/doc/break.js
 */
import React, { useEffect } from 'react'

function Break () {

  function test () {
    let a = [ 1, 2, 3, 4, 5 ]
    let b = [ 1, 2, 3, 4, 5 ]
    let x = 0
    let y = 0
    // for(let item of a) {
    //   console.log('for循环 内部break前')
    //   x++
    //   if(item === 2) {
    //     // 这里做些你想做的事情
    //     // break
    //     return
    //   }
    //   console.log('for循环 内部break后')
    //   console.log(x)
    // }
    // console.log('for 外部')

    for (var i = 0; i < a.length; i++) {
      x++
      console.log('for外层循环 x：' + x)
      for (var h = 0; h < b.length; h++) {
        y++

        console.log(`for内层循环 内部break前 y和h：${ y } ${ h }`)

        if(a[i] === 2) {
          // break flag // 直接退出到：双层for循环 外部，后续逻辑可继续执行
          return // 直接退出这个方法，逻辑直接到此结束
        }
        console.log(`for内层循环 内部break后 y和h：${ y } ${ h }`)
      }
    }
    console.log('双层for循环 外部')
  }

  let i = 0
  const routes = [
    {
      'path': '/',
      'name': '首页',
      'children': [
        {
          'path': '/403',
          'meta': { 'title': '403' },
        },
        {
          'path': '/*',
          'meta': { 'title': '404' },
        },
        {
          'path': '/doc',
          'meta': { 'title': '文档' },
          'children': [
            {
              'path': '/doc/init',
              'meta': { 'title': 'init' },
            },
            {
              'path': '/doc/router',
              'meta': { 'title': 'router' },
            },
            {
              'path': '/doc/git',
              'meta': { 'title': 'git' },
            },
            {
              'path': '/doc/css',
              'meta': { 'title': 'css' },
            },
            {
              'path': '/doc/proxy',
              'meta': { 'title': 'proxy' },
            },
          ],
        },
        {
          'index': true,
          'meta': { 'title': '首页' },
          'path': '/',
        },
        {
          'path': '/a',
          'meta': { 'title': 'a标题' },
          'children': [
            {
              'index': true,
              'meta': {
                'title': 'a1标题',
                'auth': 'aaddhllWorkOrder.gongdanmoban.templateManage',
              },
              'path': '/a',
            },
            {
              'path': '/a/a2',
              'meta': {
                'title': 'a2标题',
                'auth': 'hllWorkOrder.gongdanzhongxin.workOrderTrigger',
              },
              'children': [
                {
                  'path': '/a/a2/a3',
                  'meta': { 'title': 'a3标题' },
                },
              ],
            },
          ],
        },
      ],
    },
  ]
  function setTitle (paramRoutes) {
    for(const item of paramRoutes) {
      i++
      if (item.path === location.pathname && item.meta && item.meta.title) {
        if (item.children && item.children.length > 0) {
          // 当item的子集有设置index=true时，过滤掉当前item，获取子集的title
          const childrenHaveIndex = item.children.some((child) => child.index)
          // if (childrenHaveIndex) continue
          if (!childrenHaveIndex) {
            document.title = item.meta.title
            break
          }
        }else{
          document.title = item.meta.title
          break
        }

      } else if (item.children && item.children.length > 0) {
        setTitle(item.children)
      }
      console.log('setTitle')
      console.log(i)
      console.log(item.path)
    }
  }
  useEffect(() => {
    test()
    setTitle(routes)
  }, [ ])

  return (
    <div className='pg-doc'>
      <h1>循环中涉及到递归说明</h1>
      <p>外层循环中后续的循环会在递归执行后再执行，相当于不断地先执行递归里的循环逻辑，再执行外层剩余的循环</p>
      <p>循环里的break、return等只会影响当前递归里的循环退出，外层的循环仍会继续执行</p>

      <h2>循环中的退出</h2>
      <p>for 和for of可以用break或return退出循环，其他如forEach等不可以退出循环（try/catch可以实现退出循环）</p>
      <p>break退出循环后可以继续执行循环外后面的逻辑，但return不会继续执行循环外后面的逻辑</p>
    </div>
  )
}

export default Break

