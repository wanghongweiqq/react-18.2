/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: setState的同步和异步
 * @FilePath: /react-18.2/src/view/Doc/Init.js
 */

import React, { Component } from 'react'
import { flushSync } from 'react-dom'
class SetState extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
      count2: 0,
    }

  }

  componentDidMount () {
    // document.body.addEventListener('click', () => {
    //   this.setState({ count: 1 })
    //   console.log(this.state.count)
    // })
    // document.querySelector('#btn-add').addEventListener('click', this.changeVal, false)
    // document.getElementById('btn-add').addEventListener('click', this.changeVal, false)
  }
  changeVal = () => {
    this.setState({ count: this.state.count + 1 })
    console.log('count:', this.state.count)
  }

  handleAdd = () => {
    flushSync(() => { // synchronization-同步
      this.setState({ count: this.state.count + 1 })
      this.setState({ count2: this.state.count2 + 2 })
      console.log('count:', this.state.count)
    })
    console.log('flushSync-count:', this.state.count)
    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log('count回调:', this.state.count)
    // })
    // this.setState((prev) => {
    //   return{ count: prev.count + 1 }
    // })
    // console.log('函数式更新:', this.state.count)
    // this.setState({ count: this.state.count + 1 })
    // this.setState({ count2: this.state.count2 + 2 })
    // console.log('count:', this.state.count)
    // setTimeout(() => {
    //   // this.setState({ count: this.state.count + 1 })
    //   this.setState({ count: this.state.count + 1 }, () => {
    //     console.log('count回调:', this.state.count)

    //   })
    //   console.log('count:', this.state.count)
    // }, 5000)
  }
  render () {
    console.log('render')
    const{ count, count2 } = this.state
    return(
      <div className='pg-doc'>
        <h1>setState的同步和异步</h1>
        <p>count:{count}</p>
        <p>count2:{count2}</p>
        <p>
          <button onClick={this.handleAdd}>合成事件 +1</button>
          <button id='btn-add' >原生事件 +1</button>
        </p>
      </div>
    )
  }
}

export default SetState

