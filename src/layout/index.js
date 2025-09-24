/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-15 10:42:38
 * @Description: 页面公共部分
 * @FilePath: /react-18.2/src/layout/index.js
 */
import React, { useState, useEffect, useRef } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './index.scss'

function Layout ({ flatRoute }) {
  const themeEnum = {
    light: '浅色',
    dark: '深色',
  }
  const themeDark = {
    color: '#fff',
    background: '#333',
  }
  const themeLight = {
    color: '#333',
    background: '#fff',
  }
  const root = document.documentElement

  const [ theme, setTheme ] = useState(themeEnum.light)
  const themeRef = useRef(themeEnum.light)
  const switchTheme = () => {
    // alert(1)
    // const isThemeDark = root.style.getPropertyValue('--font-color') === themeDark.color
    console.log('theme:', theme, 'themeRef:', themeRef) // 闭包导致theme不会改变，一直是初始值：themeEnum.light
    if (themeRef.current === themeEnum.dark) { // 当前是深色主题，那要变为浅色主题
      setTheme(themeEnum.light)
      root.style.setProperty('--font-color', themeLight.color)
      root.style.setProperty('--bg-color', themeLight.background)
    } else {
      setTheme(themeEnum.dark)
      root.style.setProperty('--font-color', themeDark.color)
      root.style.setProperty('--bg-color', themeDark.background)
    }
  }
  useEffect(() => {
    // 监听按钮点击事件来切换主题
    document.getElementById('theme-toggle').addEventListener('click', switchTheme)
    return () => {
      document.getElementById('theme-toggle').removeEventListener('click', switchTheme)
    }
  }, [])
  useEffect(() => {
    // console.log('theme')
    themeRef.current = theme
  }, [ theme ])
  return (
    <div className='ly-wrapper'>
      <div className='ly-title'>
        <p>首页layout</p>
        <button id='theme-toggle'>切换主题：{theme}</button>
      </div>
      <div className='ly-main'>
        <ul className='ly-menu'>
          {flatRoute.map(item =>
            <li key={item.path}><Link to={item.path}>{item.meta.title}</Link></li>,
          )}
        </ul>
        <ul className='ly-content'>
          <Outlet />
        </ul>
      </div>
    </div>
  )
}
Layout.propTypes = { flatRoute: PropTypes.array }
const mapStateToProps = (state) => {
  return { flatRoute: state.flatRoute }
}

export default connect(mapStateToProps)(Layout)
