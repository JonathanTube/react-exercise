import React from "react"
import MyContext from "./demo23.context"
export default class ChildComponent extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => {
          return <div>{context.val2}</div>
        }}
      </MyContext.Consumer>
    )
  }
}
