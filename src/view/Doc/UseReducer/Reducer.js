/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2025-08-13 16:10:21
 * @Description: Reducer
 * @FilePath: /react-18.2/src/view/Doc/UseReducer/Reducer.js
 */

// 状态的初始值直接进行赋值
const initialState = { count: 1 }
// 状态的初始值进行惰性初始化
const initialFunction = () => {
  return { count: 2 }
}
// 状态的初始值
const initialResult = initialFunction()
const defaultState = initialResult ? initialResult : initialState

function reducer (state, action) { // state是上一次存储的值，action是个对象，还有新行为的相关内容，如type、playload
  const { type, payload } = action // 默认属性一般设置为：type-事件名称, payload-有效载体/数据，当然也可以设置为其他的key值，但要使用前后一致的key。
  switch(type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'set':
      return { count: payload }
    case 'reset':
      return { count: defaultState.count }
    default: // 最好设置default，在这里可以说明type输入有误，或者其他的提示，否则匹配不到case，展示的数据突然变空了，如果是对象类型的state，还有可能因为层级没有判空而报错。所以最好业务侧判空的同时这里也同步返回上一次操作后的值
      console.log('操作count的方法type书写有误！')
      return state
  }
}

export{
  reducer,
  initialState,
  initialFunction,
}