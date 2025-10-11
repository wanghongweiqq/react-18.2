/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2025-08-13 16:10:21
 * @Description: Reducer
 * @FilePath: /react-18.2/src/view/Doc/UseReducer/reducer.js
 */

const initialState = { count: 1 }

function reducer (state, action) {
  const { type, payload } = action
  switch(type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'set':
      return { count: payload }
    case 'reset':
      return { count: initialState.count }
    default:// 最好有个default，在这里可以说明type输入有误，或者其他的提示，否则匹配不到case，就没有任何反应，如果是对象类型的state，还有可能因为层级没有判空而报错，最后业务侧判空，同时这里返回最新的值
      console.log('操作count的方法type书写有误！')
      return { count: state.count }
  }
}

export{
  initialState,
  reducer,
}