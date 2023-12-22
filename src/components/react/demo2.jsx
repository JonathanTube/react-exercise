import React from "react"

// 函数组件直接使用ref会报错
const FunctionalComponentChild = () => {
  return <div>functional component</div>
}

// 将函数组件包在React.forwardRef中使用
const FunctionalComponentChild2 = React.forwardRef(
  function FunctionalComponentChild2(props, ref) {
    return (
      <>
        <div ref={ref}>将函数组件包在React.forwardRef中使用</div>
      </>
    )
  }
)

class Child extends React.Component {
  state = {
    x: 1,
    y: 2,
  }
  render() {
    return <div>这是子组件</div>
  }
}

export default class Demo extends React.Component {
  div3 = React.createRef()
  render() {
    return (
      <>
        <Child ref={(dom) => (this.child1 = dom)}></Child>
        <FunctionalComponentChild ref={(dom) => (this.child2 = dom)} />
        <FunctionalComponentChild2 ref={(dom) => (this.child3 = dom)} />
      </>
    )
  }
  componentDidMount() {
    // 可以拿到类组件的对象
    console.log(this.child1)
    // 函数组件上直接使用ref，会报错
    console.log(this.child2)
    // 使用React.forwardRef包裹functional component后，就可以只用ref了
    console.log(this.child3)
  }
}
