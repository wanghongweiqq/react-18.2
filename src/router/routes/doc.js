/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-14 15:39:48
 * @Description: 构建过程中的说明文档
 * @FilePath: /react-18.2/src/router/routes/doc.js
 */
import Init from '@/view/Doc/Init.js'
import Router from '@/view/Doc/Router.js'
import Git from '@/view/Doc/Git.js'
import Css from '@/view/Doc/Css.js'
import Proxy from '@/view/Doc/Proxy.js'
import Break from '@/view/Doc/Break.js'
import Eslint from '@/view/Doc/Eslint.js'
import Stylelint from '@/view/Doc/Stylelint.js'
import PropTypes from '@/view/Doc/PropTypes.js'
import Redux from '@/view/Doc/Redux.js'
import Alias from '@/view/Doc/Alias.js'
import Memo from '@/view/Doc/Memo.js'
import Operator from '@/view/Doc/Operator.js'
import Env from '@/view/Doc/Env.js'
import EscapeSequence from '@/view/Doc/EscapeSequence.js'
import Webpack from '@/view/Doc/Webpack.js'
import Popover from '@/view/Doc/Popover.js'
import Txt from '@/view/Doc/Txt/'
import UseContext from '@/view/Doc/UseContext/'

import React from 'react'
const doc = {
  path: 'doc',
  meta: { title: '文档' },
  children: [
    {
      path: 'useContext',
      element: <UseContext />,
      meta: { title: 'useContext' },
    },
    {
      path: 'txt',
      element: <Txt />,
      meta: { title: 'txt' },
    },
    {
      path: 'popover',
      element: <Popover />,
      meta: { title: 'Popover' },
    },

    {
      path: 'init',
      element: <Init />,
      meta: { title: 'init 项目初始话' },
    },
    {
      path: 'router',
      element: <Router />,
      meta: { title: 'router 配置' },
    },
    {
      path: 'git',
      element: <Git />,
      meta: { title: 'git 配置' },
    },
    {
      path: 'css',
      element: <Css />,
      meta: { title: 'css 配置' },
    },
    {
      path: 'proxy',
      element: <Proxy />,
      meta: { title: 'proxy 接口的反向代理' },
    },
    {
      path: 'break',
      element: <Break />,
      meta: { title: 'break 退出循环' },
    },
    {
      path: 'eslint',
      element: <Eslint />,
      meta: { title: 'eslint 配置' },
    },
    {
      path: 'stylelint',
      element: <Stylelint />,
      meta: { title: 'stylelint 配置' },
    },
    {
      path: 'prop-types',
      element: <PropTypes />,
      meta: { title: 'prop-types 类型检测' },
    },
    {
      path: 'redux',
      element: <Redux />,
      meta: { title: 'redux 状态存储' },
    },
    {
      path: 'alias',
      element: <Alias />,
      meta: { title: 'alias 路径别名' },
    },
    {
      path: 'memo',
      element: <Memo />,
      meta: { title: 'memo 性能优化' },
    },
    {
      path: 'operator',
      element: <Operator />,
      meta: { title: 'operator 运算符' },
    },
    {
      path: 'env',
      element: <Env />,
      meta: { title: 'env 环境变量' },
    },
    {
      path: 'escape-sequence',
      element: <EscapeSequence />,
      meta: { title: 'escape-sequence 转义字符串' },
    },
    {
      path: 'webpack',
      element: <Webpack />,
      meta: { title: 'Webpack 概览' },
    },

  ],
}

export default doc
