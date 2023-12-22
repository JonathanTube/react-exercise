import React from "react"
class Child extends React.Component {
  render() {
    let { children } = this.props
    // react组件中的children可能是一个数组也可能是一个对象，
    // 这里使用现成的API转换为数组
    children = React.Children.toArray(children)
    let childTop = []
    let childDefault = []
    let childBottom = []
    // 循环children
    children.forEach((child) => {
      // 根据slot类型，不同位置进行渲染
      let { slot, children } = child.props
      switch (slot) {
        case "top":
          childTop.push(children)
          break
        case "bottom":
          childDefault.push(children)
          break
        default:
          childBottom.push(children)
          break
      }
    })
    return (
      <div>
        <div>{childTop}</div>
        <div>{childDefault}</div>
        <div>{childBottom}</div>
      </div>
    )
  }
}

export default class Parent extends React.Component {
  render() {
    return (
      <div>
        <Child>
          {/* 添加props.slot属性 */}
          <div slot="top">top content</div>
          <div>default content from slot</div>
          <div slot="bottom">bottom content</div>
        </Child>
      </div>
    )
  }
}
