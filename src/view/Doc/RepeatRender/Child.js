/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 子组件Child
 * @FilePath: /react-18.2/src/view/Doc/RepeatRender/Child.js
 */

import React, { Fragment, memo } from 'react'
import PropTypes from 'prop-types'

function Child ({ result = {} }) {
  console.log('子组件Child render')
  return (
    <Fragment>
      <p>子组件ChildA的内容，从父组件index传过来的result：{JSON.stringify(result)}</p>
    </Fragment>
  )
}
Child.propTypes = { result: PropTypes.any }

// export default Child
export default memo(Child)
