import React, { useState, memo, PureComponent, useCallback } from "react"

/**
 * child1 每次父组件变化，子都会被执行
 *
 * @param {*} param0
 * @returns
 */
function Child1({ children }) {
  return <div>{children}</div>
}

/**
 * child2在memo内
 * 在不传递任何props或者传递的props浅比较没有变化
 * 只会执行一次
 * 类似于PureComponent
 */
const Child2 = memo(({ children }) => {
  return <div>{children}</div>
})

/**
 * 在不传递任何props或者传递的props浅比较没有变化
 * PureComponent也执行一次
 */
class Child3 extends PureComponent {
  render() {
    let { children } = this.props
    return <div>{children}</div>
  }
}

/**
 * useCallback结合memo使用
 * 让子组件无需每次更新
 */
const Child4 = memo((props) => {
  console.log("执行了")
  let { children } = props
  return <div>{children}</div>
})

export default function Demo() {
  const [val, setVal] = useState(0)

  const handle = () => {
    setVal(val + 1)
  }

  /**
   * 这里注意要写deps
   * 保证每次函数都是同一个内存地址
   */
  const func = useCallback(() => {
    console.log("func")
  }, [])

  return (
    <div>
      <Child1>child1 每次都会被执行</Child1>
      <Child2>child2在memo内,只会执行一次,类似于PureComponent</Child2>
      <Child3>PureComponent和functionalComponent使用memo效果一样</Child3>
      <Child4 func={func}>
        使用memo和useCallback每次保持函数不变，不触发子组件的更新
      </Child4>
      <button onClick={handle}>increase</button>
    </div>
  )
}
