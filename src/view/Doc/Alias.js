/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 别名alias配置说明
 * @FilePath: /react-18.2/src/view/Doc/Alias.js
 */
import React from 'react'

function Alias () {
  return (
    <div className='pg-doc'>
      <h1>别名alias配置说明</h1>

      <h2>1、webpack对别名alias配置</h2>
      <p>如果熟悉webpack的小伙伴就会知道package.json中的配置会很多，而react脚手架中的package.json中，依赖为什么这么少。这是因为像webpack，babel等等都是被 creat react app 封装到了react-scripts这个项目当中，包括基本启动命令都是通过调用react-scripts这个依赖下面的命令进行启动的。npm run eject，会将原本creat react app对webpack/babel等相关配置的封装弹射出来。如果我们要将creat react app配置文件进行修改，现有目录下是没有地方修改的，此时，我们就可以通过eject命令将原本被封装到脚手架当中的命令弹射出来，然后就可以在项目的目录下看到很多配置文件。但这个操作是不可逆的，我们无法再通过其他方式将这些暴露出来的配置还原回去。</p>
      <p>执行：<em>npm run eject</em></p>
      <p><img alt='npm run eject后的产物' src='/static/media/run-eject.f3879ec353a3484cad6c.png' /></p>
      <p>根目录不止多了config、scripts等文件夹，package.json的配置文件中也有不少改变，如：dependencies增加了不少依赖，scripts里的start的执行命令等</p>
      <p>eject 弹窗前package.json</p>
      <p><img alt='初始化后的package' src={require('../../assets/images/doc/package-init.png')} /></p>
      <p>eject 弹窗后package.json</p>
      <p><img alt='eject后的package' src={require('../../assets/images/doc/package-eject.png')} /></p>
      <p>修改配置文件：<em>config/webpack.config.js</em></p>
      <p><img alt='webpack中关于alias的修改' src={require('../../assets/images/doc/webpack-alias.png')} /></p>
      <p>配置完后能保证组件使用@/引入成功，但会有eslint报错，这时就要再对eslint进行配置</p>
      <p><img alt='eslint对于alias的报错' src={require('../../assets/images/doc/alias-eslint-error.png')} /></p>

      <h2>2、eslint对别名alias配置</h2>
      <p>安装相关依赖：<em>npm i -D eslint-import-resolver-alias</em></p>
      <p><img alt='eslintrc.js对于alias的配置' src={require('../../assets/images/doc/eslintrc-alias.png')} /></p>
      <p>配置完后eslint将不会报错，但引入的方法、文件路径无法在按住Ctrl的情况下点击鼠标进入，这时就要再对jsconfig.json进行配置</p>

      <h2>3、jsconfig.json对别名alias配置</h2>
      <p><img alt='jsconfig.json对别名alias配置' src={require('../../assets/images/doc/jsconfig.png')} /></p>
      <p>jsconfig.json 是一个用于配置 JavaScript 项目的文件，特别是在使用 TypeScript 或者是在 React 项目中。它的主要功能如下：</p>
      <p>1、自动模块解析：moduleResolution: node</p>
      <p>2、路径别名：baseUrl、paths</p>
      <p>3、指定包含的文件：能提高IDE的性能，使用 include 和 exclude 数组，你可以明确指定哪些文件应该被编译器包含和排除</p>
      <p>ps:注意如果键值对为最后一项，含有的英文逗号要省略，否则npm start的时候报这个位置错误</p>
      <p><img alt='jsconfig.json错误配置' src={require('../../assets/images/doc/jsconfig-error.png')} /></p>
    </div>
  )
}

export default Alias

