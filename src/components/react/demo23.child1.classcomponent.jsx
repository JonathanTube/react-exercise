import React from "react"
import MyContext from "./demo23.context"
export default class ChildComponent extends React.Component {
  static contextType = MyContext
  render() {
    let { val1 } = this.context
    return <div>{val1}</div>
  }
}
