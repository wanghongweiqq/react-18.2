/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-04 15:46:24
 * @Description: 路由初始话设置，1、路由拦截；2、浏览器Title的设置
 * @FilePath: /react-18.2/src/router/set.js
 */

import React, { useState, useEffect } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import routes from './index.js'
import Page403 from '../view/common/403.js'
import { getUserInfoAction } from '../store/redux/userInfo'
import { getUserRightAction } from '../store/redux/userRight'
import { setFlatRouteAction } from '../store/redux/flatRoute'

function SetRouter ({ userInfo, userRight, getUserInfoAction, getUserRightAction, setFlatRouteAction }) {
  console.log('SetRouter')
  const location = useLocation()
  let flatRoutes = [] // 扁平化的路由，方便遍历路由信息，比如设置title
  const [ flatRoutesList, setPlatRoutesList ] = useState([])

  // 设置title
  function setTitle (pathname) {
    const result = flatRoutes.find(item => item.path === pathname)
    if (result && result.meta && result.meta.title) {
      document.title = result.meta.title
    }
  }

  // 过滤路由：1、直接操作routes处理没有权限的路由；2、把路由path属性统一改为绝对路径
  function filterRouter (paramRoutes, parentPath) {
    paramRoutes.forEach((item) => {
      if (
        item.meta &&
        item.meta.auth &&
        item.meta.auth.length > 0 &&
        userRight.indexOf(item.meta.auth) === -1
      ) { // 没有权限的页面，挂载403的组件
        item.element = <Page403 /> // <Navigate to="/403" replace />
      }
      if (item.path && /^\//.test(item.path) === false && parentPath) {
        const path = parentPath === '/' ? '' : '/'
        item.path = parentPath + path + item.path
      } else if (item.index) {
        item.path = parentPath
      }
      if (item.children && item.children.length > 0) {
        filterRouter(item.children, item.path)
        // 以下逻辑主要是为了打平路由，方便获取路由信息
        const childrenHaveIndex = item.children.some((child) => child.index)
        if (childrenHaveIndex) return
      }
      let obj = {}
      obj.path = item.path
      obj.meta = item.meta
      flatRoutes.push(obj)
    })
  }

  // 获取用户信息
  useEffect(() => {
    console.log('获取用户信息')
    getUserInfoAction()
  }, [])

  // 获取用户权限
  useEffect(() => {
    if(userInfo.empID) {
      getUserRightAction(userInfo.empID)
    }
  }, [ userInfo.empID ])

  // 获取用户权限后要做的事情
  useEffect(() => {
    if(userRight && userRight.length > 0) {
      flatRoutes = [] // 扁平化路由的临时变量情况
      filterRouter(routes)// 对原始路由routes做权限过滤，接下来将作为useRoutes的入参
      setTitle(location.pathname)// 先用上面的方法filterRouter处理routes，主要是路由path更新为决定路径，再设置网页title
      setPlatRoutesList(flatRoutes) // 扁平化路由赋值
    }
  }, [ userRight ])

  // 扁平化路由改变时进行全局存储
  useEffect(() => {
    if(flatRoutesList && flatRoutesList.length > 0) {
      setFlatRouteAction(flatRoutesList)
    }
  }, [ flatRoutesList ])

  // 路由改变时执行设置页面title，为了减少方法filterRouter调用次数，初始话时因为没有用户权限暂不执行，待接口返回用户权限后先执行filterRouter生产绝对路径的path后再执行filterTitle
  useEffect(() => {
    if (userRight && userRight.length > 0) {
      setTitle(location.pathname)
    }
  }, [ location.pathname ])

  // routes作为useRoutes的入参，通过useRoutes方法后，返回react路由主体
  const router = useRoutes(routes)

  if (userRight.length > 0) {
    return router
  } else {
    return <div>Loading...</div>
  }
}

SetRouter.propTypes = {
  userInfo: PropTypes.object,
  userRight: PropTypes.array,
  getUserInfoAction: PropTypes.func,
  getUserRightAction: PropTypes.func,
  setFlatRouteAction: PropTypes.func,
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
  userRight: state.userRight,
})
const mapDispatchToProps = {
  getUserInfoAction,
  getUserRightAction,
  setFlatRouteAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(SetRouter)

