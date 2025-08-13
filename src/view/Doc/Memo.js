/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-05-31 17:09:10
 * @Description: 性能优化
 * @FilePath: /react-18.2/src/view/Doc/Memo.js
 */
import React, { memo, useState, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'

// Child1 未使用memo优化，每次都被渲染
const Child1 = () => <div>{console.log('1子组件渲染，未使用memo优化，每次都被渲染')}</div>
// Child2 虽然定义子组件时，没有关于属性的入参，但只要使用的地方定义的属性发生了改变就会被重复渲染
const Child2 = memo(function Child2 () { return(<div>{console.log('2子组件渲染，虽然定义组件时，没有关于属性的入参，但只要使用的地方定义的属性发生了改变就会被重复渲染')}</div>) })

// Child3 为定义子组件时正常入参的示例
const Child3 = memo(
  function Child3 ({ number, flag }) {
    return(<div>{console.log('3子组件渲染，定义组件时正常入参，使用的地方定义了属性', flag, number)}</div>)
  }, (prev, next) => {
    console.log('一般不用写这第二个入参')
    console.log(prev)
    console.log(next)
  },
)
Child3.propTypes = {
  number: PropTypes.array,
  flag: PropTypes.bool,
}

// Child4 为子组件使用的地方未定义属性
const Child4 = memo(function Child4 () { return(<div>{console.log('4子组件渲染，使用的地方未定义属性')}</div>) })

// Child5 子组件执行父组件定义的方法，父组件没使用useCallback
const Child5 = ({ add }) => (
  <>
    {add()}
  </>
)
Child5.propTypes = { add: PropTypes.func }

// Child6 子组件执行父组件定义的方法，父组件使用了useCallback
const Child6 = memo(function Child6 ({ add }) {
  return (
    <>
      {add()}
    </>
  )
})
Child6.propTypes = { add: PropTypes.func }

// Child7
const Child7 = memo(function Child7 ({ result }) {
  console.log(`7子组件渲染，定义组件时使用了memo，其属性值是计算的结果，可以用箭头函数返回或者用useMemo返回相应的值，本示例其值为${ result }`)
  return(<p>{result}</p>)
})
Child7.propTypes = { result: PropTypes.number }

const Parent = () => {
  const [ number, setNumber ] = useState([ 1, 2 ])
  const [ flag, setFlag ] = useState(false)
  const [ name, setName ] = useState('')
  const [ age, setAge ] = useState(0)

  // 未使用 useMemo 缓存计算的结果
  const computeResult1 = () => {
    // 模拟需要花费时间的大量计算
    let number = 0
    for(let i = 0; i < 100; i++) {
      number = number + i
    }
    console.log('未使用useMemo，进行了大量计算')
    return number
  }
  // 使用 useMemo 缓存计算的结果
  const computeResult2 = useMemo(() => {
    let number = 0
    for(let i = 0; i < 100; i++) {
      number = number + i
    }
    console.log('使用了useMemo，进行了大量计算')
    return number
  }, [ ])// 第二个参数deps为空数组时，只在初始话时执行一次，以后不再执行
  const getResult1 = () => {
    console.log('需要传入子组件的计算属性值，使用的箭头函数')
    const res = Math.round(Math.random() * 10)
    console.log(res)
    return res
  }
  const getResult2 = useMemo(() => {
    console.log('需要传入子组件的计算属性值，使用的useMemo')
    const res = Math.round(Math.random() * 10)
    console.log(res)
    return res
  }, [ age ])

  const add = () => {
    console.log('传入子组件的函数1，未使用useCallback')
  }
  // 我们使用了 useCallback 对 add 进行了缓存，且依赖项是不会改变的name，但是当点击按钮更改 age 后，控制台同样会打印出信息，此时子组件同样重新渲染了，这是为什么呢？
  // 原来，单独使用 useCallback 起不到优化的作用，反而会增加性能消耗，需要和 memo 一起使用
  const add2 = useCallback(() => {
    console.log('传入子组件的函数2，使用了useCallback，子组件未使用memo')
  }, [ name ])

  const add3 = useCallback(() => {
    console.log('传入子组件的函数3，使用了useCallback，子组件使用了memo')
  }, [ name ])

  return (
    <div className='pg-doc'>
      <h1>memo、useMemo、useCallback 三个性能优化的API</h1>
      <h2>memo</h2>
      <h3>memo 的作用</h3>
      <p>在 React 的渲染流程中，一般来说，父组件的某个状态发生改变，那么父组件会重新渲染，父组件所使用的所有子组件，都会强制渲染。而在某些场景中，子组件并没有使用父组件传入的没有发生更改的状态时，子组件重新渲染是没有必要的。因此有了 React.memo</p>
      <h3>memo 的使用</h3>
      <p>memo 是个高阶组件， 结合了 PurComponent 和 shouldComponentUpdate 功能，会对传入的 props 进行浅比较，来决定是否更新被包裹的组件</p>
      <p>memo 接受两个参数：</p>
      <p>1、WrapComponent：你要优化的组件</p>
      <p>2、(prev, next) =&gt; boolean：通过对比 prev（旧 props），next（新 props）是否一致，返回 true（不更新）、false（更新）</p>
      <p>注意：memo 只针对 props 来决定是否渲染，且是浅比较</p>
      <p>只要使用组件的地方定义了属性props，哪怕定义该组件的方法里没有该属性的入参，也会进行浅比较进而决定是否重新渲染</p>
      <p>总而言之，如果组件被 memo 包裹，那么组件的 props 不发生改变时，组件不会重新渲染。这样，我们合理的使用 memo 就可以为我们的项目带来很大的性能优化。</p>
      <h3>memo 示例如下：</h3>
      <Child1 />
      <Child2 number={number} />
      <Child3 flag={flag} number={number} />
      <Child4 />
      <button
        onClick={() => {
          setFlag(!flag)
          const pushNum = Math.round(Math.random() * 10)
          // number.push(pushNum)// 浅拷贝，没有造成地址的改变，不会导致组件重新渲染，但如果同组件其他属性改变，如flag改变，会造成其值的正确展示
          setNumber([ ...number, pushNum ]) // 深拷贝
        }}
      >
        点击查看子组件是否重复渲染，flag：{flag ? '显示' : '隐藏'}
      </button>
      <h3>memo 是否用的越多越好</h3>
      <p>既然 memo 可以对组件进行性能优化，那能不能所有组件都用 memo 包裹呢？</p>
      <p><em>答案肯定是否定的。</em></p>
      <p><em>因为缓存本身也是需要开销的。</em>如果每一个组件都用 memo 去包裹一下，那么对浏览器的开销就会很大，本末倒置了。所以我们应该选择性的用 memo 包裹组件，而不是滥用。</p>

      <h2>useMemo</h2>
      <h3>useMemo 的作用</h3>
      <p>useMemo 它可以缓存一个结果，当这个缓存结果不变时，就不会重新渲染，可以借此来进行性能优化。</p>
      <p>useMemo定义的变量不是一个方法，而是一个结果，不可以使用()</p>
      <p> {computeResult1()}</p>
      <p> {computeResult2}</p>
      <p>以下示例点击按钮“useCallback点击查看子组件是否重复渲染，age：”触发</p>
      <Child7 result={getResult1()} />
      <Child7 result={getResult2} />

      <h3>useMemo 的使用</h3>
      <p>useMemo 接受两个参数：。</p>
      <p>callback：计算结果的执行函数</p>
      <p>deps：相关依赖项数组</p>
      <p>最终 useMemo 在执行了 callback 后，返回一个结果，这个结果就会被缓存起来。当 deps 依赖发生改变的时候，会重新执行 callback 计算并返回最新的结果，否则就使用缓存的结果，有点类似于VUE计算属性的意思computed</p>

      <h2>useCallback</h2>
      <h3>useCallback 的作用</h3>
      <p>useCallback 类似于 useMemo，只不过 useCallback 用于缓存函数罢了，同样可以防止无关的刷新，对组件做出性能优化</p>
      <h3>useCallback 的使用</h3>
      <p>useCallback 接受两个参数：。</p>
      <p>callback：传入子组件的函数</p>
      <p>deps：相关依赖项数组</p>
      <p>最终 useCallback 会把传入的 callback 缓存起来。当 deps 依赖发生改变的时候，会重新缓存最新的 callback ，否则就使用缓存的结果</p>

      <Child5 add={add} />
      <Child5 add={add2} />
      <Child6 add={add3} />

      <button
        onClick={() => {
          setAge(Math.round(Math.random() * 10))
        }}
      >
        useCallback点击查看子组件是否重复渲染，age：{age}
      </button>

      <p>&lt;Child5 add=&#123;add2&#125; &#47;&gt; 我们使用了 useCallback 对 add 进行了缓存，且依赖项是不会改变的name，但是当点击按钮更改 age 后，控制台同样会打印出信息，此时子组件同样重新渲染了，这是为什么呢？</p>
      <p>原来，单独使用 useCallback 起不到优化的作用，反而会增加性能消耗，需要和 memo 一起使用，如示例：&lt;Child6 add=&#123;add3&#125; &#47;&gt;</p>

      <h2>总结</h2>
      <h3>memo</h3>
      <p>父组件重新渲染，没有被 memo 包裹的子组件也会重新渲染</p>
      <p>被 memo 包裹的组件只有在 props 改变后，才会重新渲染</p>
      <p>memo 只会对新旧 props 做浅比较，所以对于引用类型的数据如果发生了更改，需要返回一个新的地址</p>
      <p>memo 并不是用的越多越好，因为缓存本身也是需要开销的。如果每一个组件都用 memo 去包裹一下，那么对浏览器的开销就会很大，本末倒置了</p>
      <p>项目中可以针对刷新频率高的组件，根据实际情况，使用 memo 进行优化</p>

      <h3>useMemo</h3>
      <p>useMemo 是对计算的结果进行缓存，当缓存结果不变时，会使用缓存结果</p>
      <p>useMemo 并不是用的越多越好，对于耗时长、性能开销大的地方，可以使用 useMemo 来优化，但大多数情况下，计算结果的开销还没有使用 useMemo 的开销大，应视情况而定</p>
      <p>当父组件传了一个引用类型的结果 result 给子组件，且子组件用 memo 包裹时，需要使用 useMemo 对 result 进行缓存，因为 memo 只对 props 做浅比较，当父组件重新渲染时，会重新在内存中开辟一个地址赋值给 result，此时地址发生改变，子组件会重新渲染</p>

      <h3>useCallback</h3>
      <p>useCallback 与 useMemo 类似，只不过是对函数进行缓存</p>
      <p>useCallback 可以单独使用，但是单独使用的使用对性能优化并没有实质的提升，且父组件此时重新渲染，子组件同样会渲染</p>
      <p>useCallback 需要配合 memo 一起使用，这样当父组件重新渲染时，缓存的函数的地址不会发生改变，memo 浅比较会认为 props 没有改变，因此子组件不会重新渲染</p>
    </div>
  )
}

export default Parent
