/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2025-05-20 14:08:30
 * @Description: 页面/组件/功能的描述
 * @FilePath: /react-18.2/src/view/Doc/Popover.js
 */
import React, { useEffect } from'react'
import Popover from './PopoverCP'

const PopoverDemo = () => {
  // 笔试题目2

  /**
   * @description: 问题2
   * @param {*} data 源数据
   * @param {*} interval 间隔区间
   * @return {*} 在间隔区间内的分段二维数组
   */
  function question2 (data, interval = 10) {
    let arr = [ ...new Set(data) ]
    arr.sort((a, b) => a - b)
    let result = [ ] // 转化后的结果
    let resultIndex = 0 // 记录结果的索引值
    for(let i = 0; i < arr.length; i++) {
      if(i === 0) { // 第一个
        result[resultIndex] = []
        result[resultIndex].push(arr[i])
      }else{
        const itemWeiShuJian1 = Math.floor(arr[i] / interval) // 支持的范围有限：arr[i].toString().slice(0, -1) || '0'
        const itemPrevWeiShuJian1 = Math.floor(arr[i - 1] / interval)
        if(Number(itemWeiShuJian1) > Number(itemPrevWeiShuJian1)) {
          resultIndex ++
          result[resultIndex] = []
        }
        result[resultIndex].push(arr[i])
      }
    }
    console.log('题目2')
    console.log('元数据', data)
    console.log('去重排序数据', arr)
    console.log('结果', JSON.stringify(result))
  }

  // 问题4
  function question4 () {
    // 创建Worker实例
    const worker = new Worker('http://me.tiaofangzi.com:3000/worker.js')
    // 监听计算结果
    worker.onmessage = (e) => {
      console.log(`文件大小：${ e.data.size } 字节`)
      // worker.terminate()
    }
    // 选择文件后启动处理
    document.querySelector('input[type="file"]').addEventListener('change', (e) => {
      const file = e.target.files[0]
      // console.log('file.size', file.size)
      // 创建Worker实例
      // const worker = new Worker('http://me.tiaofangzi.com:3000/worker.js')
      // 传递消息
      worker.postMessage(file)
      // 监听计算结果
      // worker.onmessage = (e) => {
      //   console.log(`文件大小：${ e.data.size } 字节`)
      //   // worker.terminate()
      // }
    })
  }

  useEffect(() => {
    // const randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
    const data = [ 2, 10, 3, 4, 5, 11, 10, 11, 20 ] // 源数据
    // question2(data, 10)
    question4()
  }, [])

  const contentHtml = () => {
    return <div>
      <h3>标题</h3>
      <p>内容</p>
    </div>
  }
  return (
    <div>
      <input type='file' id='fileInput' />
      <Popover
        content={contentHtml()}
        getPopoverContainer={() => {
          return document.querySelector('.ly-title')
        }}>
        <p>1111111<button>点击我</button>2222222</p>
        {/* <button>点击我</button> */}
      </Popover>
    </div>
  )
}

export default PopoverDemo