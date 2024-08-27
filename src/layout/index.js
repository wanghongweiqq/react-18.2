/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-15 10:42:38
 * @Description: 页面公共部分
 * @FilePath: /react-18.2/src/layout/index.js
 */
import React, { useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './index.scss'

function Layout ({ flatRoute }) {
  console.log('flatRoute')
  console.log(flatRoute)

  const switchTheme = () => {
    // alert(1)
    const colorDark = '#FF6100'
    const isDark = document.documentElement.style.getPropertyValue('--primary-color') === colorDark
    if (!isDark) {
      document.documentElement.style.setProperty('--primary-color', colorDark)
    } else {
      document.documentElement.style.setProperty('--primary-color', '#333')
    }
  }
  useEffect(() => {
    // 监听按钮点击事件来切换主题
    document.getElementById('theme-toggle').addEventListener('click', switchTheme)
    return () => {
      document.getElementById('theme-toggle').removeEventListener('click', switchTheme)
    }
  }, [])

  return (
    <div className='ly-wrapper'>
      <div className='ly-title'>
        <p>首页layout</p>
        <button id='theme-toggle'>切换主题</button>
      </div>
      <Outlet />
      <dl className='ly-menu'>
        <dt>路由列表：</dt>
        {flatRoute.map(item => <dd key={item.path}><Link to={item.path}>{item.meta.title}</Link></dd>)}
      </dl>
    </div>
  )
}
Layout.propTypes = { flatRoute: PropTypes.array }
const mapStateToProps = (state) => {
  return { flatRoute: state.flatRoute }
}

export default connect(mapStateToProps)(Layout)
