/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 退出循环
 * @FilePath: /react-18.2/src/view/doc/break.js
 */
import React, { useEffect } from 'react'

function Break () {

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
  // function test () {

  //   let a = [ 1, 2, 3, 4, 5 ]
  //   let b = [ 1, 2, 3, 4, 5 ]
  //   let x = 0
  //   let y = 0
  //   for(let item of a) {
  //     x++
  //     if(item === 2) {
  //       break
  //       // return item
  //     }
  //     console.log('------------------')
  //     console.log(x)
  //   }
  //   flag:
  //   for (var i = 0; i < a.length; i++) {
  //     for (var h = 0; h < b.length; h++) {
  //       y++

  //       console.log('h')
  //       console.log(h)

  //       if(a[i] === 2) {
  //         break flag
  //         // return item
  //       }
  //       console.log('+++++++++++++++')
  //       console.log(y)

  //     }
  //   }
  // }
  function setTitle (paramRoutes) {
    for(const item of paramRoutes) {
      i++
      console.log('iiiiiiiiiiiiiiiiiiii')
      console.log(i)
      console.log(item)
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
      console.log('--------')
      console.log(i)
      console.log(item.path)

    }
  }
  useEffect(() => {
    // test()
    setTitle(routes)
  }, [ ])

  return (
    <div className='pg-doc'>
      <h1>循环中涉及到递归说明</h1>
      <p>外层循环中后续的循环会在递归执行后再执行，相当于不断地先执行递归里的循环逻辑，再执行外层剩余的循环</p>
      <p>循环里的break、return等只会影响当前递归里的循环退出，外层的循环仍会继续执行</p>
    </div>
  )
}

export default Break

