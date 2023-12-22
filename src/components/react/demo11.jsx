// usestate: React Hook函数之一，目的是在函数组件中使用状态，并且后期基于状态的修改，可以让组件更新let [num,setNum] = useState(initialValue);
// + 执行usestate，传递的initialValue是初始的状态值
// 执行这个方法，返回结果是一个数组:[状态值，修改状态的方法]+
// + num变量存储的是: 获取的状态值
// + setNum变量存储的是: 修改状态的方法
// 执行 setNum(value)十
// + 修改状态值为value
// + 通知视图更新函数组件或者Hooks组件，不是类组件，所以没有实例的概念调用组件不再是创建类的实例，而是把函数执行，产生一个私有上下文而已]，再所以，在函数组件中不涉及this的处理! !

import React, { useState } from "react"
import { flushSync } from "react-dom"

export default function Demo() {
  console.log("render")
  let [num, setNum] = useState(0)
  let [val, setVal] = useState(0)

  const handle = () => {
    // flushSync(() => {
    //   setNum(num + 10)
    // })
    // setVal(val + 1)
    setTimeout(() => {
      setNum(num + 10)
      setVal(val + 1)
    }, 1000)
  }

  return (
    <div>
      <div>{num}</div>
      {/* 这里注意不是Class Component中的this.handle了，这里没有this作用域 */}
      <button onClick={handle}>click me</button>
    </div>
  )
}
