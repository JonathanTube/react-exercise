import React from "react"
import { flushSync } from "react-dom"
class Demo extends React.Component {
  state = {
    x: 0,
  }
  // 执行顺序：setState => shouldComponentUpdate() =>
  //                      componentWillUpdate() =>
  //                      render() =>
  //                      componentDidUpdate() =>
  //                      setState内的callback()
  handle = () => {
    let { x } = this.state
    console.log(
      "在React18中，setState是异步操作，有一套异步更新操作",
      "调用多次setState会放入队列，最终进行批处理，降低视图更新次数，提高渲染性能。",
      "只在一次执行批次中是异步的，但是如果有异步setState那就会被拆分为两次"
    )
    this.setState(
      {
        x: x + 1,
      },
      () => {
        console.log(
          "当更新了state.x后，视图更新完毕(componentDidUpdate执行完毕)，这个回调方法就会执行"
        )
      }
    )
    // 打破异步，强制执行刷新
    // 在flushSync操作结束后，会立即“刷新”updater更新队列
    flushSync(() => {
      this.setState({ x: 0 })
    })
    // 单独写也行，那之前的setState都会被强制优先执行
    flushSync()
    // 这里用的是函数，与直接设置值的差别在于：
    // 这里执行函数，每次放入updater队列中是函数，每次队列批量更新时，每个函数都会被执行，
    // 而不像直接设值每次设值后，不会立刻更新，这种会解决多次setState的问题
    this.setState((preState) => {
      return {
        x: preState.x + 1,
      }
    })
    // 这里是一个延迟操作，与主函数中的setState不是同一个时间执行，所以render()会分别执行两次。
    setTimeout(() => {
      this.setState({ x: x + 2 }, () => {
        // 在react18中这个是异步的，在react16中是同步的。
        console.log("这个在setTimeout中，所以这里单独又会再渲染一次")
      })
      console.log(x) // 如果是React18,那是先输出旧值，再赋值；如果是React16是先输出累加值，后渲染（同步）
    }, 1000)
  }
  shouldComponentUpdate() {
    // 当shouldComponentUpdate返回false时，组件不会被更新，componentDidUpdate方法也不会执行
    // 但是setState的callback方法还是会被执行
    // 也就是不管怎么说，setState只要被执行了，callback一定会被执行
    console.log("shouldComponentUpdate")
    return true
  }
  componentDidUpdate() {
    console.log("组件更新完毕,componentDidUpdate")
  }
  render() {
    let { x } = this.state
    return (
      <div>
        <span>{x}</span>
        <button onClick={this.handle}>add x</button>
      </div>
    )
  }
}

export default Demo
