import React, {
  useEffect,
  forwardRef,
  useRef,
  useState,
  useImperativeHandle,
  createRef,
} from "react"

const Child = forwardRef((props, ref) => {
  const [val, setVal] = useState(0)
  const button = useRef(null)

  const handle = () => {
    setVal(val + 1)
  }

  // 使用useImperativeHandle，可以返回子组件内的任何内容
  // 可以选择性的暴露组件内的方法和属性
  useImperativeHandle(ref, () => {
    return {
      button,
      val,
      handle,
    }
  })

  return (
    // 如果ref绑定了，那返回的只有dom对象，
    // 需要结合useImperativeHandle解决
    <button ref={button} onClick={handle}>
      {val}
    </button>
  )
})

export default function Demo() {
  let child = useRef(null)
  useEffect(() => {
    console.log(child)
  }, [])

  // 通过在子组件中使用useImperativeHandle将方法暴露出来
  // 使用child.current.methodName()，调用子组件中的方法
  const handle = () => {
    child.current.handle()
  }

  return (
    <>
      <button onClick={handle}>调用组件内方法</button>
      <Child ref={child} />
    </>
  )
}
