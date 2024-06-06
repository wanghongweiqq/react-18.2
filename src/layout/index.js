/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-15 10:42:38
 * @Description: 页面公共部分
 * @FilePath: /react-18.2/src/layout/index.js
 */
import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './index.scss'

function Layout ({ flatRoute }) {
  console.log('flatRoute')
  console.log(flatRoute)
  return (
    <div className='wrapper'>
      <p>首页layout</p>
      <Outlet />
      <dl className='router-list abc'>
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
