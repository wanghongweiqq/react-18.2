/*
 * @Author: 王宏伟
 * @Email: wanghongwei@hualala.com
 * @Date: 2024-03-18 16:40:08
 * @Description: 接口封装
 * @FilePath: /react-18.2/src/service/axios.js
 * @config参数定义
    必选：
      url: 接口请求路径
    可选：
      data: 统一入参属性，内部会根据接口请求类型自动转化为data/params
      method: 请求类型(get/post/delete/put),默认: post
      showLoading: 是否开启loading，默认: true
      showError: 是否开启错误提示，默认: true，可以防止重复点击事件
      isFilterParams: 是否开启参数为空的过滤，默认: false
      isFormData: 是否为FormData格式的请求,，默认: false
 */
import axios from 'axios'

let loadCount = 0

const instance = axios.create({
  baseURL: '/api', // 会和各接口的url拼接，结尾的/可带可不带，axios会做好处理
  timeout: 30000,
  // headers: {
  //   'X-Requested-With': 'XMLHttpRequest',
  //   'X-jd-ajax': '1.0',
  //   'X-jd-ts': new Date().getTime(),
  // },
  withCredentials: true,
  method: 'post', // 项目里那个请求形式多，默认设置成哪种
  data: {},
  showLoading: true,
  showError: true,
  isFilterParams: false, // 默认不过滤空的参数，因为好多地方需要空的入参去重置结果
  isFormData: false,
  type: 'body',
})

// 添加一个请求拦截器
instance.interceptors.request.use(config => {
  // 入参数据过滤
  if (config.isFilterParams) {
    // config.data = utils.filterParams(config.data)
  }

  if (config.type === 'restful') {
    for(let item in config.data) {
      config.url += '/' + config.data[item]
    }
  }
  // 防止post请求，接口因为没有data报错
  if(!config.data) {
    config.data = {}
  }
  // filterBlank: 去掉参数首尾的空格，deleteOssParams: 删除oss资源带的参数
  // config.data = utils.copyDeep(config.data, { filterBlank: true, deleteOssParams: true })

  // 入参类型转化
  if (config.method === 'get' || config.method === 'put') {
    config.params = config.data
    delete config.data
  }

  if (config.isFormData) {
    config.headers = { 'Content-Type': 'multipart/form-data' }
  }
  if (config.showLoading) {
    // store.commit('showLoading')
    loadCount++
  }
  return config
}, error => {
  const{ config } = error
  if (config && config.showLoading) {
    loadCount--
    if (loadCount <= 0) {
      // store.commit('hideLoading')
    }
  }
  return Promise.reject(error)
})
// 添加一个响应拦截器
instance.interceptors.response.use(response => {
  const { config } = response
  if (config.showLoading) {
    loadCount--
    if (loadCount <= 0) {
      // store.commit('hideLoading')
    }
  }
  const res = response.data

  // token失效,自动跳转到登录页
  if(res.code === '0011111100000001') {
    // ddf
  }
  if (config.showError && res.success === false) {
    // success为false时，自动提示错误信息，可通过showError:false关闭
    // Dialog({ res.message })
  }
  return res
}, error => {
  const{ config } = error
  if (config && config.showLoading) {
    loadCount--
    if (loadCount <= 0) {
      // store.commit('hideLoading')
    }
  }
  // Dialog({ message: '网络请求出问题了，请稍后再试' })

  return Promise.reject(error)
})
export default instance
