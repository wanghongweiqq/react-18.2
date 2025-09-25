/*
 * @Author: 王宏伟 a3
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-04 15:46:24
 * @Description: 入口文件
 * @FilePath: /react-18.2/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// import reportWebVitals from "./reportWebVitals";
import SetRouter from './router/set'
import store from './store'
import './assets/css/reset.scss'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <SetRouter />
    </BrowserRouter>
  </Provider>,
)

// 网站指标监测 (for example: reportWebVitals(console.log))
// reportWebVitals(console.log);
