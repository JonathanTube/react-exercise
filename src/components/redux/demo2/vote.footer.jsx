import React from "react"
import Action from "./store/action"
import { connect } from "react-redux"

class Footer extends React.Component {
  render() {
    let { supportNum, disapprovalNum, support, disapproval } = this.props
    return (
      <div>
        <div>总计人数：{supportNum + disapprovalNum}</div>
        <button onClick={support}>支持</button>
        &nbsp;
        <button onClick={disapproval}>反对</button>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    ...state.vote,
  }
}, Action.vote)(Footer)
