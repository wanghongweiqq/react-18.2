/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-14 15:45:26
 * @Description: demo视图1
 * @FilePath: /react-18.2/src/view/Demo/index.js
 */

import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { counterIncrementAction, counterDecrementAction, counterRandomAction } from '@/store/redux/counter'
import store from '../../store'

function View1 ({
  counter, userInfo, flatRoute,
  counterIncrementAction,
  counterDecrementAction, counterRandomAction,
}) {
  const navigate = useNavigate()
  console.log('Demo/index')
  console.log('store')
  console.log(store)
  console.log(store.getState())

  useEffect(() => {
    let watch = store.subscribe((e) => {
      console.log('subscribe')
      console.log(e)
      console.log(store.getState())
    })
    return() => {
      watch()
    }
  }, [])

  // 计数器随机加10以内整数
  const randomFun = (val) => {
    const num = Math.round(Math.random() * 10) || val
    counterRandomAction(num)
  }

  const debounce = (fn, delay = 3000) => {
    let timer // 当触发的地方使用函数表达式，也就是变量声明（而非函数声明），初始话时就被执行，值为undefined，利用了闭包特性，保证每一个计时器（timer）都是独立的，当触发需要防抖的方法时，会直接调用下面return的方法，而不会重新声明let timer。
    console.log('timer', timer)
    const debounced = (...args) => {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        fn(...args)
      }, delay)
    }
    debounced.clear = () => {
      timer && clearTimeout(timer)
    }
    return debounced
  }

  // 按钮点击执行时，debonceFunc(...args)执行的时候会将其对应的参数传递进来，然后通过核心方法里的箭头函数里的...args回传给debounce里的第一个参数，该参数是个方法，...args作为该方法的一个参数
  const debonceFunc = debounce((...args) => {
    console.log('防抖执行：', ...args)
  })
  // 函数声明的形式由于没哟初始话执行，导致核心方法（采用了闭包的形式）里的timer不是私有的，最终没有防抖功能
  // function debonceFunc (...args) {
  //   console.log(...args)
  //   debounce((...args) => {
  //     console.log('防抖执行：', ...args)
  //   })(...args)
  // }

  return (
    <div className='pg-doc'>

      <button onClick={debonceFunc}>防抖1</button>&nbsp;&nbsp;
      <button onClick={debonceFunc.clear}>清除防抖</button>&nbsp;&nbsp;

      <p>Demo/index-User: {JSON.stringify(userInfo)}</p>
      <p>flatRoute: {JSON.stringify(flatRoute)}</p>

      <p>Count: {counter}</p>
      <p>
        <button onClick={() => { store.dispatch(counterIncrementAction()) }}>增加1</button>&nbsp;&nbsp;
        <button onClick={() => { store.dispatch({ type: 'counter-increment' }) }}>增加1</button>&nbsp;&nbsp;
        <button onClick={counterDecrementAction}>减少1</button>&nbsp;&nbsp;
        <button onClick={randomFun}>随机加10以内整数</button>
      </p>
      <p>state参数：传参于无形中，刷新不会消失（这点比vue的params强），复制链接到新tab下，参数会清空</p>
      <p>
        <Link to='/demo/navigate?id=1' state={{ x: 1, y: 2 }} replace >state参数-Link标签跳转</Link>
      </p>
      {/* <p>
        这种形式只能获取到pathname，其他参数无法获取，pathname的值后面带search参数还会报错
        <Link to= {{ pathname: '/demo/navigate', state: { x: 1, y: 2 } }} >go to navigate</Link>
      </p> */}
      <p>
        <button onClick={() => {
          navigate('/demo/navigate?id=1&sex=male&id=2#name', { // 除了Link能使用的state、replace属性外，其他属性都无法传递
            state: { x: 1, y: 2 },
            replace: false,
            search: { a: 3 }, // 无法传递
            hash: 4, // 无法传递
          })
        }} >
          state参数-useNavigate方法跳转
        </button>
      </p>
      <button onClick={() => {
        navigate('/demo/b2/c3/3/4', { state: { x: 1, y: 2 } })
      }}>go to 动态路由 !
      </button>
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
