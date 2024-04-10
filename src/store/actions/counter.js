/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-04-07 15:38:55
 * @Description: actions-counter计数器
 * @FilePath: /react-18.2/src/store/actions/counter.js
 */
import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RANDOM } from '../types/counter'

const counterIncrement = () => ({ type: COUNTER_INCREMENT })
const counterDecrement = () => ({ type: COUNTER_DECREMENT })
const counterRandom = (num) => ({ type: COUNTER_RANDOM, payload: num })

export{
  counterIncrement,
  counterDecrement,
  counterRandom,
}