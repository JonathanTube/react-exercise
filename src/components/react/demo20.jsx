import React, { useEffect, useState } from "react"

/**
 * 自定义Hook，封装useState,支持对象类型，部分状态修改
 *
 * @param {*} initialValue
 * @returns
 */
const useMyHook = (initialValue) => {
  const [val, setVal] = useState(initialValue)
  // 重写了set方法
  const setMyValue = (newValue) => {
    setVal({
      ...val,
      ...newValue,
    })
  }
  let myValue = val
  // 这里要返回
  return [myValue, setMyValue]
}

/**
 * 自定义useEffect
 * 类似与vue的mixins
 *
 * @param {*} name
 */
const useMyEffect = (name) => {
  useEffect(() => {
    console.log(`${name} says hello`)
  }, [])
}

export default function Demo() {
  useMyEffect("Jonathan")

  // use开头的，react会校验，会报错
  //   if (1 == 1) {
  //     useMyEffect("Zhang")
  //   }

  const [myValue, setMyValue] = useMyHook({
    x: 0,
    y: 99,
  })

  const handle = function () {
    setMyValue({ x: myValue.x + 1 })
  }

  return (
    <div>
      <div>x:{myValue.x}</div>
      <div>y:{myValue.y}</div>
      <button onClick={handle}>click me</button>
    </div>
  )
}
