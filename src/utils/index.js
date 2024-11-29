/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-07-17 16:43:56
 * @Description: 工具类
 * @FilePath: /react-18.2/src/utils/index.js
 */

import { regExpSpace } from './regExp'

/**
 * @description: 数据类型判断
 * @param {*} data: 各种类型的数据，必传
 * @return {*} 数据的类型，字符串格式，小写：element、string、number、boolean、object……
 */
const dataType = (data) => {
  if (data instanceof Element) {
    return 'element'
  }
  if (data instanceof File) {
    return 'file'
  }
  if (typeof data === 'symbol') {
    return 'symbol'
  }
  const obj = {
    '[object String]': 'string',
    '[object Number]': 'number',
    '[object Boolean]': 'boolean',
    '[object Object]': 'object',
    '[object Array]': 'array',
    '[object Function]': 'function',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
  }
  return obj[Object.prototype.toString.call(data)] || '暂未定义，请在工具类的dataType方法中添加'
}

/**
 * @description: 数据深拷贝，支持Symbal，data:各种类型的数据
 * @param {*} data: 源数据，必传
 * @param {*} params:对象格式，非必传
 * {
 * isFilterStringSpace 是否过滤字符串首尾的空格，非必传，默认false
 * isFilterObjectParams 是否过滤对象的空属性：null、undefined、''、[]、{}，非必传，默认false
 * isDeleteOssParams 是否删除oss资源带的参数，非必传，默认false
 * }
 * @return {*} 深拷贝后的数据
 */
const copyDeep = (data, params = {}) => {
  const {
    isFilterStringSpace = false,
    isFilterObjectParams = false,
    isDeleteOssParams = false,
  } = params
  let newData = null
  const type = dataType(data)

  if(type === 'string') {
    if(isFilterStringSpace) {
      newData = data.replace(regExpSpace, '')
    }
    if(isDeleteOssParams && newData.indexOf('https://tiaofangzi.oss-cn-beijing.aliyuncs.com/') === 0) {
      newData = data.split('?')[0]
    }
  }else if(type === 'array' || type === 'object') {
    newData = type === 'array' ? [] : {}
    // 返回可枚举和Symbol类型的属性的键
    let proto = [ ...Object.keys(data), ...Object.getOwnPropertySymbols(data) ]
    proto.forEach((key) => {
      if(isFilterObjectParams && type === 'object') {
        const _type = dataType(data[key])
        if (_type === 'null' || _type === 'undefined' || (_type === 'string' && data[key].replace(regExpSpace, '') === '') || (_type === 'array' && data[key].length === 0) || (_type === 'object' && Object.keys(data[key]).length === 0)) {
          // 由于是从对象的外往里层层递归，所以当里层的对象为{}时，外层的对象此时即使为{}，也不会删除该键值对。
          // 如：{a: { b: undefined }, x: 1}，转换后为：{a:{}, x: 1}，而不是：{x: 1}
          return null
        }
      }
      newData[key] = copyDeep(data[key], params)
    })

  }else{
    newData = data
  }
  return newData
}

/**
 * @description: 将对象过滤掉没有意义的属性并转化为链接的search部分
 * @param {*} obj: 需要过滤的对象，必传
 * @return {*} 链接的search部分，字符串格式
 */
const paramsToSearch = (obj) => {
  const params = copyDeep(obj, { isFilterStringSpace: true, isFilterObjectParams: true })
  const searchArray = Object.keys(params).map((item, index) => {
    if(index === 0) {
      return `?${ item }=${ params[item] }`
    }else{
      return `&${ item }=${ params[item] }`
    }
  })
  return searchArray.join('')
}

/**
 * @description: 网址或者字符串获取参数
 * @param {*} url: 非必传，默认是网址
 * @return {*} 对象格式的参数
 */
const searchToParams = (url) => {
  const str = decodeURIComponent(url || location.href)
  const urlParams = str.split('?')
  const query = {}
  if (urlParams[1]) {
    const paramsItem = urlParams[1].split('&')
    for (const i in paramsItem) {
      const arr = paramsItem[i].split('=')
      query[arr[0]] = arr[1]
    }
  }
  return query
}

export {
  dataType,
  copyDeep,
  paramsToSearch,
  searchToParams,
}