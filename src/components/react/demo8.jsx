import React, { useEffect } from "react"

class ClassComponent extends React.Component {
  render() {
    // 只要父级修改了props中的值，这个就会被重新渲染
    console.log("1.class component was rendered.")
    let { title } = this.props
    return <div>class component is：{title}</div>
  }
  componentDidUpdate() {
    // 每次props中的值修改后，这个就会被执行
    console.log("============class component did update")
  }
}
class PureComponent extends React.PureComponent {
  render() {
    // 只有第一次加载
    // 和props中的值有变化,或者父组件的state变化，这个才会执行
    // 这里比较的title的shallow compare
    console.log("2.pure component was rendered.")
    let { title } = this.props
    return <div>pure component is：{title}</div>
  }
  componentDidUpdates() {
    // 传入的props值变化后，或者父组件的state变化，这个就会每次被执行
    console.log("============pure component did update")
  }
}
export default class Parent extends React.Component {
  state = {
    title: "default title"
  }
  changeTitle = () => {
    this.setState({
      title: "a new Title"
    })
  }
  changeValue = () => {
    this.setState({
      value: 100
    })
  }
  render() {
    return (
      <>
        <ClassComponent title={this.state.title} />
        <PureComponent title={this.state.title} />
        <button style={{ backgroundColor: "red" }} onClick={this.changeTitle}>
          change props.title
        </button>
        <button style={{ backgroundColor: "blue" }} onClick={this.changeValue}>
          change state.value
        </button>
      </>
    )
  }
}
