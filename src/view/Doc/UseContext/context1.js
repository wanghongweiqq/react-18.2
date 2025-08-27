/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2025-08-13 16:10:21
 * @Description: createContext
 * @FilePath: /react-18.2/src/view/Doc/UseContext/context1.js
 */
import { createContext } from 'react'
const defaultValue = { name: 'aaa', age: 0 }
const Context1 = createContext(defaultValue)
// 通过 createContext() 创建上下文对象，该对象包含 Provider 和 Consumer 组件
// createContext 的默认值仅在组件树中未找到匹配的 Provider 时才会生效（未匹配到说明父级就没有做这个Provider的嵌套，一般很少发生这种情况）。若存在 Provider 但未正确传递 value 属性，即使传入 undefined 也不会回退到默认值（也就是说只要父级只要嵌套了，无论如何也不会读取这里的默认值defaultValue）
// 所以下面说的是不对的
// 请注意，这里还可以给React.createContext()传入一个默认值
// 例如：const GlobalContext = React.createContext({name:'CYTTP',age:18})
// 假如<GlobalContext.Provider>中没有设置value的值，就会使用上面定义的默认值
export default Context1