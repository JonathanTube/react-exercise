import React from "react"
import Child1Component from "./demo23.child1.classcomponent"
import Child2Component from "./demo23.child2.classcomponent"
import MyContext from "./demo23.context"
export default class ParentComponent extends React.Component {
  state = {
    val1: 0,
    val2: 0,
  }

  changeVal1 = () => {
    this.setState({
      ...this.state,
      val1: this.state.val1 + 1,
    })
  }

  changeVal2 = () => {
    this.setState({
      ...this.state,
      val2: this.state.val2 + 1,
    })
  }

  render() {
    let { val1, val2 } = this.state
    return (
      <div>
        <MyContext.Provider value={{ val1, val2 }}>
          <Child1Component />
          <Child2Component />
          <div>
            <button onClick={this.changeVal1}>increase val1</button>
            <button onClick={this.changeVal2}>increase val2</button>
          </div>
        </MyContext.Provider>
      </div>
    )
  }
}
