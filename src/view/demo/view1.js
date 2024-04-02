/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-14 15:45:26
 * @Description: demo视图1
 * @FilePath: /react-18.2/src/view/demo/view1.js
 */

import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

function View1 () {
  const navigate = useNavigate()
  console.log('View1')

  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <Link to='/a'>go to a1</Link>
      </div>
      <div>
        <button
          onClick={() => {
            navigate('/a/a2', { state: { x: 1 } })
          }}
        >
          go to a2!
        </button>
      </div>
    </div>
  )
}

export default View1
