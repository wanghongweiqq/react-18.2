/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-14 15:45:26
 * @Description: demo视图1
 * @FilePath: /react-18.2/src/view/demo/view1.js
 */

import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { counterIncrementAction, counterDecrementAction, counterRandomAction } from '../../store/redux/counter'
import store from '../../store'

function View1 ({ counter, userInfo, flatRoute, counterIncrementAction, counterDecrementAction, counterRandomAction }) {
  const navigate = useNavigate()
  console.log('View1')

  // 计数器随机加10以内整数
  const randomFun = (val) => {
    const num = Math.round(Math.random() * 10) || val
    console.log('store')
    console.log(store.getState())
    counterRandomAction(num)
  }
  return (
    <div className='pg-doc'>
      <p>User: {JSON.stringify(userInfo)}</p>
      <p>flatRoute: {JSON.stringify(flatRoute)}</p>

      <p>Count: {counter}</p>
      <p>
        <button onClick={counterIncrementAction}>增加1</button>&nbsp;&nbsp;
        <button onClick={counterDecrementAction}>减少1</button>&nbsp;&nbsp;
        <button onClick={randomFun}>随机加10以内整数</button>
      </p>
      <p>
        <Link to='/a'>go to a1</Link>
      </p>
      <p>
        <button onClick={() => { navigate('/a/a2', { state: { x: 1 } }) }} >
          go to a2 !
        </button>
      </p>
    </div>
  )
}

View1.propTypes = {
  counter: PropTypes.node,
  flatRoute: PropTypes.array,
  userInfo: PropTypes.object,
  counterIncrementAction: PropTypes.func,
  counterDecrementAction: PropTypes.func,
  counterRandomAction: PropTypes.func,
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    userInfo: state.userInfo,
    flatRoute: state.flatRoute,
  }
}

const mapDispatchToProps = { counterIncrementAction, counterDecrementAction, counterRandomAction }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     counterIncrementAction: () => dispatch({ type: 'counter-increment' }),
//     counterDecrementAction: () => dispatch({ type: 'counter-decrement' }),
//     counterRandomAction: (num) => dispatch({ type: 'counter-random', payload: num }),
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(View1)
