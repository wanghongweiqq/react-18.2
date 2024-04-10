/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-14 15:39:48
 * @Description: 页面/组件/功能的描述
 * @FilePath: /react-18.2/src/router/routes/doc.js
 */
import Init from '../../view/doc/init.js'
import Router from '../../view/doc/router.js'
import Git from '../../view/doc/git.js'
import Css from '../../view/doc/css.js'
import Proxy from '../../view/doc/proxy.js'
import Break from '../../view/doc/break.js'
import Eslint from '../../view/doc/eslint.js'
import Stylelint from '../../view/doc/stylelint.js'
import PropTypes from '../../view/doc/prop-types.js'

import React from 'react'
const doc = [
  {
    path: 'doc',
    meta: { title: '文档' },
    children: [
      {
        path: 'init',
        element: <Init />,
        meta: { title: 'init' },
      },
      {
        path: 'router',
        element: <Router />,
        meta: { title: 'router' },
      },
      {
        path: 'git',
        element: <Git />,
        meta: { title: 'git' },
      },
      {
        path: 'css',
        element: <Css />,
        meta: { title: 'css' },
      },
      {
        path: 'proxy',
        element: <Proxy />,
        meta: { title: 'proxy' },
      },
      {
        path: 'break',
        element: <Break />,
        meta: { title: 'break' },
      },
      {
        path: 'eslint',
        element: <Eslint />,
        meta: { title: 'eslint' },
      },
      {
        path: 'stylelint',
        element: <Stylelint />,
        meta: { title: 'stylelint' },
      },
      {
        path: 'prop-types',
        element: <PropTypes />,
        meta: { title: 'prop-types' },
      },

    ],
  },
]

export default doc
