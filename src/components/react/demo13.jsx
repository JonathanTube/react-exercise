import React, { useEffect, useState } from "react"

export default function Demo() {
  let [x, setX] = useState(0)
  // 第一次渲染完毕后，执行callback(等价于componentDidMount)
  // 在组件每一次更新完毕后，也会执行callback(等价于componentDidUpdate)
  useEffect(() => {
    console.group("1=>")
    console.log("初始化会被调用")
    console.log("每次函数执行会被调用")
    console.groupEnd()
  })

  // 只有第一次渲染完毕后，才会执行callback，每一次视图更新完毕后，callback不再执行
  // 类似于componentDidMount
  useEffect(() => {
    console.group("2=>")
    console.log("初始化会被调用")
    console.groupEnd()
  }, [])

  // 第一次渲染完毕会执行callback
  // 当依赖的状态值(或者多个依赖状态中的一个)发生改变，也会触发calback执行
  // 但是依赖的状态如果没有变化，在组件更新的时候，callback是不会执行的
  useEffect(() => {
    console.group("3=>")
    console.log("只有x变化时才会被调用")
    console.groupEnd()
  }, [x])

  // 返回的小函数，会在组件释放的时候执行
  // 如果组件更新，会把上一次返回的小函数执行 可以“理解为”上一次染的组件释放了
  useEffect(() => {
    return () => {
      console.log("下一次函数被执行前才会被调用")
    }
  })

  const handle = () => {
    setX(x + 1)
  }

  return (
    <div>
      <button onClick={handle}>click</button>
    </div>
  )
}
