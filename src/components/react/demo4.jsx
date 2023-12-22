import React from "react"

class Demo extends React.Component {
  /**
   * 这种方式获取到的this=undefined
   */
  handle1() {
    console.log("this=", this)
  }
  /**
   * 经过bind处理，最后一个实参是合成事件对象SyntheticBaseEvent
   * 可以获得到nativeEvent，也就是原生事件对象
   * @param {*} param
   * @param {*} event
   */
  handle2(param, event) {
    console.log("param=", param)
    console.log("event=", event)
    console.log("this=", this)
  }
  /**
   * 箭头函数默认this就是Demo的上下文
   */
  handle3 = () => {
    console.log("this=", this)
  }
  /**
   * 当箭头函数需要传递额外参数时，也可以用bind
   * @param {*} param
   * @param {*} event
   */
  handle4 = (param, event) => {
    console.log("param=", param)
    console.log("event=", event)
    console.log("this=", this)
  }
  render() {
    return (
      <div>
        <button onClick={this.handle1}>这种方式获取到的this=undefined</button>
        <br />
        <button onClick={this.handle2.bind(this, { x: 1 })}>
          绑定this上下文，经过bind处理，最后一个实参是合成事件对象
        </button>
        <br />
        <button onClick={this.handle3}>箭头函数默认this就是Demo的上下文</button>
        <br />
        <button onClick={this.handle4.bind(this, { y: 1 })}>
          当箭头函数需要传递额外参数时，也可以用bind
        </button>
      </div>
    )
  }
}

export default Demo
