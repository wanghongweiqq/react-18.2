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

// 转化为日期格式
const formatToDate = (date) => {
  if(Object.prototype.toString.call(date) === '[object Date]') {
    return date
  }else if(Object.prototype.toString.call(date) === '[object String]' && date !== '') {
    return new Date(date.replace(/-/g, '/'))
  }else if(Object.prototype.toString.call(date) === '[object Number]') {
    return new Date(date)
  }else{
    return null
  }
}

/* 日期格式化
   * 1. date：
   * 字符串格式：'2020/01/01 12:00:00'、'2020-01-01'、'Jan 01 2020 12:00:00'、'Jan 01, 2020'
   * 数字格式（1970/01/01至今毫秒数）：1577808000000
   * 日期格式：new Date(2020,00,01,12,00,0)、new Date(字符串格式/数字格式)
   * 2. reg：
   * [YMDhms]的任意组合形式，但要保证位数对应，注意大小写，因为有两个m
   * reg每个时间节点要有其他字符隔开，时间外的内容不要含这个字符集合中的字母
   * 正确：YYYY-MM-DD hh:mm:ss、YYYY年MM月DD日、YYYYMMDD（做了特殊处理），错误：hhmmss
	*/
const formatDateToString = (date, params = {}) => {
  let { reg = 'YYYY-MM-DD hh:mm:ss', empty = '' } = params
  const time = formatToDate(date)
  const regOriginal = reg
  if(time === null) {
    return empty
  }
  let f = {
    Y: time.getFullYear(),
    M: time.getMonth() + 1,
    D: time.getDate(),
    h: time.getHours(),
    m: time.getMinutes(),
    s: time.getSeconds(),
  }
  if(regOriginal === 'YYYYMMDD') {
    reg = 'YYYY MM DD'
  }
  let result = reg.replace(/([YMDhms])+/g, (v, i) => {
    if (i) {
      let val = '0' + f[i]
      return val.slice(-v.length)
    }
  })
  if(regOriginal === 'YYYYMMDD') {
    result = result.replace(/\s/g, '')
  }
  return result
}

// 日期毫秒数转为日期对象：123334 => { days, hours, minutes, seconds, milliseconds }
const formatMsToObject = (ms) => {
  // 确保输入是数字
  if (typeof ms !== 'number' || isNaN(ms)) {
    return
  }
  const isNegative = ms < 0
  ms = Math.abs(ms)

  const seconds = Math.floor(ms / 1000)
  const days = Math.floor(seconds / 86400)
  const hours = Math.floor((seconds % 86400) / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  return {
    days: isNegative ? -days : days,
    hours: isNegative ? -hours : hours,
    minutes: isNegative ? -minutes : minutes,
    seconds: isNegative ? -remainingSeconds : remainingSeconds,
    milliseconds: isNegative ? -(ms % 1000) : (ms % 1000),
  }
}

// 日期毫秒数转为可读性的字符串形式：123334 => xx天 xx小时 xx分钟
const formatMsToString = (ms, showMilliseconds = false) => {
  const time = formatMsToObject(ms)
  let result = ''

  if (time.days !== 0) {
    result += `${ time.days }天 `
  }
  if (time.hours !== 0 || time.days !== 0) {
    result += `${ time.hours }小时 `
  }
  if (time.minutes !== 0 || time.hours !== 0 || time.days !== 0) {
    result += `${ time.minutes }分钟 `
  }

  if (showMilliseconds) {
    result += `${ time.seconds }.${ time.milliseconds.toString().padStart(3, '0') }秒`
  } else {
    result += `${ time.seconds }秒`
  }

  return result.trim()
}

export {
  dataType,
  copyDeep,
  paramsToSearch,
  searchToParams,
  formatDateToString,
  formatMsToObject,
  formatMsToString,
}