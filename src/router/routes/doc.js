/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-14 15:39:48
 * @Description: 构建过程中的说明文档
 * @FilePath: /react-18.2/src/router/routes/doc.js
 */
import Init from '../../view/Doc/Init.js'
import Router from '../../view/Doc/Router.js'
import Git from '../../view/Doc/Git.js'
import Css from '../../view/Doc/Css.js'
import Proxy from '../../view/Doc/Proxy.js'
import Break from '../../view/Doc/Break.js'
import Eslint from '../../view/Doc/Eslint.js'
import Stylelint from '../../view/Doc/Stylelint.js'
import PropTypes from '../../view/Doc/PropTypes.js'
import Redux from '../../view/Doc/Redux.js'

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
      {
        path: 'redux',
        element: <Redux />,
        meta: { title: 'redux' },
      },

    ],
  },
]

export default doc
