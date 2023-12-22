import React, {
  createRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react"

class ChildClassComponent extends React.Component {
  render() {
    let { title } = this.props
    return <div>{title}</div>
  }
}

// useRef和createRef都可以在类组件和函数组件上使用
// 但是函数组件必须使用forwardRef转换一下类组件
const ChildFunctionalComponent = forwardRef((props, ref) => {
  return (
    // 绑定父级元素的ref，就可以在父级渠道这个div的dom了
    <>
      <div id="myId1" ref={ref}>
        child2
      </div>
      {/* 好像只能绑一个，同时，后面一个会冲掉前面的 */}
      {/* <div id="myId2" ref={ref}>
        child2
      </div> */}
    </>
  )
})

// 函数组件不管使用createRef还是useRef都需要使用forwardRef包装一下
// 否则报错
const ChildFunctionalComponentWithoutForwardRef = (props, ref) => {
  let { title } = props
  return (
    <div id="myId3" ref={ref}>
      {title}
    </div>
  )
}

export default function Demo() {
  let childWithLocalVariable1 = null
  let childWithLocalVariable2 = null
  // useRef重要特点：对于函数组件来说
  // 每次执行都是同一个useRef
  // 效率更高!!!
  let childClassComponentWithUseRef = useRef()
  let childClassComponentWithCreateRef = createRef()

  let childFunctionalComponentWithCreateRef = createRef()
  let childFunctionalComponentWithUseRef = useRef()

  //   let childFunctionalComponentWithoutForwardRef = createRef()

  useEffect(() => {
    console.log(childWithLocalVariable1)
    console.log(childWithLocalVariable2)
    console.log(childClassComponentWithUseRef)
    console.log(childClassComponentWithCreateRef)
    console.log(childFunctionalComponentWithCreateRef)
    console.log(childFunctionalComponentWithUseRef)
  }, [])
  return (
    <div>
      <ChildClassComponent
        ref={childWithLocalVariable1}
        title="直接使用局部变量，这种方式拿到的会是null"
      />

      <ChildClassComponent
        ref={(x) => (childWithLocalVariable2 = x)}
        title="直接使用局部变量，这种方式可以拿到dom对象"
      />

      <ChildClassComponent
        ref={childClassComponentWithUseRef}
        title="childClassComponentWithUseRef"
      />
      <ChildClassComponent
        ref={childClassComponentWithCreateRef}
        title="childClassComponentWithCreateRef"
      />

      <ChildFunctionalComponent
        ref={childFunctionalComponentWithCreateRef}
        title="childFunctionalComponentWithCreateRef"
      />
      <ChildFunctionalComponent
        ref={childFunctionalComponentWithUseRef}
        title="childFunctionalComponentWithUseRef"
      />

      {/* <ChildFunctionalComponentWithoutForwardRef ref={childFunctionalComponentWithoutForwardRef} /> */}
    </div>
  )
}
