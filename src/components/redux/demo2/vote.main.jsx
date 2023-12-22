import React from "react"
import { connect } from "react-redux"

const Main = (props) => {
  let { supportNum, disapprovalNum } = props
  return (
    <div>
      <div>支持数：{supportNum}</div>
      <div>反对数：{disapprovalNum}</div>
    </div>
  )
}
export default connect((state) => {
  return {
    ...state.vote,
  }
}, null)(Main)
