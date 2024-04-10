/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-04-07 15:29:06
 * @Description: redux-counter计数器
 * @FilePath: /react-18.2/src/store/redux/counter.js
 */

// Action Types
const COUNTER_INCREMENT = 'counter-increment'
const COUNTER_DECREMENT = 'counter-decrement'
const COUNTER_RANDOM = 'counter-random'

// Action Creators
const counterIncrementAction = () => ({ type: COUNTER_INCREMENT })
const counterDecrementAction = () => ({ type: COUNTER_DECREMENT })
const counterRandomAction = (num) => ({ type: COUNTER_RANDOM, payload: num })

// Reducers
const initialState = 0
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + 1
    case COUNTER_DECREMENT:
      return state - 1
    case COUNTER_RANDOM:
      return state + action.payload
    default:
      return state
  }
}

export {
  counterReducer,
  counterIncrementAction,
  counterDecrementAction,
  counterRandomAction,
}