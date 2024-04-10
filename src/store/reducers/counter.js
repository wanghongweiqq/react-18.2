/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-04-07 15:29:06
 * @Description: reducers-counter计数器
 * @FilePath: /react-18.2/src/store/reducers/counter.js
 */
import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RANDOM } from '../types/counter'

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

export default counterReducer