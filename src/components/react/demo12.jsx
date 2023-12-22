import React, { useState } from "react"

const Child = (props) => {
  console.log("函数被执行")
  let { x, y } = props
  let [val, setVal] = useState(() => {
    // 将复杂的初始话逻辑放在函数中
    // 每次函数被重新执行，就无需再次计算了
    console.log("这里只会被执行一次")
    return x + y
  })

  const handle = () => {
    setVal(Math.random())
  }

  return (
    <>
      <div>{val}</div>
      <button onClick={handle}>click me</button>
    </>
  )
}

export default function Demo() {
  return <Child x={1} y={2} />
}
