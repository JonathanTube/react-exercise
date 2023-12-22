import React from "react"
export default class Demo extends React.Component {
  div3 = React.createRef()
  render() {
    return (
      <div>
        <div ref="div1">使用this.refs.div1获取到</div>
        <div ref={(currentDOM) => (this.div2 = currentDOM)}>
          可以使用ref后的函数复制actualDOM
        </div>
        <div ref={this.div3}>
          可以使用React.createRef()创建ref对象后,将当前dom复制给它
        </div>
      </div>
    )
  }
  componentDidMount() {
    console.log(this)
    // 这时候virtualDOM已经传唤为actualDOM,可以获取actualDOM了
    console.log(this.refs.div1) // 如果开启了<React.strictMode>会报错
    console.log(this.div2)
    console.log(this.div3.current)
  }
}
