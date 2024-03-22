/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-04 15:46:24
 * @Description: 入口文件
 * @FilePath: /react-c/src/index.js
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import reportWebVitals from "./reportWebVitals";
import SetRouter from "./router/set";
import "./style/reset.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <SetRouter />
  </BrowserRouter>
);

// 网站指标监测 (for example: reportWebVitals(console.log))
// reportWebVitals(console.log);
