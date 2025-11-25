/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 父组件A的内容
 * @FilePath: /react-18.2/src/view/Doc/UseContext/A.js
 */

import React, { Fragment, memo } from 'react'
import B1 from './B1'
import B2 from './B2'
import B3 from './B3'

function A () {
  return (
    <Fragment>
      <B1 />
      <B2 />
      <B3 />
    </Fragment>
  )
}

export default A